"use client"
import { supabase } from "@/lib/supabase"
import { useState } from "react"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  async function signIn() {
    setLoading(true)
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    setLoading(false)

    if (error) {
      alert(error.message)
    } else {
      window.location.href = "/finance-dashboard"
    }
  }

  async function signUp() {
    setLoading(true)
    const { error } = await supabase.auth.signUp({
      email,
      password,
    })
    setLoading(false)

    if (error) {
      alert(error.message)
    } else {
      alert("Account created. Now login.")
    }
  }

  return (
    <main>
      <h1>Login / Signup</h1>

      <p style={{ color: "#aaa" }}>
        Create an account to save your financial history.
      </p>

      <div className="card" style={{ maxWidth: "400px", marginTop: "20px" }}>
        <input
          className="input"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <input
          className="input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <button className="button-primary" onClick={signIn} disabled={loading}>
          {loading ? "Loading..." : "Login"}
        </button>

        <button className="button-secondary" onClick={signUp} disabled={loading}>
          Create Account
        </button>
      </div>
    </main>
  )
}
