type PageIntroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <section className="py-2 md:py-6">
      {eyebrow ? (
        <p className="text-xs uppercase tracking-[0.2em] text-[#5f5f5f]">{eyebrow}</p>
      ) : null}
      <h1 className="display-title mt-4 text-5xl font-semibold tracking-tight md:text-6xl">{title}</h1>
      {description ? <p className="body-soft mt-6 max-w-3xl text-lg">{description}</p> : null}
    </section>
  );
}
