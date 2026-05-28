import Link from "next/link";
import { blogPosts } from "@/content/blog-posts";

export function EditorialWriting() {
  return (
    <section className="mt-16">
      <h2 className="section-title text-4xl font-semibold text-white md:text-5xl">AI Journal</h2>
      <div className="mt-6 space-y-4">
        {blogPosts.slice(0, 3).map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="block border-b border-white/10 pb-4">
            <p className="text-xs uppercase tracking-[0.14em] text-brand-cyan">Scheduled</p>
            <h3 className="mt-1 text-2xl text-white">{post.title}</h3>
            <p className="mt-1 text-slate-400">{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
