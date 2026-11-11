import { TESTIMONIALS } from "@/lib/site";

export default function Testimonials() {
  if (TESTIMONIALS.length === 0) return null;
  const single = TESTIMONIALS.length === 1;

  return (
    <section id="testimonials">
      <div className="wrap">
        <span className="section-tag reveal">Testimonials</span>
        <h2 className="section-title reveal">What people say</h2>
        <div className={single ? "t-single" : `grid grid-${Math.min(TESTIMONIALS.length, 3)}`}>
          {TESTIMONIALS.map((t, i) => (
            <figure className="t-card reveal" key={i}>
              {t.stars ? (
                <div className="t-stars" aria-label={`${t.stars} out of 5 stars`}>
                  {"★".repeat(t.stars)}
                  {"☆".repeat(5 - t.stars)}
                </div>
              ) : (
                <span className="t-mark" aria-hidden="true">
                  &ldquo;
                </span>
              )}
              <blockquote className="t-quote">{t.quote}</blockquote>
              <figcaption className="t-person">
                <span className="t-avatar" aria-hidden="true">
                  {t.initials}
                </span>
                <span>
                  <span className="t-name">{t.name}</span>
                  <br />
                  <span className="t-role">{t.role}</span>
                  {t.context && (
                    <>
                      <br />
                      <span className="t-context">{t.context}</span>
                    </>
                  )}
                </span>
              </figcaption>
              {t.sourceUrl && (
                <a className="t-source" href={t.sourceUrl} target="_blank" rel="noopener noreferrer">
                  View {t.sourceLabel ?? "source"} ↗
                </a>
              )}
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
