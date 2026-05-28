import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";
import { ContentCard } from "@/components/content-card";
import { caseStudies } from "@/content/case-studies";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Case studies by Dhruv Solanki covering AI systems, digital identity architecture, and execution outcomes.",
};

export default function CaseStudiesPage() {
  return (
    <SiteShell>
      <section className="glass-panel creator-glow rounded-3xl p-8 shadow-sm md:p-10">
        <h1 className="display-title text-5xl font-semibold tracking-tight text-white md:text-6xl">Case Studies</h1>
        <p className="body-soft mt-4 max-w-3xl text-lg">
          Deep execution breakdowns across technology systems, AI workflows, and business outcomes.
        </p>
      </section>
      <section className="mt-8 grid gap-4 md:grid-cols-2">
        {caseStudies.map((study) => (
          <ContentCard
            key={study.slug}
            title={study.title}
            description={study.summary}
            href={`/case-studies/${study.slug}`}
            meta={`${study.domain} • ${study.outcome}`}
          />
        ))}
      </section>
    </SiteShell>
  );
}
