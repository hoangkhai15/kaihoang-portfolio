import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled ? "backdrop-blur-md bg-background/70 border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#hero" className="font-mono text-sm tracking-widest">
          <span className="text-neon">KH</span>
          <span className="text-muted-foreground">/</span>
          <span>kai.hoang</span>
        </a>
        <ul className="hidden items-center gap-7 md:flex">
          {links.map((l, i) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group relative font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
              >
                <span className="text-neon mr-1">0{i + 1}.</span>
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-neon transition-all group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="hidden rounded-md border border-neon/40 px-4 py-2 font-mono text-xs uppercase tracking-widest text-neon shadow-[0_0_24px_-8px_var(--neon)] transition-all hover:bg-neon/10 hover:shadow-[0_0_32px_-4px_var(--neon)] md:inline-block"
        >
          Hire me
        </a>
      </nav>
    </header>
  );
}
