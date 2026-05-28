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
    <header className="sticky top-0 z-40 border-b border-black/8 bg-[#f8f7f4]/88 backdrop-blur-xl">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="text-sm font-semibold tracking-tight text-[#132232] md:text-base">
          Dhruv Solanki
        </Link>
        <div className="hidden items-center gap-5 text-sm md:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="text-[#5b5b5b] transition hover:text-[#132232]">
              {item.label}
            </Link>
          ))}
        </div>
        <Link
          href="/contact"
          className="rounded-full border border-black/15 px-4 py-2 text-xs font-medium tracking-wide text-[#132232] transition hover:bg-black hover:text-[#f8f7f4]"
        >
          Book a Call
        </Link>
      </nav>
    </header>
  );
}
