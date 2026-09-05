// ============================================================================
// CENTRAL PORTFOLIO DATA
// Edit this file to update almost everything on the site — name, contact
// details, hero copy, the info card on the homepage, and metadata used for
// SEO. Nothing in this file is imported outside of the components that
// render it, so changing a value here updates every place it appears.
// ============================================================================

export const portfolio = {
  // Basic identity
  name: "Your Name",
  shortName: "Your Name", // used in the About page "full name" field
  initials: "Y", // shown in the header logo badge
  role: "Your Role", // the first word is automatically highlighted in red on the homepage
  tagline: "Full-Stack Developer & Tech Enthusiast", // used as page subtitle in nav drawer / about

  // Hero introduction
  greeting: "Hi, I'm",
  introduction:
    "Your professional introduction goes here. Replace this text with your own description of what you do, what you're passionate about, and what makes you stand out.",

  // Personal details
  email: "your.email@example.com",
  phone: "+91 XXXXX XXXXX",
  location: "Your City, State, India",
  dateOfBirth: "Your Date of Birth",
  age: "XX Years",
  fullAddress: "Your Address, City, State, India",

  // Homepage info card (top education + experience + location + availability)
  infoCard: {
    education: {
      label: "Education",
      value: "Degree / Institution",
    },
    experience: {
      label: "Experience",
      value: "Your experience",
    },
    location: {
      label: "Location",
      value: "Your location",
    },
    availability: {
      label: "Open to Work",
      value: "Internship / Full-time",
    },
  },

  // Files
  resumePdfPath: "/resume/resume.pdf",
  resumePreviewImagePath: "/resume/resume-preview.png",
  profileImagePath: "/images/profile.jpg",

  // Footer
  footerTagline: "Crafting digital experiences with passion and precision",
  copyrightName: "Your Name",

  // SEO / metadata — edit these for search engines and link previews
  seo: {
    title: "Your Name | Portfolio",
    description:
      "Portfolio of Your Name — Full-Stack Developer building modern, high-performance web and mobile applications.",
    siteUrl: "https://yourdomain.com",
    ogImage: "/images/profile.jpg",
  },
};

export const socialLinks = [
  { name: "GitHub", href: "https://github.com/yourusername", icon: "github" },
  { name: "LinkedIn", href: "https://linkedin.com/in/yourusername", icon: "linkedin" },
  { name: "Email", href: "mailto:your.email@example.com", icon: "mail" },
  { name: "Phone", href: "tel:+91XXXXXXXXXX", icon: "phone" },
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
