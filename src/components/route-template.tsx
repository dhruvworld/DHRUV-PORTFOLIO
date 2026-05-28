import { SiteShell } from "@/components/site-shell";

type RouteTemplateProps = {
  title: string;
  description: string;
};

export function RouteTemplate({ title, description }: RouteTemplateProps) {
  return (
    <SiteShell>
      <section className="glass-panel creator-glow rounded-3xl p-10 shadow-sm">
        <p className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-brand-cyan">
          Identity Page
        </p>
        <h1 className="display-title mt-4 text-5xl font-semibold tracking-tight text-slate-900 md:text-6xl">{title}</h1>
        <p className="body-soft mt-4 max-w-3xl text-lg text-slate-600">{description}</p>
      </section>
    </SiteShell>
  );
}
