export type CaseStudy = {
  slug: string;
  title: string;
  summary: string;
  domain: "ai" | "technology" | "business";
  outcome: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "digital-identity-architecture",
    title: "Digital Identity Architecture",
    summary:
      "How a personal website evolved into a connected brand, content, and search authority system.",
    domain: "technology",
    outcome: "Established unified identity architecture across routes and schema.",
  },
  {
    slug: "quantis-global-brand-foundation",
    title: "Quantis Global Brand Foundation",
    summary:
      "A premium business identity layer integrated into a personal brand ecosystem.",
    domain: "business",
    outcome: "Created a trust-forward business narrative with clear service framing.",
  },
];
