import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";
import { PageIntro } from "@/components/brand/page-intro";
import { ConsultationCTA } from "@/components/brand/consultation-cta";
import { ContentCard } from "@/components/content-card";
import { caseStudies } from "@/content/case-studies";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Case Studies",
  description:
    "Case studies by Dhruv Solanki — deep execution breakdowns starting with Quantis Global, covering business strategy, brand systems, and trade operations.",
  path: "/case-studies",
});

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
