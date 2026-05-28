import Link from "next/link";
import { SiteShell } from "@/components/site-shell";

const servicePillars = [
  "International Sourcing",
  "Procurement Services",
  "Supplier Validation",
  "Logistics and Supply Chain Coordination",
  "Market Expansion Support",
];

const workflow = [
  "Source: identify qualified supply options by market and category.",
  "Verify: validate vendor fit, pricing viability, and documentation readiness.",
  "Ship: coordinate logistics flow across partners and channels.",
  "Deliver: align fulfillment expectations with business goals and timelines.",
];

export default function QuantisGlobalPage() {
  return (
    <SiteShell>
      <section className="rounded-3xl border border-white/10 bg-[linear-gradient(170deg,rgba(198,168,106,0.2),rgba(198,168,106,0.04))] p-10 text-white shadow-sm">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-brand-gold">
          Quantis Global
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
          Global Trade • Sourcing • Import/Export
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
          A premium trade and sourcing identity focused on practical execution,
          procurement reliability, and long-term international partnerships.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/contact" className="rounded-full bg-white px-5 py-3 text-sm font-medium text-[#0b1020]">
            Explore Services
          </Link>
          <Link href="/collaborations" className="rounded-full border border-white/20 px-5 py-3 text-sm font-medium">
            Discuss Partnership
          </Link>
        </div>
      </section>

      <section className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-10 text-white shadow-sm">
        <h2 className="text-3xl font-semibold tracking-tight text-brand-gold">Service Pillars</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {servicePillars.map((item) => (
            <article key={item} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="font-semibold">{item}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-10 text-white shadow-sm">
        <h2 className="text-3xl font-semibold tracking-tight text-brand-gold">Trade Workflow</h2>
        <div className="mt-6 space-y-3">
          {workflow.map((step) => (
            <p key={step} className="rounded-xl border border-white/10 bg-white/5 p-4 text-slate-300">
              {step}
            </p>
          ))}
        </div>
      </section>

      <section className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-10 text-white shadow-sm">
        <h2 className="text-3xl font-semibold tracking-tight text-brand-gold">Industries and Expansion Focus</h2>
        <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-300">
          Quantis Global supports businesses expanding into international markets through
          category-focused sourcing systems, quality-first procurement, and delivery
          coordination. The model is built for long-term reliability, not short-term
          transactional volume.
        </p>
      </section>

      <section className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-10 text-white shadow-sm">
        <h2 className="text-3xl font-semibold tracking-tight text-brand-gold">Founder Connection</h2>
        <p className="mt-4 text-slate-300">
          Quantis Global is part of the broader Dhruv Solanki (Dhruv Solankii) business
          ecosystem and is integrated with Dhruv World content and case-study systems.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/business" className="rounded-full border border-white/20 px-4 py-2 text-sm">
            Business
          </Link>
          <Link href="/case-studies" className="rounded-full border border-white/20 px-4 py-2 text-sm">
            Case Studies
          </Link>
          <Link href="/contact" className="rounded-full border border-white/20 px-4 py-2 text-sm">
            Contact
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
