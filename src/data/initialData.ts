import { Project, UserProfile, ExperienceItem, SkillCategory } from '../types/portfolio';

// Initial generated luxury assets
import avatarImg from '../assets/images/hero_dev_portrait_1791112043531.jpg';
import fintechImg from '../assets/images/project_fintech_gold_1791112055912.jpg';
import coutureImg from '../assets/images/project_couture_ecommerce_1791112068069.jpg';
import cloudImg from '../assets/images/project_cloud_system_1791112079441.jpg';

export const INITIAL_USER_PROFILE: UserProfile = {
  name: "Langnan Nungsep",
  brandTag: "AURELIA // LANGNAN",
  title: "Senior Full-Stack & Mobile Software Architect",
  subTitle: "Where high-performance distributed systems meet haute couture visual aesthetics.",
  bio: "A polyglot software engineer and mobile architect crafting scalable backend systems, responsive web applications, and intuitive native mobile experiences. Known for marrying resilient code architectures with bold, refined aesthetics.",
  location: "London · Remote Worldwide",
  avatarUrl: avatarImg,
  email: "nungseplangnan@gmail.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  twitter: "https://x.com",
  availableForHire: true,
  statusText: "Available for Senior Engineering Roles & High-Impact Contracts"
};

export const INITIAL_PROJECTS: Project[] = [
  {
    id: "proj-aurapay-mobile",
    title: "AuraPay // High-Yield Wealth & Crypto iOS/Android Suite",
    tagline: "Cross-platform fintech mobile app engineered with zero-latency biometric authorization and real-time ledger streaming.",
    category: "Mobile",
    year: "2026",
    role: "Lead Mobile Architect",
    clientOrContext: "Aura Capital Group",
    imageUrl: fintechImg,
    featured: true,
    description: "Architected a dual-platform iOS and Android wealth management application serving high-net-worth investors with real-time portfolio rebalancing, decentralized ledger integration, and military-grade biometric encryption.",
    challenge: "Handling concurrent WebSocket market ticker feeds while maintaining a silky 120Hz interface on both high-end and budget Android/iOS devices without battery thermal throttling.",
    solution: "Built a reactive C++ native bridge wrapper with custom off-thread worker queues, reducing main thread serialization overhead by 78% and ensuring sub-40ms execution times.",
    techStack: ["React Native", "Swift", "TypeScript", "WebSocket", "Node.js", "Tailwind"],
    metrics: [
      { label: "App Store Rating", value: "4.9 ★" },
      { label: "Monthly Active Users", value: "125,000+" },
      { label: "Order Execution", value: "< 38ms" }
    ],
    features: [
      "FaceID / Biometric Hardware Key Enclave integration",
      "Dynamic real-time candlestick rendering engine in WebGL/Skia",
      "Offline transactional queuing with automatic conflict resolution",
      "Comprehensive push notification orchestration via FCM and APNs"
    ],
    liveUrl: "https://example.com/aurapay",
    githubUrl: "https://github.com/example/aurapay-mobile-core",
    storeUrl: "https://apps.apple.com",
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 10
  },
  {
    id: "proj-maison-web",
    title: "Maison Dorée // Haute Couture 3D Web Atelier & E-Commerce",
    tagline: "Ultra-luxury responsive web platform featuring interactive 3D fabric simulations, headless Shopify engine, and bespoke checkout.",
    category: "Web",
    year: "2026",
    role: "Principal Full-Stack Engineer",
    clientOrContext: "Maison Dorée Paris",
    imageUrl: coutureImg,
    featured: true,
    description: "Designed and engineered an immersive digital storefront for an elite Paris fashion house. Blends WebGL fabric physics shaders with server-side rendered catalog experiences and custom global tax/currency checkout flows.",
    challenge: "Delivering instantaneous page transitions and 60fps 3D cloth draping simulations without penalizing SEO or Core Web Vitals.",
    solution: "Implemented incremental static regeneration with progressive WebGL LOD (level of detail) loading, achieving a 99/100 Lighthouse performance rating and sub-1s First Contentful Paint globally.",
    techStack: ["Next.js", "React", "TypeScript", "Three.js / WebGL", "GraphQL", "Tailwind CSS"],
    metrics: [
      { label: "Checkout Conversion", value: "+210%" },
      { label: "Lighthouse Performance", value: "99 / 100" },
      { label: "Global P99 Latency", value: "240ms" }
    ],
    features: [
      "Custom procedural GLSL shaders for metallic gold fabric specular reflections",
      "Headless GraphQL integration with distributed edge caching",
      "Dynamic localized currency conversion across 42 currencies",
      "Zero-layout-shift responsive layouts across mobile, tablet, and 4K displays"
    ],
    liveUrl: "https://example.com/maison-doree",
    githubUrl: "https://github.com/example/maison-web-platform",
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 20
  },
  {
    id: "proj-helios-backend",
    title: "Helios Engine // Distributed Cloud Pipeline & Telemetry Mesh",
    tagline: "Resilient cloud-native software backend processing millions of concurrent telemetry streams with automated self-healing.",
    category: "Software",
    year: "2025",
    role: "Distributed Systems Engineer",
    clientOrContext: "Helios Cloud Infrastructure",
    imageUrl: cloudImg,
    featured: true,
    description: "Engineered a mission-critical distributed microservices engine in Go and Python. Coordinates data synchronization, real-time query aggregation, and automated failover across multi-region Kubernetes clusters.",
    challenge: "Ingesting 4M+ discrete IoT & server event payloads per second during peak traffic spikes without packet drops or database write bottlenecks.",
    solution: "Developed an asynchronous distributed pipeline using Apache Kafka, Redis cluster buffering, and partitioned Go workers with Raft consensus, eliminating write contention.",
    techStack: ["Go", "Python", "Docker", "Kubernetes", "gRPC", "PostgreSQL", "Redis"],
    metrics: [
      { label: "Peak Ingestion", value: "4.2M events/s" },
      { label: "System Availability", value: "99.999%" },
      { label: "Cloud Cost Saved", value: "35% YoY" }
    ],
    features: [
      "Zero-downtime rolling canary deployments via custom Kubernetes operator",
      "gRPC protocol buffer contracts with strict schema versioning",
      "End-to-end tracing and Prometheus metrics telemetry visualization",
      "Distributed cache synchronization with Redis Pub/Sub backpressure"
    ],
    githubUrl: "https://github.com/example/helios-engine-core",
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 35
  },
  {
    id: "proj-voguepulse-fullstack",
    title: "VoguePulse // Creator Live-Commerce & Realtime Video Hub",
    tagline: "Full-stack creator monetization hub pairing interactive WebRTC streaming with instant flash-sale drops.",
    category: "Full Stack",
    year: "2025",
    role: "Lead Full-Stack Developer",
    clientOrContext: "VoguePulse Media",
    imageUrl: fintechImg,
    featured: false,
    description: "Created a full-stack web and mobile web ecosystem allowing fashion creators to host live shopping broadcasts, chat synchronously with viewers, and trigger 30-second flash inventory sales.",
    challenge: "Synchronizing video stream latency with real-time flash inventory counters during sudden viral traffic surges of 50,000+ simultaneous buyers.",
    solution: "Leveraged WebRTC for ultra-low sub-second streaming combined with Redis atomic decrement transactions and optimistic UI updates.",
    techStack: ["React", "Node.js", "Express", "PostgreSQL", "WebSockets", "Docker", "Tailwind CSS"],
    metrics: [
      { label: "Concurrent Viewers", value: "50,000+" },
      { label: "Flash Sale Sellouts", value: "< 18s" },
      { label: "Creator Earnings", value: "$2.4M+" }
    ],
    features: [
      "Ultra-low latency sub-second live video broadcasting",
      "High-throughput transactional bidding engine",
      "Automated automated invoice generation and Stripe Connect payouts",
      "Interactive audience reaction emoji burst engine at 60fps"
    ],
    liveUrl: "https://example.com/voguepulse",
    githubUrl: "https://github.com/example/voguepulse-stack",
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 50
  },
  {
    id: "proj-velvet-mobile",
    title: "Velvet Stylist // AI-Powered Smart Wardrobe Mobile App",
    tagline: "Native mobile lifestyle application utilizing on-device vision models to curate personalized haute fashion looks.",
    category: "Mobile",
    year: "2025",
    role: "Mobile App Engineer",
    clientOrContext: "Velvet Studio",
    imageUrl: coutureImg,
    featured: false,
    description: "Designed a native mobile app for iOS and Android that catalogs user wardrobes via computer vision, matches palettes using color theory algorithms, and suggests runway-inspired outfits.",
    challenge: "Running computer vision background segmentation on mobile devices without freezing the UI or draining battery.",
    solution: "Integrated CoreML and TensorFlow Lite quantized models with background processing workers, delivering instantaneous background cutout in under 120ms.",
    techStack: ["React Native", "TypeScript", "Python", "CoreML", "FastAPI", "SQLite"],
    metrics: [
      { label: "Outfits Generated", value: "1.8M+" },
      { label: "Segmentation Time", value: "115ms" },
      { label: "Daily Retention", value: "48%" }
    ],
    features: [
      "On-device neural background removal for clothing uploads",
      "Smart seasonal capsule wardrobe generator",
      "Weather-aware outfit recommendation engine",
      "Smooth fluid gestural deck swiping with haptic tactile feedback"
    ],
    storeUrl: "https://apps.apple.com",
    githubUrl: "https://github.com/example/velvet-app",
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 70
  },
  {
    id: "proj-aether-software",
    title: "AetherKV // Embedded Key-Value Storage & Raft Engine",
    tagline: "High-performance embedded storage library written in Rust and Go with LSM-Tree storage and transactional guarantees.",
    category: "Software",
    year: "2024",
    role: "Core Systems Engineer",
    clientOrContext: "Open Source Systems",
    imageUrl: cloudImg,
    featured: false,
    description: "An open-source Log-Structured Merge-tree (LSM) embedded database engine designed for extreme read/write throughput in edge microservices and distributed stateful applications.",
    challenge: "Minimizing write amplification while maintaining fast point-lookups and sequential range scans on SSD storage.",
    solution: "Crafted custom Bloom filters, block-based caching, and concurrent compactions, surpassing baseline RocksDB read benchmarks in microservice test suites.",
    techStack: ["Rust", "Go", "C++", "Linux Systems", "gRPC", "CI/CD"],
    metrics: [
      { label: "Write Throughput", value: "820k ops/s" },
      { label: "GitHub Stars", value: "2.1k ★" },
      { label: "Zero Panic SLA", value: "100%" }
    ],
    features: [
      "Crash-resilient Write-Ahead Logging (WAL) with CRC32 verification",
      "Tunable memtable sizes and concurrent background SSTable compactor",
      "C-ABI bindings for seamless integration into Python, Node.js, and Swift",
      "Deterministic fuzz testing suite passing 10,000,000 continuous test cycles"
    ],
    githubUrl: "https://github.com/example/aether-kv",
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 90
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Software & Distributed Systems",
    description: "Architecting backend engines, resilient microservices, and high-throughput data processing pipelines.",
    skills: [
      { name: "Go (Golang)", level: "Production Master", description: "Concurrent workers, gRPC microservices, low-latency APIs" },
      { name: "Python", level: "Senior", description: "FastAPI, asynchronous event workers, data pipelines, automated tests" },
      { name: "System Design", level: "Architect", description: "Distributed consensus, fault tolerance, caching topologies, API gateways" },
      { name: "Docker & K8s", level: "Production", description: "Containerized deployments, Helm charts, automated scaling, health probes" },
      { name: "PostgreSQL & Redis", level: "Advanced", description: "Query optimization, indexing strategies, Pub/Sub, distributed locks" }
    ]
  },
  {
    title: "Web Engineering & Modern Frontend",
    description: "Crafting fluid, high-performance web applications with haute visual fidelity and rigorous web standards.",
    skills: [
      { name: "React & Next.js", level: "Expert", description: "Server components, App Router, state machines, suspense boundaries" },
      { name: "TypeScript", level: "Master", description: "Strict typing, generic abstractions, robust enterprise design patterns" },
      { name: "Tailwind CSS & Styling", level: "Haute Craft", description: "Responsive layouts, bespoke tokens, fluid typography, dark luxury themes" },
      { name: "Three.js & WebGL", level: "Proficient", description: "3D model rendering, custom shaders, interactive product viewports" },
      { name: "Performance & SEO", level: "Specialist", description: "Sub-second LCP, zero layout shifts, PWA compliance, accessibility" }
    ]
  },
  {
    title: "Mobile & Cross-Platform Apps",
    description: "Engineering fluid, native-grade applications for iOS and Android with delightful gestural ergonomics.",
    skills: [
      { name: "React Native", level: "Principal", description: "New Architecture (TurboModules & Fabric), custom native bridges, Skia" },
      { name: "iOS & Swift", level: "Advanced", description: "SwiftUI, CoreData, Keychain security enclave, APNs, widget development" },
      { name: "Mobile State & Offline", level: "Senior", description: "Zustand, Redux Toolkit, SQLite offline-first sync, background sync" },
      { name: "App Store & Play Store", level: "Veteran", description: "CI/CD Fastlane automated delivery, submission compliance, OTA updates" },
      { name: "Motion & Gestures", level: "Haute Craft", description: "60-120fps physics animations, tactile haptics, spring dynamics" }
    ]
  }
];

export const CAREER_EXPERIENCES: ExperienceItem[] = [
  {
    period: "2024 — Present",
    role: "Lead Full-Stack & Mobile Software Architect",
    company: "Aura Haute Systems // Private Consultancy",
    location: "London · Global Remote",
    description: "Directing technical architecture for venture-backed consumer tech, luxury fashion e-commerce, and high-frequency fintech platforms.",
    achievements: [
      "Architected 4 mobile and web applications from initial zero-to-one to over 250k+ active users globally.",
      "Spearheaded microservice transition from monolithic Python to Go gRPC services, lowering cloud infrastructure costs by 35%.",
      "Standardized shared cross-platform design token systems and offline-first client synchronization protocols."
    ],
    tech: ["Go", "React Native", "TypeScript", "Next.js", "Kubernetes", "Redis", "AWS"]
  },
  {
    period: "2022 — 2024",
    role: "Senior Software Engineer",
    company: "Vanguard Digital Technologies",
    location: "Remote",
    description: "Core contributor to scalable cloud infrastructure, real-time analytics engines, and cross-platform native client applications.",
    achievements: [
      "Engineered real-time telemetry streaming service handling 4M+ daily payloads with sub-50ms processing latency.",
      "Mentored a distributed squad of 8 frontend and mobile engineers across modern React, Swift, and TypeScript practices.",
      "Achieved 99.98% production uptime across critical consumer-facing transactional endpoints."
    ],
    tech: ["TypeScript", "React", "Node.js", "Python", "PostgreSQL", "Docker", "Fastlane"]
  },
  {
    period: "2020 — 2022",
    role: "Full-Stack Web & App Developer",
    company: "Solstice Studio",
    location: "London, UK",
    description: "Delivered bespoke digital applications, interactive 3D web experiences, and iOS/Android mobile clients for high-profile lifestyle brands.",
    achievements: [
      "Shipped 12+ production web and native mobile projects with 100% on-time milestone delivery.",
      "Pioneered WebGL product customizer increasing average checkout order value by 42%.",
      "Authored custom open-source libraries for resilient local storage and tactile gesture controls."
    ],
    tech: ["React Native", "Vue/React", "Express", "Three.js", "Tailwind CSS", "MongoDB"]
  }
];
