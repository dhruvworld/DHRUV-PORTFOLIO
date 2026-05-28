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
      <section className="py-2 md:py-6">
        <p className="text-xs uppercase tracking-[0.2em] text-[#2e5e4e]">About</p>
        <h1 className="display-title mt-4 text-5xl font-semibold tracking-tight md:text-6xl">
          A long-term builder with a systems mindset.
        </h1>
        <div className="body-soft mt-8 max-w-4xl space-y-4 text-lg md:text-xl">
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

      <section className="mt-14 grid gap-10 border-y border-black/10 py-12 md:grid-cols-2">
        <article>
          <h2 className="section-title text-2xl font-semibold">Philosophy</h2>
          <p className="body-soft mt-4">
            Execution over noise. Clarity over complexity. Compounding over spikes.
          </p>
        </article>
        <article>
          <h2 className="section-title text-2xl font-semibold">Mission</h2>
          <p className="body-soft mt-4">
            Build a premium identity ecosystem where writing, projects, and business proof reinforce
            each other over years, not weeks.
          </p>
        </article>
      </section>

      <section className="mt-16">
        <h2 className="section-title text-4xl font-semibold tracking-tight">Timeline</h2>
        <div className="mt-8 space-y-6">
          {timeline.map((item) => (
            <article key={item.label} className="border-b border-black/10 pb-6">
              <p className="text-sm text-[#2e5e4e]">{item.label}</p>
              <p className="body-soft mt-3">{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16 rounded-3xl border border-black/10 bg-white/60 p-10">
        <h2 className="section-title text-4xl font-semibold tracking-tight">Future Vision</h2>
        <p className="body-soft mt-5 max-w-4xl">
          Search, content, and product execution should work as one system. The end goal is a
          durable digital brand that is clear to people, credible to partners, and legible to Google.
        </p>
      </section>
    </SiteShell>
  );
}
