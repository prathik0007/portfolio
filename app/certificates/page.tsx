import type { Metadata } from "next";
import { portfolio } from "@/data/portfolio";
import CertificatesSection from "@/components/CertificatesSection";

export const metadata: Metadata = {
  title: `Certificates | ${portfolio.name}`,
  description: `Certifications, industry credentials, and verified achievements earned by ${portfolio.name}.`,
};

export default function CertificatesPage() {
  return <CertificatesSection />;
}
