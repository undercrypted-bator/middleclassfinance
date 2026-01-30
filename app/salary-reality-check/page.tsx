"use client"
import { useState } from "react"

export default function SalaryPage() {
  const [salary, setSalary] = useState("")
  const [city, setCity] = useState("tier1")
  const [result, setResult] = useState<any>(null)

  function formatNumber(num: number) {
    return num.toLocaleString("en-IN")
  }

  function calculate() {
    const s = Number(salary)
    if (!s) return

    let multiplier = 1
    if (city === "tier2") multiplier = 0.85
    if (city === "tier3") multiplier = 0.7

    const rent = Math.round(s * 0.3 * multiplier)
    const emi = Math.round(s * 0.2)
    const savings = Math.round(s * 0.2)
    const daily = Math.round(s * 0.25 * multiplier)
    const fun = Math.round(s * 0.05)

    setResult({ rent, emi, savings, daily, fun })
  }

  return (
    <main>
      <a href="/" style={{ color: "#aaa", textDecoration: "none" }}>
        ← Back
      </a>

      <h1 style={{ marginTop: "20px" }}>
        Salary Reality Check
      </h1>

      <p style={{ color: "#22c55e", fontSize: "14px" }}>
        Real-time financial analysis
      </p>

      <div className="card" style={{ marginTop: "20px", maxWidth: "400px" }}>
        <input
          className="input"
          type="number"
          placeholder="Monthly Salary (₹)"
          value={salary}
          onChange={e => setSalary(e.target.value)}
        />

        <select
          className="input"
          value={city}
          onChange={e => setCity(e.target.value)}
        >
          <option value="tier1">Tier 1 (Delhi, Mumbai)</option>
          <option value="tier2">Tier 2 (Jaipur, Pune)</option>
          <option value="tier3">Tier 3 (Small town)</option>
        </select>

        <button className="button-primary" onClick={calculate}>
          Check Reality
        </button>
      </div>

      {result && (
        <div className="result-card" style={{ marginTop: "30px", maxWidth: "400px" }}>
          <h3>Financial Breakdown</h3>
          <p>Max Safe Rent: ₹{formatNumber(result.rent)}</p>
          <p>Max Safe EMI: ₹{formatNumber(result.emi)}</p>
          <p>Savings Target: ₹{formatNumber(result.savings)}</p>
          <p>Daily Expenses: ₹{formatNumber(result.daily)}</p>
          <p>Fun Money: ₹{formatNumber(result.fun)}</p>

          <p style={{ marginTop: "12px", color: "#aaa" }}>
            This is a realistic middle-class lifestyle.
          </p>
        </div>
      )}
    </main>
  )
}
