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
    <section className="mt-22 space-y-11">
      <div className="flex items-end justify-between gap-4">
        <h2 className="section-title text-4xl font-semibold md:text-5xl">Selected Work</h2>
        <Link href="/projects" className="text-sm text-[#5f5f5f] hover:text-[#2e5e4e]">
          View all projects
        </Link>
      </div>
      <div className="space-y-10">
        {projects.map((project) => (
          <article key={project.title} className="group border-b hairline pb-9 last:border-none">
            <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.14em] text-[#777]">
              <span>{project.category}</span>
              <span>•</span>
              <span>{project.status}</span>
            </div>
            <h3 className="mt-2 text-4xl font-semibold text-[#111]">{project.title}</h3>
            <p className="mt-3 max-w-3xl text-[#333]">{project.what}</p>
            <p className="mt-2 max-w-3xl text-[#6b6b6b]">{project.why}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
