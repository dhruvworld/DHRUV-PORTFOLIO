export type CaseStudy = {
  slug: string;
  title: string;
  summary: string;
  domain: "ai" | "technology" | "business";
  outcome: string;
  content: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "digital-identity-architecture",
    title: "Digital Identity Architecture",
    summary:
      "How a personal website evolved into a connected brand, content, and search authority system.",
    domain: "technology",
    outcome: "Established unified identity architecture across routes and schema.",
    content: [
      "The starting point was fragmentation: multiple names, scattered pages, and inconsistent signals across search and social. The goal was not a prettier portfolio — it was a system that compounds authority over time.",
      "The architecture separates narrative (Dhruv World), execution (Quantis Global), and proof (projects, case studies, journal). Each route has a defined role in the entity graph, with canonical URLs and JSON-LD reinforcing the same identity language.",
      "Internal linking connects clusters (AI, business, technology) to long-form writing and project evidence. SearchAction, sitemap coverage, and llms.txt give both crawlers and AI systems a clear map of what matters.",
      "The result is a platform that can grow without structural debt — new articles and products plug into an existing identity frame instead of resetting the brand every quarter.",
    ],
  },
  {
    slug: "quantis-global-brand-foundation",
    title: "Quantis Global Brand Foundation",
    summary:
      "A premium business identity layer integrated into a personal brand ecosystem.",
    domain: "business",
    outcome: "Created a trust-forward business narrative with clear service framing.",
    content: [
      "Quantis Global needed to feel premium and operational — not like a side project buried inside a personal site. The challenge was integration without dilution: business credibility without losing the founder story.",
      "The page structure leads with service pillars (sourcing, procurement, validation, logistics) and a simple Source → Verify → Ship → Deliver workflow that mirrors how partners actually evaluate trade operators.",
      "Visually, the module uses a restrained dark accent within the wider ivory editorial system so Quantis reads as execution layer, while Dhruv World remains the identity layer.",
      "Cross-links from projects, founder manifesto, and case studies keep business and personal narratives aligned — one ecosystem, two layers, consistent trust signals.",
    ],
  },
];
