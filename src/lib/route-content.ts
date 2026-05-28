export type DynamicRouteContent = {
  title: string;
  description: string;
  topic: "identity" | "cluster" | "growth" | "media" | "local";
};

export const dynamicRouteContent: Record<string, DynamicRouteContent> = {
  ai: {
    title: "AI",
    description:
      "AI workflows, tools, and execution systems from Dhruv Solanki (Dhruv Solankii).",
    topic: "cluster",
  },
  business: {
    title: "Business",
    description:
      "Business systems, growth thinking, and execution insights from Dhruv World.",
    topic: "cluster",
  },
  technology: {
    title: "Technology",
    description:
      "Technology projects, stack decisions, and product engineering insights.",
    topic: "cluster",
  },
  entrepreneurship: {
    title: "Entrepreneurship",
    description:
      "Founder journey, startup systems, and entrepreneurial frameworks.",
    topic: "cluster",
  },
  gujarat: {
    title: "Gujarat",
    description:
      "Regional innovation lens and identity context for work rooted in Gujarat.",
    topic: "local",
  },
  gandhinagar: {
    title: "Gandhinagar",
    description:
      "Local profile and ecosystem context for Dhruv Solanki in Gandhinagar.",
    topic: "local",
  },
  kalol: {
    title: "Kalol",
    description:
      "Local profile and search identity context for Dhruv Solankii in Kalol.",
    topic: "local",
  },
  "dhruv-solanki": {
    title: "Dhruv Solanki",
    description:
      "Official professional identity page for Dhruv Solanki across AI, business, and technology.",
    topic: "identity",
  },
  "dhruv-solankii": {
    title: "Dhruv Solankii",
    description:
      "Creator identity page for Dhruv Solankii and internet-native media presence.",
    topic: "identity",
  },
  "dhruv-world": {
    title: "Dhruv World",
    description:
      "Media ecosystem identity page connecting projects, blog, and digital content systems.",
    topic: "media",
  },
  media: {
    title: "Media",
    description:
      "Media features, publishing ecosystem, and content visibility hub.",
    topic: "media",
  },
  speaking: {
    title: "Speaking",
    description:
      "Speaking profile, topics, and event collaboration opportunities.",
    topic: "growth",
  },
  achievements: {
    title: "Achievements",
    description:
      "Milestones, notable outcomes, and credibility markers across projects.",
    topic: "growth",
  },
  collaborations: {
    title: "Collaborations",
    description:
      "Partnership opportunities for products, content, and business initiatives.",
    topic: "growth",
  },
  newsletters: {
    title: "Newsletters",
    description:
      "Newsletter hub for AI, technology, business, and founder execution insights.",
    topic: "growth",
  },
  tools: {
    title: "Tools",
    description:
      "Practical tools, templates, and systems from Dhruv World builds.",
    topic: "growth",
  },
  "case-studies": {
    title: "Case Studies",
    description:
      "Detailed implementation breakdowns across products, workflows, and business projects.",
    topic: "growth",
  },
  "startup-journey": {
    title: "Startup Journey",
    description:
      "Student-to-founder build log with learnings, systems, and progress updates.",
    topic: "growth",
  },
  now: {
    title: "Now",
    description:
      "Current focus areas, active projects, and short-term priorities.",
    topic: "growth",
  },
};

export const dynamicSlugs = Object.keys(dynamicRouteContent);
