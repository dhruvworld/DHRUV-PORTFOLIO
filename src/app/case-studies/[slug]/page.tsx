import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteShell } from "@/components/site-shell";
import { EditorialArticle } from "@/components/brand/editorial-article";
import { ConsultationCTA } from "@/components/brand/consultation-cta";
import { caseStudies } from "@/content/case-studies";
import { getBreadcrumbSchema, siteConfig } from "@/lib/seo";

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
      canonical: `${siteConfig.siteUrl}/case-studies/${study.slug}`,
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

  const breadcrumbSchema = getBreadcrumbSchema(`/case-studies/${study.slug}`, study.title);

  return (
    <SiteShell>
      <EditorialArticle
        meta={study.domain}
        title={study.title}
        description={study.summary}
        links={[
          { href: "/case-studies", label: "Back to Case Studies" },
          { href: "/contact", label: "Collaborate" },
        ]}
      >
        <p>{study.outcome}</p>
      </EditorialArticle>
      <ConsultationCTA />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </SiteShell>
  );
}
