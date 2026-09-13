import { ExternalLink, Github } from "lucide-react";
import type { Project } from "@/data/projects";
import ProjectCarousel from "@/components/ProjectCarousel";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-surface-border bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-card-hover">
      <div className="h-1 w-full bg-gradient-to-r from-primary to-blue-700" />

      {/* Header with consistent min-height for uniform horizontal alignment */}
      <div className="flex items-center gap-3 px-6 py-4 min-h-[76px] sm:min-h-[82px] border-b border-surface-border/40">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-light text-sm font-bold text-primary flex-none">
          {project.number}
        </span>
        <h3 className="font-serif text-base sm:text-lg font-bold text-ink leading-snug line-clamp-2">
          {project.title}
        </h3>
      </div>

      {/* Screenshot Carousel */}
      <div className="w-full">
        <ProjectCarousel images={project.images} title={project.title} />
      </div>

      {/* Card Body with flex-1 for aligning bottom buttons */}
      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          <p className="text-sm leading-relaxed text-ink-soft min-h-[4.5rem] line-clamp-3">
            {project.description}
          </p>

          <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-ink-soft">
            Technologies Used
          </p>
          <div className="mt-2 flex flex-wrap gap-1.5 min-h-[3.75rem] content-start">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-surface-muted px-3 py-1 text-xs font-medium text-ink-soft border border-surface-border/60"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-3 border-t border-surface-border/60 pt-4">
          {project.liveDemoUrl && (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-sm transition-all hover:bg-primary-dark"
            >
              <ExternalLink size={14} /> Live Demo
            </a>
          )}
          {project.sourceCodeUrl && (
            <a
              href={project.sourceCodeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-surface-border px-5 py-2.5 text-xs sm:text-sm font-semibold text-ink transition-all hover:border-primary hover:text-primary"
            >
              <Github size={14} /> Source Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
