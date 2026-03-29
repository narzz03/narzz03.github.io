const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.setViewport({ width: 794, height: 1123 });

  const filePath = 'file://' + path.resolve(__dirname, 'resume.html').replace(/\\/g, '/');
  await page.goto(filePath, { waitUntil: 'networkidle0' });

  const pageHeight = await page.evaluate(() => {
    const el = document.querySelector('.page');
    return el ? el.scrollHeight : 1123;
  });

  await page.pdf({
    path: 'Narz_Alamar_Resume.pdf',
    width: '210mm',
    height: Math.max(pageHeight, 1123) + 'px',
    printBackground: true,
    margin: { top: '0', right: '0', bottom: '0', left: '0' }
  });

  await browser.close();
  console.log(`PDF generated at height: ${pageHeight}px`);
})();
