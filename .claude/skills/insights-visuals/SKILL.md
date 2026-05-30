---
name: insights-visuals
description: Choose and insert the right zero-JS visual (icon list, callout, stat-row, bar chart, comparison table) into a Metatree Lab Insights article based on its content. Use when writing or editing any article in src/content/insights/.
---

# Insights Visuals — pick the right zero-JS visual

This skill is the **source of truth** for visual selection in `/insights/` articles. The
chart/stat/table/icon/callout CSS already lives in the scoped `<style>` of
`src/pages/insights/[...slug].astro`. You only paste the HTML into the markdown — never add
CSS, images, `<img>`, `<canvas>`, or any JS chart library (Chart.js, D3, etc.).

## Decision guide — pick visuals by content type

| Your content is…                                                              | Use this visual                | Why                                                              |
| ----------------------------------------------------------------------------- | ------------------------------ | --------------------------------------------------------------- |
| Comparing magnitudes across categories (savings by area, hours by task)       | **bar chart** (`.chart`)       | Relative bar length makes the biggest item obvious at a glance. |
| Headline metrics / the results of a case (3-ish big numbers)                  | **stat-row** (`.stat-row`)     | Big jade numbers read as proof; perfect right after a mini-case.|
| Before/after, option A vs B vs C, tier or plan comparison                     | **comparison table** (markdown)| Rows × columns is the natural shape for side-by-side data.      |
| A list of features / benefits / steps where each item deserves emphasis       | **icon-list** (`ul.icon-list`) | Each line gets a glyph + bold lead, far more scannable than `-`.|
| A single key insight you want to pull out of the flow                         | **callout** (`.callout`)       | One framed line with an icon stops the scroll on the big idea.  |

## Rules

- **Every article needs AT LEAST one chart** — a **bar chart** or a **stat-row**. This is mandatory.
- Beyond that, use icon-lists, callouts, and comparison tables **where they genuinely help**.
  Match the visual to the data. Never decorate emptily — an icon-list of 2 vague bullets is
  worse than a sentence.
- **Numbers in any visual MUST match the article body exactly.** If the prose says "60-70% of
  tickets", the visual says the same. Pull figures straight from your own paragraphs; never
  invent numbers that contradict the text.
- **Zero-JS, inline HTML only.** No external images, screenshots, `<img>`, `<canvas>`, or JS
  chart libs. Icons are **hand-written inline `<svg>`** with `stroke="currentColor"` — no icon
  font, no external requests.
- **Leave a blank line before and after every raw-HTML block** so the markdown parser passes it
  through as raw HTML (otherwise it gets wrapped/escaped and breaks).
- Place each visual **inside the section it reinforces** (savings bar chart near the cost
  section; stat-row right after the mini-case; callout on the article's strongest claim).
- For bar charts, set `--val` to the bar's relative length as a percentage — the largest/most
  relevant value is usually `100%`, scale the others proportionally. The `.bar-value` is the
  human-readable figure shown on the right.

## How many

A ~800-word article should typically carry **2-4 visuals total, varied**. A good mix is one
chart (bar **or** stat-row) plus one or two of {icon-list, callout, comparison table} where the
content supports them. **Don't stack three bar charts** — vary the type so each one earns its
place. Fewer, well-matched visuals beat a wall of charts.

---

## Copy-paste snippets

All class names below match the CSS in `src/pages/insights/[...slug].astro`. Remember the blank
line before and after each HTML block.

### Bar chart — comparing magnitudes

```html
<figure class="chart">
  <figcaption>Estimated annual savings by task area</figcaption>
  <div class="bar" style="--val:100%"><span class="bar-label">Customer support</span><span class="bar-track"><span class="bar-fill"></span></span><b class="bar-value">~$20k/yr</b></div>
  <div class="bar" style="--val:60%"><span class="bar-label">Bookkeeping &amp; admin</span><span class="bar-track"><span class="bar-fill"></span></span><b class="bar-value">~$12k/yr</b></div>
  <div class="bar" style="--val:40%"><span class="bar-label">Content &amp; marketing</span><span class="bar-track"><span class="bar-fill"></span></span><b class="bar-value">~$8k/yr</b></div>
</figure>
```

### Stat-row — headline metrics (2-4 cards)

```html
<div class="stat-row">
  <div class="stat"><b>9h → &lt;2min</b><span>first-response time on support</span></div>
  <div class="stat"><b>60-70%</b><span>tickets auto-resolved</span></div>
  <div class="stat"><b>30-40%</b><span>bookkeeping hours cut</span></div>
</div>
```

### Comparison table — before/after, A vs B (plain markdown, styled automatically)

```markdown
| Task            | Before AI      | With AI        |
| --------------- | -------------- | -------------- |
| First response  | 9 hours        | under 2 min    |
| Tickets handled | all manual     | 60-70% auto    |
| Bookkeeping     | 10 hrs/week    | ~3 hrs/week    |
```

### Icon-list — features / benefits / steps that each deserve emphasis

Each `<li>` starts with a hand-written inline `<svg>` (24×24, `stroke="currentColor"` — the CSS
paints it jade), then a `<strong>` lead followed by a short description.

```html
<ul class="icon-list">
  <li>
    <svg viewBox="0 0 24 24" aria-hidden="true"><polyline points="3 17 9 11 13 15 21 7"></polyline><polyline points="15 7 21 7 21 13"></polyline></svg>
    <span><strong>Document capture first</strong> — fastest payback, lowest risk. Tools like Dext push coded transactions straight into Xero.</span>
  </li>
  <li>
    <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"></circle><polyline points="8 12 11 15 16 9"></polyline></svg>
    <span><strong>Then practice automation</strong> — Karbon or Ignition recover onboarding and client-comms time.</span>
  </li>
  <li>
    <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"></circle><polyline points="12 7 12 12 15 14"></polyline></svg>
    <span><strong>Drafting last</strong> — let an assistant draft routine emails; a human reviews before send.</span>
  </li>
</ul>
```

### Callout — pull out one key insight

```html
<div class="callout">
  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 18h6"></path><path d="M10 22h4"></path><path d="M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.3 1 2.1V18h6v-1.2c0-.8.4-1.6 1-2.1A7 7 0 0 0 12 2z"></path></svg>
  <p>The firms pulling ahead in 2026 quietly stopped paying qualified staff to type numbers from PDFs.</p>
</div>
```

---

## Icon library — hand-written 24×24 line icons

All use `viewBox="0 0 24 24"` and `stroke="currentColor"` so the CSS controls colour (jade),
`stroke-width:1.5`, and `fill:none`. Paste the `<svg>` straight into an `icon-list` `<li>` or a
`.callout`. Keep `aria-hidden="true"` since the adjacent text carries the meaning.

**trending-up** (growth, savings, more leads)

```html
<svg viewBox="0 0 24 24" aria-hidden="true"><polyline points="3 17 9 11 13 15 21 7"></polyline><polyline points="15 7 21 7 21 13"></polyline></svg>
```

**coins / dollar** (cost, money saved, ROI)

```html
<svg viewBox="0 0 24 24" aria-hidden="true"><ellipse cx="9" cy="6" rx="6" ry="3"></ellipse><path d="M3 6v6c0 1.7 2.7 3 6 3s6-1.3 6-3V6"></path><path d="M3 12v6c0 1.7 2.7 3 6 3s6-1.3 6-3"></path></svg>
```

**clock** (time saved, faster turnaround)

```html
<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"></circle><polyline points="12 7 12 12 15 14"></polyline></svg>
```

**cpu / robot** (AI, automation)

```html
<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="6" y="6" width="12" height="12" rx="2"></rect><path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3"></path><rect x="10" y="10" width="4" height="4"></rect></svg>
```

**check-circle** (done, safe to automate, benefit)

```html
<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"></circle><polyline points="8 12 11 15 16 9"></polyline></svg>
```

**users** (team, customers, headcount)

```html
<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="9" cy="8" r="3"></circle><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"></path><path d="M16 5.5a3 3 0 0 1 0 5.5M17 14c2.4.6 4 2.7 4 5"></path></svg>
```

**chart-bar** (data, results, metrics)

```html
<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 21h18"></path><rect x="5" y="11" width="3" height="7"></rect><rect x="11" y="7" width="3" height="11"></rect><rect x="17" y="3" width="3" height="15"></rect></svg>
```

**lightbulb** (idea, insight, takeaway)

```html
<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 18h6"></path><path d="M10 22h4"></path><path d="M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.3 1 2.1V18h6v-1.2c0-.8.4-1.6 1-2.1A7 7 0 0 0 12 2z"></path></svg>
```

**alert-triangle** (caveat, risk, what AI can't do)

```html
<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 2 20h20L12 3z"></path><line x1="12" y1="9" x2="12" y2="14"></line><line x1="12" y1="17" x2="12" y2="17.5"></line></svg>
```
