import Link from "next/link";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Work" },
  { href: "/blog", label: "AI Journal" },
  { href: "/quantis-global", label: "Quantis Global" },
  { href: "/contact", label: "Contact" },
];

export function GlassHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#03040A]/52 backdrop-blur-2xl">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="text-sm font-semibold tracking-tight text-white md:text-base">
          Dhruv Solanki
        </Link>
        <div className="hidden items-center gap-5 text-sm md:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="text-slate-300 transition hover:text-brand-cyan">
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
