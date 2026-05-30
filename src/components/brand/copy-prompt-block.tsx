"use client";

import { useState } from "react";

type CopyPromptBlockProps = {
  prompt: string;
  label?: string;
};

export function CopyPromptBlock({ prompt, label = "Copy this prompt" }: CopyPromptBlockProps) {
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle");

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(prompt);
      setStatus("copied");
      window.setTimeout(() => setStatus("idle"), 2000);
    } catch {
      setStatus("error");
      window.setTimeout(() => setStatus("idle"), 2500);
    }
  }

  return (
    <div className="mt-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#2e5e4e]">{label}</p>
        <button
          type="button"
          onClick={handleCopy}
          className="cta-pill rounded-full border border-black/15 bg-white px-4 py-2 text-xs font-medium text-[#132232] transition hover:border-[#2e5e4e] hover:text-[#2e5e4e]"
          aria-live="polite"
        >
          {status === "copied" ? "Copied!" : status === "error" ? "Copy failed — select text" : "Copy prompt"}
        </button>
      </div>
      <pre className="mt-3 max-h-[min(70vh,32rem)] overflow-auto rounded-xl border hairline bg-[#f7f6f3] p-5 text-sm leading-relaxed whitespace-pre-wrap text-[#333]">
        {prompt}
      </pre>
    </div>
  );
}
