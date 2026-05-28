import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/site-shell";
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
  const today = new Date();

  return (
    <SiteShell>
      <section className="py-2 md:py-6">
        <h1 className="display-title text-5xl font-semibold tracking-tight md:text-6xl">AI Journal</h1>
        <p className="body-soft mt-4 max-w-3xl text-lg">
          Writing on AI, systems, technology, and execution.
        </p>
      </section>
      <section className="mt-12 space-y-7">
        {blogPosts.map((post) => {
          const postDate = new Date(post.publishedAt);
          const metaLabel = postDate > today ? "Scheduled" : post.publishedAt;
          return (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="block border-b border-black/10 pb-7">
              <p className="text-xs uppercase tracking-[0.15em] text-[#2e5e4e]">{metaLabel}</p>
              <h2 className="mt-2 text-4xl font-medium tracking-tight text-[#111]">{post.title}</h2>
              <p className="mt-3 max-w-3xl text-[#6b6b6b]">{post.excerpt}</p>
            </Link>
          );
        })}
      </section>
    </SiteShell>
  );
}
