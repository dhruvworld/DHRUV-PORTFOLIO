import { SiteShell } from "@/components/site-shell";
import { ContentCard } from "@/components/content-card";
import { caseStudies } from "@/content/case-studies";

export default function CaseStudiesPage() {
  return (
    <SiteShell>
      <section className="rounded-3xl border border-black/5 bg-white p-10 shadow-sm">
        <h1 className="text-4xl font-semibold tracking-tight">Case Studies</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-muted">
          Deep implementation breakdowns across technology, AI systems, and business
          execution.
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
