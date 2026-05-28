"use client";

type MetricEvent =
  | "newsletter_submit_started"
  | "newsletter_submit_success"
  | "newsletter_submit_error"
  | "search_query_changed";

type MetricPayload = Record<string, string | number | boolean>;

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export function trackEvent(event: MetricEvent, payload: MetricPayload = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ event, ...payload });
}
