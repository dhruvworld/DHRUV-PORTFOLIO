import Link from "next/link";
import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";
import { ConsultationCTA } from "@/components/brand/consultation-cta";

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

export const metadata: Metadata = {
  title: "Quantis Global",
  description:
    "Quantis Global by Dhruv Solanki: premium trade, sourcing, procurement, and international business execution.",
};

export default function QuantisGlobalPage() {
  return (
    <SiteShell>
      <section className="rounded-[1.75rem] border border-[#c9a66b]/35 bg-[linear-gradient(170deg,rgba(201,166,107,0.18),rgba(201,166,107,0.03))] p-10">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#8f6a34]">Quantis Global</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
          Global Trade • Sourcing • Import/Export
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-[#535353]">
          A premium trade and sourcing identity focused on practical execution, procurement reliability, and
          long-term international partnerships.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/contact" className="rounded-full bg-[#132232] px-5 py-3 text-sm font-medium text-[#f8f7f4]">
            Explore Services
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-black/20 px-5 py-3 text-sm font-medium text-[#132232]"
          >
            Discuss Partnership
          </Link>
        </div>
      </section>

      <section className="mt-10 border-y hairline py-10">
        <h2 className="text-3xl font-semibold tracking-tight">Service Pillars</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {servicePillars.map((item) => (
            <article key={item} className="border-b hairline pb-4">
              <h3 className="font-semibold text-[#232323]">{item}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-3xl font-semibold tracking-tight">Trade Workflow</h2>
        <div className="mt-6 space-y-3">
          {workflow.map((step) => (
            <p key={step} className="rounded-xl border hairline bg-white/65 p-4 text-[#575757]">
              {step}
            </p>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-3xl font-semibold tracking-tight">Industries and Expansion Focus</h2>
        <p className="mt-4 max-w-4xl text-lg leading-8 text-[#575757]">
          Quantis Global supports businesses expanding into international markets through category-focused
          sourcing systems, quality-first procurement, and delivery coordination.
        </p>
      </section>

      <ConsultationCTA />
    </SiteShell>
  );
}
