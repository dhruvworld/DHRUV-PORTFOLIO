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

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((entry) => entry.slug === slug);
  if (!study) return {};
  return {
    title: study.title,
    description: study.summary,
    alternates: {
      canonical: `https://dhruvsolanki.com/case-studies/${study.slug}`,
    },
  };
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const study = caseStudies.find((entry) => entry.slug === slug);
  if (!study) notFound();

  const breadcrumbSchema = getBreadcrumbSchema(
    `/case-studies/${study.slug}`,
    study.title,
  );

  return (
    <SiteShell>
      <article className="glass-panel rounded-3xl p-10 shadow-sm">
        <p className="text-xs uppercase tracking-[0.14em] text-brand-cyan">{study.domain}</p>
        <h1 className="section-title mt-3 text-4xl font-semibold tracking-tight text-white">{study.title}</h1>
        <p className="body-soft mt-4 max-w-3xl text-lg text-slate-300">{study.summary}</p>
        <p className="body-soft mt-8 text-base text-slate-300">{study.outcome}</p>
        <div className="mt-8 flex gap-3">
          <Link
            href="/case-studies"
            className="cta-pill rounded-full border border-white/20 px-4 py-2 text-sm text-white"
          >
            Back to Case Studies
          </Link>
          <Link href="/contact" className="cta-pill rounded-full border border-white/20 px-4 py-2 text-sm text-white">
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
