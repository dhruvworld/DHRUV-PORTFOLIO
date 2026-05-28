import { contactChannels, contactResponseNote } from "@/content/profile";

export function ContactChannels() {
  return (
    <section aria-labelledby="contact-channels-heading">
      <h2 id="contact-channels-heading" className="text-2xl font-semibold tracking-tight text-[#132232]">
        Reach me directly
      </h2>
      <p className="mt-2 text-sm text-[#666]">
        Prefer a quick channel over a form — higher response rate, less friction.
      </p>
      <p className="mt-1 text-xs text-[#8f6a34]">{contactResponseNote}</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {contactChannels.map((channel) => (
          <a
            key={channel.id}
            href={channel.href}
            target={channel.href.startsWith("http") ? "_blank" : undefined}
            rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="group rounded-[1.25rem] border hairline bg-white/75 p-5 transition hover:border-[#2e5e4e]/40"
          >
            <div className="flex items-start justify-between gap-2">
              <p className="font-semibold text-[#132232]">{channel.label}</p>
              <span className="shrink-0 rounded-full bg-[#f3f1ec] px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-[#2e5e4e]">
                {channel.badge}
              </span>
            </div>
            <p className="mt-2 text-sm text-[#666]">{channel.detail}</p>
            <p className="mt-3 text-xs font-medium text-[#2e5e4e] group-hover:underline">Open ↗</p>
          </a>
        ))}
      </div>
    </section>
  );
}
