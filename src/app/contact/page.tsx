import Link from "next/link";
import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";
import { ContactForm } from "@/components/forms/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Dhruv Solanki for collaborations, consulting, and partnerships.",
};

export default function ContactPage() {
  return (
    <SiteShell>
      <section className="glass-panel creator-glow rounded-3xl p-10 shadow-sm">
        <h1 className="display-title text-5xl font-semibold tracking-tight text-white md:text-6xl">
          Let&apos;s Connect.
        </h1>
        <p className="body-soft mt-6 max-w-3xl text-lg">
          Collaboration, consulting, and strategic partnerships.
        </p>
      </section>

      <section className="mt-8 glass-panel rounded-2xl p-7">
        <div className="grid gap-5 md:grid-cols-2">
          <div className="space-y-3 text-sm text-slate-300">
            <p>
              Personal:{" "}
              <a href="mailto:dhruv4701@gmail.com" className="underline decoration-white/30 underline-offset-4">
                dhruv4701@gmail.com
              </a>
            </p>
            <p>
              Work:{" "}
              <a href="mailto:talktodhruv.ai@gmail.com" className="underline decoration-white/30 underline-offset-4">
                talktodhruv.ai@gmail.com
              </a>
            </p>
            <p>WhatsApp (IN): +91 99987 34388</p>
            <p>WhatsApp (US): +1 424 468 2423</p>
          </div>
          <div className="flex flex-wrap content-start gap-3">
            <Link href="https://www.linkedin.com/in/dhruvworld/" className="cta-pill rounded-full border border-white/20 px-4 py-2 text-sm text-white">
              LinkedIn
            </Link>
            <Link href="https://github.com/dhruvworld" className="cta-pill rounded-full border border-white/20 px-4 py-2 text-sm text-white">
              GitHub
            </Link>
            <Link href="https://www.facebook.com/dhruv.solanki.4701" className="cta-pill rounded-full border border-white/20 px-4 py-2 text-sm text-white">
              Facebook
            </Link>
          </div>
        </div>
        <ContactForm />
      </section>
    </SiteShell>
  );
}
