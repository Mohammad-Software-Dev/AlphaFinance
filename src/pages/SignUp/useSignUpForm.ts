import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function useSignUpForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState<{
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
    phone?: string;
  }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  function validate(): boolean {
    const newErrors: typeof errors = {};
    let valid = true;

    if (firstName.trim() === "") {
      newErrors.firstName = "First name is required.";
      valid = false;
    }

    if (lastName.trim() === "") {
      newErrors.lastName = "Last name is required.";
      valid = false;
    }

    if (!email.includes("@")) {
      newErrors.email = "Please enter a valid email.";
      valid = false;
    }

    if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
      valid = false;
    }

    const phoneDigits = phone.replace(/\D/g, "");
    if (phoneDigits.length < 10) {
      newErrors.phone = "Please enter a valid phone number.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      navigate("/account-verification"); 
    }, 500);
  }

  return {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    password,
    setPassword,
    phone,
    setPhone,
    errors,
    isSubmitting,
    onSubmit,
  };
}
