import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { ensureCsrf } from '../lib/csrf'
import { beginLogin, getMe, handlePossibleOAuthCallback, refresh } from '../lib/authClient'
import type { MeResponse } from '../types'

type AuthState = {
    authenticated: boolean
    scope?: string
    expires_in?: number
    loading: boolean
    login: () => void
    logout: () => Promise<void>
}

export function useAuth(): AuthState {
    const [me, setMe] = useState<MeResponse>({ authenticated: false })
    const [loading, setLoading] = useState(true)
    const refreshTimer = useRef<number | null>(null)

    const scheduleRefresh = useCallback((expiresIn?: number) => {
        if (refreshTimer.current) window.clearTimeout(refreshTimer.current)
        // Proactive refresh ~60% of the advertised validity; fallback to 10min if unknown
        const ms = Math.max(60_000, Math.floor((expiresIn ?? 1200) * 600)) // 60% * 1000
        refreshTimer.current = window.setTimeout(async () => {
            try {
                await refresh()
                const m = await getMe()
                setMe(m)
                scheduleRefresh(m.authenticated ? m.expires_in : undefined)
            } catch {
                // If refresh fails, we'll naturally see authenticated=false on next /me
                const m = await getMe()
                setMe(m)
            }
        }, ms) as unknown as number
    }, [])

    const bootstrap = useCallback(async () => {
        // 1) Handle OAuth callback if present (spa-callback flow)
        if (handlePossibleOAuthCallback()) return

        // 2) Ensure CSRF cookie early to avoid a race on first POST
        await ensureCsrf().catch(() => void 0)

        // 3) Load session
        const m = await getMe()
        setMe(m)
        scheduleRefresh(m.authenticated ? m.expires_in : undefined)
        setLoading(false)
    }, [scheduleRefresh])

    useEffect(() => {
        bootstrap()
        return () => {
            if (refreshTimer.current) window.clearTimeout(refreshTimer.current)
        }
    }, [bootstrap])

    const login = useCallback(() => beginLogin(), [])
    const logout = useCallback(async () => {
        const { logout } = await import('../lib/authClient')
        await logout()
    }, [])

    return useMemo(
        () => ({
            authenticated: !!(me as any).authenticated,
            scope: (me as any).scope,
            expires_in: (me as any).expires_in,
            loading,
            login,
            logout,
        }),
        [me, loading, login, logout],
    )
}


export function beginLogin(opts?: {
    login_hint?: string;
    prompt?: "login" | "consent" | "select_account";
}) {
    const url = new URL(`${BFF_BASE}/oauth/login`);
    if (opts?.login_hint) url.searchParams.set("login_hint", opts.login_hint);
    if (opts?.prompt) url.searchParams.set("prompt", opts.prompt);
    window.location.assign(url.toString());
}