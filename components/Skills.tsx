import { resumeSkillGroups } from "@/data/skills";

export default function Skills() {
  return (
    <div className="space-y-8 sm:space-y-10">
      {resumeSkillGroups.map((group) => (
        <div key={group.category} className="space-y-3.5">
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
          <div className="flex flex-wrap gap-2.5 sm:gap-3">
            {group.skills.map((skill) => (
              <span
                key={skill}
                className="inline-flex cursor-default items-center justify-center rounded-xl border border-surface-border bg-white px-5 py-2 text-sm font-semibold text-ink shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary hover:shadow-card sm:rounded-2xl sm:px-6 sm:py-2.5 sm:text-base"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
