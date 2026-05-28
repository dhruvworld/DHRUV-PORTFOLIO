export type ExperienceRow = {
  label: string;
  period: string;
  description: string;
  tags: string[];
};

export const experienceRows: ExperienceRow[] = [
  {
    label: "Dhruv World",
    period: "2024 — Present",
    description: "Founder-led identity platform: editorial content, entity SEO, and product narrative.",
    tags: ["Brand", "SEO", "Systems"],
  },
  {
    label: "Quantis Global",
    period: "2023 — Present",
    description: "Global trade, sourcing, and execution systems for international partnerships.",
    tags: ["Trade", "Operations"],
  },
  {
    label: "AI Product Lab",
    period: "2022 — Present",
    description: "Workflow tools, publishing automation, and practical AI-first product experiments.",
    tags: ["AI", "Product"],
  },
  {
    label: "Engineering & R&D",
    period: "Ongoing",
    description: "Cross-platform prototypes, open-source direction, and utility software exploration.",
    tags: ["Engineering", "UX"],
  },
];
