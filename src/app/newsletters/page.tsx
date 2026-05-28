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
      <section className="glass-panel creator-glow rounded-3xl p-10 shadow-sm">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-brand-gold">
          Community and Newsletter
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white md:text-5xl">
          Dhruv World Newsletter
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          Weekly insights on AI workflows, technology systems, and founder execution
          from Dhruv Solanki (Dhruv Solankii).
        </p>
        <NewsletterForm />
      </section>

      <section className="glass-panel mt-8 rounded-3xl p-10 shadow-sm">
        <h2 className="text-3xl font-semibold tracking-tight text-white">Repurposing Pipeline</h2>
        <div className="mt-6 space-y-3">
          {distributionFlow.map((step) => (
            <p key={step} className="rounded-xl border border-white/15 bg-white/5 p-4 text-slate-300">
              {step}
            </p>
          ))}
        </div>
      </section>

      <section className="glass-panel mt-8 rounded-3xl p-10 shadow-sm">
        <h2 className="text-3xl font-semibold tracking-tight text-white">KPI Instrumentation Points</h2>
        <p className="mt-4 text-slate-300">
          These events are wired through a client analytics utility and can be mapped to
          GTM, GA4 custom events, or your data warehouse pipeline.
        </p>
        <div className="mt-5 flex flex-wrap gap-3 text-sm">
          {kpiEvents.map((eventName) => (
            <span key={eventName} className="rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-white">
              {eventName}
            </span>
          ))}
        </div>
        <div className="mt-6 flex gap-3">
          <Link href="/blog" className="rounded-full border border-white/20 px-4 py-2 text-sm text-white">
            Read Blog
          </Link>
          <Link href="/resources" className="rounded-full border border-white/20 px-4 py-2 text-sm text-white">
            Explore Resources
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
