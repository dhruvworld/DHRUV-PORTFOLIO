import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteShell } from "@/components/site-shell";
import { EditorialArticle } from "@/components/brand/editorial-article";
import { ConsultationCTA } from "@/components/brand/consultation-cta";
import { resources } from "@/content/resources";
import { getBreadcrumbSchema, siteConfig } from "@/lib/seo";

type Params = { slug: string };

export function generateStaticParams() {
  return resources.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = resources.find((resource) => resource.slug === slug);
  if (!item) return {};
  return {
    title: item.title,
    description: item.description,
    alternates: {
      canonical: `${siteConfig.siteUrl}/resources/${item.slug}`,
    },
  };
}

export default async function ResourceDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const item = resources.find((resource) => resource.slug === slug);
  if (!item) notFound();

  const breadcrumbSchema = getBreadcrumbSchema(`/resources/${item.slug}`, item.title);

  return (
    <SiteShell>
      <EditorialArticle
        meta={`${item.type} • ${item.audience}`}
        title={item.title}
        description={item.description}
        links={[{ href: "/resources", label: "Back to Resources" }]}
      >
        <p>
          This resource page is ready for Cloudinary assets, downloadable files, and embedded previews
          with newsletter-gated distribution.
        </p>
      </EditorialArticle>
      <ConsultationCTA />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </SiteShell>
  );
}
