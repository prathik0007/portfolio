// ============================================================================
// CODING & SOCIAL HANDLES DATA
// Showcase your coding platform profiles (LeetCode, HackerRank, CodeChef,
// Codeforces, GFG, GitHub) and professional networks.
// ============================================================================

export type HandleCategory =
  | "All"
  | "Coding & Problem Solving"
  | "Developer & Open Source"
  | "Professional & Social";

export type ProfileHandle = {
  id: string;
  platform: string;
  username: string;
  profileUrl: string;
  category: "Coding & Problem Solving" | "Developer & Open Source" | "Professional & Social";
  badgeText?: string;
  stats?: { label: string; value: string }[];
  description: string;
  brandColor: string; // Hex color for brand accent
  icon: "leetcode" | "github" | "hackerrank" | "codechef" | "codeforces" | "geeksforgeeks" | "linkedin" | "twitter" | "kaggle";
  featured?: boolean;
};

export const handleCategories: HandleCategory[] = [
  "All",
  "Coding & Problem Solving",
  "Developer & Open Source",
  "Professional & Social",
];

export const connectHandles = [
  {
    id: "github",
    platform: "GitHub",
    subtitle: "Follow me on GitHub",
    url: "https://github.com/prathik0007",
    icon: "github",
  },
  {
    id: "linkedin",
    platform: "LinkedIn",
    subtitle: "Follow me on LinkedIn",
    url: "https://www.linkedin.com/in/prathik-b73793351",
    icon: "linkedin",
  },
  {
    id: "whatsapp",
    platform: "Whatsapp",
    subtitle: "Follow me on Whatsapp",
    url: "https://wa.me/919611914396",
    icon: "whatsapp",
  },
  {
    id: "email",
    platform: "Email",
    subtitle: "Follow me on Email",
    url: "mailto:prathikganiga202@gmail.com",
    icon: "email",
  },
  {
    id: "instagram",
    platform: "Instagram",
    subtitle: "Follow me on Instagram",
    url: "https://www.instagram.com/prathik._07/",
    icon: "instagram",
  },
  {
    id: "leetcode",
    platform: "LeetCode",
    subtitle: "Follow me on LeetCode",
    url: "https://leetcode.com/u/Prathik07/",
    icon: "leetcode",
  },
];

export const profileHandles: ProfileHandle[] = [
  {
    id: "leetcode",
    platform: "LeetCode",
    username: "Prathik07",
    profileUrl: "https://leetcode.com/u/Prathik07/",
    category: "Coding & Problem Solving",
    badgeText: "100+ Solved",
    stats: [
      { label: "Problems Solved", value: "100+" },
      { label: "DSA", value: "Active" },
      { label: "Consistency", value: "Daily" },
    ],
    description: "Active problem solver focusing on Data Structures, Algorithms, and clean optimal solutions.",
    brandColor: "#FFA116",
    icon: "leetcode",
    featured: true,
  },
  {
    id: "github",
    platform: "GitHub",
    username: "prathik0007",
    profileUrl: "https://github.com/prathik0007",
    category: "Developer & Open Source",
    badgeText: "Active Developer",
    stats: [
      { label: "Projects", value: "Multiple" },
      { label: "Repositories", value: "Public" },
      { label: "Tech Stack", value: "Full-Stack" },
    ],
    description: "Personal projects, full-stack web applications, ML tools, and Android applications.",
    brandColor: "#24292E",
    icon: "github",
    featured: true,
  },
  {
    id: "hackerrank",
    platform: "HackerRank",
    username: "prathik_dev",
    profileUrl: "https://www.hackerrank.com/prathik_dev",
    category: "Coding & Problem Solving",
    badgeText: "6★ Problem Solving",
    stats: [
      { label: "Problem Solving", value: "6 Stars" },
      { label: "Python & Java", value: "5 Stars" },
      { label: "Gold Badges", value: "4" },
    ],
    description: "Specialized in Algorithmic Problem Solving, SQL proficiency, and core computer science fundamentals.",
    brandColor: "#00EA64",
    icon: "hackerrank",
    featured: true,
  },
  {
    id: "codeforces",
    platform: "Codeforces",
    username: "prathik_cf",
    profileUrl: "https://codeforces.com/profile/prathik_cf",
    category: "Coding & Problem Solving",
    badgeText: "Pupil / Specialist",
    stats: [
      { label: "Max Rating", value: "1,420+" },
      { label: "Contests", value: "25+" },
      { label: "Division", value: "Div 2 & 3" },
    ],
    description: "Participating in timed competitive programming rounds to improve speed and edge-case handling.",
    brandColor: "#1F8ACB",
    icon: "codeforces",
    featured: false,
  },
  {
    id: "codechef",
    platform: "CodeChef",
    username: "prathik_chef",
    profileUrl: "https://www.codechef.com/users/prathik_chef",
    category: "Coding & Problem Solving",
    badgeText: "3★ Coder",
    stats: [
      { label: "Current Rating", value: "1,650+" },
      { label: "Global Rank", value: "Top 10%" },
      { label: "Stars", value: "3 Stars" },
    ],
    description: "Regular contestant in Starters and Cook-Offs solving competitive programming challenges.",
    brandColor: "#5B4638",
    icon: "codechef",
    featured: false,
  },
  {
    id: "geeksforgeeks",
    platform: "GeeksforGeeks",
    username: "prathik_gfg",
    profileUrl: "https://auth.geeksforgeeks.org/user/prathik_gfg",
    category: "Coding & Problem Solving",
    badgeText: "Top Contributor",
    stats: [
      { label: "Coding Score", value: "850+" },
      { label: "Problems Solved", value: "280+" },
      { label: "Institute Rank", value: "Top 5" },
    ],
    description: "Practice on DSA topics, interview archives, and computer science theory articles.",
    brandColor: "#2F8D46",
    icon: "geeksforgeeks",
    featured: false,
  },
  {
    id: "linkedin",
    platform: "LinkedIn",
    username: "prathik-b73793351",
    profileUrl: "https://www.linkedin.com/in/prathik-b73793351",
    category: "Professional & Social",
    badgeText: "Connect",
    stats: [
      { label: "Network", value: "Active" },
      { label: "Field", value: "Software Dev" },
      { label: "Status", value: "Open to Work" },
    ],
    description: "Professional networking, software engineering connections, and project updates.",
    brandColor: "#0A66C2",
    icon: "linkedin",
    featured: true,
  },
  {
    id: "twitter",
    platform: "X / Twitter",
    username: "@prathik_dev",
    profileUrl: "https://x.com/prathik_dev",
    category: "Professional & Social",
    badgeText: "Tech Community",
    stats: [
      { label: "Following", value: "350+" },
      { label: "Tech Tweets", value: "120+" },
      { label: "Topics", value: "Web & AI" },
    ],
    description: "Sharing build-in-public updates, interesting frontend discoveries, and tech discussions.",
    brandColor: "#000000",
    icon: "twitter",
    featured: false,
  },
];
