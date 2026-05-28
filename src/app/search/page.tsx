"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { SiteShell } from "@/components/site-shell";
import { PageIntro } from "@/components/brand/page-intro";
import { blogPosts } from "@/content/blog-posts";
import { resources } from "@/content/resources";
import { caseStudies } from "@/content/case-studies";
import { trackEvent } from "@/lib/metrics";

type SearchResult = {
  title: string;
  description: string;
  href: string;
  source: "blog" | "resource" | "case-study";
};

const searchableItems: SearchResult[] = [
  ...blogPosts.map((post) => ({
    title: post.title,
    description: post.description,
    href: `/blog/${post.slug}`,
    source: "blog" as const,
  })),
  ...resources.map((item) => ({
    title: item.title,
    description: item.description,
    href: `/resources/${item.slug}`,
    source: "resource" as const,
  })),
  ...caseStudies.map((study) => ({
    title: study.title,
    description: study.summary,
    href: `/case-studies/${study.slug}`,
    source: "case-study" as const,
  })),
];

export default function SearchPage() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return searchableItems;
    return searchableItems.filter((item) => {
      return (
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.source.toLowerCase().includes(q)
      );
    });
  }, [query]);

  return (
    <SiteShell>
      <PageIntro title="Search" description="Search posts, resources, and case studies." />
      <section className="mt-6">
        <input
          value={query}
          onChange={(event) => {
            const nextValue = event.target.value;
            setQuery(nextValue);
            trackEvent("search_query_changed", { queryLength: nextValue.length });
          }}
          placeholder="Search AI, systems, business..."
          className="w-full rounded-xl border hairline bg-white/75 px-4 py-3 text-sm text-[#132232] outline-none focus:border-[#2e5e4e]"
        />
      </section>
      <section className="mt-8 grid gap-4">
        {results.map((result) => (
          <article key={result.href} className="rounded-2xl border hairline bg-white/65 p-6">
            <p className="text-xs uppercase tracking-[0.15em] text-[#2e5e4e]">{result.source}</p>
            <h2 className="section-title mt-2 text-2xl font-semibold">{result.title}</h2>
            <p className="body-soft mt-2">{result.description}</p>
            <Link
              href={result.href}
              className="cta-pill mt-4 inline-flex rounded-full border border-black/15 px-4 py-2 text-sm text-[#132232]"
            >
              Open ↗
            </Link>
          </article>
        ))}
      </section>
    </SiteShell>
  );
}
