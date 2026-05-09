import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const jobs = [
  {
    role: "Senior Software Engineer",
    company: "Northwind",
    period: "2023 — Present",
    points: [
      "Lead front-end architect for the core product, owning performance, design system, and motion language.",
      "Cut Time-to-Interactive by 48% through route-level code-splitting and edge rendering.",
      "Mentor 4 engineers; run weekly design-engineering syncs.",
    ],
  },
  {
    role: "Product Engineer",
    company: "Loop Labs",
    period: "2021 — 2023",
    points: [
      "Shipped the v2 dashboard end-to-end (design → ship) in 6 weeks.",
      "Built realtime collaboration layer over CRDTs serving 50k DAU.",
    ],
  },
  {
    role: "Front-end Engineer",
    company: "Studio Ember",
    period: "2019 — 2021",
    points: [
      "Crafted award-winning marketing sites for Stripe, Figma, and Linear.",
      "Won FWA Site of the Day twice for interactive case studies.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-4xl px-6 py-32">
      <SectionHeading index="04" title="Experience" />
      <ol className="relative space-y-10 border-l border-border pl-8">
        {jobs.map((j, i) => (
          <Reveal key={j.company} delay={i * 0.1}>
            <li className="relative">
              <span
                aria-hidden="true"
                className="absolute -left-[37px] top-2 h-3 w-3 rounded-full bg-neon shadow-[0_0_20px_var(--neon)]"
              />
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                {j.period}
              </p>
              <h3 className="mt-1 text-lg font-semibold">
                {j.role} <span className="text-neon">@ {j.company}</span>
              </h3>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
                {j.points.map((p) => (
                  <li key={p} className="flex gap-3">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-neon" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
