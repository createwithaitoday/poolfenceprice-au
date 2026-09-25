"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { track } from "@/lib/analytics";
import { readUtm, submitLead, validEmail, validPhone } from "@/lib/lead";

const field = (label: string, value: string, set: (v: string) => void, options: string[]) => (
  <label key={label}>{label}
    <select value={value} onChange={(e) => set(e.target.value)}>
      <option value="">Select</option>
      {options.map((o) => <option key={o}>{o}</option>)}
    </select>
  </label>
);

export function KitBuilder() {
  const router = useRouter();
  const [style, setStyle] = useState("Black flat top");
  const [colour, setColour] = useState("Black");
  const [length, setLength] = useState("");
  const [corners, setCorners] = useState("");
  const [gate, setGate] = useState("Yes");
  const [gateQty, setGateQty] = useState("1");
  const [surface, setSurface] = useState("");
  const [who, setWho] = useState("DIY");
  const [where, setWhere] = useState("Sydney");
  const [delivery, setDelivery] = useState("Delivery");
  const [extras, setExtras] = useState<string[]>([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [suburb, setSuburb] = useState("");
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);

  const optional = ["Extra hinges", "Extra latches", "Posts and caps", "Brackets", "Glass spigots", "Extension panels"];

  function toggle(item: string) {
    setExtras((cur) => (cur.includes(item) ? cur.filter((i) => i !== item) : [...cur, item]));
  }

  async function submit() {
    setError("");
    if (!length || !corners || !surface) return setError("Add length, corners and the existing surface.");
    if (name.trim().length < 2 || !validPhone(phone) || !validEmail(email) || suburb.trim().length < 2) {
      return setError("Add your name, mobile, email and suburb.");
    }
    setSending(true);
    try {
      await submitLead({
        name, phone, email, suburb,
        projectType: "Supply-only kit",
        fenceType: `${style} / ${colour}`,
        approximateLength: length,
        gateRequirement: `${gate} × ${gateQty}`,
        message: `Surface ${surface}. ${who}. ${where}. ${delivery}. Extras: ${extras.join(", ") || "none"}.`,
        sourcePage: "/supply-only/kit-builder/",
        utm: readUtm(),
        preferredContact: "Email",
        enquiryType: "supply",
        details: { corners, surface, who, where, delivery, extras: extras.join(", ") },
      });
      track("supply_only_enquiry");
      track("kit_builder_completed");
      router.push("/thank-you/");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not send the kit request.");
      setSending(false);
    }
  }

  return (
    <div className="form-card">
      {field("Fence style", style, setStyle, ["Black flat top", "White flat top", "Aluminium", "Steel", "Glass", "Not sure"])}
      {field("Colour", colour, setColour, ["Black", "White", "Primrose", "Mill finish", "Monument", "Custom", "Not sure"])}
      <label>Approximate length<input value={length} onChange={(e) => setLength(e.target.value)} placeholder="e.g. 16 metres" /></label>
      {field("Number of corners", corners, setCorners, ["0", "1", "2", "3", "4", "5+"])}
      {field("Gate requirement", gate, setGate, ["Yes", "No", "Not sure"])}
      {field("Gate quantity", gateQty, setGateQty, ["0", "1", "2", "3+"])}
      {field("Existing surface", surface, setSurface, ["Soil", "Concrete", "Tiles", "Timber deck", "Retaining wall", "Mixed", "Not sure"])}
      {field("Who is installing?", who, setWho, ["DIY", "My installer", "Fencing Sydney"])}
      {field("Location", where, setWhere, ["Sydney", "Outside Sydney"])}
      {field("Delivery or pickup", delivery, setDelivery, ["Delivery", "Pickup", "Not sure"])}
      <fieldset style={{ border: 0, padding: 0 }}>
        <legend>Optional components</legend>
        {optional.map((item) => (
          <label key={item} className="choice">
            <input type="checkbox" checked={extras.includes(item)} onChange={() => toggle(item)} />
            {item}
          </label>
        ))}
      </fieldset>
      <label>Name<input value={name} onChange={(e) => setName(e.target.value)} /></label>
      <label>Mobile<input value={phone} onChange={(e) => setPhone(e.target.value)} inputMode="tel" /></label>
      <label>Email<input value={email} onChange={(e) => setEmail(e.target.value)} inputMode="email" /></label>
      <label>Suburb<input value={suburb} onChange={(e) => setSuburb(e.target.value)} /></label>
      {error && <p className="error" role="alert">{error}</p>}
      <button className="btn" type="button" disabled={sending} onClick={submit}>{sending ? "Sending…" : "Request my kit"}</button>
      <p className="note">No public price is shown. The request is a supply-only enquiry, not an online checkout.</p>
    </div>
  );
}
