"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
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
  Eye,
  X,
  FileText,
  Download,
} from "lucide-react";

export default function CertificatesSection({ id = "certificates" }: { id?: string }) {
  const [activeCategory, setActiveCategory] = useState<CertificateCategory>("All");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [previewCert, setPreviewCert] = useState<Certificate | null>(null);

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

  // Handle ESC key to close modal
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setPreviewCert(null);
    }
    if (previewCert) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [previewCert]);

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
          subtitle="Accredited certifications and industry credentials validating expertise in Cloud Architecture, AI, Full Stack Development, and Computer Applications."
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
        <div className="mt-12 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {filteredCertificates.map((cert) => (
            <article
              key={cert.id}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-surface-border bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-card-hover"
            >
              {/* Top Accent Gradient Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-blue-400 to-cyan-400" />

              {/* Certificate Image Preview Card Header */}
              <div
                onClick={() => setPreviewCert(cert)}
                className="relative cursor-pointer overflow-hidden border-b border-surface-border bg-slate-100 aspect-[16/10]"
              >
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-ink/0 transition-colors duration-300 group-hover:bg-ink/30 flex items-center justify-center">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3.5 py-1.5 text-xs font-semibold text-ink shadow-md opacity-0 transition-opacity duration-300 group-hover:opacity-100 backdrop-blur-sm">
                    <Eye size={14} className="text-primary" /> View Certificate
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Header: Issuer + Date */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary-light text-primary flex-none">
                        <Award size={18} />
                      </span>
                      <div>
                        <p className="flex items-center gap-1 text-xs font-semibold text-primary">
                          <Building2 size={12} /> {cert.issuer}
                        </p>
                        <span className="text-[10px] font-medium uppercase tracking-wider text-ink-soft/70">
                          {cert.category}
                        </span>
                      </div>
                    </div>

                    <span className="inline-flex items-center gap-1 rounded-full bg-surface-muted px-2.5 py-1 text-[11px] font-medium text-ink-soft border border-surface-border flex-none">
                      <Calendar size={11} /> {cert.issueDate}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mt-3.5 font-serif text-lg font-bold leading-snug text-ink group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-xs leading-relaxed text-ink-soft line-clamp-3">
                    {cert.description}
                  </p>

                  {/* Credential ID badge with copy action */}
                  {cert.credentialId && (
                    <div className="mt-3.5 flex items-center justify-between rounded-lg border border-surface-border bg-surface-muted/80 px-3 py-1.5 text-xs text-ink-soft">
                      <span className="flex items-center gap-1 font-mono text-[11px] font-medium truncate mr-2">
                        <ShieldCheck size={13} className="text-primary flex-none" />
                        <span className="truncate">{cert.credentialId}</span>
                      </span>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          copyCredentialId(cert.credentialId!);
                        }}
                        title="Copy Credential ID"
                        className="inline-flex items-center gap-1 text-[11px] font-medium text-ink-soft hover:text-primary transition-colors flex-none"
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
                  <div className="mt-3.5">
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-ink-soft/75">
                      Skills &amp; Competencies
                    </p>
                    <div className="mt-1.5 flex flex-wrap gap-1.5">
                      {cert.skills.slice(0, 4).map((skill) => (
                        <span
                          key={skill}
                          className="rounded-md bg-surface-muted px-2 py-0.5 text-[11px] font-medium text-ink-soft border border-surface-border/80"
                        >
                          {skill}
                        </span>
                      ))}
                      {cert.skills.length > 4 && (
                        <span className="rounded-md bg-primary-light/50 px-2 py-0.5 text-[11px] font-semibold text-primary">
                          +{cert.skills.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="mt-5 border-t border-surface-border pt-4 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setPreviewCert(cert)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl bg-primary-light px-3 py-2 text-xs font-semibold text-primary transition-all duration-200 hover:bg-primary hover:text-white"
                  >
                    <Eye size={13} /> View Certificate
                  </button>
                  {cert.credentialUrl && cert.credentialUrl.startsWith("http") && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1 rounded-xl border border-surface-border bg-white px-3 py-2 text-xs font-semibold text-ink-soft transition-all duration-200 hover:border-primary hover:text-primary"
                      title="Verify online"
                    >
                      <ExternalLink size={13} /> Verify
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Modal Lightbox for Certificate View */}
      {previewCert && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-ink/80 backdrop-blur-sm animate-fade-in"
          onClick={() => setPreviewCert(null)}
        >
          <div
            className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl bg-white shadow-2xl border border-surface-border flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-surface-border px-6 py-4 bg-surface-muted/50 sticky top-0 z-10">
              <div className="pr-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                  {previewCert.issuer} &bull; {previewCert.category}
                </p>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-ink truncate">
                  {previewCert.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setPreviewCert(null)}
                aria-label="Close modal"
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-white border border-surface-border text-ink-soft hover:text-ink hover:bg-surface-muted transition-colors flex-none"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Image Container */}
            <div className="relative w-full bg-slate-100 flex items-center justify-center p-4 sm:p-6 min-h-[300px]">
              <div className="relative w-full aspect-[16/11] max-h-[60vh] rounded-lg overflow-hidden shadow-lg border border-surface-border bg-white">
                <Image
                  src={previewCert.image}
                  alt={previewCert.title}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Modal Footer Details & Actions */}
            <div className="p-6 bg-white border-t border-surface-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="text-xs text-ink-soft">
                <p className="font-semibold text-ink">Issued: {previewCert.issueDate}</p>
                {previewCert.credentialId && (
                  <p className="mt-0.5 font-mono text-[11px]">ID: {previewCert.credentialId}</p>
                )}
              </div>

              <div className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto">
                <a
                  href={previewCert.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-xl border border-surface-border bg-white px-4 py-2 text-xs font-semibold text-ink transition-colors hover:border-primary hover:text-primary"
                >
                  <ExternalLink size={13} /> Full Size Image
                </a>

                {previewCert.pdfUrl && (
                  <a
                    href={previewCert.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-xl bg-primary px-4 py-2 text-xs font-semibold text-white shadow-sm transition-all hover:bg-primary-dark"
                  >
                    <Download size={13} /> View / Download PDF
                  </a>
                )}

                {previewCert.credentialUrl && previewCert.credentialUrl.startsWith("http") && (
                  <a
                    href={previewCert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-xl bg-primary-light px-4 py-2 text-xs font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
                  >
                    <CheckCircle size={13} /> Verify Online
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
