import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";
import { CinematicHero } from "@/components/brand/cinematic-hero";
import { CurrentFocus } from "@/components/brand/current-focus";
import { EditorialWriting } from "@/components/brand/editorial-writing";
import { FinalCTA } from "@/components/brand/final-cta";
import { IdentityStrip } from "@/components/brand/identity-strip";
import { ManifestoSection } from "@/components/brand/manifesto-section";
import { QuantisPreview } from "@/components/brand/quantis-preview";
import { SectionReveal } from "@/components/brand/section-reveal";
import { SelectedWork } from "@/components/brand/selected-work";
import { CoreStacks } from "@/components/brand/core-stacks";
import { EditorialTestimonials } from "@/components/brand/editorial-testimonials";
import { buildPageMetadata, siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: siteConfig.name,
    description: siteConfig.description,
    path: "/",
  }),
  title: {
    absolute: "Dhruv Solanki (Dhruv Solankii) | Dhruv World",
  },
};

export default function Home() {
  return (
    <SiteShell>
      <SectionReveal>
        <CinematicHero />
      </SectionReveal>
      <SectionReveal>
        <IdentityStrip />
      </SectionReveal>
      <SectionReveal>
        <ManifestoSection />
      </SectionReveal>
      <SectionReveal>
        <SelectedWork />
      </SectionReveal>
      <SectionReveal>
        <CurrentFocus />
      </SectionReveal>
      <SectionReveal>
        <EditorialWriting />
      </SectionReveal>
      <SectionReveal>
        <EditorialTestimonials />
      </SectionReveal>
      <SectionReveal>
        <QuantisPreview />
      </SectionReveal>
      <SectionReveal>
        <CoreStacks />
      </SectionReveal>
      <SectionReveal>
        <FinalCTA />
      </SectionReveal>
    </SiteShell>
  );
}
