import type { Metadata } from "next";
import { portfolio } from "@/data/portfolio";
import { projects, mobileProjects } from "@/data/projects";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: `Projects | ${portfolio.name}`,
  description: `A selection of projects built by ${portfolio.name}.`,
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Current Six Projects */}
      <SectionHeading title="My" highlight="Projects" />

      <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* Mobile Development */}
      <div className="mt-20 pt-8 sm:mt-24">
        <SectionHeading title="Mobile" highlight="Development" />

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {mobileProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

