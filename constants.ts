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
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=JavaDev&backgroundColor=ffdfbf",
    name: "Java Architect",
    university: "University of Technology",
    gradYear: "Class of 2018",
    roles: [
      "Senior Backend Developer",
      "Distributed Systems Architect",
      "Open Source Contributor",
      "Tech Blogger"
    ]
  },
  cn: {
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=JavaDev&backgroundColor=ffdfbf",
    name: "Java 架构师",
    university: "某知名理工大学",
    gradYear: "2018 届毕业生",
    roles: [
      "资深 Java 后端开发",
      "分布式系统架构师",
      "开源项目贡献者",
      "技术博主"
    ]
  }
};

// Hero Content
export const HERO_CONTENT: LocalizedData<HeroContent> = {
  en: {
    slogan: "Building Efficient & Reliable Distributed Systems",
    role: "Java Backend Engineer",
    subRole: "Specializing in Spring Boot/Cloud and High Performance Computing",
    ctaText: "View Skills",
    downloadText: "Download Resume",
  },
  cn: {
    slogan: "构建高效可靠的分布式 Java 应用",
    role: "Java 后端开发工程师",
    subRole: "专注于 Spring Boot/Cloud 和 高性能系统",
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
        { name: "Java 17+", level: 95 },
        { name: "Spring Boot", level: 90 },
        { name: "Spring Cloud", level: 85 },
        { name: "MyBatis / JPA", level: 85 },
      ],
    },
    {
      title: "Architecture & Middleware",
      icon: Server,
      skills: [
        { name: "Microservices", level: 90 },
        { name: "RESTful API", level: 95 },
        { name: "Kafka / RocketMQ", level: 80 },
        { name: "Redis", level: 85 },
      ],
    },
    {
      title: "Database",
      icon: Database,
      skills: [
        { name: "MySQL Tuning", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "Elasticsearch", level: 70 },
      ],
    },
    {
      title: "DevOps & Cloud",
      icon: Cloud,
      skills: [
        { name: "Docker", level: 85 },
        { name: "Kubernetes (K8s)", level: 75 },
        { name: "Jenkins CI/CD", level: 80 },
      ],
    },
    {
      title: "Testing & QA",
      icon: ShieldCheck,
      skills: [
        { name: "JUnit 5", level: 90 },
        { name: "Mockito", level: 85 },
        { name: "SonarQube", level: 75 },
      ],
    },
  ],
  cn: [
    {
      title: "Java 生态核心",
      icon: Code,
      skills: [
        { name: "Java 17+", level: 95 },
        { name: "Spring Boot", level: 90 },
        { name: "Spring Cloud", level: 85 },
        { name: "MyBatis / JPA", level: 85 },
      ],
    },
    {
      title: "架构与中间件",
      icon: Server,
      skills: [
        { name: "微服务架构", level: 90 },
        { name: "RESTful API", level: 95 },
        { name: "Kafka / RocketMQ", level: 80 },
        { name: "Redis", level: 85 },
      ],
    },
    {
      title: "数据库",
      icon: Database,
      skills: [
        { name: "MySQL 调优", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "Elasticsearch", level: 70 },
      ],
    },
    {
      title: "DevOps 与云原生",
      icon: Cloud,
      skills: [
        { name: "Docker", level: 85 },
        { name: "Kubernetes (K8s)", level: 75 },
        { name: "Jenkins CI/CD", level: 80 },
      ],
    },
    {
      title: "测试与质量保障",
      icon: ShieldCheck,
      skills: [
        { name: "JUnit 5", level: 90 },
        { name: "Mockito", level: 85 },
        { name: "SonarQube", level: 75 },
      ],
    },
  ]
};

// Experience
export const EXPERIENCE_DATA: LocalizedData<ExperienceItem[]> = {
  en: [
    {
      id: "exp-1",
      period: "2021 - Present",
      role: "Senior Java Engineer",
      company: "TechFin Solutions",
      description: "Leading payment gateway migration and core architecture upgrades, ensuring system stability under high concurrency.",
      achievements: [
        "Optimized core transaction service, reducing average latency from 150ms to 30ms.",
        "Designed and implemented a high-availability distributed lock system using Redis.",
        "Led the migration from monolithic services to Spring Cloud Alibaba microservices architecture.",
      ],
      projects: [
        {
          name: "High-Freq Trading Engine",
          description: "Low-latency matching engine handling 10k TPS.",
          technologies: ["Java 17", "LMAX Disruptor", "Netty"],
          link: "#",
        }
      ]
    },
    {
      id: "exp-2",
      period: "2018 - 2021",
      role: "Java Developer",
      company: "Top E-commerce Co.",
      description: "Responsible for order processing center and inventory management backend services.",
      achievements: [
        "Refactored legacy code, increasing unit test coverage from 40% to 85%.",
        "Introduced Kafka for asynchronous order processing to handle traffic spikes during sales.",
      ],
      projects: []
    }
  ],
  cn: [
    {
      id: "exp-1",
      period: "2021 - 至今",
      role: "高级 Java 工程师",
      company: "TechFin 解决方案",
      description: "主导支付网关迁移及核心架构升级，负责高并发场景下的系统稳定性。",
      achievements: [
        "优化核心交易服务，将 平均响应时间 (Latency) 从 150ms 降至 30ms。",
        "设计并实现了基于 Redis 的高可用分布式锁系统，解决了重复扣款问题。",
        "主导单体服务向 Spring Cloud Alibaba 微服务架构的迁移，提升了开发效率。",
      ],
      projects: [
        {
          name: "高频交易引擎",
          description: "处理能力达 10k TPS 的低延迟撮合引擎。",
          technologies: ["Java 17", "LMAX Disruptor", "Netty"],
          link: "#",
        }
      ]
    },
    {
      id: "exp-2",
      period: "2018 - 2021",
      role: "Java 开发工程师",
      company: "某知名电商公司",
      description: "负责订单处理中心和库存管理后端服务的开发与维护。",
      achievements: [
        "重构遗留代码，将核心模块单元测试覆盖率从 40% 提升至 85%。",
        "引入 Kafka 进行异步订单处理，有效削峰填谷，平稳度过大促流量激增。",
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
    copyright: "© 2024 Java Backend Engineer. All rights reserved.",
    builtWith: "Built with React, TypeScript & Tailwind CSS",
  },
  cn: {
    title: "准备好构建可扩展的系统了吗？",
    emailText: "发送邮件",
    copyright: "© 2024 Java 后端工程师. 保留所有权利.",
    builtWith: "基于 React, TypeScript & Tailwind CSS 构建",
  }
};

// External Links
export const BLOG_URL = "https://juejin.cn";
export const CONTACT_INFO = {
  email: "developer@example.com",
  github: "https://github.com/yourusername",
};