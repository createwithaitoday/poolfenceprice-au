"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { track } from "@/lib/analytics";
import { readUtm, submitLead, validEmail, validPhone } from "@/lib/lead";

export function ContactForm({ enquiryType = "contact", topic = "" }: { enquiryType?: "contact" | "photos" | "extension"; topic?: string }) {
  const router = useRouter();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [suburb, setSuburb] = useState("");
  const [message, setMessage] = useState(topic);
  const [files, setFiles] = useState<File[]>([]);
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);

  async function submit() {
    setError("");
    track("contact_form_started");
    if (name.trim().length < 2 || !validPhone(phone) || !validEmail(email)) {
      return setError("Add your name, a valid mobile and a valid email.");
    }
    if (files.some((f) => f.size > 8_000_000)) return setError("Each photo needs to be under 8 MB.");
    setSending(true);
    try {
      await submitLead({
        name, phone, email, suburb,
        projectType: enquiryType,
        fenceType: topic || "Not specified",
        approximateLength: "",
        gateRequirement: "",
        message,
        sourcePage: window.location.pathname,
        utm: readUtm(),
        preferredContact: "Call",
        enquiryType,
        details: { photos: String(files.length) },
      }, files);
      track("contact_form_completed");
      if (files.length) track("photo_upload");
      if (enquiryType === "extension") track("installation_enquiry");
      router.push("/thank-you/");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not send.");
      setSending(false);
    }
  }

  return (
    <div className="form-card">
      <label>Name<input value={name} onChange={(e) => setName(e.target.value)} /></label>
      <label>Mobile<input value={phone} onChange={(e) => setPhone(e.target.value)} inputMode="tel" /></label>
      <label>Email<input value={email} onChange={(e) => setEmail(e.target.value)} inputMode="email" /></label>
      <label>Suburb<input value={suburb} onChange={(e) => setSuburb(e.target.value)} /></label>
      <label>Message<textarea value={message} onChange={(e) => setMessage(e.target.value)} /></label>
      <label>Photos
        <input type="file" accept="image/*" capture="environment" multiple onChange={(e) => setFiles(Array.from(e.target.files || []).slice(0, 8))} />
      </label>
      {error && <p className="error" role="alert">{error}</p>}
      <button className="btn" type="button" disabled={sending} onClick={submit}>{sending ? "Sending…" : enquiryType === "photos" ? "Send photos" : "Send enquiry"}</button>
    </div>
  );
}
