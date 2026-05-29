import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteShell } from "@/components/site-shell";
import { PageIntro } from "@/components/brand/page-intro";
import { dynamicRouteContent, dynamicSlugs, isIndexableClusterSlug } from "@/lib/route-content";
import { getRelatedLinksForTopic } from "@/lib/related-links";
import { buildPageMetadata, getBreadcrumbSchema, siteConfig } from "@/lib/seo";

type PageParams = {
  slug: string;
};

export function generateStaticParams() {
  return dynamicSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<PageParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const content = dynamicRouteContent[slug];
  if (!content) {
    return {};
  }

  const meta = buildPageMetadata({
    title: content.title,
    description: content.description,
    path: `/${slug}`,
  });

  if (!isIndexableClusterSlug(slug)) {
    return {
      ...meta,
      robots: { index: false, follow: true },
    };
  }

  return meta;
}

export default async function DynamicRoutePage({
  params,
}: {
  params: Promise<PageParams>;
}) {
  const { slug } = await params;
  const content = dynamicRouteContent[slug];
  if (!content) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: content.title,
    description: content.description,
    url: `${siteConfig.siteUrl}/${slug}`,
    about: {
      "@type": "Person",
      name: "Dhruv Solanki",
      alternateName: ["Dhruv Solankii", "Dhruv World"],
    },
  };
  const breadcrumbSchema = getBreadcrumbSchema(`/${slug}`, content.title);
  const relatedLinks = getRelatedLinksForTopic(content.topic);
  const eyebrow =
    content.topic === "cluster"
      ? "Topic Cluster"
      : content.topic === "local"
        ? "Regional Identity"
        : content.topic === "media"
          ? "Media Ecosystem"
          : "Identity Page";

  return (
    <SiteShell>
      <PageIntro eyebrow={eyebrow} title={content.title} description={content.description} />
      {content.body?.length ? (
        <div className="mt-10 space-y-10">
          {content.body.map((section) => (
            <section key={section.heading} className="max-w-3xl">
              <h2 className="section-title text-2xl font-semibold tracking-tight text-[#132232]">
                {section.heading}
              </h2>
              <div className="mt-4 space-y-4 text-base leading-relaxed text-[#4f4f4f]">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 50)}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      ) : null}
      <section className="mt-10 rounded-2xl border hairline bg-white/60 p-7">
        <h2 className="section-title text-2xl font-semibold">Related paths</h2>
        <div className="mt-4 flex flex-wrap gap-3 text-sm">
          {relatedLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="cta-pill rounded-full border border-black/15 px-4 py-2 text-[#132232]"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </SiteShell>
  );
}
