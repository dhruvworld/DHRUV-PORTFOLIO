import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/site-shell";
import { ConsultationCTA } from "@/components/brand/consultation-cta";
import { highlightProjects } from "@/content/projects";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Projects",
  description:
    "Projects by Dhruv Solanki: Quantis Global, Travel Website Platform, OpenSourceDisplayLink, E-Resume Portal, and Dhruv World.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <SiteShell>
      <section className="py-2 md:py-6">
        <h1 className="display-title text-5xl font-semibold tracking-tight md:text-6xl">Projects</h1>
        <p className="body-soft mt-6 max-w-4xl text-lg">
          Engineering and business builds from internships, graduate work, and founder execution — described
          precisely, without decorative imagery.
        </p>
      </section>

      <section className="mt-12 grid gap-8">
        {highlightProjects.map((project) => (
          <article
            id={project.slug}
            key={project.slug}
            className="scroll-mt-32 rounded-[1.35rem] border hairline bg-white/65 p-6 md:p-8 lg:scroll-mt-36"
          >
            <div className="flex flex-wrap items-center gap-2">
              <p className="text-xs uppercase tracking-[0.14em] text-[#2e5e4e]">{project.category}</p>
              <span className="rounded-full bg-[#f3f1ec] px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wide text-[#2e5e4e]">
                {project.kindLabel}
              </span>
            </div>
            <h2 className="section-title mt-2 text-4xl font-semibold">{project.title}</h2>
            <p className="mt-2 text-sm text-[#5f5f5f]">{project.stack}</p>
            <p className="body-soft mt-4 max-w-3xl">{project.summary}</p>
            <ul className="mt-6 max-w-4xl space-y-3 text-sm text-[#4f4f4f] md:text-base">
              {project.details.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={project.href}
                className="cta-pill rounded-full bg-[#132232] px-5 py-2.5 text-sm font-medium text-[#f8f7f4]"
              >
                View details ↗
              </Link>
              {project.caseStudySlug ? (
                <Link
                  href={`/case-studies/${project.caseStudySlug}`}
                  className="cta-pill rounded-full border border-black/15 px-5 py-2.5 text-sm font-medium text-[#132232]"
                >
                  Case study
                </Link>
              ) : null}
            </div>
          </article>
        ))}
      </section>

      <ConsultationCTA />
    </SiteShell>
  );
}
