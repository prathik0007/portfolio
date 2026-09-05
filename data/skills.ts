// ============================================================================
// SKILLS, INTERESTS, AND OPPORTUNITIES DATA
// Powers the "Technical Skills", "Interests & Passions", and
// "Open for Opportunities" sections on the About page.
// ============================================================================

export type Skill = {
  id: string;
  name: string;
  percentage: number; // 0 - 100
};

export const skills: Skill[] = [
  { id: "frontend", name: "Frontend Development", percentage: 85 },
  { id: "backend", name: "Backend Development", percentage: 80 },
  { id: "mobile", name: "Mobile App Development", percentage: 75 },
];

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
    description: "Seeking opportunities in React, Next.js, and modern frontend technologies",
    tags: ["React", "Next.js", "JavaScript"],
  },
  {
    id: "opp-backend",
    title: "Backend Development",
    description: "Looking for roles in Node.js, databases, and server-side development",
    tags: ["Node.js", "MongoDB", "Express"],
  },
  {
    id: "opp-mobile",
    title: "Mobile App Development",
    description: "Interested in React Native and cross-platform mobile development",
    tags: ["React Native", "Flutter", "Mobile UI"],
  },
];
