import { BFF_BASE } from "./config";
import { getCookie } from "./cookies";

export async function ensureCsrf(): Promise<string | null> {
  try {
    await fetch(`${BFF_BASE}/oauth/me`, {
      credentials: "include",
      redirect: "follow",
    });
  } catch {
    // ignore
  }
  return getCookie("csrftoken");
}
