"use client"
import { useState } from "react"
import { logEvent } from "@/lib/analytics"

export default function Page() {
  const [expenses, setExpenses] = useState("")
  const [savings, setSavings] = useState("")
  const [result, setResult] = useState<any>(null)

  function calculate() {
    const exp = Number(expenses)
    const sav = Number(savings)

    if (!exp || !sav || exp <= 0 || sav <= 0) {
      alert("Enter valid numbers")
      return
    }

    const fund3 = exp * 3
    const fund6 = exp * 6
    const fund12 = exp * 12

    const months3 = Math.ceil(fund3 / sav)
    const months6 = Math.ceil(fund6 / sav)
    const months12 = Math.ceil(fund12 / sav)

    setResult({
      fund3,
      fund6,
      fund12,
      months3,
      months6,
      months12
    })

    logEvent("emergency_fund_calculate", "/emergency-fund")
  }

  return (
    <main style={{ maxWidth: "600px" }}>
      <h1>Emergency Fund Calculator</h1>

      <p style={{ color: "#aaa" }}>
        Find out how much emergency fund you need and how long it will take to build.
      </p>

      <div style={{ marginTop: "20px" }}>
        <label>Monthly Expenses (₹)</label>
        <input
          className="input"
          value={expenses}
          onChange={(e) => setExpenses(e.target.value)}
          placeholder="e.g. 25000"
        />
      </div>

      <div style={{ marginTop: "20px" }}>
        <label>Monthly Savings (₹)</label>
        <input
          className="input"
          value={savings}
          onChange={(e) => setSavings(e.target.value)}
          placeholder="e.g. 8000"
        />
      </div>

      <button className="button-primary" onClick={calculate}>
        Calculate
      </button>

      {result && (
        <div className="result-card" style={{ marginTop: "30px" }}>
          <h2>Your Emergency Fund</h2>

          <p>3 months fund: ₹{result.fund3.toLocaleString("en-IN")}</p>
          <p>6 months fund: ₹{result.fund6.toLocaleString("en-IN")}</p>
          <p>12 months fund: ₹{result.fund12.toLocaleString("en-IN")}</p>

          <h3 style={{ marginTop: "20px" }}>Time to Build</h3>

          <p>3 months fund: {result.months3} months</p>
          <p>6 months fund: {result.months6} months</p>
          <p>12 months fund: {result.months12} months</p>
        </div>
      )}
    </main>
  )
}
