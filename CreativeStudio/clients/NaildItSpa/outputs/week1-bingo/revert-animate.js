const fs = require('fs');
let h = fs.readFileSync('index.html', 'utf8');

// remove the entrance-animation CSS block
h = h.replace(/\n?\s*\/\* ---- entrance animation ---- \*\/[\s\S]*?\.slide\.animate \.logo-chip\{animation:fadeIn \.6s 1\.42s ease both;\}\n/, '\n');

// restore the original init (freeze only, no animate trigger)
h = h.replace(
  `function start(){ freeze(); requestAnimationFrame(()=>requestAnimationFrame(()=>slide.classList.add('animate'))); }
function replay(){ slide.classList.remove('animate'); void slide.offsetWidth; requestAnimationFrame(()=>slide.classList.add('animate')); }
if(document.fonts&&document.fonts.ready){document.fonts.ready.then(()=>setTimeout(start,60));}
else{window.addEventListener('load',()=>setTimeout(start,200));}`,
  `if(document.fonts&&document.fonts.ready){document.fonts.ready.then(()=>setTimeout(freeze,60));}
else{window.addEventListener('load',()=>setTimeout(freeze,200));}`
);

// remove the Replay button
h = h.replace(
  `<button class="btn ghost" onclick="replay()">Replay</button>\n      <button class="btn ghost" onclick="resetCard()">Reset</button>`,
  `<button class="btn ghost" onclick="resetCard()">Reset</button>`
);

fs.writeFileSync('index.html', h);
const stillHasAnim = h.includes('@keyframes popIn') || h.includes('.animate') || h.includes('replay(');
console.log('reverted; residual animation refs:', stillHasAnim);
