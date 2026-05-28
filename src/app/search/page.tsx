"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { SiteShell } from "@/components/site-shell";
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
      <section className="glass-panel creator-glow rounded-3xl p-10 shadow-sm">
        <h1 className="text-4xl font-semibold tracking-tight text-white">Search AI Knowledge Base</h1>
        <p className="mt-4 text-lg text-slate-300">
          Search blog posts, resources, and case studies across Dhruv World.
        </p>
        <input
          value={query}
          onChange={(event) => {
            const nextValue = event.target.value;
            setQuery(nextValue);
            trackEvent("search_query_changed", { queryLength: nextValue.length });
          }}
          placeholder="Search AI, portfolio, case studies..."
          className="mt-6 w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-brand-cyan"
        />
      </section>
      <section className="mt-8 grid gap-4">
        {results.map((result) => (
          <article key={result.href} className="glass-panel creator-card rounded-2xl p-6">
            <p className="text-xs uppercase tracking-[0.15em] text-brand-cyan">{result.source}</p>
            <h2 className="mt-2 text-xl font-semibold text-white">{result.title}</h2>
            <p className="mt-2 text-slate-300">{result.description}</p>
            <Link href={result.href} className="mt-4 inline-flex rounded-full border border-white/20 px-4 py-2 text-sm text-white">
              Open
            </Link>
          </article>
        ))}
      </section>
    </SiteShell>
  );
}
