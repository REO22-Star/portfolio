import { SITE } from "@/lib/site";

export default function Nav() {
  const initials = SITE.fullName
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 3);

  return (
    <nav className="nav">
      <div className="wrap nav-inner">
        <a href="#top" className="nav-logo">
          {initials}
        </a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#work">Work</a>
          <a href="#automations">Automations</a>
          <a href="#resume">Resume</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}
