// Auto-log a generation from Higgsfield --json output piped to stdin
// Usage: higgsfield ... --json | node tracker/log-from-json.js "<prompt>" "<model>" "<client>" [rating] [notes]
// Run from project root — paths resolve relative to this script file.
import { google } from 'googleapis';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

const [, , prompt, model, client, rating, notes] = process.argv;

if (!prompt || !model || !client) {
  console.error('Usage: higgsfield ... --json | node tracker/log-from-json.js "<prompt>" "<model>" "<client>" [rating] [notes]');
  process.exit(1);
}

// Read JSON from stdin (Higgsfield --json output)
let raw = '';
for await (const chunk of process.stdin) raw += chunk;

let data;
try {
  data = JSON.parse(raw);
} catch {
  console.error('Failed to parse Higgsfield JSON output. Raw output was:\n', raw);
  process.exit(1);
}

// Extract URL — handle different Higgsfield output shapes
const firstJob = Array.isArray(data) ? data[0] : data;
const outputUrl =
  firstJob?.result_url ||
  (Array.isArray(firstJob?.result_urls) && firstJob.result_urls[0]) ||
  (Array.isArray(data.output) && data.output[0]) ||
  data.url ||
  data.video_url ||
  data.image_url ||
  (Array.isArray(data.outputs) && data.outputs[0]);

if (!outputUrl) {
  console.error('No output URL found in JSON. Full output:\n', JSON.stringify(data, null, 2));
  process.exit(1);
}

const CREDS = JSON.parse(readFileSync(join(__dirname, 'credentials.json'), 'utf8')).installed;
const { sheetId } = JSON.parse(readFileSync(join(__dirname, 'config.json'), 'utf8'));
const token = JSON.parse(readFileSync(join(__dirname, 'token.json'), 'utf8'));

const oauth2Client = new google.auth.OAuth2(CREDS.client_id, CREDS.client_secret, 'http://localhost:3000');
oauth2Client.setCredentials(token);

const sheets = google.sheets({ version: 'v4', auth: oauth2Client });
const date = new Date().toLocaleDateString('en-US', { timeZone: 'America/Los_Angeles' });

const filename = outputUrl.split('/').pop().replace(/^(hf_\d{8}_\d{6}_)([a-f0-9-]{8})[a-f0-9-]+(\.\w+)$/, '$1$2$3');

await sheets.spreadsheets.values.append({
  spreadsheetId: sheetId,
  range: 'Generations!A:G',
  valueInputOption: 'USER_ENTERED',
  requestBody: {
    values: [[date, client, model, prompt, `=HYPERLINK("${outputUrl}","${filename}")`, rating || '', notes || '']]
  }
});

console.log(`Logged: [${client}] ${model} — ${filename}`);
console.log(`URL: ${outputUrl}`);
