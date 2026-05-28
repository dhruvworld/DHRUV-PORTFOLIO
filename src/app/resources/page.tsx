import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";
import { PageIntro } from "@/components/brand/page-intro";
import { ConsultationCTA } from "@/components/brand/consultation-cta";
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
      <PageIntro
        eyebrow="Library"
        title="Resources"
        description="Guides, frameworks, and practical assets for builders, students, and founders."
      />
      <section className="mt-10 grid gap-4 md:grid-cols-2">
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
      <ConsultationCTA />
    </SiteShell>
  );
}
