const fs = require('fs');

const photoB64 = fs.readFileSync('C:/Users/Aesth/Downloads/pic1_b64.txt', 'utf8');
const logoB64 = 'data:image/jpeg;base64,' + fs.readFileSync('C:/Users/Aesth/Desktop/Zentara/Projects/SpiritSisters/NaildItSpa/logo/Logo.jpeg').toString('base64');
const tweeB64 = fs.readFileSync('C:/Users/Aesth/Desktop/Zentara/Projects/CreativeStudio/clients/NaildItSpa/outputs/twee_b64.txt', 'utf8');

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<title>Nail'd It — Editorial Reveal</title>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;0,700;0,800;1,500;1,600;1,700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
<script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
<style>
*{margin:0;padding:0;box-sizing:border-box;}
:root{
  --gold:#C9A24A;
  --terra:#C4714F;
  --ink:#1A0F0A;
  --blush:#FBE6E1;
  --mid:#6B4A3A;
}
body{background:#1a1210;font-family:'Inter',sans-serif;display:flex;flex-direction:column;align-items:center;padding:40px 16px 80px;gap:18px;}

/* Single-image MAGAZINE TALL — 4:5 portrait (1080x1350 at 2x) */
.slide{width:540px;height:675px;position:relative;overflow:hidden;flex-shrink:0;background:var(--blush);}

/* === BACKGROUND LAYERS (non-interactive) === */

/* Photo box — clips the image. No object-fit (html2canvas ignores it and leaks gray).
   Instead the <img> is sized + positioned by hand so browser and PNG match exactly. */
.photo-box{
  position:absolute;top:17px;left:17px;
  width:506px;height:552px;
  overflow:hidden;
  background-color:var(--blush);
}
/* Image 1023x1537 (ratio .666). Cover by width: 506 wide -> 760 tall.
   Vertical overflow 208px. Crop at 75% from top => top offset -(208*0.75)= -156px. */
.layer-photo{
  position:absolute;top:-156px;left:0;
  width:506px;height:760px;
  display:block;
}

/* Soft fade where photo meets the blush strip */
.layer-fade{
  position:absolute;top:551px;left:17px;right:17px;height:18px;
  background:linear-gradient(to bottom,transparent,var(--blush));
  pointer-events:none;
}

/* Blush strip — gives editorial typography room to breathe */
.layer-strip-bg{
  position:absolute;bottom:0;left:0;right:0;height:106px;
  background:var(--blush);
}

/* Thin gold hairline frame — matted gallery print look, hugs the photo */
.layer-frame{
  position:absolute;top:12px;left:12px;right:12px;bottom:12px;
  border:1px solid rgba(201,162,74,0.75);
  pointer-events:none;
}

/* === INTERACTIVE ELEMENTS — all direct children of .slide === */

/* Logo, small + refined, top-right inside the frame */
.layer-logo{
  position:absolute;top:26px;right:26px;
  width:62px;height:62px;border-radius:50%;
  background:#fff;overflow:hidden;
  display:flex;align-items:center;justify-content:center;
  box-shadow:0 3px 12px rgba(0,0,0,0.18);
}
.layer-logo img{width:100%;height:100%;object-fit:cover;}

/* Editorial hierarchy in the strip ----------------------------------- */

/* Tiny wide-tracked kicker = salon line, moved down off the photo */
.layer-kicker{
  position:absolute;
  left:26px;top:582px;
  font-size:8.5px;letter-spacing:.3em;text-transform:uppercase;
  color:var(--gold);font-weight:700;
  white-space:nowrap;
}

/* Artist credit — editorial byline, top-right */
.layer-credit{
  position:absolute;
  right:79px;top:580px;
  font-family:'Playfair Display',serif;font-style:italic;
  font-size:11.5px;color:var(--terra);
  white-space:nowrap;
}

/* Small round headshot of the tech next to the byline */
.layer-twee{
  position:absolute;
  right:26px;top:563px;
  width:45px;height:45px;border-radius:50%;
  overflow:hidden;background:#fff;
  box-shadow:0 1px 5px rgba(0,0,0,0.15);
  border:1.5px solid rgba(201,162,74,0.6);
}
/* Twee 1086x1448 (ratio .75). Cover a 45px circle: width 45 -> height 60, center -> margin-top -7.5px.
   Hand-sized instead of object-fit (html2canvas ignores object-fit and squeezes the face). */
.layer-twee img{width:45px;height:60px;margin-top:-7.5px;margin-left:0;display:block;}

/* The headline — big, bold, the star of the type */
.layer-name{
  position:absolute;
  left:26px;top:595px;
  font-family:'Playfair Display',serif;
  font-size:27px;font-weight:700;line-height:1.0;
  color:var(--ink);
  white-space:nowrap;
}
.layer-name em{font-style:italic;color:var(--terra);}

/* Pro tip — quiet supporting line */
.layer-tip{
  position:absolute;
  left:26px;top:633px;
  font-size:8.5px;color:var(--mid);line-height:1.45;
  width:300px;
}
.layer-tip strong{color:var(--ink);font-weight:600;}

/* Booking pill — bottom-right anchor */
.layer-pill{
  position:absolute;
  right:26px;top:600px;
  background:var(--terra);color:#fff;
  font-size:8px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;
  padding:6px 14px;border-radius:20px;
}

/* Booking line, right side */
.layer-url{
  position:absolute;
  right:26px;top:607px;
  font-size:9px;color:var(--mid);letter-spacing:.03em;
  text-align:right;white-space:nowrap;line-height:1.5;
}

/* Editor handles */
.ed{cursor:move;}
.ed.sel{outline:1.6px dashed var(--terra);outline-offset:3px;}
.rz,.del{position:absolute;display:none;z-index:20;user-select:none;}
.ed.sel .rz{display:block;width:13px;height:13px;border-radius:50%;background:var(--terra);border:2px solid #fff;right:-8px;bottom:-8px;box-shadow:0 1px 4px rgba(0,0,0,.35);cursor:nwse-resize;}
.ed.sel .del{display:flex;align-items:center;justify-content:center;width:20px;height:20px;border-radius:50%;background:#B0584A;color:#fff;font-size:15px;line-height:1;right:-10px;top:-10px;cursor:pointer;box-shadow:0 1px 4px rgba(0,0,0,.35);}

.btn{font-family:'Inter',sans-serif;font-size:13px;font-weight:600;background:var(--terra);color:#fff;border:none;border-radius:8px;padding:11px 22px;cursor:pointer;}
.btn.ghost{background:rgba(255,255,255,.08);color:rgba(255,255,255,.75);border:1px solid rgba(255,255,255,.15);}
.btn:hover{opacity:.88;}
.toolbar{display:flex;gap:10px;}
.note{font-size:11px;color:rgba(255,255,255,.35);text-align:center;}
</style>
</head>
<body>
<div style="display:flex;flex-direction:column;align-items:center;gap:14px;">
<div id="slide" class="slide">
  <!-- background layers -->
  <div class="photo-box"><img class="layer-photo" src="${photoB64}" alt="nail photo"/></div>
  <div class="layer-fade"></div>
  <div class="layer-strip-bg"></div>

  <!-- interactive elements -->
  <div class="layer-logo ed"><img src="${logoB64}" alt="logo"/></div>
  <div class="layer-kicker ed">Nail'd It! Spa &nbsp;·&nbsp; Stanton, CA</div>
  <div class="layer-credit ed">Nails by Twee</div>
  <div class="layer-twee ed"><img src="${tweeB64}" alt="Twee"/></div>
  <div class="layer-name ed">Gold Floral <em>Tulip</em> Nails</div>
  <div class="layer-tip ed"><strong>Pro tip:</strong> Fresh set meets pool day? Give it a 24 hour head start. Chlorine and a brand new mani are not friends yet.</div>
  <div class="layer-url ed">nailditspa.com<br>Walk-ins welcome</div>

  <!-- gold frame sits on top, non-interactive -->
  <div class="layer-frame"></div>
</div>

<div class="toolbar">
  <button class="btn ghost" onclick="location.reload()">Reset</button>
  <button class="btn ghost" onclick="if(sel){sel.remove();sel=null;}">Delete selected</button>
  <button class="btn" onclick="downloadSlide()">Download PNG</button>
</div>
<div class="note">Click to select &nbsp;·&nbsp; drag to move &nbsp;·&nbsp; corner dot to resize &nbsp;·&nbsp; double-click text to edit</div>
</div>

<script>
const slide=document.getElementById('slide');
let sel=null,mode=null,sx=0,sy=0,bw=0,bf=0,bl=0,bt=0;
function pt(e){const r=slide.getBoundingClientRect();return{x:e.clientX-r.left,y:e.clientY-r.top};}

function freeze(){
  const sr=slide.getBoundingClientRect();
  const els=[...document.querySelectorAll('.ed')];
  const boxes=els.map(el=>{const r=el.getBoundingClientRect();return{left:r.left-sr.left,top:r.top-sr.top,w:r.width,h:r.height};});
  els.forEach((el,i)=>{
    const b=boxes[i];
    el.style.position='absolute';el.style.margin='0';el.style.right='auto';el.style.bottom='auto';
    el.style.left=b.left+'px';el.style.top=b.top+'px';el.style.width=b.w+'px';el.style.maxWidth='none';
    if(!el.querySelector('.rz')){
      const rz=document.createElement('span');rz.className='rz';rz.setAttribute('contenteditable','false');el.appendChild(rz);
      const d=document.createElement('span');d.className='del';d.textContent='×';d.setAttribute('contenteditable','false');el.appendChild(d);
    }
  });
}

function select(el){if(sel)sel.classList.remove('sel');sel=el;if(el)el.classList.add('sel');}

slide.addEventListener('mousedown',e=>{
  const del=e.target.closest('.del'),rz=e.target.closest('.rz'),ed=e.target.closest('.ed');
  if(del&&ed){ed.remove();if(sel===ed)sel=null;e.preventDefault();return;}
  if(rz&&ed){select(ed);mode='resize';const p=pt(e);sx=p.x;sy=p.y;bw=ed.offsetWidth;bf=parseFloat(getComputedStyle(ed).fontSize);e.preventDefault();return;}
  if(ed){if(ed.getAttribute('contenteditable')==='true')return;select(ed);mode='move';const p=pt(e);sx=p.x;sy=p.y;bl=parseFloat(ed.style.left);bt=parseFloat(ed.style.top);e.preventDefault();return;}
  select(null);
});
window.addEventListener('mousemove',e=>{
  if(!mode||!sel)return;const p=pt(e);
  if(mode==='move'){sel.style.left=(bl+(p.x-sx))+'px';sel.style.top=(bt+(p.y-sy))+'px';}
  else if(mode==='resize'){const nw=Math.max(40,p.x-parseFloat(sel.style.left));const f=nw/bw;
    sel.style.width=nw+'px';if(!sel.classList.contains('layer-logo'))sel.style.fontSize=(bf*f)+'px';}
});
window.addEventListener('mouseup',()=>mode=null);
window.addEventListener('keydown',e=>{
  if((e.key==='Delete'||e.key==='Backspace')&&sel&&document.activeElement.getAttribute('contenteditable')!=='true'){sel.remove();sel=null;}
});
slide.addEventListener('dblclick',e=>{
  const ed=e.target.closest('.ed');
  if(ed&&!ed.classList.contains('layer-logo')){ed.setAttribute('contenteditable','true');ed.focus();select(ed);}
});
slide.addEventListener('blur',e=>{
  const ed=e.target.closest('.ed');if(ed)ed.removeAttribute('contenteditable');
},true);

async function downloadSlide(){
  select(null);
  try{
    // wait for every image to fully decode so the photo can't render as a blank/gray gap
    await Promise.all([...slide.querySelectorAll('img')].map(im=>im.complete?Promise.resolve():(im.decode?im.decode().catch(()=>{}):new Promise(r=>{im.onload=im.onerror=r;}))));
    const canvas=await html2canvas(slide,{scale:2,backgroundColor:'#FBE6E1',useCORS:true});
    canvas.toBlob(function(blob){
      if(!blob){alert('Render failed — try again.');return;}
      const url=URL.createObjectURL(blob);
      const a=document.createElement('a');
      a.download='nailditspa-week1-reveal-editorial.png';
      a.href=url;document.body.appendChild(a);a.click();
      setTimeout(function(){URL.revokeObjectURL(url);a.remove();},1000);
    },'image/png');
  }catch(err){
    alert('Download error: '+err.message);
  }
}

if(document.fonts&&document.fonts.ready){document.fonts.ready.then(()=>setTimeout(freeze,80));}
else{window.addEventListener('load',()=>setTimeout(freeze,250));}
</script>
</body>
</html>`;

const outDir = 'C:/Users/Aesth/Desktop/Zentara/Projects/CreativeStudio/clients/NaildItSpa/outputs/week1-reveal';
fs.mkdirSync(outDir, {recursive:true});
fs.writeFileSync(outDir + '/index.html', html);
console.log('Built: week1-reveal/index.html');
