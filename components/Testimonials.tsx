import { TESTIMONIALS } from "@/lib/site";

export default function Testimonials() {
  return (
    <section id="testimonials">
      <div className="wrap">
        <span className="section-tag reveal">Testimonials</span>
        <h2 className="section-title reveal">What clients say</h2>
        <div className="grid grid-3">
          {TESTIMONIALS.map((t, i) => (
            <div className="t-card reveal" key={i}>
              <div className="t-stars" aria-label={`${t.stars} out of 5 stars`}>
                {"★".repeat(t.stars)}
                {"☆".repeat(5 - t.stars)}
              </div>
              <p className="t-quote">{t.quote}</p>
              <div className="t-person">
                <span className="t-avatar" aria-hidden="true">
                  {t.initials}
                </span>
                <span>
                  <span className="t-name">{t.name}</span>
                  <br />
                  <span className="t-role">{t.role}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
