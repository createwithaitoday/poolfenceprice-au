"use client";

import { useState } from "react";
import Link from "next/link";
import { track } from "@/lib/analytics";

const questions: { key: string; label: string; options: string[] }[] = [
  { key: "where", label: "Where is the pool?", options: ["Residential house", "Apartment or strata", "Not sure"] },
  { key: "year", label: "Approximate pool construction year", options: ["Before 2008", "2008–2013", "After April 2013", "Not sure"] },
  { key: "barrier", label: "Is there an existing barrier?", options: ["Yes", "No", "Partial", "Not sure"] },
  { key: "height", label: "Barrier height", options: ["About 1.2 m or more", "Under 1.2 m", "Boundary under 1.8 m", "Not measured"] },
  { key: "gap", label: "Bottom gap", options: ["10 cm or less", "More than 10 cm", "Not measured"] },
  { key: "close", label: "Does the gate self-close?", options: ["Yes", "No", "No gate", "Not sure"] },
  { key: "latch", label: "Does the gate self-latch?", options: ["Yes", "No", "No gate", "Not sure"] },
  { key: "swing", label: "Does the gate open away from the pool?", options: ["Yes", "No", "No gate", "Not sure"] },
  { key: "objects", label: "Objects within the non-climbable zone?", options: ["Clear", "Pots, bins or furniture", "Trees or structures", "Not sure"] },
  { key: "boundary", label: "Is a boundary fence part of the barrier?", options: ["Yes", "No", "Not sure"] },
  { key: "wall", label: "Retaining wall involved?", options: ["Yes", "No", "Not sure"] },
  { key: "slope", label: "Sloping ground?", options: ["Level", "Sloped", "Not sure"] },
  { key: "openings", label: "Windows or doors near the pool?", options: ["Direct opening into the pool area", "Separated by a fence", "Not sure"] },
];

export function ComplianceChecker() {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);

  function set(key: string, value: string) {
    if (!done && Object.keys(answers).length === 0) track("compliance_checker_started");
    setAnswers((cur) => ({ ...cur, [key]: value }));
  }

  const issues: string[] = [];
  if (answers.height === "Under 1.2 m" || answers.height === "Boundary under 1.8 m" || answers.height === "Not measured") {
    issues.push("Height should be checked against the 1.2 m pool fence figure, or 1.8 m where a boundary fence forms part of the barrier.");
  }
  if (answers.gap !== "10 cm or less") issues.push("The bottom gap needs a physical check. NSW guidance limits it to 10 cm from finished ground.");
  if (answers.close === "No" || answers.close === "Not sure") issues.push("Confirm the gate closes itself from any open position.");
  if (answers.latch === "No" || answers.latch === "Not sure") issues.push("Confirm the gate latches itself when it shuts.");
  if (answers.swing === "No") issues.push("A gate that swings toward the pool is specifically called out in NSW guidance as needing to be re-hung.");
  if (answers.objects && answers.objects !== "Clear") issues.push("Objects, planting or structures near the fence can remove the non-climbable zone.");
  if (answers.boundary === "Yes") issues.push("A boundary used as part of the barrier has a higher height requirement and should be assessed, not assumed.");
  if (answers.wall === "Yes" || answers.slope === "Sloped") issues.push("Walls and slopes change how height and climb points are measured.");
  if (answers.openings === "Direct opening into the pool area") issues.push("Doors and windows opening into the pool area need a professional look. Current NSW guidance does not treat them as an acceptable barrier.");
  if (answers.year === "Before 2008" || answers.year === "Not sure") issues.push("Older pools can sit under an earlier standard until the barrier is altered. A change can bring current rules into effect.");
  if (answers.barrier === "No" || answers.barrier === "Partial") issues.push("A pool that can hold more than 30 cm of water needs a child-resistant barrier.");

  return (
    <div className="form-card">
      {questions.map((q) => (
        <fieldset key={q.key} style={{ border: 0, padding: 0, marginBottom: 14 }}>
          <legend>{q.label}</legend>
          <div className="choices">
            {q.options.map((option) => (
              <label key={option} className={`choice${answers[q.key] === option ? " selected" : ""}`}>
                <input type="radio" name={q.key} checked={answers[q.key] === option} onChange={() => set(q.key, option)} />
                {option}
              </label>
            ))}
          </div>
        </fieldset>
      ))}
      <button className="btn" type="button" onClick={() => { setDone(true); track("compliance_checker_completed"); }}>
        Show potential issues to check
      </button>
      {done && (
        <div style={{ marginTop: 18 }}>
          <h3>Potential issues to check</h3>
          <p className="note">This is not a compliance certificate, an engineering sign-off, or legal advice.</p>
          <ul className="list">
            {(issues.length ? issues : ["Nothing in these answers stands out. A site assessment is still the way to confirm the finished barrier."]).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <Link className="btn" href="/quote/">Request a professional site assessment</Link>
        </div>
      )}
    </div>
  );
}
