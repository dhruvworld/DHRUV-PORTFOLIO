export type CaseStudySection = {
  heading: string;
  paragraphs: string[];
};

export type CaseStudy = {
  slug: string;
  title: string;
  summary: string;
  domain: "ai" | "technology" | "business";
  outcome: string;
  content: string[];
  sections?: CaseStudySection[];
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
    sections: [
      {
        heading: "Why I Started Quantis Global",
        paragraphs: [
          "The idea for Quantis Global was born from real-world experiences.",
          "While pursuing my studies and living in the United States, I had the opportunity to explore different industries, businesses, and consumer markets. One thing that consistently caught my attention was the sheer number of products imported from India and other countries. From industrial materials and packaging products to consumer goods and specialty items, global trade was happening everywhere around me.",
          "At the same time, my business partner, Jaimin, was having similar observations while living in the United Kingdom. We both noticed that although there was significant demand for quality products, many manufacturers and small-to-medium distributors struggled to reach larger international markets. There was often a gap between reliable producers and businesses looking for trusted sourcing partners.",
          "Through our conversations, we realized that countless opportunities were being missed — not because the products lacked quality, but because businesses lacked the right connections, sourcing expertise, and international trade support to scale effectively.",
          "That realization became the foundation of Quantis Global.",
          "We started Quantis Global with a simple vision: to bridge the gap between manufacturers, suppliers, distributors, and global buyers. Our goal is to help businesses expand beyond local markets, simplify international trade, and create long-term partnerships built on trust, transparency, and reliability.",
          "Today, Quantis Global is focused on connecting opportunities across borders through global sourcing, procurement, import-export solutions, logistics support, and strategic trade partnerships. We believe that businesses of all sizes should have access to international growth opportunities, not just large corporations.",
          "For us, Quantis Global is more than a company. It represents our belief that global trade should be accessible, efficient, and beneficial for everyone involved.",
          "We are building a bridge between local potential and global opportunity.",
        ],
      },
      {
        heading: "What “Quantis” Means",
        paragraphs: [
          "The name carries a meaning that reflects how we think about scale, value, and growth.",
          "Latin root: “Quantis” comes from the Latin quantus — meaning “how much,” “how great,” or “how large.” It speaks to ambition, measurement, and the scale of opportunity we help businesses reach.",
          "Sustainability echo: Quantis is also known as a global environmental consulting firm focused on sustainability and life-cycle assessment — a reminder to build trade that is responsible and measured.",
          "Growth in nature: In agriculture, Quantis is a naturally derived plant biostimulant that helps crops recover from stress and grow stronger — a fitting metaphor for helping businesses thrive in tough markets.",
        ],
      },
    ],
  },
];
