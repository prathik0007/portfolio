import { portfolio } from "@/data/portfolio";

const items = [
  { label: "Full Name", value: portfolio.shortName },
  { label: "Age", value: portfolio.age },
  { label: "Date of Birth", value: portfolio.dateOfBirth },
  { label: "Location", value: portfolio.fullAddress },
];

export default function PersonalInfo() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <div
          key={item.label}
          className="rounded-2xl border border-surface-border bg-white p-5 text-center shadow-card transition-shadow hover:shadow-card-hover"
        >
          <p className="text-xs font-semibold uppercase tracking-wide text-blue-700/80">
            {item.label}
          </p>
          <p className="mt-2 text-sm font-medium text-ink">{item.value}</p>
        </div>
      ))}
    </div>
  );
}
