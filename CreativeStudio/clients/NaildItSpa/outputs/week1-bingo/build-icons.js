const fs = require('fs');
let h = fs.readFileSync('index.html', 'utf8');

// 1) tiles become column (icon over label) + a touch taller
h = h.replace(
  '.tile{position:relative;height:86px;border-radius:16px;display:flex;align-items:center;justify-content:center;text-align:center;padding:6px;',
  '.tile{position:relative;height:94px;border-radius:16px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:5px;text-align:center;padding:6px;'
);
h = h.replace(
  '.bingo{display:grid;grid-template-columns:repeat(3,142px);gap:10px;margin-top:13px;',
  '.bingo{display:grid;grid-template-columns:repeat(3,142px);gap:9px;margin-top:10px;'
);
// icon style (after .tname rule)
h = h.replace(
  '.tname{font-size:13px;font-weight:600;letter-spacing:.01em;color:#6b3a26;line-height:1.2;}',
  '.tname{font-size:12.5px;font-weight:600;letter-spacing:.01em;color:#6b3a26;line-height:1.18;}\n  .ticon{line-height:0;}\n  .ticon svg{width:26px;height:26px;display:block;}'
);

const C = '#8a4830';
const icons = {
  'Butter Yellow': `<svg viewBox="0 0 24 24" fill="${C}"><rect x="8" y="9" width="8" height="11" rx="2"/><rect x="10" y="5.5" width="4" height="4" rx="0.8"/><rect x="10.7" y="2.5" width="2.6" height="3.6" rx="1"/></svg>`,
  'Chrome French': `<svg viewBox="0 0 24 24" fill="${C}"><path d="M12 1.5l1.7 8.8 8.8 1.7-8.8 1.7L12 22.5l-1.7-8.8L1.5 12l8.8-1.7z"/></svg>`,
  '3D Flowers': `<svg viewBox="0 0 24 24" fill="${C}"><ellipse cx="12" cy="5.4" rx="2.3" ry="3.3"/><ellipse cx="12" cy="18.6" rx="2.3" ry="3.3"/><ellipse cx="5.4" cy="12" rx="3.3" ry="2.3"/><ellipse cx="18.6" cy="12" rx="3.3" ry="2.3"/><ellipse cx="7.3" cy="7.3" rx="2.8" ry="2.1" transform="rotate(45 7.3 7.3)"/><ellipse cx="16.7" cy="7.3" rx="2.8" ry="2.1" transform="rotate(-45 16.7 7.3)"/><ellipse cx="7.3" cy="16.7" rx="2.8" ry="2.1" transform="rotate(-45 7.3 16.7)"/><ellipse cx="16.7" cy="16.7" rx="2.8" ry="2.1" transform="rotate(45 16.7 16.7)"/><circle cx="12" cy="12" r="2.5" fill="#FBE6E1"/></svg>`,
  'Aura Nails': `<svg viewBox="0 0 24 24" fill="none" stroke="${C}" stroke-width="1.7"><circle cx="12" cy="12" r="9.2"/><circle cx="12" cy="12" r="5.2"/><circle cx="12" cy="12" r="1.7" fill="${C}" stroke="none"/></svg>`,
  'Lip Gloss Nails': `<svg viewBox="0 0 24 24" fill="${C}"><path d="M12 20.5S4.5 15.6 4.5 9.8A3.9 3.9 0 0 1 12 7.6 3.9 3.9 0 0 1 19.5 9.8c0 5.8-7.5 10.7-7.5 10.7z"/></svg>`,
  'Sunset Ombré': `<svg viewBox="0 0 24 24" fill="none" stroke="${C}" stroke-width="1.7" stroke-linecap="round"><circle cx="12" cy="13" r="3.8" fill="${C}" stroke="none"/><line x1="12" y1="3.4" x2="12" y2="6"/><line x1="4.6" y1="6.6" x2="6.4" y2="8.4"/><line x1="19.4" y1="6.6" x2="17.6" y2="8.4"/><line x1="2.6" y1="13.5" x2="5.1" y2="13.5"/><line x1="18.9" y1="13.5" x2="21.4" y2="13.5"/><line x1="3.5" y1="20" x2="20.5" y2="20"/></svg>`,
  'Water Droplets': `<svg viewBox="0 0 24 24" fill="${C}"><path d="M12 2.5S5 10.2 5 14.6a7 7 0 0 0 14 0C19 10.2 12 2.5 12 2.5z"/></svg>`,
  'Micro Fruit': `<svg viewBox="0 0 24 24" fill="${C}"><circle cx="7.6" cy="17" r="4"/><circle cx="16.4" cy="17" r="4"/><path d="M7.6 13C8.6 7.2 13 5.6 18 4.6" fill="none" stroke="${C}" stroke-width="1.6" stroke-linecap="round"/><path d="M16.4 13C16.4 9 16 6.2 18 4.6" fill="none" stroke="${C}" stroke-width="1.6" stroke-linecap="round"/><path d="M18 4.6c1.5-1.2 3.1-1 4.1-.3-.8 1.3-2.3 1.9-4.1 1.3z"/></svg>`,
};

for (const [name, svg] of Object.entries(icons)) {
  const anchor = `<span class="tname">${name}</span>`;
  if (!h.includes(anchor)) throw new Error('tname not found: ' + name);
  h = h.replace(anchor, `<span class="ticon">${svg}</span>` + anchor);
}

fs.writeFileSync('index.html', h);
console.log('icons added to all 8 trend tiles');
