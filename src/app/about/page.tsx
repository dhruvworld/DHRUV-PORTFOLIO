import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";
import { AboutEditorial } from "@/components/brand/about-editorial";
import { ConsultationCTA } from "@/components/brand/consultation-cta";

const timeline = [
  { label: "Gujarat", detail: "Engineering roots and early systems thinking." },
  { label: "Manchester", detail: "Graduate studies and product execution." },
  { label: "Quantis Global", detail: "Global trade, sourcing, and operations." },
  { label: "Dhruv World", detail: "Digital identity and authority infrastructure." },
];

export const metadata: Metadata = {
  title: "About",
  description:
    "About Dhruv Solanki: builder, founder, and operator across AI systems, business execution, and digital identity.",
};

export default function AboutPage() {
  return (
    <SiteShell>
      <AboutEditorial />

      <section className="mt-20">
        <h2 className="section-title text-4xl font-semibold tracking-tight">Timeline</h2>
        <div className="mt-8 space-y-6">
          {timeline.map((item) => (
            <article key={item.label} className="border-b hairline pb-6">
              <p className="text-sm text-[#2e5e4e]">{item.label}</p>
              <p className="body-soft mt-3">{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <ConsultationCTA />
    </SiteShell>
  );
}
