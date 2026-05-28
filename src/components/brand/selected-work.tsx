import Link from "next/link";
import { homeFeaturedProjects } from "@/content/projects";

export function SelectedWork() {
  return (
    <section className="mt-28 space-y-10" aria-labelledby="selected-work-heading">
      <div className="flex items-end justify-between gap-4">
        <h2 id="selected-work-heading" className="section-title text-4xl font-semibold md:text-5xl">
          Selected work
        </h2>
        <Link href="/projects" className="text-sm text-[#5f5f5f] hover:text-[#132232]">
          View all projects ↗
        </Link>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {homeFeaturedProjects.map((project) => (
          <Link
            key={project.slug}
            href={project.href}
            aria-label={`${project.title}: ${project.summary}`}
            className="group flex flex-col rounded-[1.35rem] border hairline bg-white/70 p-6 transition hover:border-black/20"
          >
            <p className="text-xs uppercase tracking-[0.14em] text-[#6f6f6f]">{project.category}</p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[#132232]">{project.title}</h3>
            <p className="mt-2 flex-1 text-sm text-[#606060]">{project.summary}</p>
            <p className="mt-4 text-xs uppercase tracking-[0.12em] text-[#2e5e4e]">{project.stack}</p>
            <span className="mt-5 text-sm font-medium text-[#132232]">Open project ↗</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
