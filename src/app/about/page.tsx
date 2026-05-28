import { SiteShell } from "@/components/site-shell";
import type { Metadata } from "next";

const timeline = [
  { label: "Gujarat", detail: "Engineering roots and early systems thinking." },
  { label: "Manchester", detail: "Graduate studies and product execution." },
  { label: "Quantis Global", detail: "Global trade, sourcing, and operations." },
  { label: "Dhruv World", detail: "Digital identity and authority infrastructure." },
];

export const metadata: Metadata = {
  title: "About",
  description:
    "About Dhruv Solanki: builder, founder, and operator across AI systems, business execution, and digital identity.",
};

export default function AboutPage() {
  return (
    <SiteShell>
      <section className="glass-panel creator-glow rounded-3xl p-8 shadow-sm md:p-12">
        <p className="text-xs uppercase tracking-[0.2em] text-brand-cyan">About</p>
        <h1 className="display-title mt-4 text-5xl font-semibold tracking-tight text-white md:text-6xl">
          A long-term builder with a systems mindset.
        </h1>
        <div className="body-soft mt-7 max-w-4xl space-y-4 text-lg md:text-xl">
          <p>
            I build at the intersection of AI systems, business execution, and digital storytelling.
            My work starts with one question: how do we turn ideas into reliable operating systems?
          </p>
          <p>
            From Gujarat to global workflows, I have focused on practical outcomes - products that
            ship, systems that scale, and narratives that stay consistent across search, media, and
            business touchpoints.
          </p>
        </div>
      </section>

      <section className="mt-8 grid gap-6 md:grid-cols-2">
        <article className="glass-panel creator-card rounded-2xl p-6">
          <h2 className="section-title text-2xl font-semibold text-white">Philosophy</h2>
          <p className="body-soft mt-4">
            Execution over noise. Clarity over complexity. Compounding over spikes.
          </p>
        </article>
        <article className="glass-panel creator-card rounded-2xl p-6">
          <h2 className="section-title text-2xl font-semibold text-white">Mission</h2>
          <p className="body-soft mt-4">
            Build a premium identity ecosystem where writing, projects, and business proof reinforce
            each other over years, not weeks.
          </p>
        </article>
      </section>

      <section className="glass-panel mt-8 rounded-3xl p-10 shadow-sm">
        <h2 className="section-title text-4xl font-semibold tracking-tight text-white">Timeline</h2>
        <div className="mt-8 space-y-5">
          {timeline.map((item) => (
            <article key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm text-brand-cyan">{item.label}</p>
              <p className="body-soft mt-3">{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="glass-panel mt-8 rounded-3xl p-10 shadow-sm">
        <h2 className="section-title text-4xl font-semibold tracking-tight text-white">Future Vision</h2>
        <p className="body-soft mt-5 max-w-4xl">
          Search, content, and product execution should work as one system. The end goal is a
          durable digital brand that is clear to people, credible to partners, and legible to Google.
        </p>
      </section>
    </SiteShell>
  );
}
