import { SiteShell } from "@/components/site-shell";

type RouteTemplateProps = {
  title: string;
  description: string;
};

export function RouteTemplate({ title, description }: RouteTemplateProps) {
  return (
    <SiteShell>
      <section className="py-4 md:py-8">
        <p className="inline-flex rounded-full border border-black/15 bg-white/60 px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-[#2e5e4e]">
          Identity Page
        </p>
        <h1 className="display-title mt-4 text-5xl font-semibold tracking-tight md:text-6xl">{title}</h1>
        <p className="body-soft mt-4 max-w-3xl text-lg text-[#6b6b6b]">{description}</p>
      </section>
    </SiteShell>
  );
}
