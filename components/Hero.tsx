import Link from "next/link";
import Image from "next/image";
import { Rocket, Download, Send, GraduationCap, Award, MapPin, CircleDot } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import SocialLinks from "@/components/SocialLinks";

export default function Hero() {
  const { infoCard } = portfolio;

  return (
    <section className="relative overflow-hidden bg-white">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-20 right-0 h-[420px] w-[420px] rounded-full bg-primary-light/70 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-64 w-full bg-gradient-to-t from-primary-light/40 to-transparent" />
        <div className="absolute right-24 top-24 hidden h-3 w-3 rounded-full bg-primary/70 sm:block" />
        <div className="absolute left-16 bottom-24 hidden h-2 w-2 rounded-full border border-primary/50 sm:block" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:py-24">
        {/* Left: text content */}
        <div className="animate-fade-in">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-light px-4 py-1.5 text-sm font-medium text-primary">
            <span aria-hidden="true">👋</span> {portfolio.greeting}
          </span>

          <h1 className="mt-5 font-serif text-4xl font-extrabold leading-tight text-ink sm:text-5xl lg:text-6xl">
            {portfolio.name.includes(" ") ? (
              <>
                {portfolio.name.split(" ").slice(0, -1).join(" ")}{" "}
                <span className="text-primary">{portfolio.name.split(" ").slice(-1)}</span>
              </>
            ) : (
              <>
                {portfolio.name}
                <span className="text-primary">.</span>
              </>
            )}
          </h1>

          <p className="mt-1 font-serif text-2xl font-bold text-ink sm:text-3xl">
            <span className="text-primary">{portfolio.role.split(" ")[0]}</span>{" "}
            {portfolio.role.split(" ").slice(1).join(" ")}
          </p>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
            {portfolio.introduction}
          </p>

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

          <div className="mt-10 flex items-center gap-4">
            <span className="text-sm font-medium text-ink-soft">Let&apos;s connect</span>
            <SocialLinks size="sm" />
          </div>
        </div>

        {/* Right: profile image with concentric orbit rings + floating info card */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            {/* Ambient background glow */}
            <div className="absolute -inset-10 -z-10 rounded-full bg-gradient-to-tr from-primary-light/70 via-blue-50/40 to-transparent blur-2xl" />

            {/* Concentric decorative orbit rings matching screenshot */}
            <div className="absolute -inset-6 rounded-full border border-primary/30 border-dashed pointer-events-none" />
            <div className="absolute -inset-12 rounded-full border border-primary/15 pointer-events-none" />

            {/* Floating accent dots (blue) */}
            <div className="absolute -top-3 right-10 h-3.5 w-3.5 rounded-full bg-primary shadow-sm" />
            <div className="absolute -bottom-4 left-6 h-3.5 w-3.5 rounded-full border-2 border-primary" />
            <div className="absolute top-1/3 -left-5 h-2 w-2 rounded-full bg-primary/60" />

            {/* Avatar container */}
            <div className="relative h-64 w-64 overflow-hidden rounded-full border-[6px] border-white bg-surface-muted shadow-card-hover sm:h-80 sm:w-80">
              <Image
                src={portfolio.profileImagePath}
                alt={`Portrait of ${portfolio.name}`}
                fill
                sizes="(max-width: 640px) 256px, 320px"
                className="object-cover"
                priority
              />
            </div>

            {/* Floating Info card matching screenshot 2 */}
            <div className="absolute -right-4 sm:-right-12 top-1/2 -translate-y-1/2 hidden w-64 sm:w-72 rounded-2xl border border-surface-border bg-white/95 backdrop-blur-sm p-4 sm:p-5 shadow-card-hover md:block">
              <ul className="flex flex-col gap-3.5">
                {/* 1: Institution */}
                <li className="flex items-center gap-3">
                  <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-primary-light text-primary">
                    <GraduationCap size={18} />
                  </span>
                  <div>
                    <p className="font-serif text-sm font-bold text-ink leading-tight">{infoCard.education.label}</p>
                    <p className="text-xs text-ink-soft leading-tight mt-0.5">{infoCard.education.value}</p>
                  </div>
                </li>

                {/* 2: Degree / MCA */}
                <li className="flex items-center gap-3 border-t border-surface-border/80 pt-3.5">
                  <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-primary-light text-primary">
                    <Award size={18} />
                  </span>
                  <div>
                    <p className="font-serif text-sm font-bold text-ink leading-tight">{infoCard.experience.label}</p>
                    <p className="text-xs text-ink-soft leading-tight mt-0.5">{infoCard.experience.value}</p>
                  </div>
                </li>

                {/* 3: Location */}
                <li className="flex items-center gap-3 border-t border-surface-border/80 pt-3.5">
                  <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-primary-light text-primary">
                    <MapPin size={18} />
                  </span>
                  <div>
                    <p className="font-serif text-sm font-bold text-ink leading-tight">{infoCard.location.label}</p>
                    <p className="text-xs text-ink-soft leading-tight mt-0.5">{infoCard.location.value}</p>
                  </div>
                </li>

                {/* 4: Open to Work */}
                <li className="flex items-center gap-3 border-t border-surface-border/80 pt-3.5">
                  <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                    <CircleDot size={18} />
                  </span>
                  <div>
                    <p className="font-serif text-sm font-bold text-ink leading-tight">{infoCard.availability.label}</p>
                    <p className="text-xs text-ink-soft leading-tight mt-0.5">{infoCard.availability.value}</p>
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
