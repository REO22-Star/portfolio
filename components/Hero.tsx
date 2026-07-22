import { SITE } from "@/lib/site";

export default function Hero() {
  return (
    <header id="top" className="hero">
      <div className="wrap">
        <p className="role reveal">{SITE.tagline}</p>
        <h1 className="reveal">
          {SITE.firstName}{" "}
          <span className="grad">{SITE.lastName}</span>
        </h1>
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
    </header>
  );
}
