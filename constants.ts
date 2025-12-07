import { 
  Server, 
  Database, 
  Cloud, 
  Code, 
  Terminal, 
  ShieldCheck 
} from "lucide-react";
import { ExperienceItem, LearningItem, SkillCategory, BookItem, BlogPost } from "./types";

export const HERO_CONTENT = {
  slogan: "构建高效可靠的分布式 Java 应用",
  role: "Java 后端开发工程师",
  subRole: "专注于 Spring Boot/Cloud 和 高性能系统",
  ctaText: "查看技术栈",
};

export const SKILL_CATEGORIES: SkillCategory[] = [
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
      { name: "Microservices (微服务)", level: 90 },
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
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
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
];

export const LEARNING_DATA: LearningItem[] = [
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
];

export const BOOKS_DATA: BookItem[] = [
  {
    title: "数据密集型应用系统设计",
    author: "Martin Kleppmann",
    category: "架构设计",
    status: "Reading",
    description: "被誉为分布式系统的“圣经”，深入理解复制、分区和事务的底层原理。",
    coverColor: "from-blue-600 to-indigo-700",
  },
  {
    title: "深入理解 Java 虚拟机",
    author: "周志明",
    category: "Java 核心",
    status: "Finished",
    description: "Java 开发者必读经典，系统掌握 JVM 内存管理、垃圾收集与性能调优。",
    coverColor: "from-orange-500 to-red-600",
  },
  {
    title: "领域驱动设计 (DDD)",
    author: "Eric Evans",
    category: "方法论",
    status: "To Read",
    description: "学习如何处理复杂业务逻辑，构建高内聚低耦合的领域模型，打破技术与业务的壁垒。",
    coverColor: "from-emerald-500 to-teal-700",
  },
  {
    title: "重构：改善既有代码的设计",
    author: "Martin Fowler",
    category: "代码质量",
    status: "Finished",
    description: "培养良好的代码嗅觉，掌握安全重构遗留系统的系统化方法。",
    coverColor: "from-purple-500 to-violet-700",
  },
];

// 外部博客链接配置
export const BLOG_URL = "https://juejin.cn"; // 您可以将这里替换为您的 CSDN、博客园或 GitHub 链接

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    title: "深入理解 Spring Boot 自动配置原理",
    summary: "剖析 @EnableAutoConfiguration 的工作机制，以及如何编写自定义 Starter。",
    date: "2024-03-15",
    tags: ["Spring Boot", "Java", "源码分析"],
    content: `
# 深入理解 Spring Boot 自动配置原理

Spring Boot 的自动配置（Auto-Configuration）是其核心特性之一，它大大简化了 Spring 应用的配置过程。

## @EnableAutoConfiguration

这个注解是自动配置的入口。它通过 \`@Import(AutoConfigurationImportSelector.class)\` 导入了自动配置的选择器。

## 加载配置类

Spring Boot 启动时会扫描 \`META-INF/spring.factories\` (或 Spring Boot 3 的 imports 文件)，加载其中配置的类。

## @Conditional 注解

自动配置类大量使用了 \`@Conditional\` 系列注解（如 \`@ConditionalOnClass\`, \`@ConditionalOnMissingBean\`），确保只有在满足特定条件时，配置才会生效。
    `
  },
  {
    id: "2",
    title: "高并发系统中的缓存一致性问题",
    summary: "探讨 Cache Aside Pattern、延迟双删等策略在实际项目中的应用。",
    date: "2024-02-10",
    tags: ["Redis", "架构设计", "高并发"],
    content: `
# 高并发系统中的缓存一致性问题

在使用缓存（如 Redis）提升系统性能时，如何保证缓存与数据库的数据一致性是一个经典难题。

## Cache Aside Pattern

这是最常用的模式：读的时候，先读缓存，缓存没有的话，就读数据库，然后取出数据后放入缓存，同时返回响应。更新的时候，先更新数据库，然后再删除缓存。

## 延迟双删

为了解决更新数据库后、删除缓存前的时间窗口内，旧数据被读入缓存的问题，可以采用延迟双删策略。
    `
  }
];

export const CONTACT_INFO = {
  email: "developer@example.com",
  github: "https://github.com/yourusername",
  copyright: "© 2024 Java 后端工程师. 保留所有权利.",
};