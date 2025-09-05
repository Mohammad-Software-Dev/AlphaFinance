export const BFF_BASE = (import.meta.env.VITE_BFF_BASE as string).replace(/\/$/, '')
export const SPA_ORIGIN = (import.meta.env.VITE_SPA_ORIGIN as string).replace(/\/$/, '')
export type LoginFlow = 'bff-redirect' | 'spa-callback'
export const LOGIN_FLOW: LoginFlow = (import.meta.env.VITE_LOGIN_FLOW as LoginFlow) ?? 'spa-callback'
