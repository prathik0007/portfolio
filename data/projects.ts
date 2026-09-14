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
      "Vercel",
    ],
    liveDemoUrl: "https://githubrepo-ten.vercel.app/",
    sourceCodeUrl: "https://github.com/prathik0007/githubrepo",
  },
  {
    id: "leaflens-ai-farm-detector",
    number: "03",
    title: "LeafLens - AI Farm Detector",
    description:
      "An intelligent agricultural and plant health diagnostic platform designed for farmers. Leverages computer vision and multimodal AI to identify plant species from uploaded photos, diagnose leaf diseases with treatment plans, provide agronomic guidance (soil, water, sunlight, and fertilizer), and support regional Indian languages (English, Hindi, Kannada).",
    images: [
      "/images/leaflens/leaflens-1.png",
      "/images/leaflens/leaflens-2.png",
      "/images/leaflens/leaflens-3.png",
      "/images/leaflens/leaflens-4.png",
      "/images/leaflens/leaflens-5.png",
    ],
    technologies: [
      "HTML",
      "Tailwind CSS",
      "Python",
      "Flask",
      "MongoDB",
      "Multimodal AI",
      "Vercel",
    ],
    liveDemoUrl: "https://leaf-lens-git-main-github-code-explorer.vercel.app/",
    sourceCodeUrl: "https://github.com/prathik0007/LeafLens",
  },
  {
    id: "novamart-ecommerce",
    number: "04",
    title: "NovaMart — Premium Tech & Lifestyle E-Commerce",
    description:
      "A full-stack modern e-commerce web application curated for flagship electronics, studio audio, and smart lifestyle products. Features intuitive category filtering, live product search, 1-click demo logins for admin and customer roles, shopping cart functionality, user profile management, and a robust RESTful API backend.",
    images: [
      "/images/novamart/novamart-1.png",
      "/images/novamart/novamart-2.png",
      "/images/novamart/novamart-3.png",
      "/images/novamart/novamart-4.png",
      "/images/novamart/novamart-5.png",
    ],
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "Vercel",
    ],
    liveDemoUrl: "https://novamart-ecommerce-sigma.vercel.app/",
    sourceCodeUrl: "https://github.com/prathik0007/novamart-ecommerce",
  },
];
