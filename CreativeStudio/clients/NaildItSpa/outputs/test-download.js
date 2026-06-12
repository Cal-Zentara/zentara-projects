const GROOT = 'C:/Users/Aesth/AppData/Roaming/fnm/node-versions/v22.22.2/installation/node_modules';
const { chromium } = require(GROOT + '/playwright');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 900, height: 1100 } });
  const fileUrl = 'file:///C:/Users/Aesth/Desktop/Zentara/Projects/CreativeStudio/clients/NaildItSpa/outputs/week1-reveal/index.html';
  await page.goto(fileUrl, { waitUntil: 'networkidle' });
  // wait for fonts + freeze to settle
  await page.waitForTimeout(1200);
  // run the page's own download routine but capture the dataURL instead of clicking
  const dataUrl = await page.evaluate(async () => {
    const slide = document.getElementById('slide');
    if (window.select) window.select(null);
    const canvas = await html2canvas(slide, { scale: 2, backgroundColor: '#FBE6E1', useCORS: true });
    return canvas.toDataURL('image/png');
  });
  const b64 = dataUrl.replace(/^data:image\/png;base64,/, '');
  fs.writeFileSync('C:/Users/Aesth/Desktop/Zentara/Projects/CreativeStudio/clients/NaildItSpa/outputs/_download_test.png', Buffer.from(b64, 'base64'));
  console.log('Saved _download_test.png');
  await browser.close();
})();
