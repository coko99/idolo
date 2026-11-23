export const SITE_GATE_PASSWORD = "1706";
export const SITE_GATE_COOKIE = "idolo_ulaz";
export const SITE_GATE_TOKEN = "idolo-otvoreno-1706";

export function safeNextPath(value: string | null | undefined) {
  if (!value || !value.startsWith("/") || value.startsWith("//") || value.startsWith("/ulaz")) {
    return "/";
  }
  return value;
}
