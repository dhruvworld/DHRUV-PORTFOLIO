import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/site-shell";
import { ConsultationCTA } from "@/components/brand/consultation-cta";
import { EditorialImage } from "@/components/brand/editorial-image";
import { highlightProjects } from "@/content/projects";
import { mediaAssets } from "@/lib/media";
import { siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected projects by Dhruv Solanki across Quantis Global, AI workflows, productivity tools, and digital identity systems.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/projects`,
  },
};

export default function ProjectsPage() {
  return (
    <SiteShell>
      <section className="py-2 md:py-6">
        <h1 className="display-title text-5xl font-semibold tracking-tight md:text-6xl">Projects</h1>
        <p className="body-soft mt-6 max-w-4xl text-lg">
          Selected builds across business execution, AI workflows, and product engineering.
        </p>
      </section>

      <section className="mt-12 grid gap-12">
        {highlightProjects.map((project, index) => {
          const visual = mediaAssets.work[index % mediaAssets.work.length];
          return (
            <article
              id={project.slug}
              key={project.slug}
              className="scroll-mt-28 overflow-hidden rounded-[1.35rem] border hairline bg-white/65"
            >
              <div className="relative aspect-[16/8] bg-[#eceae5]">
                <EditorialImage asset={visual} className="grayscale-[12%]" />
              </div>
              <div className="border-t hairline p-6 md:p-8">
                <h2 className="section-title text-4xl font-semibold">{project.title}</h2>
                <p className="mt-2 text-sm uppercase tracking-[0.14em] text-[#2e5e4e]">{project.stack}</p>
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
                    View project ↗
                  </Link>
                  {project.caseStudySlug ? (
                    <Link
                      href={`/case-studies/${project.caseStudySlug}`}
                      className="cta-pill rounded-full border border-black/15 px-5 py-2.5 text-sm font-medium text-[#132232]"
                    >
                      Read case study
                    </Link>
                  ) : null}
                </div>
              </div>
            </article>
          );
        })}
      </section>

      <ConsultationCTA />
    </SiteShell>
  );
}
