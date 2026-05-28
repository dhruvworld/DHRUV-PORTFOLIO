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
      <section className="py-3 md:py-8">
        <p className="text-xs uppercase tracking-[0.2em] text-[#2e5e4e]">AI Lab</p>
        <h1 className="display-title mt-4 text-5xl font-semibold md:text-6xl">
          Practical AI Systems for Real Execution
        </h1>
        <p className="body-soft mt-6 max-w-4xl text-lg md:text-xl">
          AI workflows for faster execution and better decisions.
        </p>
      </section>

      <section className="mt-12 grid gap-7 md:grid-cols-3">
        {tracks.map((track) => (
          <article key={track.title} className="border-b border-black/10 pb-6">
            <h2 className="section-title text-3xl font-semibold text-[#111]">{track.title}</h2>
            <p className="body-soft mt-3 text-[#6b6b6b]">{track.detail}</p>
          </article>
        ))}
      </section>

      <section className="mt-8">
        <Link
          href="/blog"
          className="cta-pill rounded-full border border-black/15 px-5 py-2.5 text-sm text-[#111]"
        >
          Explore AI Writing
        </Link>
      </section>
    </SiteShell>
  );
}
