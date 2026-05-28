import { SiteShell } from "@/components/site-shell";

const timeline = [
  {
    year: "2026",
    title: "Digital Identity System Build",
    detail:
      "Building a long-term media and brand platform across portfolio, blog, resources, and SEO infrastructure.",
  },
  {
    year: "Quantis Global",
    title: "Business and Trade Initiatives",
    detail:
      "Developing global sourcing, import/export, and business positioning systems with execution-first approach.",
  },
  {
    year: "AI and Technology",
    title: "Product and Automation Projects",
    detail:
      "Shipping web applications, automation workflows, and experimentation across modern product stacks.",
  },
  {
    year: "Education",
    title: "MS in Information Technology",
    detail: "University of New Hampshire.",
  },
  {
    year: "Technical Experience",
    title: "Python and Django Foundations",
    detail:
      "Internship and project experience in web development, backend systems, and practical software delivery.",
  },
];

const education = [
  {
    school: "Southern New Hampshire University",
    degree: "Master of Science (MS), Computer Science",
    period: "Aug 2025 - Present",
    location: "Manchester, New Hampshire",
  },
  {
    school: "University of New Hampshire - Manchester",
    degree: "Master of Science (MS), Information Technology",
    period: "Aug 2024 - Aug 2025",
    location: "Manchester, New Hampshire",
  },
  {
    school: "Gujarat Technological University",
    degree: "Bachelor of Engineering, Computer Engineering",
    period: "Aug 2020 - Sep 2023",
    location: "Ahmedabad, Gujarat",
  },
  {
    school: "Gujarat Technological University",
    degree: "Diploma in Computer Engineering",
    period: "Aug 2017 - Aug 2020",
    location: "Gandhinagar, Gujarat",
  },
];

const certifications = [
  "AI Python for Beginners - DeepLearning.AI",
  "Creator Course - Instagram",
  "Machine Learning with Google Colab",
  "Intermediate Python Immersive Training",
  "PHP and MySQL",
  "JavaScript for Beginners",
  "Django Python Workshop",
];

export default function AboutPage() {
  return (
    <SiteShell>
      <section className="glass-panel creator-glow rounded-3xl p-8 shadow-sm md:p-12">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-brand-gold">About</p>
        <h1 className="display-title mt-4 text-5xl font-semibold tracking-tight text-white md:text-6xl">
          Dhruv Solanki (Dhruv Solankii)
        </h1>
        <p className="body-soft mt-7 max-w-4xl text-lg text-slate-300 md:text-xl">
          Results-driven Computer Science graduate student with expertise in software development,
          AI systems, full-stack web development, digital branding, and international business strategy.
          Founder of Quantis Global with hands-on global sourcing and import-export operations experience.
        </p>
      </section>

      <section className="mt-8 grid gap-6 md:grid-cols-3">
        <article className="glass-panel creator-card rounded-2xl p-6">
          <h2 className="section-title text-2xl font-semibold text-white">Journey</h2>
          <p className="body-soft mt-4 text-slate-300">
            From Gujarat to technology and AI, then into digital business and systems
            thinking through real projects and publishing.
          </p>
        </article>
        <article className="glass-panel creator-card rounded-2xl p-6">
          <h2 className="section-title text-2xl font-semibold text-white">Mission</h2>
          <p className="body-soft mt-4 text-slate-300">
            Build meaningful digital systems, practical products, and a media ecosystem
            that creates long-term value and trust.
          </p>
        </article>
        <article className="glass-panel creator-card rounded-2xl p-6">
          <h2 className="section-title text-2xl font-semibold text-white">Philosophy</h2>
          <p className="body-soft mt-4 text-slate-300">
            Technology + Creativity + Execution. Systems over noise, consistency over
            intensity, and compounding over shortcuts.
          </p>
        </article>
      </section>

      <section className="glass-panel mt-8 rounded-3xl p-10 shadow-sm">
        <h2 className="section-title text-4xl font-semibold tracking-tight text-white">
          Experience Timeline
        </h2>
        <div className="mt-8 space-y-5">
          {timeline.map((item) => (
            <article key={item.title} className="rounded-2xl border border-white/15 bg-white/5 p-6">
              <p className="text-sm text-brand-gold">{item.year}</p>
              <h3 className="section-title mt-3 text-2xl font-semibold text-white">{item.title}</h3>
              <p className="body-soft mt-3 text-slate-300">{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="glass-panel mt-8 rounded-3xl p-10 shadow-sm">
        <h2 className="section-title text-4xl font-semibold tracking-tight text-white">Education</h2>
        <div className="mt-7 space-y-4">
          {education.map((item) => (
            <article key={item.degree} className="rounded-2xl border border-white/15 bg-white/5 p-6">
              <p className="text-sm text-brand-cyan">{item.school}</p>
              <h3 className="section-title mt-2 text-xl font-semibold text-white">{item.degree}</h3>
              <p className="mt-2 text-sm text-slate-300">{item.period}</p>
              <p className="mt-1 text-sm text-slate-400">{item.location}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="glass-panel mt-8 rounded-3xl p-10 shadow-sm">
        <h2 className="section-title text-4xl font-semibold tracking-tight text-white">
          Certifications
        </h2>
        <div className="mt-6 flex flex-wrap gap-3">
          {certifications.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-sm text-slate-200"
            >
              {item}
            </span>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
