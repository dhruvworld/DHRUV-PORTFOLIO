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

/** Projects aligned with resume — no placeholder imagery required. */
export const highlightProjects: HighlightProject[] = [
  {
    slug: "quantis-global",
    title: "Quantis Global",
    category: "International trade",
    summary:
      "Import-export, global procurement, logistics coordination, and technology-driven trade operations.",
    stack: "Business systems · Sourcing · SEO",
    details: [
      "Founded a modern trading company focused on industrial products, packaging, chemicals, pharma raw materials, and consumer goods.",
      "Built trusted sourcing networks with verification, documentation readiness, and partner coordination.",
      "Led branding, SEO, automation workflows, and digital systems for scalable operations.",
    ],
    href: "/quantis-global",
    caseStudySlug: "quantis-global-brand-foundation",
    featuredOnHome: true,
  },
  {
    slug: "travel-website",
    title: "Travel Website Platform",
    category: "Full-stack product",
    summary:
      "Scalable travel platform with admin dashboard, package management, and dynamic content.",
    stack: "Next.js · Firebase · Tailwind CSS",
    details: [
      "Responsive UI with package management, image uploads, and admin controls.",
      "Firebase authentication and content management with SEO-focused structure.",
    ],
    href: "/projects#travel-website",
    featuredOnHome: true,
  },
  {
    slug: "opensource-displaylink",
    title: "OpenSourceDisplayLink",
    category: "Engineering R&D",
    summary:
      "Cross-platform display extension with real-time streaming and low-latency pointer tracking.",
    stack: "Streaming · WebP · Cross-platform",
    details: [
      "Inspired by Duet Display: screen streaming, compression optimization, and fullscreen rendering.",
      "Prototype direction for high-performance utility software across devices.",
    ],
    href: "/projects#opensource-displaylink",
    featuredOnHome: true,
  },
  {
    slug: "e-resume-portal",
    title: "E-Resume Portal",
    category: "Web application",
    summary: "Resume generation and management platform built with Python and Django.",
    stack: "Python · Django · MySQL",
    details: [
      "Authentication, admin-side management, and responsive resume workflows.",
      "Developed during INNOVATE WEBTEC internship with testing and QA focus.",
    ],
    href: "/projects#e-resume-portal",
  },
  {
    slug: "dhruv-world",
    title: "Dhruv World",
    category: "Digital identity",
    summary: "Unified personal brand, editorial content, and search authority infrastructure.",
    stack: "Next.js · Entity SEO · Content systems",
    details: [
      "Connected routes, schema, and editorial publishing for long-term authority compounding.",
      "Identity layer linking AI journal, projects, and business narrative (Quantis Global).",
    ],
    href: "/case-studies/digital-identity-architecture",
    caseStudySlug: "digital-identity-architecture",
  },
];

export const homeFeaturedProjects = highlightProjects.filter((project) => project.featuredOnHome);
