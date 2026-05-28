import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteShell } from "@/components/site-shell";
import { EditorialArticle } from "@/components/brand/editorial-article";
import { ConsultationCTA } from "@/components/brand/consultation-cta";
import { resources } from "@/content/resources";
import { buildPageMetadata, getBreadcrumbSchema } from "@/lib/seo";

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
  return buildPageMetadata({
    title: item.title,
    description: item.description,
    path: `/resources/${item.slug}`,
    type: "article",
  });
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
        {item.body?.map((paragraph) => <p key={paragraph.slice(0, 48)}>{paragraph}</p>)}
        {item.prompt ? (
          <div className="mt-6">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#2e5e4e]">
              Copy this prompt
            </p>
            <pre className="mt-3 overflow-x-auto rounded-xl border hairline bg-[#f7f6f3] p-5 text-sm leading-relaxed whitespace-pre-wrap text-[#333]">
              {item.prompt}
            </pre>
          </div>
        ) : null}
        {!item.body?.length && !item.prompt ? (
          <p>
            This resource page is ready for Cloudinary assets, downloadable files, and embedded previews
            with newsletter-gated distribution.
          </p>
        ) : null}
      </EditorialArticle>
      <ConsultationCTA />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </SiteShell>
  );
}
