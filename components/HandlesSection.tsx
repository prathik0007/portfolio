"use client";

import { useState } from "react";
import {
  profileHandles,
  handleCategories,
  HandleCategory,
  ProfileHandle,
} from "@/data/handles";
import SectionHeading from "@/components/SectionHeading";
import {
  ExternalLink,
  Copy,
  Check,
  Award,
  Sparkles,
  TrendingUp,
} from "lucide-react";

// Platform SVGs for authentic representation
function PlatformIcon({ platform, className = "h-5 w-5" }: { platform: string; className?: string }) {
  switch (platform.toLowerCase()) {
    case "leetcode":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .666-1.794l3.874-4.148 5.406-5.79A1.377 1.377 0 0 0 13.483 0zm-2.88 7.283a1.391 1.391 0 0 0-1.385 1.392v7.652c0 .769.624 1.392 1.385 1.392.762 0 1.386-.623 1.386-1.392V8.675c0-.769-.624-1.392-1.386-1.392z" />
        </svg>
      );
    case "github":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      );
    case "hackerrank":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm1.758 15.656h-1.637v-2.734H9.879v2.734H8.242V8.344h1.637v2.969h2.242V8.344h1.637v7.312z" />
        </svg>
      );
    case "codeforces":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M4.5 7.5A1.5 1.5 0 0 1 6 9v10.5A1.5 1.5 0 0 1 4.5 21h-3A1.5 1.5 0 0 1 0 19.5V9a1.5 1.5 0 0 1 1.5-1.5h3zm9-4.5A1.5 1.5 0 0 1 15 4.5v15a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 19.5v-15A1.5 1.5 0 0 1 10.5 3h3zm9 7.5A1.5 1.5 0 0 1 24 12v7.5a1.5 1.5 0 0 1-1.5 1.5h-3a1.5 1.5 0 0 1-1.5-1.5V12a1.5 1.5 0 0 1 1.5-1.5h3z" />
        </svg>
      );
    case "codechef":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14.93V14.5a1 1 0 0 0-2 0v2.43a6 6 0 1 1 4.24-10.24l-1.42 1.42A4 4 0 1 0 11 14.5v-2.43a6 6 0 0 1 2 4.86z" />
        </svg>
      );
    case "geeksforgeeks":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5h-2v-2h2v2zm0-4h-2V7h2v5.5z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
  }
}

export default function HandlesSection({ id = "handles" }: { id?: string }) {
  const [activeCategory, setActiveCategory] = useState<HandleCategory>("All");
  const [copiedHandle, setCopiedHandle] = useState<string | null>(null);

  const filteredHandles =
    activeCategory === "All"
      ? profileHandles
      : profileHandles.filter((h) => h.category === activeCategory);

  function copyHandleUsername(username: string) {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(username);
      setCopiedHandle(username);
      setTimeout(() => setCopiedHandle(null), 2000);
    }
  }

  return (
    <section id={id} className="relative scroll-mt-24 py-20 bg-white border-t border-surface-border">
      {/* Background ambient elements */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-primary-light/40 blur-3xl" />
        <div className="absolute right-10 bottom-10 h-80 w-80 rounded-full bg-emerald-50/50 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Coding &"
          highlight="Profiles"
          subtitle="Explore my coding activity, problem-solving journey, competitive rankings, and social connections."
        />

        {/* Category Tabs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {handleCategories.map((category) => {
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

        {/* Handles Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredHandles.map((handle) => (
            <article
              key={handle.id}
              className="group relative flex flex-col justify-between rounded-2xl border border-surface-border bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
              style={{
                borderColor: undefined,
              }}
            >
              <div>
                {/* Header: Icon + Platform & Username */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-2xl text-white shadow-card transition-transform group-hover:scale-105"
                      style={{ backgroundColor: handle.brandColor }}
                    >
                      <PlatformIcon platform={handle.icon} className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-bold text-ink">
                        {handle.platform}
                      </h3>
                      <p className="text-xs font-medium text-ink-soft">
                        @{handle.username.replace(/^@/, "")}
                      </p>
                    </div>
                  </div>

                  {handle.badgeText && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-primary-light px-2.5 py-1 text-[11px] font-semibold text-primary">
                      <Sparkles size={11} /> {handle.badgeText}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="mt-4 text-xs leading-relaxed text-ink-soft">
                  {handle.description}
                </p>

                {/* Stats Grid */}
                {handle.stats && handle.stats.length > 0 && (
                  <div className="mt-5 grid grid-cols-3 gap-2 rounded-xl bg-surface-muted p-3 border border-surface-border/70">
                    {handle.stats.map((stat) => (
                      <div key={stat.label} className="text-center">
                        <p className="font-serif text-sm font-bold text-ink sm:text-base">
                          {stat.value}
                        </p>
                        <p className="mt-0.5 text-[10px] font-medium text-ink-soft line-clamp-1">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Action Buttons: Copy Handle + Visit Profile */}
              <div className="mt-6 flex items-center gap-2 border-t border-surface-border pt-4">
                <button
                  type="button"
                  onClick={() => copyHandleUsername(handle.username)}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl border border-surface-border bg-white px-3 py-2 text-xs font-semibold text-ink transition-colors hover:border-primary hover:text-primary"
                >
                  {copiedHandle === handle.username ? (
                    <>
                      <Check size={13} className="text-emerald-600" />
                      <span className="text-emerald-600">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={13} />
                      <span>Copy Handle</span>
                    </>
                  )}
                </button>

                <a
                  href={handle.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl bg-primary px-3 py-2 text-xs font-semibold text-white shadow-card transition-all hover:bg-primary-dark hover:shadow-card-hover"
                >
                  <ExternalLink size={13} /> Visit Profile
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
