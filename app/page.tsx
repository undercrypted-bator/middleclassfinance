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
      {/* HERO */}
      <section style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <h1>MiddleClassFinance</h1>

        <p style={{ color: "#aaa", maxWidth: "600px" }}>
          A practical personal finance toolkit for Indian middle-class salaries.
        </p>

        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <a href="/finance-dashboard">
            <button className="button-primary">Finance Dashboard</button>
          </a>

          {!user ? (
            <a href="/login">
              <button className="button-secondary">Login</button>
            </a>
          ) : (
            <button className="button-secondary" onClick={logout}>
              Logout
            </button>
          )}
        </div>
      </section>

      {/* TOOLS */}
      <section style={{ marginTop: "80px" }}>
        <h2>Tools</h2>

        <div
          style={{
            marginTop: "20px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "16px"
          }}
        >
          <a href="/salary-reality-check" className="card">
            Salary Reality Check
          </a>

          <a href="/emi-stress-test" className="card">
            EMI Stress Test
          </a>

          <a href="/savings-splitter" className="card">
            Savings Splitter
          </a>

          <a href="/lifestyle-reality-check" className="card">
            Lifestyle Reality Check
          </a>

          <a href="/fire-calculator" className="card">
            FIRE Calculator
          </a>

          <a href="/is-this-worth-it" className="card">
            Is This Worth It?
          </a>

          <a href="/emergency-fund" className="card">
            Emergency Fund Calculator
          </a>

          <a href="/net-worth" className="card">
            Net Worth Tracker
          </a>
        </div>
      </section>

      {/* GUIDES */}
      <section style={{ marginTop: "80px" }}>
        <h2>Money Guides</h2>

        <div
          style={{
            marginTop: "20px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px"
          }}
        >
          <a href="/40k-salary-delhi" className="card">
            <h3>40k Salary in Delhi</h3>
            <p style={{ color: "#aaa" }}>Is it enough for a decent life?</p>
          </a>

          <a href="/30-percent-emi-safe" className="card">
            <h3>Is 30% EMI Safe?</h3>
            <p style={{ color: "#aaa" }}>The real EMI rule.</p>
          </a>

          <a href="/rent-affordability-india" className="card">
            <h3>Rent Affordability</h3>
            <p style={{ color: "#aaa" }}>How much rent is safe?</p>
          </a>

          <a href="/middle-class-fire-india" className="card">
            <h3>FIRE for Middle Class</h3>
            <p style={{ color: "#aaa" }}>Can Indians retire early?</p>
          </a>

          <a href="/is-iphone-worth-it-india" className="card">
            <h3>Is iPhone Worth It?</h3>
            <p style={{ color: "#aaa" }}>Lifestyle trap?</p>
          </a>

          <a href="/emergency-fund-india" className="card">
            <h3>Emergency Fund for Indians</h3>
            <p style={{ color: "#aaa" }}>How much do you really need?</p>
          </a>

          <a href="/net-worth-middle-class" className="card">
            <h3>Net Worth of Middle Class</h3>
            <p style={{ color: "#aaa" }}>Reality check.</p>
          </a>

          <a href="/how-much-should-i-save-india" className="card">
            <h3>How Much Should I Save?</h3>
            <p style={{ color: "#aaa" }}>Realistic savings rule.</p>
          </a>
        </div>
      </section>
    </main>
  )
}
