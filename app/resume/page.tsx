import type { Metadata } from "next";
import { portfolio } from "@/data/portfolio";
import ResumePreview from "@/components/ResumePreview";

export const metadata: Metadata = {
  title: `Resume | ${portfolio.name}`,
  description: `Download or preview the resume of ${portfolio.name}.`,
};

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="font-serif text-4xl font-bold text-ink">Curriculum Vitae</h1>
        <p className="mt-3 text-base text-ink-soft">
          Professional achievements, technical skillsets, &amp; engineering experience
        </p>
      </div>

      <div className="mt-12">
        <ResumePreview />
      </div>
    </div>
  );
}
