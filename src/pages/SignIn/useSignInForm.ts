import { useState } from "react"
import { useNavigate } from "react-router-dom"

export function useSignInForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [emailError, setEmailError] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const navigate = useNavigate()

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
    navigate("/dashboard")
    setIsSubmitting(false)
  }

  return {
    email,
    setEmail,
    password,
    setPassword,
    emailError,
    passwordError,
    isSubmitting,
    onSubmit,
  }
}
