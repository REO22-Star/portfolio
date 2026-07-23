"use client";

import { useState } from "react";
import { PROJECTS, PROJECT_FILTERS } from "@/lib/site";

export default function Projects() {
  const [filter, setFilter] = useState<string>("All");

  const shown =
    filter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.group === filter);

  return (
    <section id="work">
      <div className="wrap">
        <span className="section-tag reveal">Featured Work</span>
        <h2 className="section-title reveal">Selected case studies</h2>

        <div className="filter-row reveal">
          {PROJECT_FILTERS.map((f) => (
            <button
              key={f}
              className={`filter-btn${filter === f ? " active" : ""}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        {shown.map((p) => (
          <article className="project reveal in" key={p.name}>
            <p className="cat">{p.category}</p>
            <h3>{p.name}</h3>
            <div className="block">
              <div className="lbl">Challenge</div>
              <p>{p.challenge}</p>
            </div>
            <div className="block">
              <div className="lbl">Solution</div>
              <p>{p.solution}</p>
            </div>
            <div className="block">
              <div className="lbl">Results</div>
              <ul className="results">
                {p.results.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </div>
            <div className="tech-row">
              {p.tech.map((t) => (
                <span className="chip" key={t}>
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
