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
    <main style={{ padding: "60px", fontFamily: "system-ui" }}>
      
      <a href="/" style={{ textDecoration: "none" }}>
        ← Back to Home
      </a>

      <h1 style={{ fontSize: "32px", marginTop: "20px" }}>
        Salary Reality Check
      </h1>

      <p style={{ marginTop: "10px" }}>
        Enter your monthly salary and city type.
      </p>

      <div style={{ marginTop: "20px" }}>
        <input
          type="number"
          placeholder="Monthly Salary (₹)"
          value={salary}
          onChange={e => setSalary(e.target.value)}
          style={{ padding: "10px", fontSize: "16px", width: "250px" }}
        />
      </div>

      <div style={{ marginTop: "20px" }}>
        <select
          value={city}
          onChange={e => setCity(e.target.value)}
          style={{ padding: "10px", fontSize: "16px" }}
        >
          <option value="tier1">Tier 1 (Delhi, Mumbai, Bangalore)</option>
          <option value="tier2">Tier 2 (Jaipur, Pune)</option>
          <option value="tier3">Tier 3 (Small towns)</option>
        </select>
      </div>

      <button
        onClick={calculate}
        style={{
          marginTop: "20px",
          padding: "12px 20px",
          fontSize: "16px",
          cursor: "pointer"
        }}
      >
        Check Reality
      </button>

      {result && (
        <div style={{ marginTop: "40px" }}>
          <h3>Results</h3>
          <p>Max Safe Rent: ₹{formatNumber(result.rent)}</p>
          <p>Max Safe EMI: ₹{formatNumber(result.emi)}</p>
          <p>Savings Target: ₹{formatNumber(result.savings)}</p>
          <p>Daily Expenses: ₹{formatNumber(result.daily)}</p>
          <p>Fun Money: ₹{formatNumber(result.fun)}</p>

          <p style={{ marginTop: "20px", fontWeight: "bold" }}>
            Reality Check:
          </p>
          <p>
            This salary allows a balanced lifestyle.
            EMIs above this will cause financial stress.
          </p>
        </div>
      )}

      <p style={{ marginTop: "60px", fontSize: "14px", color: "gray" }}>
        No data is saved. All calculations happen in your browser.
      </p>
    </main>
  )
}
