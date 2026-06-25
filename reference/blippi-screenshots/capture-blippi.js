const { chromium } = require(require('path').join('C:\\Users\\daeld\\.claude\\scripts', 'node_modules', 'playwright'));
const path = require('path');
const fs   = require('fs');

const config = JSON.parse(fs.readFileSync(path.join(__dirname, 'screenshots-config.json'), 'utf8'));
const screenshotsDir = path.join(__dirname, 'screenshots');
fs.mkdirSync(screenshotsDir, { recursive: true });

const widths = config.widths || [1920, 360];
const urls   = config.urls   || [];

console.log(`\n📸 Capturing ${urls.length} pages × ${widths.length} widths = ${urls.length * widths.length} screenshots`);
console.log(`   Output → ${screenshotsDir}\n`);

function labelFor(w) { return w >= 1024 ? 'desktop' : 'mobile'; }

async function scrollAndWait(page) {
  await page.evaluate(() => new Promise(resolve => {
    let scrolled = 0;
    const distance = 300;
    const total = document.body.scrollHeight;
    const timer = setInterval(() => {
      window.scrollBy(0, distance);
      scrolled += distance;
      if (scrolled >= total) { clearInterval(timer); window.scrollTo(0, 0); resolve(); }
    }, 100);
  }));
  await page.waitForTimeout(1000);
}

(async () => {
  const browser = await chromium.launch({ headless: true });
  const errors  = [];

  for (const { slug, url } of urls) {
    for (const width of widths) {
      const label    = labelFor(width);
      const height   = label === 'desktop' ? 1080 : 780;
      const filename = `${slug}-${label}.png`;
      const filepath = path.join(screenshotsDir, filename);

      process.stdout.write(`  ${slug} @ ${width}px (${label}) ... `);
      try {
        const page = await browser.newPage();
        await page.setViewportSize({ width, height });
        await page.goto(url, { waitUntil: 'load', timeout: 60000 });
        await page.waitForTimeout(2000);
        await scrollAndWait(page);
        await page.screenshot({ path: filepath, fullPage: true });
        await page.close();
        console.log(`✓ ${filename}`);
      } catch (err) {
        console.log(`✗ FAILED — ${err.message}`);
        errors.push({ slug, width, error: err.message });
      }
    }
  }

  await browser.close();

  console.log('\n─────────────────────────────────────');
  if (errors.length === 0) {
    console.log(`✅ All ${urls.length * widths.length} screenshots saved.`);
  } else {
    console.log(`⚠️  ${urls.length * widths.length - errors.length} succeeded, ${errors.length} failed:`);
    errors.forEach(e => console.log(`   • ${e.slug} @ ${e.width}px: ${e.error}`));
  }
})();
