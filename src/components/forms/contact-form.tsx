"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "ready">("idle");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const subject = encodeURIComponent(`Website inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    );
    window.location.href = `mailto:talktodhruv.ai@gmail.com?subject=${subject}&body=${body}`;
    setStatus("ready");
    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <form onSubmit={onSubmit} className="mt-7 space-y-3">
      <input
        required
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Your name"
        className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-brand-cyan"
      />
      <input
        required
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Your email"
        className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-brand-cyan"
      />
      <textarea
        required
        rows={5}
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        placeholder="Tell me what you're building"
        className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-brand-cyan"
      />
      <button
        type="submit"
        className="cta-pill rounded-full bg-brand-cyan px-6 py-3 text-sm font-medium text-slate-950"
      >
        Send Message
      </button>
      {status === "ready" ? (
        <p className="text-sm text-slate-300">Your email app opened with a prefilled draft.</p>
      ) : null}
    </form>
  );
}
