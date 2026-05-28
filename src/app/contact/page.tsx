import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";
import { ContactChannels } from "@/components/brand/contact-channels";
import { ContactForm } from "@/components/forms/contact-form";
import { contactResponseNote } from "@/content/profile";
import { whoIHelp } from "@/content/profile";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact",
  description:
    "Contact Dhruv Solanki via WhatsApp, LinkedIn, or email — collaborations, Quantis Global trade, and engineering projects.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <SiteShell>
      <section className="py-2 md:py-6">
        <p className="text-xs uppercase tracking-[0.2em] text-[#5f5f5f]">Contact</p>
        <h1 className="display-title mt-4 text-5xl font-semibold tracking-tight md:text-6xl">
          Let&apos;s connect.
        </h1>
        <p className="mt-6 max-w-3xl text-lg font-medium text-[#132232]">{whoIHelp}</p>
        <p className="body-soft mt-4 max-w-3xl text-base">
          Manchester, New Hampshire · Quantis Global trade inquiries · engineering & client projects.
        </p>
      </section>

      <section className="mt-10 rounded-2xl border hairline bg-white/60 p-7 md:p-9">
        <ContactChannels />
      </section>

      <section className="mt-10 rounded-2xl border hairline bg-white/60 p-7 md:p-9">
        <h2 className="text-xl font-semibold text-[#132232]">Or send a message</h2>
        <p className="mt-2 text-sm text-[#666]">
          Forms are fine — direct channels above usually get a faster reply. {contactResponseNote}
        </p>
        <ContactForm />
      </section>
    </SiteShell>
  );
}
