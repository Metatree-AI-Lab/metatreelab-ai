# CONTENT_PLAN.md — Metatree Lab Insights

This is the operating plan for the **Insights** blog (`/insights/`). A daily automated agent reads this file each run, picks the next unwritten topic, writes ONE English article, and commits it only if the build passes. English only. No Chinese articles.

---

## Audience

**Business owners and founders of small-to-medium businesses (SMBs)** — not developers, not data scientists. They run agencies, retail/e-commerce brands, trades, clinics, property firms, professional-services shops, restaurants, and small manufacturers.

They search for **business outcomes**, not technology:

- "how to cut costs with AI" / "reduce overheads"
- "how to grow revenue / get more leads"
- "how does AI help [their industry]"
- "is AI worth it for a small business" / "AI ROI / pricing"
- "AI tools for [accountants / real estate / restaurants / law firms]"
- "real AI case studies" / "examples of small businesses using AI"
- the underlying fear: **"am I falling behind my competitors?"**

They do NOT search for "RAG pipeline", "vector database", "fine-tuning", or "prompt engineering". If a draft reads like it's for engineers, it's wrong for this blog.

## Content types & priority

Highest value first:

1. **Industry playbooks** — "How [industry] uses AI in 2026" / "AI for [industry]". Concrete, role-specific, outcome-led. (Highest demand, highest search volume.)
2. **Cost / ROI pieces** — what AI actually costs, what it saves, payback periods, with rough dollar/percentage figures.
3. **Case studies & pitfalls** — real or realistic mini-cases, plus honest "what goes wrong" pieces. These earn trust and citations.
4. **Getting-started roadmaps** — first-90-days, what to buy vs build, how to pick a tool.
5. Everything else (trends, comparisons) — only when the above are well covered.

## Article topic backlog (~30)

Pick the **next topic that does NOT already have a file** in `src/content/insights/`. Compare by slug/topic, not exact title. Suggested slug in parentheses.

1. How Small Businesses Can Cut Costs with AI in 2026 (`how-small-businesses-cut-costs-with-ai-2026`) — **DONE (seed)**
2. How Real Estate Agents Use AI to Close More Deals (`how-real-estate-agents-use-ai`)
3. AI for Accounting Firms: Where It Saves the Most Hours (`ai-for-accounting-firms`)
4. How Restaurants Use AI to Cut Waste and Boost Bookings (`how-restaurants-use-ai`)
5. AI for Law Firms: What's Safe to Automate and What Isn't (`ai-for-law-firms`)
6. The Real Cost of AI for a Small Business (Tooling vs Custom) (`real-cost-of-ai-small-business`)
7. AI ROI: How to Tell If a Tool Is Actually Paying Off (`ai-roi-how-to-measure`)
8. How E-commerce Brands Use AI to Lift Conversion (`ai-for-ecommerce-brands`)
9. AI for Trades and Field Services: Quotes, Scheduling, Invoicing (`ai-for-trades-field-services`)
10. How Clinics and Allied Health Use AI for Admin (`ai-for-clinics-allied-health`)
11. A First-90-Days AI Roadmap for SMB Owners (`first-90-days-ai-roadmap`)
12. Buy vs Build: When a Small Business Should Commission Custom AI (`ai-buy-vs-build`)
13. 5 AI Projects That Quietly Fail (and How to Avoid Them) (`ai-projects-that-fail`)
14. How AI Cuts Customer-Support Costs Without Annoying Customers (`ai-customer-support-cost`)
15. AI for Marketing Agencies: Doing 3x the Output at the Same Headcount (`ai-for-marketing-agencies`)
16. How Property Developers Market Faster with AI (`ai-for-property-developers`)
17. AI for Recruiters and HR: Screening, Job Ads, Onboarding (`ai-for-recruiters-hr`)
18. The SMB Guide to AI Data Privacy and Risk (`smb-ai-data-privacy-risk`)
19. How Manufacturers and Wholesalers Use AI for Operations (`ai-for-manufacturers-wholesalers`)
20. AI for Consultants and Coaches: Productising Your Expertise (`ai-for-consultants-coaches`)
21. How to Train Your Team to Use AI (Without a Big Budget) (`train-your-team-to-use-ai`)
22. AI for Property Managers: Tenant Comms and Maintenance (`ai-for-property-managers`)
23. How Small Retailers Compete with Big Chains Using AI (`small-retailers-vs-chains-ai`)
24. AI for Bookkeepers: Automating Data Entry the Right Way (`ai-for-bookkeepers`)
25. The Hidden Costs of NOT Adopting AI in 2026 (`hidden-cost-of-ignoring-ai`)
26. How Service Businesses Use AI to Win More Quotes (`ai-to-win-more-quotes`)
27. AI for Nonprofits: More Impact on a Tight Budget (`ai-for-nonprofits`)
28. A No-Jargon Glossary of AI Terms for Business Owners (`ai-glossary-for-business-owners`)
29. How Dental and Medical Practices Use AI Front-Desk Tools (`ai-for-dental-medical-front-desk`)
30. Case Study Template: What a Good AI Rollout Looks Like Month by Month (`ai-rollout-case-study`)

When all 30 are written, extend the list with new industry playbooks and fresh cost/ROI angles before repeating themes.

## Writing rules (human-quality first, not detector-gaming)

The goal is **genuinely useful, human-sounding writing** by a practitioner. Low AI-detection and high SEO follow from that — they are not the target.

- **Write from real expertise.** Use specifics: rough dollar figures, percentages, named tools (Xero, Intercom, Dext, the OpenAI/Anthropic API, etc.), concrete roles and hours. Vague = bad.
- **Include at least one concrete mini-case** ("a 12-person e-commerce brand cut response time from 9 hours to 2 minutes"). Realistic and specific beats generic.
- **Vary sentence rhythm.** Mix short punchy lines with longer ones. Read it aloud — if it drones, rewrite it.
- **Have an opinion.** End with a strong, specific conclusion, not a hedged summary. Take a side.
- **Structure with H2 / H3.** Scannable sections, short paragraphs, occasional lists. One clear takeaway.
- **Target one long-tail keyword per article** (the topic itself usually is it). Put it in the title, first paragraph, and one H2 naturally — never stuff it.
- **One relevant internal link** to a service or contact page (`/contact/`, `/services/`, `/work/`) with a useful anchor and a soft CTA (e.g. "book a free AI diagnostic").
- **Meta description 120-160 characters**, written for a human, includes the keyword.
- **Length:** ~700-1000 words.
- **Banned filler** — never write: "In today's fast-paced world", "ever-evolving landscape", "unlock the power of", "game-changer", "revolutionize", "delve into", "it's important to note", "furthermore/moreover" stacking, or paragraphs that open with "Additionally". Cut corporate speak ("synergy", "leverage", "empower", "seamless").
- **Honesty over hype.** Name what AI can't do and where it goes wrong. Skeptical, specific advice earns citations.

## Visuals / charts (MANDATORY)

> **Source of truth for visual selection: `.claude/skills/insights-visuals/SKILL.md`.**
> That skill holds the full decision guide (which content type → which visual), the
> "how many" guideline, the hand-written inline-SVG icon library, and the exact
> copy-paste snippets for every visual. Load it whenever you write or edit an article.
> The summary below is the quick reference; the skill is authoritative.

**Every article MUST include at least one inline chart** — a bar chart or a stat-row (ideally one of each where the content supports it). Articles must never be walls of text. Beyond the mandatory chart, use **icon-lists**, **callouts**, and **comparison tables** where they genuinely help — match the visual to the data, never decorate emptily. A ~800-word article should carry 2-4 varied visuals total.

Hard rules:

- Charts are **zero-JS inline HTML only**. Never use external images, screenshots, `<img>`, `<canvas>`, or any JS chart library (Chart.js, D3, etc.). The styles already live in `src/pages/insights/[...slug].astro`; you only paste the HTML.
- **Numbers in every chart MUST match the article body exactly.** If the prose says "60-70% of tickets", the chart says the same. Never invent figures that contradict the text — pick numbers straight from your own paragraphs.
- Place the chart inside the section it reinforces (e.g. a savings bar chart near the cost section, a stat-row right after a mini-case).
- **Leave a blank line before and after** each HTML block so the markdown parser passes it through as raw HTML.
- For bar charts, set `--val` to the bar's relative length as a percentage (the largest/most relevant value is usually `100%`; scale the others proportionally). The `.bar-value` is the human-readable figure shown on the right.

Copy these exact snippets:

**Bar chart** (one `<div class="bar">` per row):

```html
<figure class="chart">
  <figcaption>Estimated annual savings by task area</figcaption>
  <div class="bar" style="--val:100%"><span class="bar-label">Customer support</span><span class="bar-track"><span class="bar-fill"></span></span><b class="bar-value">~$20k/yr</b></div>
  <div class="bar" style="--val:60%"><span class="bar-label">Bookkeeping &amp; admin</span><span class="bar-track"><span class="bar-fill"></span></span><b class="bar-value">~$12k/yr</b></div>
  <div class="bar" style="--val:40%"><span class="bar-label">Content &amp; marketing</span><span class="bar-track"><span class="bar-fill"></span></span><b class="bar-value">~$8k/yr</b></div>
</figure>
```

**Stat row** (2-4 `<div class="stat">` cards — big jade number + small label):

```html
<div class="stat-row">
  <div class="stat"><b>9h → &lt;2min</b><span>first-response time on support</span></div>
  <div class="stat"><b>60-70%</b><span>tickets auto-resolved</span></div>
  <div class="stat"><b>30-40%</b><span>bookkeeping hours cut</span></div>
</div>
```

**Comparison table** (plain markdown — styled automatically by `.prose`; use for before/after):

```markdown
| Task            | Before AI      | With AI        |
| --------------- | -------------- | -------------- |
| First response  | 9 hours        | under 2 min    |
| Tickets handled | all manual     | 60-70% auto    |
| Bookkeeping     | 10 hrs/week    | ~3 hrs/week    |
```

**Icon-list** (`<ul class="icon-list">` — features/benefits/steps that each deserve emphasis; each `<li>` starts with a hand-written inline `<svg>` using `stroke="currentColor"`, then a bold lead + description). See the skill's icon library for the full set of ready-to-paste 24×24 line icons:

```html
<ul class="icon-list">
  <li>
    <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"></circle><polyline points="8 12 11 15 16 9"></polyline></svg>
    <span><strong>Document capture first</strong> — fastest payback, lowest risk.</span>
  </li>
  <li>
    <svg viewBox="0 0 24 24" aria-hidden="true"><polyline points="3 17 9 11 13 15 21 7"></polyline><polyline points="15 7 21 7 21 13"></polyline></svg>
    <span><strong>Then automation</strong> — recover onboarding and client-comms time.</span>
  </li>
</ul>
```

**Callout** (`<div class="callout">` — pull out one key insight on a glass card with a jade left-border accent; icon + short emphasized line):

```html
<div class="callout">
  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 18h6"></path><path d="M10 22h4"></path><path d="M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.3 1 2.1V18h6v-1.2c0-.8.4-1.6 1-2.1A7 7 0 0 0 12 2z"></path></svg>
  <p>The firms pulling ahead in 2026 quietly stopped paying qualified staff to type numbers from PDFs.</p>
</div>
```

## Instructions for the daily agent

Each run:

1. List existing files in `src/content/insights/`. Read the backlog above.
2. **Pick the first backlog topic that has no matching file** (compare by slug/topic). Do not duplicate.
3. Write ONE article as a single markdown file at `src/content/insights/<slug>.md`, English only, with full frontmatter:
   ```
   ---
   title: "..."
   description: "..."          # 120-160 chars, includes keyword
   pubDate: <today's date>     # YYYY-MM-DD
   tags: ["...", "...", "..."]
   author: "Metatree Lab"
   draft: false
   ---
   ```
   Follow every writing rule above. Use the seed article (`how-small-businesses-cut-costs-with-ai-2026.md`) as the style template — note how it embeds a bar chart and a stat-row.
4. **Embed at least one inline chart** (bar chart or stat-row) using the snippets in the "Visuals / charts (MANDATORY)" section above. Make sure the chart numbers match your prose, and leave a blank line before/after each HTML block.
5. Run `pnpm check && pnpm build`.
6. **Only commit if both pass.** If either fails, fix the article (usually frontmatter) until green, then commit. Never commit a broken build.
