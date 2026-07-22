"use client";

import { useForm, ValidationError } from "@formspree/react";
import { SITE } from "@/lib/site";

export default function Contact() {
  const [state, handleSubmit] = useForm(SITE.formspreeId);

  return (
    <section id="contact">
      <div className="wrap">
        <p className="eyebrow reveal">Contact</p>
        <h2 className="section-title reveal">Let&apos;s work together</h2>
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
