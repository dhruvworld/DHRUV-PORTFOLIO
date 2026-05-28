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
import { VisualGallery } from "@/components/brand/visual-gallery";

export default function Home() {
  return (
    <SiteShell>
      <SectionReveal className="md:pr-14">
        <CinematicHero />
      </SectionReveal>
      <SectionReveal className="md:pl-20">
        <IdentityStrip />
      </SectionReveal>
      <SectionReveal className="md:pr-20">
        <ManifestoSection />
      </SectionReveal>
      <SectionReveal className="md:pl-10">
        <SelectedWork />
      </SectionReveal>
      <SectionReveal className="md:pr-8">
        <CurrentFocus />
      </SectionReveal>
      <SectionReveal className="md:pl-16">
        <EditorialWriting />
      </SectionReveal>
      <SectionReveal className="md:pr-8">
        <QuantisPreview />
      </SectionReveal>
      <SectionReveal className="md:pl-8">
        <VisualGallery />
      </SectionReveal>
      <SectionReveal className="md:pr-12">
        <FinalCTA />
      </SectionReveal>
    </SiteShell>
  );
}
