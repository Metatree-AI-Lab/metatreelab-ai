/**
 * Project portfolio — reference cases for the Work page.
 *
 * Categories:
 * - ai-systems → AI products/infrastructure (parent company or clients)
 * - property   → Property marketing sites (real clients)
 * - brand      → Brand identity / design work
 */

export type ProjectCategory = 'ai-systems' | 'property' | 'brand';

export interface ProjectEntry {
  slug: string;
  category: ProjectCategory;
  tags: string[];
  year: number;
  featured: boolean;
  order: number;

  name: string;
  client: string;

  summary: { en: string; zh: string };
  outcomes?: { en: string[]; zh: string[] };
  stack?: string[];
  url?: string;
}

export const projects: ProjectEntry[] = [
  {
    slug: 'sigmaq',
    category: 'ai-systems',
    tags: ['AI', 'SaaS'],
    year: 2024,
    featured: true,
    order: 2,
    name: 'SigmaQ',
    client: 'JR Academy',
    summary: {
      en: 'Multi-tenant enterprise assessment SaaS with Stripe subscriptions, LMS integration via webhooks, and an anti-cheat engine. Powers certification prep for IT professionals at scale.',
      zh: '多租户企业级测评 SaaS，带 Stripe 订阅、LMS webhook 集成、防作弊引擎。规模化服务 IT 专业人士的认证备考。',
    },
    outcomes: {
      en: [
        '4-tier subscription (Free / $29 / $49 / Enterprise)',
        'Multi-tenant domain routing ({org}.sigmaq.co)',
        '93 LinkedIn skill assessments + AWS SAA-C03 library',
      ],
      zh: [
        '4 档订阅（免费 / $29 / $49 / 企业）',
        '多租户域名路由（{org}.sigmaq.co）',
        '93 个 LinkedIn 技能测评 + AWS SAA-C03 题库',
      ],
    },
    stack: ['NestJS', 'MongoDB', 'React', 'Stripe', 'AWS'],
    url: 'https://sigmaq.co',
  },
  {
    slug: 'metatown',
    category: 'ai-systems',
    tags: ['AI', 'SaaS', 'Platform'],
    year: 2025,
    featured: true,
    order: 2,
    name: 'MetaTown',
    client: 'Metatree Lab',
    cover: '/work/metatown.png',
    summary: {
      en: 'Virtual office and campus platform that turns remote collaboration into an immersive shared world. Customisable avatars, real-time spatial movement, video meetings, whiteboard, SSO — supporting 100+ users simultaneously.',
      zh: '虚拟办公与线上校园平台，把远程协作变成可沉浸的共享世界。自定义头像、实时空间移动、视频会议、白板、SSO — 支持 100+ 人同时在线。',
    },
    outcomes: {
      en: [
        'Spatial virtual world replacing grid-style video calls',
        'Real-time avatar movement with proximity-based audio/video',
        'Integrated video meetings, screen sharing, and whiteboard',
        'SSO authentication and 100+ concurrent user support',
      ],
      zh: [
        '空间虚拟世界，替代网格式视频通话',
        '实时头像移动 + 基于距离的音视频',
        '集成视频会议、屏幕共享、白板',
        'SSO 认证，支持 100+ 人同时在线',
      ],
    },
    stack: ['React', 'WebRTC', 'Canvas', 'WebSocket', 'SSO'],
    url: 'https://metatown.ai',
  },

  {
    slug: 'jobpin-ai',
    category: 'ai-systems',
    tags: ['AI', 'SaaS', 'Agent'],
    year: 2025,
    featured: true,
    order: 3,
    name: 'Jobpin AI',
    client: 'Metatree Lab',
    cover: '/work/jobpin-ai.png',
    summary: {
      en: 'AI-powered job matching platform with intelligent agent that searches across the web for hidden opportunities, auto-generates tailored resumes and cover letters, and connects candidates to insider referral networks. Trusted by 100+ companies.',
      zh: 'AI 驱动的智能求职平台。AI Agent 全网搜索隐藏岗位机会，自动生成定制简历和求职信，连接内推人脉网络。已获 100+ 企业信任。',
    },
    outcomes: {
      en: [
        'AI Job Agent scanning web + company networks for off-market roles',
        'Resume & cover letter generator tailored per JD with keyword optimization',
        'Insider referral network connecting candidates to target companies',
        'Daily personalized job recommendations with compatibility scoring',
      ],
      zh: [
        'AI Job Agent 全网 + 企业内网扫描 off-market 岗位',
        '按 JD 定制的简历和求职信生成器，带关键词优化',
        '内推人脉网络，连接候选人与目标公司',
        '每日个性化岗位推荐 + 匹配度评分',
      ],
    },
    stack: ['Next.js', 'AI Agent', 'LLM', 'RAG'],
    url: 'https://jobpin.ai',
  },

  {
    slug: 'jracademy-ai',
    category: 'ai-systems',
    tags: ['AI', 'EdTech', 'Platform'],
    year: 2025,
    featured: true,
    order: 4,
    name: 'JR Academy AI',
    client: 'JR Academy',
    cover: '/work/jracademy-ai.png',
    summary: {
      en: 'AI-powered education platform empowering global talent with AI & tech training. Partnered with Atlassian, Google, and AWS. 1000+ cooperative enterprises, bootcamps, P3 incubator, and enterprise training solutions.',
      zh: 'AI 驱动的教育平台，面向全球人才提供 AI 与技术培训。与 Atlassian、Google、AWS 合作，1000+ 合作企业，提供 Bootcamp、P3 孵化器和企业培训方案。',
    },
    outcomes: {
      en: [
        '1000+ cooperative enterprises',
        'Partnerships with Atlassian, Google, AWS',
        'AI-powered bootcamps and P3 incubator program',
        'Enterprise training solutions for global talent',
      ],
      zh: [
        '1000+ 合作企业',
        '与 Atlassian、Google、AWS 合作',
        'AI 驱动的 Bootcamp 与 P3 孵化器',
        '面向全球人才的企业培训方案',
      ],
    },
    stack: ['Next.js', 'NestJS', 'MongoDB', 'AWS', 'AI'],
    url: 'https://jracademy.ai',
  },

  {
    slug: 'afaa',
    category: 'brand',
    tags: ['Association', 'Web', 'Brand'],
    year: 2025,
    featured: false,
    order: 7,
    name: 'AFAA',
    client: 'Australian Federation of AI Associations',
    cover: '/work/afaa.png',
    summary: {
      en: 'Official website for the Australian Federation of AI Associations — connecting academia, industry, and government for AI innovation. 1k+ members joined. Membership portal, events, and community hub.',
      zh: '澳大利亚人工智能协会联合会官网 — 连接学术界、产业界与政府，推动 AI 创新。1000+ 会员加入。会员门户、活动管理与社区中心。',
    },
    outcomes: {
      en: [
        'Membership portal with tiered plans',
        'Events management and registration system',
        '1k+ members onboarded',
        'Connecting academia, industry, and government',
      ],
      zh: [
        '分级会员门户系统',
        '活动管理与报名系统',
        '1000+ 会员入驻',
        '连接学术界、产业界与政府',
      ],
    },
    stack: ['Next.js', 'CMS', 'Membership'],
    url: 'https://afaa.ai',
  },

  {
    slug: 'argus-systems',
    category: 'ai-systems',
    tags: ['AI', 'Infrastructure', 'Critical Systems'],
    year: 2025,
    featured: false,
    order: 9,
    name: 'Argus Systems',
    client: 'Argus Systems',
    summary: {
      en: 'AI infrastructure for real-world critical systems. Founded by Carnegie Mellon, Georgia Tech, and Harvard veterans with backgrounds in Waymo autonomous vehicles and military intelligence. Resilience-first AI for high-stakes environments.',
      zh: 'AI 基础设施，面向真实世界关键系统。由 Carnegie Mellon、Georgia Tech 和 Harvard 背景的团队创立，拥有 Waymo 自动驾驶和军事情报经验。为高风险环境打造可靠 AI。',
    },
    outcomes: {
      en: [
        'AI resilience for critical infrastructure',
        'Founded by CMU / Georgia Tech / Harvard veterans',
        'Prior experience: Waymo autonomous vehicles as public transit',
        'Military intelligence + autonomous systems pedigree',
      ],
      zh: [
        '关键基础设施的 AI 可靠性',
        'CMU / Georgia Tech / Harvard 背景团队创立',
        '前经历：Waymo 自动驾驶公共交通',
        '军事情报 + 自主系统基因',
      ],
    },
    stack: ['AI', 'Infrastructure', 'Autonomous Systems'],
    url: 'https://argus.systems',
  },

  {
    slug: 'gotocourt',
    category: 'ai-systems',
    tags: ['AI', 'LegalTech', 'Platform'],
    year: 2025,
    featured: false,
    order: 8,
    name: 'Go To Court',
    client: 'Go To Court Lawyers',
    summary: {
      en: "Australia's largest legal service platform. 800+ lawyers, 24/7 AI-powered legal hotline, rapid matching with local specialists. Helped 750,000+ Australians access legal support since 2010.",
      zh: '澳大利亚最大的法律服务平台。800+ 律师、24/7 AI 法律热线、快速匹配本地专家。自 2010 年起已帮助 75 万+ 澳洲人获得法律支持。',
    },
    outcomes: {
      en: [
        '800+ lawyers across all Australian states',
        '24/7 AI-powered free legal hotline',
        '750,000+ Australians helped since 2010',
        '#1 ranked legal service on Product Review (780+ reviews)',
      ],
      zh: [
        '800+ 律师覆盖澳洲所有州',
        '24/7 AI 免费法律热线',
        '自 2010 年帮助 75 万+ 澳洲人',
        'Product Review 法律服务排名第一（780+ 评价）',
      ],
    },
    stack: ['AI', 'Legal Tech', 'Platform'],
    url: 'https://www.gotocourt.com.au',
  },

  {
    slug: 'level3-ai',
    category: 'ai-systems',
    tags: ['AI', 'SaaS', 'Agent'],
    year: 2025,
    featured: false,
    order: 5,
    name: 'Level3 AI',
    client: 'Level3 AI',
    summary: {
      en: 'Conversational AI agents for enterprise customer support and sales across APAC. 95+ languages, 16+ countries, multi-modal (chat, voice, images). Clients report 50-150% efficiency gains and 90-95% CSAT scores within 3 months.',
      zh: '面向亚太企业客服与销售的对话式 AI Agent。支持 95+ 语言、覆盖 16+ 国家、多模态（聊天、语音、图片）。客户 3 个月内效率提升 50-150%，CSAT 达 90-95%。',
    },
    outcomes: {
      en: [
        '95+ languages across 16+ APAC countries',
        '50-150% agent efficiency improvement',
        '80-95% ticket resolution rate',
        '90-95% CSAT within 3 months or money-back',
      ],
      zh: [
        '95+ 语言覆盖 16+ 亚太国家',
        'Agent 效率提升 50-150%',
        '工单解决率 80-95%',
        '3 个月内 CSAT 达 90-95%，否则退款',
      ],
    },
    stack: ['AI Agent', 'NLP', 'Multi-modal', 'Enterprise'],
    url: 'https://www.level3.ai',
  },

  {
    slug: 'dispatch-ai',
    category: 'ai-systems',
    tags: ['AI', 'SaaS'],
    year: 2025,
    featured: false,
    order: 5,
    name: 'Dispatch AI',
    client: 'Metatree Lab',
    summary: {
      en: 'AI-powered dispatch and operations platform. Built to streamline workflows and automate task routing with intelligent agents.',
      zh: 'AI 驱动的调度与运营平台。通过智能 Agent 自动化任务路由，优化工作流效率。',
    },
    stack: ['Next.js', 'AI Agent', 'LLM'],
    url: 'https://getdispatch.ai',
  },

  {
    slug: 'j3-club',
    category: 'brand',
    tags: ['E-commerce', 'Brand', 'Web'],
    year: 2024,
    featured: false,
    order: 6,
    name: 'J3 Club',
    client: 'JR Exclusives',
    cover: '/work/j3-club.png',
    summary: {
      en: 'Full e-commerce store for JR Academy\'s tech-lifestyle merchandise brand. Student discounts, secure checkout, and a curated collection of IT-inspired apparel and accessories.',
      zh: '为 JR Academy 的科技生活方式周边品牌打造的完整电商平台。学生折扣、安全支付，精选 IT 风格服饰与配件。',
    },
    outcomes: {
      en: [
        'Full Shopify-powered e-commerce with custom theme',
        'Student discount and promo code system',
        'Merchandise collection: apparel, bags, accessories, homeware',
        'Mobile-first responsive design',
      ],
      zh: [
        '基于 Shopify 的完整电商 + 定制主题',
        '学生折扣与优惠码系统',
        '周边系列：服饰、包袋、配件、家居',
        'Mobile-first 响应式设计',
      ],
    },
    stack: ['Shopify', 'E-commerce', 'Custom Theme'],
    url: 'https://j3.club',
  },

  {
    slug: 'forma-property',
    category: 'property',
    tags: ['Property', 'Web'],
    year: 2024,
    featured: true,
    order: 8,
    name: 'Forma Property',
    client: 'Forma Group',
    cover: '/work/forma-property.png',
    summary: {
      en: 'Developer group main site for a Sydney-based property firm. Editorial minimal aesthetic with commercial + residential project showcases and investor-grade positioning.',
      zh: '悉尼一家房地产开发商集团的主站。编辑级极简美学，商业 + 住宅项目集合展示，投资级品牌定位。',
    },
    outcomes: {
      en: [
        'Unified commercial & residential portfolio',
        'Investor-facing brand positioning',
        'Shipped and live in production',
      ],
      zh: [
        '商业与住宅项目统一作品集',
        '面向投资人的品牌定位',
        '已上线生产环境',
      ],
    },
    url: 'https://www.formaproperty.com.au',
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export const projectsByCategory = {
  'ai-systems': projects.filter((p) => p.category === 'ai-systems'),
  property: projects.filter((p) => p.category === 'property'),
  brand: projects.filter((p) => p.category === 'brand'),
};
