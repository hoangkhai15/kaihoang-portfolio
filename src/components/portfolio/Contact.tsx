import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-3xl px-6 py-32 text-center">
      <Reveal>
        <p className="font-mono text-sm text-neon">05. What's next</p>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-6xl">
          Let's build something.
        </h2>
      </Reveal>
      <Reveal delay={0.2}>
        <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
          Looking for a data analyst who can turn your messy data into clear
          decisions? I'm open to roles, contracts and collaborations — drop
          me a line.
        </p>
      </Reveal>
      <Reveal delay={0.3}>
        <a
          href="mailto:kaihoang.1505@gmail.com"
          className="mt-10 inline-block rounded-md border border-neon/50 bg-neon/5 px-8 py-4 font-mono text-sm uppercase tracking-widest text-neon shadow-[0_0_40px_-8px_var(--neon)] transition-all hover:bg-neon/10 hover:shadow-[0_0_60px_-4px_var(--neon)]"
        >
          kaihoang.1505@gmail.com
        </a>
      </Reveal>
      <Reveal delay={0.4}>
        <ul className="mt-12 flex flex-wrap justify-center gap-6 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          {[
            { label: "LinkedIn", href: "https://www.linkedin.com/in/kai-hoang-910520286/" },
            { label: "Email", href: "mailto:kaihoang.1505@gmail.com" },
            { label: "Phone", href: "tel:+61415599450" },
            { label: "Resume ↓", href: "https://drive.google.com/file/d/1bRASQPV_ys2K44h27bhlDL6L1yem24sp/view?usp=sharing" },
          ].map((s) => (
            <li key={s.label}>
              <a href={s.href} className="transition-colors hover:text-neon">
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
      <footer className="mt-24 font-mono text-xs text-muted-foreground">
        Designed & built by Kai Hoang · © {new Date().getFullYear()}
      </footer>
    </section>
  );
}
