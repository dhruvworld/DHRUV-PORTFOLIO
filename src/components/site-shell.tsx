import { CommandPalette } from "@/components/command-palette";
import { GlassHeader } from "@/components/brand/glass-header";
import { PremiumFooter } from "@/components/brand/premium-footer";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-[#132232] focus:px-4 focus:py-2 focus:text-sm focus:text-[#f8f7f4]"
      >
        Skip to content
      </a>
      <CommandPalette />
      <GlassHeader />
      <main
        id="main-content"
        className="creator-grid-bg relative z-10 mx-auto w-full max-w-7xl px-6 py-14 md:py-24"
      >
        {children}
      </main>
      <PremiumFooter />
    </div>
  );
}
