import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const jobs = [
  {
    role: "Data Analyst Intern",
    company: "Youth Options",
    period: "Apr 2025 — Jul 2025 · Adelaide",
    points: [
      "Designed Power BI dashboards backed by SQL KPI analysis, cutting administrative time by 10% through data-driven decisions.",
      "Used Python and Google Sheets to extract, transform and store data, ensuring quality and accuracy across reporting.",
      "Performed data validation and process analysis on CRM systems to meet NDIS service standards and improve referral conversion.",
    ],
  },
  {
    role: "Professional Project Consultant",
    company: "All Altitudes",
    period: "Feb 2024 — May 2024 · Adelaide",
    points: [
      "Facilitated cross-functional workshops to align data definitions and reporting metrics, reducing project rework by 15%.",
      "Built dashboards, reports and visualisations that informed strategic recommendations.",
      "Led a critical data alignment project ensuring consistent, accurate information flow across internal systems.",
    ],
  },
  {
    role: "Sales Analyst",
    company: "One Line Vietnam",
    period: "Jun 2022 — Sep 2022 · Vietnam",
    points: [
      "Queried key transactional data with SQL to drive detailed sales analysis for a global logistics provider.",
      "Built logistics visualisations that improved routing efficiency and lifted delivery times by 5%.",
      "Managed client relationships, maintaining 90%+ satisfaction and using data insights to close substantial deals.",
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
