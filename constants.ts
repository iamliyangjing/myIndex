import { 
  Server, 
  Database, 
  Cloud, 
  Code, 
  Terminal, 
  ShieldCheck,
  Sparkles,
  Zap,
  Layers,
  Search,
  Cpu,
  Workflow
} from "lucide-react";
import { ExperienceItem, LearningItem, SkillCategory, BookItem, LocalizedData, ProfileData, HeroContent, FooterContent, BlogPost, SpaceContent, MapLocation, PrincipleItem } from "./types";

// Profile Data
export const PROFILE_DATA: LocalizedData<ProfileData> = {
  en: {
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=CodeCraft&backgroundColor=ffdfbf",
    name: "Cooper",
    university: "Southwest Petroleum University",
    gradYear: "Class of 2023",
    roles: [
      "Senior Backend Engineer",
      "Java/Go Hybrid Developer",
      "AI Workflow Specialist"
    ]
  },
  cn: {
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=CodeCraft&backgroundColor=ffdfbf",
    name: "Cooper",
    university: "西南石油大学",
    gradYear: "2023届",
    roles: [
      "资深后端开发工程师",
      "Java/Go 混合开发",
      "AI 工作流专家"
    ]
  }
};

// Engineering Principles
export const PRINCIPLES: LocalizedData<PrincipleItem[]> = {
  en: [
    { title: "KISS Principle", description: "Simplicity is the prerequisite for reliability. Avoiding over-engineering while ensuring scalability.", icon: Zap },
    { title: "Observe-First", description: "Design systems with full observability—logging, metrics, and tracing from day one.", icon: Search },
    { title: "Domain Driven", description: "Aligning software architecture with business domains to handle complex logic gracefully.", icon: Layers },
    { title: "Efficiency Loop", description: "Using AI (Cursor/MCP) to automate the mundane and focus on critical architecture.", icon: Workflow }
  ],
  cn: [
    { title: "保持简单", description: "简单是可靠性的前提。在确保可扩展性的同时，坚决避免过度设计。", icon: Zap },
    { title: "观测先行", description: "系统设计初期即植入日志、指标和链路追踪，实现全透明的可观测性。", icon: Search },
    { title: "领域驱动", description: "将软件架构与业务领域对齐，优雅地处理复杂的业务逻辑。", icon: Layers },
    { title: "AI 效能闭环", description: "利用 AI (Cursor/MCP) 自动化琐事，将精力集中在核心架构设计。", icon: Workflow }
  ]
};

// Hero Content
export const HERO_CONTENT: LocalizedData<HeroContent> = {
  en: {
    slogan: "Scalability Meets Intelligence",
    role: "Senior Backend Developer",
    subRole: "Expert in Distributed Java Systems & AI-Driven Development. 3+ years of high-performance architecture design.",
    ctaText: "Tech Stack",
    downloadText: "Get CV",
  },
  cn: {
    slogan: "当可扩展性遇见人工智能",
    role: "资深后端开发工程师",
    subRole: "精通分布式 Java 系统与 AI 驱动开发。3年以上高性能架构设计实战经验。",
    ctaText: "核心技术栈",
    downloadText: "获取简历",
  }
};

// Skills
export const SKILL_CATEGORIES: LocalizedData<SkillCategory[]> = {
  en: [
    {
      title: "Backend Core",
      icon: Code,
      skills: [
        { name: "Java (JUC/JVM/NIO)", level: 92 },
        { name: "Spring Ecosystem", level: 90 },
        { name: "Go (Gin/gRPC)", level: 75 },
        { name: "Design Patterns", level: 88 },
      ],
    },
    {
      title: "AI & Tools",
      icon: Sparkles,
      skills: [
        { name: "Cursor / Trae Mastery", level: 95 },
        { name: "MCP / RAG Pipeline", level: 85 },
        { name: "Prompt Engineering", level: 90 },
      ],
    },
    {
      title: "Distributed Middleware",
      icon: Server,
      skills: [
        { name: "Redis / Kafka / RocketMQ", level: 85 },
        { name: "Zookeeper / Sentinel", level: 80 },
        { name: "DDD / Microservices", level: 85 },
      ],
    },
    {
      title: "Data & Storage",
      icon: Database,
      skills: [
        { name: "MySQL (Perf Tuning)", level: 90 },
        { name: "Elasticsearch", level: 82 },
        { name: "PostgreSQL", level: 75 },
      ],
    },
    {
      title: "Cloud Native",
      icon: Cloud,
      skills: [
        { name: "Docker / K8s", level: 80 },
        { name: "CI/CD (Jenkins/GHA)", level: 82 },
        { name: "Linux / Shell", level: 85 },
      ],
    },
  ],
  cn: [
    {
      title: "后端核心",
      icon: Code,
      skills: [
        { name: "Java (JUC/JVM/NIO)", level: 92 },
        { name: "Spring 生态系统", level: 90 },
        { name: "Go (Gin/gRPC)", level: 75 },
        { name: "经典设计模式", level: 88 },
      ],
    },
    {
      title: "AI 与 效能工具",
      icon: Sparkles,
      skills: [
        { name: "Cursor / Trae 深度应用", level: 95 },
        { name: "MCP / RAG 管道构建", level: 85 },
        { name: "提示词工程", level: 90 },
      ],
    },
    {
      title: "分布式中间件",
      icon: Server,
      skills: [
        { name: "Redis / Kafka / RocketMQ", level: 85 },
        { name: "Zookeeper / Sentinel", level: 80 },
        { name: "DDD / 微服务架构", level: 85 },
      ],
    },
    {
      title: "数据与存储",
      icon: Database,
      skills: [
        { name: "MySQL (性能调优)", level: 90 },
        { name: "Elasticsearch", level: 82 },
        { name: "PostgreSQL", level: 75 },
      ],
    },
    {
      title: "云原生与运维",
      icon: Cloud,
      skills: [
        { name: "Docker / K8s", level: 80 },
        { name: "CI/CD (Jenkins/GHA)", level: 82 },
        { name: "Linux / Shell", level: 85 },
      ],
    },
  ]
};

// Experience
export const EXPERIENCE_DATA: LocalizedData<ExperienceItem[]> = {
  en: [
    {
      id: "exp-1",
      period: "2023.03 - Present",
      role: "Backend Architect (Core Lead)",
      company: "Lingbao Technology Co., Ltd.",
      description: "Driving the insurance agency SaaS platform evolution, focusing on extreme performance and multi-tenant security.",
      achievements: [
        "Led Premium Calculation Engine refactor, achieving 4x performance boost (120s down to 30s) using parallel task orchestration.",
        "Architected OpenAPI SaaS gateway, supporting 100k+ daily policy requests with 99.99% availability.",
        "Reduced database I/O by 40% through ES-based index optimization and multi-level caching strategies.",
        "Implemented physical data isolation for multi-tenancy, passing Tier-3 security certification."
      ],
      projects: [
        {
          name: "STORM Global Insurance",
          description: "Distributed insurance platform serving SE Asia, processing $10M+ GWP annually.",
          technologies: ["Spring Boot", "MySQL", "ES", "Distributed Lock"],
          link: "#",
        }
      ]
    },
    {
      id: "exp-3",
      period: "2022.09 - 2023.02",
      role: "Backend Intern",
      company: "AIA / CAT",
      description: "Focused on user acquisition and policy purchase workflow automation.",
      achievements: [
        "Developed core purchase modules for D2C products, serving 50k+ active users.",
        "Optimized checkout latency by 20% through front-to-back async processing."
      ],
      projects: []
    }
  ],
  cn: [
    {
      id: "exp-1",
      period: "2023.03 - 至今",
      role: "后端架构师 (核心技术负责人)",
      company: "领保科技股份有限公司",
      description: "主导保险代理 SaaS 平台的架构演进，专注于极致性能优化与多租户安全体系建设。",
      achievements: [
        "主导保费计算引擎重构，利用并行任务编排技术，将响应时间从 120s 缩短至 30s，效率提升 300%。",
        "设计 SaaS OpenAPI 平台网关，支撑每日 10w+ 签单请求，并实现 99.99% 的系统可用性。",
        "通过 ES 索引调优及多级缓存策略，将数据库 I/O 压力降低了 40%。",
        "落地多租户物理隔离方案，成功助力公司通过等保三级安全测评。",
      ],
      projects: [
        {
          name: "STORM 全球保险平台",
          description: "面向东南亚市场的分布式保险平台，年处理保费突破千万美金级。",
          technologies: ["Spring Boot", "MySQL", "ES", "分布式锁"],
          link: "#",
        }
      ]
    },
    {
      id: "exp-3",
      period: "2022.09 - 2023.02",
      role: "后端开发实习生",
      company: "友邦保险咨询科技 (AIA)",
      description: "负责 D2C 渠道的客户转化与投保自动化流程开发。",
      achievements: [
        "独立开发 D2C 产品核心购买模块，支撑了 5w+ 活跃用户的线上投保。",
        "通过前后端异步解耦，将支付结算流程的端到端延迟降低了 20%。",
      ],
      projects: []
    }
  ]
};

// Learning
export const LEARNING_DATA: LocalizedData<LearningItem[]> = {
  en: [
    { topic: "Rust for Systems", category: "Language", description: "Learning Rust to build ultra-low latency gateway components." },
    { topic: "LLM Orchestration", category: "AI", description: "Building custom MCP servers to bridge enterprise databases and AI models." },
    { topic: "eBPF Monitoring", category: "Observability", description: "Deep diving into kernel-level observability for performance profiling." },
  ],
  cn: [
    { topic: "Rust 系统编程", category: "编程语言", description: "学习 Rust 用于构建极致低延迟的网关核心组件。" },
    { topic: "大模型编排", category: "人工智能", description: "开发自定义 MCP Server，连接企业私有数据库与 AI 模型。" },
    { topic: "eBPF 监控", category: "可观测性", description: "深入研究内核级可观测性技术，实现毫秒级的性能瓶颈洞察。" },
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
      coverImage: "https://m.media-amazon.com/images/I/91rr3BPljHL._SL1500_.jpg",
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
      coverImage: "https://m.media-amazon.com/images/I/81j891A0u+L._SL1500_.jpg",
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
      coverImage: "https://m.media-amazon.com/images/I/91rr3BPljHL._SL1500_.jpg",
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
      coverImage: "https://m.media-amazon.com/images/I/81j891A0u+L._SL1500_.jpg",
      link: "https://book.douban.com/subject/26819666/"
    },
  ]
};

// Blog Posts
export const BLOG_POSTS: BlogPost[] = [
  {
    id: "post-1",
    title: "高并发场景下的保费计算引擎优化",
    summary: "如何将 120s 的复杂计算优化至 30s？本文分享基于并行编排与多级缓存的实战方案。",
    date: "2024-01-10",
    tags: ["High Performance", "Java", "Optimization"],
    content: "# 高并发计算引擎优化\n\n分享如何使用异步编排工具优化核心业务逻辑..."
  },
  {
    id: "post-2",
    title: "AI 编程时代的后端提效之路",
    summary: "从 Cursor 到自定义 MCP Server，我是如何利用 AI 将日常开发效率提升 3 倍的。",
    date: "2024-02-15",
    tags: ["AI", "Efficiency", "Workflow"],
    content: "# AI 驱动的后端开发\n\n探讨如何构建自己的 AI 辅助环境..."
  }
];

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
    title: "Scalable systems start with clear thinking.",
    emailText: "Connect with Cooper",
    copyright: "© 2024 Cooper. Built for Excellence.",
    builtWith: "React + TS + Framer + AI assistance",
  },
  cn: {
    title: "清晰的思考是构建可扩展系统的开始。",
    emailText: "联系 Cooper",
    copyright: "© 2024 Cooper. 追求卓越极致。",
    builtWith: "基于 React + TS + Framer + AI 协作构建",
  }
};

// External Links
export const BLOG_URL = "https://juejin.cn";
export const CONTACT_INFO = {
  email: "958390434@qq.com",
  github: "https://github.com/iamliyangjing",
};