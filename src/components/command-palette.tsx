"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { commandRoutes } from "@/lib/command-routes";
import { socialLinks } from "@/lib/social";

const quickActions = [
  { label: "Copy Personal Email", value: "dhruv4701@gmail.com" },
  { label: "Copy Work Email", value: "talktodhruv.ai@gmail.com" },
  { label: "Copy WhatsApp (US)", value: "+14244682423" },
  { label: "Copy WhatsApp (India)", value: "+919998734388" },
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
    if (!q) return commandRoutes;
    return commandRoutes.filter((item) => {
      const haystack = `${item.label} ${item.keywords ?? ""} ${item.href}`.toLowerCase();
      return haystack.includes(q);
    });
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
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/40 p-4 pt-28 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Quick navigation"
      onClick={() => setOpen(false)}
    >
      <div
        className="w-full max-w-2xl rounded-2xl border hairline bg-[#f8f7f4] p-4 shadow-[0_24px_48px_rgba(0,0,0,0.12)]"
        onClick={(event) => event.stopPropagation()}
      >
        <input
          autoFocus
          placeholder="Search routes..."
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          className="w-full rounded-xl border hairline bg-white px-4 py-3 text-sm text-[#132232] outline-none focus:border-[#2e5e4e]"
        />
        <div className="mt-3 grid max-h-[min(60vh,520px)] gap-2 overflow-y-auto">
          {filtered.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-lg border hairline bg-white px-4 py-3 text-sm text-[#333] hover:border-[#2e5e4e]"
            >
              {item.label}
            </Link>
          ))}
          {filtered.length === 0 ? (
            <p className="rounded-lg border hairline bg-white/80 px-4 py-3 text-sm text-[#666]">
              No routes matched. Try &ldquo;projects&rdquo;, &ldquo;journal&rdquo;, or &ldquo;quantis&rdquo;.
            </p>
          ) : null}
          {quickActions.map((action) => (
            <button
              key={action.label}
              type="button"
              onClick={() => copyText(action.value)}
              className="rounded-lg border hairline bg-white px-4 py-3 text-left text-sm text-[#333] hover:border-[#2e5e4e]"
            >
              {action.label}
            </button>
          ))}
          <Link href={socialLinks.linkedin} onClick={() => setOpen(false)} className="rounded-lg border hairline bg-white px-4 py-3 text-sm text-[#333] hover:border-[#2e5e4e]">
            Open LinkedIn
          </Link>
          <Link href={socialLinks.github} onClick={() => setOpen(false)} className="rounded-lg border hairline bg-white px-4 py-3 text-sm text-[#333] hover:border-[#2e5e4e]">
            Open GitHub
          </Link>
          <Link href={socialLinks.instagram} onClick={() => setOpen(false)} className="rounded-lg border hairline bg-white px-4 py-3 text-sm text-[#333] hover:border-[#2e5e4e]">
            Open Instagram
          </Link>
          <Link href={socialLinks.whatsappUs} onClick={() => setOpen(false)} className="rounded-lg border hairline bg-white px-4 py-3 text-sm text-[#333] hover:border-[#2e5e4e]">
            Open WhatsApp
          </Link>
        </div>
      </div>
    </div>
  );
}
