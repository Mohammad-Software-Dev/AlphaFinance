import { http } from './http';

/**
 * Ensure Django has issued the CSRF cookie for this origin.
 * Hitting `/oauth/me` is safe and you already annotate views to set CSRF cookies.
 * If your /oauth/me doesn't `@ensure_csrf_cookie`, add a tiny GET view that does.
 */
export async function ensureCsrf(): Promise<void> {
    try {
        await http.get<unknown>('/oauth/me'); // harmless bootstrap
    } catch {
        // Ignore; subsequent POSTs will fail loudly if CSRF is truly missing
    }
}
