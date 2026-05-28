import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";
import { AboutEditorial } from "@/components/brand/about-editorial";
import { ConsultationCTA } from "@/components/brand/consultation-cta";
import { aboutTimeline, educationTimeline, experienceTimeline } from "@/content/timeline";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "About",
  description:
    "About Dhruv Solanki: MS Computer Science student, Quantis Global founder, full-stack engineer, Manchester NH.",
  path: "/about",
});

function TimelineList({
  items,
  heading,
  id,
}: {
  items: typeof aboutTimeline;
  heading: string;
  id: string;
}) {
  return (
    <section className="mt-16" aria-labelledby={id}>
      <h2 id={id} className="section-title text-3xl font-semibold tracking-tight">
        {heading}
      </h2>
      <div className="mt-8 space-y-6">
        {items.map((item) => (
          <article key={item.id} className="border-b hairline pb-6">
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <p className="font-medium text-[#132232]">{item.label}</p>
              <p className="text-xs uppercase tracking-[0.12em] text-[#9a9a9a]">{item.period}</p>
            </div>
            <p className="mt-1 text-sm text-[#2e5e4e]">{item.sublabel}</p>
            <p className="body-soft mt-3">{item.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <SiteShell>
      <AboutEditorial />
      <TimelineList id="experience-timeline" items={experienceTimeline} heading="Experience & ventures" />
      <TimelineList id="education-timeline" items={educationTimeline} heading="Education" />
      <ConsultationCTA />
    </SiteShell>
  );
}
