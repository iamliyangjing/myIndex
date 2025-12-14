import { 
  Server, 
  Database, 
  Cloud, 
  Code, 
  Terminal, 
  ShieldCheck 
} from "lucide-react";
import { ExperienceItem, LearningItem, SkillCategory, BookItem, LocalizedData, ProfileData, HeroContent, FooterContent, BlogPost, SpaceContent, MapLocation } from "./types";

// Profile Data
export const PROFILE_DATA: LocalizedData<ProfileData> = {
  en: {
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=CodeCraft&backgroundColor=ffdfbf",
    name: "Cooper",
    university: "Southwest Petroleum University",
    gradYear: "Class of 2023",
    roles: [
      "Backend Engineer",
      "Java Developer",
      "Distributed Systems Enthusiast"
    ]
  },
  cn: {
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=CodeCraft&backgroundColor=ffdfbf",
    name: "Cooper",
    university: "西南石油大学",
    gradYear: "2023届",
    roles: [
      "后端开发工程师",
      "Java 开发者",
      "分布式系统爱好者"
    ]
  }
};

// Hero Content
export const HERO_CONTENT: LocalizedData<HeroContent> = {
  en: {
    slogan: "3 Years of Business-Centric Backend Development",
    role: "Backend Development Engineer",
    subRole: "Expert in blending technology with business, specializing in Spring Boot & Distributed Architecture",
    ctaText: "View Skills",
    downloadText: "Download Resume",
  },
  cn: {
    slogan: "3年扎根业务的后端开发经验",
    role: "后端开发工程师",
    subRole: "擅长将技术与业务深度结合，精通 Spring Boot 与分布式架构",
    ctaText: "查看技术栈",
    downloadText: "下载简历",
  }
};

// Skills
export const SKILL_CATEGORIES: LocalizedData<SkillCategory[]> = {
  en: [
    {
      title: "Java Core",
      icon: Code,
      skills: [
        { name: "Java Basics (JUC/JVM)", level: 90 },
        { name: "Spring Boot/MVC", level: 90 },
        { name: "MyBatis-Plus", level: 85 },
        { name: "Design Patterns", level: 85 },
      ],
    },
    {
      title: "Architecture & Middleware",
      icon: Server,
      skills: [
        { name: "RabbitMQ / Kafka", level: 85 },
        { name: "Redis / Dist. Lock", level: 85 },
        { name: "DDD / RPC", level: 80 },
        { name: "Netty / Zookeeper", level: 75 },
      ],
    },
    {
      title: "Database & Search",
      icon: Database,
      skills: [
        { name: "MySQL Tuning", level: 90 },
        { name: "Elasticsearch", level: 80 },
      ],
    },
    {
      title: "DevOps",
      icon: Cloud,
      skills: [
        { name: "Docker / Linux", level: 80 },
        { name: "Nginx / Shell", level: 75 },
        { name: "Jenkins / CI/CD", level: 80 },
      ],
    },
  ],
  cn: [
    {
      title: "Java 核心",
      icon: Code,
      skills: [
        { name: "Java 基础 (JUC/JVM)", level: 90 },
        { name: "Spring Boot/MVC", level: 90 },
        { name: "MyBatis-Plus", level: 85 },
        { name: "设计模式", level: 85 },
      ],
    },
    {
      title: "架构与中间件",
      icon: Server,
      skills: [
        { name: "RabbitMQ / Kafka", level: 85 },
        { name: "Redis / 分布式锁", level: 85 },
        { name: "DDD / RPC", level: 80 },
        { name: "Netty / Zookeeper", level: 75 },
      ],
    },
    {
      title: "数据库与搜索",
      icon: Database,
      skills: [
        { name: "MySQL 调优", level: 90 },
        { name: "Elasticsearch", level: 80 },
      ],
    },
    {
      title: "运维与工具",
      icon: Cloud,
      skills: [
        { name: "Docker / Linux", level: 80 },
        { name: "Nginx / Shell", level: 75 },
        { name: "Jenkins / CI/CD", level: 80 },
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
      role: "Backend Developer",
      company: "Lingbao Technology Co., Ltd.",
      description: "Responsible for the DTM product design, premium calculation, and policy issuance process of the insurance agency platform. Led the development of four major products.",
      achievements: [
        "Optimized complex BI premium calculation, reducing latency from 120s to 30s (75% efficiency boost).",
        "Designed SaaS-based issuance service (OpenAPI), reducing integration time from weeks to days.",
        "Refactored report generation module using multi-threading and index optimization.",
        "Implemented multi-tenant architecture with physical isolation for data security.",
      ],
      projects: [
        {
          name: "STORM Platform",
          description: "Cross-border insurance agency & channel management platform serving Malaysia market.",
          technologies: ["Spring Boot", "MySQL", "ES", "Liquibase"],
          link: "#",
        }
      ]
    },
    {
      id: "exp-2",
      period: "2022.10 - 2025.03",
      role: "Independent Developer",
      company: "Personal Projects",
      description: "Design and implementation of distributed middleware and utility components.",
      achievements: [
        "Built a high-performance RPC framework from scratch.",
        "Developed a local task message processing component with DDD architecture.",
      ],
      projects: [
        {
          name: "Mini Distributed RPC",
          description: "Lightweight RPC framework based on Netty, Zookeeper, and Kyro.",
          technologies: ["Netty", "Zookeeper", "Protobuf", "Spring"],
          link: "https://github.com/iamliyangjing",
        },
        {
          name: "Task Message Component",
          description: "High-availability local task processing component with sharding and retry mechanisms.",
          technologies: ["Spring Boot", "RabbitMQ", "DDD"],
          link: "#",
        }
      ]
    },
    {
      id: "exp-3",
      period: "2022.09 - 2023.02",
      role: "Backend Intern",
      company: "AIA / CAT",
      description: "Designed and developed the Online Purchase Journey for D2C products.",
      achievements: [
        "Defined product infrastructure and page presentation logic.",
        "Implemented full-process marketing from customer acquisition to policy issuance.",
      ],
      projects: []
    }
  ],
  cn: [
    {
      id: "exp-1",
      period: "2023.03 - 至今",
      role: "后端开发工程师",
      company: "领保科技股份有限公司",
      description: "负责保险代理平台的 DTM 产品设计、保费计算及出单流程。至今承担四个大型产品的研发设计，参与从需求评审到上线的全流程。",
      achievements: [
        "优化复杂保险产品 BI 计算，引入 FutureTask 异步计算，耗时由 120s 降至 30s，效率提升 75%。",
        "设计 OpenAPI 形式的 SaaS 化出单服务，将客户集成周期从周缩短至天。",
        "重构报表生成模块，通过多线程并发和索引优化，解决性能瓶颈。",
        "负责多租户架构设计，落地物理层面的租户隔离方案，确保数据安全。",
      ],
      projects: [
        {
          name: "STORM 跨境保险平台",
          description: "面向马来西亚市场的保险代理及渠道管理平台，支撑超40款本地化产品。",
          technologies: ["Spring Boot", "MySQL", "ES", "Liquibase"],
          link: "#",
        }
      ]
    },
    {
      id: "exp-2",
      period: "2022.10 - 2025.03",
      role: "独立开发者",
      company: "个人开源项目",
      description: "专注于分布式中间件与通用组件的设计与实现。",
      achievements: [
        "从零设计并实现高性能 RPC 框架。",
        "基于 DDD 架构开发高可用本地任务消息处理组件。",
      ],
      projects: [
        {
          name: "Mini 分布式 RPC 框架",
          description: "基于 Netty + Zookeeper 的轻量级 RPC，支持 SPI 扩展与多种序列化。",
          technologies: ["Netty", "Zookeeper", "Protobuf", "Spring"],
          link: "https://github.com/iamliyangjing",
        },
        {
          name: "本地任务消息组件",
          description: "支持分片、重试、双通道通知的异步任务处理组件，采用 DDD 四层架构。",
          technologies: ["Spring Boot", "RabbitMQ", "DDD"],
          link: "#",
        }
      ]
    },
    {
      id: "exp-3",
      period: "2022.09 - 2023.02",
      role: "后端开发实习生",
      company: "友邦保险咨询科技 (AIA)",
      description: "负责设计研发 D2C 产品的 Online Purchase Journey。",
      achievements: [
        "定义产品基础结构在页面的呈现方式。",
        "实现了 Direct User 从购买到出单的全流程营销闭环。",
      ],
      projects: []
    }
  ]
};

// Learning
export const LEARNING_DATA: LocalizedData<LearningItem[]> = {
  en: [
    {
      topic: "Go Programming",
      category: "Language",
      description: "Building high-performance CLI tools and K8s Sidecar applications.",
    },
    {
      topic: "KubeVela",
      category: "Cloud Native",
      description: "Learning modern application delivery platforms for Kubernetes.",
    },
    {
      topic: "JVM Tuning",
      category: "Core Principles",
      description: "Deep dive into ZGC and G1 GC mechanisms and production tuning.",
    },
  ],
  cn: [
    {
      topic: "Go 语言编程",
      category: "编程语言",
      description: "用于构建高性能 CLI 工具和 K8s Sidecar 应用。",
    },
    {
      topic: "KubeVela",
      category: "云原生平台",
      description: "学习面向 Kubernetes 的现代化应用交付平台。",
    },
    {
      topic: "JVM 深度调优",
      category: "核心原理",
      description: "深入研究 ZGC 和 G1 GC 的内部机制与生产环境调优。",
    },
  ]
};

// Books
// Tips for finding book covers:
// 1. Amazon: Go to book detail page, right click cover -> "Copy image address". URL usually contains ._SL1500_.jpg
// 2. Douban (for Chinese books): Right click cover -> "Copy image address".
// 3. Publisher sites (O'Reilly, Manning): Usually have high res covers.
export const BOOKS_DATA: LocalizedData<BookItem[]> = {
  en: [
    {
      title: "Effective Java (3rd Edition)",
      author: "Joshua Bloch",
      category: "Core Java",
      status: "Finished",
      description: "The definitive guide to writing clear, correct, and reusable code in Java.",
      coverColor: "#2e7d32", // green-700
      coverImage: "https://m.media-amazon.com/images/I/81adbNw2vlL._SL1500_.jpg",
      link: "https://www.amazon.com/Effective-Java-Joshua-Bloch/dp/0134685997"
    },
    {
      title: "Java Concurrency in Practice",
      author: "Brian Goetz",
      category: "Concurrency",
      status: "Reading",
      description: "Essential reading for writing thread-safe and scalable concurrent applications.",
      coverColor: "#0f172a", // slate-900
      coverImage: "https://m.media-amazon.com/images/I/81b+x+a+o4L._SL1500_.jpg",
      link: "https://www.amazon.com/Java-Concurrency-Practice-Brian-Goetz/dp/0321349601"
    },
    {
      title: "Designing Data-Intensive Applications",
      author: "Martin Kleppmann",
      category: "Architecture",
      status: "Finished",
      description: "The 'Bible' of distributed systems. Deep understanding of replication and transactions.",
      coverColor: "#b91c1c", // red-700
      coverImage: "https://m.media-amazon.com/images/I/91rr3BPljHL._SL1500_.jpg",
      link: "https://www.amazon.com/Designing-Data-Intensive-Applications-Reliable-Maintainable/dp/1449373321"
    },
    {
      title: "Domain-Driven Design",
      author: "Eric Evans",
      category: "Architecture",
      status: "To Read",
      description: "Tackling complexity in the heart of software. The foundation of microservices.",
      coverColor: "#1e3a8a", // blue-900
      coverImage: "https://m.media-amazon.com/images/I/81j891A0u+L._SL1500_.jpg",
      link: "https://www.amazon.com/Domain-Driven-Design-Tackling-Complexity-Software/dp/0321125215"
    },
  ],
  cn: [
    {
      title: "Effective Java 中文版 (第三版)",
      author: "Joshua Bloch",
      category: "Java 核心",
      status: "Finished",
      description: "编写清晰、正确且可重用 Java 代码的权威指南，Java 程序员必读。",
      coverColor: "#2e7d32",
      coverImage: "https://m.media-amazon.com/images/I/81adbNw2vlL._SL1500_.jpg",
      link: "https://book.douban.com/subject/30412517/"
    },
    {
      title: "Java 并发编程实战",
      author: "Brian Goetz",
      category: "并发编程",
      status: "Reading",
      description: "深入理解 Java 线程安全与高性能并发应用的必读经典。",
      coverColor: "#0f172a",
      coverImage: "https://m.media-amazon.com/images/I/81b+x+a+o4L._SL1500_.jpg",
      link: "https://book.douban.com/subject/10484692/"
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
      title: "领域驱动设计",
      author: "Eric Evans",
      category: "架构方法论",
      status: "To Read",
      description: "软件核心复杂性应对之道，现代微服务架构设计的理论基石。",
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
    title: "深入理解 JVM 内存管理",
    summary: "详细解析 JVM 内存结构、垃圾回收算法（GC）以及高负载应用下的性能调优实战技巧。",
    date: "2023-10-15",
    tags: ["Java", "JVM", "Performance"],
    content: `
# 深入理解 JVM 内存管理

Java 虚拟机 (JVM) 是运行 Java 代码的核心引擎。理解其内存管理机制对于编写高效、可扩展的应用程序至关重要。

## 堆 (Heap) 与 栈 (Stack)

- **堆**: 存储对象实例和 JRE 类。垃圾回收 (GC) 主要发生在这里。
- **栈**: 存储基本数据类型和堆中对象的引用。

## 垃圾回收 (Garbage Collection)

Java 的自动内存管理依赖于 GC。常见的算法包括：

1. **Serial GC**: 简单高效，适用于单线程环境。
2. **Parallel GC**: 注重吞吐量，适用于多线程环境。
3. **G1 GC**: 旨在提供可预测的停顿时间，适用于大堆内存。
4. **ZGC**: 低延迟，适用于超大堆内存（TB 级）。

## 调优建议

- 将初始堆大小 (\`-Xms\`) 和最大堆大小 (\`-Xmx\`) 设置为相同值，以避免运行时重新分配内存的开销。
- 根据工作负载类型（吞吐量优先 vs 延迟优先）选择合适的垃圾回收器。
    `
  },
  {
    id: "post-2",
    title: "基于 Spring Cloud Alibaba 构建微服务",
    summary: "如何使用 Nacos 进行服务发现与配置管理，结合 Sentinel 实现流量控制，构建健壮的微服务架构。",
    date: "2023-11-20",
    tags: ["Spring Cloud", "Microservices", "Architecture"],
    content: `
# Spring Cloud Alibaba 实战

Spring Cloud Alibaba 为分布式应用开发提供了一站式解决方案。

## 核心组件

- **Nacos**: 动态服务发现、配置管理和服务管理。
- **Sentinel**: 流量控制、熔断降级、系统自适应保护。
- **RocketMQ**: 分布式消息和流数据平台。
- **Seata**: 高性能分布式事务解决方案。

## 为什么选择 Nacos？

Nacos 同时支持基于 DNS 和基于 RPC 的服务发现。它还提供实时配置更新功能，无需重启服务即可生效，极大地提高了运维效率。
    `
  }
];

// Locations
const COMMON_LOCATIONS: MapLocation[] = [
  { name: "Chengdu", lat: 30.5728, lng: 104.0668, type: "current" },
  { name: "Suzhou", lat: 31.2989, lng: 120.5853, type: "visited" },
  { name: "Shanghai", lat: 31.2304, lng: 121.4737, type: "visited" },
  { name: "Beijing", lat: 39.9042, lng: 116.4074, type: "visited" },
  { name: "Hangzhou", lat: 30.2741, lng: 120.1551, type: "visited" },
  { name: "Shenzhen", lat: 22.5431, lng: 114.0579, type: "visited" },
  { name: "Tokyo", lat: 35.6762, lng: 139.6503, type: "visited" },
  { name: "Osaka", lat: 34.6937, lng: 135.5023, type: "visited" },
  { name: "Seoul", lat: 37.5665, lng: 126.9780, type: "visited" },
  { name: "Bangkok", lat: 13.7563, lng: 100.5018, type: "visited" },
  { name: "Singapore", lat: 1.3521, lng: 103.8198, type: "visited" },
];

export const SPACE_DATA: LocalizedData<SpaceContent> = {
  en: {
    title: "Space",
    subtitle: "This is my travel footprint. And currently I'm living in Chengdu, China.",
    currentLocationText: "Chengdu, China",
    locations: COMMON_LOCATIONS,
  },
  cn: {
    title: "足迹",
    subtitle: "这是我的旅行足迹。目前我居住在中国成都。",
    currentLocationText: "中国，成都",
    locations: COMMON_LOCATIONS,
  }
};

// Footer
export const FOOTER_CONTENT: LocalizedData<FooterContent> = {
  en: {
    title: "Ready to build scalable systems?",
    emailText: "Email Me",
    copyright: "© 2024 Cooper. All rights reserved.",
    builtWith: "Built with React, TypeScript & Tailwind CSS",
  },
  cn: {
    title: "准备好构建可扩展的系统了吗？",
    emailText: "发送邮件",
    copyright: "© 2024 Cooper. 保留所有权利.",
    builtWith: "基于 React, TypeScript & Tailwind CSS 构建",
  }
};

// External Links
export const BLOG_URL = "https://juejin.cn";
export const CONTACT_INFO = {
  email: "958390434@qq.com",
  github: "https://github.com/iamliyangjing",
};