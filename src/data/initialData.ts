import { Project, UserProfile, ExperienceItem, SkillCategory, EducationItem } from '../types/portfolio';

// Initial generated luxury assets
import avatarImg from '../assets/images/plangnan_portrait.png';
import fintechImg from '../assets/images/project_fintech_gold_1791112055912.jpg';
import coutureImg from '../assets/images/project_couture_ecommerce_1791112068069.jpg';
import cloudImg from '../assets/images/project_cloud_system_1791112079441.jpg';
import afreshShot from '../assets/images/screens/afreshclub.png';
import josCityShot from '../assets/images/screens/joscity.png';
import popswitShot from '../assets/images/screens/popswit.png';
import upnextShot from '../assets/images/screens/upnext.png';
import gatewavShot from '../assets/images/screens/gatewav.png';
import nexoraShot from '../assets/images/screens/nexora.png';
import geniuswavShot from '../assets/images/screens/geniuswav.png';
import knowristShot from '../assets/images/screens/knowrist.png';
import cbrixiShot from '../assets/images/screens/cbrixi.png';

export const INITIAL_USER_PROFILE: UserProfile = {
  name: "Plangnan Nungse",
  brandTag: "AURELIA // PLANGNAN",
  title: "Frontend Developer · Web & App Developer",
  subTitle: "Clean, responsive interfaces that bring people, businesses and ideas together.",
  bio: "Frontend-focused Software Engineer and Web & App Developer with a B.Sc. in Computer Science. I build, deploy and maintain web and application-based products with JavaScript, TypeScript, React and Next.js, taking them independently from concept to deployment, across education, e-commerce, food ordering, ticketing, smart-city services and creative marketplaces.",
  location: "Jos, Plateau State, Nigeria",
  avatarUrl: avatarImg,
  email: "nungseplangnan@gmail.com",
  github: "https://github.com/7eventyseven",
  linkedin: "https://linkedin.com",
  twitter: "https://x.com",
  availableForHire: true,
  statusText: "Available for Frontend Roles & Freelance Projects"
};

export const INITIAL_PROJECTS: Project[] = [
  {
    id: "proj-afresh-club",
    title: "Afresh Club",
    tagline: "Education and course management platform for AFRESH Academy.",
    category: "Web",
    year: "",
    role: "Web & App Developer",
    clientOrContext: "AFRESH Academy",
    imageUrl: afreshShot,
    imageStyle: "cover",
    featured: true,
    description: "I personally developed the Afresh Club website for AFRESH Academy. Students can register, pay their tuition, access educational content and download their notes, while teachers can upload and manage their courses. I built the user-facing interfaces and core functionality, then deployed the platform.",
    techStack: ["React", "Next.js", "TypeScript", "Vercel"],
    metrics: [],
    features: [
      "Student registration and access to educational content",
      "Online tuition payment",
      "Downloadable course notes",
      "Teacher course upload and management"
    ],
    liveUrl: "https://afreshclub.com",
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 1
  },
  {
    id: "proj-jos-city",
    title: "Jos City",
    tagline: "A smart city app that brings the people and businesses of Jos together in one place.",
    category: "Web",
    year: "",
    role: "Frontend Developer",
    clientOrContext: "Smart City Platform",
    imageUrl: josCityShot,
    imageStyle: "mobile",
    featured: true,
    description: "Jos City is a smart city app that connects the people of Jos with local businesses and services. It gives residents a single place to discover, reach and engage with everything happening in the city.",
    techStack: ["HTML", "CSS", "JavaScript"],
    metrics: [],
    features: [
      "Unified hub for Jos residents and local businesses",
      "Business discovery and listings",
      "Community-focused smart city experience",
      "Responsive layout for mobile and desktop"
    ],
    liveUrl: "https://joscity.com",
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 2
  },
  {
    id: "proj-cbrixi",
    title: "Cbrixi",
    tagline: "An e-commerce platform for browsing and ordering gadgets and other products.",
    category: "Web",
    year: "",
    role: "Web & App Developer",
    clientOrContext: "E-commerce",
    imageUrl: cbrixiShot,
    imageStyle: "mobile",
    featured: true,
    description: "I personally developed the Cbrixi web application, where customers browse and order gadgets and other products. I built the customer-facing interfaces and product functionality, implemented the online purchasing workflow, and integrated the APIs behind it.",
    techStack: ["React", "Next.js", "TypeScript", "REST APIs"],
    metrics: [],
    features: [
      "Product browsing for gadgets and other items",
      "Online ordering and purchasing workflow",
      "API integrations",
      "Responsive customer-facing interfaces"
    ],
    liveUrl: "https://cbrixi.com",
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 3
  },
  {
    id: "proj-popswit",
    title: "Popswit",
    tagline: "A food and beverage ordering and delivery platform.",
    category: "Web",
    year: "",
    role: "Web & App Developer",
    clientOrContext: "Food Ordering",
    imageUrl: popswitShot,
    imageStyle: "mobile",
    featured: false,
    description: "I personally developed the Popswit web platform for ordering food and beverages and getting them delivered. I worked on the frontend implementation, ordering functionality and deployment to give customers a smooth digital ordering experience.",
    techStack: ["React", "Next.js", "TypeScript", "Vercel"],
    metrics: [],
    features: [
      "Food and beverage ordering",
      "Delivery service",
      "Customer-facing ordering interfaces",
      "Responsive layout for mobile and desktop"
    ],
    liveUrl: "https://popswit.com",
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 4
  },
  {
    id: "proj-upnext",
    title: "UpNext",
    tagline: "A creative marketplace and booking platform connecting African creatives with clients.",
    category: "Web",
    year: "",
    role: "Web & App Developer",
    clientOrContext: "Creative Marketplace",
    imageUrl: upnextShot,
    imageStyle: "mobile",
    featured: false,
    description: "I personally developed UpNext, a platform designed to connect African creatives with clients. Clients can discover creatives and submit their project requirements, and the product is designed to scale as a marketplace.",
    techStack: ["React", "Next.js", "TypeScript"],
    metrics: [],
    features: [
      "Creative discovery for clients",
      "Project request workflow covering location, dates, budget and description",
      "Application routing and user interaction flows",
      "Responsive interfaces for different screen sizes"
    ],
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 5
  },
  {
    id: "proj-gatewav",
    title: "Gatewav",
    tagline: "A ticketing platform for booking and paying for event tickets, and browsing past and upcoming events.",
    category: "Web",
    year: "",
    role: "Frontend Developer",
    clientOrContext: "Events & Ticketing",
    imageUrl: gatewavShot,
    imageStyle: "mobile",
    featured: false,
    description: "Gatewav is a ticket platform where anyone can book and pay for event tickets. Users can browse upcoming events, look back at past events, and complete their ticket purchase in one smooth flow.",
    techStack: ["HTML", "CSS", "JavaScript"],
    metrics: [],
    features: [
      "Ticket booking and online payment",
      "Upcoming events listings",
      "Past events archive",
      "Responsive layout for mobile and desktop"
    ],
    liveUrl: "https://gatewav.com",
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 6
  },
  {
    id: "proj-sms",
    title: "Nexora SMS // School Management System",
    tagline: "An all-in-one school management system, from tracking results to paying school fees.",
    category: "Software",
    year: "",
    role: "Frontend Developer",
    clientOrContext: "Education",
    imageUrl: nexoraShot,
    imageStyle: "mobile",
    featured: false,
    description: "Nexora SMS is a school management system that helps schools manage students, teachers, parents, academics and finances in one secure platform, from tracking results to paying school fees.",
    techStack: ["HTML", "CSS", "JavaScript"],
    metrics: [],
    features: [
      "Student results tracking",
      "School fee payments",
      "Centralised school administration",
      "Dashboards for day-to-day school operations"
    ],
    liveUrl: "https://nexorasms.com",
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 7
  },
  {
    id: "proj-geniuswav",
    title: "Genius Wav",
    tagline: "An app for booking music production sessions.",
    category: "Web",
    year: "",
    role: "Frontend Developer",
    clientOrContext: "Music Production",
    imageUrl: geniuswavShot,
    imageStyle: "mobile",
    featured: false,
    description: "Genius Wav lets artists and creators book music production sessions online, making it simple to find a slot and secure studio time.",
    techStack: ["HTML", "CSS", "JavaScript"],
    metrics: [],
    features: [
      "Music production session booking",
      "Session scheduling",
      "Responsive layout for mobile and desktop"
    ],
    liveUrl: "https://geniuswav.com",
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 8
  },
  {
    id: "proj-knowrist",
    title: "Knowrist",
    tagline: "A word game that scrambles words for you to rearrange.",
    category: "Web",
    year: "",
    role: "Frontend Developer",
    clientOrContext: "Gaming",
    imageUrl: knowristShot,
    imageStyle: "logo",
    featured: false,
    description: "Knowrist is a word gaming app that scrambles words and challenges players to arrange the letters back into the right order.",
    techStack: ["HTML", "CSS", "JavaScript"],
    metrics: [],
    features: [
      "Scrambled word puzzles",
      "Interactive letter arranging",
      "Responsive layout for mobile and desktop"
    ],
    liveUrl: "https://knowrist.com",
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 9
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming Languages",
    description: "The languages I use to build interfaces, application logic and backend features.",
    skills: [
      { name: "JavaScript", level: "Core", description: "Interactive UI logic, DOM work, async code and application features" },
      { name: "TypeScript", level: "Core", description: "Typed, maintainable React and Next.js codebases" },
      { name: "HTML", level: "Core", description: "Semantic, accessible and SEO-friendly page structure" },
      { name: "CSS", level: "Core", description: "Responsive layouts with Flexbox and Grid, animations and polished styling" },
      { name: "Python", level: "Proficient", description: "Scripting, automation and AI/ML exploration" },
      { name: "PHP", level: "Proficient", description: "Server-side web development" }
    ]
  },
  {
    title: "Frameworks & Development",
    description: "Building responsive, user-focused web applications from requirements to release.",
    skills: [
      { name: "React", level: "Core", description: "Component-based, user-focused interfaces" },
      { name: "Next.js", level: "Core", description: "Routing, full web applications and production deployments" },
      { name: "Responsive Web Development", level: "Core", description: "Mobile-first interfaces that adapt to every screen size" },
      { name: "API Integration", level: "Proficient", description: "REST APIs and third-party services wired into web applications" },
      { name: "Node.js", level: "Proficient", description: "Server-side JavaScript and application logic" }
    ]
  },
  {
    title: "Tools, Deployment & More",
    description: "Shipping, maintaining and improving software in production.",
    skills: [
      { name: "Git & GitHub", level: "Core", description: "Source control and collaborative development workflows" },
      { name: "Vercel", level: "Core", description: "Deploying and hosting web applications" },
      { name: "Debugging", level: "Core", description: "Troubleshooting issues and improving existing functionality" },
      { name: "AI / ML", level: "Exploring", description: "Exploring artificial intelligence and machine learning for real-world solutions" }
    ]
  }
];

export const CAREER_EXPERIENCES: ExperienceItem[] = [
  {
    period: "Sep 2025 — Present",
    role: "Web & App Developer",
    company: "Afresh Centre",
    location: "Nigeria",
    description: "Developing and maintaining web and application-based products for the organization, working independently across multiple products, from new applications to existing systems.",
    achievements: [
      "Build responsive, user-focused interfaces using JavaScript, TypeScript, React, Next.js, HTML and CSS.",
      "Develop software features from requirements through implementation and deployment.",
      "Integrate APIs and external services into web applications.",
      "Deploy and maintain applications using Vercel and other hosting and deployment tools.",
      "Troubleshoot application issues, debug code and improve existing software functionality.",
      "Apply software engineering principles to build practical solutions for education, commerce, food ordering and other business use cases."
    ],
    tech: ["JavaScript", "TypeScript", "React", "Next.js", "HTML", "CSS", "Git", "GitHub", "Vercel"]
  },
  {
    period: "2019 — 2020",
    role: "MoMo Canvasser",
    company: "MTN Nigeria",
    location: "Nigeria",
    description: "Promoted MTN Mobile Money services and helped customers register for and adopt digital financial services.",
    achievements: [
      "Engaged directly with customers to explain digital financial services and their use cases.",
      "Supported customer onboarding and provided basic assistance with the service.",
      "Developed communication, customer service and field problem-solving skills."
    ],
    tech: ["Customer Onboarding", "Communication", "Digital Financial Services"]
  }
];

export const EDUCATION: EducationItem[] = [
  {
    institution: "University of Jos",
    degree: "Bachelor of Science (B.Sc.) — Computer Science",
    period: "Graduated September 2025"
  }
];

export const AREAS_OF_INTEREST: string[] = [
  "Software Engineering",
  "Artificial Intelligence",
  "Machine Learning",
  "Developer Tools",
  "Web Applications",
  "Automation",
  "Emerging Technologies"
];
