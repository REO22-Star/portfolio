import { PROCESS } from "@/lib/site";

export default function Process() {
  return (
    <section id="process">
      <div className="wrap">
        <p className="eyebrow reveal">How I Work</p>
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
