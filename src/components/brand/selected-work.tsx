import Link from "next/link";

const projects = [
  {
    title: "Quantis Global",
    what: "International sourcing and trade execution platform.",
    why: "Transforms fragmented procurement into a reliable operating system.",
    status: "Active",
    category: "Business Systems",
  },
  {
    title: "SaveMePDF",
    what: "Fast document workflow for PDF, Word, and Excel tasks.",
    why: "Improves creator and operator productivity through utility-first workflows.",
    status: "In Build",
    category: "Productivity",
  },
  {
    title: "Post2Plan",
    what: "Turns raw ideas into structured publishing plans.",
    why: "Creates consistent media cadence for authority and growth.",
    status: "Prototype",
    category: "AI Workflow",
  },
  {
    title: "OpenSourceDisplayLink",
    what: "Cross-device display extension concept.",
    why: "Explores low-latency interactions for practical utility software.",
    status: "R&D",
    category: "Engineering",
  },
  {
    title: "Dhruv World",
    what: "Personal digital identity and media infrastructure.",
    why: "Unifies search presence, content, and founder narrative.",
    status: "Live",
    category: "Identity Platform",
  },
];

export function SelectedWork() {
  return (
    <section className="mt-16 space-y-8">
      <div className="flex items-end justify-between gap-4">
        <h2 className="section-title text-4xl font-semibold text-white md:text-5xl">Selected Work</h2>
        <Link href="/projects" className="text-sm text-slate-300 hover:text-brand-cyan">
          View all projects
        </Link>
      </div>
      <div className="space-y-5">
        {projects.map((project) => (
          <article key={project.title} className="group border-b border-white/10 pb-5 last:border-none">
            <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.14em] text-slate-400">
              <span>{project.category}</span>
              <span>•</span>
              <span>{project.status}</span>
            </div>
            <h3 className="mt-2 text-3xl font-semibold text-white">{project.title}</h3>
            <p className="mt-2 text-slate-300">{project.what}</p>
            <p className="mt-2 text-slate-400">{project.why}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
