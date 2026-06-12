const fs = require('fs');
let h = fs.readFileSync('index.html', 'utf8');

// 1) editor CSS injected before </style>
const css = `
  /* ---- editor ---- */
  .ed{cursor:move;}
  .ed.sel{outline:1.6px dashed var(--terra);outline-offset:4px;}
  .rz,.del{position:absolute;display:none;z-index:20;user-select:none;}
  .ed.sel .rz{display:block;width:13px;height:13px;border-radius:50%;
    background:var(--terra);border:2px solid #fff;right:-8px;bottom:-8px;
    box-shadow:0 1px 4px rgba(0,0,0,.25);cursor:nwse-resize;}
  .ed.sel .del{display:flex;align-items:center;justify-content:center;
    width:20px;height:20px;border-radius:50%;background:#B0584A;color:#fff;
    font-size:15px;line-height:1;font-family:'Inter',sans-serif;
    right:-10px;top:-10px;cursor:pointer;box-shadow:0 1px 4px rgba(0,0,0,.25);}
  [contenteditable="true"]{cursor:text;outline:1.6px solid var(--terra);outline-offset:4px;}
  .toolbar{display:flex;gap:10px;margin-top:6px;}
  .btn.ghost{background:transparent;color:#e9d9cf;border:1px solid #6d574c;}
  .btn.ghost:hover{background:#3a2e27;}
`;
h = h.replace('</style>', css + '\n</style>');

// 2) mark movable elements as editable
const marks = [
  ['class="kicker"', 'class="kicker ed"'],
  ['class="label myth"', 'class="label myth ed"'],
  ['class="myth-line"', 'class="myth-line ed"'],
  ['class="divider"', 'class="divider ed"'],
  ['class="label truth"', 'class="label truth ed"'],
  ['class="truth-line"', 'class="truth-line ed"'],
  ['class="sub"', 'class="sub ed"'],
  ['class="meta"', 'class="meta ed"'],
  ['class="logo-chip"', 'class="logo-chip ed"'],
];
for (const [a, b] of marks) {
  if (!h.includes(a)) throw new Error('marker not found: ' + a);
  h = h.replace(a, b);
}

// 3) toolbar replacing the single download button
const oldControls = `    <button class="btn" onclick="downloadSlide()">Download (1080 × 1080 PNG)</button>
    <div class="note">Square graphic for the Week 1 Trust post.</div>`;
const newControls = `    <div class="toolbar">
      <button class="btn ghost" onclick="resetCard()">Reset</button>
      <button class="btn ghost" onclick="deleteSelected()">Delete selected</button>
      <button class="btn" onclick="downloadSlide()">Download PNG</button>
    </div>
    <div class="note">Click an element to select &nbsp;·&nbsp; drag to move &nbsp;·&nbsp; drag the corner dot to resize &nbsp;·&nbsp; double-click text to edit &nbsp;·&nbsp; Delete key or × to remove</div>`;
if (!h.includes(oldControls)) throw new Error('controls block not found');
h = h.replace(oldControls, newControls);

// 4) replace the whole script
const scriptStart = h.indexOf('<script>', h.indexOf('html2canvas.min.js') + 10);
const scriptEnd = h.indexOf('</script>', scriptStart);
if (scriptStart === -1 || scriptEnd === -1) throw new Error('script block not found');
const before = h.slice(0, scriptStart);
const after = h.slice(scriptEnd + '</script>'.length);

const newScript = `<script>
const slide = document.getElementById('slide');
let sel = null, mode = null, sx = 0, sy = 0, bw = 0, bf = 0, bl = 0, bt = 0;

function pt(e){const r = slide.getBoundingClientRect(); return {x: e.clientX - r.left, y: e.clientY - r.top};}

// freeze every editable element into absolute coords so it can move freely
function freeze(){
  const sr = slide.getBoundingClientRect();
  document.querySelectorAll('.ed').forEach(el => {
    const r = el.getBoundingClientRect();
    const left = r.left - sr.left, top = r.top - sr.top, w = r.width;
    el.style.position = 'absolute';
    el.style.margin = '0';
    el.style.right = 'auto';
    el.style.bottom = 'auto';
    el.style.left = left + 'px';
    el.style.top = top + 'px';
    el.style.width = w + 'px';
    el.style.maxWidth = 'none';
    if (el.classList.contains('logo-chip')) {
      const img = el.querySelector('img');
      if (img) { img.style.height = 'auto'; img.style.width = '100%'; }
    }
    if (!el.querySelector('.rz')) {
      const rz = document.createElement('span');
      rz.className = 'rz'; rz.setAttribute('contenteditable', 'false');
      el.appendChild(rz);
      const del = document.createElement('span');
      del.className = 'del'; del.textContent = '\\u00D7';
      del.setAttribute('contenteditable', 'false');
      el.appendChild(del);
    }
  });
}

function select(el){
  if (sel) sel.classList.remove('sel');
  sel = el;
  if (el) el.classList.add('sel');
}

slide.addEventListener('mousedown', e => {
  const del = e.target.closest('.del');
  const rz = e.target.closest('.rz');
  const ed = e.target.closest('.ed');
  if (del && ed){ ed.remove(); if (sel === ed) sel = null; e.preventDefault(); return; }
  if (rz && ed){
    select(ed); mode = 'resize';
    const p = pt(e); sx = p.x; sy = p.y;
    bw = ed.offsetWidth; bf = parseFloat(getComputedStyle(ed).fontSize);
    e.preventDefault(); return;
  }
  if (ed){
    if (ed.getAttribute('contenteditable') === 'true') return;
    select(ed); mode = 'move';
    const p = pt(e); sx = p.x; sy = p.y;
    bl = parseFloat(ed.style.left); bt = parseFloat(ed.style.top);
    e.preventDefault(); return;
  }
  select(null);
});

window.addEventListener('mousemove', e => {
  if (!mode || !sel) return;
  const p = pt(e);
  if (mode === 'move'){
    sel.style.left = (bl + (p.x - sx)) + 'px';
    sel.style.top  = (bt + (p.y - sy)) + 'px';
  } else if (mode === 'resize'){
    const newW = p.x - parseFloat(sel.style.left);
    const f = Math.max(0.2, newW / bw);
    sel.style.width = (bw * f) + 'px';
    if (!sel.classList.contains('divider') && !sel.classList.contains('logo-chip')){
      sel.style.fontSize = (bf * f) + 'px';
    }
  }
});
window.addEventListener('mouseup', () => { mode = null; });

slide.addEventListener('dblclick', e => {
  const ed = e.target.closest('.ed');
  if (!ed || ed.classList.contains('logo-chip') || ed.classList.contains('divider')) return;
  ed.setAttribute('contenteditable', 'true');
  ed.focus();
  const fin = () => { ed.removeAttribute('contenteditable'); ed.removeEventListener('blur', fin); };
  ed.addEventListener('blur', fin);
});

document.addEventListener('keydown', e => {
  if ((e.key === 'Delete' || e.key === 'Backspace') && sel && sel.getAttribute('contenteditable') !== 'true'){
    sel.remove(); sel = null; e.preventDefault();
  }
});

function deleteSelected(){ if (sel){ sel.remove(); sel = null; } }
function resetCard(){ location.reload(); }

async function downloadSlide(){
  select(null);
  const canvas = await html2canvas(slide, {scale:2, backgroundColor:'#FBE6E1', useCORS:true, allowTaint:true});
  const a = document.createElement('a');
  a.download = 'nailditspa-week1-trust-nailmyth.png';
  a.href = canvas.toDataURL('image/png');
  a.click();
}

if (document.fonts && document.fonts.ready){ document.fonts.ready.then(() => setTimeout(freeze, 60)); }
else { window.addEventListener('load', () => setTimeout(freeze, 200)); }
</script>`;

h = before + newScript + after;
fs.writeFileSync('index.html', h);
console.log('editor build OK');
