import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2563EB",
          dark: "#1D4ED8",
          light: "#EFF6FF",
        },
        ink: {
          DEFAULT: "#1A2233",
          soft: "#4B5567",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          muted: "#FAFAFB",
          border: "#EAEAEE",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Helvetica", "Arial", "sans-serif"],
      },
      boxShadow: {
        card: "0 2px 10px rgba(20, 20, 30, 0.06)",
        "card-hover": "0 12px 30px rgba(20, 20, 30, 0.10)",
        drawer: "-8px 0 40px rgba(0,0,0,0.25)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-right": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "grow-bar": {
          "0%": { width: "0%" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.7s ease-out both",
        "slide-in-right": "slide-in-right 0.35s cubic-bezier(0.32, 0.72, 0, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
