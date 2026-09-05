// ============================================================================
// CERTIFICATES DATA
// Powers the Certificates section of the portfolio.
// Add, edit, or remove your professional certifications and achievements here.
// ============================================================================

export type CertificateCategory =
  | "All"
  | "Cloud & DevOps"
  | "Web Development"
  | "Problem Solving & CS"
  | "Database & Backend";

export type Certificate = {
  id: string;
  title: string;
  issuer: string;
  issuerBadge?: string; // Optional logo/badge identifier or path
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  category: "Cloud & DevOps" | "Web Development" | "Problem Solving & CS" | "Database & Backend";
  skills: string[];
  description: string;
  featured?: boolean;
};

export const certificateCategories: CertificateCategory[] = [
  "All",
  "Cloud & DevOps",
  "Web Development",
  "Problem Solving & CS",
  "Database & Backend",
];

export const certificates: Certificate[] = [
  {
    id: "aws-certified-solutions-architect",
    title: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services (AWS)",
    issueDate: "2024",
    expiryDate: "2027",
    credentialId: "AWS-SAA-84920194",
    credentialUrl: "https://aws.amazon.com/verification",
    category: "Cloud & DevOps",
    skills: ["AWS Cloud", "EC2 & S3", "IAM Security", "VPC & Networking", "High Availability"],
    description:
      "Validates expertise in designing highly available, cost-efficient, fault-tolerant, and scalable distributed systems on AWS.",
    featured: true,
  },
  {
    id: "meta-frontend-developer",
    title: "Meta Front-End Developer Professional Certificate",
    issuer: "Meta",
    issueDate: "2024",
    expiryDate: "Does not expire",
    credentialId: "META-FED-5739281",
    credentialUrl: "https://www.coursera.org/verify/professional-cert/meta-frontend",
    category: "Web Development",
    skills: ["React.js", "JavaScript (ES6+)", "UI/UX Principles", "Version Control", "Responsive Design"],
    description:
      "Demonstrated proficiency in building interactive web apps using modern React, state management, component architecture, and responsive UI design.",
    featured: true,
  },
  {
    id: "hackerrank-problem-solving-adv",
    title: "Problem Solving (Advanced) Certificate",
    issuer: "HackerRank",
    issueDate: "2024",
    expiryDate: "Does not expire",
    credentialId: "HR-PS-ADV-293810",
    credentialUrl: "https://www.hackerrank.com/certificates",
    category: "Problem Solving & CS",
    skills: ["Data Structures", "Algorithms", "Dynamic Programming", "Graph Theory", "Optimization"],
    description:
      "Demonstrated advanced problem-solving capabilities in complex data structures, graph traversals, and dynamic programming.",
    featured: true,
  },
  {
    id: "google-cloud-digital-leader",
    title: "Google Cloud Associate Cloud Engineer",
    issuer: "Google Cloud",
    issueDate: "2023",
    expiryDate: "2026",
    credentialId: "GCP-ACE-1049284",
    credentialUrl: "https://cloud.google.com/certification",
    category: "Cloud & DevOps",
    skills: ["GCP", "Kubernetes (GKE)", "Compute Engine", "Cloud Storage", "Cloud IAM"],
    description:
      "Demonstrated ability to deploy applications, monitor operations, and manage enterprise solutions on Google Cloud Platform.",
    featured: false,
  },
  {
    id: "mongodb-certified-developer",
    title: "MongoDB Certified Node.js Developer",
    issuer: "MongoDB University",
    issueDate: "2023",
    expiryDate: "Does not expire",
    credentialId: "MDB-DEV-8823901",
    credentialUrl: "https://university.mongodb.com",
    category: "Database & Backend",
    skills: ["MongoDB", "Mongoose", "Aggregation Pipeline", "Indexing", "Database Modeling"],
    description:
      "Validated proficiency in building scalable backend services, schema design, aggregation framework, and document database performance tuning.",
    featured: false,
  },
  {
    id: "postman-api-expert",
    title: "Postman API Fundamentals Student Expert",
    issuer: "Postman",
    issueDate: "2023",
    expiryDate: "Does not expire",
    credentialId: "POSTMAN-ST-EXP-3921",
    credentialUrl: "https://badgr.com/public/badges",
    category: "Web Development",
    skills: ["REST APIs", "API Testing", "Postman Collections", "Automation", "CI/CD"],
    description:
      "Certified mastery in API design, automated test suites, documentation, and mock servers using Postman.",
    featured: false,
  },
];
