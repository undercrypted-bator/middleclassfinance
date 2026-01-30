"use client"
import { useState } from "react"

export default function IsThisWorthIt() {
  const [salary, setSalary] = useState("")
  const [price, setPrice] = useState("")
  const [result, setResult] = useState<any>(null)

  function calculate() {
    const s = Number(salary)
    const p = Number(price)
    if (!s || !p) return

    const hourlyWage = s / (22 * 8) // approx working days * hours
    const hours = Math.round(p / hourlyWage)

    let verdict = ""
    let message = ""

    if (hours <= 20) {
      verdict = "Worth it 😌"
      message = "This purchase won’t hurt your financial life much."
    } else if (hours <= 60) {
      verdict = "Think twice 😐"
      message = "You’re spending a noticeable chunk of your life."
    } else {
      verdict = "Not worth it 😵"
      message = "This purchase costs too many hours of your life."
    }

    setResult({ hours, verdict, message })
  }

  return (
    <main>
      <a href="/" style={{ color: "#aaa", textDecoration: "none" }}>
        ← Back
      </a>

      <h1 style={{ marginTop: "20px" }}>
        Is This Worth It?
      </h1>

      <p style={{ color: "#22c55e", fontSize: "14px" }}>
        Convert money into life hours
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
          placeholder="Price of item (₹)"
          value={price}
          onChange={e => setPrice(e.target.value)}
        />

        <button className="button-primary" onClick={calculate}>
          Check Reality
        </button>
      </div>

      {result && (
        <div className="result-card" style={{ marginTop: "30px", maxWidth: "400px" }}>
          <h3>{result.verdict}</h3>
          <p>
            You will work approximately{" "}
            <strong>{result.hours} hours</strong> for this.
          </p>

          <p style={{ marginTop: "12px", color: "#aaa" }}>
            {result.message}
          </p>
        </div>
      )}
    </main>
  )
}
