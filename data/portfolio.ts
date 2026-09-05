// ============================================================================
// CENTRAL PORTFOLIO DATA
// Edit this file to update almost everything on the site — name, contact
// details, hero copy, the info card on the homepage, and metadata used for
// SEO. Nothing in this file is imported outside of the components that
// render it, so changing a value here updates every place it appears.
// ============================================================================

export const portfolio = {
  // Basic identity
  name: "Prathik",
  shortName: "Prathik", // used in the About page "full name" field
  initials: "P", // shown in the header logo badge
  role: "Full-Stack Developer", // the first word is automatically highlighted in blue on the homepage
  tagline: "Full-Stack Developer & Tech Enthusiast", // used as page subtitle in nav drawer / about

  // Hero introduction (matches Image 2 style)
  greeting: "Hi, I'm",
  introduction:
    "Full-Stack & App Developer passionate about building high-performance applications. DSA enthusiast, consistent LeetCode problem solver (450+ solved), and competitive programming winner turning complex logic into impactful products.",

  // Personal details
  email: "your.email@example.com",
  phone: "+91 XXXXX XXXXX",
  location: "Mangaluru, Karnataka, India",
  dateOfBirth: "October 20, 2003",
  age: "22 Years",
  fullAddress: "Mangaluru, Karnataka, India",

  // Homepage info card (matches Screenshot 2)
  infoCard: {
    education: {
      label: "NMAM",
      value: "Institute of Technology, Nitte",
    },
    experience: {
      label: "MCA",
      value: "CGPA: 9.30",
    },
    location: {
      label: "Location",
      value: "Mangaluru, Karnataka, India",
    },
    availability: {
      label: "Open to Work",
      value: "Internship & Full-time",
    },
  },

  // Files
  resumePdfPath: "/resume/resume.pdf",
  resumePreviewImagePath: "/resume/resume-preview.png",
  profileImagePath: "/images/prathik.jpg",

  // Footer
  footerTagline: "Crafting digital experiences with passion and precision",
  copyrightName: "Prathik",

  // SEO / metadata — edit these for search engines and link previews
  seo: {
    title: "Prathik | Portfolio",
    description:
      "Portfolio of Prathik — Full-Stack Developer building modern, high-performance web and mobile applications.",
    siteUrl: "https://yourdomain.com",
    ogImage: "/images/profile.jpg",
  },
};

export const socialLinks = [
  { name: "GitHub", href: "https://github.com/prathik", icon: "github" },
  { name: "LinkedIn", href: "https://linkedin.com/in/prathik", icon: "linkedin" },
  { name: "Email", href: "mailto:your.email@example.com", icon: "mail" },
  { name: "Phone", href: "tel:+91XXXXXXXXXX", icon: "phone" },
  { name: "LeetCode", href: "https://leetcode.com/u/prathik", icon: "code" },
] as const;

export const navItems = [
  { label: "Home", href: "/", icon: "home" },
  { label: "About", href: "/about", icon: "user" },
  { label: "Skills", href: "/#skills", icon: "code" },
  { label: "Certificates", href: "/#certificates", icon: "award" },
  { label: "Handles", href: "/#handles", icon: "terminal" },
  { label: "Projects", href: "/projects", icon: "rocket" },
  { label: "Resume", href: "/resume", icon: "file-text" },
  { label: "Contact", href: "/contact", icon: "mail" },
] as const;
