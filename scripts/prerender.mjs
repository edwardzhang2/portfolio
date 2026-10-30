// Renders the built app once with a headless browser and writes the resulting
// markup into dist/index.html, so the page has real content before JS runs.
import { createServer } from 'node:http';
import { readFile, writeFile, copyFile } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
import { createRequire } from 'node:module';

// Playwright is resolved at runtime so a machine without it still gets a plain
// client-rendered build (run `npx playwright install chromium` once to enable).
let chromium;
try {
  ({ chromium } = createRequire(import.meta.url)('playwright'));
} catch {
  console.warn('prerender skipped: playwright is not installed');
  process.exit(0);
}

const dist = new URL('../dist/', import.meta.url).pathname;
const base = '/portfolio/';
const types = {
  '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css',
  '.svg': 'image/svg+xml', '.pdf': 'application/pdf', '.png': 'image/png', '.jpg': 'image/jpeg',
};

const server = createServer(async (req, res) => {
  let path = normalize(decodeURIComponent(req.url.split('?')[0]));
  if (path.startsWith(base)) path = path.slice(base.length);
  if (path === '' || path === '/') path = 'index.html';
  try {
    const body = await readFile(join(dist, path));
    res.writeHead(200, { 'content-type': types[extname(path)] ?? 'application/octet-stream' });
    res.end(body);
  } catch {
    res.writeHead(404); res.end();
  }
});
await new Promise((r) => server.listen(0, r));
const port = server.address().port;

const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto(`http://127.0.0.1:${port}${base}`, { waitUntil: 'networkidle' });
await page.waitForSelector('#root main');
const rootHtml = await page.$eval('#root', (el) => el.innerHTML);
await browser.close();
server.close();

const file = join(dist, 'index.html');
const html = await readFile(file, 'utf8');
const out = html.replace('<div id="root"></div>', `<div id="root">${rootHtml}</div>`);
await writeFile(file, out);
await copyFile(file, join(dist, '404.html'));
console.log(`prerendered ${rootHtml.length.toLocaleString()} chars into dist/index.html`);
