import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const projects = [
  {
    title: "Lumen UI",
    description:
      "An open-source React component library built on Radix and Tailwind. 2k+ stars, used in production by 200+ teams.",
    tags: ["React", "TypeScript", "Tailwind", "Radix"],
    link: "#",
  },
  {
    title: "Pulse Analytics",
    description:
      "Realtime analytics dashboard for product teams. Sub-100ms query latency over 1B+ events with edge caching.",
    tags: ["Next.js", "ClickHouse", "Edge", "tRPC"],
    link: "#",
  },
  {
    title: "Orbit",
    description:
      "Calendar app reimagined around focus blocks. Native-feeling web app with offline-first sync.",
    tags: ["React", "IndexedDB", "Service Workers"],
    link: "#",
  },
  {
    title: "Sonata",
    description:
      "Generative ambient music tool driven by Web Audio + WebGL shaders. Featured on Hacker News.",
    tags: ["WebAudio", "WebGL", "Vite"],
    link: "#",
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
