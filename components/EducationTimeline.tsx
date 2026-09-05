import { education } from "@/data/education";

export default function EducationTimeline() {
  return (
    <div className="relative mx-auto max-w-3xl">
      {/* Vertical line - desktop only */}
      <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-surface-border sm:block" />

      <div className="flex flex-col gap-10 sm:gap-16">
        {education.map((entry, index) => {
          const alignRight = index % 2 === 1;
          return (
            <div key={entry.id} className="relative sm:flex sm:items-center">
              {/* Dot */}
              <span className="absolute left-1/2 top-6 hidden h-3.5 w-3.5 -translate-x-1/2 rounded-full border-4 border-primary-light bg-primary sm:block" />

              <div
                className={`sm:w-[45%] ${
                  alignRight ? "sm:ml-auto sm:pl-10" : "sm:mr-auto sm:pr-10 sm:text-right"
                }`}
              >
                <div className="rounded-2xl border border-surface-border bg-white p-5 shadow-card">
                  <p className="font-serif text-lg font-bold text-primary">{entry.degree}</p>
                  <p className="mt-1 text-sm font-semibold text-ink">{entry.institution}</p>
                  <p className="text-sm text-ink-soft">{entry.university}</p>
                  <p className="mt-2 text-sm font-medium text-blue-700">{entry.years}</p>
                  <p className="text-sm font-semibold text-primary">{entry.grade}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
