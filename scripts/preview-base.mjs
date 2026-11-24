// Prepares the built site (dist/) to be served from a sub-folder, such as the
// GitHub Pages preview at https://ahmedshela.github.io/westcott-website/.
// Only used for the staff-review preview. The real site does not need this.
// Usage: node scripts/preview-base.mjs /westcott-website
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const base = (process.argv[2] || '').replace(/\/$/, '');
if (!base) throw new Error('Give the sub-folder, e.g. /westcott-website');

async function* walk(dir) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) yield* walk(p);
    else if (p.endsWith('.html')) yield p;
  }
}

for await (const file of walk('dist')) {
  let html = await readFile(file, 'utf8');
  // Root-relative links and images: href="/x" -> href="/base/x" (but not "//cdn")
  html = html.replace(/(\s(?:href|src|content)=")\/(?!\/)/g, `$1${base}/`);
  html = html.replace(/(\ssrcset=")\/(?!\/)/g, `$1${base}/`);
  // Keep the preview out of search engines.
  html = html.replace('<head>', '<head><meta name="robots" content="noindex">');
  await writeFile(file, html);
}
console.log(`Preview paths rewritten for ${base}/`);
