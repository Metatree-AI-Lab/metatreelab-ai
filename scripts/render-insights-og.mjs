/**
 * Generate a per-article social-share OG image (1200×630) for every Insights post.
 *
 * Reads src/content/insights/*.md, renders a branded card with the article title
 * (word-wrapped) using bundled Poppins TTFs (no system-font dependency, so output is
 * identical on local / CI / cloud), and writes public/og/insights/<slug>.png.
 *
 * The PNGs are COMMITTED to the repo — GitHub Pages serves them as static assets and
 * never rasterizes at deploy time (same pattern as scripts/render-og.mjs).
 *
 * Run: `pnpm run render:og:insights`  (do this after adding/editing an article, before build)
 */
import { Resvg } from '@resvg/resvg-js';
import { readFileSync, writeFileSync, readdirSync, mkdirSync } from 'node:fs';
import { resolve } from 'node:path';

const ROOT = resolve(import.meta.dirname, '..');
const SRC = resolve(ROOT, 'src/content/insights');
const OUT = resolve(ROOT, 'public/og/insights');
const FONT_BOLD = resolve(ROOT, 'scripts/og-assets/Poppins-Bold.ttf');
const FONT_SEMI = resolve(ROOT, 'scripts/og-assets/Poppins-SemiBold.ttf');
const FONT_REG = resolve(ROOT, 'scripts/og-assets/Poppins-Regular.ttf');

mkdirSync(OUT, { recursive: true });

/** Minimal frontmatter reader — pulls `title` and `draft` from the YAML block. */
function frontmatter(md) {
  const m = md.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!m) return {};
  const block = m[1];
  const title = block.match(/^title:\s*["']?(.+?)["']?\s*$/m)?.[1] ?? '';
  const draft = /^draft:\s*true\s*$/m.test(block);
  return { title: title.replace(/\\"/g, '"').trim(), draft };
}

/** Greedy word-wrap into <=maxLines lines of <=maxChars chars. */
function wrap(text, maxChars, maxLines) {
  const words = text.split(/\s+/);
  const lines = [];
  let line = '';
  for (const w of words) {
    const candidate = line ? `${line} ${w}` : w;
    if (candidate.length > maxChars && line) {
      lines.push(line);
      line = w;
    } else {
      line = candidate;
    }
  }
  if (line) lines.push(line);
  if (lines.length > maxLines) {
    const kept = lines.slice(0, maxLines);
    kept[maxLines - 1] = kept[maxLines - 1].replace(/[.,;:]?$/, '') + '…';
    return kept;
  }
  return lines;
}

const esc = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function svgFor(title) {
  // Scale font down as line count grows so long titles stay inside the safe area.
  const lines = wrap(title, 24, 4);
  const fontSize = lines.length >= 4 ? 60 : lines.length === 3 ? 70 : 78;
  const lineHeight = Math.round(fontSize * 1.18);
  const blockHeight = lines.length * lineHeight;
  // Vertically center the title block in the area below the kicker.
  const startY = 300 - blockHeight / 2 + fontSize * 0.8;
  const x = 90;

  const tspans = lines
    .map(
      (l, i) =>
        `<text x="${x}" y="${startY + i * lineHeight}" fill="#FFFFFF" font-family="Poppins" font-weight="700" font-size="${fontSize}">${esc(l)}</text>`,
    )
    .join('\n  ');

  return `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#00E5A0"/>
      <stop offset="100%" stop-color="#00B4D8"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="#000000"/>
  <rect x="0" y="0" width="1200" height="6" fill="url(#g)"/>

  <!-- M logo top-left -->
  <g transform="translate(90, 78) scale(1.7)">
    <path d="M5 25V7L16 17L27 7V25" stroke="url(#g)" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <circle cx="5" cy="7" r="3.5" fill="url(#g)"/>
    <circle cx="27" cy="7" r="3.5" fill="url(#g)"/>
    <circle cx="16" cy="17" r="3.5" fill="url(#g)"/>
  </g>

  <!-- Kicker -->
  <text x="160" y="115" fill="#00E5A0" font-family="Poppins" font-weight="600" font-size="26" letter-spacing="3">METATREE AI LAB · INSIGHTS</text>

  <!-- Title -->
  ${tspans}

  <!-- Footer rule + url -->
  <rect x="90" y="540" width="120" height="4" rx="2" fill="url(#g)"/>
  <text x="90" y="585" fill="#9aa0a6" font-family="Poppins" font-weight="400" font-size="26">metatreelab.ai</text>
</svg>`;
}

const files = readdirSync(SRC).filter((f) => f.endsWith('.md'));
let count = 0;
for (const file of files) {
  const slug = file.replace(/\.md$/, '');
  const { title, draft } = frontmatter(readFileSync(resolve(SRC, file), 'utf8'));
  if (draft) {
    console.log(`- skip (draft): ${slug}`);
    continue;
  }
  if (!title) {
    console.warn(`! no title in ${file}, skipping`);
    continue;
  }
  const resvg = new Resvg(svgFor(title), {
    fitTo: { mode: 'width', value: 1200 },
    background: '#000000',
    font: {
      fontFiles: [FONT_BOLD, FONT_SEMI, FONT_REG],
      loadSystemFonts: false,
      defaultFontFamily: 'Poppins',
    },
  });
  const png = resvg.render().asPng();
  writeFileSync(resolve(OUT, `${slug}.png`), png);
  console.log(`✓ ${slug}.png (${png.byteLength.toLocaleString()} bytes)`);
  count++;
}
console.log(`\nDone — ${count} OG image(s) → public/og/insights/`);
