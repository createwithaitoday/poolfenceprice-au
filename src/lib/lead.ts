export type LeadPayload = {
  name: string;
  phone: string;
  email: string;
  suburb: string;
  projectType: string;
  fenceType: string;
  approximateLength: string;
  gateRequirement: string;
  message: string;
  sourcePage: string;
  utm: Record<string, string>;
  preferredContact: string;
  enquiryType: "installation" | "supply" | "photos" | "compliance" | "contact" | "extension";
  details: Record<string, string>;
};

export function readUtm(): Record<string, string> {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  const keys = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"];
  const utm: Record<string, string> = {};
  keys.forEach((k) => {
    const v = params.get(k);
    if (v) utm[k] = v;
  });
  return utm;
}

export async function submitLead(payload: LeadPayload, files: File[] = []) {
  const body = new FormData();
  body.append("payload", JSON.stringify({ ...payload, timestamp: new Date().toISOString() }));
  files.slice(0, 8).forEach((file) => body.append("photos", file, file.name));
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 25000);
  try {
    const res = await fetch("/lead.php", { method: "POST", body, signal: controller.signal });
    if (!res.ok) {
      const text = await res.text();
      throw new Error(text || "The enquiry could not be sent.");
    }
    return res.json() as Promise<{ ok: boolean }>;
  } catch (error) {
    if (error instanceof DOMException && error.name === "AbortError") {
      throw new Error("The request timed out. Call 0421 233 434 and we will take the details.");
    }
    throw error instanceof Error ? error : new Error("Network error. Check your connection and try again.");
  } finally {
    clearTimeout(timer);
  }
}

export function validEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function validPhone(value: string) {
  const digits = value.replace(/\D/g, "");
  return digits.length >= 8 && digits.length <= 15;
}
