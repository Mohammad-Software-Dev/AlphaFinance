import { BFF_BASE } from "./config";
import { ensureCsrf } from "./csrf";
import { getCookie } from "./cookies";

async function withCsrf(method: string): Promise<Headers> {
  const h = new Headers({ Accept: "application/json" });
  if (method !== "GET" && method !== "HEAD") {
    const token = getCookie("csrftoken") || (await ensureCsrf()) || "";
    if (token) h.set("X-CSRFToken", token);
    h.set("Content-Type", "application/json");
  }
  return h;
}

async function request<T>(path: string, opts: RequestInit = {}): Promise<T> {
  const url = path.startsWith("http") ? path : `${BFF_BASE}${path}`;
  const method = (opts.method || "GET").toUpperCase();
  const headers = await withCsrf(method);

  const finalHeaders = new Headers(headers);
  if (opts.headers)
    new Headers(opts.headers).forEach((v, k) => finalHeaders.set(k, v));

  let res: Response;
  try {
    res = await fetch(url, {
      credentials: "include",
      redirect: "follow",
      ...opts,
      headers: finalHeaders,
    });
  } catch (e) {
    throw new Error(
      `Network error while ${method} ${url}: ${(e as Error).message}`
    );
  }

  // Refresh CSRF and retry once on 403
  if (res.status === 403) {
    await ensureCsrf();
    const retry = await fetch(url, {
      credentials: "include",
      redirect: "follow",
      ...opts,
      headers: await withCsrf(method),
    });
    if (!retry.ok) throw await httpError(retry, method, url);
    return (await safeJson<T>(retry))!;
  }

  if (res.status === 401) {
    // Optional: surface auth error distinctly (caller may redirect to login)
    throw await httpError(res, method, url, "Unauthorized (401)");
  }

  if (!res.ok) throw await httpError(res, method, url);
  return (await safeJson<T>(res))!;
}

async function safeJson<T>(res: Response): Promise<T | null> {
  const ct = res.headers.get("content-type") || "";
  if (res.status === 204) return null;
  if (!ct.includes("application/json")) return null;
  return (await res.json()) as T;
}

async function httpError(
  res: Response,
  method: string,
  url: string,
  prefix?: string
) {
  let detail = "";
  try {
    const text = await res.text();
    detail = text?.slice(0, 500) || "";
  } catch {
    //ignore
  }
  return new Error(
    `${prefix ?? "Request failed"}: ${method} ${url} -> ${res.status} ${
      res.statusText
    }${detail ? ` — ${detail}` : ""}`
  );
}

export const http = {
  get: <T>(p: string) => request<T>(p, { method: "GET" }),
  post: <T>(p: string, body?: unknown) =>
    request<T>(p, {
      method: "POST",
      body: body ? JSON.stringify(body) : undefined,
    }),
  put: <T>(p: string, body?: unknown) =>
    request<T>(p, {
      method: "PUT",
      body: body ? JSON.stringify(body) : undefined,
    }),
  patch: <T>(p: string, body?: unknown) =>
    request<T>(p, {
      method: "PATCH",
      body: body ? JSON.stringify(body) : undefined,
    }),
  delete: <T>(p: string) => request<T>(p, { method: "DELETE" }),
};
