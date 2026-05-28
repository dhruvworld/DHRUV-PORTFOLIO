"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

const commands = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About / Manifesto" },
  { href: "/founder", label: "Founder" },
  { href: "/ai", label: "AI Lab" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "AI Journal" },
  { href: "/newsletters", label: "Newsletter" },
  { href: "/contact", label: "Contact" },
  { href: "/search", label: "Search" },
  { href: "/quantis-global", label: "Quantis Global" },
];

const quickActions = [
  { label: "Copy Personal Email", value: "DHRUV4701@GMAIL.COM" },
  { label: "Copy Work Email", value: "TALKTOSHRUV.AI@GMAIL.COM" },
  { label: "Copy WhatsApp Number", value: "+14244682423" },
  { label: "Copy India Number", value: "+919998734388" },
];

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((prev) => !prev);
      }
      if (event.key === "Escape") {
        setOpen(false);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return commands;
    return commands.filter((item) => item.label.toLowerCase().includes(q));
  }, [query]);

  if (!open) return null;

  async function copyText(value: string) {
    try {
      await navigator.clipboard.writeText(value);
      setOpen(false);
    } catch {
      // Clipboard may be unavailable in some browser contexts.
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-slate-900/20 p-4 pt-28 backdrop-blur-sm">
      <div className="glass-panel w-full max-w-2xl rounded-2xl p-4">
        <input
          autoFocus
          placeholder="Search routes..."
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-brand-cyan"
        />
        <div className="mt-3 grid gap-2">
          {filtered.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 hover:border-brand-cyan"
            >
              {item.label}
            </Link>
          ))}
          {quickActions.map((action) => (
            <button
              key={action.label}
              type="button"
              onClick={() => copyText(action.value)}
              className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-left text-sm text-slate-700 hover:border-brand-cyan"
            >
              {action.label}
            </button>
          ))}
          <Link
            href="https://www.linkedin.com/in/dhruvworld/"
            onClick={() => setOpen(false)}
            className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 hover:border-brand-cyan"
          >
            Open LinkedIn
          </Link>
          <Link
            href="https://github.com/dhruvworld"
            onClick={() => setOpen(false)}
            className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 hover:border-brand-cyan"
          >
            Open GitHub
          </Link>
        </div>
      </div>
    </div>
  );
}
