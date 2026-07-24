"use client";

import { useEffect, useState } from "react";
import { SITE } from "@/lib/site";

// Typewriter that cycles through SITE.roles
function useTypewriter(words: readonly string[]) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let delay = deleting ? 45 : 90;

    if (!deleting && text === current) {
      delay = 1600; // pause at the full word
    } else if (deleting && text === "") {
      delay = 300;
    }

    const t = setTimeout(() => {
      if (!deleting && text === current) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setWordIndex((i) => (i + 1) % words.length);
      } else {
        setText((prev) =>
          deleting
            ? current.slice(0, prev.length - 1)
            : current.slice(0, prev.length + 1)
        );
      }
    }, delay);

    return () => clearTimeout(t);
  }, [text, deleting, wordIndex, words]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(SITE.roles);

  return (
    <header id="top" className="hero">
      <div className="wrap hero-layout">
        <div className="hero-copy">
          <span className="status-pill reveal">
            <span className="status-dot" aria-hidden="true" />
            {SITE.availability}
          </span>
          <h1 className="reveal">
            {SITE.firstName}{" "}
            <span className="grad">{SITE.lastName}</span>
          </h1>
          <p className="role reveal" aria-label={SITE.tagline}>
            {typed}
            <span className="type-caret" aria-hidden="true">
              |
            </span>
          </p>
          <p className="sub reveal">{SITE.heroSub}</p>
          <div className="cta-row reveal">
            <a href="#work" className="btn btn-primary">
              View Work
            </a>
            <a href="#contact" className="btn btn-ghost">
              Get in Touch
            </a>
          </div>
          <div className="stats reveal">
            {SITE.stats.map((s) => (
              <div className="stat" key={s.label}>
                <div className="num">{s.num}</div>
                <div className="label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-portrait reveal">
          <div className="hero-ring">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={SITE.portraitSrc} alt={SITE.fullName} />
          </div>
          <span className="portrait-badge">
            <span className="status-dot" aria-hidden="true" />
            {SITE.portraitBadge}
          </span>
        </div>
      </div>
    </header>
  );
}
