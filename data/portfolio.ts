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

  // Hero introduction
  greeting: "Hi, I'm",
  introduction:
    "Aspiring Application Developer with problem-solving skills and hands-on experience building web, Android, and backend applications. Passionate about creating real-world solutions and continuously growing as a developer.",

  // Personal details
  email: "prathikganiga202@gmail.com",
  phone: "+91 9611914396",
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
      value: "Master of Computer Applications",
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
  resumeFileName: "Prathik-Resume-2026.pdf",
  resumePdfPath: "/resume/Prathik-Resume-2026.pdf",
  resumePreviewImagePath: "/resume/resume-preview.png",
  profileImagePath: "/images/prathik.jpg",

  // Footer
  footerTagline: "Crafting digital experiences with passion and precision",
  copyrightName: "Prathik",

  // SEO / metadata — edit these for search engines and link previews
  seo: {
    title: "Prathik | Portfolio",
    description:
      "Portfolio of Prathik — Aspiring Application Developer building modern web, Android, and backend applications.",
    siteUrl: "https://yourdomain.com",
    ogImage: "/images/profile.jpg",
  },
};

export const socialLinks = [
  { name: "GitHub", href: "https://github.com/prathik0007", icon: "github" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/prathik-b73793351", icon: "linkedin" },
  { name: "Email", href: "mailto:prathikganiga202@gmail.com", icon: "mail" },
  { name: "Phone", href: "tel:+919611914396", icon: "phone" },
  { name: "LeetCode", href: "https://leetcode.com/u/Prathik07/", icon: "code" },
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
