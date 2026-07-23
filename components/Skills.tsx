import { SKILL_GROUPS } from "@/lib/site";

export default function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <span className="section-tag reveal">Skills & Tools</span>
        <h2 className="section-title reveal">The stack I build with</h2>
        <div className="grid grid-4">
          {SKILL_GROUPS.map((g) => (
            <div className="skill-group reveal" key={g.category}>
              <h4>{g.category}</h4>
              <div className="chips">
                {g.skills.map((s) => (
                  <span className="chip" key={s}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
