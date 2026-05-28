import type { Metadata } from "next";
import { getSchemaSameAs } from "@/lib/social";

export const siteConfig = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://dhruvworld.netlify.app",
  name: "Dhruv Solanki",
  creatorAlias: "Dhruv Solankii",
  mediaIdentity: "Dhruv World",
  description:
    "Official digital identity platform of Dhruv Solanki (Dhruv Solankii), founder of Dhruv World.",
};

export function buildPageMetadata({
  title,
  description,
  path,
  ogImage,
  type = "website",
}: {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  type?: "website" | "article";
}): Metadata {
  const url = `${siteConfig.siteUrl}${path}`;
  const fullTitle = `${title} | ${siteConfig.name}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      type,
      siteName: siteConfig.name,
      ...(ogImage ? { images: [{ url: ogImage }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      ...(ogImage ? { images: [ogImage] } : {}),
    },
  };
}

export function getPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    alternateName: [siteConfig.creatorAlias, siteConfig.mediaIdentity],
    url: siteConfig.siteUrl,
    jobTitle: "AI, Technology, and Business Builder",
    sameAs: getSchemaSameAs(),
  };
}

export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    description: siteConfig.description,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.siteUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Quantis Global",
    url: `${siteConfig.siteUrl}/quantis-global`,
    founder: {
      "@type": "Person",
      name: siteConfig.name,
    },
    description:
      "Global trade, sourcing, import/export, and procurement initiatives.",
  };
}

export function getBreadcrumbSchema(pathname: string, name: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name,
        item: `${siteConfig.siteUrl}${pathname}`,
      },
    ],
  };
}

export function getCaseStudySchema(input: {
  title: string;
  description: string;
  slug: string;
}) {
  const url = `${siteConfig.siteUrl}/case-studies/${input.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.title,
    description: input.description,
    url,
    mainEntityOfPage: url,
    author: {
      "@type": "Person",
      name: siteConfig.name,
      alternateName: [siteConfig.creatorAlias, siteConfig.mediaIdentity],
    },
    publisher: {
      "@type": "Person",
      name: siteConfig.name,
    },
  };
}

export function getBlogPostingSchema(input: {
  title: string;
  description: string;
  slug: string;
  publishedAt: string;
  updatedAt?: string;
  image?: string;
  keywords?: string[];
}) {
  const url = `${siteConfig.siteUrl}/blog/${input.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: input.title,
    description: input.description,
    datePublished: input.publishedAt,
    dateModified: input.updatedAt ?? input.publishedAt,
    image: input.image ?? `${siteConfig.siteUrl}/opengraph-image`,
    mainEntityOfPage: url,
    keywords: input.keywords ?? [],
    author: {
      "@type": "Person",
      name: siteConfig.name,
      alternateName: [siteConfig.creatorAlias, siteConfig.mediaIdentity],
    },
    publisher: {
      "@type": "Person",
      name: siteConfig.name,
    },
  };
}
