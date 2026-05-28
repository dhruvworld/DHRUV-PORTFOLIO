import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteShell } from "@/components/site-shell";
import { EditorialArticle } from "@/components/brand/editorial-article";
import { ConsultationCTA } from "@/components/brand/consultation-cta";
import { RelatedPosts } from "@/components/brand/related-posts";
import { blogPosts } from "@/content/blog-posts";
import { formatReadingTime, getReadingTimeMinutes } from "@/lib/reading-time";
import { buildPageMetadata, getBlogPostingSchema, getBreadcrumbSchema } from "@/lib/seo";

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
  return buildPageMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    type: "article",
  });
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

  const today = new Date();
  const postDate = new Date(post.publishedAt);
  const readingMinutes = getReadingTimeMinutes(post.content.join(" "));
  const metaLabel =
    postDate > today
      ? `Scheduled • ${formatReadingTime(readingMinutes)}`
      : `${post.publishedAt} • ${formatReadingTime(readingMinutes)}`;

  return (
    <SiteShell>
      <EditorialArticle
        meta={metaLabel}
        title={post.title}
        description={post.description}
        links={[
          { href: "/blog", label: "Back to Blog" },
          { href: "/projects", label: "Explore Projects" },
          { href: "/contact", label: "Contact" },
        ]}
      >
        {post.content.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </EditorialArticle>
      <RelatedPosts currentSlug={post.slug} />
      <ConsultationCTA />
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
