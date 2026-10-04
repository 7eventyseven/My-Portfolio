export type ProjectCategory = 'Web' | 'Mobile' | 'Software' | 'Full Stack';

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: ProjectCategory;
  year: string;
  role: string;
  clientOrContext?: string;
  imageUrl: string;
  imageStyle?: 'cover' | 'mobile' | 'logo';
  featured?: boolean;
  description: string;
  challenge?: string;
  solution?: string;
  techStack: string[];
  metrics: ProjectMetric[];
  features: string[];
  liveUrl?: string;
  githubUrl?: string;
  storeUrl?: string;
  isCustomUpload?: boolean;
  createdAt: number;
}

export interface UserProfile {
  name: string;
  brandTag: string;
  title: string;
  subTitle: string;
  bio: string;
  location: string;
  avatarUrl: string;
  email: string;
  github: string;
  linkedin: string;
  twitter?: string;
  availableForHire: boolean;
  statusText: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  description: string;
  achievements: string[];
  tech: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: string;
    description: string;
  }[];
}
