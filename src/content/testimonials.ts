export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

/** Replace with verified quotes when available. Roles reflect collaborator types. */
export const testimonials: Testimonial[] = [
  {
    quote:
      "Dhruv connects product clarity with execution discipline. What ships feels intentional — not over-designed, not under-built.",
    name: "Product collaborator",
    role: "Systems & UX",
  },
  {
    quote:
      "The identity architecture made our story legible to partners. Messaging, structure, and trust signals finally aligned.",
    name: "Founder",
    role: "B2B operator",
  },
  {
    quote:
      "Rare balance of AI workflow depth and business realism. Each sprint produced something we could actually use.",
    name: "Growth lead",
    role: "Startup team",
  },
];
