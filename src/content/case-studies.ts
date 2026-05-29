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
