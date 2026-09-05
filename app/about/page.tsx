import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { portfolio } from "@/data/portfolio";
import SectionHeading from "@/components/SectionHeading";
import PersonalInfo from "@/components/PersonalInfo";
import EducationTimeline from "@/components/EducationTimeline";
import Skills from "@/components/Skills";
import Interests from "@/components/Interests";
import Opportunities from "@/components/Opportunities";

export const metadata: Metadata = {
  title: `About | ${portfolio.name}`,
  description: `Learn more about ${portfolio.name} — background, education, skills, and interests.`,
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="animate-fade-in text-center">
        <div className="mx-auto h-36 w-36 overflow-hidden rounded-full border-4 border-primary shadow-card-hover transition-transform hover:scale-105">
          <Image
            src={portfolio.profileImagePath}
            alt={`Portrait of ${portfolio.name}`}
            width={144}
            height={144}
            className="h-full w-full object-cover object-[center_15%]"
            priority
          />
        </div>
        <h1 className="mt-6 font-serif text-4xl font-bold text-ink">About Me</h1>
        <span className="mt-2 inline-block h-[3px] w-14 rounded-full bg-primary" />
        <p className="mt-4 text-lg text-ink-soft">{portfolio.tagline}</p>
      </div>

      {/* Personal information */}
      <section className="mt-16">
        <SectionHeading title="Personal" highlight="Information" />
        <div className="mt-8">
          <PersonalInfo />
        </div>
      </section>

      {/* Education */}
      <section className="mt-20">
        <SectionHeading title="Education" />
        <div className="mt-12">
          <EducationTimeline />
        </div>
      </section>

      {/* Technical skills */}
      <section className="mt-20">
        <SectionHeading title="Technical" highlight="Skills" />
        <div className="mt-10">
          <Skills />
        </div>
      </section>

      {/* Interests */}
      <section className="mt-20">
        <SectionHeading title="Interests" highlight="& Passions" />
        <div className="mt-8">
          <Interests />
        </div>
      </section>

      {/* Open for opportunities */}
      <section className="mt-20">
        <SectionHeading title="Open for" highlight="Opportunities" />
        <div className="mt-10">
          <Opportunities />
        </div>
      </section>

      {/* Let's Connect CTA */}
      <section className="mt-20">
        <div className="rounded-2xl border border-surface-border bg-white p-10 text-center shadow-card">
          <h2 className="font-serif text-3xl font-bold text-ink sm:text-4xl">Let&apos;s Connect!</h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-ink-soft">
            I&apos;m always excited to discuss new opportunities and collaborate on interesting projects.
          </p>
          <div className="mt-6">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-3 text-sm font-semibold text-white shadow-card transition-all hover:bg-primary-dark hover:shadow-card-hover"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
