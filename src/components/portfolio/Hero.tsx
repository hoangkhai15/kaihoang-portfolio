import { motion, useScroll, useTransform } from "framer-motion";
import { Typewriter } from "./Typewriter";
import { useRef } from "react";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <div className="bg-grid absolute inset-0 -z-10" aria-hidden="true" />
      <motion.div style={{ y, opacity }} className="mx-auto w-full max-w-6xl px-6 pt-32">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-mono text-sm text-neon"
        >
          {"// hi, my name is"}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-4 text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl lg:text-8xl"
        >
          Kai Hoang.
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-2 text-4xl font-bold text-muted-foreground md:text-6xl lg:text-7xl"
        >
          I turn data into{" "}
          <Typewriter
            phrases={[
              "decisions.",
              "dashboards.",
              "insights.",
              "growth.",
            ]}
          />
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          Data analyst based in Adelaide, blending SQL, Python and Power BI
          with a business analytics background to help teams make faster,
          sharper, data-driven decisions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="#projects"
            className="rounded-md border border-neon/50 bg-neon/5 px-6 py-3 font-mono text-sm uppercase tracking-widest text-neon shadow-[0_0_30px_-8px_var(--neon)] transition-all hover:bg-neon/10 hover:shadow-[0_0_40px_-4px_var(--neon)]"
          >
            View my work →
          </a>
          <a
            href="#contact"
            className="rounded-md border border-border px-6 py-3 font-mono text-sm uppercase tracking-widest text-muted-foreground transition-all hover:border-foreground hover:text-foreground"
          >
            Get in touch
          </a>
          <a
            href="https://drive.google.com/file/d/1VfI5O1sBgPdqGikAb6MZDZzKSEM5zZGY/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-border px-6 py-3 font-mono text-sm uppercase tracking-widest text-muted-foreground transition-all hover:border-neon hover:text-neon"
          >
            Download CV ↓
          </a>
        </motion.div>
      </motion.div>

      {/* scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-xs uppercase tracking-widest text-muted-foreground"
      >
        <div className="flex flex-col items-center gap-2">
          <span>scroll</span>
          <span className="block h-10 w-px animate-pulse bg-gradient-to-b from-neon to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
