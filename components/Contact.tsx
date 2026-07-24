"use client";

import { useForm, ValidationError } from "@formspree/react";
import { SITE } from "@/lib/site";

export default function Contact() {
  const [state, handleSubmit] = useForm(SITE.formspreeId);
  const hasWhatsapp = SITE.whatsapp && !/^0+$/.test(SITE.whatsapp);

  return (
    <section id="contact">
      <div className="wrap">
        <span className="section-tag reveal">Contact</span>
        <h2 className="section-title reveal">Let&apos;s automate your business</h2>

        <div className="channel-row reveal">
          {hasWhatsapp && (
            <a
              className="channel-card"
              href={`https://wa.me/${SITE.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="channel-icon wa" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm5.8 14.14c-.24.68-1.4 1.3-1.94 1.38-.5.07-1.13.1-1.82-.11-.42-.13-.96-.31-1.65-.61-2.9-1.25-4.79-4.17-4.94-4.36-.14-.19-1.18-1.57-1.18-3s.75-2.13 1.02-2.42c.27-.29.58-.36.77-.36l.56.01c.18.01.42-.07.66.5.24.58.82 2.01.89 2.16.07.14.12.31.02.5-.09.19-.14.31-.28.48-.14.17-.29.37-.42.5-.14.14-.28.29-.12.57.16.29.72 1.18 1.54 1.91 1.06.95 1.95 1.24 2.24 1.38.29.14.45.12.62-.07.17-.19.71-.83.9-1.11.19-.29.38-.24.64-.14.26.1 1.66.78 1.95.92.29.14.48.22.55.34.07.12.07.69-.17 1.37Z" />
                </svg>
              </span>
              <span className="channel-text">
                <span className="channel-name">WhatsApp</span>
                <span className="channel-sub">Chat with me directly</span>
              </span>
            </a>
          )}
          <a
            className="channel-card"
            href={SITE.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="channel-icon li" aria-hidden="true">
              in
            </span>
            <span className="channel-text">
              <span className="channel-name">LinkedIn</span>
              <span className="channel-sub">See more of my work</span>
            </span>
          </a>
          <a className="channel-card" href={`mailto:${SITE.email}`}>
            <span className="channel-icon em" aria-hidden="true">
              ✉
            </span>
            <span className="channel-text">
              <span className="channel-name">Email</span>
              <span className="channel-sub">{SITE.email}</span>
            </span>
          </a>
        </div>

        <div className="contact-grid">
          <div className="reveal">
            <p style={{ color: "var(--muted)", marginBottom: 24, fontSize: 17 }}>
              Have a project in mind or a system that needs automating? Send a
              message and I&apos;ll get back to you.
            </p>
            <div className="contact-links">
              <a className="contact-link" href={`mailto:${SITE.email}`}>
                ✉&nbsp;&nbsp;{SITE.email}
              </a>
              <a
                className="contact-link"
                href={SITE.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                in&nbsp;&nbsp;LinkedIn
              </a>
              <a
                className="contact-link"
                href={SITE.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                ⌥&nbsp;&nbsp;GitHub
              </a>
            </div>
          </div>

          {state.succeeded ? (
            <div className="form reveal form-success">
              <h3>Thanks for reaching out! 🎉</h3>
              <p>
                Your message has been sent — I&apos;ll get back to you as soon as
                I can.
              </p>
            </div>
          ) : (
            <form className="form reveal" onSubmit={handleSubmit}>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Your name"
                required
              />
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Your email"
                required
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
                className="form-error"
              />
              <textarea
                id="message"
                name="message"
                placeholder="Tell me about your project…"
                required
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
                className="form-error"
              />
              <button
                type="submit"
                className="btn btn-primary"
                disabled={state.submitting}
              >
                {state.submitting ? "Sending…" : "Send Message"}
              </button>
              <ValidationError errors={state.errors} className="form-error" />
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
