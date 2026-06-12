const fs = require('fs');
const filePath = 'C:\\Users\\Aesth\\.claude\\projects\\C--Users-Aesth-Desktop-Zentara-Projects-SmallProjects-Unik\\1b4a7470-5593-4817-8362-7be3463c059f\\tool-results\\mcp-firecrawl-firecrawl_scrape-1780086499611.txt';
const content = fs.readFileSync(filePath, 'utf8');
const outer = JSON.parse(content);
const md = outer.markdown;
const jsonStr = md.replace(/^```json\n/, '').replace(/\n```$/, '');
const data = JSON.parse(jsonStr);
data.products.forEach(p => {
  const prices = p.variants.map(v => parseFloat(v.price));
  const minPrice = Math.min(...prices);
  console.log(p.product_type + ' | ' + p.title + ' | $' + minPrice);
});
