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

export function generateMetadata({ params }: { params: Params }): Metadata {
  const item = resources.find((resource) => resource.slug === params.slug);
  if (!item) return {};
  return {
    title: item.title,
    description: item.description,
    alternates: {
      canonical: `https://dhruvsolanki.com/resources/${item.slug}`,
    },
  };
}

export default function ResourceDetailPage({ params }: { params: Params }) {
  const item = resources.find((resource) => resource.slug === params.slug);
  if (!item) notFound();

  const breadcrumbSchema = getBreadcrumbSchema(`/resources/${item.slug}`, item.title);

  return (
    <SiteShell>
      <article className="rounded-3xl border border-black/5 bg-white p-10 shadow-sm">
        <p className="text-sm text-brand-gold">
          {item.type} • {item.audience}
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight">{item.title}</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-muted">{item.description}</p>
        <p className="mt-8 text-base leading-8 text-foreground">
          This resource page is ready for Cloudinary assets, downloadable files, and
          embedded previews with newsletter-gated distribution.
        </p>
        <div className="mt-8">
          <Link href="/resources" className="rounded-full border border-black/10 px-4 py-2 text-sm">
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
