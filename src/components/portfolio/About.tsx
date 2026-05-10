import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import kaiPortrait from "@/assets/kai-hoang.jpg";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-32">
      <SectionHeading index="01" title="About me" />
      <div className="grid gap-12 md:grid-cols-[3fr_2fr]">
        <Reveal delay={0.05} className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Hi — I'm Kai. I started in logistics, then fell in love with the
            stories hidden inside spreadsheets. An MBA in Business Analytics
            later, I now spend my days turning messy operational data into
            dashboards people actually use.
          </p>
          <p>
            I work across the full analytics stack: writing SQL against
            warehouses like Snowflake and Databricks, modelling data with
            Python, and shipping decision-ready dashboards in Power BI and
            Tableau. I care about data quality, clear definitions, and the
            business question behind every chart.
          </p>
          <p>
            Outside of work I'm exploring agentic workflows and automation,
            and learning how to make analytics feel less like reporting and
            more like a conversation.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="group relative aspect-[3/4] overflow-hidden rounded-lg border border-neon/30 p-1 glow-hover">
            <img
              src={kaiPortrait}
              alt="Portrait of Kai Hoang"
              loading="lazy"
              className="h-full w-full rounded-md object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <div
              className="pointer-events-none absolute inset-1 rounded-md bg-gradient-to-tr from-neon/10 via-transparent to-neon-2/10 mix-blend-overlay"
              aria-hidden="true"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
