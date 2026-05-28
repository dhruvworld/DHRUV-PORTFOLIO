export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  tags: string[];
  excerpt: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "how-i-built-personal-brand-website",
    title: "How I Built My Personal Brand Website",
    description:
      "A practical breakdown of building a long-term digital identity system, not just a portfolio.",
    publishedAt: "2026-05-28",
    tags: ["branding", "seo", "personal-brand"],
    excerpt:
      "Why identity architecture, entity SEO, and content systems matter more than a one-page portfolio.",
  },
  {
    slug: "ai-tools-every-student-should-use",
    title: "AI Tools Every Student Should Use",
    description:
      "A curated workflow of high-leverage AI tools for student builders and creators.",
    publishedAt: "2026-05-29",
    tags: ["ai", "productivity", "students"],
    excerpt:
      "A stack for research, writing, prototyping, and execution with minimal complexity.",
  },
  {
    slug: "modern-portfolio-strategy-2026",
    title: "Modern Portfolio Strategy in 2026",
    description:
      "Portfolio strategy that improves trust, search visibility, and lead quality.",
    publishedAt: "2026-05-30",
    tags: ["portfolio", "strategy", "growth"],
    excerpt:
      "A modern framework for portfolio positioning, proof architecture, and conversion.",
  },
];
