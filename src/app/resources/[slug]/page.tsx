import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteShell } from "@/components/site-shell";
import { resources } from "@/content/resources";
import { getBreadcrumbSchema } from "@/lib/seo";

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
      canonical: `https://dhruvsolanki.com/resources/${item.slug}`,
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
      <article className="glass-panel rounded-3xl p-10 shadow-sm">
        <p className="text-xs uppercase tracking-[0.14em] text-brand-cyan">
          {item.type} • {item.audience}
        </p>
        <h1 className="section-title mt-3 text-4xl font-semibold tracking-tight text-slate-900">{item.title}</h1>
        <p className="body-soft mt-4 max-w-3xl text-lg text-slate-600">{item.description}</p>
        <p className="body-soft mt-8 text-base text-slate-700">
          This resource page is ready for Cloudinary assets, downloadable files, and
          embedded previews with newsletter-gated distribution.
        </p>
        <div className="mt-8">
          <Link href="/resources" className="cta-pill rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-900">
            Back to Resources
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
