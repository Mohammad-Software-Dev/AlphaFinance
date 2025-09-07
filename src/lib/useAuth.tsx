import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ensureCsrf } from "./csrf";
import {
  beginLogin,
  getMe,
  handlePossibleOAuthCallback,
  refresh,
} from "./authClient";
import type { MeResponse } from "./authClient";

type AuthState = {
  authenticated: boolean;
  scope?: string;
  expires_in?: number;
  loading: boolean;
  login: () => void;
  logout: () => Promise<void>;
};

export function useAuth(): AuthState {
  const [me, setMe] = useState<MeResponse>({ authenticated: false });
  const [loading, setLoading] = useState(true);
  const refreshTimer = useRef<number | null>(null);

  const scheduleRefresh = useCallback((expiresIn?: number) => {
    if (refreshTimer.current) window.clearTimeout(refreshTimer.current);
    const ms = Math.max(60_000, Math.floor((expiresIn ?? 1200) * 600)); // ~60% of validity
    refreshTimer.current = window.setTimeout(async () => {
      try {
        await refresh();
      } finally {
        const m = await getMe();
        setMe(m);
        if (m.authenticated) scheduleRefresh(m.expires_in);
      }
    }, ms) as unknown as number;
  }, []);

  const bootstrap = useCallback(async () => {
    // Handle SPA callback and bail (navigation follows)
    if (handlePossibleOAuthCallback()) return;

    // Ensure CSRF cookie exists (no-op if already present)
    await ensureCsrf().catch(() => {});

    // Load session
    const m = await getMe();
    setMe(m);
    if (m.authenticated) scheduleRefresh(m.expires_in);
    setLoading(false);
  }, [scheduleRefresh]);

  useEffect(() => {
    bootstrap();
    return () => {
      if (refreshTimer.current) window.clearTimeout(refreshTimer.current);
    };
  }, [bootstrap]);

  const login = useCallback(() => beginLogin(), []);
  const logout = useCallback(async () => {
    const { logout } = await import("./authClient");
    await logout();
  }, []);

  return useMemo(
    () => ({
      authenticated: !!me.authenticated,
      scope: me.scope,
      expires_in: me.expires_in,
      loading,
      login,
      logout,
    }),
    [me, loading, login, logout]
  );
}
