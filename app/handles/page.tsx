import type { Metadata } from "next";
import { portfolio } from "@/data/portfolio";
import HandlesSection from "@/components/HandlesSection";

export const metadata: Metadata = {
  title: `Connect | ${portfolio.name}`,
  description: `Connect with ${portfolio.name} on social and developer platforms including GitHub, LinkedIn, WhatsApp, Email, Instagram, and LeetCode.`,
};

export default function HandlesPage() {
  return <HandlesSection />;
}
