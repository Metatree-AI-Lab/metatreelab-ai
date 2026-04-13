/**
 * Pitch Deck — slide content for the B2B company overview.
 * All bilingual text lives here; slides reference services/projects/team data files.
 */

export interface DeckSlide {
  id: string;
  label: string; // section label e.g. "/ 01 — COVER"
  title: { en: string; zh: string };
  subtitle?: { en: string; zh: string };
}

export const deckSlides: DeckSlide[] = [
  {
    id: 'cover',
    label: '/ 01 — METATREE LAB',
    title: { en: 'AI consulting that ships\nto production.', zh: '落地型 AI 咨询。' },
    subtitle: {
      en: 'Strategy × Engineering × Delivery',
      zh: '战略 × 工程 × 交付',
    },
  },
  {
    id: 'problem',
    label: '/ 02 — THE PROBLEM',
    title: { en: 'Most AI projects never\nleave the demo stage.', zh: '大多数 AI 项目\n止步于 Demo 阶段。' },
  },
  {
    id: 'who-we-are',
    label: '/ 03 — WHO WE ARE',
    title: { en: 'A digital studio backed by\n5+ years of production.', zh: '一支有 5 年以上\n生产经验的 Digital Studio。' },
  },
  {
    id: 'what-we-do',
    label: '/ 04 — WHAT WE DO',
    title: { en: 'Three service lines.\nOne delivery team.', zh: '三条业务线，\n一个交付团队。' },
  },
  {
    id: 'build',
    label: '/ 05 — AI BUILD',
    title: { en: 'Custom AI engineering\nfor production.', zh: '面向生产的\n定制 AI 工程。' },
  },
  {
    id: 'adopt',
    label: '/ 06 — AI ADOPT',
    title: { en: 'Your team, AI-native\nin days.', zh: '让你的团队\n几天内 AI 化。' },
  },
  {
    id: 'property',
    label: '/ 07 — PROPERTY',
    title: { en: 'Property marketing,\nengineered.', zh: '工程化驱动的\n房产营销。' },
  },
  {
    id: 'cases',
    label: '/ 08 — CASE STUDIES',
    title: { en: 'Production receipts.', zh: '交付成果。' },
  },
  {
    id: 'process',
    label: '/ 09 — HOW WE WORK',
    title: { en: 'From call to production\nin 4 steps.', zh: '从沟通到上线\n只需 4 步。' },
  },
  {
    id: 'engagement',
    label: '/ 10 — HOW TO ENGAGE',
    title: { en: 'Two ways to work\nwith us.', zh: '两种合作模式。' },
  },
  {
    id: 'team',
    label: '/ 11 — TEAM',
    title: { en: 'Small team.\nFull coverage.', zh: '精锐团队，\n全栈覆盖。' },
  },
  {
    id: 'why-us',
    label: '/ 12 — WHY METATREE',
    title: { en: 'How we\'re different.', zh: '我们的不同之处。' },
  },
  {
    id: 'cta',
    label: '/ 13 — LET\'S TALK',
    title: { en: 'Let\'s build something\nthat ships.', zh: '让我们一起\n做出能上线的产品。' },
  },
];

/** Problem slide stats */
export const problemStats = [
  {
    value: '87%',
    label: { en: 'of AI projects never make it to production', zh: '的 AI 项目从未上线' },
  },
  {
    value: '$ 4.6M',
    label: { en: 'average cost of a failed AI initiative', zh: '失败 AI 项目的平均成本' },
  },
  {
    value: '8 mo',
    label: { en: 'median time from POC to abandoned', zh: '从 POC 到放弃的中位时间' },
  },
];

/** Backing stats for who-we-are slide */
export const backingStats = [
  { value: '5+', label: { en: 'Years in production', zh: '年生产经验' } },
  { value: '10+', label: { en: 'Lambda microservices', zh: '个 Lambda 微服务' } },
  { value: '3', label: { en: 'Live AI products', zh: '个上线 AI 产品' } },
  { value: '1000+', label: { en: 'Enterprise partners', zh: '家企业合作伙伴' } },
];

/** Process steps */
export const processSteps = [
  {
    step: '01',
    title: { en: 'Discovery Call', zh: '需求沟通' },
    desc: { en: 'We listen, scope the problem, and agree on outcomes.', zh: '倾听需求，定义问题范围，对齐目标。' },
  },
  {
    step: '02',
    title: { en: 'Strategy Sprint', zh: '战略冲刺' },
    desc: { en: '1-2 week POC to validate feasibility and architecture.', zh: '1-2 周 POC 验证可行性与架构。' },
  },
  {
    step: '03',
    title: { en: 'Build & Ship', zh: '开发交付' },
    desc: { en: 'Production code, not prototypes. Weekly demos, continuous deploy.', zh: '交付生产代码，不是原型。每周 Demo，持续部署。' },
  },
  {
    step: '04',
    title: { en: 'Handover & Support', zh: '交接支持' },
    desc: { en: 'Full docs, SOP, and optional ongoing support.', zh: '完整文档、SOP，可选持续支持。' },
  },
];

/** Engagement models */
export const engagementModels = [
  {
    title: { en: 'Project-Based', zh: '项目制' },
    desc: {
      en: 'Fixed scope, fixed price. Discovery → Sprint → Build → Handover. Ideal for defined deliverables — an AI agent, a RAG system, a property site.',
      zh: '固定范围、固定价格。需求沟通 → 冲刺 → 开发 → 交接。适合目标明确的交付物 — AI Agent、RAG 系统、楼盘官网。',
    },
    suited: { en: 'Best for: defined deliverables with clear scope', zh: '适合：范围明确的定制交付' },
  },
  {
    title: { en: 'Retainer / Embedded', zh: '驻场顾问' },
    desc: {
      en: 'Ongoing partnership. Our team embeds with yours — weekly sprints, shared Slack, continuous delivery. Scale up or down as needed.',
      zh: '持续合作。我们的团队嵌入你的团队 — 每周迭代、共享 Slack、持续交付。按需扩缩。',
    },
    suited: { en: 'Best for: long-term AI transformation & team enablement', zh: '适合：长期 AI 转型与团队赋能' },
  },
];

/** Why us differentiators */
export const whyUsPoints = [
  {
    title: { en: 'Ship First', zh: 'Ship First' },
    desc: {
      en: 'Production over elegance. We deliver working systems, then polish.',
      zh: '上线优先于完美。我们先交付可运行的系统，再打磨。',
    },
  },
  {
    title: { en: 'Every Claim Has Receipts', zh: '每个承诺都有交付记录' },
    desc: {
      en: 'Every capability is backed by a live product we built and run.',
      zh: '每项能力背后都是我们亲手构建并运行的产品。',
    },
  },
  {
    title: { en: 'Team Over Hero', zh: '团队优于英雄' },
    desc: {
      en: 'Small team + docs + SOP. No single point of failure.',
      zh: '小团队 + 文档 + SOP，没有单点故障。',
    },
  },
  {
    title: { en: 'No Corporate Speak', zh: '拒绝空话套话' },
    desc: {
      en: 'Specific results, not buzzwords. No "synergy" or "industry-leading".',
      zh: '只谈具体成果，不说"赋能"和"行业领先"。',
    },
  },
];
