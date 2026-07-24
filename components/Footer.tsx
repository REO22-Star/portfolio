import { SITE, FOOTER_LINKS } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();
  const hasWhatsapp = SITE.whatsapp && !/^0+$/.test(SITE.whatsapp);
  const initials = SITE.fullName
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 3);

  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div className="footer-brand">
          <div className="footer-id">
            <span className="mark">{initials}</span>
            <span className="footer-name">{SITE.fullName}</span>
          </div>
          <p className="footer-blurb">
            CRM &amp; automation developer. Building HubSpot systems, email, and
            AI-driven workflows that give teams back their time.
          </p>
          <div className="footer-social">
            {hasWhatsapp && (
              <a
                href={`https://wa.me/${SITE.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                W
              </a>
            )}
            <a
              href={SITE.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              in
            </a>
            <a href={`mailto:${SITE.email}`} aria-label="Email">
              @
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Sitemap</h4>
          <ul>
            {FOOTER_LINKS.sitemap.map((l) => (
              <li key={l.label}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            {FOOTER_LINKS.company.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  {...(l.href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li>
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </li>
            {hasWhatsapp && (
              <li>
                <a
                  href={`https://wa.me/${SITE.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +{SITE.whatsapp}
                </a>
              </li>
            )}
            <li>{SITE.location}</li>
          </ul>
        </div>
      </div>

      <div className="wrap footer-bottom">
        <span>
          © {year} {SITE.fullName}. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
