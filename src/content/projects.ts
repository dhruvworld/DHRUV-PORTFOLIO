export type ProjectKind =
  | "live"
  | "platform"
  | "client"
  | "academic"
  | "experiment"
  | "case-study";

export type HighlightProject = {
  slug: string;
  title: string;
  category: string;
  kind: ProjectKind;
  kindLabel: string;
  summary: string;
  stack: string;
  details: string[];
  /** Primary on-site route or fallback anchor */
  href: string;
  /** Prefer live product URL over GitHub in UI */
  liveUrl?: string;
  githubRepo?: string;
  caseStudySlug?: string;
  featuredOnHome?: boolean;
};

const GITHUB_ORG = "https://github.com/dhruvworld";

export function projectGithubUrl(repo: string): string {
  return `${GITHUB_ORG}/${repo}`;
}

export const highlightProjects: HighlightProject[] = [
  {
    slug: "quantis-global",
    title: "Quantis Global",
    category: "International trade",
    kind: "live",
    kindLabel: "Live venture",
    summary:
      "Import & export solutions — logistics, customs clearance, and supply chain management across 150+ countries.",
    stack: "Global trade · Logistics · Customs · Supply chain",
    details: [
      "Your gateway to global trade — ocean, air, and land freight plus warehousing and end-to-end supply chain.",
      "IEC, GST, and MSME certified operations with 24-hour quote response and transparent pricing.",
      "Live site: quantisglobal.co",
    ],
    href: "/quantis-global",
    liveUrl: "https://quantisglobal.co",
    githubRepo: "Quantis-Global",
    caseStudySlug: "quantis-global-brand-foundation",
    featuredOnHome: true,
  },
  {
    slug: "dhruv-world",
    title: "Dhruv World",
    category: "Digital identity",
    kind: "platform",
    kindLabel: "This platform",
    summary: "Unified personal brand, editorial content, and search authority infrastructure.",
    stack: "Next.js · TypeScript · Entity SEO",
    details: [
      "Connected routes, schema, and editorial publishing for long-term authority compounding.",
      "Identity layer linking AI journal, projects, and business narrative (Quantis Global).",
      "Built and iterated in Cursor.",
    ],
    href: "/",
    liveUrl: "https://dhruvworld.netlify.app",
    githubRepo: "DHRUV-PORTFOLIO",
    featuredOnHome: true,
  },
  {
    slug: "opensource-displaylink",
    title: "OpenSourceDisplayLink",
    category: "Engineering R&D",
    kind: "academic",
    kindLabel: "R&D prototype",
    summary:
      "Cross-platform display extension with real-time streaming and low-latency pointer tracking.",
    stack: "Python · Streaming · WebP · Cross-platform",
    details: [
      "Inspired by Duet Display: screen streaming, compression optimization, and fullscreen rendering.",
      "Prototype direction for high-performance utility software across devices.",
    ],
    href: projectGithubUrl("OpenSourceDisplayLink"),
    githubRepo: "OpenSourceDisplayLink",
  },
  {
    slug: "hg-app",
    title: "HG Smelters App",
    category: "Mobile application",
    kind: "client",
    kindLabel: "Client build",
    summary:
      "Flutter mobile app built for H G Smelters Pvt Ltd Company — industrial smelting operations and business workflows.",
    stack: "Dart · Flutter",
    details: [
      "Client: H G Smelters Pvt Ltd Company.",
      "Primary codebase: dhruvworld/HG_app.",
      "Additional repo: dhruvworld/h_g_smelters.",
      "Product screenshots and feature list — coming soon.",
    ],
    href: projectGithubUrl("HG_app"),
    githubRepo: "HG_app",
  },
  {
    slug: "megh",
    title: "Megh",
    category: "Web project",
    kind: "client",
    kindLabel: "Client / product",
    summary: "Astro-based web project (scope and client narrative to be added).",
    stack: "Astro",
    details: ["Built with Cursor.", "Live URL and feature list — coming soon."],
    href: projectGithubUrl("megh"),
    githubRepo: "megh",
  },
  {
    slug: "sir",
    title: "Sir Data Checker",
    category: "Web utility",
    kind: "experiment",
    kindLabel: "Tool",
    summary: "Data checker utility — TypeScript web app (per GitHub: “Sir data checker”).",
    stack: "TypeScript",
    details: ["Repository: dhruvworld/sir.", "Use case and demo — coming soon."],
    href: projectGithubUrl("sir"),
    githubRepo: "sir",
  },
  {
    slug: "epicsearch",
    title: "Epic Search",
    category: "Web experiment",
    kind: "experiment",
    kindLabel: "Experiment",
    summary: "Search-oriented web experiment (HTML). Details to be added.",
    stack: "HTML · Web",
    details: ["Repository: dhruvworld/epicsearch.", "Product notes — coming soon."],
    href: projectGithubUrl("epicsearch"),
    githubRepo: "epicsearch",
  },
  {
    slug: "bjpselfie",
    title: "BJP Selfie Generator",
    category: "Campaign web",
    kind: "experiment",
    kindLabel: "Campaign tool",
    summary: "Selfie generator web experience for political/campaign use (repo: bjpselfie).",
    stack: "HTML · Web",
    details: [
      "Listed as bjpselfiegenerator in planning; public GitHub repo: bjpselfie.",
      "Launch context and screenshots — coming soon.",
    ],
    href: projectGithubUrl("bjpselfie"),
    githubRepo: "bjpselfie",
  },
  {
    slug: "shubham-tours",
    title: "Shubham Tours",
    category: "Client website",
    kind: "client",
    kindLabel: "Client build",
    summary: "Tours / travel client website (planned under dhruvworld — repo link to be confirmed).",
    stack: "Web · Cursor-built",
    details: [
      "Client project — Shubham Tours.",
      "Repository visibility and live URL — to be linked when confirmed.",
    ],
    href: "/projects#shubham-tours",
  },
  {
    slug: "e-resume-portal",
    title: "E-Resume Portal",
    category: "Web application",
    kind: "academic",
    kindLabel: "Internship project",
    summary: "Resume generation and management platform built with Python and Django.",
    stack: "Python · Django · MySQL",
    details: [
      "Authentication, admin-side management, and responsive resume workflows.",
      "Developed during INNOVATE WEBTEC internship with testing and QA focus.",
      "GitHub link — to be added if published.",
    ],
    href: "/projects#e-resume-portal",
  },
];

export const homeFeaturedProjects = highlightProjects.filter((project) => project.featuredOnHome);

/** Short line for About / meta — Cursor as default build environment */
export const buildWorkflowNote =
  "Projects across web, mobile, trade, and experiments are designed and shipped primarily in Cursor.";
