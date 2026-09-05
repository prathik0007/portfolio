// ============================================================================
// PROJECTS DATA
// Add, remove, or edit projects here. The Projects page is fully data-driven
// off this file — no component changes are needed to update your work.
//
// `images` accepts one or more image paths. If you provide more than one,
// the project card automatically renders an image carousel.
// ============================================================================

export type Project = {
  id: string;
  number: string; // e.g. "01"
  title: string;
  description: string;
  images: string[];
  technologies: string[];
  liveDemoUrl?: string;
  sourceCodeUrl?: string;
};

export const projects: Project[] = [
  {
    id: "project-one",
    number: "01",
    title: "Project Name One",
    description:
      "A short, clear description of this project goes here. Explain the problem it solves, who it's for, and what makes it interesting.",
    images: ["/images/project-1.jpg"],
    technologies: ["Next.js", "React", "Node.js", "MongoDB"],
    liveDemoUrl: "https://example.com",
    sourceCodeUrl: "https://github.com/yourusername/project-one",
  },
  {
    id: "project-two",
    number: "02",
    title: "Project Name Two",
    description:
      "A short, clear description of this project goes here. Explain the problem it solves, who it's for, and what makes it interesting.",
    images: ["/images/project-2.jpg"],
    technologies: ["Next.js", "Node.js", "Cloudinary", "MongoDB"],
    liveDemoUrl: "https://example.com",
    sourceCodeUrl: "https://github.com/yourusername/project-two",
  },
  {
    id: "project-three",
    number: "03",
    title: "Project Name Three",
    description:
      "A short, clear description of this project goes here. Explain the problem it solves, who it's for, and what makes it interesting.",
    images: ["/images/project-3.jpg"],
    technologies: ["React Native", "Flutter", "Firebase"],
    liveDemoUrl: "https://example.com",
    sourceCodeUrl: "https://github.com/yourusername/project-three",
  },
  {
    id: "project-four",
    number: "04",
    title: "Project Name Four",
    description:
      "A short, clear description of this project goes here. Explain the problem it solves, who it's for, and what makes it interesting.",
    images: ["/images/project-4.jpg"],
    technologies: ["Spring Boot", "Java", "PostgreSQL"],
    liveDemoUrl: "https://example.com",
    sourceCodeUrl: "https://github.com/yourusername/project-four",
  },
];
