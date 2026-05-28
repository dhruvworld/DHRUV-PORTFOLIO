import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";
import { PageIntro } from "@/components/brand/page-intro";
import { ConsultationCTA } from "@/components/brand/consultation-cta";
import { buildPageMetadata } from "@/lib/seo";

const beliefs = [
  "Build systems, not noise.",
  "Execution beats intention.",
  "Identity compounds when content and products align.",
  "Global ambition can start from local roots.",
];

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: "Founder",
    description: "Founder manifesto, principles, and operating focus of Dhruv Solanki.",
    path: "/founder",
    ogImage: "/founder/opengraph-image",
  }),
};

export default function FounderPage() {
  return (
    <SiteShell>
      <PageIntro
        eyebrow="Founder Manifesto"
        title="Build with clarity. Execute with depth."
        description="Dhruv World is the identity layer. Quantis Global is the execution layer."
      />

      <section className="mt-14 grid gap-10 border-y hairline py-12 md:grid-cols-2">
        <article>
          <h2 className="section-title text-3xl font-semibold">Operating Principles</h2>
          <div className="mt-5 space-y-3 text-[#575757]">
            {beliefs.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </article>
        <article>
          <h2 className="section-title text-3xl font-semibold">Current Focus</h2>
          <div className="mt-5 space-y-3 text-[#575757]">
            <p>AI-first creator and productivity workflows</p>
            <p>Personal authority through writing and products</p>
            <p>Global trade and sourcing via Quantis Global</p>
            <p>Long-term digital identity infrastructure</p>
          </div>
        </article>
      </section>

      <ConsultationCTA />
    </SiteShell>
  );
}
