import type { Project } from "../types/Project";

export const projects: Project[] = [
  {
    id: 1,
    title: "Portfolio Website",
    category: "Personal Portfolio",
    description:
      "A modern and responsive personal portfolio designed to showcase my projects, skills and professional experience with smooth animations and a clean user interface.",
    thumbnail: "/images/projects/portfolio.webp",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/Dorsavali/portfolio",
    featured: true,
  },
  {
    id: 2,
    title: "LibreMobileOS Website",
    category: "Responsive Landing Page",
    description:
      "A responsive website developed for LibreMobileOS, focused on presenting the operating system, its main features and project identity through a clean and modern user interface.",
    thumbnail: "/images/projects/libremobileos.webp",
    technologies: ["HTML5", "CSS3", "JavaScript", "Vite"],
    githubUrl: "https://github.com/Dorsavali/LibreMobileOS",
    demoUrl: "https://libremobileos.com",
    featured: true,
  },
  {
    id: 3,
    title: "Digikala Clone",
    category: "Responsive E-commerce Website",
    description:
      "A responsive e-commerce website inspired by Digikala, developed with React and Redux. The project includes product categories, sliders, suggested products, trending sections, responsive navigation and desktop and mobile mega menus.",
    thumbnail: "/images/projects/digikala.webp",
    technologies: ["React", "Redux", "Tailwind CSS", "JavaScript", "Vite"],
    githubUrl: "https://github.com/Dorsavali/Digikala",
    demoUrl: "https://digikala.dorsavalli.com/",
    featured: true,
  },
  {
    id: 4,
    title: "AI Stack",
    category: "AI Tools Landing Page",
    description:
      "A modern and responsive landing page designed to showcase an AI platform and its services. The project focuses on presenting AI-powered tools, features and solutions through a clean interface, structured sections and smooth responsive layouts.",
    thumbnail: "/images/projects/aistack.webp",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    githubUrl: "https://github.com/Dorsavali/AIStack",
    demoUrl: "https://aistack.dorsavalli.com/",
    featured: true,
  },{
  id: 5,
  title: "OEM Admin Dashboard",
  category: "Dashboard Redesign",
  description:
    "A complete redesign of three administrative dashboards for an enterprise management platform. The project focused on improving user experience, modernizing the interface, creating a consistent design system, and delivering fully responsive layouts while preserving the existing backend functionality.",
  thumbnail: "/images/projects/dashboard.webp",
  technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vite"],
  githubUrl: "https://github.com/unifiedattestation/Backend",
  demoUrl: "https://a.uattest.net",
  featured: true,
}
];
