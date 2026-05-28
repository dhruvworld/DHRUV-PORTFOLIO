import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";

const beliefs = [
  "Build systems, not noise.",
  "Execution beats intention.",
  "Identity compounds when content and products align.",
  "Global ambition can start from local roots.",
];

export const metadata: Metadata = {
  title: "Founder",
  description: "Founder manifesto, principles, and operating focus of Dhruv Solanki.",
  openGraph: {
    images: ["/founder/opengraph-image"],
  },
  twitter: {
    images: ["/founder/opengraph-image"],
  },
};

export default function FounderPage() {
  return (
    <SiteShell>
      <section className="glass-panel creator-glow rounded-3xl p-8 md:p-12">
        <p className="text-xs uppercase tracking-[0.2em] text-brand-cyan">Founder Manifesto</p>
        <h1 className="display-title mt-4 text-5xl font-semibold text-slate-900 md:text-6xl">
          Build with clarity. Execute with depth.
        </h1>
        <p className="body-soft mt-6 max-w-4xl text-lg text-slate-600 md:text-xl">
          Dhruv World is the identity layer. Quantis Global is the execution layer.
        </p>
      </section>

      <section className="mt-8 grid gap-5 md:grid-cols-2">
        <article className="glass-panel rounded-2xl p-7">
          <h2 className="section-title text-3xl font-semibold text-slate-900">Operating Principles</h2>
          <div className="mt-5 space-y-3 text-slate-600">
            {beliefs.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </article>
        <article className="glass-panel rounded-2xl p-7">
          <h2 className="section-title text-3xl font-semibold text-slate-900">Current Focus</h2>
          <div className="mt-5 space-y-3 text-slate-600">
            <p>AI-first creator and productivity workflows</p>
            <p>Personal authority through writing and products</p>
            <p>Global trade and sourcing via Quantis Global</p>
            <p>Long-term digital identity infrastructure</p>
          </div>
        </article>
      </section>
    </SiteShell>
  );
}
