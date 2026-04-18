export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
  summary: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
}

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl: string;
  year: string;
  highlights: string[];
}

export interface Certificate {
  name: string;
  issuer: string;
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  skillGroups: SkillGroup[];
  experience: Experience[];
  education: Education[];
  projects: Project[];
  certificates: Certificate[];
}
