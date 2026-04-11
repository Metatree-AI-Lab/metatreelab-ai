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
    slug: 'training-rag',
    category: 'ai-systems',
    tags: ['AI', 'RAG'],
    year: 2025,
    featured: true,
    order: 1,
    name: 'training-rag',
    client: 'JR Academy',
    summary: {
      en: 'Production RAG powering personalised learning paths at JR Academy. LangChain orchestration over pgvector on AWS Lambda, serving learners across Australia, North America and APAC.',
      zh: '为匠人学院生成个性化学习路径的生产级 RAG。LangChain 编排 + AWS Lambda 上的 pgvector，服务澳洲、北美、亚太学员。',
    },
    outcomes: {
      en: [
        'Personalised path generation for 5+ content domains',
        'Sub-500ms retrieval latency p95',
        'Fully automated re-indexing pipeline',
      ],
      zh: [
        '覆盖 5+ 内容领域的个性化路径生成',
        'p95 检索延迟 < 500ms',
        '全自动重建索引流水线',
      ],
    },
    stack: ['LangChain', 'pgvector', 'Supabase', 'AWS Lambda', 'OpenAI'],
  },
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
    slug: 'jr-prompt-lab',
    category: 'ai-systems',
    tags: ['AI', 'Tool'],
    year: 2025,
    featured: false,
    order: 3,
    name: 'jr-prompt-lab',
    client: 'JR Academy',
    summary: {
      en: 'Serverless prompt engineering lab with experiment tracking, version control, and LLM-judge evaluation. Powers prompt management across all of JR Academy\'s AI features.',
      zh: 'Serverless prompt 工程实验室，带实验追踪、版本管理、LLM-judge 评估。为匠人学院所有 AI 功能提供 prompt 管理。',
    },
    stack: ['AWS Lambda', 'DynamoDB', 'React'],
  },
  {
    slug: 'mcp-servers',
    category: 'ai-systems',
    tags: ['AI', 'Infra'],
    year: 2025,
    featured: false,
    order: 4,
    name: 'MCP Servers',
    client: 'JR Academy',
    summary: {
      en: 'Custom MCP (Model Context Protocol) servers exposing JR Academy course, video, teacher and roadmap data as tools callable by any MCP-compatible client.',
      zh: '自研 MCP（Model Context Protocol）服务器，把匠人学院的课程、视频、老师、roadmap 数据暴露为任何 MCP 客户端可调用的工具。',
    },
    stack: ['TypeScript', 'MCP SDK', 'Node.js'],
  },
  {
    slug: 'kzj-ai-tutor',
    category: 'ai-systems',
    tags: ['AI', 'Agent', 'Chrome Ext'],
    year: 2024,
    featured: false,
    order: 5,
    name: '考证匠 AI Tutor',
    client: 'JR Academy',
    summary: {
      en: 'Chrome extension AI tutor for IT certification exam prep. Reads screenshots, explains answers, builds weak-point drills. 0.6.7 live.',
      zh: 'IT 认证备考 Chrome AI 陪练扩展。读截图、讲解答案、针对弱点出题。0.6.7 线上运行。',
    },
    stack: ['Chrome Extension', 'Claude API', 'Vision'],
  },
  {
    slug: 'qzj-job-hunter',
    category: 'ai-systems',
    tags: ['AI', 'Agent', 'Chrome Ext'],
    year: 2024,
    featured: false,
    order: 6,
    name: '求职匠 Job Hunter',
    client: 'JR Academy',
    summary: {
      en: 'Chrome extension AI agent for job search on Seek and LinkedIn. Auto-analyses JD fit, drafts applications, tracks the funnel.',
      zh: 'Seek 和 LinkedIn 求职的 Chrome AI agent 扩展。自动分析 JD 匹配、起草申请、追踪流程。',
    },
    stack: ['Chrome Extension', 'Claude API'],
  },
  {
    slug: 'nxj-uni-tutor',
    category: 'ai-systems',
    tags: ['AI', 'Agent', 'Chrome Ext'],
    year: 2024,
    featured: false,
    order: 7,
    name: '牛小匠 AI',
    client: 'JR Academy',
    summary: {
      en: 'Chrome extension AI tutor for university coursework. LMS-integrated, context-aware tutoring and assignment help.',
      zh: '面向大学课程的 Chrome AI 学习伴侣扩展。LMS 集成、上下文感知的辅导与作业帮助。',
    },
    stack: ['Chrome Extension', 'Claude API'],
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
