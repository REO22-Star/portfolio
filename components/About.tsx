import Image from "next/image";
import { ABOUT, SERVICES, SITE } from "@/lib/site";

export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <p className="eyebrow reveal">About</p>
        <h2 className="section-title reveal">What I do</h2>
        <div className="about-layout">
          <div className="about-portrait reveal">
            <Image
              src={SITE.portraitSrc}
              alt={SITE.fullName}
              width={320}
              height={400}
              priority
            />
          </div>
          <div className="about-grid">
            {ABOUT.paragraphs.map((p, i) => (
              <p key={i} className="reveal">
                {p}
              </p>
            ))}
          </div>
        </div>
        <div className="grid grid-4" style={{ marginTop: 48 }}>
          {SERVICES.map((s) => (
            <div className="card reveal" key={s.title}>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
