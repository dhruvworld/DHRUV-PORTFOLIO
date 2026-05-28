import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { RouteTemplate } from "@/components/route-template";
import { dynamicRouteContent, dynamicSlugs } from "@/lib/route-content";
import { getBreadcrumbSchema } from "@/lib/seo";

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
      canonical: `https://dhruvsolanki.com/${slug}`,
    },
    openGraph: {
      title: `${content.title} | Dhruv Solanki`,
      description: content.description,
      url: `https://dhruvsolanki.com/${slug}`,
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
    url: `https://dhruvsolanki.com/${slug}`,
    about: {
      "@type": "Person",
      name: "Dhruv Solanki",
      alternateName: ["Dhruv Solankii", "Dhruv World"],
    },
  };
  const breadcrumbSchema = getBreadcrumbSchema(`/${slug}`, content.title);

  return (
    <>
      <RouteTemplate title={content.title} description={content.description} />
      <section className="glass-panel mx-auto mt-6 w-full max-w-6xl rounded-3xl p-8">
        <h2 className="section-title text-2xl font-semibold text-white">Related Paths</h2>
        <div className="mt-4 flex flex-wrap gap-3 text-sm">
          <Link href="/dhruv-solanki" className="cta-pill rounded-full border border-white/20 px-4 py-2 text-white">
            Dhruv Solanki
          </Link>
          <Link href="/blog" className="cta-pill rounded-full border border-white/20 px-4 py-2 text-white">
            Blog
          </Link>
          <Link href="/contact" className="cta-pill rounded-full border border-white/20 px-4 py-2 text-white">
            Contact
          </Link>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
