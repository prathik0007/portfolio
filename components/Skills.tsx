import { resumeSkillGroups } from "@/data/skills";

export default function Skills() {
  return (
    <div className="space-y-10 sm:space-y-12">
      {resumeSkillGroups.map((group) => (
        <div key={group.category} className="space-y-4">
          {/* Category Header with vertical bar */}
          <div className="flex items-center">
            <span className="mr-2.5 select-none text-xl font-black text-primary sm:text-2xl">
              |
            </span>
            <h3 className="font-sans text-xl font-bold tracking-tight text-primary sm:text-2xl">
              {group.category}
            </h3>
          </div>

          {/* Uniform Skill Badges */}
          <div className="flex flex-wrap gap-3 sm:gap-4">
            {group.skills.map((skill) => (
              <div
                key={skill}
                className="flex h-12 w-[calc(50%-6px)] cursor-default items-center justify-center rounded-xl border border-surface-border bg-white px-3 text-center text-sm font-semibold text-ink shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary hover:shadow-card sm:h-13 sm:w-[160px] sm:rounded-2xl sm:text-[15px] md:w-[172px] lg:w-[180px]"
              >
                <span className="truncate">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
