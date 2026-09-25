"use client";

import { useState } from "react";
import Link from "next/link";

const questions = [
  { key: "style", label: "Preferred look", options: ["Open vertical bars", "Glass", "Solid privacy on the boundary", "Not sure"] },
  { key: "privacy", label: "Privacy", options: ["See through the fence", "Some privacy", "Solid on the boundary only"] },
  { key: "care", label: "Maintenance preference", options: ["Low maintenance", "Happy to maintain hardware", "Not sure"] },
  { key: "colour", label: "Colour", options: ["Black", "White or light", "Monument or dark", "Not sure"] },
  { key: "who", label: "Installation or supply", options: ["Professional installation", "Supply only / DIY", "Not sure"] },
  { key: "layout", label: "Pool layout", options: ["Simple rectangle", "Courtyard", "Slope or retaining wall", "Not sure"] },
];

export function FindFence() {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [show, setShow] = useState(false);

  const recs: { href: string; title: string; why: string }[] = [];
  if (answers.style === "Glass") recs.push({ href: "/pool-fencing/glass/", title: "Glass pool fencing", why: "You asked for an open view." });
  if (answers.colour === "Black" || answers.style === "Open vertical bars") recs.push({ href: "/pool-fencing/black-flat-top/", title: "Black flat top", why: "The usual Sydney choice for a modern open barrier." });
  if (answers.colour === "White or light") recs.push({ href: "/pool-fencing/white-flat-top/", title: "White flat top", why: "A lighter flat-top finish." });
  if (answers.privacy === "Solid on the boundary only" || answers.style === "Solid privacy on the boundary") {
    recs.push({ href: "/extensions/", title: "Colorbond boundary and extensions", why: "Solid screening belongs on a boundary that is designed as a barrier, not assumed to be one." });
  }
  if (answers.layout === "Slope or retaining wall") recs.push({ href: "/nsw-pool-rules/slopes-walls-windows/", title: "Slopes and walls", why: "Read this before locking a panel layout." });
  if (!recs.length) recs.push({ href: "/pool-fencing/black-flat-top/", title: "Start with black flat top", why: "It is the most common brief. Photos will tell us if another style fits better." });

  return (
    <div className="form-card">
      {questions.map((q) => (
        <fieldset key={q.key} style={{ border: 0, padding: 0 }}>
          <legend>{q.label}</legend>
          <div className="choices">
            {q.options.map((option) => (
              <label key={option} className={`choice${answers[q.key] === option ? " selected" : ""}`}>
                <input type="radio" name={q.key} checked={answers[q.key] === option} onChange={() => setAnswers((c) => ({ ...c, [q.key]: option }))} />
                {option}
              </label>
            ))}
          </div>
        </fieldset>
      ))}
      <button className="btn" type="button" onClick={() => setShow(true)}>Show relevant categories</button>
      {show && (
        <div style={{ marginTop: 16 }}>
          <p className="note">A shortlist only. It is not a compliance sign-off.</p>
          {recs.map((r) => (
            <p key={r.href}><Link href={r.href}><strong>{r.title}</strong></Link> — {r.why}</p>
          ))}
          <Link className="btn" href="/quote/">Get a quote for this direction</Link>
        </div>
      )}
    </div>
  );
}
