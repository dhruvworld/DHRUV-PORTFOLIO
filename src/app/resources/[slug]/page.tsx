import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteShell } from "@/components/site-shell";
import { EditorialArticle } from "@/components/brand/editorial-article";
import { ResourceBody } from "@/components/brand/resource-body";
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
        {item.downloadUrl ? (
          <div className="mb-8">
            <a
              href={item.downloadUrl}
              download
              target={item.downloadUrl.startsWith("http") ? "_blank" : undefined}
              rel={item.downloadUrl.startsWith("http") ? "noopener noreferrer" : undefined}
              className="inline-flex items-center gap-2 rounded-full border border-[#2e5e4e]/30 bg-[#2e5e4e] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#244a3d]"
            >
              {item.downloadLabel ?? "Download full file"}
            </a>
          </div>
        ) : null}
        {item.body?.length ? <ResourceBody lines={item.body} /> : null}
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
