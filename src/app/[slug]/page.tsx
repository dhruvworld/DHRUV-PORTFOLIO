import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteShell } from "@/components/site-shell";
import { PageIntro } from "@/components/brand/page-intro";
import { dynamicRouteContent, dynamicSlugs } from "@/lib/route-content";
import { getBreadcrumbSchema, siteConfig } from "@/lib/seo";

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

  return {
    title: content.title,
    description: content.description,
    alternates: {
      canonical: `${siteConfig.siteUrl}/${slug}`,
    },
    openGraph: {
      title: `${content.title} | Dhruv Solanki`,
      description: content.description,
      url: `${siteConfig.siteUrl}/${slug}`,
      type: "website",
    },
  };
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

  return (
    <SiteShell>
      <PageIntro eyebrow="Identity Page" title={content.title} description={content.description} />
      <section className="mt-10 rounded-2xl border hairline bg-white/60 p-7">
        <h2 className="section-title text-2xl font-semibold">Related Paths</h2>
        <div className="mt-4 flex flex-wrap gap-3 text-sm">
          <Link href="/about" className="cta-pill rounded-full border border-black/15 px-4 py-2 text-[#132232]">
            About
          </Link>
          <Link href="/blog" className="cta-pill rounded-full border border-black/15 px-4 py-2 text-[#132232]">
            Blog
          </Link>
          <Link href="/contact" className="cta-pill rounded-full border border-black/15 px-4 py-2 text-[#132232]">
            Contact
          </Link>
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
