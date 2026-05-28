import Link from "next/link";
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

export default function NewslettersPage() {
  return (
    <SiteShell>
      <section className="glass-panel creator-glow rounded-3xl p-8 shadow-sm md:p-10">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand-cyan">
          Community
        </p>
        <h1 className="display-title mt-3 text-5xl font-semibold tracking-tight text-slate-900 md:text-6xl">
          Dhruv World Newsletter
        </h1>
        <p className="body-soft mt-6 max-w-3xl text-lg text-slate-600">
          Weekly notes on AI, systems, and execution.
        </p>
        <NewsletterForm />
      </section>

      <section className="glass-panel mt-8 rounded-3xl p-10 shadow-sm">
        <h2 className="section-title text-3xl font-semibold tracking-tight text-slate-900">Publishing Flow</h2>
        <div className="mt-6 space-y-3">
          {distributionFlow.map((step) => (
            <p key={step} className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-slate-600">
              {step}
            </p>
          ))}
        </div>
      </section>

      <section className="glass-panel mt-8 rounded-3xl p-10 shadow-sm">
        <h2 className="section-title text-3xl font-semibold tracking-tight text-slate-900">Tracking Events</h2>
        <p className="body-soft mt-4 text-slate-600">
          Event hooks map cleanly to GA4, GTM, or internal dashboards.
        </p>
        <div className="mt-5 flex flex-wrap gap-3 text-sm">
          {kpiEvents.map((eventName) => (
            <span key={eventName} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-slate-700">
              {eventName}
            </span>
          ))}
        </div>
        <div className="mt-6 flex gap-3">
          <Link href="/blog" className="cta-pill rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-900">
            Read Blog
          </Link>
          <Link href="/resources" className="cta-pill rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-900">
            Explore Resources
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
