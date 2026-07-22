import { SITE } from "@/lib/site";

export default function Contact() {
  const action = `https://formspree.io/f/${SITE.formspreeId}`;

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
          <form className="form reveal" action={action} method="POST">
            <input type="text" name="name" placeholder="Your name" required />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
            />
            <textarea
              name="message"
              placeholder="Tell me about your project…"
              required
            />
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
            <p className="form-note">
              Form powered by Formspree — set your form ID in lib/site.ts.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
