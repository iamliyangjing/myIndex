import { LucideIcon } from "lucide-react";

export interface SkillItem {
  name: string;
  level: number;
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
  coverColor: string;
  coverImage: string;
  link: string;
}

export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  date: string;
  tags: string[];
  content: string;
}

export interface ProfileData {
  avatarUrl: string;
  name: string;
  university: string;
  gradYear: string;
  roles: string[];
}

export interface HeroContent {
  slogan: string;
  role: string;
  subRole: string;
  ctaText: string;
  downloadText: string;
}

export interface FooterContent {
  title: string;
  emailText: string;
  copyright: string;
  builtWith: string;
}

export interface MapLocation {
  name: string;
  lat: number;
  lng: number;
  type: 'visited' | 'current';
}

export interface SpaceContent {
  title: string;
  subtitle: string;
  currentLocationText: string;
  locations: MapLocation[];
}

// Container for bilingual data
export interface LocalizedData<T> {
  en: T;
  cn: T;
}