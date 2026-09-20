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
  grade?: string;
};

export const education: EducationEntry[] = [
  {
    id: "edu-1",
    degree: "Bachelor of Computer Applications",
    institution: "Sacred Heart College, Madanthyar",
    university: "Mangalore University",
    years: "2022 - 2025",
  },
  {
    id: "edu-2",
    degree: "Master of Computer Applications",
    institution: "N.M.A.M Institute of Technology, Nitte",
    university: "Nitte University",
    years: "2025 - Present",
  },
];
