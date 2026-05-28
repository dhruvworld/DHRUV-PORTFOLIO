import { SiteShell } from "@/components/site-shell";
import { ContentCard } from "@/components/content-card";
import { resources } from "@/content/resources";

export default function ResourcesPage() {
  return (
    <SiteShell>
      <section className="rounded-3xl border border-black/5 bg-white p-10 shadow-sm">
        <h1 className="text-4xl font-semibold tracking-tight">Resources</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-muted">
          Downloadable guides, templates, notes, and research designed to support
          builders, students, and founders.
        </p>
      </section>
      <section className="mt-8 grid gap-4 md:grid-cols-2">
        {resources.map((item) => (
          <ContentCard
            key={item.slug}
            title={item.title}
            description={item.description}
            href={`/resources/${item.slug}`}
            meta={`${item.type} • ${item.audience}`}
          />
        ))}
      </section>
    </SiteShell>
  );
}
