import { LucideIcon } from "lucide-react";

export interface SkillItem {
  name: string;
  level: number; // 0 to 100
}

export interface SkillCategory {
  title: string;
  icon: LucideIcon;
  skills: SkillItem[];
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  link?: string;
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  company: string;
  description: string;
  achievements: string[];
  projects?: Project[];
}

export interface LearningItem {
  topic: string;
  description: string;
  category: string;
}

export interface BookItem {
  title: string;
  author: string;
  category: string;
  status: 'Reading' | 'Finished' | 'To Read';
  description: string;
  coverColor: string; // CSS class for gradient or color
}

export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  date: string;
  tags: string[];
  content: string;
}