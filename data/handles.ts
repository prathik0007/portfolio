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

export const profileHandles: ProfileHandle[] = [
  {
    id: "leetcode",
    platform: "LeetCode",
    username: "prathik_code",
    profileUrl: "https://leetcode.com/u/prathik_code",
    category: "Coding & Problem Solving",
    badgeText: "Knight / Top 8%",
    stats: [
      { label: "Problems Solved", value: "450+" },
      { label: "Contest Rating", value: "1,750+" },
      { label: "Badges Earned", value: "12+" },
    ],
    description: "Active daily problem solver focusing on Data Structures, Dynamic Programming, and Graph algorithms.",
    brandColor: "#FFA116",
    icon: "leetcode",
    featured: true,
  },
  {
    id: "github",
    platform: "GitHub",
    username: "prathik",
    profileUrl: "https://github.com/prathik",
    category: "Developer & Open Source",
    badgeText: "Arctic Code Vault",
    stats: [
      { label: "Public Repos", value: "35+" },
      { label: "Contributions", value: "1,200+" },
      { label: "Stars Received", value: "85+" },
    ],
    description: "Personal projects, full-stack web applications, open source libraries, and utility tools.",
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
    username: "prathik",
    profileUrl: "https://linkedin.com/in/prathik",
    category: "Professional & Social",
    badgeText: "500+ Connections",
    stats: [
      { label: "Connections", value: "500+" },
      { label: "Articles & Posts", value: "15+" },
      { label: "Endorsements", value: "40+" },
    ],
    description: "Professional networking, sharing software engineering insights, project launches, and career updates.",
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
