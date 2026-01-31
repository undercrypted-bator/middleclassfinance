"use client"
import { useState } from "react"
import { share } from "@/lib/share"

export default function EMIStress() {
  const [salary, setSalary] = useState("")
  const [emi, setEmi] = useState("")
  const [result, setResult] = useState<any>(null)

  function calculate() {
    const percent = Math.round((Number(emi) / Number(salary)) * 100)
    let status = "Safe"
    if (percent > 40) status = "Risky"
    if (percent > 50) status = "Dangerous"
    setResult({ percent, status })
  }

  return (
    <main>
      <h1>EMI Stress Test</h1>

      <div className="card">
        <input className="input" placeholder="Salary" value={salary} onChange={e => setSalary(e.target.value)} />
        <input className="input" placeholder="EMI" value={emi} onChange={e => setEmi(e.target.value)} />
        <button className="button-primary" onClick={calculate}>Check</button>
      </div>

      {result && (
        <div className="result-card">
          <h2>{result.status}</h2>
          <p>{result.percent}% of salary</p>

          <button
            className="button-secondary"
            onClick={() =>
              share(`My EMI is ${result.percent}% of my salary. Status: ${result.status}.`)
            }
          >
            Share this reality
          </button>
        </div>
      )}
    </main>
  )
}
