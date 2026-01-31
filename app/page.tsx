"use client"
import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"

export default function Home() {
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user)
    })
  }, [])

  async function logout() {
    await supabase.auth.signOut()
    window.location.href = "/"
  }

  return (
    <main>
      {/* HEADER */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1 style={{ fontSize: "52px", lineHeight: "1.1" }}>
          Real money advice <br />
          for <span style={{ color: "#22c55e" }}>real Indian salaries</span>
        </h1>

        {!user ? (
          <a href="/login">
            <button className="button-secondary">Login</button>
          </a>
        ) : (
          <div style={{ display: "flex", gap: "10px" }}>
            <a href="/history">
              <button className="button-secondary">My Account</button>
            </a>
            <button className="button-secondary" onClick={logout}>
              Logout
            </button>
          </div>
        )}
      </div>

      <p style={{ marginTop: "20px", color: "#aaa", maxWidth: "600px" }}>
        You’re not a finfluencer.  
        You’re the bhai who explains money without bakchodi.
      </p>

      {/* TOOLS */}
      <div style={{ marginTop: "40px", display: "flex", gap: "16px", flexWrap: "wrap" }}>
        <a href="/finance-dashboard">
          <button className="button-primary">Finance Dashboard</button>
        </a>

        <a href="/salary-reality-check"><button className="button-secondary">Salary Reality</button></a>
        <a href="/is-this-worth-it"><button className="button-secondary">Worth It?</button></a>
        <a href="/emi-stress-test"><button className="button-secondary">EMI Stress</button></a>
        <a href="/lifestyle-reality-check"><button className="button-secondary">Lifestyle</button></a>
        <a href="/savings-splitter"><button className="button-secondary">Savings</button></a>
        <a href="/fire-calculator"><button className="button-secondary">FIRE</button></a>
      </div>

      {/* GUIDES SECTION */}
      <div style={{ marginTop: "80px" }}>
        <h2>Popular Money Guides</h2>
        <p style={{ color: "#aaa" }}>
          Honest answers to questions every middle-class Indian Googles.
        </p>

        <div
          style={{
            marginTop: "20px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "20px"
          }}
        >
          <a href="/40k-salary-delhi" className="card">
            <h3>40k Salary in Delhi</h3>
            <p style={{ color: "#aaa" }}>
              Is it enough for a decent middle class life?
            </p>
          </a>

          <a href="/30-percent-emi-safe" className="card">
            <h3>Is 30% EMI Safe?</h3>
            <p style={{ color: "#aaa" }}>
              The real EMI rule banks won’t tell you.
            </p>
          </a>

          <a href="/rent-affordability-india" className="card">
            <h3>Rent Affordability</h3>
            <p style={{ color: "#aaa" }}>
              How much rent should you actually pay?
            </p>
          </a>

          <a href="/middle-class-fire-india" className="card">
            <h3>FIRE for Middle Class</h3>
            <p style={{ color: "#aaa" }}>
              Can normal Indians really retire early?
            </p>
          </a>

          <a href="/is-iphone-worth-it-india" className="card">
            <h3>Is iPhone Worth It?</h3>
            <p style={{ color: "#aaa" }}>
              Or just a ₹1 lakh lifestyle trap?
            </p>
          </a>
        </div>
      </div>
    </main>
  )
}
