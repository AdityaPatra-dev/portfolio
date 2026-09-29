export type ProjectCategory = 'cloud_devops' | 'ml_ai' | 'software' | 'all';

export type ProjectStatus = 'completed' | 'in_progress' | 'planned';

export interface ArchitectureNode {
  title: string;
  description: string;
  badge?: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'cloud_devops' | 'ml_ai' | 'software';
  featured: boolean;
  status: ProjectStatus;
  statusLabel: string;
  period?: string;
  githubUrl?: string;
  liveUrl?: string;
  technologies: string[];
  summary: string;
  problem: string;
  solution: string;
  myRole: string;
  architectureFlow?: ArchitectureNode[];
  architectureDiagramSvg?: string;
  engineeringDecisions: Array<{
    title: string;
    description: string;
  }>;
  challenges: Array<{
    challenge: string;
    resolution: string;
  }>;
  whatILearned: string[];
  verifiedFacts?: string[];
}

export interface SkillItem {
  name: string;
  status: 'used_in_projects' | 'learning_exploring';
  note?: string;
}

export interface SkillGroup {
  id: string;
  title: string;
  description: string;
  skills: SkillItem[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  credentialUrl?: string;
  verified: boolean;
  skillsCovered: string[];
  description: string;
}

export interface ExperienceCommunity {
  id: string;
  organization: string;
  role: string;
  period: string;
  location?: string;
  description: string;
  highlights: string[];
}

export interface EngineeringNote {
  id: string;
  slug: string;
  title: string;
  date: string;
  category: 'Kubernetes' | 'DevOps' | 'Machine Learning' | 'Architecture' | 'Linux';
  readTime: string;
  summary: string;
  content: string[];
  keyTakeaways: string[];
  tags: string[];
}
