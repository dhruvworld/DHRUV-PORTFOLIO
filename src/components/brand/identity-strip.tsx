import Link from "next/link";

const items = [
  { label: "AI", href: "/ai" },
  { label: "Technology", href: "/technology" },
  { label: "Business", href: "/business" },
  { label: "Digital Systems", href: "/case-studies" },
] as const;

export function IdentityStrip() {
  return (
    <section className="mt-10" aria-label="Focus areas">
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-full border border-black/10 bg-white/60 px-4 py-1.5 text-xs uppercase tracking-[0.14em] text-[#555] transition hover:border-black/20 hover:text-[#132232]"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </section>
  );
}
