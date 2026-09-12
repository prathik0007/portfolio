import { resumeSkillGroups } from "@/data/skills";
import SectionHeading from "@/components/SectionHeading";

export default function SkillsSection({ id = "skills" }: { id?: string }) {
  return (
    <section id={id} className="relative scroll-mt-24 bg-white py-16 sm:py-20">
      {/* Decorative background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/3 left-0 h-96 w-96 -translate-y-1/2 rounded-full bg-primary-light/40 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-sky-50/60 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Technical"
          highlight="Skills"
          subtitle="Technologies, frameworks, and tools sourced from my practical experience and projects."
        />

        {/* Categories Stack */}
        <div className="mt-14 space-y-10 sm:space-y-12">
          {resumeSkillGroups.map((group) => (
            <div key={group.category} className="space-y-4">
              {/* Category Header with vertical bar */}
              <div className="flex items-center gap-2">
                <span className="select-none text-xl font-black text-primary sm:text-2xl">
                  |
                </span>
                <h3 className="font-sans text-lg font-bold tracking-tight text-primary sm:text-xl">
                  {group.category}
                </h3>
              </div>

              {/* Skill Badges */}
              <div className="flex flex-wrap gap-3 sm:gap-3.5">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex cursor-default items-center justify-center rounded-xl border border-surface-border bg-white px-6 py-2.5 text-sm font-semibold text-ink shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary hover:shadow-card sm:rounded-2xl sm:px-7 sm:py-3 sm:text-base"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
