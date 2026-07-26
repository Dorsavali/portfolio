export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  thumbnail: string;
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
  featured?: boolean;
}