import Hero from "@/components/Hero";
import SkillsSection from "@/components/SkillsSection";
import CertificatesSection from "@/components/CertificatesSection";
import HandlesSection from "@/components/HandlesSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SkillsSection id="skills" />
      <CertificatesSection id="certificates" />
      <HandlesSection id="handles" />
    </>
  );
}
