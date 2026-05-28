import Link from "next/link";
import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";
import { quantisGlobalSite } from "@/content/quantis-global-site";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Quantis Global",
  description:
    "Quantis Global — import & export solutions, global logistics, customs clearance, and supply chain management. Content from quantisglobal.co.",
  path: "/quantis-global",
});

export default function QuantisGlobalPage() {
  const q = quantisGlobalSite;

  return (
    <SiteShell>
      <section className="rounded-[1.75rem] border border-[#c9a66b]/35 bg-[linear-gradient(170deg,rgba(201,166,107,0.18),rgba(201,166,107,0.03))] p-10">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#8f6a34]">{q.eyebrow}</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">{q.headline}</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-[#535353]">{q.heroSummary}</p>
        <ul className="mt-6 flex flex-wrap gap-2">
          {q.heroBullets.map((item) => (
            <li
              key={item}
              className="rounded-full border border-[#c9a66b]/40 bg-white/70 px-3 py-1.5 text-xs font-medium text-[#5a4a32]"
            >
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={q.contactUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#132232] px-5 py-3 text-sm font-medium text-[#f8f7f4]"
          >
            Get a free quote ↗
          </a>
          <a
            href={q.url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-black/20 px-5 py-3 text-sm font-medium text-[#132232]"
          >
            Visit quantisglobal.co ↗
          </a>
        </div>
        <div className="mt-8 flex flex-wrap gap-6">
          {q.trustBadges.map((badge) => (
            <div key={badge.label}>
              <p className="text-lg font-semibold text-[#132232]">{badge.label}</p>
              <p className="text-sm text-[#666]">{badge.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10 border-y hairline py-10">
        <p className="text-xs uppercase tracking-[0.16em] text-[#8f6a34]">Trusted & Certified</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight">Licensed & Compliant Operations</h2>
        <p className="mt-3 text-sm text-[#666]">{q.complianceNote}</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {q.certifications.map((cert) => (
            <article key={cert.title} className="rounded-xl border hairline bg-white/65 p-4">
              <h3 className="font-semibold text-[#232323]">{cert.title}</h3>
              <p className="mt-1 text-sm text-[#666]">{cert.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-3xl font-semibold tracking-tight">Comprehensive Logistics Solutions</h2>
        <p className="mt-4 max-w-4xl text-lg leading-8 text-[#575757]">{q.servicesIntro}</p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {q.services.map((service) => (
            <article key={service.title} className="rounded-[1.25rem] border hairline bg-white/65 p-6">
              <h3 className="text-xl font-semibold text-[#132232]">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#575757]">{service.summary}</p>
              <ul className="mt-4 space-y-1.5 text-sm text-[#555]">
                {service.points.map((point) => (
                  <li key={point}>• {point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10 border-y hairline py-10">
        <h2 className="text-3xl font-semibold tracking-tight">Why Choose Us</h2>
        <p className="mt-4 max-w-4xl text-lg leading-8 text-[#575757]">{q.whyChooseIntro}</p>
        <p className="mt-2 text-2xl font-semibold text-[#132232]">{q.whyChooseTitle}</p>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {q.whyChoose.map((item) => (
            <article key={item.title} className="rounded-xl border hairline bg-white/65 p-5">
              <p className="text-2xl font-semibold text-[#8f6a34]">{item.stat}</p>
              <h3 className="mt-2 font-semibold text-[#232323]">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#575757]">{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-3xl font-semibold tracking-tight">{q.aboutTitle}</h2>
        <div className="mt-6 max-w-4xl space-y-4 text-base leading-relaxed text-[#575757]">
          {q.story.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <article className="rounded-xl border hairline bg-white/65 p-5">
            <h3 className="font-semibold text-[#132232]">Our Mission</h3>
            <p className="mt-2 text-sm text-[#575757]">{q.mission}</p>
          </article>
          <article className="rounded-xl border hairline bg-white/65 p-5">
            <h3 className="font-semibold text-[#132232]">Our Approach</h3>
            <p className="mt-2 text-sm text-[#575757]">{q.approach}</p>
          </article>
          <article className="rounded-xl border hairline bg-white/65 p-5">
            <h3 className="font-semibold text-[#132232]">Our Commitment</h3>
            <p className="mt-2 text-sm text-[#575757]">{q.commitment}</p>
          </article>
        </div>
      </section>

      <section className="mt-10 border-y hairline py-10">
        <h2 className="text-3xl font-semibold tracking-tight">Leadership Team</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {q.leadership.map((person) => (
            <article key={person.name} className="rounded-xl border hairline bg-white/65 p-5">
              <h3 className="font-semibold text-[#132232]">{person.name}</h3>
              <p className="mt-1 text-sm text-[#8f6a34]">{person.role}</p>
            </article>
          ))}
        </div>
        <p className="body-soft mt-8 max-w-4xl text-sm leading-relaxed text-[#575757]">{q.cooNote}</p>
      </section>

      <section className="mt-10">
        <div className="flex flex-wrap gap-10">
          {q.stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-semibold text-[#132232]">{stat.value}</p>
              <p className="text-sm text-[#666]">{stat.label}</p>
            </div>
          ))}
        </div>
        <h2 className="mt-10 text-3xl font-semibold tracking-tight">{q.closingTitle}</h2>
        <p className="mt-4 max-w-4xl text-lg leading-8 text-[#575757]">{q.closingSummary}</p>
      </section>

      <section className="mt-10 rounded-[1.35rem] border hairline bg-white/65 p-8">
        <h2 className="text-2xl font-semibold tracking-tight">Contact (quantisglobal.co)</h2>
        <dl className="mt-6 space-y-4 text-sm text-[#575757]">
          <div>
            <dt className="font-medium text-[#132232]">Address</dt>
            <dd className="mt-1">{q.contact.address}</dd>
          </div>
          <div>
            <dt className="font-medium text-[#132232]">Phone</dt>
            <dd className="mt-1">
              <a href={`tel:${q.contact.phone}`} className="text-[#2e5e4e] hover:underline">
                {q.contact.phoneDisplay}
              </a>
            </dd>
          </div>
          <div>
            <dt className="font-medium text-[#132232]">Email</dt>
            <dd className="mt-1 flex flex-col gap-1">
              {q.contact.emails.map((email) => (
                <a key={email} href={`mailto:${email}`} className="text-[#2e5e4e] hover:underline">
                  {email}
                </a>
              ))}
            </dd>
          </div>
          <div>
            <dt className="font-medium text-[#132232]">Response time</dt>
            <dd className="mt-1">Within {q.contact.responseTime}</dd>
          </div>
        </dl>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={q.contactUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#132232] px-5 py-3 text-sm font-medium text-[#f8f7f4]"
          >
            Request a quote on quantisglobal.co ↗
          </a>
          <Link href="/about" className="rounded-full border border-black/15 px-5 py-3 text-sm font-medium text-[#132232]">
            About Dhruv Solanki
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
