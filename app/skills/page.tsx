import type { Metadata } from "next";
import { portfolio } from "@/data/portfolio";
import SkillsSection from "@/components/SkillsSection";

export const metadata: Metadata = {
  title: `Skills | ${portfolio.name}`,
  description: `Explore the technical skills, programming languages, and proficiencies of ${portfolio.name}.`,
};

export default function SkillsPage() {
  return <SkillsSection />;
}
