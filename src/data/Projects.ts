import type { Project } from "../types/Project";

export const projects: Project[] = [
  {
    id: 1,
    title: "Portfolio Website",
    category: "Personal Portfolio",
    description: "A modern and responsive personal portfolio designed to showcase my projects, skills and professional experience with smooth animations and a clean user interface.",
    thumbnail: "/images/projects/portfolio.png",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/username/portfolio",
    demoUrl: "https://portfolio.example.com",
    featured: true,
  },
  {
    id: 2,
    title: "LibreMobileOS Website",
    category: "Responsive Landing Page",
    description: "A responsive website developed for LibreMobileOS, focused on presenting the operating system, its main features and project identity through a clean and modern user interface.",
    thumbnail: "/images/projects/libremobileos.png",
    technologies: ["HTML5", "CSS3", "JavaScript", "Vite"],
    githubUrl: "https://github.com/Dorsavali/LibreMobileOS",
    featured: true,
  },
];