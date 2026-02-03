"use client"
import { useState } from "react"
import { supabase } from "@/lib/supabase"
import { logEvent } from "@/lib/analytics"

export default function Page() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  async function login() {
    setLoading(true)

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password
    })

    if (error) {
      alert(error.message)
    } else {
      logEvent("login", "/login")
      window.location.href = "/finance-dashboard"
    }

    setLoading(false)
  }

  return (
    <main style={{ maxWidth: "400px" }}>
      <h1>Login</h1>

      <input
        className="input"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        className="input"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="button-primary" onClick={login} disabled={loading}>
        {loading ? "Logging in..." : "Login"}
      </button>
    </main>
  )
}
