import Link from "next/link";
import Image from "next/image";
import { Rocket, Download, Send, GraduationCap, Award, MapPin, CircleDot } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import SocialLinks from "@/components/SocialLinks";

export default function Hero() {
  const { infoCard } = portfolio;

  return (
    <section className="relative overflow-hidden bg-white py-12 lg:py-20">
      {/* Ambient background waves and fluid lighting (matches reference layout) */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Soft fluid blue wave in bottom right */}
        <div className="absolute -bottom-24 -right-24 h-[550px] w-[550px] rounded-full bg-gradient-to-tl from-primary/15 via-sky-100/30 to-transparent blur-3xl" />
        {/* Soft blue glow on top right behind avatar */}
        <div className="absolute top-10 right-1/4 h-[420px] w-[420px] rounded-full bg-primary-light/60 blur-3xl" />
        {/* Constellation lines and dots decoration top left */}
        <svg
          className="absolute left-6 top-12 hidden h-48 w-48 text-primary/20 sm:block"
          viewBox="0 0 100 100"
          fill="none"
        >
          <circle cx="20" cy="30" r="3" fill="currentColor" />
          <circle cx="50" cy="20" r="2" fill="currentColor" />
          <circle cx="80" cy="45" r="3.5" fill="currentColor" />
          <circle cx="45" cy="70" r="2.5" fill="currentColor" />
          <line x1="20" y1="30" x2="50" y2="20" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 3" />
          <line x1="50" y1="20" x2="80" y2="45" stroke="currentColor" strokeWidth="0.8" />
          <line x1="20" y1="30" x2="45" y2="70" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 2" />
        </svg>
      </div>

      <div className="mx-auto max-w-[1400px] px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Left Column: text content & actions (5 cols on lg) */}
          <div className="animate-fade-in lg:col-span-5">
            {/* Greeting pill */}
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-light/80 px-4 py-1.5 text-sm font-semibold text-primary">
              <span aria-hidden="true">👋</span> {portfolio.greeting}
            </span>

            {/* Name in bold sans-serif matching reference */}
            <h1 className="mt-4 font-sans text-4xl font-extrabold tracking-tight text-ink sm:text-5xl lg:text-6xl">
              {portfolio.name}
            </h1>

            {/* Role subtitle: Full-Stack in primary blue, Developer in ink */}
            <p className="mt-2 font-sans text-2xl font-bold tracking-tight sm:text-3xl">
              <span className="text-primary">{portfolio.role.split(" ")[0]}</span>{" "}
              <span className="text-ink">{portfolio.role.split(" ").slice(1).join(" ")}</span>
            </p>

            {/* Bio introduction */}
            <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
              {portfolio.introduction}
            </p>

            {/* Action buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-card transition-all hover:bg-primary-dark hover:shadow-card-hover"
              >
                <Rocket size={16} /> View Projects
              </Link>
              <a
                href={portfolio.resumePdfPath}
                download
                className="inline-flex items-center gap-2 rounded-full border border-surface-border bg-white px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-primary hover:text-primary"
              >
                <Download size={16} /> Download Resume
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-primary/30 px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary-light"
              >
                <Send size={16} /> Hire Me
              </Link>
            </div>

            {/* Social links */}
            <div className="mt-10 flex items-center gap-4">
              <span className="text-sm font-medium text-ink-soft">Let&apos;s connect</span>
              <SocialLinks size="sm" />
            </div>
          </div>

          {/* Right Area: Profile picture in the center + Info card beside it (7 cols on lg) */}
          <div className="relative flex flex-col items-center justify-center gap-8 md:flex-row md:items-center md:justify-center lg:col-span-7 lg:justify-end">
            
            {/* Center: Profile Picture with concentric orbit rings */}
            <div className="relative flex-none">
              {/* Outer decorative orbit rings matching reference */}
              <div className="absolute -inset-6 rounded-full border border-primary/30 border-dashed pointer-events-none" />
              <div className="absolute -inset-12 rounded-full border border-primary/15 pointer-events-none" />

              {/* Floating accent dots in blue */}
              <div className="absolute -top-3 right-8 h-3.5 w-3.5 rounded-full bg-primary shadow-sm" />
              <div className="absolute -bottom-4 left-6 h-3.5 w-3.5 rounded-full border-2 border-primary" />
              <div className="absolute top-1/2 -left-6 h-2 w-2 rounded-full bg-primary/60" />

              {/* Glowing ring */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-primary via-sky-400 to-primary-light opacity-30 blur-sm" />

              {/* Circular portrait avatar */}
              <div className="relative h-64 w-64 overflow-hidden rounded-full border-[6px] border-white bg-surface-muted shadow-card-hover sm:h-80 sm:w-80 lg:h-[340px] lg:w-[340px]">
                <Image
                  src={portfolio.profileImagePath}
                  alt={`Portrait of ${portfolio.name}`}
                  fill
                  sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 340px"
                  className="object-cover object-[center_15%]"
                  priority
                  unoptimized
                />
              </div>
            </div>

            {/* Right: Floating Info Card (sits beside the avatar, completely uncovered) */}
            <div className="w-full max-w-xs flex-none rounded-2xl border border-surface-border bg-white/95 p-5 shadow-card-hover backdrop-blur-sm sm:w-72">
              <ul className="flex flex-col gap-3.5">
                {/* 1: College / Institution */}
                <li className="flex items-center gap-3">
                  <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-primary-light text-primary">
                    <GraduationCap size={18} />
                  </span>
                  <div>
                    <p className="font-sans text-sm font-bold text-ink leading-tight">
                      {infoCard.education.label}
                    </p>
                    <p className="mt-0.5 text-xs text-ink-soft leading-tight">
                      {infoCard.education.value}
                    </p>
                  </div>
                </li>

                {/* 2: Degree / MCA */}
                <li className="flex items-center gap-3 border-t border-surface-border/80 pt-3.5">
                  <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-primary-light text-primary">
                    <Award size={18} />
                  </span>
                  <div>
                    <p className="font-sans text-sm font-bold text-ink leading-tight">
                      {infoCard.experience.label}
                    </p>
                    <p className="mt-0.5 text-xs text-ink-soft leading-tight">
                      {infoCard.experience.value}
                    </p>
                  </div>
                </li>

                {/* 3: Location */}
                <li className="flex items-center gap-3 border-t border-surface-border/80 pt-3.5">
                  <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-primary-light text-primary">
                    <MapPin size={18} />
                  </span>
                  <div>
                    <p className="font-sans text-sm font-bold text-ink leading-tight">
                      {infoCard.location.label}
                    </p>
                    <p className="mt-0.5 text-xs text-ink-soft leading-tight">
                      {infoCard.location.value}
                    </p>
                  </div>
                </li>

                {/* 4: Open to Work */}
                <li className="flex items-center gap-3 border-t border-surface-border/80 pt-3.5">
                  <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                    <CircleDot size={18} />
                  </span>
                  <div>
                    <p className="font-sans text-sm font-bold text-ink leading-tight">
                      {infoCard.availability.label}
                    </p>
                    <p className="mt-0.5 text-xs text-ink-soft leading-tight">
                      {infoCard.availability.value}
                    </p>
                  </div>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
