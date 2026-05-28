import Link from "next/link";
import { blogPosts } from "@/content/blog-posts";

export function EditorialWriting() {
  return (
    <section className="mt-18">
      <h2 className="section-title text-4xl font-semibold md:text-5xl">AI Journal</h2>
      <div className="mt-8 space-y-6">
        {blogPosts.slice(0, 3).map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="block border-b hairline pb-6">
            <p className="text-xs uppercase tracking-[0.14em] text-[#2e5e4e]">Scheduled</p>
            <h3 className="mt-1 text-3xl text-[#111]">{post.title}</h3>
            <p className="mt-2 max-w-3xl text-[#6b6b6b]">{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
