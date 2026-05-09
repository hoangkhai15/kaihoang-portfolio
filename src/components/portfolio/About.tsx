import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-32">
      <SectionHeading index="01" title="About me" />
      <div className="grid gap-12 md:grid-cols-[3fr_2fr]">
        <Reveal delay={0.05} className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Hey — I'm Kai. I started writing code at 14 because I wanted to
            mod a video game. A decade later I'm still chasing the same
            feeling: building things people actually enjoy using.
          </p>
          <p>
            Today I focus on the front of the front-end — design systems,
            motion, accessibility, performance. I care a lot about details:
            the easing on a button press, the contrast of a focus ring, the
            shape of an empty state.
          </p>
          <p>
            Outside of work you'll find me on a bike somewhere, brewing
            espresso, or losing at chess online.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="group relative aspect-square overflow-hidden rounded-lg border border-neon/30 p-1 glow-hover">
            <div
              className="h-full w-full rounded-md bg-gradient-to-br from-neon/30 via-transparent to-neon-2/30"
              aria-hidden="true"
            >
              <div className="flex h-full w-full items-center justify-center font-mono text-6xl text-foreground/80">
                KH
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
