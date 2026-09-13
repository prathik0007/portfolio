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
    id: "estate-predict",
    number: "01",
    title: "EstatePredict | Online Property Rental & AI Price Prediction",
    description:
      "A multimodal AI-powered property rental and valuation platform. Features calibrated fair market price estimation with 95% conformal prediction intervals, SHAP feature explainability, verified rental listings, and interactive geospatial mapping.",
    images: [
      "/images/estatepredict/estatepredict-1.png",
      "/images/estatepredict/estatepredict-2.png",
      "/images/estatepredict/estatepredict-3.png",
      "/images/estatepredict/estatepredict-4.png",
      "/images/estatepredict/estatepredict-5.png",
    ],
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Python for ML",
      "LightGBM",
      "SHAP",
      "Vercel",
    ],
    liveDemoUrl: "https://rental-price-prediction.vercel.app/",
    sourceCodeUrl: "https://github.com/prathik0007/EstatePredict",
  },
  {
    id: "github-repository-explainer",
    number: "02",
    title: "GitHub Repository Explainer - AI Developer Tool",
    description:
      "An AI-powered developer tool that analyzes and inspects public GitHub codebases in seconds. Generates comprehensive technical overviews, component breakdowns, file-by-file explanations, and onboarding roadmaps for engineers.",
    images: [
      "/images/githubrepo/githubrepo-1.png",
      "/images/githubrepo/githubrepo-2.png",
      "/images/githubrepo/githubrepo-3.png",
      "/images/githubrepo/githubrepo-4.png",
      "/images/githubrepo/githubrepo-5.png",
    ],
    technologies: [
      "Next.js (Frontend & Backend)",
      "PostgreSQL",
      "Neon DB",
      "AI APIs",
      "REST APIs",
      "Tailwind CSS",
      "Vercel",
    ],
    liveDemoUrl: "https://githubrepo-ten.vercel.app/",
    sourceCodeUrl: "https://github.com/prathik0007/githubrepo",
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
