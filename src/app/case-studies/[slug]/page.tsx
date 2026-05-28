import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteShell } from "@/components/site-shell";
import { EditorialArticle } from "@/components/brand/editorial-article";
import { ConsultationCTA } from "@/components/brand/consultation-cta";
import { caseStudies } from "@/content/case-studies";
import { RelatedCaseStudies } from "@/components/brand/related-case-studies";
import { buildPageMetadata, getBreadcrumbSchema, getCaseStudySchema } from "@/lib/seo";

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
  return buildPageMetadata({
    title: study.title,
    description: study.summary,
    path: `/case-studies/${study.slug}`,
    type: "article",
  });
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const study = caseStudies.find((entry) => entry.slug === slug);
  if (!study) notFound();

  const breadcrumbSchema = getBreadcrumbSchema(`/case-studies/${study.slug}`, study.title);
  const caseStudySchema = getCaseStudySchema({
    title: study.title,
    description: study.summary,
    slug: study.slug,
  });

  return (
    <SiteShell>
      <EditorialArticle
        meta={`${study.domain} • outcome`}
        title={study.title}
        description={study.summary}
        links={[
          { href: "/case-studies", label: "Back to Case Studies" },
          { href: "/projects", label: "View Projects" },
          { href: "/contact", label: "Collaborate" },
        ]}
      >
        {study.content.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <p className="rounded-xl border hairline bg-[#f8f7f4] p-4 text-sm text-[#444]">
          <span className="font-medium text-[#132232]">Outcome: </span>
          {study.outcome}
        </p>
      </EditorialArticle>
      <RelatedCaseStudies currentSlug={study.slug} />
      <ConsultationCTA />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudySchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </SiteShell>
  );
}
