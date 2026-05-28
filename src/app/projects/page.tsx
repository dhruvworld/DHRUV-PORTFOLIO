import { SiteShell } from "@/components/site-shell";

const highlightedProjects = [
  {
    title: "Travel Website Platform",
    stack: "Next.js, Firebase, Tailwind CSS",
    details: [
      "Developed a scalable travel platform with admin dashboard and package management.",
      "Integrated image uploads, responsive UI systems, and Firebase authentication.",
      "Implemented SEO optimization and dynamic content workflows.",
    ],
  },
  {
    title: "OpenSourceDisplayLink",
    stack: "Cross-platform streaming architecture",
    details: [
      "Built a display extension solution inspired by Duet Display.",
      "Implemented real-time streaming, low-latency communication, and pointer tracking.",
      "Optimized WebP compression and fullscreen rendering performance.",
    ],
  },
  {
    title: "E-Resume Portal",
    stack: "Python, Django",
    details: [
      "Built resume generation and management platform with authentication systems.",
      "Implemented admin-side management and responsive interfaces.",
      "Delivered as internship project with deployment and QA workflow.",
    ],
  },
];

export default function ProjectsPage() {
  return (
    <SiteShell>
      <section className="glass-panel creator-glow rounded-3xl p-10 shadow-sm">
        <h1 className="display-title text-5xl font-semibold tracking-tight text-white md:text-6xl">
          Projects
        </h1>
        <p className="body-soft mt-6 max-w-4xl text-lg text-slate-300">
          Real products and engineering builds across full-stack development, AI workflows,
          and platform systems.
        </p>
      </section>

      <section className="mt-8 grid gap-5">
        {highlightedProjects.map((project) => (
          <article key={project.title} className="glass-panel creator-card rounded-2xl p-7">
            <h2 className="section-title text-3xl font-semibold text-white">{project.title}</h2>
            <p className="mt-2 text-sm text-brand-cyan">{project.stack}</p>
            <ul className="mt-5 space-y-2 text-sm text-slate-300">
              {project.details.map((line) => (
                <li key={line}>- {line}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </SiteShell>
  );
}
