import { Reveal } from "./Reveal";

export function SectionHeading({ index, title }: { index: string; title: string; }) {
  return (
    <Reveal>
      <div className="mb-12 flex items-center gap-4">
        <h2 className="flex items-baseline gap-3 text-3xl font-bold md:text-4xl">
          <span className="font-mono text-base text-neon">{index}.</span>
          {title}
        </h2>
        <span className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
      </div>
    </Reveal>
  );
}
