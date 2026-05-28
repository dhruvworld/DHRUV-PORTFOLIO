import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";
import { ContentCard } from "@/components/content-card";
import { resources } from "@/content/resources";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Downloadable guides, templates, and frameworks by Dhruv Solanki for builders and founders.",
};

export default function ResourcesPage() {
  return (
    <SiteShell>
      <section className="glass-panel creator-glow rounded-3xl p-8 shadow-sm md:p-10">
        <h1 className="display-title text-5xl font-semibold tracking-tight text-white md:text-6xl">Resources</h1>
        <p className="body-soft mt-4 max-w-3xl text-lg">
          Guides, frameworks, and practical assets for builders, students, and founders.
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
