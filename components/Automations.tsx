import { AUTOMATIONS } from "@/lib/site";

export default function Automations() {
  return (
    <section id="automations">
      <div className="wrap">
        <span className="section-tag reveal">Automation Workflows</span>
        <h2 className="section-title reveal">Production n8n builds</h2>
        <p
          className="reveal"
          style={{
            color: "var(--muted)",
            fontSize: 17,
            maxWidth: 640,
            marginTop: -24,
            marginBottom: 40,
          }}
        >
          A selection of live automations I&apos;ve shipped across CRM, sync, and
          revenue-operations use cases — each running in production.
        </p>
        <div className="grid grid-3">
          {AUTOMATIONS.map((a) => (
            <article className="card auto-card reveal" key={a.name}>
              <div className="auto-thumb" aria-hidden="true">
                <span className="node-icon">&#123; n8n &#125;</span>
              </div>
              <div className="auto-meta">
                <span className="auto-client">{a.client}</span>
                <span className="auto-cat">{a.category}</span>
              </div>
              <h3>{a.name}</h3>
              <p>{a.desc}</p>
              <div className="tech-row">
                {a.tech.map((t) => (
                  <span className="chip" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
