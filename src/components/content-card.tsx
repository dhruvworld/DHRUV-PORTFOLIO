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
      <h3 className="text-xl font-semibold tracking-tight text-white">{title}</h3>
      {meta ? <p className="mt-2 text-sm text-brand-cyan">{meta}</p> : null}
      <p className="mt-3 text-slate-300">{description}</p>
      <Link
        href={href}
        className="mt-5 inline-flex rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white"
      >
        Read More
      </Link>
    </article>
  );
}
