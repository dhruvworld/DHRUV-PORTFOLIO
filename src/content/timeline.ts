export type TimelineEntry = {
  id: string;
  label: string;
  sublabel: string;
  period: string;
  detail: string;
  kind: "education" | "experience" | "venture";
};

/** Sourced from resume — newest first. */
export const aboutTimeline: TimelineEntry[] = [
  {
    id: "quantis-founder",
    label: "Founder",
    sublabel: "Quantis Global · Gujarat, India",
    period: "Feb 2026 — Present",
    detail:
      "International trading and sourcing: import-export, procurement, logistics, and technology-driven operations across industrial and consumer categories.",
    kind: "experience",
  },
  {
    id: "snhu-assistant",
    label: "Student Assistant — Assistive Technology",
    sublabel: "Southern New Hampshire University · Part-time",
    period: "Sep 2025 — May 2026",
    detail:
      "Assistive technology and academic software support; accessibility workflows with university staff.",
    kind: "experience",
  },
  {
    id: "snhu-ms-cs",
    label: "Master of Science, Computer Science",
    sublabel: "Southern New Hampshire University · Manchester, NH",
    period: "Aug 2025 — Present",
    detail: "Graduate studies in computer science with focus on AI systems and software engineering.",
    kind: "education",
  },
  {
    id: "dhruv-world",
    label: "Founder — Digital identity platform",
    sublabel: "Dhruv World",
    period: "2024 — Present",
    detail:
      "Personal brand architecture: editorial content, entity SEO, portfolio systems, and connected product narrative.",
    kind: "venture",
  },
  {
    id: "unh-ms-it",
    label: "Master of Science, Information Technology",
    sublabel: "University of New Hampshire — Manchester",
    period: "Aug 2024 — Aug 2025",
    detail: "Completed graduate program in information technology.",
    kind: "education",
  },
  {
    id: "mass-infotech",
    label: "Python Intern",
    sublabel: "MASS INFOTECH · Kalol, Gujarat",
    period: "Nov 2023 — Jun 2024",
    detail:
      "Python applications and backend modules; debugging, optimization, and feature work with the development team.",
    kind: "experience",
  },
  {
    id: "gtu-be",
    label: "Bachelor of Engineering, Computer Engineering",
    sublabel: "Gujarat Technological University · Ahmedabad",
    period: "Aug 2020 — Sep 2023",
    detail: "Undergraduate engineering foundation in computer systems and software.",
    kind: "education",
  },
  {
    id: "innovate-webtec",
    label: "Python Django Intern",
    sublabel: "INNOVATE WEBTEC · Ahmedabad",
    period: "Jan 2023 — Apr 2023",
    detail:
      "Built and deployed an E-Resume Portal with Django: auth, admin dashboards, responsive UI, and QA.",
    kind: "experience",
  },
  {
    id: "thrive-edutech",
    label: "Summer Internship",
    sublabel: "Thrive Edutech · Kalol, Gujarat",
    period: "Jun 2022 — Jul 2022",
    detail: "Python and Django fundamentals; Student Management System with CRUD operations.",
    kind: "experience",
  },
  {
    id: "gtu-diploma",
    label: "Diploma, Computer Engineering",
    sublabel: "Gujarat Technological University · Gandhinagar",
    period: "Aug 2017 — Aug 2020",
    detail: "Diploma-level training in computer engineering and development fundamentals.",
    kind: "education",
  },
];

export const educationTimeline = aboutTimeline.filter((entry) => entry.kind === "education");
export const experienceTimeline = aboutTimeline.filter(
  (entry) => entry.kind === "experience" || entry.kind === "venture",
);
