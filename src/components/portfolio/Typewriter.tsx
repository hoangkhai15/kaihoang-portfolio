import { useEffect, useState } from "react";

/** Cycles through phrases with a typewriter effect. */
export function Typewriter({ phrases, speed = 70, pause = 1400 }: { phrases: string[]; speed?: number; pause?: number; }) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const current = phrases[i % phrases.length];
    if (!del && text === current) {
      const t = setTimeout(() => setDel(true), pause);
      return () => clearTimeout(t);
    }
    if (del && text === "") {
      setDel(false);
      setI((v) => v + 1);
      return;
    }
    const t = setTimeout(() => {
      setText(del ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1));
    }, del ? speed / 2 : speed);
    return () => clearTimeout(t);
  }, [text, del, i, phrases, speed, pause]);

  return <span className="caret font-mono text-neon">{text}</span>;
}
