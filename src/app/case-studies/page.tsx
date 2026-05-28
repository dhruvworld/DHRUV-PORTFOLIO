import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";
import { PageIntro } from "@/components/brand/page-intro";
import { ConsultationCTA } from "@/components/brand/consultation-cta";
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
      <PageIntro
        eyebrow="Proof"
        title="Case Studies"
        description="Deep execution breakdowns across technology systems, AI workflows, and business outcomes."
      />
      <section className="mt-10 grid gap-4 md:grid-cols-2">
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
      <ConsultationCTA />
    </SiteShell>
  );
}
