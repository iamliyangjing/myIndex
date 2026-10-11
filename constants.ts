import { 
  Server, 
  Database, 
  Code, 
  Sparkles,
  Zap,
  Layers,
  Search,
  Workflow
} from "lucide-react";
import { ExperienceItem, LearningItem, SkillCategory, BookItem, LocalizedData, ProfileData, HeroContent, FooterContent, BlogPost, SpaceContent, MapLocation, PrincipleItem } from "./types";

// Profile Data
export const PROFILE_DATA: LocalizedData<ProfileData> = {
  en: {
    avatarUrl: "/avatar.svg",
    name: "Yangjing Li",
    university: "Southwest Petroleum University",
    gradYear: "Class of 2023",
    roles: [
      "Java Backend Engineer",
      "Insurance SaaS Platform Developer",
      "AI Engineering Practitioner"
    ]
  },
  cn: {
    avatarUrl: "/avatar.svg",
    name: "李洋静",
    university: "西南石油大学",
    gradYear: "2023届",
    roles: [
      "Java 后端开发工程师",
      "保险 SaaS 业务系统研发",
      "AI 工程化实践者"
    ]
  }
};

// Engineering Principles
export const PRINCIPLES: LocalizedData<PrincipleItem[]> = {
  en: [
    { title: "Business First", description: "Translate complex insurance workflows into clear domain models, interfaces, and reusable capabilities.", icon: Layers },
    { title: "Measure the Outcome", description: "Use observable results to guide performance work, such as reducing BI calculation time from 120 seconds to 30 seconds.", icon: Search },
    { title: "Build for Change", description: "Use configuration and componentized designs to make product and channel changes easier to deliver.", icon: Zap },
    { title: "AI as Engineering", description: "Turn AI coding experiments into reviewable team workflows with explicit stages, rules, and quality checks.", icon: Workflow }
  ],
  cn: [
    { title: "从业务问题出发", description: "把复杂保险流程拆解为清晰的领域模型、接口和可复用能力。", icon: Layers },
    { title: "用结果衡量优化", description: "以可验证的数据评估改进效果，例如将 BI 保费计算耗时从 120 秒降至 30 秒。", icon: Search },
    { title: "面向变化设计", description: "通过配置化和组件化设计，降低产品及渠道变化的交付成本。", icon: Zap },
    { title: "把 AI 融入工程流程", description: "将 AI Coding 实践沉淀为有阶段、有规范、可审查的团队工作流。", icon: Workflow }
  ]
};

// Hero Content
export const HERO_CONTENT: LocalizedData<HeroContent> = {
  en: {
    slogan: "Reliable Systems for Complex Insurance Workflows",
    role: "Java Backend Engineer",
    subRole: "3 years of experience building insurance SaaS systems, improving performance, and bringing AI workflows into team engineering practice.",
    ctaText: "Core Skills",
    downloadText: "Download Resume",
  },
  cn: {
    slogan: "让复杂保险业务更高效、更可靠",
    role: "Java 后端开发工程师",
    subRole: "3 年后端开发经验，聚焦保险 SaaS 系统、性能优化与 AI 工程化实践。",
    ctaText: "核心技能",
    downloadText: "下载简历",
  }
};

// Skills
export const SKILL_CATEGORIES: LocalizedData<SkillCategory[]> = {
  en: [
    {
      title: "Java & Backend",
      icon: Code,
      skills: [
        { name: "Java Core, Concurrency & JVM" },
        { name: "Spring / Spring Boot / Spring MVC" },
        { name: "MyBatis-Plus" },
        { name: "DDD & Clean Architecture" },
      ],
    },
    {
      title: "AI Engineering",
      icon: Sparkles,
      skills: [
        { name: "AI Coding & SDD Workflows" },
        { name: "OpenSpec & Agent-assisted Delivery" },
        { name: "Agent Tool Use & Workflow Orchestration" },
        { name: "RAG, Hybrid Retrieval & Knowledge Q&A" },
      ],
    },
    {
      title: "Data & Messaging",
      icon: Server,
      skills: [
        { name: "MySQL: Indexes, Transactions & SQL Tuning" },
        { name: "Redis: Cache Design & Distributed Locks" },
        { name: "RabbitMQ & Kafka" },
        { name: "Elasticsearch: Mapping & Search Optimization" },
      ],
    },
    {
      title: "Delivery & Operations",
      icon: Database,
      skills: [
        { name: "Linux, Docker & Nginx" },
        { name: "Jenkins, Gradle & Liquibase" },
        { name: "Shell Scripting" },
      ],
    },
  ],
  cn: [
    {
      title: "Java 与后端开发",
      icon: Code,
      skills: [
        { name: "Java 基础、并发编程与 JVM" },
        { name: "Spring / Spring Boot / Spring MVC" },
        { name: "MyBatis-Plus" },
        { name: "DDD 与整洁架构" },
      ],
    },
    {
      title: "AI 工程化",
      icon: Sparkles,
      skills: [
        { name: "AI Coding 与 SDD 工作流" },
        { name: "OpenSpec 与 Agent 辅助交付" },
        { name: "Agent 工具调用与工作流编排" },
        { name: "RAG、混合检索与知识问答" },
      ],
    },
    {
      title: "数据与消息中间件",
      icon: Server,
      skills: [
        { name: "MySQL：索引、事务与 SQL 优化" },
        { name: "Redis：缓存设计与分布式锁" },
        { name: "RabbitMQ 与 Kafka" },
        { name: "Elasticsearch：数据建模与检索优化" },
      ],
    },
    {
      title: "工程化与交付",
      icon: Database,
      skills: [
        { name: "Linux、Docker 与 Nginx" },
        { name: "Jenkins、Gradle 与 Liquibase" },
        { name: "Shell 脚本" },
      ],
    },
  ]
};

// Experience
export const EXPERIENCE_DATA: LocalizedData<ExperienceItem[]> = {
  en: [
    {
      id: "exp-1",
      period: "2023.06 - Present",
      role: "Mid-level Backend Engineer · Project Lead · AI Engineering Group Member",
      company: "Lingbao Technology Co., Ltd.",
      description: "Progressed from junior engineer to project lead, delivering insurance SaaS capabilities across product configuration, policy issuance, reporting, and engineering efficiency.",
      achievements: [
        "Promoted from junior engineer (2023.06–2024.06) to mid-level engineer (2024.06–present); served as STORM project lead and currently lead development for AMS.",
        "Designed a configuration-based Agreement channel model for 40+ localized insurance products, reducing new-channel onboarding from weeks to days.",
        "Optimized BI premium calculations with FutureTask and a thread pool, reducing complex-product processing time from 120 seconds to 30 seconds (75%).",
        "Led D2C workflow abstraction and OpenAPI-based SaaS issuance services, shortening partner integration from weeks to days.",
        "Optimized report generation with SQL index changes, query decomposition, and parallel data assembly to reduce database I/O wait.",
        "Refactored form and document generation with factory, builder, and template method patterns to support configurable components.",
        "Led a 2–3 person project group and contributed to the AI Engineering Group's adoption of a reviewable SDD workflow."
      ],
      projects: [
        {
          name: "STORM Insurance Product & Channel Platform",
          description: "Built for the Malaysia market, digitizing workflows between insurers and agents and supporting more than 40 localized insurance products.",
          technologies: ["Spring Boot", "MySQL", "Elasticsearch", "JDK 11", "Liquibase", "Gradle", "Jenkins"],
        },
        {
          name: "AI Coding Enablement & SDD Workflow",
          description: "Helped evolve team practice from code completion and Vibe Coding to local agents and a structured SDD workflow using OpenSpec and SuperPowers. The workflow defines deliverables, review criteria, and execution stages, and is now used across the team.",
          technologies: ["AI Coding", "OpenSpec", "SuperPowers", "Rules", "Skills", "MCP"],
        },
      ],
    },
    {
      id: "proj-insureflow",
      period: "Independent Project",
      role: "Full-cycle Developer",
      company: "InsureFlow",
      description: "Designed and independently built an AI-enabled insurance operations platform spanning underwriting, claims, and customer service.",
      achievements: [
        "Connected policy intake, underwriting, quotation, payment and issuance, and claims into an end-to-end workflow.",
        "Applied risk scoring and triage so low-risk cases proceed automatically, medium-risk cases receive human review, and high-risk cases are rejected.",
        "Built bilingual customer Q&A grounded in insurance policy and claims knowledge, with cited sources.",
        "Added role-based permissions, input/output safety checks, explicit exception messages, and model routing and caching for cost control."
      ],
      projects: [
        {
          name: "Insurance AI Operations Platform",
          description: "An independent project exploring AI-assisted underwriting, claims triage, and customer support with traceable decisions and clear exception handling.",
          technologies: ["Java 21", "Spring Boot", "Embabel Agent", "Spring Security", "Spring Data JPA", "Lucene", "DeepSeek"],
        },
      ],
    }
  ],
  cn: [
    {
      id: "exp-1",
      period: "2023.06 - 至今",
      role: "中级研发工程师 · 项目开发负责人 · AI 提效组成员",
      company: "领保科技股份有限公司",
      description: "从初级研发工程师成长为项目负责人，持续参与保险 SaaS 平台的产品配置、出单、报表和研发效能建设。",
      achievements: [
        "2023.06–2024.06 任初级研发工程师，2024.06 起任中级研发工程师；先后担任 STORM 项目负责人、AMS 项目开发负责人。",
        "设计基于 Agreement 配置的渠道管理模型，支撑 40+ 款本地化保险产品，将新渠道上线周期从周级缩短至天级。",
        "使用 FutureTask 与线程池优化 BI 保费计算，将复杂产品的计算耗时从 120 秒降至 30 秒，耗时降低 75%。",
        "主导 D2C 核心流程抽象与 OpenAPI SaaS 出单服务建设，将合作方产品集成周期从周级缩短至天级。",
        "重构报表生成流程，优化 SQL 索引、拆分复杂查询并并行组装数据，降低数据库 I/O 等待。",
        "主导表单与文档生成 Output 模块重构，组合工厂、建造者和模板方法模式，实现组件化、配置化生成。",
        "负责 2–3 人项目小组的协作推进，并参与推动团队采用可审查的 SDD 开发工作流。"
      ],
      projects: [
        {
          name: "STORM 跨境保险产品与渠道平台",
          description: "面向马来西亚市场，连接保险公司与 Agent，提供全流程数字化管理，已承载 40+ 款本地化保险产品。",
          technologies: ["Spring Boot", "MySQL", "Elasticsearch", "JDK 11", "Liquibase", "Gradle", "Jenkins"],
        },
        {
          name: "AI Coding 提效与 SDD 工作流",
          description: "推动团队从代码补全、Vibe Coding 演进到本地 Agent 与 SDD；基于 OpenSpec 和 SuperPowers 设计交付物、审查标准和执行阶段，工作流已在团队内推广使用。",
          technologies: ["AI Coding", "OpenSpec", "SuperPowers", "Rules", "Skills", "MCP"],
        },
      ],
    },
    {
      id: "proj-insureflow",
      period: "个人项目",
      role: "独立开发（需求、架构与全流程实现）",
      company: "InsureFlow",
      description: "独立设计并实现 AI 保险智能运营平台，覆盖投保核保、理赔处理与客户服务场景。",
      achievements: [
        "打通投保受理、核保、报价、支付出单与理赔流程，实现业务闭环。",
        "基于风险评分进行自动分流：低风险自动处理、中风险转人工审核、高风险自动拒绝。",
        "接入保险条款与理赔指南知识库，提供带来源引用的中英双语客服问答。",
        "实现岗位权限、输入输出安全校验、异常场景明确告知，以及模型分级调度与响应缓存。"
      ],
      projects: [
        {
          name: "保险智能运营平台",
          description: "围绕 AI 核保、理赔分流和客户服务构建的个人项目，强调决策可追溯和异常处理透明。",
          technologies: ["Java 21", "Spring Boot", "Embabel Agent", "Spring Security", "Spring Data JPA", "Lucene", "DeepSeek"],
        },
      ],
    }
  ]
};

// Learning
export const LEARNING_DATA: LocalizedData<LearningItem[]> = {
  en: [
    { topic: "Specification-Driven Development", category: "Engineering", description: "Refining SDD deliverables and review criteria so agent-generated changes remain understandable and verifiable." },
    { topic: "Agent Workflows", category: "AI", description: "Exploring tool use, task decomposition, state management, retries, and human review in business workflows." },
    { topic: "Retrieval-Augmented Generation", category: "AI", description: "Studying document parsing, chunking, embeddings, hybrid retrieval, reranking, and grounded answers." },
  ],
  cn: [
    { topic: "规范驱动开发", category: "工程实践", description: "持续完善 SDD 交付物与审查标准，让 Agent 生成的改动更易理解、评估和验证。" },
    { topic: "Agent 工作流", category: "人工智能", description: "实践工具调用、任务拆解、状态管理、失败重试与人工审核等环节。" },
    { topic: "检索增强生成", category: "人工智能", description: "持续梳理文档解析、文本切分、Embedding、混合检索、重排与可信问答流程。" },
  ]
};

// Books
export const BOOKS_DATA: LocalizedData<BookItem[]> = {
  en: [
    {
      title: "The Beauty of Java Concurrency",
      author: "Zhai Chaofei",
      category: "Concurrency",
      status: "Finished",
      description: "Deep dive into the core principles of Java concurrency, covering threads, locks, AQS, and concurrent utility libraries.",
      coverColor: "#1e40af",
      coverImage: "https://img3.doubanio.com/view/subject/s/public/s29871189.jpg",
      link: "https://book.douban.com/subject/30351286/"
    },
    {
      title: "Designing Data-Intensive Applications",
      author: "Martin Kleppmann",
      category: "Architecture",
      status: "Finished",
      description: "The 'Bible' of distributed systems. Deep understanding of replication and transactions.",
      coverColor: "#b91c1c",
      coverImage: "/books/ddia.svg",
      link: "https://www.amazon.com/Designing-Data-Intensive-Applications-Reliable-Maintainable/dp/1449373321"
    },
    {
      title: "Clean Architecture",
      author: "Robert C. Martin",
      category: "Architecture",
      status: "Finished",
      description: "A craftsman's guide to software structure and design.",
      coverColor: "#22c55e",
      coverImage: "https://m.media-amazon.com/images/I/41-sN-mzwKL.jpg",
      link: "https://www.amazon.com/Clean-Architecture-Craftsmans-Software-Structure/dp/0134494164"
    },
    {
      title: "Domain-Driven Design",
      author: "Eric Evans",
      category: "Architecture",
      status: "To Read",
      description: "Tackling complexity in the heart of software.",
      coverColor: "#1e3a8a",
      coverImage: "/books/ddd.svg",
      link: "https://www.amazon.com/Domain-Driven-Design-Tackling-Complexity-Software/dp/0321125215"
    },
  ],
  cn: [
    {
      title: "Java 并发编程之美",
      author: "翟超菲",
      category: "并发编程",
      status: "Finished",
      description: "深入剖析 Java 并发编程的核心原理，涵盖线程、锁、AQS及并发工具库的深度解析。",
      coverColor: "#1e40af",
      coverImage: "https://img3.doubanio.com/view/subject/s/public/s29871189.jpg",
      link: "https://book.douban.com/subject/30351286/"
    },
    {
      title: "数据密集型应用系统设计",
      author: "Martin Kleppmann",
      category: "架构设计",
      status: "Finished",
      description: "被誉为分布式系统的“圣经”，深入理解复制、分区和事务的底层原理。",
      coverColor: "#b91c1c",
      coverImage: "/books/ddia.svg",
      link: "https://book.douban.com/subject/30329536/"
    },
    {
      title: "架构整洁之道",
      author: "Robert C. Martin",
      category: "软件工程",
      status: "Finished",
      description: "软件架构设计的经典之作，不仅关乎代码，更关乎边界与解耦。",
      coverColor: "#22c55e",
      coverImage: "https://m.media-amazon.com/images/I/41-sN-mzwKL.jpg",
      link: "https://book.douban.com/subject/30333915/"
    },
    {
      title: "领域驱动设计",
      author: "Eric Evans",
      category: "架构方法论",
      status: "To Read",
      description: "软件核心复杂性应对之道。",
      coverColor: "#1e3a8a",
      coverImage: "/books/ddd.svg",
      link: "https://book.douban.com/subject/26819666/"
    },
  ]
};

// Blog Posts
export const BLOG_POSTS: LocalizedData<BlogPost[]> = {
  en: [
    {
      id: "post-1",
      title: "Reducing BI Premium Calculation Time from 120s to 30s",
      summary: "A practical case study on parallelizing I/O-heavy and multi-step calculations with FutureTask and a thread pool.",
      tags: ["Java", "Concurrency", "Performance"],
      content: "# BI Premium Calculation Optimization\n\nComplex insurance products could take about 120 seconds to calculate, creating a timeout risk. I introduced asynchronous parallel calculation with FutureTask and a thread pool for suitable I/O-heavy and multi-step work.\n\nThe calculation time for complex products dropped from 120 seconds to 30 seconds, a 75% reduction. This improved the responsiveness of real-time premium quotations."
    },
    {
      id: "post-2",
      title: "Turning AI Coding into a Reviewable Team Workflow",
      summary: "How the team evolved from code completion and Vibe Coding toward local agents and specification-driven development.",
      tags: ["AI Coding", "SDD", "Engineering Workflow"],
      content: "# AI Coding as an Engineering Practice\n\nThe team evolved through code completion, Vibe Coding, and local-agent workflows. To make agent-assisted delivery easier to review and repeat, I helped introduce an SDD workflow based on OpenSpec and SuperPowers.\n\nThe workflow defines deliverable structure, quality review criteria, and execution stages. Project-specific rules, skills, and MCP tools can then extend the shared process for individual codebases. The team has adopted the workflow."
    }
  ],
  cn: [
    {
      id: "post-1",
      title: "将 BI 保费计算从 120 秒缩短至 30 秒",
      summary: "使用 FutureTask 与线程池并行处理 I/O 密集及多步骤计算的实践。",
      tags: ["Java", "并发编程", "性能优化"],
      content: "# BI 保费计算优化\n\n复杂保险产品的保费计算曾需要约 120 秒，存在超时风险。针对适合并行处理的 I/O 密集型和多步骤计算，引入 FutureTask 与线程池进行异步并发计算。\n\n复杂产品的计算耗时从 120 秒降至 30 秒，降低 75%，改善了实时保费试算的响应体验。"
    },
    {
      id: "post-2",
      title: "把 AI Coding 沉淀为可审查的团队工作流",
      summary: "团队从代码补全、Vibe Coding 逐步走向本地 Agent 和规范驱动开发的实践。",
      tags: ["AI Coding", "SDD", "工程工作流"],
      content: "# 将 AI Coding 纳入工程实践\n\n团队经历了代码补全、Vibe Coding 和本地 Agent 等阶段。为了让 Agent 辅助交付更容易审查和复用，我参与引入基于 OpenSpec 与 SuperPowers 的 SDD 工作流。\n\n工作流明确交付物结构、质量审查标准和执行阶段，并通过项目级 Rules、Skills 与 MCP 工具适配不同代码库。目前该工作流已在团队内推广使用。"
    }
  ]
};

// Locations
const COMMON_LOCATIONS: MapLocation[] = [
  { name: "Chengdu", lat: 30.5728, lng: 104.0668, type: "current" },
  { name: "Suzhou", lat: 31.2989, lng: 120.5853, type: "visited" },
  { name: "Shanghai", lat: 31.2304, lng: 121.4737, type: "visited" },
  { name: "Beijing", lat: 39.9042, lng: 116.4074, type: "visited" },
  { name: "Shenzhen", lat: 22.5431, lng: 114.0579, type: "visited" },
  { name: "Tokyo", lat: 35.6762, lng: 139.6503, type: "visited" },
  { name: "Singapore", lat: 1.3521, lng: 103.8198, type: "visited" },
];

export const SPACE_DATA: LocalizedData<SpaceContent> = {
  en: {
    title: "Travel Footprint",
    subtitle: "Living in Chengdu, exploring the digital and physical world.",
    currentLocationText: "Chengdu, China",
    locations: COMMON_LOCATIONS,
  },
  cn: {
    title: "数字足迹",
    subtitle: "居住于成都，在数字与物理世界中不断探索。",
    currentLocationText: "中国 · 成都",
    locations: COMMON_LOCATIONS,
  }
};

// Footer
export const FOOTER_CONTENT: LocalizedData<FooterContent> = {
  en: {
    title: "Build reliable systems. Make complex work easier.",
    emailText: "Contact Yangjing",
    copyright: "© 2026 Yangjing Li.",
    builtWith: "Java · Insurance SaaS · AI Engineering",
  },
  cn: {
    title: "构建可靠系统，让复杂业务更易交付。",
    emailText: "联系李洋静",
    copyright: "© 2026 李洋静",
    builtWith: "Java · 保险 SaaS · AI 工程化",
  }
};

// External Links
export const CONTACT_INFO = {
  email: "958390434@qq.com",
  github: "https://github.com/iamliyangjing",
  linkedin: "",
};

export const RESUME_URL = "/resume.pdf";
