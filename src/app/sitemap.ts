import type { MetadataRoute } from "next";
import { blogPosts } from "@/content/blog-posts";
import { caseStudies } from "@/content/case-studies";
import { resources } from "@/content/resources";
import { dynamicSlugs, isIndexableClusterSlug } from "@/lib/route-content";
import { siteConfig } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.siteUrl;
  const now = new Date();

  const staticRoutes = [
    "/",
    "/about",
    "/founder",
    "/projects",
    "/blog",
    "/case-studies",
    "/resources",
    "/contact",
    "/quantis-global",
    "/ai",
    "/search",
    "/newsletters",
  ];

  const staticEntries = staticRoutes.map((route) => ({
    url: `${base}${route}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: route === "/" ? 1 : route === "/projects" || route === "/about" ? 0.9 : 0.8,
  }));

  const clusterEntries = dynamicSlugs.filter(isIndexableClusterSlug).map((slug) => ({
    url: `${base}/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blogEntries = blogPosts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  const resourceEntries = resources.map((item) => ({
    url: `${base}/resources/${item.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const caseStudyEntries = caseStudies.map((study) => ({
    url: `${base}/case-studies/${study.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  const utilityEntries = [
    {
      url: `${base}/llms.txt`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.3,
    },
  ];

  return [
    ...staticEntries,
    ...clusterEntries,
    ...blogEntries,
    ...resourceEntries,
    ...caseStudyEntries,
    ...utilityEntries,
  ];
}
