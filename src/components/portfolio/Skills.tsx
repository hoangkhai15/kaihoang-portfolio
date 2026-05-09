import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const groups = [
  { title: "Data Visualisation", items: ["Power BI", "Tableau", "Excel"] },
  { title: "Languages", items: ["SQL", "Python"] },
  { title: "Cloud & Warehouses", items: ["Snowflake", "Databricks", "Microsoft Fabric", "SQL Server", "Oracle"] },
  { title: "AI & Automation", items: ["Agentic Workflows", "Workflow Orchestration", "CRM Data Mgmt", "Process Optimization"] },
];

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-32">
      <SectionHeading index="03" title="Skills & tools" />
      <div className="grid gap-6 sm:grid-cols-2">
        {groups.map((g, i) => (
          <Reveal key={g.title} delay={i * 0.08}>
            <div className="rounded-lg border border-border bg-card/40 p-6 backdrop-blur-sm glow-hover">
              <h3 className="font-mono text-xs uppercase tracking-widest text-neon">
                {g.title}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <li
                    key={it}
                    className="rounded-md border border-border bg-background/40 px-3 py-1.5 text-sm text-foreground/90 transition-colors hover:border-neon hover:text-neon"
                  >
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
