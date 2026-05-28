import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";
import { AboutEditorial } from "@/components/brand/about-editorial";
import { ConsultationCTA } from "@/components/brand/consultation-cta";
import { aboutTimeline } from "@/content/timeline";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "About",
  description:
    "About Dhruv Solanki: builder, founder, and operator across AI systems, business execution, and digital identity.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <SiteShell>
      <AboutEditorial />

      <section className="mt-20">
        <h2 className="section-title text-4xl font-semibold tracking-tight">Timeline</h2>
        <div className="mt-8 space-y-6">
          {aboutTimeline.map((item) => (
            <article key={item.label} className="border-b hairline pb-6">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <p className="text-sm text-[#2e5e4e]">{item.label}</p>
                {item.period ? (
                  <p className="text-xs uppercase tracking-[0.12em] text-[#9a9a9a]">{item.period}</p>
                ) : null}
              </div>
              <p className="body-soft mt-3">{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <ConsultationCTA />
    </SiteShell>
  );
}
