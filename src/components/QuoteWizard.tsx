"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { track } from "@/lib/analytics";
import { readUtm, submitLead, validEmail, validPhone } from "@/lib/lead";

const steps = [
  "What do you need?",
  "What style?",
  "Roughly how much fencing?",
  "Where are you located?",
  "How should we contact you?",
  "Upload photos",
  "Preferred contact",
];

const needs = ["New pool fence", "Replace existing pool fence", "Pool gate", "Pool fence repair", "Boundary fence for pool", "Fence extension", "Not sure"];
const styles = ["Black flat top", "Aluminium", "Steel", "Glass", "Colorbond", "Other", "Not sure"];
const lengths = ["Under 10m", "10–20m", "20–30m", "30–50m", "50m+", "Not sure"];
const contacts = ["Call", "SMS", "Email"];

const storageKey = "pfp-quote";

export function QuoteWizard({ presetStyle = "", source = "/quote/" }: { presetStyle?: string; source?: string }) {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [need, setNeed] = useState("");
  const [style, setStyle] = useState(presetStyle);
  const [length, setLength] = useState("");
  const [suburb, setSuburb] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [preferred, setPreferred] = useState("Call");
  const [files, setFiles] = useState<File[]>([]);
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    if (!saved) return;
    try {
      const data = JSON.parse(saved) as Record<string, string>;
      setNeed(data.need || "");
      setStyle(data.style || presetStyle);
      setLength(data.length || "");
      setSuburb(data.suburb || "");
      setName(data.name || "");
      setPhone(data.phone || "");
      setEmail(data.email || "");
      setPreferred(data.preferred || "Call");
      setStep(Number(data.step || 0));
    } catch {
      localStorage.removeItem(storageKey);
    }
  }, [presetStyle]);

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify({ need, style, length, suburb, name, phone, email, preferred, step }));
  }, [need, style, length, suburb, name, phone, email, preferred, step]);

  const progress = useMemo(() => Math.round(((step + 1) / steps.length) * 100), [step]);

  function begin() {
    if (!started) {
      track("quote_started");
      track("installation_enquiry");
      setStarted(true);
    }
  }

  function next() {
    begin();
    setError("");
    if (step === 0 && !need) return setError("Choose the closest option. Not sure is fine.");
    if (step === 1 && !style) return setError("Choose a style, or Not sure.");
    if (step === 2 && !length) return setError("Choose a length range, or Not sure.");
    if (step === 3 && suburb.trim().length < 2) return setError("Enter a suburb or postcode.");
    if (step === 4) {
      if (name.trim().length < 2) return setError("Enter your name.");
      if (!validPhone(phone)) return setError("Enter a valid mobile number.");
      if (!validEmail(email)) return setError("Enter a valid email address.");
    }
    setStep((s) => Math.min(s + 1, steps.length - 1));
  }

  async function finish() {
    setError("");
    setSending(true);
    try {
      if (files.some((f) => f.size > 8_000_000)) {
        throw new Error("Each photo needs to be under 8 MB.");
      }
      await submitLead(
        {
          name, phone, email, suburb,
          projectType: need,
          fenceType: style,
          approximateLength: length,
          gateRequirement: need === "Pool gate" ? "Yes" : "See project type",
          message: `Preferred contact: ${preferred}`,
          sourcePage: source,
          utm: readUtm(),
          preferredContact: preferred,
          enquiryType: "installation",
          details: { photos: String(files.length) },
        },
        files,
      );
      localStorage.removeItem(storageKey);
      track("quote_completed");
      if (files.length) track("photo_upload");
      router.push("/thank-you/");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setSending(false);
    }
  }

  return (
    <div className="form-card" onFocus={begin}>
      <p className="kicker">Step {step + 1} of {steps.length}</p>
      <h2 style={{ fontSize: 32 }}>{steps[step]}</h2>
      <div className="progress" aria-hidden><span style={{ width: `${progress}%` }} /></div>
      {step === 0 && <Choices options={needs} value={need} onChange={setNeed} />}
      {step === 1 && <Choices options={styles} value={style} onChange={setStyle} />}
      {step === 2 && <Choices options={lengths} value={length} onChange={setLength} />}
      {step === 3 && (
        <label>Suburb or postcode
          <input value={suburb} onChange={(e) => setSuburb(e.target.value)} autoComplete="postal-code" />
        </label>
      )}
      {step === 4 && (
        <>
          <label>Name<input value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" /></label>
          <label>Mobile<input value={phone} onChange={(e) => setPhone(e.target.value)} inputMode="tel" autoComplete="tel" /></label>
          <label>Email<input value={email} onChange={(e) => setEmail(e.target.value)} inputMode="email" autoComplete="email" /></label>
        </>
      )}
      {step === 5 && (
        <>
          <p className="note">Optional. Camera or gallery, several photos is useful. Not sure what you need? Photos are often enough to start.</p>
          <label>Photos
            <input type="file" accept="image/*" capture="environment" multiple onChange={(e) => setFiles(Array.from(e.target.files || []).slice(0, 8))} />
          </label>
          {files.length > 0 && <p className="note">{files.length} photo{files.length > 1 ? "s" : ""} selected.</p>}
        </>
      )}
      {step === 6 && <Choices options={contacts} value={preferred} onChange={setPreferred} />}
      {error && <p className="error" role="alert">{error}</p>}
      <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
        {step > 0 && <button className="btn secondary" type="button" onClick={() => setStep((s) => s - 1)}>Back</button>}
        {step < 6 ? (
          <button className="btn" type="button" onClick={next}>Continue</button>
        ) : (
          <button className="btn" type="button" disabled={sending} onClick={finish}>
            {sending ? "Sending…" : "Request free pool fence quote"}
          </button>
        )}
      </div>
      <p className="note"><a href="/send-photos/">Not sure? Send us photos</a></p>
    </div>
  );
}

function Choices({ options, value, onChange }: { options: string[]; value: string; onChange: (v: string) => void }) {
  return (
    <div className="choices" role="radiogroup">
      {options.map((option) => (
        <label key={option} className={`choice${value === option ? " selected" : ""}`}>
          <input type="radio" name="choice" checked={value === option} onChange={() => onChange(option)} />
          {option}
        </label>
      ))}
    </div>
  );
}
