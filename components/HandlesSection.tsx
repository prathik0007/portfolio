"use client";

import { connectHandles } from "@/data/handles";

function LaptopIcon() {
  return (
    <svg viewBox="0 0 64 64" className="h-14 w-14" fill="none">
      {/* Screen lid */}
      <rect x="13" y="12" width="38" height="26" rx="3" fill="#3B82F6" />
      <rect x="16" y="15" width="32" height="20" rx="1.5" fill="#60A5FA" />
      <rect x="19" y="18" width="12" height="3" rx="1.5" fill="#DBEAFE" />
      <rect x="19" y="23" width="18" height="2" rx="1" fill="#BFDBFE" />
      <rect x="19" y="27" width="14" height="2" rx="1" fill="#BFDBFE" />
      {/* Base */}
      <path
        d="M6 40h52c1.657 0 3 1.343 3 3v2c0 1.105-.895 2-2 2H5c-1.105 0-2-.895-2-2v-2c0-1.657 1.343-3 3-3z"
        fill="#93C5FD"
      />
      <path d="M26 40h12v2H26z" fill="#DBEAFE" />
    </svg>
  );
}

function BriefcaseIcon() {
  return (
    <svg viewBox="0 0 64 64" className="h-14 w-14" fill="none">
      <path
        d="M24 16v-4a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v4"
        stroke="#78350F"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <rect x="10" y="16" width="44" height="34" rx="5" fill="#92400E" />
      <rect x="10" y="16" width="44" height="12" fill="#B45309" rx="5" />
      <path d="M10 28h44" stroke="#78350F" strokeWidth="2" />
      <rect x="18" y="16" width="4" height="34" fill="#78350F" opacity="0.4" />
      <rect x="42" y="16" width="4" height="34" fill="#78350F" opacity="0.4" />
      <rect x="28.5" y="25" width="7" height="6" rx="1.5" fill="#FCD34D" />
    </svg>
  );
}

function ChatBubbleIcon() {
  return (
    <svg viewBox="0 0 64 64" className="h-14 w-14" fill="none">
      <path
        d="M48 27c0 11.046-9.85 20-22 20-3.376 0-6.568-.69-9.378-1.916L7 48l3.197-8.791C8.75 35.688 8 31.472 8 27 8 15.954 17.85 7 30 7s22 8.954 22 20z"
        fill="#DDD6FE"
      />
      <path
        d="M46 25c0 10.493-9.402 19-21 19-3.21 0-6.242-.653-8.913-1.815L8 45l3.038-8.354C9.728 33.275 9 29.266 9 25c0-10.493 9.402-19 21-19s21 8.507 21 19z"
        fill="#EDE9FE"
      />
      <circle cx="21" cy="25" r="2.5" fill="#8B5CF6" />
      <circle cx="29" cy="25" r="2.5" fill="#8B5CF6" />
      <circle cx="37" cy="25" r="2.5" fill="#8B5CF6" />
    </svg>
  );
}

function MailEnvelopeIcon() {
  return (
    <svg viewBox="0 0 64 64" className="h-14 w-14" fill="none">
      <rect x="8" y="16" width="48" height="32" rx="4" fill="#E2E8F0" />
      <path d="M8 20l24 16 24-16" fill="#CBD5E1" />
      <path d="M8 20l24 16 24-16v24a4 4 0 0 1-4 4H12a4 4 0 0 1-4-4V20z" fill="#F8FAFC" />
      <path d="M8 44l17-13M56 44L39 31" stroke="#94A3B8" strokeWidth="1.5" />
      <circle cx="32" cy="30" r="7" fill="#3B82F6" />
      <text
        x="32"
        y="34"
        textAnchor="middle"
        fill="white"
        fontSize="11"
        fontWeight="bold"
        fontFamily="sans-serif"
      >
        @
      </text>
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 64 64" className="h-14 w-14" fill="none">
      <defs>
        <linearGradient id="ig-fluent-grad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#F59E0B" />
          <stop offset="35%" stopColor="#EF4444" />
          <stop offset="70%" stopColor="#EC4899" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </linearGradient>
      </defs>
      <rect x="10" y="10" width="44" height="44" rx="14" fill="url(#ig-fluent-grad)" />
      <rect x="14" y="14" width="36" height="36" rx="10" fill="none" stroke="white" strokeWidth="3" />
      <circle cx="32" cy="32" r="8.5" stroke="white" strokeWidth="3" fill="none" />
      <circle cx="42" cy="22" r="2.2" fill="white" />
    </svg>
  );
}

function LeetCodeIcon() {
  return (
    <svg viewBox="0 0 64 64" className="h-14 w-14" fill="none">
      <rect x="10" y="10" width="44" height="44" rx="14" fill="#FFFBEB" stroke="#FDE68A" strokeWidth="2" />
      <path
        d="M26 23l-9 9 9 9"
        stroke="#D97706"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M38 23l9 9-9 9"
        stroke="#D97706"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M34 19l-4 26"
        stroke="#F59E0B"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

const iconComponentMap = {
  github: LaptopIcon,
  linkedin: BriefcaseIcon,
  whatsapp: ChatBubbleIcon,
  email: MailEnvelopeIcon,
  instagram: InstagramIcon,
  leetcode: LeetCodeIcon,
};

export default function HandlesSection({ id = "handles" }: { id?: string }) {
  return (
    <section
      id={id}
      className="relative scroll-mt-24 bg-white py-20 border-t border-surface-border"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading matching screenshot */}
        <div className="text-center">
          <h2 className="font-sans text-3xl font-extrabold text-ink sm:text-4xl tracking-tight">
            Connect With Me
          </h2>
          <p className="mt-2.5 text-sm font-medium text-ink-soft sm:text-base">
            Let&apos;s stay connected on social platforms
          </p>
        </div>

        {/* Handles Cards Grid matching screenshot */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {connectHandles.map((item) => {
            const IconComponent =
              iconComponentMap[item.icon as keyof typeof iconComponentMap] ||
              LaptopIcon;

            return (
              <a
                key={item.id}
                href={item.url}
                target={item.url.startsWith("mailto") ? undefined : "_blank"}
                rel={
                  item.url.startsWith("mailto")
                    ? undefined
                    : "noopener noreferrer"
                }
                className="group flex flex-col items-center justify-center rounded-2xl border border-surface-border/70 bg-white p-6 sm:p-7 text-center shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-card-hover"
              >
                {/* 3D / Authentic Icon */}
                <div className="flex h-16 w-16 items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <IconComponent />
                </div>

                {/* Platform Name */}
                <h3 className="mt-4 font-sans text-base font-bold text-ink transition-colors group-hover:text-primary">
                  {item.platform}
                </h3>

                {/* Subtitle */}
                <p className="mt-1 text-xs text-ink-soft group-hover:text-ink transition-colors">
                  {item.subtitle}
                </p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
