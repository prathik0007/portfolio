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
    category: "Frontend",
    skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Next.js", "Tailwind CSS"],
  },
  {
    category: "Backend",
    skills: ["Python", "Flask", "Django", "Node.js", "Express.js"],
  },
  {
    category: "Database",
    skills: ["MongoDB", "MySQL", "PostgreSQL"],
  },
  {
    category: "Mobile",
    skills: ["Flutter", "Dart", "Firebase"],
  },
  {
    category: "Languages",
    skills: ["Python", "Java", "JavaScript", "Dart"],
  },
  {
    category: "Tools",
    skills: ["Git", "GitHub", "Gemini API", "Power BI"],
  },
  {
    category: "Others",
    skills: ["Problem Solving", "100+ LeetCode Solved", "Machine Learning (AI)"],
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
