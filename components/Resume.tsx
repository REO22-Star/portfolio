import { RESUME } from "@/lib/site";

export default function Resume() {
  return (
    <section id="resume">
      <div className="wrap">
        <span className="section-tag reveal">Experience</span>
        <h2 className="section-title reveal">Career snapshot</h2>
        <div className="timeline">
          {RESUME.map((r) => (
            <div className="tl-item reveal" key={r.period}>
              <div className="tl-period">{r.period}</div>
              <div className="tl-body">
                <h4>{r.title}</h4>
                <div className="org">{r.org}</div>
                <p>{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
