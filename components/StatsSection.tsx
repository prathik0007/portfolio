import { portfolio } from "@/data/portfolio";

interface StatItem {
  value: string;
  title: string;
  description: string;
}

interface StatsSectionProps {
  stats?: StatItem[];
  className?: string;
}

export default function StatsSection({ stats, className = "" }: StatsSectionProps) {
  const items = stats || portfolio.stats;

  if (!items || items.length === 0) return null;

  return (
    <div className={`w-full ${className}`}>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-6 lg:gap-8">
        {items.map((stat, idx) => (
          <div
            key={idx}
            className="group relative overflow-hidden rounded-2xl border border-surface-border bg-white px-6 py-7 text-center shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-card-hover"
          >
            {/* Subtle top indicator highlight on hover */}
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            {/* Stat number / value */}
            <p className="font-sans text-3xl font-extrabold tracking-tight text-primary transition-transform duration-300 group-hover:scale-105 sm:text-4xl">
              {stat.value}
            </p>

            {/* Stat title */}
            <h3 className="mt-2 font-sans text-base font-bold text-ink sm:text-lg">
              {stat.title}
            </h3>

            {/* Stat subtitle */}
            <p className="mt-1 text-xs text-ink-soft sm:text-sm">
              {stat.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
