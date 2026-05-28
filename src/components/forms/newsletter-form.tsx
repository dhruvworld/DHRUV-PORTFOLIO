"use client";

import { FormEvent, useState } from "react";
import { trackEvent } from "@/lib/metrics";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setStatus("idle");
    trackEvent("newsletter_submit_started", { source: "newsletters_page" });

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error("Failed to subscribe");
      }

      setStatus("success");
      setEmail("");
      trackEvent("newsletter_submit_success", { source: "newsletters_page" });
    } catch {
      setStatus("error");
      trackEvent("newsletter_submit_error", { source: "newsletters_page" });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-6 flex flex-col gap-3 sm:flex-row">
      <input
        type="email"
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="you@example.com"
        className="w-full rounded-xl border hairline bg-white/75 px-4 py-3 text-sm text-[#132232] outline-none focus:border-[#2e5e4e]"
      />
      <button
        type="submit"
        disabled={loading}
        className="rounded-xl bg-[#132232] px-5 py-3 text-sm font-medium text-[#f8f7f4] disabled:opacity-70"
      >
        {loading ? "Subscribing..." : "Subscribe"}
      </button>
      <p className="text-sm text-[#5f5f5f] sm:ml-2 sm:self-center">
        {status === "success" && "Subscribed successfully."}
        {status === "error" && "Subscription failed. Try again."}
      </p>
    </form>
  );
}
