"use client"
import { useState } from "react"

export default function SavingsSplitter() {
  const [salary, setSalary] = useState("")
  const [age, setAge] = useState("")
  const [risk, setRisk] = useState("medium")
  const [result, setResult] = useState<any>(null)

  function calculate() {
    const s = Number(salary)
    if (!s) return

    const savings = Math.round(s * 0.3)

    let equityPercent = 50
    let debtPercent = 50

    if (risk === "low") {
      equityPercent = 30
      debtPercent = 70
    } else if (risk === "high") {
      equityPercent = 70
      debtPercent = 30
    }

    const emergency = Math.round(savings * 0.2)
    const equity = Math.round(savings * (equityPercent / 100))
    const debt = Math.round(savings * (debtPercent / 100))
    const fun = Math.round(savings * 0.1)

    setResult({
      savings,
      emergency,
      equity,
      debt,
      fun,
      equityPercent,
      debtPercent
    })
  }

  return (
    <main>
      <a href="/" style={{ color: "#aaa", textDecoration: "none" }}>
        ← Back
      </a>

      <h1 style={{ marginTop: "20px" }}>
        Savings Splitter
      </h1>

      <p style={{ color: "#aaa", maxWidth: "500px" }}>
        Get a simple plan to split your salary into emergency, investment and fun.
      </p>

      <div className="card" style={{ marginTop: "20px", maxWidth: "400px" }}>
        <input className="input" placeholder="Monthly Salary (₹)" value={salary} onChange={e => setSalary(e.target.value)} />
        <input className="input" placeholder="Your Age" value={age} onChange={e => setAge(e.target.value)} />

        <select className="input" value={risk} onChange={e => setRisk(e.target.value)}>
          <option value="low">Low Risk</option>
          <option value="medium">Medium Risk</option>
          <option value="high">High Risk</option>
        </select>

        <button className="button-primary" onClick={calculate}>
          Split My Savings
        </button>
      </div>

      {result && (
        <div className="card" style={{ marginTop: "30px", maxWidth: "400px" }}>
          <h3>Monthly Savings: ₹{result.savings}</h3>

          <p>Emergency Fund: ₹{result.emergency}</p>
          <p>Equity Investment: ₹{result.equity}</p>
          <p>Debt / FD: ₹{result.debt}</p>
          <p>Guilt-Free Fun: ₹{result.fun}</p>

          <p style={{ marginTop: "12px", color: "#aaa" }}>
            Equity: {result.equityPercent}% | Debt: {result.debtPercent}%
          </p>
        </div>
      )}
    </main>
  )
}
