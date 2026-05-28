import { Suspense } from "react";
import { SiteShell } from "@/components/site-shell";
import { PageIntro } from "@/components/brand/page-intro";
import { SearchPanel } from "@/components/search/search-panel";

type SearchPageProps = {
  searchParams: Promise<{ q?: string }>;
};

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q } = await searchParams;

  return (
    <SiteShell>
      <PageIntro
        title="Search"
        description="Find projects, journal posts, resources, case studies, and core pages."
      />
      <Suspense fallback={<p className="body-soft mt-6 text-sm">Loading search…</p>}>
        <SearchPanel initialQuery={q ?? ""} />
      </Suspense>
    </SiteShell>
  );
}
