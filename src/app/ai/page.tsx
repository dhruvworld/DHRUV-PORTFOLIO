import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/site-shell";

const tracks = [
  {
    title: "Workflow Automation",
    detail: "Prompt chains, repeatable execution systems, and productivity loops.",
  },
  {
    title: "Creator AI",
    detail: "AI-assisted content planning, repurposing pipelines, and media operations.",
  },
  {
    title: "AI Product Experiments",
    detail: "Testing utility-first product ideas for students, creators, and founders.",
  },
];

export const metadata: Metadata = {
  title: "AI Lab",
  description: "AI workflows, creator systems, and practical execution experiments by Dhruv Solanki.",
  openGraph: {
    images: ["/ai/opengraph-image"],
  },
  twitter: {
    images: ["/ai/opengraph-image"],
  },
};

export default function AiPage() {
  return (
    <SiteShell>
      <section className="glass-panel creator-glow rounded-3xl p-8 md:p-12">
        <p className="text-xs uppercase tracking-[0.2em] text-brand-cyan">AI Lab</p>
        <h1 className="display-title mt-4 text-5xl font-semibold text-slate-900 md:text-6xl">
          Practical AI Systems for Real Execution
        </h1>
        <p className="body-soft mt-6 max-w-4xl text-lg text-slate-600 md:text-xl">
          AI workflows for faster execution and better decisions.
        </p>
      </section>

      <section className="mt-8 grid gap-5 md:grid-cols-3">
        {tracks.map((track) => (
          <article key={track.title} className="glass-panel creator-card rounded-2xl p-6">
            <h2 className="section-title text-2xl font-semibold text-slate-900">{track.title}</h2>
            <p className="body-soft mt-3 text-slate-600">{track.detail}</p>
          </article>
        ))}
      </section>

      <section className="mt-8">
        <Link
          href="/blog"
          className="cta-pill rounded-full border border-slate-200 px-5 py-2.5 text-sm text-slate-900"
        >
          Explore AI Writing
        </Link>
      </section>
    </SiteShell>
  );
}
