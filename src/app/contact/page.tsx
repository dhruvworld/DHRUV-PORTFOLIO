import Link from "next/link";
import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";
import { ContactForm } from "@/components/forms/contact-form";
import { ConsultationCTA } from "@/components/brand/consultation-cta";
import { socialLinks } from "@/lib/social";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact",
  description: "Contact Dhruv Solanki for collaborations, consulting, and partnerships.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <SiteShell>
      <section className="py-2 md:py-6">
        <p className="text-xs uppercase tracking-[0.2em] text-[#5f5f5f]">Contact</p>
        <h1 className="display-title mt-4 text-5xl font-semibold tracking-tight md:text-6xl">
          Let&apos;s Connect.
        </h1>
        <p className="body-soft mt-6 max-w-3xl text-lg">
          Collaboration, consulting, and strategic partnerships.
        </p>
      </section>

      <ConsultationCTA />

      <section className="mt-10 rounded-2xl border hairline bg-white/60 p-7 md:p-9">
        <div className="grid gap-5 md:grid-cols-2">
          <div className="space-y-3 text-sm text-[#575757]">
            <p>
              Personal:{" "}
              <a href="mailto:dhruv4701@gmail.com" className="underline decoration-black/25 underline-offset-4">
                dhruv4701@gmail.com
              </a>
            </p>
            <p>
              Work:{" "}
              <a href="mailto:talktodhruv.ai@gmail.com" className="underline decoration-black/25 underline-offset-4">
                talktodhruv.ai@gmail.com
              </a>
            </p>
            <p>WhatsApp (IN): +91 99987 34388</p>
            <p>WhatsApp (US): +1 424 468 2423</p>
          </div>
          <div className="flex flex-wrap content-start gap-3">
            <Link href={socialLinks.linkedin} className="cta-pill rounded-full border border-black/15 px-4 py-2 text-sm text-[#132232]">
              LinkedIn
            </Link>
            <Link href={socialLinks.github} className="cta-pill rounded-full border border-black/15 px-4 py-2 text-sm text-[#132232]">
              GitHub
            </Link>
            <Link href={socialLinks.instagram} className="cta-pill rounded-full border border-black/15 px-4 py-2 text-sm text-[#132232]">
              Instagram
            </Link>
            <Link href={socialLinks.facebook} className="cta-pill rounded-full border border-black/15 px-4 py-2 text-sm text-[#132232]">
              Facebook
            </Link>
            <Link href={socialLinks.whatsappIn} className="cta-pill rounded-full border border-black/15 px-4 py-2 text-sm text-[#132232]">
              WhatsApp
            </Link>
          </div>
        </div>
        <ContactForm />
      </section>
    </SiteShell>
  );
}
