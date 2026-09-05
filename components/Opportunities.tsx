import { opportunities } from "@/data/skills";

export default function Opportunities() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
      {opportunities.map((opp) => (
        <div
          key={opp.id}
          className="rounded-2xl border border-surface-border bg-white p-6 shadow-card transition-shadow hover:shadow-card-hover"
        >
          <p className="font-serif text-lg font-bold text-ink">{opp.title}</p>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">{opp.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {opp.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
