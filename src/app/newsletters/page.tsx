import Link from "next/link";
import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";
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
      <section className="glass-panel creator-glow rounded-3xl p-8 shadow-sm md:p-10">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand-cyan">
          Community
        </p>
        <h1 className="display-title mt-3 text-5xl font-semibold tracking-tight text-white md:text-6xl">
          Dhruv World Newsletter
        </h1>
        <p className="body-soft mt-6 max-w-3xl text-lg text-slate-600">
          Weekly notes on AI, systems, and execution.
        </p>
        <NewsletterForm />
      </section>

      <section className="glass-panel mt-8 rounded-3xl p-10 shadow-sm">
        <h2 className="section-title text-3xl font-semibold tracking-tight text-white">Publishing Flow</h2>
        <div className="mt-6 space-y-3">
          {distributionFlow.map((step) => (
            <p key={step} className="rounded-xl border border-white/10 bg-white/5 p-4 text-slate-300">
              {step}
            </p>
          ))}
        </div>
      </section>

      <section className="glass-panel mt-8 rounded-3xl p-10 shadow-sm">
        <h2 className="section-title text-3xl font-semibold tracking-tight text-white">Tracking Events</h2>
        <p className="body-soft mt-4 text-slate-300">
          Event hooks map cleanly to GA4, GTM, or internal dashboards.
        </p>
        <div className="mt-5 flex flex-wrap gap-3 text-sm">
          {kpiEvents.map((eventName) => (
            <span key={eventName} className="rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-slate-200">
              {eventName}
            </span>
          ))}
        </div>
        <div className="mt-6 flex gap-3">
          <Link href="/blog" className="cta-pill rounded-full border border-white/20 px-4 py-2 text-sm text-white">
            Read Blog
          </Link>
          <Link href="/resources" className="cta-pill rounded-full border border-white/20 px-4 py-2 text-sm text-white">
            Explore Resources
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
