import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteShell } from "@/components/site-shell";
import { blogPosts } from "@/content/blog-posts";
import { getBlogPostingSchema, getBreadcrumbSchema } from "@/lib/seo";

type Params = { slug: string };

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const post = blogPosts.find((item) => item.slug === params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `https://dhruvsolanki.com/blog/${post.slug}`,
    },
    openGraph: {
      title: `${post.title} | Dhruv Solanki`,
      description: post.description,
      url: `https://dhruvsolanki.com/blog/${post.slug}`,
      type: "article",
    },
  };
}

export default function BlogPostPage({ params }: { params: Params }) {
  const post = blogPosts.find((item) => item.slug === params.slug);
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
      <article className="rounded-3xl border border-black/5 bg-white p-10 shadow-sm">
        <p className="text-sm text-brand-gold">{post.publishedAt}</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight">{post.title}</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-muted">{post.description}</p>
        <div className="mt-8 space-y-4 text-base leading-8 text-foreground">
          <p>
            Dhruv Solanki (Dhruv Solankii) builds Dhruv World as a long-term internet
            identity platform powered by AI, technology, and business systems.
          </p>
          <p>
            This article scaffold is ready for MDX or CMS-backed content and already
            includes route-level metadata, entity schema, and internal linking patterns.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap gap-3 text-sm">
          <Link href="/blog" className="rounded-full border border-black/10 px-4 py-2">
            Back to Blog
          </Link>
          <Link href="/projects" className="rounded-full border border-black/10 px-4 py-2">
            Explore Projects
          </Link>
          <Link href="/contact" className="rounded-full border border-black/10 px-4 py-2">
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
