export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  thumbnail: string;
  images?: string[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  completedDate: string;
  metrics?: {
    users?: string;
    performance?: string;
    uptime?: string;
  };
}

export interface Skill {
  name: string;
  level: 1 | 2 | 3 | 4 | 5;
  yearsExp?: number;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface WorkHistory {
  id: string;
  company: string;
  position: string;
  period: {
    start: string;
    end: string | 'present';
  };
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
}
