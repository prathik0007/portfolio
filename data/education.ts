// ============================================================================
// EDUCATION DATA
// Powers the timeline on the About page.
// ============================================================================

export type EducationEntry = {
  id: string;
  degree: string;
  institution: string;
  university: string;
  years: string;
  grade: string; // e.g. "CGPA: 8.67/10"
};

export const education: EducationEntry[] = [
  {
    id: "edu-1",
    degree: "Bachelor of Computer Applications",
    institution: "Sacred Heart College, Madanthyar",
    university: "Mangalore University",
    years: "2022 - 2025",
    grade: "CGPA: 8.67/10",
  },
  {
    id: "edu-2",
    degree: "Master of Computer Applications",
    institution: "N.M.A.M Institute of Technology, Nitte",
    university: "Nitte University",
    years: "2025 - Present",
    grade: "CGPA: 9.30/10",
  },
];
