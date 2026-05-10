import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const projects = [
  {
    title: "Retail Supply Chain Analytics",
    description:
      "End-to-end EDA pipeline in Python (Pandas, Matplotlib) over ~10,000 transactions and $2.3M in sales. Used Claude AI to accelerate insight synthesis across 4 regions and 3 segments — surfaced a $17.7K loss in the Tables sub-category and an 8% return rate concentrated in low-margin lines, informing discount and inventory strategy.",
    tags: ["Python", "SQL", "Power BI", "Claude AI"],
    link: "https://github.com/hoangkhai15/Retail-Supply-Chain-Analytics",
  },
  {
    title: "Bike Sales Exploration",
    description:
      "Built a star-schema model over a large transactional bike sales dataset and ran SQL deep-dives into customer regions, purchase frequency and top-revenue stores to inform marketing and inventory.",
    tags: ["SQL", "Data Modelling", "Star Schema"],
    link: "https://github.com/hoangkhai15/Bikes-Sales-Performance-Analysis-with-SQL",
  },
  {
    title: "Sales & Marketing Analysis",
    description:
      "Power BI dashboard tracking $230M in retail revenue across stores and categories. Modelled customer engagement by age segment and weekday to time promotions and target campaigns.",
    tags: ["Power BI", "Excel", "Retail KPIs"],
    link: "https://github.com/hoangkhai15/Sales-marketing-PowerBI",
  },
  {
    title: "Pizza Business Dashboard",
    description:
      "Power BI dashboard isolating peak day/hour performance to inform staff scheduling, surfacing top menu and ingredient contributors, and modelling price/volume elasticity.",
    tags: ["Power BI", "DAX", "Forecasting"],
    link: "https://app.powerbi.com/view?r=eyJrIjoiZjMwNDA0ODUtMWE5Yi00MWMzLWFlOTktYzE1NDVkNjE3OTI0IiwidCI6ImYzYzU0ZDg1LTAyMDgtNDgyYS04ZDJlLTZhMGRkYzBiNTFiNSJ9",
  },
];

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-32">
      <SectionHeading index="02" title="Selected projects" />
      <ul className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.08}>
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block h-full overflow-hidden rounded-lg border border-border bg-card/40 p-6 backdrop-blur-sm glow-hover"
            >
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-semibold transition-colors group-hover:text-neon">
                  {p.title}
                </h3>
                <span className="font-mono text-sm text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-neon">
                  ↗
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {p.description}
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-border px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-muted-foreground"
                  >
                    {t}
                  </li>
                ))}
              </ul>
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-neon/10 blur-3xl opacity-0 transition-opacity group-hover:opacity-100"
              />
            </a>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
