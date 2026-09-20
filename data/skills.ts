// ============================================================================
// SKILLS, INTERESTS, AND OPPORTUNITIES DATA
// Sourced directly from Prathik's Resume
// ============================================================================

export interface SkillCategoryGroup {
  category: string;
  skills: string[];
}

// Grouped skills formatted cleanly matching resume
export const resumeSkillGroups: SkillCategoryGroup[] = [
  {
    category: "Programming Languages",
    skills: ["Python", "Java", "C", "JavaScript"],
  },
  {
    category: "Web & Android Technologies",
    skills: ["HTML", "CSS", "React.js", "MERN Stack", "Bootstrap", "Flutter", "React Native", "Next.js"],
  },
  {
    category: "Backend Development",
    skills: ["Node.js", "Express.js", "Flask"],
  },
  {
    category: "Databases",
    skills: ["MongoDB", "MongoDB Atlas", "MySQL", "PostgreSQL"],
  },
  {
    category: "Cloud & Deployment",
    skills: ["Vercel", "Render", "Domain Management", "DNS Configuration"],
  },
  {
    category: "Development Tools",
    skills: ["Git", "GitHub", "VS Code", "Visual Studio"],
  },
  {
    category: "Additional Skills",
    skills: ["Progressive Web Apps (PWA)", "Website SEO Optimization"],
  },
];

export type Skill = {
  id: string;
  name: string;
  percentage: number;
};

export const skills: Skill[] = [
  { id: "frontend", name: "Frontend Development", percentage: 85 },
  { id: "backend", name: "Backend Development", percentage: 80 },
  { id: "mobile", name: "Mobile App Development", percentage: 75 },
];

export type SkillProficiency = "Expert" | "Advanced" | "Proficient" | "Familiar";

export type DetailedSkill = {
  name: string;
  category: "Languages" | "Frontend" | "Backend" | "Database & Cloud" | "Tools & DevOps";
  proficiency: SkillProficiency;
  percentage: number;
  highlight?: boolean;
};

export const categorizedSkills: DetailedSkill[] = [
  { name: "Python", category: "Languages", proficiency: "Advanced", percentage: 90, highlight: true },
  { name: "Java", category: "Languages", proficiency: "Advanced", percentage: 85 },
  { name: "JavaScript", category: "Languages", proficiency: "Advanced", percentage: 88, highlight: true },
  { name: "Dart", category: "Languages", proficiency: "Proficient", percentage: 80 },
  { name: "React.js", category: "Frontend", proficiency: "Advanced", percentage: 92, highlight: true },
  { name: "Next.js", category: "Frontend", proficiency: "Advanced", percentage: 88, highlight: true },
  { name: "HTML5", category: "Frontend", proficiency: "Expert", percentage: 95 },
  { name: "CSS3", category: "Frontend", proficiency: "Expert", percentage: 92 },
  { name: "Tailwind CSS", category: "Frontend", proficiency: "Advanced", percentage: 90 },
  { name: "Flask", category: "Backend", proficiency: "Advanced", percentage: 85, highlight: true },
  { name: "Django", category: "Backend", proficiency: "Proficient", percentage: 80 },
  { name: "Node.js", category: "Backend", proficiency: "Advanced", percentage: 88, highlight: true },
  { name: "Express.js", category: "Backend", proficiency: "Advanced", percentage: 86 },
  { name: "MongoDB", category: "Database & Cloud", proficiency: "Advanced", percentage: 85 },
  { name: "MySQL", category: "Database & Cloud", proficiency: "Advanced", percentage: 85 },
  { name: "PostgreSQL", category: "Database & Cloud", proficiency: "Proficient", percentage: 80 },
  { name: "Firebase", category: "Database & Cloud", proficiency: "Proficient", percentage: 82 },
  { name: "Git", category: "Tools & DevOps", proficiency: "Advanced", percentage: 90, highlight: true },
  { name: "GitHub", category: "Tools & DevOps", proficiency: "Advanced", percentage: 92, highlight: true },
];

export const skillCategories = [
  "All",
  "Languages",
  "Frontend",
  "Backend",
  "Database & Cloud",
  "Tools & DevOps",
] as const;

export type SkillCategory = (typeof skillCategories)[number];

export const interests: string[] = [
  "Web Development",
  "Mobile Applications",
  "Open Source",
  "Tech Innovation",
  "Problem Solving",
  "Continuous Learning",
];

export type Opportunity = {
  id: string;
  title: string;
  description: string;
  tags: string[];
};

export const opportunities: Opportunity[] = [
  {
    id: "opp-frontend",
    title: "Frontend Development",
    description: "Seeking opportunities in React, Next.js, and modern web application development",
    tags: ["React", "Next.js", "Javascript"],
  },
  {
    id: "opp-backend",
    title: "Backend Development",
    description: "Looking for roles in Python, Node.js, Express, databases, and server-side development",
    tags: ["Node.js", "Python", "Flask", "MongoDB"],
  },
  {
    id: "opp-mobile",
    title: "Mobile App Development",
    description: "Interested in Flutter, Dart, and cross-platform mobile development",
    tags: ["Flutter", "Dart", "Firebase"],
  },
];
