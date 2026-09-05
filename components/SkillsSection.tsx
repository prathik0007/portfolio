"use client";

import { useState } from "react";
import {
  categorizedSkills,
  skillCategories,
  SkillCategory,
  SkillProficiency,
} from "@/data/skills";
import SectionHeading from "@/components/SectionHeading";
import { Code2, Sparkles, CheckCircle2, Terminal, Cpu } from "lucide-react";

const proficiencyColorMap: Record<SkillProficiency, { badge: string; dot: string; bar: string }> = {
  Expert: {
    badge: "bg-indigo-50 text-indigo-700 border-indigo-200",
    dot: "bg-indigo-600",
    bar: "bg-indigo-600",
  },
  Advanced: {
    badge: "bg-primary-light text-primary border-primary/20",
    dot: "bg-primary",
    bar: "bg-primary",
  },
  Proficient: {
    badge: "bg-sky-50 text-sky-700 border-sky-200",
    dot: "bg-sky-600",
    bar: "bg-sky-600",
  },
  Familiar: {
    badge: "bg-slate-100 text-slate-700 border-slate-200",
    dot: "bg-slate-400",
    bar: "bg-slate-500",
  },
};

export default function SkillsSection({ id = "skills" }: { id?: string }) {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>("All");

  const filteredSkills =
    activeCategory === "All"
      ? categorizedSkills
      : categorizedSkills.filter((s) => s.category === activeCategory);

  return (
    <section id={id} className="relative scroll-mt-24 py-20 bg-white">
      {/* Decorative background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-0 h-96 w-96 -translate-y-1/2 rounded-full bg-primary-light/40 blur-3xl" />
        <div className="absolute bottom-0 right-10 h-80 w-80 rounded-full bg-blue-50/60 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Technical"
          highlight="Skillset"
          subtitle="Proficiencies across programming languages, modern frameworks, cloud architectures, and developer tooling."
        />

        {/* Feature Highlights Pills */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm text-ink-soft">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-surface-border bg-surface-muted px-3.5 py-1.5 font-medium">
            <Code2 size={14} className="text-primary" /> Full-Stack Architecture
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-surface-border bg-surface-muted px-3.5 py-1.5 font-medium">
            <Terminal size={14} className="text-primary" /> Clean & Scalable Code
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-surface-border bg-surface-muted px-3.5 py-1.5 font-medium">
            <Cpu size={14} className="text-primary" /> Modern Performance
          </span>
        </div>

        {/* Category Filter Tabs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {skillCategories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-primary text-white shadow-card hover:bg-primary-dark"
                    : "border border-surface-border bg-white text-ink-soft hover:border-primary/40 hover:text-primary"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredSkills.map((skill) => {
            const colors = proficiencyColorMap[skill.proficiency];
            return (
              <div
                key={skill.name}
                className="group relative flex flex-col justify-between rounded-2xl border border-surface-border bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-card-hover"
              >
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary-light text-primary transition-transform group-hover:scale-110">
                        <Code2 size={18} />
                      </div>
                      <div>
                        <h3 className="font-serif text-base font-bold text-ink group-hover:text-primary transition-colors">
                          {skill.name}
                        </h3>
                        <span className="text-[11px] font-medium uppercase tracking-wider text-ink-soft/70">
                          {skill.category}
                        </span>
                      </div>
                    </div>

                    {skill.highlight && (
                      <span
                        title="Core Specialty"
                        className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-50 text-amber-500 border border-amber-200/80"
                      >
                        <Sparkles size={12} />
                      </span>
                    )}
                  </div>

                  {/* Progress bar */}
                  <div className="mt-5">
                    <div className="flex items-center justify-between text-xs font-semibold">
                      <span className="text-ink-soft">Proficiency</span>
                      <span className="text-ink">{skill.percentage}%</span>
                    </div>
                    <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-surface-muted">
                      <div
                        className={`h-full rounded-full transition-all duration-700 ease-out ${colors.bar}`}
                        style={{ width: `${skill.percentage}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Card footer badge */}
                <div className="mt-5 flex items-center justify-between border-t border-surface-border/70 pt-3">
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium ${colors.badge}`}
                  >
                    <span className={`h-1.5 w-1.5 rounded-full ${colors.dot}`} />
                    {skill.proficiency}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] font-medium text-ink-soft">
                    <CheckCircle2 size={12} className="text-emerald-600" /> Verified
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
