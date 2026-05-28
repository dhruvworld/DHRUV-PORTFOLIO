import { CommandPalette } from "@/components/command-palette";
import { AmbientBackground } from "@/components/brand/ambient-background";
import { GlassHeader } from "@/components/brand/glass-header";
import { PremiumFooter } from "@/components/brand/premium-footer";
import { SpotlightCursor } from "@/components/brand/spotlight-cursor";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <AmbientBackground />
      <SpotlightCursor />
      <CommandPalette />
      <GlassHeader />
      <main className="creator-grid-bg relative z-10 mx-auto w-full max-w-6xl px-6 py-12 md:py-20">
        {children}
      </main>
      <PremiumFooter />
    </div>
  );
}
