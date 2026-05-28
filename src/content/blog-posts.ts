export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  tags: string[];
  excerpt: string;
  content: string[];
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
    content: [
      "Most personal websites are resumes with animation. They look polished but they are structurally weak. They rarely build long-term search authority, and they do not create a coherent identity graph.",
      "I built this platform around one principle: identity compounds when narrative, proof, and discoverability work together. Every page has a role. Home positions. Projects prove execution. Writing expands topical depth. Entity pages reinforce naming consistency.",
      "The biggest shift was treating SEO as architecture, not optimization. Instead of chasing random keywords, I focused on entity clarity: Dhruv Solanki, Dhruv Solankii, and Dhruv World. That consistency appears in metadata, schema, page copy, and internal links.",
      "Design also changed the strategy. A premium interface is not decoration; it is trust signaling. Typography hierarchy, spacing rhythm, and motion restraint communicate confidence. If the design feels rushed, credibility drops before anyone reads a line.",
      "The outcome is a system that can scale. Articles, resources, and case studies can grow without breaking structure. The goal is simple: become easy to understand for both people and search engines, while looking like a serious long-term brand.",
    ],
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
    publishedAt: "2026-05-30",
    tags: ["portfolio", "strategy", "growth"],
    excerpt:
      "A modern framework for portfolio positioning, proof architecture, and conversion.",
    content: [
      "In 2026, portfolios are no longer galleries. They are authority systems. A strong portfolio should answer three questions fast: who you are, what you can execute, and why someone should trust you.",
      "Positioning comes first. If the headline is vague, the rest of the page loses force. Strong positioning is specific to your domain and audience. It should make the right people feel immediately understood.",
      "Proof should be layered. Show selected projects with context: challenge, execution, and measurable outcome. Generic screenshots are not enough. Decision quality and system thinking are now part of the evaluation standard.",
      "Conversion is often ignored. A modern portfolio needs clear next actions: read writing, explore work, or start a conversation. Frictionless paths outperform complex funnels for founder and creator brands.",
      "Finally, structure for growth. Your portfolio should support writing, resources, and case studies as your work matures. The best portfolio is not a launch artifact; it is a living operating surface for your reputation.",
    ],
  },
];
