// src/pages/SignIn/useSignInForm.ts
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export function useSignInForm() {
  const navigate = useNavigate();

  const onSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    navigate("/dashboard");
  }, [navigate]);

  return { onSubmit };
}
