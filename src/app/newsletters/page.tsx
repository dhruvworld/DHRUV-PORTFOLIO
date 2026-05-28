import Link from "next/link";
import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";
import { PageIntro } from "@/components/brand/page-intro";
import { NewsletterForm } from "@/components/forms/newsletter-form";

const distributionFlow = [
  "Publish long-form blog article.",
  "Repurpose into a LinkedIn strategic post.",
  "Convert into an Instagram carousel narrative.",
  "Extract points for short-form video script.",
  "Send weekly newsletter digest with links and insights.",
];

const kpiEvents = [
  "newsletter_submit_started",
  "newsletter_submit_success",
  "newsletter_submit_error",
  "search_query_changed",
];

export const metadata: Metadata = {
  title: "Newsletter",
  description:
    "Join the Dhruv World newsletter for weekly insights on AI workflows, systems, and founder execution.",
};

export default function NewslettersPage() {
  return (
    <SiteShell>
      <PageIntro
        eyebrow="Community"
        title="Dhruv World Newsletter"
        description="Weekly notes on AI, systems, and execution."
      />
      <section className="mt-8 rounded-2xl border hairline bg-white/65 p-7 md:p-9">
        <NewsletterForm />
      </section>

      <section className="mt-12 border-y hairline py-10">
        <h2 className="section-title text-3xl font-semibold tracking-tight">Publishing Flow</h2>
        <div className="mt-6 space-y-3">
          {distributionFlow.map((step) => (
            <p key={step} className="rounded-xl border hairline bg-white/60 p-4 text-[#575757]">
              {step}
            </p>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="section-title text-3xl font-semibold tracking-tight">Tracking Events</h2>
        <p className="body-soft mt-4">Event hooks map cleanly to GA4, GTM, or internal dashboards.</p>
        <div className="mt-5 flex flex-wrap gap-3 text-sm">
          {kpiEvents.map((eventName) => (
            <span key={eventName} className="rounded-full border hairline bg-white/60 px-3 py-1.5 text-[#555]">
              {eventName}
            </span>
          ))}
        </div>
        <div className="mt-6 flex gap-3">
          <Link href="/blog" className="cta-pill rounded-full border border-black/15 px-4 py-2 text-sm text-[#132232]">
            Read Blog
          </Link>
          <Link href="/resources" className="cta-pill rounded-full border border-black/15 px-4 py-2 text-sm text-[#132232]">
            Explore Resources
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
