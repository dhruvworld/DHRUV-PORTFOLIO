import Link from "next/link";
import { blogPosts } from "@/content/blog-posts";
import { formatReadingTime, getReadingTimeMinutes } from "@/lib/reading-time";

export function EditorialWriting() {
  const today = new Date();

  return (
    <section className="mt-28">
      <div className="flex items-end justify-between gap-4">
        <h2 className="section-title text-4xl font-semibold md:text-5xl">AI Journal</h2>
        <Link href="/blog" className="text-sm text-[#5f5f5f] hover:text-[#132232]">
          View all posts ↗
        </Link>
      </div>
      <div className="mt-8 space-y-6">
        {blogPosts.slice(0, 3).map((post) => {
          const postDate = new Date(post.publishedAt);
          const reading = formatReadingTime(getReadingTimeMinutes(post.content.join(" ")));
          const metaLabel = postDate > today ? `Scheduled • ${reading}` : `${post.publishedAt} • ${reading}`;
          return (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="block border-b hairline pb-6">
              <p className="text-xs uppercase tracking-[0.14em] text-[#2e5e4e]">{metaLabel}</p>
              <h3 className="mt-1 text-3xl font-medium tracking-tight text-[#132232]">{post.title}</h3>
              <p className="mt-2 max-w-3xl text-[#6b6b6b]">{post.excerpt}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
