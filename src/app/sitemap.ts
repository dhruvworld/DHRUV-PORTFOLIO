import type { MetadataRoute } from "next";
import { dynamicSlugs } from "@/lib/route-content";
import { siteConfig } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.siteUrl;
  const now = new Date();

  const staticRoutes = [
    "/",
    "/about",
    "/portfolio",
    "/projects",
    "/blog",
    "/resources",
    "/contact",
    "/quantis-global",
  ];

  const staticEntries = staticRoutes.map((route) => ({
    url: `${base}${route}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: route === "/" ? 1 : 0.8,
  }));

  const dynamicEntries = dynamicSlugs.map((slug) => ({
    url: `${base}/${slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticEntries, ...dynamicEntries];
}
