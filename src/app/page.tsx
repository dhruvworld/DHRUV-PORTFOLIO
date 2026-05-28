import Link from "next/link";
import { MotionSection } from "@/components/motion-section";
import { SiteShell } from "@/components/site-shell";

const creatorSignals = [
  { label: "Focus", value: "AI Systems + Creator Distribution" },
  { label: "Mode", value: "Build in Public" },
  { label: "Base", value: "Gujarat -> Global Internet" },
];

const aiStack = [
  "Prompt systems and workflow automation",
  "Next.js content and search architecture",
  "Structured SEO and entity graph design",
  "Creator-led growth loops and repurposing pipelines",
];

const creatorMetrics = [
  { label: "Current Role", value: "Founder - Quantis Global" },
  { label: "Education", value: "MS Computer Science (SNHU)" },
  { label: "Location", value: "Manchester, New Hampshire" },
];

const aiLabTracks = [
  {
    title: "AI Workflow Systems",
    summary: "Designing repeatable systems for research, writing, and execution.",
  },
  {
    title: "Prompt Productization",
    summary: "Turning prompts into operational templates, tools, and resources.",
  },
  {
    title: "Creator Intelligence Stack",
    summary: "Building AI-assisted growth loops for publishing and audience engagement.",
  },
];

const connectLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/dhruvworld/" },
  { label: "GitHub", href: "https://github.com/dhruvworld" },
  { label: "Instagram", href: "https://instagram.com/_dhruvworld" },
  { label: "Facebook ID", href: "https://www.facebook.com/dhruv.solanki.4701" },
  { label: "Facebook Page", href: "https://www.facebook.com/TechXdhruvworld" },
];

const coreSkills = [
  "Python",
  "Django",
  "Next.js",
  "Firebase",
  "JavaScript",
  "MySQL",
  "REST APIs",
  "AI Workflows",
  "SEO Strategy",
  "Full Stack Development",
];

export default function Home() {
  return (
    <SiteShell>
      <MotionSection>
        <section className="glass-panel creator-glow grid gap-12 rounded-3xl p-8 shadow-sm md:p-12">
          <div className="grid gap-8 md:grid-cols-[1.4fr_1fr]">
            <div className="space-y-7">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-brand-gold">
                Dhruv Solankii
              </p>
              <h1 className="cyber-title display-title max-w-3xl text-5xl font-semibold tracking-tight text-white md:text-7xl">
                Dhruv Solanki
              </h1>
              <p className="text-xl text-slate-300">(Dhruv Solankii)</p>
              <p className="text-base font-medium text-brand-cyan md:text-xl">
                AI • Business • Technology • Creator
              </p>
              <p className="body-soft max-w-3xl text-lg text-slate-300 md:text-xl">
                Results-driven Computer Science graduate student and founder building AI systems,
                full-stack products, global trade operations, and scalable digital brands through
                Dhruv World and Quantis Global.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/projects" className="rounded-full bg-brand-cyan px-6 py-3 text-sm font-medium text-slate-950">
                  Explore Projects
                </Link>
                <Link href="/blog" className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white">
                  Read Articles
                </Link>
                <Link href="/portfolio" className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white">
                  View Portfolio
                </Link>
                <Link href="/contact" className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white">
                  Contact
                </Link>
              </div>
              <div className="mt-2">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Connect</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {connectLinks.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-xs text-slate-200 hover:border-brand-cyan hover:text-brand-cyan"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-brand-navy to-slate-900 p-6 text-slate-100">
              <p className="text-xs uppercase tracking-[0.2em] text-brand-cyan">Creator Signal</p>
              <div className="mt-5 space-y-4">
                {creatorSignals.map((item) => (
                  <div key={item.label} className="rounded-xl border border-white/15 bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-[0.15em] text-slate-400">{item.label}</p>
                    <p className="mt-1 text-sm">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {creatorMetrics.map((metric) => (
              <article key={metric.label} className="creator-card rounded-2xl border border-white/15 bg-white/5 p-5">
                <p className="text-xs uppercase tracking-[0.15em] text-brand-violet">{metric.label}</p>
                <p className="section-title mt-2 text-xl font-semibold tracking-tight text-white">
                  {metric.value}
                </p>
              </article>
            ))}
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <article className="creator-card rounded-2xl border border-white/15 bg-white/5 p-6">
              <h2 className="section-title text-2xl font-semibold text-white">AI Creator Stack</h2>
              <ul className="mt-5 space-y-3 text-sm text-slate-300">
                {aiStack.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </article>
            <article className="creator-card rounded-2xl border border-white/15 bg-white/5 p-6">
              <h2 className="section-title text-2xl font-semibold text-white">Professional Snapshot</h2>
              <div className="mt-5 space-y-3 text-sm text-slate-300">
                <p>- Founder, Quantis Global (Global sourcing and import-export operations)</p>
                <p>- Student Assistant, Assistive Technology (SNHU)</p>
                <p>- Python Intern, Mass Infotech (Backend and application modules)</p>
                <p>- Python Django Intern, Innovate Webtec (E-Resume Portal)</p>
              </div>
            </article>
          </div>

          <section className="rounded-2xl border border-white/15 bg-white/5 p-6">
            <h2 className="section-title text-3xl font-semibold tracking-tight text-white">
              Core Technical Skills
            </h2>
            <div className="mt-5 flex flex-wrap gap-3">
              {coreSkills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-sm text-slate-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-white/15 bg-white/5 p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="section-title text-3xl font-semibold tracking-tight text-white">AI Lab</h2>
              <span className="badge-gradient rounded-full px-3 py-1 text-xs font-medium text-brand-cyan">
                Experimental + Shipping
              </span>
            </div>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {aiLabTracks.map((track) => (
                <article key={track.title} className="creator-card rounded-2xl border border-white/15 bg-white/5 p-5">
                  <h3 className="text-lg font-semibold text-white">{track.title}</h3>
                  <p className="mt-2 text-sm text-slate-300">{track.summary}</p>
                </article>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/blog" className="rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white">
                Read AI Notes
              </Link>
              <Link href="/tools" className="rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white">
                Explore Tools
              </Link>
              <Link href="/newsletters" className="rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white">
                Join Newsletter
              </Link>
            </div>
          </section>
        </section>
      </MotionSection>
    </SiteShell>
  );
}
