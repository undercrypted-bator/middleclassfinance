"use client"
import { useState } from "react"

export default function EMIStressTest() {
  const [salary, setSalary] = useState("")
  const [emi, setEmi] = useState("")
  const [result, setResult] = useState<any>(null)

  function calculate() {
    const s = Number(salary)
    const e = Number(emi)
    if (!s || !e) return

    const percent = Math.round((e / s) * 100)

    let status = ""
    let message = ""

    if (percent <= 30) {
      status = "Safe 😌"
      message = "Your EMI is within safe limits. Financial stress is low."
    } else if (percent <= 45) {
      status = "Risky 😐"
      message = "Your EMI is high. One emergency can create pressure."
    } else {
      status = "Dangerous 😵"
      message = "Your EMI is too high. This lifestyle is not sustainable."
    }

    setResult({ percent, status, message })
  }

  return (
    <main>
      <a href="/" style={{ color: "#aaa", textDecoration: "none" }}>
        ← Back
      </a>

      <h1 style={{ marginTop: "20px" }}>
        EMI Stress Test
      </h1>

      <p style={{ color: "#22c55e", fontSize: "14px" }}>
        Real-time debt analysis
      </p>

      <div className="card" style={{ marginTop: "20px", maxWidth: "400px" }}>
        <input
          className="input"
          type="number"
          placeholder="Monthly Salary (₹)"
          value={salary}
          onChange={e => setSalary(e.target.value)}
        />

        <input
          className="input"
          type="number"
          placeholder="Monthly EMI (₹)"
          value={emi}
          onChange={e => setEmi(e.target.value)}
        />

        <button className="button-primary" onClick={calculate}>
          Check EMI Stress
        </button>
      </div>

      {result && (
        <div className="result-card" style={{ marginTop: "30px", maxWidth: "400px" }}>
          <h3>Status: {result.status}</h3>
          <p>Your EMI is <strong>{result.percent}%</strong> of your salary.</p>

          <p style={{ marginTop: "12px", color: "#aaa" }}>
            {result.message}
          </p>
        </div>
      )}
    </main>
  )
}
