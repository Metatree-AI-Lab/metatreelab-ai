/**
 * Quote Calculator — modular pricing data.
 *
 * Users build a project by selecting a base type + feature modules.
 * Each item has a fixed price. The total is the sum of all selected items.
 *
 * Prices are in AUD. Displayed as "$X,XXX".
 */

export interface PricingItem {
  id: string;
  price: number;
  label: { en: string; zh: string };
  description?: { en: string; zh: string };
}

export interface PricingCategory {
  id: string;
  title: { en: string; zh: string };
  subtitle?: { en: string; zh: string };
  selectionMode: 'single' | 'multiple';
  items: PricingItem[];
}

/* ──────────────────────────────────────────────
 * 1. Project Base Type
 * ────────────────────────────────────────────── */
export const projectBase: PricingCategory = {
  id: 'base',
  title: { en: 'Project Type', zh: '项目类型' },
  subtitle: {
    en: 'Choose a starting point for your project.',
    zh: '选择你的项目起点。',
  },
  selectionMode: 'single',
  items: [
    {
      id: 'landing',
      price: 2000,
      label: { en: 'Landing Page (1-5 pages)', zh: '着陆页（1-5 页）' },
      description: {
        en: 'Single-page or small multi-page site. Perfect for campaigns and product launches.',
        zh: '单页或小型多页站。适合营销活动和产品发布。',
      },
    },
    {
      id: 'business-website',
      price: 5000,
      label: { en: 'Business Website (6-15 pages)', zh: '企业官网（6-15 页）' },
      description: {
        en: 'Full company website with multiple sections, blog-ready, SEO-optimised.',
        zh: '完整企业站，多版块、博客就绪、SEO 优化。',
      },
    },
    {
      id: 'web-app',
      price: 15000,
      label: { en: 'Web Application', zh: 'Web 应用' },
      description: {
        en: 'Interactive application with complex business logic and data workflows.',
        zh: '带复杂业务逻辑和数据工作流的交互式应用。',
      },
    },
    {
      id: 'ai-product',
      price: 50000,
      label: { en: 'AI Agent / LLM Product', zh: 'AI Agent / LLM 产品' },
      description: {
        en: 'Production AI system with agents, RAG, evaluation, and monitoring.',
        zh: '生产级 AI 系统，含 Agent、RAG、评估和监控。',
      },
    },
    {
      id: 'ecommerce',
      price: 12000,
      label: { en: 'E-commerce Platform', zh: '电商平台' },
      description: {
        en: 'Online store with product catalogue, cart, checkout, and order management.',
        zh: '在线商城，含商品目录、购物车、结账和订单管理。',
      },
    },
  ],
};

/* ──────────────────────────────────────────────
 * 2. Pages & Design
 * ────────────────────────────────────────────── */
export const pagesDesign: PricingCategory = {
  id: 'pages',
  title: { en: 'Pages & Design', zh: '页面与设计' },
  subtitle: {
    en: 'Extra pages and design upgrades.',
    zh: '额外页面和设计升级。',
  },
  selectionMode: 'multiple',
  items: [
    {
      id: 'extra-5-pages',
      price: 1500,
      label: { en: '+5 Additional Pages', zh: '+5 额外页面' },
    },
    {
      id: 'extra-10-pages',
      price: 2500,
      label: { en: '+10 Additional Pages', zh: '+10 额外页面' },
    },
    {
      id: 'custom-design',
      price: 3000,
      label: { en: 'Custom UI/UX Design', zh: '定制 UI/UX 设计' },
      description: {
        en: 'Bespoke design system, wireframes, and Figma handoff.',
        zh: '定制设计系统、线框图、Figma 交付。',
      },
    },
    {
      id: 'responsive-premium',
      price: 1500,
      label: { en: 'Premium Responsive (Tablet + Mobile)', zh: '高级响应式（平板 + 手机）' },
      description: {
        en: 'Pixel-perfect adaptation across all breakpoints.',
        zh: '全断点像素级适配。',
      },
    },
    {
      id: 'bilingual',
      price: 2000,
      label: { en: 'Bilingual (EN/ZH)', zh: '双语（中/英）' },
      description: {
        en: 'Full multilingual setup with language switcher.',
        zh: '完整多语言配置，含语言切换器。',
      },
    },
  ],
};

/* ──────────────────────────────────────────────
 * 3. Core Features (Functional Modules)
 * ────────────────────────────────────────────── */
export const coreFeatures: PricingCategory = {
  id: 'features',
  title: { en: 'Functional Modules', zh: '功能模块' },
  subtitle: {
    en: 'Add capabilities to your project.',
    zh: '为你的项目添加功能。',
  },
  selectionMode: 'multiple',
  items: [
    {
      id: 'auth',
      price: 2500,
      label: { en: 'User Registration & Login', zh: '用户注册与登录' },
      description: {
        en: 'Email/password + social login (Google, GitHub). JWT or session-based.',
        zh: '邮箱/密码 + 社交登录（Google、GitHub）。JWT 或 session 鉴权。',
      },
    },
    {
      id: 'admin',
      price: 4000,
      label: { en: 'Admin Dashboard', zh: '管理后台' },
      description: {
        en: 'Content management, user management, analytics overview.',
        zh: '内容管理、用户管理、数据概览。',
      },
    },
    {
      id: 'payment',
      price: 3500,
      label: { en: 'Payment Integration', zh: '支付集成' },
      description: {
        en: 'Stripe / PayPal checkout, subscription billing, invoices.',
        zh: 'Stripe / PayPal 结账、订阅计费、发票。',
      },
    },
    {
      id: 'blog-cms',
      price: 2000,
      label: { en: 'Blog / CMS', zh: '博客 / 内容管理' },
      description: {
        en: 'Headless CMS integration with rich text editor.',
        zh: 'Headless CMS 集成，富文本编辑器。',
      },
    },
    {
      id: 'contact-crm',
      price: 1000,
      label: { en: 'Contact Form + CRM', zh: '联系表单 + CRM' },
      description: {
        en: 'Lead capture form with CRM routing (HubSpot, Salesforce, etc.).',
        zh: '留资表单 + CRM 路由（HubSpot、Salesforce 等）。',
      },
    },
    {
      id: 'search',
      price: 1500,
      label: { en: 'Search & Filtering', zh: '搜索与筛选' },
      description: {
        en: 'Full-text search, faceted filters, auto-complete.',
        zh: '全文搜索、分面筛选、自动补全。',
      },
    },
    {
      id: 'file-upload',
      price: 1200,
      label: { en: 'File Upload & Storage', zh: '文件上传与存储' },
      description: {
        en: 'Image/document uploads with cloud storage (S3/R2).',
        zh: '图片/文档上传，云存储（S3/R2）。',
      },
    },
    {
      id: 'email-notifications',
      price: 800,
      label: { en: 'Email Notifications', zh: '邮件通知' },
      description: {
        en: 'Transactional emails: welcome, password reset, order confirmation.',
        zh: '事务性邮件：欢迎、密码重置、订单确认。',
      },
    },
    {
      id: 'analytics',
      price: 1500,
      label: { en: 'Analytics Dashboard', zh: '数据分析面板' },
      description: {
        en: 'Custom analytics with charts, KPIs, and export.',
        zh: '自定义分析，含图表、KPI 和导出。',
      },
    },
    {
      id: 'api-integration',
      price: 2000,
      label: { en: 'Third-party API Integration', zh: '第三方 API 对接' },
      description: {
        en: 'Connect to external services (maps, SMS, social, ERP, etc.).',
        zh: '对接外部服务（地图、短信、社交、ERP 等）。',
      },
    },
  ],
};

/* ──────────────────────────────────────────────
 * 4. AI Features
 * ────────────────────────────────────────────── */
export const aiFeatures: PricingCategory = {
  id: 'ai',
  title: { en: 'AI Capabilities', zh: 'AI 能力' },
  subtitle: {
    en: 'Add intelligent features powered by AI.',
    zh: '添加 AI 驱动的智能功能。',
  },
  selectionMode: 'multiple',
  items: [
    {
      id: 'ai-chatbot',
      price: 5000,
      label: { en: 'AI Chatbot / Customer Service', zh: 'AI 聊天机器人 / 智能客服' },
      description: {
        en: 'LLM-powered chatbot trained on your business data.',
        zh: '基于你的业务数据训练的 LLM 聊天机器人。',
      },
    },
    {
      id: 'rag',
      price: 15000,
      label: { en: 'RAG Knowledge Base', zh: 'RAG 知识库' },
      description: {
        en: 'Vector search over your documents, tickets, and internal data.',
        zh: '对你的文档、工单和内部数据进行向量检索。',
      },
    },
    {
      id: 'ai-agent',
      price: 30000,
      label: { en: 'AI Agent (Multi-step Reasoning)', zh: 'AI Agent（多步推理）' },
      description: {
        en: 'Autonomous agent with tool use, memory, and human-in-the-loop.',
        zh: '带工具调用、记忆和人工审批的自主 Agent。',
      },
    },
    {
      id: 'workflow-automation',
      price: 8000,
      label: { en: 'AI Workflow Automation', zh: 'AI 工作流自动化' },
      description: {
        en: 'Automate repetitive tasks with AI-powered pipelines.',
        zh: '用 AI 驱动的流水线自动化重复性任务。',
      },
    },
    {
      id: 'doc-processing',
      price: 6000,
      label: { en: 'Smart Document Processing', zh: '智能文档处理' },
      description: {
        en: 'Extract, classify, and summarise documents automatically.',
        zh: '自动提取、分类和摘要文档。',
      },
    },
  ],
};

/* ──────────────────────────────────────────────
 * 5. Hosting & Ongoing Support
 * ────────────────────────────────────────────── */
export const support: PricingCategory = {
  id: 'support',
  title: { en: 'Hosting & Support', zh: '托管与支持' },
  subtitle: {
    en: 'Post-launch maintenance and hosting.',
    zh: '上线后的维护与托管。',
  },
  selectionMode: 'multiple',
  items: [
    {
      id: 'hosting-setup',
      price: 500,
      label: { en: 'Hosting & Deployment Setup', zh: '托管与部署配置' },
      description: {
        en: 'Domain, SSL, CI/CD pipeline, cloud infrastructure.',
        zh: '域名、SSL、CI/CD 流水线、云基础设施。',
      },
    },
    {
      id: 'seo',
      price: 1500,
      label: { en: 'SEO Optimisation Package', zh: 'SEO 优化套餐' },
      description: {
        en: 'Technical SEO, sitemap, structured data, page speed.',
        zh: '技术 SEO、站点地图、结构化数据、页面速度优化。',
      },
    },
    {
      id: 'maintenance-monthly',
      price: 800,
      label: { en: 'Monthly Maintenance (per month)', zh: '月度维护（每月）' },
      description: {
        en: 'Bug fixes, security patches, minor updates, uptime monitoring.',
        zh: 'Bug 修复、安全补丁、小更新、在线率监控。',
      },
    },
    {
      id: 'priority-support',
      price: 2500,
      label: { en: 'Priority Support Retainer (per month)', zh: '优先支持 Retainer（每月）' },
      description: {
        en: 'Dedicated Slack channel, 4-hour response SLA, feature iterations.',
        zh: '专属 Slack 频道、4 小时响应 SLA、功能迭代。',
      },
    },
  ],
};

/* ──────────────────────────────────────────────
 * All categories in display order
 * ────────────────────────────────────────────── */
export const allCategories: PricingCategory[] = [
  projectBase,
  pagesDesign,
  coreFeatures,
  aiFeatures,
  support,
];
