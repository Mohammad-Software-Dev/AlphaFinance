export type LoginFlow = 'top-level' | 'spa-callback';

const trim = (s?: string) => (s ? s.replace(/\/+$/, '') : '');

export const SPA_ORIGIN =
    trim(import.meta.env.VITE_SPA_ORIGIN) || window.location.origin;

export const BFF_BASE = trim(import.meta.env.VITE_BFF_BASE) || '';

export const LOGIN_FLOW: LoginFlow =
    (import.meta.env.VITE_LOGIN_FLOW as LoginFlow) || 'top-level';

if (!BFF_BASE) {
    // Fail fast in dev if misconfigured
    // eslint-disable-next-line no-console
    console.warn('VITE_BFF_BASE is not set; API calls will fail.');
}
