import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteShell } from "@/components/site-shell";
import { blogPosts } from "@/content/blog-posts";
import { getBlogPostingSchema, getBreadcrumbSchema, siteConfig } from "@/lib/seo";

type Params = { slug: string };

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `${siteConfig.siteUrl}/blog/${post.slug}`,
    },
    openGraph: {
      title: `${post.title} | Dhruv Solanki`,
      description: post.description,
      url: `${siteConfig.siteUrl}/blog/${post.slug}`,
      type: "article",
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) notFound();

  const blogSchema = getBlogPostingSchema({
    title: post.title,
    description: post.description,
    slug: post.slug,
    publishedAt: post.publishedAt,
    keywords: post.tags,
  });
  const breadcrumbSchema = getBreadcrumbSchema(`/blog/${post.slug}`, post.title);

  return (
    <SiteShell>
      <article className="glass-panel rounded-3xl p-10 shadow-sm">
        <p className="text-xs uppercase tracking-[0.14em] text-brand-cyan">{post.publishedAt}</p>
        <h1 className="section-title mt-3 text-4xl font-semibold tracking-tight text-white">{post.title}</h1>
        <p className="body-soft mt-4 max-w-3xl text-lg text-slate-300">{post.description}</p>
        <div className="body-soft mt-8 space-y-4 text-base text-slate-300">
          {post.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3 text-sm">
          <Link href="/blog" className="cta-pill rounded-full border border-white/20 px-4 py-2 text-white">
            Back to Blog
          </Link>
          <Link href="/projects" className="cta-pill rounded-full border border-white/20 px-4 py-2 text-white">
            Explore Projects
          </Link>
          <Link href="/contact" className="cta-pill rounded-full border border-white/20 px-4 py-2 text-white">
            Contact
          </Link>
        </div>
      </article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </SiteShell>
  );
}
