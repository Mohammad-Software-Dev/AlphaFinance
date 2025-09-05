// src/pages/AuthCallback.tsx
import { useEffect } from 'react';
import { handlePossibleOAuthCallback } from '../lib/authClient';

export default function AuthCallback() {
    useEffect(() => {
        handlePossibleOAuthCallback();
    }, []);
    return <div className="p-6">Finalizing sign-in…</div>;
}
