import Image from "next/image";
import { Download, ImageDown, ExternalLink, CheckCircle2 } from "lucide-react";
import { portfolio } from "@/data/portfolio";

export default function ResumePreview() {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.4fr_1fr]">
      {/* Resume document preview */}
      <div className="rounded-2xl border border-surface-border bg-surface-muted p-4 shadow-card sm:p-6 flex justify-center items-start">
        <div className="relative w-full max-w-2xl overflow-hidden rounded-lg border border-surface-border bg-white shadow-card-hover">
          <Image
            src={portfolio.resumePreviewImagePath}
            alt={`Resume preview for ${portfolio.name}`}
            width={1700}
            height={2200}
            className="w-full h-auto object-contain block"
            priority
          />
        </div>
      </div>

      {/* Right action panel */}
      <div className="flex flex-col gap-4">
        <a
          href={portfolio.resumePdfPath}
          download
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3.5 text-sm font-semibold text-white shadow-card transition-colors hover:bg-primary-dark"
        >
          <Download size={16} /> Download PDF Resume
        </a>
        <a
          href={portfolio.resumePreviewImagePath}
          download
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-surface-border bg-white px-5 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-primary hover:text-primary"
        >
          <ImageDown size={16} /> Download PNG Image
        </a>
        <a
          href={portfolio.resumePdfPath}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-surface-border bg-white px-5 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-primary hover:text-primary"
        >
          <ExternalLink size={16} /> Open PDF Document
        </a>

        {/* Document details */}
        <div className="mt-2 rounded-xl border border-surface-border bg-white p-5 shadow-card">
          <p className="flex items-center gap-2 text-sm font-semibold text-ink">
            <CheckCircle2 size={15} className="text-primary" /> Document Details
          </p>
          <dl className="mt-4 flex flex-col gap-3 text-sm">
            <div className="flex items-center justify-between">
              <dt className="text-ink-soft">Version</dt>
              <dd className="font-semibold text-primary">Latest Edition</dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="text-ink-soft">PDF File</dt>
              <dd className="font-medium text-ink">resume.pdf</dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="text-ink-soft">Image Preview</dt>
              <dd className="font-medium text-ink">High Res Page Preview</dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="text-ink-soft">Page Layout</dt>
              <dd className="font-medium text-ink">A4 Standard Format</dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="text-ink-soft">Status</dt>
              <dd className="inline-flex items-center gap-1 font-semibold text-green-600">
                <CheckCircle2 size={14} /> Ready for Review
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
