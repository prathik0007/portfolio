// ============================================================================
// EDUCATION DATA
// Powers the timeline on the About page. Add or remove entries freely —
// the timeline layout adapts automatically.
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
    degree: "Your Degree",
    institution: "Your Institution",
    university: "Your University",
    years: "20XX - 20XX",
    grade: "CGPA: X.XX/10",
  },
  {
    id: "edu-2",
    degree: "Your Degree",
    institution: "Your Institution",
    university: "Your University",
    years: "20XX - Present",
    grade: "CGPA: X.XX/10",
  },
];
