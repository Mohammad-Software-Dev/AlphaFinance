// src/pages/SignIn/useSignInForm.ts
import { useState, useCallback } from "react";
import { beginLogin } from "../../lib/authClient"; // adjust path if your lib/ lives elsewhere

const emailRx = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

export function useSignInForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); // kept for UI parity; not sent
    const [emailError, setEmailError] = useState<string | null>(null);
    const [passwordError, setPasswordError] = useState<string | null>(null);
    const [generalError, setGeneralError] = useState<string | null>(null);

    const onSubmit = useCallback(
        (e: React.FormEvent) => {
            e.preventDefault();
            setGeneralError(null);
            setEmailError(null);
            setPasswordError(null);

            const trimmed = email.trim();
            if (!emailRx.test(trimmed)) {
                setEmailError("Enter a valid email address");
                return;
            }

            // Hint the IdP with the email if supported; force showing the login screen.
            beginLogin({ login_hint: trimmed, prompt: "login" });
        },
        [email]
    );

    return {
        email,
        setEmail,
        password,
        setPassword, // not used by OAuth; kept so your UI renders unchanged
        emailError,
        passwordError,
        onSubmit,
        generalError,
    };
}
