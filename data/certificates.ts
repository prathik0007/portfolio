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
  | "Data & Analytics"
  | "Internships & Experience"
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
  category: CertificateCategory;
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
  "Data & Analytics",
  "Internships & Experience",
  "Workshops & Training",
];

export const certificates: Certificate[] = [
  {
    id: "codsoft-web-development-internship",
    title: "Web Development Internship",
    issuer: "CodSoft",
    issueDate: "September 2026",
    credentialId: "ace1bd3",
    credentialUrl: "https://www.codsoft.in",
    image: "/certificates/codsoft.png",
    pdfUrl: "/certificates/codsoft.pdf",
    category: "Internships & Experience",
    skills: [
      "Web Development",
      "Frontend Development",
      "HTML5 & CSS3",
      "JavaScript",
      "Responsive Design",
      "Virtual Internship",
    ],
    description:
      "Successfully completed a 4-week virtual internship program in Web Development from August 15, 2026 to September 15, 2026 at CodSoft, building web projects and demonstrating practical software engineering skills.",
    featured: true,
  },
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
    id: "mca-career-accelerator-programme",
    title: "MCA Career Accelerator: Placement & Interview Readiness",
    issuer: "NMAM Institute of Technology, Nitte (DU)",
    issueDate: "September 2026",
    credentialUrl: "/certificates/mca-career-accelerator.pdf",
    image: "/certificates/mca-career-accelerator.png",
    pdfUrl: "/certificates/mca-career-accelerator.pdf",
    category: "Workshops & Training",
    skills: [
      "Placement Readiness",
      "Interview Preparation",
      "Career Development",
      "Technical Aptitude",
      "Soft Skills",
      "Industry Readiness",
    ],
    description:
      "Certificate of Participation in a four-day intensive workshop on 'MCA Career Accelerator: 4 Day Intensive Placement and Interview Readiness Programme' organized by the Department of MCA, NMAM Institute of Technology, Nitte (DU) in association with WENAMITAA.",
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
    id: "udemy-power-bi-business-intelligence",
    title: "Microsoft Power BI Desktop for Business Intelligence",
    issuer: "Udemy (Maven Analytics)",
    issueDate: "August 2025",
    credentialId: "UC-24a1caeb-1690-4fac-bb70-ee1fc1472932",
    credentialUrl: "https://ude.my/UC-24a1caeb-1690-4fac-bb70-ee1fc1472932",
    image: "/certificates/udemy-power-bi.jpg",
    category: "Data & Analytics",
    skills: [
      "Power BI Desktop",
      "Business Intelligence",
      "DAX Formulas",
      "Data Modeling",
      "Dashboard Design",
      "Data Visualization",
    ],
    description:
      "Comprehensive 17-hour course completion certificate taught by Maven Analytics, certifying mastery in Power BI data transformations, tabular data modeling, DAX measures, and interactive reporting.",
    featured: true,
  },
  {
    id: "thaniya-technologies-internship",
    title: "Final Year Project Work / Internship – BOTANEO",
    issuer: "Thaniya Technologies (MSME Govt. of India)",
    issueDate: "May 2025",
    credentialId: "U05HS22S0044",
    credentialUrl: "/certificates/thaniya-technologies-internship.jpg",
    image: "/certificates/thaniya-technologies-internship.jpg",
    category: "Internships & Experience",
    skills: [
      "Project Work (BOTANEO)",
      "Full Stack Engineering",
      "Logical & Analytical Skills",
      "Software Design",
      "Industry Internship",
    ],
    description:
      "Certificate of Completion for successfully executing final-year project work and internship on project 'BOTANEO' from February 10, 2025 to May 10, 2025 at Thaniya Technologies, Mangalore.",
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
