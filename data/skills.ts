// ============================================================================
// SKILLS, INTERESTS, AND OPPORTUNITIES DATA
// Powers the Skills section, Interests, and Opportunities.
// ============================================================================

export type Skill = {
  id: string;
  name: string;
  percentage: number; // 0 - 100
};

// Original overview skills (matches Screenshot 3)
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
  // Programming Languages
  { name: "JavaScript (ES6+)", category: "Languages", proficiency: "Advanced", percentage: 92, highlight: true },
  { name: "TypeScript", category: "Languages", proficiency: "Advanced", percentage: 88, highlight: true },
  { name: "Python", category: "Languages", proficiency: "Advanced", percentage: 85 },
  { name: "Java", category: "Languages", proficiency: "Proficient", percentage: 78 },
  { name: "C / C++", category: "Languages", proficiency: "Proficient", percentage: 75 },
  { name: "SQL", category: "Languages", proficiency: "Advanced", percentage: 84 },

  // Frontend
  { name: "React.js", category: "Frontend", proficiency: "Advanced", percentage: 92, highlight: true },
  { name: "Next.js (App Router)", category: "Frontend", proficiency: "Advanced", percentage: 90, highlight: true },
  { name: "Tailwind CSS", category: "Frontend", proficiency: "Advanced", percentage: 94, highlight: true },
  { name: "HTML5 & Modern CSS", category: "Frontend", proficiency: "Expert", percentage: 95 },
  { name: "Redux / Zustand", category: "Frontend", proficiency: "Proficient", percentage: 82 },
  { name: "Responsive & Mobile UI", category: "Frontend", proficiency: "Advanced", percentage: 90 },

  // Backend
  { name: "Node.js", category: "Backend", proficiency: "Advanced", percentage: 88, highlight: true },
  { name: "Express.js", category: "Backend", proficiency: "Advanced", percentage: 86 },
  { name: "RESTful API Architecture", category: "Backend", proficiency: "Advanced", percentage: 90, highlight: true },
  { name: "FastAPI / Django", category: "Backend", proficiency: "Proficient", percentage: 78 },
  { name: "Authentication (JWT, OAuth)", category: "Backend", proficiency: "Advanced", percentage: 85 },
  { name: "GraphQL", category: "Backend", proficiency: "Proficient", percentage: 74 },

  // Database & Cloud
  { name: "PostgreSQL", category: "Database & Cloud", proficiency: "Advanced", percentage: 85, highlight: true },
  { name: "MongoDB", category: "Database & Cloud", proficiency: "Advanced", percentage: 84 },
  { name: "MySQL", category: "Database & Cloud", proficiency: "Proficient", percentage: 82 },
  { name: "Redis", category: "Database & Cloud", proficiency: "Proficient", percentage: 76 },
  { name: "AWS (S3, EC2, Lambda)", category: "Database & Cloud", proficiency: "Proficient", percentage: 75 },
  { name: "Supabase & Firebase", category: "Database & Cloud", proficiency: "Advanced", percentage: 86 },

  // Tools & DevOps
  { name: "Git & GitHub", category: "Tools & DevOps", proficiency: "Advanced", percentage: 92, highlight: true },
  { name: "Docker", category: "Tools & DevOps", proficiency: "Proficient", percentage: 76 },
  { name: "Postman", category: "Tools & DevOps", proficiency: "Advanced", percentage: 88 },
  { name: "Linux / Bash", category: "Tools & DevOps", proficiency: "Proficient", percentage: 80 },
  { name: "Vercel & Netlify CI/CD", category: "Tools & DevOps", proficiency: "Advanced", percentage: 90 },
  { name: "VS Code & Debugging", category: "Tools & DevOps", proficiency: "Expert", percentage: 95 },
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
    description: "Seeking internship opportunities in React, Next.js, and modern frontend technologies",
    tags: ["React", "Next.js", "Javascript"],
  },
  {
    id: "opp-backend",
    title: "Backend Development",
    description: "Looking for internship roles in Node.js, databases, and server-side development",
    tags: ["Node.js", "MongoDB", "Express"],
  },
  {
    id: "opp-mobile",
    title: "Mobile App Development",
    description: "Interested in React Native and cross-platform mobile development internships",
    tags: ["React Native", "Flutter", "Mobile UI"],
  },
];
