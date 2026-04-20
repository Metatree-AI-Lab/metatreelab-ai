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
    title: { en: 'Cut costs. Ship faster.\nAI that works.', zh: '降本增效，\nAI 真正落地。' },
    subtitle: {
      en: 'Your AI Partner · Strategy × Delivery × Training',
      zh: '你的 AI 合作伙伴 · 战略 × 交付 × 培训',
    },
  },
  {
    id: 'problem',
    label: '/ 02 — THE PROBLEM',
    title: { en: 'Your competitors are\nalready using AI.', zh: '你的竞争对手\n已经在用 AI 了。' },
  },
  {
    id: 'who-we-are',
    label: '/ 03 — WHO WE ARE',
    title: { en: 'We\'re an AI company\nthat builds for others.', zh: '我们自己就是 AI 公司，\n同时帮别人做。' },
  },
  {
    id: 'what-we-do',
    label: '/ 04 — WHAT WE DO',
    title: { en: 'Three ways we\nhelp your business.', zh: '三种方式\n帮你的业务增长。' },
  },
  {
    id: 'build',
    label: '/ 05 — AI BUILD',
    title: { en: 'Custom AI systems\nthat save you money.', zh: '帮你省钱的\n定制 AI 系统。' },
  },
  {
    id: 'adopt',
    label: '/ 06 — AI ADOPT',
    title: { en: 'Your team, AI-native\nin days.', zh: '让你的团队\n几天内 AI 化。' },
  },
  {
    id: 'property',
    label: '/ 07 — PROPERTY',
    title: { en: 'Same quality. A fraction\nof agency prices.', zh: '同样品质，\n价格只是代理的零头。' },
  },
  {
    id: 'cases',
    label: '/ 08 — CASE STUDIES',
    title: { en: 'Real results from\nreal clients.', zh: '真实客户，\n真实成果。' },
  },
  {
    id: 'process',
    label: '/ 09 — HOW WE WORK',
    title: { en: 'From call to results\nin 4 simple steps.', zh: '从沟通到见效\n只需 4 步。' },
  },
  {
    id: 'engagement',
    label: '/ 10 — HOW TO ENGAGE',
    title: { en: 'Two ways to work\nwith us.', zh: '两种合作模式。' },
  },
  {
    id: 'consultants',
    label: '/ 11 — CONSULTANTS',
    title: { en: '16 senior engineers.\nAustralia-wide.', zh: '16 位资深工程师，\n覆盖全澳。' },
  },
  {
    id: 'why-us',
    label: '/ 12 — WHY METATREE',
    title: { en: 'Everyone says they do AI.\nHere\'s why we\'re different.', zh: '都说自己做 AI，\n我们凭什么不一样？' },
  },
  {
    id: 'cta',
    label: '/ 13 — LET\'S TALK',
    title: { en: 'Free 30-minute call.\nSee how much you can save.', zh: '免费 30 分钟评估，\n看看能帮你省多少。' },
  },
];

/** Problem slide stats — business pain, not tech jargon */
export const problemStats = [
  {
    value: '70%',
    label: { en: 'of businesses say they\'re falling behind on AI adoption', zh: '的企业认为自己在 AI 应用上已经落后' },
  },
  {
    value: '20h+',
    label: { en: 'per week wasted on tasks AI can automate', zh: '每周浪费在 AI 可以自动化的工作上' },
  },
  {
    value: '10×',
    label: { en: 'cost difference between traditional agencies and AI-powered delivery', zh: '传统代理与 AI 驱动交付的成本差距' },
  },
];

/** Backing stats for who-we-are slide */
export const backingStats = [
  { value: '5+', label: { en: 'Years building AI systems', zh: '年 AI 系统搭建经验' } },
  { value: '50+', label: { en: 'Businesses trust us', zh: '家企业选择我们' } },
  { value: '70%', label: { en: 'Avg. cost reduction', zh: '平均帮客户降低成本' } },
  { value: '3', label: { en: 'Offices across Australia', zh: '个澳洲办公室' } },
];

/** Process steps */
export const processSteps = [
  {
    step: '01',
    title: { en: 'Free Consultation', zh: '免费评估' },
    desc: { en: 'We listen to your challenges and identify where AI saves you the most.', zh: '倾听你的挑战，找出 AI 能帮你省最多的地方。' },
  },
  {
    step: '02',
    title: { en: 'Plan & Quote', zh: '方案报价' },
    desc: { en: 'Clear scope, fixed price, no surprises. You know exactly what you get.', zh: '明确范围、固定价格、没有意外。你清楚知道会拿到什么。' },
  },
  {
    step: '03',
    title: { en: 'Build & Deliver', zh: '开发交付' },
    desc: { en: 'We build it fast — you see progress every week, not after months.', zh: '快速开发——每周看到进展，不是等几个月。' },
  },
  {
    step: '04',
    title: { en: 'Train & Support', zh: '培训支持' },
    desc: { en: 'Your team learns to use it. We stay available for ongoing support.', zh: '你的团队学会使用。我们持续提供支持。' },
  },
];

/** Engagement models */
export const engagementModels = [
  {
    title: { en: 'Fixed Price', zh: '固定报价' },
    desc: {
      en: 'Tell us the problem. We scope it, build it, and hand you a working system — on a fixed price and timeline. No surprises. You own everything we deliver.',
      zh: '告诉我们问题。我们评估、开发、交付——固定价格、固定周期。没有意外加价。所有交付物归你所有。',
    },
    suited: { en: 'Best for: defined projects with clear goals', zh: '适合：目标明确的项目' },
  },
  {
    title: { en: 'Ongoing Partner', zh: '长期陪跑' },
    desc: {
      en: 'We become your AI department — without the overhead. Continuous optimisation, new opportunities, training. Your growth is our KPI.',
      zh: '我们就是你的 AI 部门——但没有固定人力开销。持续优化、发现新机会、培训团队。你的增长就是我们的 KPI。',
    },
    suited: { en: 'Best for: businesses that want continuous AI improvement', zh: '适合：想持续用 AI 提升的企业' },
  },
];

/** Why us differentiators — company DNA angle */
export const whyUsPoints = [
  {
    title: { en: "Australia's largest AI network", zh: '全澳最大的 AI 技术网络' },
    desc: {
      en: '1000+ enterprise partners. Google, AWS, Atlassian alumni. Not a small shop — a network.',
      zh: '1000+ 企业合作伙伴。Google、AWS、Atlassian 背景。不是小作坊——是一个网络。',
    },
  },
  {
    title: { en: 'Top-tier talent, not freelancers', zh: '大厂人才，不是外包' },
    desc: {
      en: 'Our people come from Google, AWS, Big 4, and banks. Enterprise standards on your project.',
      zh: '我们的人来自 Google、AWS、四大、银行。用大厂标准做你的项目。',
    },
  },
  {
    title: { en: 'Startups to enterprise', zh: '从初创到大企业' },
    desc: {
      en: '$2k quick wins to $200k+ enterprise architecture. We\'ve done the big builds.',
      zh: '$2k 快速方案到 $200k+ 企业级架构。大项目我们做过，复杂系统我们搭过。',
    },
  },
  {
    title: { en: 'Build, teach, and stay', zh: '能做、能教、能陪跑' },
    desc: {
      en: '30+ AI trainers. We build it, train your team, and stay as your AI partner.',
      zh: '30+ 位培训师。搭系统、教团队、长期陪跑。',
    },
  },
];
