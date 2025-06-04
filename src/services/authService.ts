export interface User {
  id: string
  name: string
}

export async function signIn(email: string, password: string): Promise<User> {
  const response = await fetch("/api/auth/signin", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  })
  if (!response.ok) {
    throw new Error("Invalid credentials")
  }
  return response.json()
}
