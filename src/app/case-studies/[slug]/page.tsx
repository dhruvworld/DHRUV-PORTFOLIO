import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteShell } from "@/components/site-shell";
import { caseStudies } from "@/content/case-studies";
import { getBreadcrumbSchema } from "@/lib/seo";

type Params = { slug: string };

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const study = caseStudies.find((entry) => entry.slug === params.slug);
  if (!study) return {};
  return {
    title: study.title,
    description: study.summary,
    alternates: {
      canonical: `https://dhruvsolanki.com/case-studies/${study.slug}`,
    },
  };
}

export default function CaseStudyDetailPage({ params }: { params: Params }) {
  const study = caseStudies.find((entry) => entry.slug === params.slug);
  if (!study) notFound();

  const breadcrumbSchema = getBreadcrumbSchema(
    `/case-studies/${study.slug}`,
    study.title,
  );

  return (
    <SiteShell>
      <article className="rounded-3xl border border-black/5 bg-white p-10 shadow-sm">
        <p className="text-sm text-brand-gold">{study.domain}</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight">{study.title}</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-muted">{study.summary}</p>
        <p className="mt-8 text-base leading-8 text-foreground">{study.outcome}</p>
        <div className="mt-8 flex gap-3">
          <Link
            href="/case-studies"
            className="rounded-full border border-black/10 px-4 py-2 text-sm"
          >
            Back to Case Studies
          </Link>
          <Link href="/contact" className="rounded-full border border-black/10 px-4 py-2 text-sm">
            Collaborate
          </Link>
        </div>
      </article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </SiteShell>
  );
}
