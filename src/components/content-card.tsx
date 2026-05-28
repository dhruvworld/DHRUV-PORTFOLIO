import Link from "next/link";

type ContentCardProps = {
  title: string;
  description: string;
  href: string;
  meta?: string;
};

export function ContentCard({ title, description, href, meta }: ContentCardProps) {
  return (
    <article className="glass-panel creator-card rounded-2xl p-6 shadow-sm">
      <h3 className="section-title text-2xl font-semibold tracking-tight text-slate-900">{title}</h3>
      {meta ? <p className="mt-2 text-xs uppercase tracking-[0.14em] text-brand-cyan">{meta}</p> : null}
      <p className="body-soft mt-3 text-slate-600">{description}</p>
      <Link
        href={href}
        className="cta-pill mt-5 inline-flex rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-900"
      >
        Read More
      </Link>
    </article>
  );
}
