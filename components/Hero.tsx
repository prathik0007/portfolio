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
            {portfolio.name.split(" ").slice(0, -1).join(" ")}{" "}
            <span className="text-primary">{portfolio.name.split(" ").slice(-1)}</span>
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

        {/* Right: profile image + info card */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute inset-0 -z-10 dot-grid opacity-70" style={{ maskImage: "radial-gradient(circle, black 40%, transparent 75%)" }} />
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
            <CircleDot className="absolute -top-2 right-6 text-primary" size={20} />
            <span className="absolute -bottom-3 left-2 h-3 w-3 rounded-full border-2 border-primary/60" />

            {/* Info card */}
            <div className="absolute -right-6 bottom-4 hidden w-64 rounded-2xl border border-surface-border bg-white p-5 shadow-card-hover sm:block lg:-right-16">
              <ul className="flex flex-col gap-4">
                <li className="flex items-start gap-3">
                  <span className="flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-primary-light text-primary">
                    <GraduationCap size={16} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink">{infoCard.education.label}</p>
                    <p className="text-xs text-ink-soft">{infoCard.education.value}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 border-t border-surface-border pt-4">
                  <span className="flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-primary-light text-primary">
                    <Award size={16} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink">{infoCard.experience.label}</p>
                    <p className="text-xs text-ink-soft">{infoCard.experience.value}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 border-t border-surface-border pt-4">
                  <span className="flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-primary-light text-primary">
                    <MapPin size={16} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink">{infoCard.location.label}</p>
                    <p className="text-xs text-ink-soft">{infoCard.location.value}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 border-t border-surface-border pt-4">
                  <span className="flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-green-100 text-green-600">
                    <CircleDot size={16} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink">{infoCard.availability.label}</p>
                    <p className="text-xs text-ink-soft">{infoCard.availability.value}</p>
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
