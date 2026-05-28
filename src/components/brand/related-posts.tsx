import Link from "next/link";
import { blogPosts } from "@/content/blog-posts";

export function RelatedPosts({ currentSlug }: { currentSlug: string }) {
  const related = blogPosts.filter((post) => post.slug !== currentSlug).slice(0, 2);
  if (related.length === 0) return null;

  return (
    <section className="mt-12 rounded-[1.35rem] border hairline bg-white/60 p-6 md:p-8">
      <h2 className="section-title text-2xl font-semibold">Continue reading</h2>
      <div className="mt-6 grid gap-5 md:grid-cols-2">
        {related.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="block border-t hairline pt-4 md:border-t-0 md:pt-0">
            <p className="text-xs uppercase tracking-[0.14em] text-[#2e5e4e]">{post.publishedAt}</p>
            <h3 className="mt-2 text-xl font-medium text-[#132232]">{post.title}</h3>
            <p className="mt-2 text-sm text-[#666]">{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
