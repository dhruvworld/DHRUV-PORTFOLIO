export type BlogSection = {
  heading: string;
  paragraphs: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  tags: string[];
  excerpt: string;
  content: string[];
  /** Structured sections for long-form strategy posts */
  sections?: BlogSection[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "how-i-built-personal-brand-website",
    title: "How I Built My Personal Brand Website",
    description:
      "A practical breakdown of building a long-term digital identity system, not just a portfolio.",
    publishedAt: "2026-05-08",
    tags: ["branding", "seo", "personal-brand"],
    excerpt:
      "Why identity architecture, entity SEO, and content systems matter more than a one-page portfolio.",
    content: [],
    sections: [
      {
        heading: "This is not a portfolio — it is identity infrastructure",
        paragraphs: [
          "Most personal websites are resumes with animation. They look polished but they are structurally weak: no entity graph, no content engine, no proof layer, and no reason for search engines to treat you as one consistent person over time.",
          "I built Dhruv World as a long-term digital identity platform — personal brand, project proof, journal, resources, and business narrative (Quantis Global) in one connected system. The goal is to rank and be understood for Dhruv Solanki, Dhruv Solankii, and Dhruv World as linked identities, not scattered profiles.",
          "Everything on this site follows one principle: identity compounds when narrative, proof, and discoverability work together.",
        ],
      },
      {
        heading: "Identity architecture: three names, one graph",
        paragraphs: [
          "Primary professional identity: Dhruv Solanki — metadata, schema, CV, collaborations, and formal outreach.",
          "Creator identity: Dhruv Solankii — social-first content, personality, and creative narrative.",
          "Media ecosystem: Dhruv World — the platform itself, journal, resources, and the hub that ties the others together.",
          "Business execution layer: Quantis Global — trade and logistics credibility without burying the founder story.",
          "Each route has a defined role. Home positions. About and timeline prove background. Projects show execution. Case studies show thinking. Journal builds topical depth. Quantis Global sells operational trust.",
        ],
      },
      {
        heading: "Entity SEO: architecture before keywords",
        paragraphs: [
          "I stopped treating SEO as a plugin and started treating it as structure. Target entity clarity first: your legal name, aliases, location, venture, and sameAs links to LinkedIn, GitHub, Instagram, YouTube, and Medium under the dhruvworld handle.",
          "Sitewide JSON-LD: Person, WebSite, and Organization schemas on every page load. BlogPosting schema on articles. Breadcrumb schema on detail routes. Canonical URLs and Open Graph on all indexable pages.",
          "Internal linking connects topical clusters (/ai, /business, /technology) to projects, case studies, and journal posts so crawlers see one ecosystem, not orphan pages.",
          "Technical surface area: /robots.txt, /sitemap.xml (blog, resources, case studies, indexable clusters), /llms.txt for AI systems, and command-palette search for humans.",
          "Thin or duplicate cluster pages are noindexed so the sitemap only promotes routes with real intent — quality over volume.",
        ],
      },
      {
        heading: "Content systems: publish once, compound forever",
        paragraphs: [
          "Blog (AI Journal): long-form articles on branding, AI workflows, and portfolio strategy — each with full text, reading time, and related posts.",
          "Case studies: deep breakdowns (e.g. digital identity architecture, Quantis Global brand foundation) using problem → solution → result framing.",
          "Resources: only real assets visitors can use — starting with copy-paste prompts (e.g. clean mirror photo prompt), not empty “coming soon” cards.",
          "Projects: live URLs first, then case study, then GitHub — every entry labeled by kind (live venture, client build, R&D, platform).",
          "Operating cadence intent: one pillar article per month, one case study per quarter, resources when there is something genuinely useful to share.",
        ],
      },
      {
        heading: "What I shipped technically",
        paragraphs: [
          "Stack: Next.js 16 (App Router), TypeScript, Tailwind v4, static generation for speed, Netlify for deployment at dhruvworld.netlify.app.",
          "Content lives in typed modules (projects.ts, blog-posts.ts, resources.ts, quantis-global-site.ts, profile.ts) so copy updates do not require hunting through components.",
          "Built and iterated primarily in Cursor — same workflow for this site, Quantis Global, client apps, and experiments on the dhruvworld GitHub org.",
          "Real assets on the site: portrait photography, downloadable CV PDF, Quantis copy sourced from quantisglobal.co, and WhatsApp/LinkedIn-first contact.",
        ],
      },
      {
        heading: "Design as trust signaling",
        paragraphs: [
          "Editorial, text-first layout: warm ivory background, charcoal typography, restrained gold/teal accents — not dark cyberpunk or generic SaaS template aesthetics.",
          "No fake testimonials, no decorative color swatch grids, no placeholder UI screenshots. Proof is projects, numbers, certifications, and live links.",
          "Typography hierarchy, spacing, and motion restraint matter as much as code quality. If the surface feels rushed, credibility drops before anyone reads a line.",
        ],
      },
      {
        heading: "How the homepage is structured today",
        paragraphs: [
          "Hero: who-I-help line (not a skill list), portrait, CV download, and direct contact paths.",
          "Proof strip: Quantis countries, quote SLA, GitHub project count, graduate programs.",
          "Featured case study: Quantis Global in problem → solution → result format with link to quantisglobal.co.",
          "Selected work: live demo → case study → GitHub on each card.",
          "Journal + single closing CTA — no duplicate experience blocks or fake sections.",
        ],
      },
      {
        heading: "What I would tell you if you are building yours",
        paragraphs: [
          "Start with identity mapping on paper: one professional name, one creator alias, one media property — then mirror that in metadata and schema on day one.",
          "Ship live links and one real case study before you add ten half-finished project cards.",
          "Remove anything that says “coming soon” unless you are actively filling it this week.",
          "Pair this build guide with Modern Portfolio Strategy in 2026 for the five conversion checks (live links, who I help, PSR case study, contact, proof).",
          "The best personal site is not a launch artifact. It is a living operating surface for your reputation — built to grow without breaking structure.",
        ],
      },
    ],
  },
  {
    slug: "ai-tools-every-student-should-use",
    title: "AI Tools Every Student Should Use",
    description:
      "A curated workflow of high-leverage AI tools for student builders and creators.",
    publishedAt: "2026-05-15",
    tags: ["ai", "productivity", "students"],
    excerpt:
      "A stack for research, writing, prototyping, and execution with minimal complexity.",
    content: [
      "Students do not need fifty AI tools. They need a small workflow they can repeat every week. The most valuable stack combines research, synthesis, writing, and execution in a clean sequence.",
      "Start with research acceleration. Use one tool for source collection and one for summarization. The output should be references, not final answers. This keeps your thinking original while removing low-value manual effort.",
      "Then move into structured drafting. A good AI writing assistant should help with outlines, transitions, and clarity checks. It should not replace your viewpoint. Your voice is the differentiator, especially when everyone has access to similar models.",
      "For builders, prototype tools matter. Lightweight app scaffolding, UI generation, and code copilots can shorten idea-to-demo cycles dramatically. The rule is to validate quickly, then harden quality with manual review.",
      "The winning setup is boring by design: fewer tools, stronger habits, clear outcomes. If a tool does not reduce friction in a measurable way, remove it. Consistency beats novelty every time.",
    ],
  },
  {
    slug: "modern-portfolio-strategy-2026",
    title: "Modern Portfolio Strategy in 2026",
    description:
      "Portfolio strategy that improves trust, search visibility, and lead quality.",
    publishedAt: "2026-05-22",
    tags: ["portfolio", "strategy", "growth"],
    excerpt:
      "A modern framework for portfolio positioning, proof architecture, and conversion.",
    content: [],
    sections: [
      {
        heading: "Portfolios are authority systems, not galleries",
        paragraphs: [
          "In 2026, a portfolio is not a PDF and not a grid of screenshots. It is an operating system for your reputation: positioning, proof, discoverability, and conversion in one place.",
          "A strong site answers three questions in under ten seconds: who you are, who you help, and why someone should trust you. Everything else — blog, case studies, resources — exists to reinforce those three answers.",
        ],
      },
      {
        heading: "1. Live project links (not just GitHub)",
        paragraphs: [
          "Hiring managers and clients do not want to imagine your work. They want to see it live.",
          "Lead every project with a working URL when you have one: a deployed app, a live business site, a demo on Netlify or Vercel. Put GitHub second — code supports the story; it does not replace the product.",
          "Link order that works: Live demo → Case study → GitHub. On this site, Quantis Global links to quantisglobal.co first; Dhruv World links to the live Netlify deployment before the DHRUV-PORTFOLIO repo.",
        ],
      },
      {
        heading: "2. A “who I help” line (not a skill list)",
        paragraphs: [
          "Do not open with “React, Node, MongoDB, Express…” — that is a resume fragment, not positioning.",
          "Use a line that names your audience and outcome. Formula: I help [who] achieve [what] without [pain point].",
          "Example on this site: I help founders, trade operators, and product teams launch faster — with live software, clear logistics, and AI workflows they can actually run.",
          "Skills belong in a secondary line or an About section. The hero is for relevance, not vocabulary.",
        ],
      },
      {
        heading: "3. One case study (problem → solution → result)",
        paragraphs: [
          "Most portfolios list projects. Few explain impact. Pick one flagship story and structure it as Problem → Solution → Result.",
          "Problem: What was broken or slow? Solution: What did you build or change? Result: Numbers, certifications, live URLs, or time saved — anything measurable.",
          "On this site, Quantis Global is the featured case: fragmented international trade and opaque logistics (problem), a live import/export brand at quantisglobal.co (solution), 150+ countries and 24-hour quote response in positioning (result).",
        ],
      },
      {
        heading: "4. Contact that works (not only a form)",
        paragraphs: [
          "Email-only forms add friction and often get ignored. Add channels people already use: WhatsApp for quick replies, LinkedIn for professional outreach, and a clear email for formal intros.",
          "State response time when you can — e.g. “Usually replies within a few hours.” It sets expectations and signals you are reachable.",
          "Forms are fine as a backup. Direct links should be primary on the Contact page.",
        ],
      },
      {
        heading: "5. Proof (numbers, names, and outcomes)",
        paragraphs: [
          "Proof is not bragging — it is reducing risk for the reader. Use a small set of credible signals: countries served, certifications, client names (when allowed), degrees, repo count, or response SLAs.",
          "Avoid fake testimonials. Real metrics from real ventures beat generic praise.",
          "On this site: 150+ countries and 24hr quotes (Quantis), MS programs (SNHU / UNH), dhruvworld GitHub org, and named client work (e.g. H G Smelters Pvt Ltd).",
        ],
      },
      {
        heading: "Identity architecture: one person, multiple surfaces",
        paragraphs: [
          "If you operate under more than one name or brand, make the mapping explicit once — then repeat it in metadata and schema.",
          "This ecosystem uses: Dhruv Solanki (professional), Dhruv Solankii (creator alias), Dhruv World (media / platform), and Quantis Global (business execution layer).",
          "Each route has a job: Home positions. Projects prove. Journal builds topical depth. Case studies show thinking. Quantis Global sells trade credibility without diluting the personal brand.",
        ],
      },
      {
        heading: "SEO as architecture, not a plugin",
        paragraphs: [
          "Treat SEO as structure: canonical URLs, sitemap, JSON-LD Person and Organization, internal links between clusters (AI, business, technology), and consistent naming in titles and copy.",
          "Target entity clarity before random keywords: your name, your aliases, your city, your venture. Long-tail articles support the entity; they do not replace it.",
          "Ship llms.txt and clear /about, /projects, and /contact routes so both search engines and AI systems can map your identity graph.",
        ],
      },
      {
        heading: "How this site applies the strategy",
        paragraphs: [
          "Home: who-I-help line, proof strip, featured case study (PSR), selected work with live links first, then journal and a single closing CTA.",
          "Projects: every entry uses live URL → case study → GitHub when available; client and founder work labeled by kind (live venture, client build, R&D).",
          "Resources: only publish assets with real content (e.g. copy-paste AI prompts), not empty “coming soon” cards.",
          "Built primarily in Cursor — fast iteration, same workflow for web (Next.js), trade sites, and experiments.",
        ],
      },
      {
        heading: "What to do next",
        paragraphs: [
          "Audit your current portfolio against the five checks: live links, who-I-help headline, one PSR case study, working contact channels, and proof on the page.",
          "Remove placeholder projects and resources until they have something a visitor can use or click.",
          "Publish one article per month that connects your work to a problem you solved — strategy compounds when you ship consistently.",
        ],
      },
    ],
  },
];
