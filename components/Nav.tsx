"use client";

import { useEffect, useState } from "react";
import { SITE } from "@/lib/site";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const initials = SITE.fullName
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 3);

  return (
    <nav className={`nav${scrolled ? " scrolled" : ""}`}>
      <div className="wrap nav-inner">
        <a href="#top" className="brand">
          <span className="mark">{initials}</span>
          <span className="brand-text">
            <span className="brand-name">{SITE.firstName}</span>
            <span className="brand-sub">{SITE.tagline}</span>
          </span>
        </a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#work">Work</a>
          <a href="#automations">Automations</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}
