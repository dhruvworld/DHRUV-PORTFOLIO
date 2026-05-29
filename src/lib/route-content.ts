export type RouteSection = {
  heading: string;
  paragraphs: string[];
};

export type DynamicRouteContent = {
  title: string;
  description: string;
  topic: "identity" | "cluster" | "growth" | "media" | "local";
  /** Thin template pages: index for SEO hubs, noindex for duplicates/stubs */
  indexable?: boolean;
  /** Real body content — present on substantive (indexable) hub pages */
  body?: RouteSection[];
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
    body: [
      {
        heading: "How I think about business",
        paragraphs: [
          "Business, for me, is execution under real constraints — not theory. My main venture, Quantis Global, is an import/export and sourcing company that connects manufacturers and distributors with global buyers across 150+ countries.",
          "I focus on the unglamorous parts that actually build trust: supplier verification, documentation readiness, transparent pricing, and fast response. Those are what turn a one-time deal into a long-term partnership.",
        ],
      },
      {
        heading: "Where business meets technology",
        paragraphs: [
          "I build the digital systems that make trade and brands scale: websites, SEO, automation, and AI workflows — most of it shipped in Cursor.",
          "The combination of business sense and engineering speed is the edge: I can take an idea from positioning to a live, ranking, conversion-ready product quickly.",
        ],
      },
    ],
  },
  technology: {
    title: "Technology",
    description:
      "Technology projects, stack decisions, and product engineering insights.",
    topic: "cluster",
    indexable: true,
    body: [
      {
        heading: "What I build with",
        paragraphs: [
          "My core stack is Python, Django, Next.js, TypeScript, Firebase, and Tailwind, with Flutter/Dart for mobile. I deploy on Netlify and Vercel and treat SEO and performance as part of engineering, not an afterthought.",
          "I work primarily in Cursor, which lets me design, build, debug, and ship in one loop across very different project types — web, mobile, trade tooling, and R&D.",
        ],
      },
      {
        heading: "Selected technical work",
        paragraphs: [
          "OpenSourceDisplayLink — a cross-platform display-streaming prototype focused on low-latency rendering and compression. A Flutter app for H G Smelters Pvt Ltd. This platform (Dhruv World) — a Next.js entity-SEO and content system.",
          "See the full list with live links and repositories on the projects page.",
        ],
      },
    ],
  },
  entrepreneurship: {
    title: "Entrepreneurship",
    description:
      "Founder journey, startup systems, and entrepreneurial frameworks.",
    topic: "cluster",
    indexable: true,
    body: [
      {
        heading: "Student to founder",
        paragraphs: [
          "I am a computer science graduate student (MS at SNHU, MS IT at UNH Manchester) and the founder of Quantis Global. The throughline is building real things while studying — not waiting for permission.",
          "Quantis started from a simple observation my partner Jaimin and I shared across the US and UK: strong manufacturers kept missing global demand because they lacked the right connections and trade support. We built the bridge.",
        ],
      },
      {
        heading: "How I operate",
        paragraphs: [
          "Ship first, refine with feedback. Keep tools few and habits strong. Treat distribution and trust as features, not marketing afterthoughts.",
          "Most of my products are built in Cursor so the gap between idea and live product stays small.",
        ],
      },
    ],
  },
  gujarat: {
    title: "Gujarat",
    description:
      "Regional innovation lens and identity context for work rooted in Gujarat.",
    topic: "local",
    indexable: true,
    body: [
      {
        heading: "Roots in Gujarat",
        paragraphs: [
          "My foundation is in Gujarat, India — I completed my diploma and engineering education through GTU (Gandhinagar and Ahmedabad) before moving to the United States for graduate study.",
          "Quantis Global is operationally connected to Gujarat, with a base in Kalol, sourcing across Indian manufacturing and exporting to international markets.",
        ],
      },
      {
        heading: "Local strength, global reach",
        paragraphs: [
          "Gujarat's manufacturing and trade ecosystem is world-class but often under-connected to global buyers. That gap is exactly what Quantis Global works to close.",
          "I see regional capability and international opportunity as one system — local potential meeting global demand.",
        ],
      },
    ],
  },
  gandhinagar: {
    title: "Gandhinagar",
    description:
      "Local profile and ecosystem context for Dhruv Solanki in Gandhinagar.",
    topic: "local",
    indexable: true,
    body: [
      {
        heading: "Gandhinagar connection",
        paragraphs: [
          "Gandhinagar is part of my educational foundation — I studied computer engineering through GTU in the region before pursuing graduate degrees in the United States.",
          "It is part of the Gujarat base from which Quantis Global sources and coordinates international trade.",
        ],
      },
    ],
  },
  kalol: {
    title: "Kalol",
    description:
      "Local profile and search identity context for Dhruv Solankii in Kalol.",
    topic: "local",
    indexable: true,
    body: [
      {
        heading: "Kalol connection",
        paragraphs: [
          "Quantis Global is registered in Kalol, Gujarat (SF-71, City Mall 2, Navjivan Mill Compound, Kalol – 382721), the operational base for its sourcing and import/export work.",
          "It reflects the model I believe in: serious global trade can be run from regional centers, not only large metros.",
        ],
      },
    ],
  },
  "dhruv-solanki": {
    title: "Dhruv Solanki",
    description:
      "Official professional identity page for Dhruv Solanki across AI, business, and technology.",
    topic: "identity",
    indexable: true,
    body: [
      {
        heading: "Who I am",
        paragraphs: [
          "I am Dhruv Solanki — computer science graduate student, full-stack engineer, and founder of Quantis Global. I build software, AI workflows, and international trade systems.",
          "Dhruv Solanki is my professional identity; Dhruv Solankii is my creator alias; Dhruv World is the media platform that connects everything I build.",
        ],
      },
      {
        heading: "What I do",
        paragraphs: [
          "Founder of Quantis Global (import/export, sourcing, logistics). Full-stack builder in Python, Django, Next.js, and Flutter. AI workflow designer shipping primarily in Cursor.",
          "Explore my work through projects, case studies, and the journal — or reach me on the contact page.",
        ],
      },
    ],
  },
  "dhruv-solankii": {
    title: "Dhruv Solankii",
    description:
      "Creator identity page for Dhruv Solankii and internet-native media presence.",
    topic: "identity",
    indexable: true,
    body: [
      {
        heading: "The creator side",
        paragraphs: [
          "Dhruv Solankii is the creator-facing version of my identity — content, building in public, and sharing practical lessons on AI, technology, and entrepreneurship.",
          "It is the same person as Dhruv Solanki (professional) and the same ecosystem as Dhruv World (media platform).",
        ],
      },
      {
        heading: "Where to find me",
        paragraphs: [
          "I publish on the AI Journal and share resources like reusable AI prompts. Across channels the handle is dhruvworld.",
          "For collaborations, the fastest paths are WhatsApp and LinkedIn via the contact page.",
        ],
      },
    ],
  },
  "dhruv-world": {
    title: "Dhruv World",
    description:
      "Media ecosystem identity page connecting projects, blog, and digital content systems.",
    topic: "media",
    indexable: true,
    body: [
      {
        heading: "The ecosystem",
        paragraphs: [
          "Dhruv World is the media and platform layer that ties my work together: personal brand, projects, journal, resources, and the Quantis Global business narrative.",
          "It is built as long-term digital identity infrastructure — one connected system rather than a scattered set of profiles.",
        ],
      },
      {
        heading: "What lives here",
        paragraphs: [
          "Projects with live links and code, case studies, long-form writing, and practical resources — all under one identity graph for Dhruv Solanki (Dhruv Solankii).",
          "The platform is built and iterated in Cursor, deployed on Netlify.",
        ],
      },
    ],
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
