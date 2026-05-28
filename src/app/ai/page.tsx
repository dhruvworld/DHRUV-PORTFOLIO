import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/site-shell";
import { PageIntro } from "@/components/brand/page-intro";
import { ConsultationCTA } from "@/components/brand/consultation-cta";
import { buildPageMetadata } from "@/lib/seo";

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
  ...buildPageMetadata({
    title: "AI Lab",
    description: "AI workflows, creator systems, and practical execution experiments by Dhruv Solanki.",
    path: "/ai",
    ogImage: "/ai/opengraph-image",
  }),
};

export default function AiPage() {
  return (
    <SiteShell>
      <PageIntro
        eyebrow="AI Lab"
        title="Practical AI Systems for Real Execution"
        description="AI workflows for faster execution and better decisions."
      />

      <section className="mt-12 grid gap-7 md:grid-cols-3">
        {tracks.map((track) => (
          <article key={track.title} className="border-b hairline pb-6">
            <h2 className="section-title text-3xl font-semibold">{track.title}</h2>
            <p className="body-soft mt-3">{track.detail}</p>
          </article>
        ))}
      </section>

      <section className="mt-8">
        <Link
          href="/blog"
          className="cta-pill rounded-full border border-black/15 px-5 py-2.5 text-sm text-[#132232]"
        >
          Explore AI Writing ↗
        </Link>
      </section>

      <ConsultationCTA />
    </SiteShell>
  );
}
