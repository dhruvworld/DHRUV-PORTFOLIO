import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";
import { CinematicHero } from "@/components/brand/cinematic-hero";
import { CurrentFocus } from "@/components/brand/current-focus";
import { EditorialWriting } from "@/components/brand/editorial-writing";
import { FinalCTA } from "@/components/brand/final-cta";
import { QuantisPreview } from "@/components/brand/quantis-preview";
import { SelectedWork } from "@/components/brand/selected-work";
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
      <CinematicHero />
      <SelectedWork />
      <CurrentFocus />
      <EditorialWriting />
      <QuantisPreview />
      <FinalCTA />
    </SiteShell>
  );
}
