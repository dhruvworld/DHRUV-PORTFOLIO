import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";
import { ContentCard } from "@/components/content-card";
import { blogPosts } from "@/content/blog-posts";

export const metadata: Metadata = {
  title: "AI Journal",
  description: "Founder writing on AI systems, execution, technology, and digital authority.",
  openGraph: {
    images: ["/blog/opengraph-image"],
  },
  twitter: {
    images: ["/blog/opengraph-image"],
  },
};

export default function BlogPage() {
  return (
    <SiteShell>
      <section className="glass-panel creator-glow rounded-3xl p-10 shadow-sm">
        <h1 className="display-title text-5xl font-semibold tracking-tight text-slate-900 md:text-6xl">AI Journal</h1>
        <p className="body-soft mt-4 max-w-3xl text-lg text-slate-600">
          Writing on AI, systems, technology, and execution.
        </p>
      </section>
      <section className="mt-8 grid gap-4 md:grid-cols-2">
        {blogPosts.map((post) => (
          <ContentCard
            key={post.slug}
            title={post.title}
            description={post.excerpt}
            href={`/blog/${post.slug}`}
            meta={post.publishedAt}
          />
        ))}
      </section>
    </SiteShell>
  );
}
