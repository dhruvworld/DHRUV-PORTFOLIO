import Link from "next/link";
import { technicalSkills } from "@/content/skills";
import { highlightProjects } from "@/content/projects";

export function CoreStacks() {
  return (
    <section
      className="mt-28 rounded-[2rem] bg-[#d9aa3f] px-6 py-9 md:px-10 md:py-11"
      aria-labelledby="core-stacks-heading"
    >
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 id="core-stacks-heading" className="section-title text-4xl font-semibold text-[#132232]">
            Stack &amp; projects
          </h2>
          <p className="mt-2 text-sm text-[#3f3f3f]">Precise tooling from production work and graduate study</p>
        </div>
        <Link
          href="/projects"
          className="text-sm font-medium text-[#132232] underline decoration-black/25 underline-offset-4"
        >
          All projects ↗
        </Link>
      </div>

      <ul className="mt-8 flex flex-wrap gap-2" aria-label="Technical skills">
        {technicalSkills.map((skill) => (
          <li
            key={skill}
            className="rounded-full border border-black/12 bg-white/85 px-4 py-2 text-sm text-[#132232]"
          >
            {skill}
          </li>
        ))}
      </ul>

      <ul className="mt-8 grid gap-4 md:grid-cols-2" aria-label="Recent projects">
        {highlightProjects.slice(0, 4).map((project) => (
          <li key={project.slug}>
            <Link
              href={project.href}
              className="block rounded-xl border border-black/10 bg-white/80 p-5 transition hover:border-black/20"
              aria-label={`${project.title}: ${project.summary}`}
            >
              <p className="text-xs uppercase tracking-[0.12em] text-[#2e5e4e]">{project.stack}</p>
              <p className="mt-2 font-medium text-[#132232]">{project.title}</p>
              <p className="mt-1 text-sm text-[#555]">{project.summary}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
