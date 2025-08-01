import { useState } from "react"
import { useNavigate } from "react-router-dom"

export function useSignInForm() {
  const navigate = useNavigate()

  const [email, setEmail] = useState("info@alphaseed.ae")
  const [password, setPassword] = useState("1234Abcd")

  const [emailError, setEmailError] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [generalError, setGeneralError] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  function validate(): boolean {
    let valid = true
    if (!email.includes("@")) {
      setEmailError("Please enter a valid email.")
      valid = false
    } else {
      setEmailError("")
    }

    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters.")
      valid = false
    } else {
      setPasswordError("")
    }

    return valid
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return

    setIsSubmitting(true)

    // Check credentials
    if (email === "info@alphaseed.ae" && password === "1234Abcd") {
      setGeneralError("")
      navigate("/dashboard")
    } else {
      setGeneralError("Invalid credentials.")
    }

    setIsSubmitting(false)
  }

  return {
    email,
    setEmail,
    password,
    setPassword,
    emailError,
    passwordError,
    generalError,
    isSubmitting,
    onSubmit,
  }
}
