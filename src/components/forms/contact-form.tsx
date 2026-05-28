"use client";

import { FormEvent, useState } from "react";
import { socialLinks } from "@/lib/social";

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
    const mailto = socialLinks.emailWork.replace("mailto:", "");
    window.location.href = `mailto:${mailto}?subject=${subject}&body=${body}`;
    setStatus("ready");
    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <form onSubmit={onSubmit} className="mt-7 space-y-4" noValidate>
      <div>
        <label htmlFor="contact-name" className="text-xs uppercase tracking-[0.14em] text-[#6b6b6b]">
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          required
          autoComplete="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Your name"
          className="mt-2 w-full rounded-xl border border-black/15 bg-white/75 px-4 py-3 text-sm text-[#111] outline-none focus:border-[#2e5e4e]"
        />
      </div>
      <div>
        <label htmlFor="contact-email" className="text-xs uppercase tracking-[0.14em] text-[#6b6b6b]">
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@example.com"
          className="mt-2 w-full rounded-xl border border-black/15 bg-white/75 px-4 py-3 text-sm text-[#111] outline-none focus:border-[#2e5e4e]"
        />
      </div>
      <div>
        <label htmlFor="contact-message" className="text-xs uppercase tracking-[0.14em] text-[#6b6b6b]">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="Tell me what you're building"
          className="mt-2 w-full rounded-xl border border-black/15 bg-white/75 px-4 py-3 text-sm text-[#111] outline-none focus:border-[#2e5e4e]"
        />
      </div>
      <button
        type="submit"
        className="cta-pill rounded-full bg-[#111111] px-6 py-3 text-sm font-medium text-[#f8f7f4]"
      >
        Send message
      </button>
      {status === "ready" ? (
        <p className="text-sm text-[#5f5f5f]" role="status">
          Your email app opened with a prefilled draft.
        </p>
      ) : null}
    </form>
  );
}
