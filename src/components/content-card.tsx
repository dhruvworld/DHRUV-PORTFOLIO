import Link from "next/link";

type ContentCardProps = {
  title: string;
  description: string;
  href: string;
  meta?: string;
};

export function ContentCard({ title, description, href, meta }: ContentCardProps) {
  return (
    <article className="border-b border-black/10 pb-6">
      <h3 className="section-title text-3xl font-semibold tracking-tight text-[#111]">{title}</h3>
      {meta ? <p className="mt-2 text-xs uppercase tracking-[0.14em] text-[#2e5e4e]">{meta}</p> : null}
      <p className="body-soft mt-3 text-[#6b6b6b]">{description}</p>
      <Link
        href={href}
        className="cta-pill mt-5 inline-flex rounded-full border border-black/15 px-4 py-2 text-sm font-medium text-[#111]"
      >
        Read More
      </Link>
    </article>
  );
}
