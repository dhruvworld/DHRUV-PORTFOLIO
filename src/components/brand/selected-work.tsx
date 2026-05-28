import Link from "next/link";
import { homeFeaturedProjects } from "@/content/projects";

export function SelectedWork() {
  return (
    <section className="mt-20 space-y-10" aria-labelledby="selected-work-heading">
      <div className="flex items-end justify-between gap-4">
        <h2 id="selected-work-heading" className="section-title text-4xl font-semibold md:text-5xl">
          Selected work
        </h2>
        <Link href="/projects" className="text-sm text-[#5f5f5f] hover:text-[#132232]">
          All projects ↗
        </Link>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {homeFeaturedProjects.map((project) => {
          const cardHref = project.href.startsWith("http")
            ? `/projects#${project.slug}`
            : project.href;
          return (
          <Link
            key={project.slug}
            href={cardHref}
            aria-label={`${project.title}: ${project.summary}`}
            className="group flex flex-col rounded-[1.35rem] border hairline bg-white/70 p-6 transition hover:border-black/20"
          >
            <div className="flex flex-wrap items-center gap-2">
              <p className="text-xs uppercase tracking-[0.14em] text-[#6f6f6f]">{project.category}</p>
              <span className="rounded-full bg-[#f3f1ec] px-2 py-0.5 text-[10px] uppercase tracking-wide text-[#2e5e4e]">
                {project.kindLabel}
              </span>
            </div>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[#132232]">{project.title}</h3>
            <p className="mt-2 flex-1 text-sm text-[#606060]">{project.summary}</p>
            <p className="mt-4 text-xs uppercase tracking-[0.12em] text-[#2e5e4e]">{project.stack}</p>
          </Link>
          );
        })}
      </div>
    </section>
  );
}
