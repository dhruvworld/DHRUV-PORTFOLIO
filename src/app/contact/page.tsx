import Link from "next/link";
import { SiteShell } from "@/components/site-shell";

export default function ContactPage() {
  return (
    <SiteShell>
      <section className="glass-panel creator-glow rounded-3xl p-10 shadow-sm">
        <h1 className="display-title text-5xl font-semibold tracking-tight text-white md:text-6xl">
          Contact
        </h1>
        <p className="body-soft mt-6 max-w-4xl text-lg text-slate-300">
          For collaborations, consulting, speaking, startup partnerships, and AI-tech projects.
        </p>
      </section>

      <section className="mt-8 grid gap-5 md:grid-cols-2">
        <article className="glass-panel creator-card rounded-2xl p-7">
          <h2 className="section-title text-2xl font-semibold text-white">Direct Details</h2>
          <div className="mt-5 space-y-3 text-sm text-slate-300">
            <p>Personal Email: DHRUV4701@GMAIL.COM</p>
            <p>Work Email: TALKTOSHRUV.AI@GMAIL.COM</p>
            <p>WhatsApp (India): 9998734388</p>
            <p>WhatsApp (US): +1 4244682423</p>
            <p>Location: Manchester, New Hampshire</p>
            <p>Instagram: @_DHRUVWORLD</p>
          </div>
        </article>

        <article className="glass-panel creator-card rounded-2xl p-7">
          <h2 className="section-title text-2xl font-semibold text-white">Social and Founder</h2>
          <div className="mt-5 space-y-3 text-sm text-slate-300">
            <p>Founder: Quantis Global</p>
            <p>Focus: Global sourcing, import-export, logistics coordination</p>
            <p>Technical Scope: AI workflows, automation, full-stack products</p>
            <p>GitHub: github.com/dhruvworld</p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="https://www.linkedin.com/in/dhruvworld/"
              className="rounded-full border border-white/20 px-4 py-2 text-sm text-white"
            >
              LinkedIn
            </Link>
            <Link
              href="https://www.facebook.com/dhruv.solanki.4701"
              className="rounded-full border border-white/20 px-4 py-2 text-sm text-white"
            >
              Facebook ID
            </Link>
            <Link
              href="https://www.facebook.com/TechXdhruvworld"
              className="rounded-full border border-white/20 px-4 py-2 text-sm text-white"
            >
              Facebook Page
            </Link>
            <Link
              href="https://github.com/dhruvworld"
              className="rounded-full border border-white/20 px-4 py-2 text-sm text-white"
            >
              GitHub
            </Link>
          </div>
        </article>
      </section>
    </SiteShell>
  );
}
