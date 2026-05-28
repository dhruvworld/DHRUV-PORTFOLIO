import Link from "next/link";
import Image from "next/image";
import { SiteShell } from "@/components/site-shell";
import { blogPosts } from "@/content/blog-posts";
import { founderPortrait, homepageGallery } from "@/lib/media";

const identityTags = ["AI", "Technology", "Business", "Digital Systems"];

const projects = [
  { title: "Quantis Global", detail: "Global sourcing and trade execution." },
  { title: "SaveMePDF", detail: "Fast document workflow utility." },
  { title: "Post2Plan", detail: "Creator planning, streamlined." },
  { title: "OpenSourceDisplayLink", detail: "Low-latency cross-device display R&D." },
];

const building = [
  { label: "Building", value: "Founder identity system" },
  { label: "Learning", value: "Applied AI systems" },
  { label: "Exploring", value: "Global trade workflows" },
  { label: "Publishing", value: "AI and systems writing" },
];

const ctaPrimaryClass = "cta-pill rounded-full bg-brand-cyan px-6 py-3 text-sm font-medium text-slate-950";
const ctaSecondaryClass = "cta-pill rounded-full border border-slate-200 px-6 py-3 text-sm font-medium text-slate-900";

export default function Home() {
  return (
    <SiteShell>
      <section className="glass-panel creator-glow relative overflow-hidden rounded-3xl p-8 md:p-12">
        <div className="hero-orb hero-orb-cyan right-[-120px] top-[-80px] h-80 w-80" />
        <div className="hero-orb hero-orb-violet bottom-[-140px] left-[-90px] h-80 w-80" />
        <div className="relative grid gap-8 md:grid-cols-[1.2fr_1fr] md:gap-12">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-brand-cyan">Dhruv Solanki</p>
            <h1 className="display-title mt-4 text-5xl font-bold text-slate-900 md:text-[96px] md:leading-[0.95]">
              AI, technology, business, and digital creation.
            </h1>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/projects" className={ctaPrimaryClass}>
                Explore Work
              </Link>
              <Link href="/blog" className={ctaSecondaryClass}>
                Read Writing
              </Link>
            </div>
          </div>
          <div className="glass-panel rounded-2xl p-5">
            <p className="text-xs uppercase tracking-[0.2em] text-brand-cyan">Portrait Panel</p>
            <div className="mt-4 rounded-2xl border border-slate-200 bg-gradient-to-b from-slate-50 to-white p-4">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
                <Image
                  src={founderPortrait.src}
                  alt={founderPortrait.alt}
                  fill
                  className="object-cover grayscale-[22%] contrast-[1.08] brightness-[0.95]"
                />
              </div>
            </div>
            <p className="mt-4 text-sm text-muted">
              Founder of Quantis Global. Building long-term digital authority.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-7 flex flex-wrap gap-2">
        {identityTags.map((tag) => (
          <span key={tag} className="rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-xs text-slate-700">
            {tag}
          </span>
        ))}
      </section>

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <article className="glass-panel rounded-2xl p-7">
          <p className="text-xs uppercase tracking-[0.2em] text-brand-cyan">Manifesto</p>
          <h2 className="section-title mt-4 text-3xl font-semibold text-slate-900">Systems over noise.</h2>
          <p className="body-soft mt-4 text-slate-600">
            A long-term digital identity system with clear signal and consistent execution.
          </p>
        </article>
        <article className="glass-panel rounded-2xl p-7">
          <p className="text-xs uppercase tracking-[0.2em] text-brand-cyan">Vision</p>
          <h2 className="section-title mt-4 text-3xl font-semibold text-slate-900">Build meaningful leverage.</h2>
          <p className="body-soft mt-4 text-slate-600">
            Every page and project compounds one identity: Dhruv Solanki, Dhruv Solankii, Dhruv World.
          </p>
        </article>
      </section>

      <section className="mt-10 grid gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <article key={project.title} className="glass-panel creator-card rounded-2xl p-7">
            <h3 className="section-title text-2xl font-semibold text-slate-900">{project.title}</h3>
            <p className="body-soft mt-3 text-slate-600">{project.detail}</p>
          </article>
        ))}
      </section>

      <section className="mt-10 glass-panel rounded-2xl p-7">
        <p className="text-xs uppercase tracking-[0.2em] text-brand-cyan">Currently Building</p>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {building.map((item) => (
            <div key={item.label} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs uppercase tracking-[0.15em] text-slate-500">{item.label}</p>
              <p className="mt-2 text-sm text-slate-700">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10 glass-panel rounded-2xl p-7">
        <p className="text-xs uppercase tracking-[0.2em] text-brand-cyan">Recent Writing</p>
        <div className="mt-5 grid gap-3">
          {blogPosts.slice(0, 3).map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 hover:border-brand-cyan"
            >
              <p className="text-xs uppercase tracking-[0.14em] text-brand-cyan">{post.publishedAt}</p>
              <p className="mt-1 text-base text-slate-900">{post.title}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-10 grid gap-4 md:grid-cols-3">
        {homepageGallery.map((item) => (
          <div key={item.src} className="glass-panel rounded-2xl p-4">
            <div className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover grayscale-[18%] contrast-[1.08] transition duration-500 group-hover:scale-[1.02] group-hover:grayscale-[6%]"
              />
            </div>
          </div>
        ))}
      </section>

      <section className="mt-10 glass-panel rounded-3xl p-8 text-center md:p-10">
        <h2 className="section-title text-4xl font-semibold text-slate-900 md:text-5xl">
          Let&apos;s build something meaningful.
        </h2>
        <div className="mt-7 flex justify-center gap-3">
          <Link href="/contact" className={ctaPrimaryClass}>
            Start a Conversation
          </Link>
          <Link href="/about" className={ctaSecondaryClass}>
            Read the Vision
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
