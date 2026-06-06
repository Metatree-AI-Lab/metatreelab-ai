---
title: "A First-90-Days AI Roadmap for SMB Owners"
description: "How to go from zero to measurable AI savings in 90 days — a practical phase-by-phase plan for small business owners, with named tools and real numbers."
pubDate: 2026-06-06
tags: ["AI for business", "small business", "AI roadmap", "getting started"]
author: "Lightman Wang"
draft: false
---

Most AI projects at small businesses die in the research phase. The owner reads six articles, joins a webinar, ends up with a Notion doc full of "AI opportunities" — and six months later nothing has changed except a subscription nobody uses.

The fix is a deadline and a narrow scope. Here is a three-phase, 90-day plan that consistently produces measurable savings for 5-to-50-person businesses. No data scientist, no six-figure budget, no "transformation programme" required.

## Phase 1, Days 1–30: Diagnose Before You Buy

The most expensive AI mistake is buying a solution before you know the problem. In the first month, do exactly one thing: audit where your team's time actually goes.

Run a two-week time log. Ask every team member to spend five minutes on Friday afternoon writing down every repeating task they did that week. Common entries look like: "answered the same billing question again", "copied quotes into the CRM", "formatted the weekly report", "replied to supplier price enquiries". No categories — just a raw list.

Then rank by weekly hours × loaded hourly cost. The tasks at the top are your candidates. Most businesses find 3–5 tasks that together consume 15–25 hours a week of skilled staff time.

Pick ONE: the most repetitive, most text-heavy task that doesn't require judgment calls you'd be uncomfortable delegating to a junior hire. That's your pilot.

**What you should not do in month one:** buy any tool, run any demo, or commission any custom build. The diagnosis comes first.

## Phase 2, Days 31–60: Run One Pilot

With your top candidate identified, find the off-the-shelf tool that solves it most directly. Off-the-shelf before custom — always. Custom AI is slower to build, harder to maintain, and more expensive than buying a well-built SaaS product that already does the job.

Some common matches:

- **Inbound customer questions** → Intercom Fin, Tidio AI, or a custom assistant on the OpenAI or Anthropic API (~$50–200/month)
- **Invoice and receipt processing** → Dext, Hubdoc, or Ramp (~$30–150/month)
- **Proposal and quote drafts** → Ignition, Scoro, or a GPT-4o prompt template in Notion (~$20–80/month)
- **Social and marketing copy** → Claude.ai or ChatGPT with a saved brand voice (~$20–100/month)

Run the tool for 30 days. Measure one metric: hours saved per week. Not "efficiency", not "outputs" — the actual hours your specific team member gets back. If it's real, you'll see it in two weeks.

If the tool saves 4+ hours a week and costs under $200/month, ROI is already positive. If it saves nothing after 30 days, drop it and move to the second candidate.

<figure class="chart">
  <figcaption>Typical weekly hours recovered per task area (pilot results across clients)</figcaption>
  <div class="bar" style="--val:100%"><span class="bar-label">Customer support</span><span class="bar-track"><span class="bar-fill"></span></span><b class="bar-value">~8 hrs/wk</b></div>
  <div class="bar" style="--val:75%"><span class="bar-label">Invoice processing</span><span class="bar-track"><span class="bar-fill"></span></span><b class="bar-value">~6 hrs/wk</b></div>
  <div class="bar" style="--val:50%"><span class="bar-label">Drafting &amp; comms</span><span class="bar-track"><span class="bar-fill"></span></span><b class="bar-value">~4 hrs/wk</b></div>
  <div class="bar" style="--val:25%"><span class="bar-label">Data entry &amp; reporting</span><span class="bar-track"><span class="bar-fill"></span></span><b class="bar-value">~2 hrs/wk</b></div>
</figure>

## Phase 3, Days 61–90: Lock In and Decide What's Next

A successful pilot produces a habit, not just a result. In month three, the goal is to make the tool irreversible — standard operating procedure, documented, embedded with the full team — so the recovered hours don't slowly drift back when the novelty fades.

Write one page of internal documentation: what the tool does, when to use it, and critically, when *not* to use it. Hand it to whoever is the day-to-day user, not the person who chose the tool.

Then, and only then, go back to your task audit and pick the second candidate. Repeat the same 30-day pilot process.

By day 90, a focused business typically has one AI tool deeply embedded, a second in late pilot, and a clear picture of what, if anything, would require a custom build. Most companies don't need custom in the first year.

<ul class="icon-list">
  <li>
    <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"></circle><polyline points="8 12 11 15 16 9"></polyline></svg>
    <span><strong>Days 1–30: Diagnose</strong> — two-week time log, rank by hours × cost, pick ONE pilot candidate. Zero tools purchased.</span>
  </li>
  <li>
    <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="6" y="6" width="12" height="12" rx="2"></rect><path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3"></path><rect x="10" y="10" width="4" height="4"></rect></svg>
    <span><strong>Days 31–60: Pilot</strong> — one off-the-shelf tool, one metric (hours saved per week), 30-day test. Drop it if the number doesn't move.</span>
  </li>
  <li>
    <svg viewBox="0 0 24 24" aria-hidden="true"><polyline points="3 17 9 11 13 15 21 7"></polyline><polyline points="15 7 21 7 21 13"></polyline></svg>
    <span><strong>Days 61–90: Lock in</strong> — document it, train the team, make it SOP. Then choose the second candidate.</span>
  </li>
</ul>

## What a Real 90-Day Run Looks Like

A 14-person property management firm ran exactly this process in early 2026. Their biggest time drain: tenants emailing the same maintenance and lease questions, answered manually by two property managers for 3–4 hours each day.

Month one: a time audit confirmed 18–20 hours per week across both PMs on inbound emails and calls that followed a predictable script.

Month two: they deployed a chatbot on the OpenAI API, trained on their lease templates, maintenance policy, and past email replies. Total cost: $120/month plus one day of setup. By week three it was handling 65% of inbound enquiries autonomously.

Month three: the two PMs recovered 12–14 hours a week between them. One shifted into a junior portfolio role that had been sitting vacant. The other absorbed a 15% larger portfolio at no extra salary cost.

<div class="stat-row">
  <div class="stat"><b>18–20 hrs/wk</b><span>email time before AI</span></div>
  <div class="stat"><b>65%</b><span>enquiries auto-handled</span></div>
  <div class="stat"><b>12–14 hrs/wk</b><span>recovered each week</span></div>
</div>

Total outlay over 90 days: roughly $700 in tooling and a day of professional setup. The ROI appeared in the first month — and was still compounding three months later.

## What AI Can't Shortcut in 90 Days

Two things consistently take longer than founders expect.

**Data quality.** If your customer records are a mess, your invoices come in five different formats, or your team's emails are completely inconsistent, the AI will underperform until you clean that up. The 90-day plan assumes basic operational hygiene. If it doesn't exist, add two to three weeks of prep before starting the pilot.

**Change adoption.** Staff who've done a task manually for years don't automatically trust the AI version. Budget real time for training — not a five-minute demo. The teams that get the best results are the ones where the day-to-day user feels like they chose the tool, not had it imposed on them. That's the difference between a tool that saves 8 hours a week and one that quietly gets ignored.

<div class="callout">
  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 18h6"></path><path d="M10 22h4"></path><path d="M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.3 1 2.1V18h6v-1.2c0-.8.4-1.6 1-2.1A7 7 0 0 0 12 2z"></path></svg>
  <p>The 90-day constraint is not arbitrary — it forces the scoping that makes AI projects succeed. Unbounded timelines produce unbounded scope, and unbounded scope produces nothing.</p>
</div>

The businesses making real progress aren't running AI strategy workshops. They're running 30-day pilots on boring tasks and measuring hours. The first win creates the confidence — and the freed-up budget — for the second.

If you want a fast read on which two or three tasks in your business are the best AI candidates, [book a free AI diagnostic with us](/contact/). We'll map your workflows in one session and hand you a concrete pilot brief — nothing theoretical.
