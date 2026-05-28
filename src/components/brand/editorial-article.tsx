import Link from "next/link";

type EditorialArticleProps = {
  meta?: string;
  title: string;
  description?: string;
  children: React.ReactNode;
  links?: { href: string; label: string }[];
};

export function EditorialArticle({ meta, title, description, children, links = [] }: EditorialArticleProps) {
  return (
    <article className="rounded-[1.5rem] border hairline bg-white/65 p-8 md:p-10">
      {meta ? <p className="text-xs uppercase tracking-[0.14em] text-[#2e5e4e]">{meta}</p> : null}
      <h1 className="section-title mt-3 text-4xl font-semibold tracking-tight md:text-5xl">{title}</h1>
      {description ? <p className="body-soft mt-4 max-w-3xl text-lg">{description}</p> : null}
      <div className="body-soft mt-8 space-y-4 text-base">{children}</div>
      {links.length > 0 ? (
        <div className="mt-8 flex flex-wrap gap-3 text-sm">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="cta-pill rounded-full border border-black/15 px-4 py-2 text-[#132232]"
            >
              {link.label}
            </Link>
          ))}
        </div>
      ) : null}
    </article>
  );
}
