import { ExternalLink, Github } from "lucide-react";
import type { Project } from "@/data/projects";
import ProjectCarousel from "@/components/ProjectCarousel";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-surface-border bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
      <div className="h-1 w-full bg-gradient-to-r from-primary to-blue-700" />

      <div className="flex items-center gap-3 px-6 pt-5">
        <span className="font-serif text-sm font-bold text-primary">{project.number}</span>
        <h3 className="font-serif text-lg font-bold text-ink">{project.title}</h3>
      </div>

      <div className="mt-4">
        <ProjectCarousel images={project.images} title={project.title} />
      </div>

      <div className="px-6 py-5">
        <p className="text-sm leading-relaxed text-ink-soft">{project.description}</p>

        <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-ink-soft">
          Technologies Used
        </p>
        <div className="mt-2 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-surface-muted px-3 py-1 text-xs font-medium text-ink-soft"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-3">
          {project.liveDemoUrl && (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
            >
              <ExternalLink size={14} /> Live Demo
            </a>
          )}
          {project.sourceCodeUrl && (
            <a
              href={project.sourceCodeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-surface-border px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-primary hover:text-primary"
            >
              <Github size={14} /> Source Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
