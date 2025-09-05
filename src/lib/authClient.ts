import { BFF_BASE, LOGIN_FLOW, SPA_ORIGIN } from './config';
import { http } from './http';

export type MeResponse = {
    authenticated: boolean;
    scope?: string;
    expires_in?: number; // seconds until next proactive refresh
};

/** Load current session status; safe to call on app start. */
export async function getMe(): Promise<MeResponse> {
    // BFF returns whether the user is authenticated and when access will expire
    // Keep this minimal so we never expose tokens in the browser
    const res = await http.get<MeResponse>('/oauth/me');
    return res || { authenticated: false };
}

/** Start login via a top-level navigation so cookies are preserved across domains. */
export function beginLogin(opts?: {
    login_hint?: string;
    prompt?: "login" | "consent" | "select_account";
}) {
    const url = new URL(`${BFF_BASE}/oauth/login`);
    if (opts?.login_hint) url.searchParams.set("login_hint", opts.login_hint);
    if (opts?.prompt) url.searchParams.set("prompt", opts.prompt);
    window.location.assign(url.toString());
}

/**
 * SPA callback helper for ?code=&state= in the URL
 * For `VITE_LOGIN_FLOW=spa-callback`, forward the code to the BFF which:
 *  - verifies DPoP (server-side),
 *  - exchanges the code at /oauth/token,
 *  - stores refresh token in the server session,
 *  - and bounces you back to the SPA.
 */
export function handlePossibleOAuthCallback(): boolean {
    if (LOGIN_FLOW !== 'spa-callback') return false;
    const u = new URL(window.location.href);
    const code = u.searchParams.get('code');
    const state = u.searchParams.get('state');
    if (!code || !state) return false;

    const bffCb = new URL(`${BFF_BASE}/oauth/callback`);
    bffCb.searchParams.set('code', code);
    bffCb.searchParams.set('state', state);
    window.location.replace(bffCb.toString());
    return true;
}

/** Ask the BFF to refresh access (CSRF-protected). Never touches tokens in the browser. */
export async function refresh(): Promise<void> {
    await http.post<{ ok: boolean }>('/oauth/refresh', {});
}

/** Logout through the BFF (revokes refresh token server-side) and return to SPA root. */
export async function logout(): Promise<void> {
    await http.post<{ ok: boolean }>('/oauth/logout', {});
    window.location.assign(SPA_ORIGIN);
}

/** (Optional) Password reset helpers if your BFF proxies them */
export async function passwordResetRequest(payload: { email: string }): Promise<{ ok: boolean }> {
    return await http.post('/oauth/auth/password/reset/request', payload);
}
export async function passwordResetConfirm(payload: {
    uid: string;
    token: string;
    new_password1: string;
    new_password2: string;
}): Promise<{ ok: boolean }> {
    return await http.post('/oauth/auth/password/reset/confirm', payload);
}
