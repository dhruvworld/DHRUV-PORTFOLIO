"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { highlightProjects } from "@/content/projects";
import { blogPosts } from "@/content/blog-posts";
import { resources } from "@/content/resources";
import { caseStudies } from "@/content/case-studies";
import { trackEvent } from "@/lib/metrics";

type SearchResult = {
  title: string;
  description: string;
  href: string;
  source: string;
};

const staticPages: SearchResult[] = [
  {
    title: "About Dhruv Solanki",
    description: "Builder, founder, and operator across AI systems and digital identity.",
    href: "/about",
    source: "page",
  },
  {
    title: "Founder Manifesto",
    description: "Operating principles and focus across Dhruv World and Quantis Global.",
    href: "/founder",
    source: "page",
  },
  {
    title: "Quantis Global",
    description: "Global trade, sourcing, and international business execution.",
    href: "/quantis-global",
    source: "page",
  },
  {
    title: "Contact",
    description: "Collaborations, consulting, and partnership inquiries.",
    href: "/contact",
    source: "page",
  },
];

const searchableItems: SearchResult[] = [
  ...staticPages,
  ...highlightProjects.map((project) => ({
    title: project.title,
    description: project.summary,
    href: project.href.startsWith("/projects") ? `/projects#${project.slug}` : project.href,
    source: "project",
  })),
  ...blogPosts.map((post) => ({
    title: post.title,
    description: post.description,
    href: `/blog/${post.slug}`,
    source: "journal",
  })),
  ...resources.map((item) => ({
    title: item.title,
    description: item.description,
    href: `/resources/${item.slug}`,
    source: "resource",
  })),
  ...caseStudies.map((study) => ({
    title: study.title,
    description: study.summary,
    href: `/case-studies/${study.slug}`,
    source: "case study",
  })),
];

export function SearchPanel({ initialQuery = "" }: { initialQuery?: string }) {
  const [query, setQuery] = useState(initialQuery);

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
    <>
      <section className="mt-6">
        <label htmlFor="site-search" className="sr-only">
          Search site content
        </label>
        <input
          id="site-search"
          value={query}
          onChange={(event) => {
            const nextValue = event.target.value;
            setQuery(nextValue);
            trackEvent("search_query_changed", { queryLength: nextValue.length });
          }}
          placeholder="Search projects, journal, resources..."
          className="w-full rounded-xl border hairline bg-white/75 px-4 py-3 text-sm text-[#132232] outline-none focus:border-[#2e5e4e]"
        />
        <p className="mt-2 text-xs text-[#7a7a7a]">
          {results.length} result{results.length === 1 ? "" : "s"}
          {query.trim() ? ` for “${query.trim()}”` : ""}
        </p>
      </section>

      <section className="mt-8 grid gap-4">
        {results.length === 0 ? (
          <p className="body-soft rounded-2xl border hairline bg-white/65 p-6 text-sm">
            No matches yet. Try “AI”, “Quantis”, “identity”, or “workflow”.
          </p>
        ) : (
          results.map((result) => (
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
          ))
        )}
      </section>
    </>
  );
}
