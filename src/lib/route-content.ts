export type DynamicRouteContent = {
  title: string;
  description: string;
  topic: "identity" | "cluster" | "growth" | "media" | "local";
  /** Thin template pages: index for SEO hubs, noindex for duplicates/stubs */
  indexable?: boolean;
};

export const dynamicRouteContent: Record<string, DynamicRouteContent> = {
  ai: {
    title: "AI",
    description:
      "AI workflows, tools, and execution systems from Dhruv Solanki (Dhruv Solankii).",
    topic: "cluster",
    indexable: false,
  },
  business: {
    title: "Business",
    description:
      "Business systems, growth thinking, and execution insights from Dhruv World.",
    topic: "cluster",
    indexable: true,
  },
  technology: {
    title: "Technology",
    description:
      "Technology projects, stack decisions, and product engineering insights.",
    topic: "cluster",
    indexable: true,
  },
  entrepreneurship: {
    title: "Entrepreneurship",
    description:
      "Founder journey, startup systems, and entrepreneurial frameworks.",
    topic: "cluster",
    indexable: true,
  },
  gujarat: {
    title: "Gujarat",
    description:
      "Regional innovation lens and identity context for work rooted in Gujarat.",
    topic: "local",
    indexable: true,
  },
  gandhinagar: {
    title: "Gandhinagar",
    description:
      "Local profile and ecosystem context for Dhruv Solanki in Gandhinagar.",
    topic: "local",
    indexable: true,
  },
  kalol: {
    title: "Kalol",
    description:
      "Local profile and search identity context for Dhruv Solankii in Kalol.",
    topic: "local",
    indexable: true,
  },
  "dhruv-solanki": {
    title: "Dhruv Solanki",
    description:
      "Official professional identity page for Dhruv Solanki across AI, business, and technology.",
    topic: "identity",
    indexable: true,
  },
  "dhruv-solankii": {
    title: "Dhruv Solankii",
    description:
      "Creator identity page for Dhruv Solankii and internet-native media presence.",
    topic: "identity",
    indexable: true,
  },
  "dhruv-world": {
    title: "Dhruv World",
    description:
      "Media ecosystem identity page connecting projects, blog, and digital content systems.",
    topic: "media",
    indexable: true,
  },
  media: {
    title: "Media",
    description:
      "Media features, publishing ecosystem, and content visibility hub.",
    topic: "media",
    indexable: false,
  },
  speaking: {
    title: "Speaking",
    description:
      "Speaking profile, topics, and event collaboration opportunities.",
    topic: "growth",
    indexable: false,
  },
  achievements: {
    title: "Achievements",
    description:
      "Milestones, notable outcomes, and credibility markers across projects.",
    topic: "growth",
    indexable: false,
  },
  collaborations: {
    title: "Collaborations",
    description:
      "Partnership opportunities for products, content, and business initiatives.",
    topic: "growth",
    indexable: false,
  },
  newsletters: {
    title: "Newsletters",
    description:
      "Newsletter hub for AI, technology, business, and founder execution insights.",
    topic: "growth",
    indexable: false,
  },
  tools: {
    title: "Tools",
    description:
      "Practical tools, templates, and systems from Dhruv World builds.",
    topic: "growth",
    indexable: false,
  },
  "case-studies": {
    title: "Case Studies",
    description:
      "Detailed implementation breakdowns across products, workflows, and business projects.",
    topic: "growth",
    indexable: false,
  },
  "startup-journey": {
    title: "Startup Journey",
    description:
      "Student-to-founder build log with learnings, systems, and progress updates.",
    topic: "growth",
    indexable: false,
  },
  now: {
    title: "Now",
    description:
      "Current focus areas, active projects, and short-term priorities.",
    topic: "growth",
    indexable: false,
  },
};

export const dynamicSlugs = Object.keys(dynamicRouteContent);

export function isIndexableClusterSlug(slug: string): boolean {
  return dynamicRouteContent[slug]?.indexable !== false;
}
