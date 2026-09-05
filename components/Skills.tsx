"use client";

import { useEffect, useRef, useState } from "react";
import { skills } from "@/data/skills";

export default function Skills() {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="grid grid-cols-1 gap-5 sm:grid-cols-3">
      {skills.map((skill) => (
        <div
          key={skill.id}
          className="rounded-2xl border border-surface-border bg-white p-6 shadow-card"
        >
          <p className="font-serif text-lg font-bold text-ink">{skill.name}</p>
          <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-surface-muted">
            <div
              className="skill-bar-fill h-full rounded-full bg-primary"
              style={{ width: inView ? `${skill.percentage}%` : "0%" }}
            />
          </div>
          <p className="mt-2 text-right text-sm font-semibold text-ink-soft">
            {skill.percentage}%
          </p>
        </div>
      ))}
    </div>
  );
}
