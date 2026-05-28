export type HighlightProject = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  stack: string;
  details: string[];
  href: string;
  caseStudySlug?: string;
  featuredOnHome?: boolean;
};

export const highlightProjects: HighlightProject[] = [
  {
    slug: "quantis-global",
    title: "Quantis Global",
    category: "Business Systems",
    summary: "International sourcing and trade execution platform.",
    stack: "Business Systems • Trade Ops",
    details: [
      "Challenge: fragmented sourcing workflows and low trust signals.",
      "Execution: structured sourcing, verification, and logistics coordination layer.",
      "Outcome: clearer positioning for premium global execution partnerships.",
    ],
    href: "/quantis-global",
    caseStudySlug: "quantis-global-brand-foundation",
    featuredOnHome: true,
  },
  {
    slug: "savemepdf",
    title: "SaveMePDF",
    category: "Productivity",
    summary: "Fast document workflow for PDF, Word, and Excel tasks.",
    stack: "Product Utility • Creator Tools",
    details: [
      "Challenge: repetitive document operations and manual formatting.",
      "Execution: utility-first PDF workflow concept with speed and consistency focus.",
      "Outcome: cleaner creator and student productivity pathway.",
    ],
    href: "/projects#savemepdf",
    featuredOnHome: true,
  },
  {
    slug: "post2plan",
    title: "Post2Plan",
    category: "AI Workflow",
    summary: "Turns raw ideas into structured publishing plans.",
    stack: "AI Workflow • Publishing System",
    details: [
      "Challenge: inconsistent posting and weak strategic repurposing.",
      "Execution: convert ideas into structured publishing plans.",
      "Outcome: more consistent content velocity and authority compounding.",
    ],
    href: "/ai",
    featuredOnHome: true,
  },
  {
    slug: "opensource-displaylink",
    title: "OpenSourceDisplayLink",
    category: "Engineering R&D",
    summary: "Cross-device display extension with low-latency streaming.",
    stack: "Engineering R&D • Cross-platform",
    details: [
      "Challenge: extend displays across devices with low latency.",
      "Execution: realtime streaming and pointer-tracking architecture.",
      "Outcome: practical prototype direction for high-performance utility software.",
    ],
    href: "/projects#opensource-displaylink",
  },
  {
    slug: "dhruv-world",
    title: "Dhruv World",
    category: "Identity Platform",
    summary: "Unified personal brand, content, and search authority system.",
    stack: "Identity Platform • Media Systems",
    details: [
      "Challenge: fragmented online identity and weak search consistency.",
      "Execution: unified personal brand architecture across pages, writing, and entity signals.",
      "Outcome: stronger narrative clarity and long-term authority compounding.",
    ],
    href: "/case-studies/digital-identity-architecture",
    caseStudySlug: "digital-identity-architecture",
  },
];

export const homeFeaturedProjects = highlightProjects.filter((project) => project.featuredOnHome);
