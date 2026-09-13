// ============================================================================
// CERTIFICATES DATA
// Powers the Certificates section of the portfolio.
// Add, edit, or remove your professional certifications and achievements here.
// ============================================================================

export type CertificateCategory =
  | "All"
  | "Cloud & DevOps"
  | "Web Development"
  | "AI & Machine Learning"
  | "Workshops & Training";

export type Certificate = {
  id: string;
  title: string;
  issuer: string;
  issuerBadge?: string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  category: "Cloud & DevOps" | "Web Development" | "AI & Machine Learning" | "Workshops & Training";
  skills: string[];
  description: string;
  image: string;
  pdfUrl?: string;
  featured?: boolean;
};

export const certificateCategories: CertificateCategory[] = [
  "All",
  "Cloud & DevOps",
  "Web Development",
  "AI & Machine Learning",
  "Workshops & Training",
];

export const certificates: Certificate[] = [
  {
    id: "oracle-cloud-infrastructure-2025",
    title: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate",
    issuer: "Oracle University",
    issueDate: "May 2026",
    credentialId: "103456572OCI25FNDCFA",
    credentialUrl: "/certificates/oracle-cloud-2025.pdf",
    image: "/certificates/oracle-cloud-2025.png",
    pdfUrl: "/certificates/oracle-cloud-2025.pdf",
    category: "Cloud & DevOps",
    skills: [
      "Oracle Cloud Infrastructure (OCI)",
      "Cloud Architecture",
      "IAM Security",
      "Virtual Cloud Networks (VCN)",
      "Compute & Storage",
      "Cloud Governance",
    ],
    description:
      "Recognized by Oracle Corporation as an Oracle Certified Foundations Associate, validating foundational expertise in core OCI cloud architecture, security, identity management, and computing infrastructure.",
    featured: true,
  },
  {
    id: "accelerating-deep-learning-with-gpus",
    title: "Accelerating Deep Learning with GPUs",
    issuer: "Cognitive Class (IBM Developer Skills Network)",
    issueDate: "July 2025",
    credentialId: "78b713b4d6b9452f93e13d6428d822a9",
    credentialUrl: "https://courses.cognitiveclass.ai/certificates/78b713b4d6b9452f93e13d6428d822a9",
    image: "/certificates/deep-learning-gpus.png",
    pdfUrl: "/certificates/deep-learning-gpus.pdf",
    category: "AI & Machine Learning",
    skills: [
      "Deep Learning",
      "GPU Acceleration",
      "Neural Networks",
      "IBM Developer Skills",
      "Hardware Acceleration",
      "Model Optimization",
    ],
    description:
      "Course (ML0122ENv3) powered by IBM Developer Skills Network on cognitiveclass.ai, validating deep learning architectures and GPU acceleration techniques for high-performance training.",
    featured: true,
  },
  {
    id: "learning-full-stack-development-infosys",
    title: "Learning Full Stack Development",
    issuer: "Infosys Springboard",
    issueDate: "July 2025",
    credentialUrl: "https://verify.onwingspan.com",
    image: "/certificates/infosys-fullstack.jpg",
    category: "Web Development",
    skills: [
      "Full Stack Development",
      "Frontend Engineering",
      "Backend Architecture",
      "Database Integration",
      "RESTful APIs",
    ],
    description:
      "Awarded by Infosys Limited / Infosys Springboard for successfully completing comprehensive full-stack development coursework, covering end-to-end web engineering principles.",
    featured: true,
  },
  {
    id: "employability-skill-training-programme",
    title: "Employability Skill Training Programme",
    issuer: "Mahindra Pride Classroom & Naandi Foundation",
    issueDate: "March 2026",
    credentialUrl: "/certificates/mahindra-pride.jpg",
    image: "/certificates/mahindra-pride.jpg",
    category: "Workshops & Training",
    skills: [
      "Employability Skills",
      "Professional Communication",
      "Problem Solving",
      "Teamwork & Leadership",
      "Workplace Readiness",
    ],
    description:
      "Awarded on successful completion of the Employability Skill Training Programme conducted by Mahindra Pride Classroom and Naandi Foundation at NMAM Institute of Technology.",
    featured: false,
  },
  {
    id: "research-methodology-and-publication",
    title: "Research Methodology and Publication",
    issuer: "NMAM Institute of Technology, Nitte (DU)",
    issueDate: "November 2025",
    credentialUrl: "/certificates/research-methodology.pdf",
    image: "/certificates/research-methodology.png",
    pdfUrl: "/certificates/research-methodology.pdf",
    category: "Workshops & Training",
    skills: [
      "Research Methodology",
      "Scientific Writing",
      "Academic Publication",
      "Literature Review",
      "Computer Applications",
    ],
    description:
      "Two-day academic workshop organized by the Department of Master of Computer Applications (MCA), NMAM Institute of Technology, Nitte (Deemed to be University), focusing on research methods and publication standards.",
    featured: false,
  },
];
