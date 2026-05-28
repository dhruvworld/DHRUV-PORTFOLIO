import Link from "next/link";
import { SiteShell } from "@/components/site-shell";

export default function ContactPage() {
  return (
    <SiteShell>
      <section className="glass-panel creator-glow rounded-3xl p-10 shadow-sm">
        <h1 className="display-title text-5xl font-semibold tracking-tight text-slate-900 md:text-6xl">
          Let&apos;s Connect.
        </h1>
        <p className="body-soft mt-6 max-w-3xl text-lg text-slate-600">
          Collaboration, consulting, and strategic partnerships.
        </p>
      </section>

      <section className="mt-8 glass-panel rounded-2xl p-7">
        <div className="grid gap-5 md:grid-cols-2">
          <div className="space-y-3 text-sm text-slate-600">
            <p>Personal: DHRUV4701@GMAIL.COM</p>
            <p>Work: TALKTOSHRUV.AI@GMAIL.COM</p>
            <p>WhatsApp (IN): +91 99987 34388</p>
            <p>WhatsApp (US): +1 424 468 2423</p>
          </div>
          <div className="flex flex-wrap content-start gap-3">
            <Link href="https://www.linkedin.com/in/dhruvworld/" className="cta-pill rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-900">
              LinkedIn
            </Link>
            <Link href="https://github.com/dhruvworld" className="cta-pill rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-900">
              GitHub
            </Link>
            <Link href="https://www.facebook.com/dhruv.solanki.4701" className="cta-pill rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-900">
              Facebook
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
