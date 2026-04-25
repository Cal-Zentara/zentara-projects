// ================================================================
//  CSE WORKER — Cloudflare Worker proxy for AI Vision APIs
//  Supports: OpenAI (GPT-4o), Google Gemini, Anthropic Claude
//  Used by Cracking & Sealing Est. for AI crack detection
// ================================================================

const ALLOWED_ORIGINS = [
  'https://autobuildcharlie.github.io',
  'https://cal-zentara.github.io',
  'http://localhost',
  'http://127.0.0.1'
];

function corsHeaders(origin) {
  const allowed = ALLOWED_ORIGINS.find(o => origin?.startsWith(o));
  return {
    'Access-Control-Allow-Origin': allowed ? origin : ALLOWED_ORIGINS[0],
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400'
  };
}

// Strip "data:image/jpeg;base64," prefix from a data URL
function dataUrlToBase64(dataUrl) {
  return dataUrl.includes(',') ? dataUrl.split(',')[1] : dataUrl;
}

// ─── OPENAI ────────────────────────────────────────────────────
async function callOpenAI(env, model, messages, maxTokens) {
  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${env.OPENAI_API_KEY}`
    },
    body: JSON.stringify({ model, messages, max_tokens: maxTokens })
  });
  return res.json();
}

// ─── GEMINI ────────────────────────────────────────────────────
function buildGeminiRequest(messages, maxTokens) {
  const systemMsg = messages.find(m => m.role === 'system');
  const userMsgs = messages.filter(m => m.role !== 'system');

  const contents = userMsgs.map(msg => {
    const parts = [];
    const content = msg.content;
    if (typeof content === 'string') {
      parts.push({ text: content });
    } else if (Array.isArray(content)) {
      for (const item of content) {
        if (item.type === 'text') {
          parts.push({ text: item.text });
        } else if (item.type === 'image_url') {
          parts.push({ inline_data: { mime_type: 'image/jpeg', data: dataUrlToBase64(item.image_url?.url || '') } });
        }
      }
    }
    return { role: 'user', parts };
  });

  const req = { contents, generationConfig: { maxOutputTokens: maxTokens } };
  if (systemMsg) {
    const text = typeof systemMsg.content === 'string' ? systemMsg.content : systemMsg.content?.[0]?.text || '';
    req.system_instruction = { parts: [{ text }] };
  }
  return req;
}

async function callGemini(env, model, messages, maxTokens) {
  const req = buildGeminiRequest(messages, maxTokens);
  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${env.GEMINI_API_KEY}`,
    { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(req) }
  );
  const data = await res.json();
  // Normalize to OpenAI format
  const text = data.candidates?.[0]?.content?.parts?.[0]?.text || '';
  const finishReason = data.candidates?.[0]?.finishReason || '';
  const blockReason = data.promptFeedback?.blockReason || '';
  if (!text) {
    const debug = { finishReason, blockReason, error: data.error };
    console.log('Gemini empty response debug:', JSON.stringify(debug));
    return { choices: [{ message: { content: '' } }], _geminiDebug: debug };
  }
  return { choices: [{ message: { content: text } }] };
}

// ─── CLAUDE ────────────────────────────────────────────────────
function buildClaudeRequest(model, messages, maxTokens) {
  const systemMsg = messages.find(m => m.role === 'system');
  const userMsgs = messages.filter(m => m.role !== 'system');

  const claudeMessages = userMsgs.map(msg => {
    const content = msg.content;
    if (typeof content === 'string') return { role: msg.role, content };
    const parts = content.map(item => {
      if (item.type === 'text') return { type: 'text', text: item.text };
      if (item.type === 'image_url') {
        return { type: 'image', source: { type: 'base64', media_type: 'image/jpeg', data: dataUrlToBase64(item.image_url?.url || '') } };
      }
      return null;
    }).filter(Boolean);
    return { role: msg.role, content: parts };
  });

  const req = { model, max_tokens: maxTokens, messages: claudeMessages };
  if (systemMsg) {
    req.system = typeof systemMsg.content === 'string' ? systemMsg.content : systemMsg.content?.[0]?.text || '';
  }
  return req;
}

async function callClaude(env, model, messages, maxTokens, apiKey) {
  const req = buildClaudeRequest(model, messages, maxTokens);
  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey || env.ANTHROPIC_API_KEY,
      'anthropic-version': '2023-06-01'
    },
    body: JSON.stringify(req)
  });
  const data = await res.json();
  // Normalize to OpenAI format
  const text = data.content?.[0]?.text || '';
  return { choices: [{ message: { content: text } }] };
}

// ─── IMAGE PROXY ───────────────────────────────────────────────
// Fetches a Street View Static API image server-side and returns base64.
// This bypasses browser HTTP Referer restrictions on the API key.
async function proxyImage(request, env, headers) {
  try {
    const url = new URL(request.url);
    const imageUrl = url.searchParams.get('url');
    if (!imageUrl) {
      return new Response(JSON.stringify({ error: 'Missing url param' }), {
        status: 400, headers: { ...headers, 'Content-Type': 'application/json' }
      });
    }
    // Only allow Google Maps / Street View URLs
    if (!imageUrl.startsWith('https://maps.googleapis.com/')) {
      return new Response(JSON.stringify({ error: 'URL not allowed' }), {
        status: 403, headers: { ...headers, 'Content-Type': 'application/json' }
      });
    }
    // Replace the client-side API key with the unrestricted server-side key
    const u = new URL(imageUrl);
    if (env.SV_API_KEY) u.searchParams.set('key', env.SV_API_KEY);
    const res = await fetch(u.toString());
    if (!res.ok) {
      return new Response(JSON.stringify({ error: `Upstream ${res.status}` }), {
        status: res.status, headers: { ...headers, 'Content-Type': 'application/json' }
      });
    }
    const buffer = await res.arrayBuffer();
    // Chunked base64 encoding — avoids stack overflow on large images
    const bytes = new Uint8Array(buffer);
    let binary = '';
    const chunkSize = 8192;
    for (let i = 0; i < bytes.length; i += chunkSize) {
      binary += String.fromCharCode(...bytes.subarray(i, i + chunkSize));
    }
    const base64 = btoa(binary);
    const mime = res.headers.get('content-type') || 'image/jpeg';
    return new Response(JSON.stringify({ dataUrl: `data:${mime};base64,${base64}` }), {
      status: 200, headers: { ...headers, 'Content-Type': 'application/json' }
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: e.message }), {
      status: 500, headers: { ...headers, 'Content-Type': 'application/json' }
    });
  }
}

// ─── MAIN ──────────────────────────────────────────────────────
export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin') || '';
    const headers = corsHeaders(origin);

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers });
    }

    // GET /image?url=... — server-side image proxy
    const path = new URL(request.url).pathname;
    if (request.method === 'GET' && path === '/image') {
      return proxyImage(request, env, headers);
    }

    if (request.method !== 'POST') {
      return new Response(JSON.stringify({ error: 'POST only' }), {
        status: 405, headers: { ...headers, 'Content-Type': 'application/json' }
      });
    }

    try {
      const body = await request.json();
      const provider = body.provider || 'openai';
      const model = body.model || 'gpt-4o';
      const messages = body.messages || [];
      const maxTokens = body.max_tokens || 500;
      const apiKey = body.api_key || null;

      let data;
      if (provider === 'gemini') {
        data = await callGemini(env, model, messages, maxTokens);
      } else if (provider === 'claude') {
        data = await callClaude(env, model, messages, maxTokens, apiKey);
      } else {
        data = await callOpenAI(env, model, messages, maxTokens);
      }

      return new Response(JSON.stringify(data), {
        status: 200,
        headers: { ...headers, 'Content-Type': 'application/json' }
      });

    } catch (e) {
      return new Response(JSON.stringify({ error: e.message }), {
        status: 500,
        headers: { ...headers, 'Content-Type': 'application/json' }
      });
    }
  }
};
