/**
 * Service catalogue — structured, typed, bilingual.
 * Single source of truth for all service pages and card components.
 *
 * Tracks:
 * - build            → AI Systems: Build (high ticket, long cycle)
 * - adopt            → AI Systems: Adopt (mid ticket, short cycle)
 * - digital-employee → AI Digital Employee (enterprise memory + agent platform)
 * - property         → Property Marketing
 */

export type ServiceTrack = 'build' | 'adopt' | 'digital-employee' | 'property';

export interface ServiceEntry {
  slug: string;
  track: ServiceTrack;
  flagship: boolean;
  duration: string;
  priceBand?: string;
  order: number;
  tags: string[];

  title: { en: string; zh: string };
  subtitle: { en: string; zh: string };
  summary: { en: string; zh: string };
  deliverables: { en: string[]; zh: string[] };
  proof?: { en: string; zh: string };
}

export const services: ServiceEntry[] = [
  // ========== AI BUILD TRACK ==========
  {
    slug: 'ai-strategy-sprint',
    track: 'build',
    flagship: false,
    duration: '1-2w',
    order: 1,
    tags: ['strategy', 'poc', 'roadmap'],
    title: {
      en: 'AI Strategy Sprint',
      zh: 'AI 战略冲刺',
    },
    subtitle: {
      en: 'A runnable proof-of-concept and roadmap — not a slide deck.',
      zh: '一个跑得起来的 POC + 落地路线图，不是 PPT。',
    },
    summary: {
      en: 'One to two weeks to validate whether AI can actually deliver value for your business problem. You leave with a working demo, a scoped roadmap, and clear go/no-go criteria.',
      zh: '1 到 2 周验证 AI 能否真正为你的业务问题交付价值。你会拿到一个可运行的 demo、一份明确的路线图，以及 go/no-go 判断标准。',
    },
    deliverables: {
      en: [
        'Business & technical feasibility assessment',
        'Working proof-of-concept (not slideware)',
        'Scoped implementation roadmap',
        'Cost and risk projection',
        'Go / no-go recommendation',
      ],
      zh: [
        '业务与技术可行性评估',
        '可运行的 POC（不是 PPT）',
        '落地实施路线图',
        '成本与风险评估',
        '继续 / 停止 判断建议',
      ],
    },
  },

  {
    slug: 'rag-knowledge-systems',
    track: 'build',
    flagship: false,
    duration: '2-6w',
    order: 2,
    tags: ['rag', 'knowledge', 'vector', 'embeddings'],
    title: {
      en: 'RAG & Knowledge Systems',
      zh: 'RAG 与知识系统',
    },
    subtitle: {
      en: 'Production-grade retrieval over your internal docs, tickets, code and data.',
      zh: '面向你内部文档、工单、代码和数据的生产级检索系统。',
    },
    summary: {
      en: 'We build RAG pipelines that survive production load. The same architecture runs inside JR Academy\'s `training-rag` — LangChain + pgvector on AWS Lambda — serving real learners every day.',
      zh: '我们搭建可承受生产负载的 RAG 流水线。同样的架构正在匠人学院的 training-rag 上运行（LangChain + pgvector on AWS Lambda），每天服务真实学员。',
    },
    deliverables: {
      en: [
        'Document ingestion and chunking pipeline',
        'Vector store with metadata-aware retrieval',
        'Evaluation harness (recall / precision / LLM-judge)',
        'Observability and cost dashboards',
        'Handover training and runbooks',
      ],
      zh: [
        '文档接入与分片流水线',
        '带 metadata 的向量存储与检索',
        '评估基建（召回 / 精度 / LLM-judge）',
        '可观测性与成本面板',
        '交接培训 + runbook',
      ],
    },
    proof: {
      en: 'training-rag — LangChain + pgvector on AWS Lambda, live at JR Academy.',
      zh: 'training-rag — LangChain + pgvector on AWS Lambda，在匠人学院线上运行。',
    },
  },

  {
    slug: 'ai-agent-development',
    track: 'build',
    flagship: true,
    duration: '3-8w',
    order: 3,
    tags: ['agent', 'tool-use', 'flagship'],
    title: {
      en: 'AI Agent Development',
      zh: 'AI Agent 搭建',
    },
    subtitle: {
      en: 'Autonomous agents that reason, use tools, and finish work.',
      zh: '能推理、能调用工具、能把事做完的 AI Agent。',
    },
    summary: {
      en: '2025-2026 is the year of agents. We build production AI agents with multi-step reasoning, tool use, human-in-the-loop checkpoints and full observability. Our team ships three live Chrome agent products for JR Academy — the architecture playbook is not theory, it is what we run.',
      zh: '2025-2026 是 agent 元年。我们搭建带多步推理、tool use、human-in-the-loop 检查点、完整可观测性的生产级 AI agent。我们团队为匠人学院运营着 3 款线上 Chrome agent 产品 — 架构不是理论，是我们在跑的东西。',
    },
    deliverables: {
      en: [
        'Agent architecture design (single vs. orchestrator vs. hierarchical)',
        'Tool development (MCP, internal APIs, third-party integrations)',
        'Memory system (short-term, long-term, episodic)',
        'Safety & governance layer (rate limits, approvals, audit log)',
        'Evaluation harness with LLM-judge and regression tests',
        'Deployment, monitoring, and on-call runbooks',
      ],
      zh: [
        'Agent 架构设计（单体 / orchestrator / 层级）',
        '工具开发（MCP、内部 API、第三方集成）',
        '记忆系统（短期 / 长期 / episodic）',
        '安全与治理层（限流、审批、审计日志）',
        '带 LLM-judge 和回归测试的评估基建',
        '部署、监控、on-call runbook',
      ],
    },
    proof: {
      en: 'Agent-Skills knowledge base · MCP servers · 3 live Chrome AI agents (考证匠 / 求职匠 / 牛小匠).',
      zh: 'Agent-Skills 知识库 · 自研 MCP servers · 3 款线上 Chrome AI agents（考证匠 / 求职匠 / 牛小匠）。',
    },
  },

  {
    slug: 'ai-deployment',
    track: 'build',
    flagship: true,
    duration: '2-8w',
    order: 4,
    tags: ['deployment', 'fde', 'forward-deployed', 'production', 'flagship'],
    title: {
      en: 'AI Deployment & Forward Deployed Engineering',
      zh: 'AI 落地部署 · Forward Deployed Engineering',
    },
    subtitle: {
      en: 'We embed an engineer in your team and take AI from pilot to production.',
      zh: '我们派工程师驻进你的团队，把 AI 从 pilot 一路推到生产。',
    },
    summary: {
      en: 'Most AI projects die in the gap between a working demo and a system people actually use. We close that gap with the Forward Deployed Engineer model: an engineer embeds with your team, wires the AI into your real systems and workflows, hardens it for production, and stays until it is genuinely running — then hands it over. This is exactly how we ship JR Academy\'s AI to production every day, and the model behind our live OpenClaw and Hermes Agent client deployments.',
      zh: '大多数 AI 项目都死在"demo 能跑"到"团队真的在用"之间的那道鸿沟。我们用 Forward Deployed Engineer（驻场工程师）模式来填平它：工程师驻进你的团队，把 AI 接进你真实的系统和工作流，做生产级加固，一直陪到它真正稳定运行，再交接给你。这正是我们每天把匠人学院的 AI 推到生产的方式，也是我们线上 OpenClaw 与 Hermes Agent 客户部署背后的模式。',
    },
    deliverables: {
      en: [
        'Production-readiness audit of your existing AI POC / pilot',
        'Forward Deployed Engineer embedded with your team (remote-first, on-site in MEL / SYD)',
        'Integration into real systems (CRM, ERP, data warehouse, internal APIs)',
        'Production hardening: eval harness, guardrails, observability, cost controls',
        'CI/CD + Infrastructure-as-Code deployment pipeline (AWS / GCP / Azure / on-prem)',
        'Monitoring, alerting, and on-call runbooks',
        'Knowledge transfer so your team owns it after we leave',
      ],
      zh: [
        '对你现有 AI POC / pilot 做生产就绪审计',
        'Forward Deployed Engineer 驻场你的团队（远程为主，墨尔本 / 悉尼可现场）',
        '接入真实系统（CRM、ERP、数据仓库、内部 API）',
        '生产级加固：评估基建、护栏、可观测性、成本管控',
        'CI/CD + IaC 部署流水线（AWS / GCP / Azure / 自建机房）',
        '监控、告警、on-call runbook',
        '知识转移，我们离开后你团队自己能维护',
      ],
    },
    proof: {
      en: 'We deploy AI to production daily — JR Academy, plus live OpenClaw & Hermes Agent client deployments.',
      zh: '我们每天把 AI 推到生产 — 匠人学院，以及线上的 OpenClaw 与 Hermes Agent 客户部署。',
    },
  },

  {
    slug: 'custom-llm-applications',
    track: 'build',
    flagship: false,
    duration: '3-8w',
    order: 5,
    tags: ['llm', 'app', 'eval'],
    title: {
      en: 'Custom LLM Applications',
      zh: '定制 LLM 应用',
    },
    subtitle: {
      en: 'Dialogue, generation, analysis, moderation — with eval baked in.',
      zh: '对话、生成、分析、审核 — 评估体系从一开始就内置。',
    },
    summary: {
      en: 'Bespoke LLM applications built with production quality in mind. We wire in evaluation harnesses, monitoring and cost guardrails from day one so you never ship a system you cannot measure.',
      zh: '为你定制的 LLM 应用，从第一天就为生产质量设计。评估基建、监控和成本护栏从一开始就内置，确保你从不发布一个无法度量的系统。',
    },
    deliverables: {
      en: [
        'Prompt engineering and versioning pipeline',
        'Model selection and benchmarking',
        'Eval framework (golden set, LLM-judge, A/B testing)',
        'Cost and latency monitoring',
        'Production deployment on your infra',
      ],
      zh: [
        'Prompt 工程与版本管理流水线',
        '模型选型与 benchmark',
        '评估框架（golden set、LLM-judge、A/B 测试）',
        '成本与延迟监控',
        '部署到你自己的基础设施',
      ],
    },
  },

  {
    slug: 'ai-platform-engineering',
    track: 'build',
    flagship: false,
    duration: 'retainer',
    order: 6,
    tags: ['platform', 'saas', 'multi-tenant'],
    title: {
      en: 'AI Platform Engineering',
      zh: 'AI 平台工程',
    },
    subtitle: {
      en: 'Multi-tenant AI SaaS architecture, LLM gateway, eval harness.',
      zh: '多租户 AI SaaS 架构、LLM 网关、评估基建。',
    },
    summary: {
      en: 'For teams building AI-native products. We help you scale from prototype to multi-tenant platform with governance, cost control, and reliable evaluation. Same stack pattern as SigmaQ — our parent company\'s 4-tier assessment SaaS with Stripe billing and LMS integration.',
      zh: '面向正在构建 AI 原生产品的团队。我们帮你从原型走到多租户平台，带治理、成本控制和可靠评估。和 SigmaQ 一样的 stack pattern — 我们母公司的 4 档订阅测评 SaaS，带 Stripe 计费和 LMS 集成。',
    },
    deliverables: {
      en: [
        'Multi-tenant architecture and data isolation',
        'LLM gateway with routing, caching, fallbacks',
        'Usage metering and cost attribution',
        'Tenant admin and billing integration',
        'SRE, on-call playbooks, and SLOs',
      ],
      zh: [
        '多租户架构与数据隔离',
        'LLM 网关（路由、缓存、降级）',
        '用量统计与成本分摊',
        '租户管理与计费集成',
        'SRE、on-call 手册、SLO',
      ],
    },
    proof: {
      en: 'SigmaQ — 4-tier Stripe subscription, LMS integration, multi-tenant SaaS.',
      zh: 'SigmaQ — 4 档 Stripe 订阅、LMS 集成、多租户 SaaS。',
    },
  },

  {
    slug: 'web3-blockchain',
    track: 'build',
    flagship: false,
    duration: '2-6w',
    order: 7,
    tags: ['web3', 'blockchain', 'dapp', 'defi'],
    title: {
      en: 'Web3 & Blockchain Applications',
      zh: 'Web3 与区块链应用',
    },
    subtitle: {
      en: 'DApps, DeFi platforms, NFT marketplaces, and blockchain infrastructure.',
      zh: 'DApp、DeFi 平台、NFT 市场与区块链基础设施。',
    },
    summary: {
      en: 'We build Web3 applications from smart contracts to full-stack DApps. Token economies, DeFi protocols, NFT platforms, DAO tooling, and blockchain data infrastructure — shipped to mainnet with security audits and production monitoring.',
      zh: '从智能合约到全栈 DApp 的完整 Web3 应用开发。代币经济、DeFi 协议、NFT 平台、DAO 工具、区块链数据基建 — 审计通过后部署到主网，配套生产监控。',
    },
    deliverables: {
      en: [
        'Smart contract development and security audits',
        'Full-stack DApp frontend + backend',
        'DeFi protocol and token economy design',
        'NFT marketplace and minting platforms',
        'Wallet integration and on-chain analytics',
        'Mainnet deployment with monitoring',
      ],
      zh: [
        '智能合约开发与安全审计',
        '全栈 DApp 前后端',
        'DeFi 协议与代币经济设计',
        'NFT 市场与铸造平台',
        '钱包集成与链上分析',
        '主网部署 + 监控',
      ],
    },
  },

  // ========== AI ADOPT TRACK ==========
  {
    slug: 'claude-cowork-setup',
    track: 'adopt',
    flagship: true,
    duration: '1-2w',
    order: 10,
    tags: ['claude-code', 'claude-cowork', 'flagship', 'rollout'],
    title: {
      en: 'Claude Cowork Setup & Consulting',
      zh: 'Claude Cowork 搭建 & 咨询',
    },
    subtitle: {
      en: 'We install Claude across your team — not just teach them to click buttons.',
      zh: '我们把 Claude 装进你的团队 — 而不是只教他们点按钮。',
    },
    summary: {
      en: 'Full technical rollout of Claude Code, Claude Desktop and Claude.ai for your engineering and product teams. We configure environments, wire up MCP servers, write your `CLAUDE.md`, develop custom subagents, and train your team on the workflows that actually matter. Our own team uses Claude Code every day shipping JR Academy — we use it and we teach it.',
      zh: 'Claude Code、Claude Desktop 和 Claude.ai 的完整技术落地。我们配置环境、接入 MCP 服务器、写 CLAUDE.md、开发定制 subagents、按真实业务场景培训你的团队。我们自己天天用 Claude Code 给匠人学院发货 — 自己用，也教别人用。',
    },
    deliverables: {
      en: [
        'Environment & SSO setup with usage governance',
        'Project-level CLAUDE.md, settings.json, hooks, slash commands',
        'MCP server integration (databases, internal APIs, Jira/Linear/Notion/Feishu/WeCom)',
        'Custom subagents for your workflows (code review, test gen, migrations)',
        '5-10 reference workflows on your real business scenarios',
        'Team collaboration SOPs and prompt library',
        'Technical training repackaged from JR Academy curriculum',
        '1-2 weeks hands-on + 30 days Slack support',
      ],
      zh: [
        '环境与 SSO 搭建 + 用量治理',
        '项目级 CLAUDE.md、settings.json、hooks、slash commands',
        'MCP 服务器接入（数据库、内部 API、Jira/Linear/Notion/飞书/企微）',
        '为你业务开发定制 subagents（code review、test 生成、迁移）',
        '基于你真实业务场景的 5-10 个示范 workflow',
        '团队协作 SOP 与 prompt library',
        '从匠人学院课程重新打包的技术培训',
        '1-2 周陪跑 + 30 天 Slack 支持',
      ],
    },
    proof: {
      en: 'Our team ships JR Academy with Claude Code daily. We use it and we teach it.',
      zh: '我们团队天天用 Claude Code 给匠人学院发货。自己用，也教别人用。',
    },
  },

  {
    slug: 'ai-agent-workflow-automation',
    track: 'adopt',
    flagship: true,
    duration: '1-4w',
    order: 10,
    tags: ['agent', 'automation', 'workflow', 'flagship'],
    title: {
      en: 'AI Agent Workflow Automation',
      zh: 'AI Agent 自动化工作流',
    },
    subtitle: {
      en: 'Replace repetitive manual work with AI agents that run 24/7.',
      zh: '用 7×24 小时运行的 AI Agent 替代重复性人工操作。',
    },
    summary: {
      en: 'We help companies design and deploy AI agent workflows that automate real business processes — not toy demos. From customer support triage and lead qualification to document processing, content generation, and cross-system data sync. We assess your highest-ROI automation opportunities, build the agent pipelines, integrate with your existing tools (CRM, ERP, Slack, WeChat, email), and hand over with documentation so your team owns it.',
      zh: '帮企业设计和部署 AI Agent 工作流，自动化真实业务流程 — 不是玩具 demo。从客服分流、线索评分，到文档处理、内容生成、跨系统数据同步。我们评估最高 ROI 的自动化机会，搭建 agent 管道，对接现有工具（CRM、ERP、Slack、微信、邮箱），交付文档让你团队能自己维护。',
    },
    deliverables: {
      en: [
        'Automation opportunity audit and ROI prioritisation',
        'AI agent pipeline design and development',
        'Integration with existing tools (CRM, ERP, Slack, WeChat, email, databases)',
        'Human-in-the-loop checkpoints for critical decisions',
        'Error handling, retries, and alerting',
        'Monitoring dashboard and cost tracking',
        'Documentation and team handover training',
        'Optional: deploy on OpenClaw 🦞 for self-hosted, privacy-first setups',
      ],
      zh: [
        '自动化机会审计与 ROI 优先级排序',
        'AI Agent 管道设计与开发',
        '对接现有工具（CRM、ERP、Slack、微信、邮箱、数据库）',
        '关键决策点的 human-in-the-loop 检查',
        '错误处理、重试与告警',
        '监控面板与成本追踪',
        '文档与团队接手培训',
        '可选：部署到 OpenClaw 🦞 实现自托管、数据不出内网',
      ],
    },
    proof: {
      en: 'We run 10+ automated agent workflows internally. Same architecture, deployed for your business.',
      zh: '我们内部运行 10+ 个自动化 agent 工作流。同样的架构，部署到你的业务。',
    },
  },

  {
    slug: 'openclaw-implementation',
    track: 'adopt',
    flagship: true,
    duration: '1-3w',
    order: 11,
    tags: ['openclaw', 'lobster', 'self-hosted', 'flagship', 'agent'],
    title: {
      en: 'OpenClaw Implementation 🦞',
      zh: 'OpenClaw 实施 🦞',
    },
    subtitle: {
      en: 'Self-hosted, agent-first automation — known in the community as "the lobster".',
      zh: '自托管、agent-first 的自动化框架 — 圈内人称"龙虾"。',
    },
    summary: {
      en: 'OpenClaw is the open-source agent framework everyone in the agent community is talking about. It runs on your own infrastructure with native WeChat, Feishu and Slack integration. For clients with data residency requirements or Chinese-market needs, it outperforms n8n, Make, and Zapier — no SaaS dependency, no per-seat pricing, full TypeScript plugin system.',
      zh: 'OpenClaw 是 agent 开发者圈现在最热的开源 agent 框架。完全自托管，原生支持微信、飞书、企微、Slack。对有数据合规需求或做中国市场的客户来说，它比 n8n、Make、Zapier 都强 — 无 SaaS 依赖、无人头计费、完整 TypeScript 插件系统。',
    },
    deliverables: {
      en: [
        'Deployment on your infra (AWS / GCP / Aliyun / on-prem)',
        'Workflow orchestration from ClawFlows templates + custom TypeScript skills',
        'Custom skill development (ERP / CRM / OA / internal knowledge base)',
        'Message channel integration (WeChat / Feishu / WeCom / Slack / Discord)',
        'Data security, access control, and audit logging',
        'Ongoing operations retainer and skill iteration',
      ],
      zh: [
        '在你基建上部署（AWS / GCP / 阿里云 / 自建机房）',
        '基于 ClawFlows 模板 + 定制 TypeScript skill 的 workflow 编排',
        '定制 skill 开发（ERP / CRM / OA / 内部知识库）',
        '消息通道集成（微信 / 飞书 / 企微 / Slack / Discord）',
        '数据安全、权限边界、审计日志',
        'Retainer 持续运维与 skill 迭代',
      ],
    },
    proof: {
      en: 'Strategic service — native Chinese IM integration + self-hosted deployment unlock markets n8n/Zapier cannot.',
      zh: '战略服务 — 原生中文 IM 集成 + 自托管部署，打开 n8n/Zapier 做不到的市场。',
    },
  },

  {
    slug: 'hermes-agent-implementation',
    track: 'adopt',
    flagship: true,
    duration: '1-3w',
    order: 12,
    tags: ['hermes', 'self-improving', 'flagship', 'agent'],
    title: {
      en: 'Hermes Agent Implementation',
      zh: 'Hermes Agent 实施',
    },
    subtitle: {
      en: 'The self-improving AI agent with 64k+ GitHub stars — deployed for your team.',
      zh: '64k+ GitHub Star 的自进化 AI Agent — 为你的团队部署。',
    },
    summary: {
      en: 'Hermes Agent by Nous Research is the hottest open-source AI agent of 2026 — self-improving, persistent memory, 40+ built-in tools, runs on a $5 VPS. It learns from every conversation and writes reusable skill documents that make it better over time. We deploy it on your infrastructure, connect it to your team\'s Slack, Telegram, Discord or WhatsApp, build custom skills for your workflows, and set up the persistent memory system so it actually gets smarter the more your team uses it.',
      zh: 'Hermes Agent 是 Nous Research 出品的 2026 年最火开源 AI Agent — 自进化、持久记忆、40+ 内置工具、$5 VPS 就能跑。它从每次对话中学习，自动生成可复用的 skill 文档，越用越聪明。我们在你的基建上部署，接入团队的 Slack / Telegram / Discord / WhatsApp，开发定制 skill，配置持久记忆系统，让它真正随着使用变得更强。',
    },
    deliverables: {
      en: [
        'Deployment on your infrastructure (Linux / macOS / VPS / cloud)',
        'Multi-platform gateway setup (Slack, Telegram, Discord, WhatsApp, Signal)',
        'Custom skill development for your business workflows',
        'Persistent memory configuration (SQLite + FTS5 indexing)',
        'Self-improvement loop tuning and evaluation',
        'Security boundaries and usage governance',
        'Team onboarding and skill authoring training',
      ],
      zh: [
        '在你的基建上部署（Linux / macOS / VPS / 云）',
        '多平台网关配置（Slack、Telegram、Discord、WhatsApp、Signal）',
        '为你业务工作流开发定制 skill',
        '持久记忆配置（SQLite + FTS5 索引）',
        '自进化循环调优与评估',
        '安全边界与用量治理',
        '团队上手培训 + skill 编写教程',
      ],
    },
    proof: {
      en: 'Hermes Agent: 64k+ GitHub stars, Nous Research, self-improving loop — the agent framework developers are migrating to in 2026.',
      zh: 'Hermes Agent：64k+ GitHub Star，Nous Research 出品，自进化循环 — 2026 年开发者正在迁移的 agent 框架。',
    },
  },

  {
    slug: 'workflow-automation',
    track: 'adopt',
    flagship: false,
    duration: '1-3w',
    order: 12,
    tags: ['n8n', 'make', 'zapier', 'automation'],
    title: {
      en: 'Workflow Automation',
      zh: '工作流自动化',
    },
    subtitle: {
      en: 'n8n, Make, Zapier — we design it, build it, teach you to own it.',
      zh: 'n8n、Make、Zapier — 我们设计、搭建、培训你接手。',
    },
    summary: {
      en: 'For teams that need the lighter-weight automation stack. We scope your highest-ROI workflows, build them end-to-end, and hand them over with documentation and training so your team owns and extends the system after we leave.',
      zh: '适合需要更轻量自动化栈的团队。我们评估 ROI 最高的 workflow，端到端搭建，并交付文档和培训，让你的团队在我们离开后能自己维护和扩展。',
    },
    deliverables: {
      en: [
        'Workflow audit and prioritisation',
        'End-to-end workflow build on n8n / Make / Zapier',
        'Integration with your CRM / ERP / messaging tools',
        'Error handling, retries, and monitoring',
        'Documentation and team handover training',
      ],
      zh: [
        'Workflow 盘点与优先级评估',
        'n8n / Make / Zapier 端到端 workflow 搭建',
        '对接你的 CRM / ERP / 消息工具',
        '错误处理、重试、监控',
        '文档和团队接手培训',
      ],
    },
  },

  {
    slug: 'ai-tools-rollout',
    track: 'adopt',
    flagship: false,
    duration: '3-5d',
    order: 13,
    tags: ['chatgpt', 'copilot', 'cursor', 'rollout'],
    title: {
      en: 'AI Tools Rollout',
      zh: 'AI 工具铺开',
    },
    subtitle: {
      en: 'ChatGPT, Copilot, Cursor, Gemini — get your whole team using them properly.',
      zh: 'ChatGPT、Copilot、Cursor、Gemini — 让整个团队把它们真正用起来。',
    },
    summary: {
      en: 'Licensing, usage governance, best-practice playbooks and a short training series so your team actually uses the AI tools you are paying for. No more shelfware.',
      zh: '授权管理、用量治理、最佳实践手册 + 短期培训系列，让你团队真正把付了钱的 AI 工具用起来。别再当摆设。',
    },
    deliverables: {
      en: [
        'Tool evaluation and selection (role-based)',
        'License governance and cost controls',
        'Best-practice playbook per tool',
        'Training workshops (engineering, product, ops, sales)',
        'Usage metrics and adoption tracking',
      ],
      zh: [
        '按角色做工具评估与选型',
        '许可治理与成本管控',
        '每个工具的最佳实践手册',
        '培训 workshop（工程、产品、运营、销售）',
        '用量指标与 adoption 追踪',
      ],
    },
  },

  {
    slug: 'ai-adoption-enablement',
    track: 'adopt',
    flagship: false,
    duration: 'retainer',
    order: 14,
    tags: ['retainer', 'training', 'governance', 'change'],
    title: {
      en: 'AI Adoption & Enablement',
      zh: 'AI 导入与组织启用',
    },
    subtitle: {
      en: 'Ongoing change management, training, and governance as your team scales.',
      zh: '团队规模扩大时，持续的变革管理、培训和治理。',
    },
    summary: {
      en: 'A long-term partnership covering employee training, SOP rewrites, prompt library maintenance, governance documentation, and continuous adoption tracking. Training content reuses JR Academy\'s AI curriculum, repackaged for your team — a capability no other AI consultancy has.',
      zh: '长期合作，覆盖员工培训、SOP 改造、prompt library 维护、治理文档和持续 adoption 追踪。培训内容复用匠人学院的 AI 课程，按你的团队重新打包 — 这是其他 AI 咨询公司没有的能力。',
    },
    deliverables: {
      en: [
        'Quarterly employee training workshops',
        'SOP rewrite and process integration',
        'Company prompt library maintenance',
        'AI governance, safety, and compliance documentation',
        'Adoption tracking and continuous improvement',
      ],
      zh: [
        '季度员工培训 workshop',
        'SOP 改造与流程整合',
        '公司 prompt library 维护',
        'AI 治理、安全、合规文档',
        'Adoption 追踪与持续改进',
      ],
    },
  },

  // ========== AI TRAINING TRACK ==========
  {
    slug: 'enterprise-ai-training',
    track: 'adopt',
    flagship: false,
    duration: '3-10d',
    order: 15,
    tags: ['training', 'enterprise', 'workshop'],
    title: {
      en: 'Enterprise AI Training',
      zh: '企业 AI 培训',
    },
    subtitle: {
      en: 'Upskill your entire team on AI — from executives to engineers.',
      zh: '让你整个团队掌握 AI — 从管理层到工程师。',
    },
    summary: {
      en: 'Customised AI training programs for enterprise teams. We cover AI fundamentals for executives, prompt engineering for product teams, agent development for engineers, and AI governance for compliance. Backed by curriculum that has trained thousands of professionals across Australia and APAC.',
      zh: '为企业团队定制的 AI 培训项目。涵盖高管 AI 基础、产品团队 prompt 工程、工程师 agent 开发、合规团队 AI 治理。背后是已培训数千名澳洲和亚太专业人士的成熟课程体系。',
    },
    deliverables: {
      en: [
        'AI Fundamentals for Executives (half-day workshop)',
        'Prompt Engineering for Product & Ops teams (1-2 day intensive)',
        'AI Agent Development for Engineers (1-2 week bootcamp)',
        'Claude Code & AI Tools team rollout training',
        'AI Governance & Risk for compliance teams',
        'Custom curriculum tailored to your industry and tech stack',
        'Post-training assessment and certification',
      ],
      zh: [
        '高管 AI 基础（半天 Workshop）',
        '产品与运营团队 Prompt 工程（1-2 天集训）',
        '工程师 AI Agent 开发（1-2 周 Bootcamp）',
        'Claude Code & AI 工具团队落地培训',
        '合规团队 AI 治理与风险',
        '按你的行业和技术栈定制课程',
        '培训后评估与认证',
      ],
    },
    proof: {
      en: 'Curriculum has trained 5000+ professionals across Australia and APAC. Delivered in partnership with JR Academy.',
      zh: '课程已培训 5000+ 名澳洲和亚太专业人士。与匠人学院（JR Academy）联合交付。',
    },
  },

  // ========== DIGITAL EMPLOYEE TRACK ==========
  // An AI employee that onboards once, remembers forever, and gets sharper every day.
  // Anchored in an enterprise-grade memory system that also powers Hermes / OpenClaw / custom agents.
  {
    slug: 'digital-employee-pilot',
    track: 'digital-employee',
    flagship: false,
    duration: '2-3w',
    order: 1,
    tags: ['pilot', 'starter', 'digital-employee'],
    title: {
      en: 'Digital Employee Pilot',
      zh: '数字员工 Pilot',
    },
    subtitle: {
      en: 'One role, one channel, live in 2-3 weeks.',
      zh: '1 个角色、1 个渠道，2-3 周上线。',
    },
    summary: {
      en: 'Start with a single, well-scoped digital employee — one role (customer support, lead qualifier, internal Q&A, etc.) on one channel (Slack or WeChat). We set up a starter memory layer, build the core skills, and get it running against real traffic. Low commitment, fast validation, clear upgrade path to the full Core engagement.',
      zh: '从一个定义清晰的单一数字员工开始 — 1 个角色（客服、lead 筛查、内部问答等）× 1 个渠道（Slack 或微信）。我们搭建一套启动版记忆层、开发核心 skill，让它面对真实流量跑起来。低投入、快速验证，向 Core 方案升级路径清晰。',
    },
    deliverables: {
      en: [
        'Scoped role definition and success metrics',
        'Single-channel deployment (Slack / Teams / WeChat / Feishu — your pick)',
        'Starter memory layer (SQLite + FTS5, long-term knowledge ingestion)',
        '5-10 custom skills for the scoped role',
        'Eval harness with golden test set',
        '30-day go-live support',
      ],
      zh: [
        '角色定义与成功指标',
        '单渠道部署（Slack / Teams / 微信 / 飞书，任选一个）',
        '启动版记忆层（SQLite + FTS5，长期知识灌入）',
        '针对该角色的 5-10 个定制 skill',
        '带 golden test set 的评估基建',
        '上线后 30 天陪跑',
      ],
    },
  },

  {
    slug: 'digital-employee-core',
    track: 'digital-employee',
    flagship: true,
    duration: '6-12w',
    order: 2,
    tags: ['digital-employee', 'memory', 'flagship', 'agent', 'enterprise'],
    title: {
      en: 'AI Digital Employee · Core',
      zh: 'AI 数字员工 · Core',
    },
    subtitle: {
      en: 'Onboards once, remembers forever, gets sharper every day.',
      zh: '入职一次，永久记忆，越用越聪明。',
    },
    summary: {
      en: 'The full build: an enterprise-grade digital employee backed by a three-layer memory system (short-term / long-term / episodic) deployed across Slack, Feishu, WeChat, Teams, email and your CRM. Traditional employees take 6 months to ramp up and walk out with their know-how. This one onboards once, accumulates your business knowledge forever, and gets sharper with every interaction. The same memory layer powers Hermes Agent, OpenClaw and any custom agents you deploy.',
      zh: '完整版构建：企业级数字员工，底层是三层记忆系统（短期 / 长期 / episodic），横跨 Slack、飞书、微信、Teams、邮箱和 CRM 部署。传统员工 6 个月才上手，离职时把 know-how 全带走。这位员工只需 onboarding 一次，业务知识永久沉淀，每次交互都让它更聪明。同一套记忆层驱动 Hermes Agent、OpenClaw 和你自研的任何 agent。',
    },
    deliverables: {
      en: [
        'Three-layer memory system: short-term / long-term / episodic, multi-backend (SQLite+FTS5 / pgvector / graph)',
        'Persona & SOP ingestion — encode how your team actually works',
        'Multi-channel deployment (Slack / Feishu / WeChat / Teams / email / CRM)',
        'Cross-agent memory sharing — one knowledge layer for Hermes, OpenClaw, custom agents',
        'Data isolation, access control, audit logging (enterprise-compliance grade)',
        'Self-improvement loop — employee learns from every interaction and writes reusable skills',
        'Onboarding program — we train the digital employee alongside your team like a new hire',
        '90-day ramp-up support + retainer option',
      ],
      zh: [
        '三层记忆系统：短期 / 长期 / episodic，多后端（SQLite+FTS5 / pgvector / 图数据库）',
        'Persona 与 SOP 灌入 — 把你团队的工作方式编码进去',
        '多渠道部署（Slack / 飞书 / 微信 / Teams / 邮箱 / CRM）',
        '跨 agent 记忆共享 — 同一层知识驱动 Hermes、OpenClaw 与自研 agent',
        '数据隔离、权限边界、审计日志（企业合规级）',
        '自进化循环 — 员工从每次交互中学习，自动生成可复用 skill',
        'Onboarding 项目 — 陪你团队像培训新员工一样"训练"数字员工',
        '90 天 ramp-up 陪跑 + retainer 可选',
      ],
    },
    proof: {
      en: 'The pattern we run internally — agents + persistent memory + self-updating skills library — is the architecture we deploy for clients. We ship JR Academy with it every day.',
      zh: '我们内部就是这个模式在跑 — agent + 持久记忆 + 自更新 skills library。每天用它给匠人学院发货，交付给客户的是同一套架构。',
    },
  },

  {
    slug: 'enterprise-memory-platform',
    track: 'digital-employee',
    flagship: false,
    duration: '4-8w',
    order: 3,
    tags: ['memory', 'platform', 'infrastructure', 'digital-employee'],
    title: {
      en: 'Enterprise Memory Platform',
      zh: '企业级记忆平台',
    },
    subtitle: {
      en: 'Just the memory backbone — drop into any agent stack you already run.',
      zh: '只要记忆底座 — 嵌入你已有的任何 agent 栈。',
    },
    summary: {
      en: 'For teams who already have agents but lack a real persistent memory layer. We build the horizontal memory platform your agents plug into — short-term, long-term and episodic memory with pluggable backends (SQLite+FTS5, pgvector, Neo4j), an SDK your engineers call from any framework (LangChain, LlamaIndex, Hermes, OpenClaw, custom), a recall/precision eval harness, and the observability and access-control you need to put it in front of customers.',
      zh: '适合已经有 agent、但缺真正持久记忆层的团队。我们搭建一套横向记忆平台，你现有的 agent 对接上去就能用 — 短期 / 长期 / episodic 记忆，可插拔后端（SQLite+FTS5、pgvector、Neo4j），给工程师一套 SDK 从任何框架调用（LangChain、LlamaIndex、Hermes、OpenClaw、自研），配套召回/精度评估基建，以及可观测性和权限控制，真正能面向客户使用。',
    },
    deliverables: {
      en: [
        'Three-layer memory architecture (short-term / long-term / episodic)',
        'Pluggable backend selection per workload (SQLite+FTS5 / pgvector / graph)',
        'Memory SDK + API — framework-agnostic integration',
        'Recall / precision / LLM-judge evaluation harness',
        'Observability, cost tracking, access control, audit log',
        'Integration guide for Hermes / OpenClaw / LangChain / custom agents',
      ],
      zh: [
        '三层记忆架构（短期 / 长期 / episodic）',
        '按 workload 选型的可插拔后端（SQLite+FTS5 / pgvector / 图数据库）',
        'Memory SDK + API — 框架无关集成',
        '召回 / 精度 / LLM-judge 评估基建',
        '可观测性、成本追踪、权限控制、审计日志',
        'Hermes / OpenClaw / LangChain / 自研 agent 对接指南',
      ],
    },
  },

  {
    slug: 'digital-employee-retainer',
    track: 'digital-employee',
    flagship: false,
    duration: 'retainer',
    order: 4,
    tags: ['retainer', 'operations', 'digital-employee'],
    title: {
      en: 'Digital Employee Operations Retainer',
      zh: '数字员工运维 Retainer',
    },
    subtitle: {
      en: 'Keep your digital employees sharp — skill authoring, memory curation, eval.',
      zh: '持续让你的数字员工变聪明 — skill 维护、记忆治理、评估。',
    },
    summary: {
      en: 'A long-term partnership that keeps your digital employees improving after launch. Monthly new-skill development, periodic memory audits (dedup, relevance, decay), eval regression testing, adoption tracking and quarterly review. The difference between "we installed an AI employee" and "our AI employee gets better every month".',
      zh: '上线后持续让数字员工变聪明的长期合作。月度新 skill 开发、定期记忆审计（去重、相关性、衰减）、评估回归测试、adoption 追踪、季度 review。"我们装了个 AI 员工" 和 "我们的 AI 员工每个月都在变强" 的区别就在这里。',
    },
    deliverables: {
      en: [
        'Monthly new skill development and iteration',
        'Memory curation — dedup, relevance scoring, decay policy',
        'Eval regression harness on a growing golden set',
        'Usage dashboards and adoption tracking',
        'Quarterly business review with improvement roadmap',
        'Priority Slack support channel',
      ],
      zh: [
        '月度新 skill 开发与迭代',
        '记忆治理 — 去重、相关性打分、衰减策略',
        'Golden set 持续扩展的评估回归基建',
        '用量面板与 adoption 追踪',
        '季度业务 review + 改进 roadmap',
        '优先级 Slack 支持通道',
      ],
    },
  },

  // ========== PROPERTY MARKETING TRACK ==========
  // AI-powered: websites launched in days, pitch decks / posters / flyers generated fast
  {
    slug: 'developer-website',
    track: 'property',
    flagship: false,
    duration: '3-7d',
    order: 20,
    tags: ['website', 'developer', 'ai-powered'],
    title: {
      en: 'Developer Website',
      zh: '开发商官网',
    },
    subtitle: {
      en: 'AI-assisted build — your website live in days, not months.',
      zh: 'AI 辅助构建 — 几天上线，而不是几个月。',
    },
    summary: {
      en: 'A full developer group website launched fast with AI-assisted design and content generation. Investor-grade positioning, responsive, SEO-ready. What used to take 2 months now ships in days.',
      zh: '一个完整的开发商集团主站，把你的品牌定位在高净值买家和机构投资人面前。参考案例：Forma Property（由 metatreelab.ai 出品）。',
    },
    deliverables: {
      en: [
        'Brand positioning and visual system',
        'Commercial & residential project showcase',
        'Team and company story pages',
        'Lead capture form + CRM integration',
        'SEO + analytics + multilingual ready',
      ],
      zh: [
        '品牌定位与视觉系统',
        '商业与住宅项目集合展示',
        '团队与公司故事页',
        '留资表单 + CRM 对接',
        'SEO + analytics + 多语言就绪',
      ],
    },
    proof: {
      en: 'Forma Property — formaproperty.com.au',
      zh: 'Forma Property — formaproperty.com.au',
    },
  },

  {
    slug: 'project-landing-page',
    track: 'property',
    flagship: false,
    duration: '3-7d',
    order: 21,
    tags: ['landing', 'project', 'lead-gen'],
    title: {
      en: 'Project Landing Page',
      zh: '楼盘专属着陆页',
    },
    subtitle: {
      en: 'A focused single-project page built to capture leads during launch.',
      zh: '为 launch 期冲刺留资转化而生的单楼盘专属页面。',
    },
    summary: {
      en: 'A dedicated landing page for a single off-the-plan or display suite campaign, with lead capture, CRM routing, and bilingual EN/ZH support for Australian mainstream + Chinese buyer markets.',
      zh: '为单个 off-the-plan 或 display suite 活动打造的专属 landing page，带留资表单、CRM 路由，支持英文主流市场 + 华人买家市场的双语。',
    },
    deliverables: {
      en: [
        'Hero, floor plans, location, amenities sections',
        'Lead capture form with CRM integration',
        'Bilingual EN/ZH support (mainstream + Chinese buyers)',
        'Google / Meta Ads landing version ready',
        'Mobile-first, fast loading',
      ],
      zh: [
        'Hero、户型、位置、配套分区块',
        '带 CRM 集成的留资表单',
        '英中双语（主流市场 + 华人买家）',
        'Google / Meta 广告版本就绪',
        'Mobile-first，快速加载',
      ],
    },
  },

  {
    slug: 'brand-identity',
    track: 'property',
    flagship: false,
    duration: '1-2w',
    order: 22,
    tags: ['brand', 'identity', 'design'],
    title: {
      en: 'Brand Identity',
      zh: '品牌视觉系统',
    },
    subtitle: {
      en: 'Logo, type, colour, collateral — a full visual system for your development.',
      zh: 'Logo、字体、色彩、物料 — 为你楼盘打造完整视觉系统。',
    },
    summary: {
      en: 'A complete brand identity for a new development or developer group: logo, type system, colour palette, brochure, sales collateral, signage, digital assets.',
      zh: '为新楼盘或开发商集团打造完整品牌视觉：logo、字体系统、色彩、户型册、销售物料、标识、数字资产。',
    },
    deliverables: {
      en: [
        'Logo and brand mark exploration',
        'Visual system: type, colour, grid, motion',
        'Print: brochure, business cards, signage',
        'Digital: website assets, social media templates',
        'Brand guidelines document',
      ],
      zh: [
        'Logo 与品牌标识探索',
        '视觉系统：字体、色彩、网格、动效',
        '印刷：户型册、名片、标识',
        '数字：网站素材、社交媒体模板',
        '品牌手册文档',
      ],
    },
  },

  {
    slug: 'ai-marketing-collateral',
    track: 'property',
    flagship: true,
    duration: '1-3 days',
    order: 22,
    tags: ['ai-powered', 'pitch-deck', 'poster', 'flyer'],
    title: {
      en: 'AI-Powered Marketing Collateral',
      zh: 'AI 快速营销物料',
    },
    subtitle: {
      en: 'Pitch decks, posters, flyers, A4 brochures — generated in hours, not weeks.',
      zh: 'Pitch Deck、海报、传单、A4 手册 — 数小时交付，而不是数周。',
    },
    summary: {
      en: 'We use AI tools to generate high-quality marketing materials at speed traditional agencies cannot match. A pitch deck that used to take 2 weeks is ready in 1-3 days. Posters, flyers, A4 brochures, social assets — all brand-consistent, all fast.',
      zh: '我们用 AI 工具生成高质量营销物料，速度是传统代理的数倍。以前 2 周才能做完的 Pitch Deck，1-3 天交付。海报、传单、A4 手册、社媒素材 — 全部品牌一致，全部快速。',
    },
    deliverables: {
      en: [
        'Pitch decks & investor presentations (1-3 days)',
        'Marketing posters and display materials',
        'A4 brochures and flyers',
        'Social media content packs',
        'Project signage and hoarding designs',
        'All assets delivered brand-consistent and print-ready',
      ],
      zh: [
        'Pitch Deck 与投资者演示（1-3 天）',
        '营销海报与展示物料',
        'A4 手册与传单',
        '社媒内容素材包',
        '项目标识与围挡设计',
        '所有物料品牌一致、印刷就绪',
      ],
    },
    proof: {
      en: 'AI-assisted workflow: what used to take weeks is now delivered in days.',
      zh: 'AI 辅助工作流：以前几周的活，现在几天搞定。',
    },
  },

  {
    slug: 'ad-landing-pages',
    track: 'property',
    flagship: false,
    duration: '2-5d',
    order: 23,
    tags: ['ads', 'landing', 'conversion', 'ab-test'],
    title: {
      en: 'Ad Landing Pages',
      zh: '广告着陆页',
    },
    subtitle: {
      en: 'Google, Meta, WeChat ad landing pages — fast, focused, A/B ready.',
      zh: 'Google、Meta、微信广告着陆页 — 快速、专注、A/B 就绪。',
    },
    summary: {
      en: 'High-conversion landing pages optimised for paid traffic. One variant per audience, built for quick iteration and A/B testing.',
      zh: '为付费流量优化的高转化着陆页。按受众分版本，便于快速迭代和 A/B 测试。',
    },
    deliverables: {
      en: [
        'Conversion-optimised layout',
        'Lead form with UTM tracking',
        'A/B test variants ready',
        'Fast loading (<1s LCP)',
        'Pixel and tag setup',
      ],
      zh: [
        '转化优化布局',
        '带 UTM 追踪的留资表单',
        'A/B 测试版本就绪',
        '快速加载（LCP < 1 秒）',
        'Pixel 和 tag 配置',
      ],
    },
  },

  {
    slug: 'marketing-retainer',
    track: 'property',
    flagship: false,
    duration: 'retainer',
    order: 24,
    tags: ['retainer', 'ongoing', 'content', 'seo', 'ads'],
    title: {
      en: 'Marketing Retainer',
      zh: '营销 Retainer',
    },
    subtitle: {
      en: 'Ongoing content, SEO, ads operations, and CRM maintenance.',
      zh: '持续内容、SEO、广告运营、CRM 维护。',
    },
    summary: {
      en: 'A long-term partnership covering ongoing content production, SEO maintenance, paid ad operations, CRM integration upkeep and regular performance reporting for your development group.',
      zh: '长期合作，覆盖内容生产、SEO 维护、付费广告运营、CRM 集成维护和定期业绩报告。',
    },
    deliverables: {
      en: [
        'Monthly content production (blog, social, ads)',
        'SEO audits and on-page optimisation',
        'Paid ads operations (Google / Meta / WeChat)',
        'CRM integration maintenance and lead routing',
        'Monthly performance reporting',
      ],
      zh: [
        '月度内容生产（博客、社媒、广告）',
        'SEO 审计与 on-page 优化',
        '付费广告运营（Google / Meta / 微信）',
        'CRM 集成维护与 lead 路由',
        '月度业绩报告',
      ],
    },
  },
];

/** Group services by track */
export const servicesByTrack = {
  build: services.filter((s) => s.track === 'build').sort((a, b) => a.order - b.order),
  adopt: services.filter((s) => s.track === 'adopt').sort((a, b) => a.order - b.order),
  digitalEmployee: services
    .filter((s) => s.track === 'digital-employee')
    .sort((a, b) => a.order - b.order),
  property: services.filter((s) => s.track === 'property').sort((a, b) => a.order - b.order),
};
