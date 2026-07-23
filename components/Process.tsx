import { PROCESS } from "@/lib/site";

export default function Process() {
  return (
    <section id="process">
      <div className="wrap">
        <span className="section-tag reveal">How I Work</span>
        <h2 className="section-title reveal">Process</h2>
        <div className="process-row">
          {PROCESS.map((p, i) => (
            <div className="process-step reveal" key={p.step}>
              <div className="n">0{i + 1}</div>
              <h4>{p.step}</h4>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
