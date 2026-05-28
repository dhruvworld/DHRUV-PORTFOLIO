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
      <section className="py-3 md:py-8">
        <p className="text-xs uppercase tracking-[0.2em] text-[#2e5e4e]">Founder Manifesto</p>
        <h1 className="display-title mt-4 text-5xl font-semibold md:text-6xl">
          Build with clarity. Execute with depth.
        </h1>
        <p className="body-soft mt-6 max-w-4xl text-lg md:text-xl">
          Dhruv World is the identity layer. Quantis Global is the execution layer.
        </p>
      </section>

      <section className="mt-12 grid gap-10 border-y border-black/10 py-12 md:grid-cols-2">
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
    </SiteShell>
  );
}
