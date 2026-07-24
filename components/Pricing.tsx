import { PRICING } from "@/lib/site";

export default function Pricing() {
  return (
    <section id="pricing">
      <div className="wrap">
        <span className="section-tag reveal">Services</span>
        <h2 className="section-title reveal">Automation packages</h2>
        <p className="section-lead reveal">
          Published starting prices to build trust — final scope and quote
          confirmed after a free discovery call.
        </p>
        <div className="price-grid">
          {PRICING.map((p) => (
            <div
              className={`price-card reveal${p.popular ? " popular" : ""}`}
              key={p.name}
            >
              {p.popular && <span className="price-badge">Most Popular</span>}
              <h3 className="price-name">{p.name}</h3>
              <p className="price-blurb">{p.blurb}</p>
              <div className="price-amount">
                <span className="price-num">{p.price}</span>{" "}
                <span className="price-note">{p.priceNote}</span>
              </div>
              <ul className="price-features">
                {p.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`btn ${p.popular ? "btn-primary" : "btn-ghost"} price-cta`}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
