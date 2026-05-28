export type ExperienceRow = {
  label: string;
  period: string;
  location: string;
  description: string;
  tags: string[];
};

/** Current focus strip — matches resume experience. */
export const experienceRows: ExperienceRow[] = [
  {
    label: "Quantis Global",
    period: "Feb 2026 — Present",
    location: "Gujarat, India",
    description:
      "Founder of an international trading and sourcing company: procurement, logistics, branding, SEO, and automation for global partnerships.",
    tags: ["Trade", "Operations", "Founder"],
  },
  {
    label: "Southern New Hampshire University",
    period: "Sep 2025 — May 2026",
    location: "Manchester, NH",
    description:
      "Student Assistant for assistive technology — academic software support and accessibility-focused technical workflows.",
    tags: ["Accessibility", "Support"],
  },
  {
    label: "MASS INFOTECH",
    period: "Nov 2023 — Jun 2024",
    location: "Kalol, Gujarat",
    description:
      "Python intern building backend modules, debugging features, and contributing to application improvements.",
    tags: ["Python", "Backend"],
  },
  {
    label: "INNOVATE WEBTEC",
    period: "Jan 2023 — Apr 2023",
    location: "Ahmedabad, Gujarat",
    description:
      "Django intern on an E-Resume Portal: authentication, admin dashboards, responsive UI, and QA.",
    tags: ["Django", "Full stack"],
  },
];
