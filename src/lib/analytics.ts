export type AnalyticsEvent =
  | "quote_started"
  | "quote_completed"
  | "phone_clicked"
  | "email_clicked"
  | "sms_clicked"
  | "supply_only_enquiry"
  | "installation_enquiry"
  | "photo_upload"
  | "compliance_checker_started"
  | "compliance_checker_completed"
  | "product_view"
  | "location_page_view"
  | "contact_form_started"
  | "contact_form_completed"
  | "kit_builder_completed";

export function track(event: AnalyticsEvent, params: Record<string, string | number | boolean> = {}) {
  if (typeof window === "undefined") return;
  const payload = { event, ...params, page: window.location.pathname };
  const w = window as Window & { dataLayer?: unknown[] };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push(payload);
}
