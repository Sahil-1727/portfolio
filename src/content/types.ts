export type SkillGroupId =
  | "languages"
  | "datascience"
  | "frameworks"
  | "databases"
  | "tools"
  | "concepts";

export type ProjectId =
  | "ragAssistant"
  | "devtrack"
  | "queueSystem"
  | "housePricePredictor"
  | "bizIntelEngine";

export type SocialLinkId = "linkedin" | "github" | "takeuforward";

export interface HeroContent {
  greeting: string;
  headline: string;
  summary: string;
}

export interface Experience {
  title: string;
  period: string;
  location: string;
  highlights: string[];
}

export interface Education {
  degree: string;
  period: string;
  institution: string;
  detail?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  issued: string;
  credentialUrl?: string;
  pdfFile?: string;
}

export interface AboutContent {
  location: string;
  role: string;
  gpa: string;
  graduation: string;
  experience: Experience[];
  education: Education[];
  certifications: Certification[];
  achievements: string[];
}

export interface SkillGroup {
  id: SkillGroupId;
  title: string;
  skills: string[];
}

export interface Project {
  id: ProjectId;
  title: string;
  type: string;
  description: string;
  tech: string[];
  link: string;
  liveLink?: string;
  status?: string;
}

export interface ContactContent {
  introduction: string;
  email: string;
  formSubject: string;
}

export interface PortfolioProfile {
  name: string;
  siteTitle: string;
  initials: string;
  hero: HeroContent;
  resumeFile: string;
  socialLinks: Record<SocialLinkId, string>;
  about: AboutContent;
  skillGroups: SkillGroup[];
  projects: Project[];
  contact: ContactContent;
}
