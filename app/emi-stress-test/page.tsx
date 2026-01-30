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
      status = "Safe"
      message = "Your EMI is within a safe limit."
    } else if (percent <= 45) {
      status = "Risky"
      message = "Your EMI is high. Monthly pressure likely."
    } else {
      status = "Dangerous"
      message = "Your EMI is too high. Financial stress ahead."
    }

    setResult({ percent, status, message })
  }

  return (
    <main style={{ padding: "80px 20px" }}>
      <a href="/" style={{ color: "#555", textDecoration: "none" }}>
        ← Back
      </a>

      <h1 style={{ marginTop: "20px" }}>EMI Stress Test</h1>

      <div style={card}>
        <input
          type="number"
          placeholder="Monthly Salary (₹)"
          value={salary}
          onChange={e => setSalary(e.target.value)}
          style={input}
        />

        <input
          type="number"
          placeholder="Monthly EMI (₹)"
          value={emi}
          onChange={e => setEmi(e.target.value)}
          style={input}
        />

        <button onClick={calculate} style={primaryBtn}>
          Check EMI Stress
        </button>
      </div>

      {result && (
        <div style={{ ...card, marginTop: "30px" }}>
          <p>Your EMI is {result.percent}% of salary</p>
          <h2>Status: {result.status}</h2>
          <p style={{ color: "#555" }}>{result.message}</p>
        </div>
      )}
    </main>
  )
}

const card = {
  marginTop: "20px",
  padding: "20px",
  borderRadius: "12px",
  background: "white",
  boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
  maxWidth: "400px"
}

const input = {
  width: "100%",
  padding: "12px",
  marginBottom: "12px",
  borderRadius: "8px",
  border: "1px solid #ddd"
}

const primaryBtn = {
  width: "100%",
  padding: "12px",
  borderRadius: "8px",
  border: "none",
  background: "#111",
  color: "white",
  cursor: "pointer"
}
