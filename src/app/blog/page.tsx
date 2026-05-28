import { SiteShell } from "@/components/site-shell";
import { ContentCard } from "@/components/content-card";
import { blogPosts } from "@/content/blog-posts";

export default function BlogPage() {
  return (
    <SiteShell>
      <section className="glass-panel creator-glow rounded-3xl p-10 shadow-sm">
        <h1 className="text-4xl font-semibold tracking-tight text-white">AI Journal</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
          SEO-focused insights across AI tools, modern web systems, startup execution,
          and Dhruv World media thinking.
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
