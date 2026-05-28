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

export function generateMetadata({
  params,
}: {
  params: PageParams;
}): Metadata {
  const content = dynamicRouteContent[params.slug];
  if (!content) {
    return {};
  }

  return {
    title: content.title,
    description: content.description,
    alternates: {
      canonical: `https://dhruvsolanki.com/${params.slug}`,
    },
    openGraph: {
      title: `${content.title} | Dhruv Solanki`,
      description: content.description,
      url: `https://dhruvsolanki.com/${params.slug}`,
      type: "website",
    },
  };
}

export default function DynamicRoutePage({ params }: { params: PageParams }) {
  const content = dynamicRouteContent[params.slug];
  if (!content) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: content.title,
    description: content.description,
    url: `https://dhruvsolanki.com/${params.slug}`,
    about: {
      "@type": "Person",
      name: "Dhruv Solanki",
      alternateName: ["Dhruv Solankii", "Dhruv World"],
    },
  };
  const breadcrumbSchema = getBreadcrumbSchema(`/${params.slug}`, content.title);

  return (
    <>
      <RouteTemplate title={content.title} description={content.description} />
      <section className="mx-auto mt-6 w-full max-w-6xl rounded-3xl border border-black/5 bg-white p-8">
        <h2 className="text-xl font-semibold">Related Paths</h2>
        <div className="mt-4 flex flex-wrap gap-3 text-sm">
          <Link href="/dhruv-solanki" className="rounded-full border border-black/10 px-4 py-2">
            Dhruv Solanki
          </Link>
          <Link href="/blog" className="rounded-full border border-black/10 px-4 py-2">
            Blog
          </Link>
          <Link href="/contact" className="rounded-full border border-black/10 px-4 py-2">
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
