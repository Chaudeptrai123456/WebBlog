export interface Project {
  id: string;
  title: string;
  short: string;
  description: string;
  image: string;
  tech: string[];
  github?: string;
  demo?: string;
}

export const projectList: Project[] = [
  {
    id: "proj-1",
    title: "IAM Authentication System",
    short: "JWT & OAuth2 authentication system",
    description:
      "Built an Identity & Access Management (IAM) system supporting JWT-based authentication and OAuth2 login (Google, Facebook). Implemented account lockout to prevent brute-force attacks, email workflows for verification and password recovery, and Role-Based Access Control (RBAC) to manage user permissions across the system. Focused on security, scalability, and clean backend architecture.",
    image:
      "https://images.unsplash.com/photo-1611605698335-8b1569810432?q=80&w=1000",
    tech: ["Node.js", "Redis", "MongoDB", "Cloudflare", "Docker"],
    github: "https://github.com/your-username/iam-system",
    demo: "#",
  },
  {
    id: "proj-2",
    title: "User Service & Database Optimization",
    short: "REST API & database performance",
    description:
      "Designed and optimized database schemas, queries, and indexes to improve performance and scalability. Developed RESTful APIs for user services such as authentication and profile management. Deployed and demonstrated the system using Docker and Cloudflare, gaining hands-on experience with production-like environments and system optimization.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1000",
    tech: ["Node.js", "Redis", "MongoDB", "Cloudflare", "Docker"],
    github: "https://github.com/your-username/user-service",
  },
  {
    id: "proj-3",
    title: "Galaxy Portfolio UI",
    short: "Interactive 3D portfolio experience",
    description:
      "A modern portfolio website featuring galaxy-inspired design, parallax scrolling, and smooth animations using Framer Motion. Built with Next.js and Tailwind CSS to deliver a responsive and immersive user experience. Focused on UI/UX, performance, and interactive storytelling.",
    image:
      "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1000",
    tech: ["Next.js", "Framer Motion", "Tailwind CSS"],
    github: "https://github.com/your-username/portfolio",
    demo: "#",
  },
];
