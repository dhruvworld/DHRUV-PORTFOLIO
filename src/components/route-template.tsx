import { SiteShell } from "@/components/site-shell";

type RouteTemplateProps = {
  title: string;
  description: string;
};

export function RouteTemplate({ title, description }: RouteTemplateProps) {
  return (
    <SiteShell>
      <section className="glass-panel creator-glow rounded-3xl p-10 shadow-sm">
        <p className="badge-gradient inline-flex rounded-full px-3 py-1 text-xs font-medium text-brand-cyan">
          Creator Page
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white">{title}</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">{description}</p>
      </section>
    </SiteShell>
  );
}
