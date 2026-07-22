import { PROJECTS } from "@/lib/site";

export default function Projects() {
  return (
    <section id="work">
      <div className="wrap">
        <p className="eyebrow reveal">Featured Work</p>
        <h2 className="section-title reveal">Selected case studies</h2>
        {PROJECTS.map((p) => (
          <article className="project reveal" key={p.name}>
            <p className="cat">{p.category}</p>
            <h3>{p.name}</h3>
            <div className="block">
              <div className="lbl">Challenge</div>
              <p>{p.challenge}</p>
            </div>
            <div className="block">
              <div className="lbl">Solution</div>
              <p>{p.solution}</p>
            </div>
            <div className="block">
              <div className="lbl">Results</div>
              <ul className="results">
                {p.results.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </div>
            <div className="tech-row">
              {p.tech.map((t) => (
                <span className="chip" key={t}>
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
