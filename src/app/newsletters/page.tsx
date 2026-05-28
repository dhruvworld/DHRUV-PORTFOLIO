import Link from "next/link";
import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";
import { PageIntro } from "@/components/brand/page-intro";
import { NewsletterForm } from "@/components/forms/newsletter-form";
import { buildPageMetadata } from "@/lib/seo";

const distributionFlow = [
  "Long-form essay on systems, AI, and execution.",
  "LinkedIn post distilled for operators and founders.",
  "Carousel-ready narrative for Instagram.",
  "Short-form script hooks for video repurposing.",
  "Weekly digest with links back to the full archive.",
];

const subscriberBenefits = [
  "Practical AI workflow breakdowns",
  "Founder notes on identity and authority",
  "Product and business execution patterns",
  "Early access to resources and case studies",
];

export const metadata: Metadata = buildPageMetadata({
  title: "Newsletter",
  description:
    "Join the Dhruv World newsletter for weekly insights on AI workflows, systems, and founder execution.",
  path: "/newsletters",
});

export default function NewslettersPage() {
  return (
    <SiteShell>
      <PageIntro
        eyebrow="Community"
        title="Dhruv World Newsletter"
        description="Weekly notes on AI, systems, and execution — written for builders who ship."
      />
      <section className="mt-8 rounded-2xl border hairline bg-white/65 p-7 md:p-9">
        <NewsletterForm />
      </section>

      <section className="mt-12 grid gap-10 border-y hairline py-10 md:grid-cols-2">
        <article>
          <h2 className="section-title text-3xl font-semibold tracking-tight">What you receive</h2>
          <div className="mt-6 space-y-3">
            {subscriberBenefits.map((benefit) => (
              <p key={benefit} className="flex gap-3 text-[#575757]">
                <span className="mt-1 text-[#2e5e4e]">✦</span>
                <span>{benefit}</span>
              </p>
            ))}
          </div>
        </article>
        <article>
          <h2 className="section-title text-3xl font-semibold tracking-tight">Publishing rhythm</h2>
          <div className="mt-6 space-y-3">
            {distributionFlow.map((step) => (
              <p key={step} className="rounded-xl border hairline bg-white/60 p-4 text-sm text-[#575757]">
                {step}
              </p>
            ))}
          </div>
        </article>
      </section>

      <section className="mt-12 flex flex-wrap gap-3">
        <Link href="/blog" className="cta-pill rounded-full border border-black/15 px-4 py-2 text-sm text-[#132232]">
          Read AI Journal ↗
        </Link>
        <Link href="/resources" className="cta-pill rounded-full border border-black/15 px-4 py-2 text-sm text-[#132232]">
          Explore resources
        </Link>
      </section>
    </SiteShell>
  );
}
