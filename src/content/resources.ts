export type ResourceItem = {
  slug: string;
  title: string;
  description: string;
  type: "guide" | "template" | "notes" | "case-doc";
  audience: "student" | "builder" | "founder";
};

export const resources: ResourceItem[] = [
  {
    slug: "ai-workflow-guide",
    title: "AI Workflow Guide",
    description: "A step-by-step framework for building repeatable AI workflows.",
    type: "guide",
    audience: "builder",
  },
  {
    slug: "personal-brand-seo-template",
    title: "Personal Brand SEO Template",
    description:
      "A practical template for metadata, schema, internal linking, and route planning.",
    type: "template",
    audience: "founder",
  },
  {
    slug: "startup-execution-notes",
    title: "Startup Execution Notes",
    description:
      "Execution notes on planning, prioritization, and shipping as a student founder.",
    type: "notes",
    audience: "student",
  },
];
