import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/site-shell";
import { PageIntro } from "@/components/brand/page-intro";
import { ConsultationCTA } from "@/components/brand/consultation-cta";
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
      <PageIntro
        eyebrow="Journal"
        title="AI Journal"
        description="Writing on AI, systems, technology, and execution."
      />
      <section className="mt-12 space-y-7">
        {blogPosts.map((post) => {
          const postDate = new Date(post.publishedAt);
          const metaLabel = postDate > today ? "Scheduled" : post.publishedAt;
          return (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="block border-b hairline pb-7">
              <p className="text-xs uppercase tracking-[0.15em] text-[#2e5e4e]">{metaLabel}</p>
              <h2 className="mt-2 text-4xl font-medium tracking-tight text-[#132232]">{post.title}</h2>
              <p className="mt-3 max-w-3xl text-[#6b6b6b]">{post.excerpt}</p>
            </Link>
          );
        })}
      </section>
      <ConsultationCTA />
    </SiteShell>
  );
}
