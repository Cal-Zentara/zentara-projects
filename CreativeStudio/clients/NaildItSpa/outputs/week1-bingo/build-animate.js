const fs = require('fs');
let h = fs.readFileSync('index.html', 'utf8');

// 1) animation CSS injected before </style>
const css = `
  /* ---- entrance animation ---- */
  .title,.subtitle,.kicker,.cta,.logo-chip,.bingo .tile{opacity:0;}
  @keyframes riseIn{from{opacity:0;transform:translateY(16px);}to{opacity:1;transform:translateY(0);}}
  @keyframes fadeIn{from{opacity:0;}to{opacity:1;}}
  @keyframes popIn{0%{opacity:0;transform:translateY(12px) scale(.55);}60%{opacity:1;transform:translateY(0) scale(1.07);}100%{opacity:1;transform:scale(1);}}
  .slide.animate .kicker{animation:fadeIn .5s ease both;}
  .slide.animate .title{animation:riseIn .6s .06s cubic-bezier(.2,.7,.3,1) both;}
  .slide.animate .subtitle{animation:riseIn .6s .2s cubic-bezier(.2,.7,.3,1) both;}
  .slide.animate .bingo .tile{animation:popIn .55s cubic-bezier(.25,1.25,.5,1) both;}
  .slide.animate .bingo .tile:nth-child(1){animation-delay:.34s}
  .slide.animate .bingo .tile:nth-child(2){animation-delay:.42s}
  .slide.animate .bingo .tile:nth-child(3){animation-delay:.50s}
  .slide.animate .bingo .tile:nth-child(4){animation-delay:.58s}
  .slide.animate .bingo .tile:nth-child(5){animation-delay:.66s}
  .slide.animate .bingo .tile:nth-child(6){animation-delay:.74s}
  .slide.animate .bingo .tile:nth-child(7){animation-delay:.82s}
  .slide.animate .bingo .tile:nth-child(8){animation-delay:.90s}
  .slide.animate .bingo .tile:nth-child(9){animation-delay:.98s}
  .slide.animate .cta{animation:riseIn .6s 1.2s cubic-bezier(.2,.7,.3,1) both;}
  .slide.animate .logo-chip{animation:fadeIn .6s 1.42s ease both;}
`;
h = h.replace('</style>', css + '\n</style>');

// 2) freeze first (clean layout), THEN trigger animation
h = h.replace(
  `if(document.fonts&&document.fonts.ready){document.fonts.ready.then(()=>setTimeout(freeze,60));}
else{window.addEventListener('load',()=>setTimeout(freeze,200));}`,
  `function start(){ freeze(); requestAnimationFrame(()=>requestAnimationFrame(()=>slide.classList.add('animate'))); }
function replay(){ slide.classList.remove('animate'); void slide.offsetWidth; requestAnimationFrame(()=>slide.classList.add('animate')); }
if(document.fonts&&document.fonts.ready){document.fonts.ready.then(()=>setTimeout(start,60));}
else{window.addEventListener('load',()=>setTimeout(start,200));}`
);

// 3) add a Replay button so Cal can re-watch the entrance
h = h.replace(
  `<button class="btn ghost" onclick="resetCard()">Reset</button>`,
  `<button class="btn ghost" onclick="replay()">Replay</button>\n      <button class="btn ghost" onclick="resetCard()">Reset</button>`
);

fs.writeFileSync('index.html', h);
console.log('entrance animation added');
