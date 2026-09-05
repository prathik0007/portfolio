"use client";

import { useState } from "react";
import {
  certificates,
  certificateCategories,
  CertificateCategory,
  Certificate,
} from "@/data/certificates";
import SectionHeading from "@/components/SectionHeading";
import {
  Award,
  ExternalLink,
  Calendar,
  Building2,
  ShieldCheck,
  CheckCircle,
  Copy,
  Check,
} from "lucide-react";

export default function CertificatesSection({ id = "certificates" }: { id?: string }) {
  const [activeCategory, setActiveCategory] = useState<CertificateCategory>("All");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredCertificates =
    activeCategory === "All"
      ? certificates
      : certificates.filter((c) => c.category === activeCategory);

  function copyCredentialId(credId: string) {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(credId);
      setCopiedId(credId);
      setTimeout(() => setCopiedId(null), 2000);
    }
  }

  return (
    <section id={id} className="relative scroll-mt-24 py-20 bg-surface-muted/60 border-t border-surface-border">
      {/* Subtle decorative background pattern */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute right-0 top-1/4 h-80 w-80 rounded-full bg-primary-light/50 blur-3xl" />
        <div className="absolute left-10 bottom-10 h-72 w-72 rounded-full bg-amber-50/70 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Certificates &"
          highlight="Credentials"
          subtitle="Validated certifications and accredited milestones across cloud architecture, modern engineering, and computer science."
        />

        {/* Category Tabs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {certificateCategories.map((category) => {
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

        {/* Certificates Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredCertificates.map((cert) => (
            <article
              key={cert.id}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-surface-border bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-card-hover"
            >
              {/* Top Accent Gradient Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-blue-400 to-cyan-400" />

              <div>
                {/* Header: Issuer + Date */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-light text-primary transition-transform group-hover:scale-105">
                      <Award size={20} />
                    </span>
                    <div>
                      <p className="flex items-center gap-1.5 text-xs font-semibold text-primary">
                        <Building2 size={12} /> {cert.issuer}
                      </p>
                      <span className="text-[11px] font-medium uppercase tracking-wider text-ink-soft/70">
                        {cert.category}
                      </span>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1 rounded-full bg-surface-muted px-2.5 py-1 text-[11px] font-medium text-ink-soft border border-surface-border">
                    <Calendar size={11} /> {cert.issueDate}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mt-4 font-serif text-lg font-bold leading-snug text-ink group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>

                {/* Description */}
                <p className="mt-2.5 text-sm leading-relaxed text-ink-soft">
                  {cert.description}
                </p>

                {/* Credential ID badge with copy action */}
                {cert.credentialId && (
                  <div className="mt-4 flex items-center justify-between rounded-lg border border-surface-border bg-surface-muted/80 px-3 py-1.5 text-xs text-ink-soft">
                    <span className="flex items-center gap-1 font-mono text-[11px] font-medium">
                      <ShieldCheck size={13} className="text-primary" /> ID: {cert.credentialId}
                    </span>
                    <button
                      type="button"
                      onClick={() => copyCredentialId(cert.credentialId!)}
                      title="Copy Credential ID"
                      className="inline-flex items-center gap-1 text-[11px] font-medium text-ink-soft hover:text-primary transition-colors"
                    >
                      {copiedId === cert.credentialId ? (
                        <>
                          <Check size={12} className="text-emerald-600" />
                          <span className="text-emerald-600 font-semibold">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy size={12} />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                )}

                {/* Skills tags */}
                <div className="mt-4">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-ink-soft/80">
                    Skills Covered
                  </p>
                  <div className="mt-1.5 flex flex-wrap gap-1.5">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-md bg-surface-muted px-2.5 py-0.5 text-xs font-medium text-ink-soft border border-surface-border/80"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Action Button */}
              <div className="mt-6 border-t border-surface-border pt-4">
                {cert.credentialUrl ? (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary-light px-4 py-2.5 text-xs font-semibold text-primary transition-all duration-200 hover:bg-primary hover:text-white"
                  >
                    <ExternalLink size={13} /> Verify Credential
                  </a>
                ) : (
                  <span className="inline-flex w-full items-center justify-center gap-1.5 text-xs font-medium text-ink-soft">
                    <CheckCircle size={13} className="text-emerald-600" /> Completed & Verified
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
