"use client"
import { useState } from "react"

export default function FireCalculator() {
  const [age, setAge] = useState("")
  const [salary, setSalary] = useState("")
  const [savings, setSavings] = useState("")
  const [expense, setExpense] = useState("")
  const [result, setResult] = useState<any>(null)

  function calculate() {
    const currentAge = Number(age)
    const monthlySavings = Number(savings)
    const monthlyExpense = Number(expense)

    if (!currentAge || !monthlySavings || !monthlyExpense) return

    const annualExpense = monthlyExpense * 12
    const fireNumber = annualExpense * 25

    let corpus = 0
    let years = 0
    const annualSavings = monthlySavings * 12
    const returnRate = 0.12 // 12% assumption

    while (corpus < fireNumber && years < 60) {
      corpus = corpus * (1 + returnRate) + annualSavings
      years++
    }

    const fireAge = currentAge + years

    let verdict = ""
    let message = ""

    if (fireAge <= 40) {
      verdict = "Early FIRE 😎"
      message = "You are on a strong path. Financial freedom is realistically achievable."
    } else if (fireAge <= 50) {
      verdict = "Normal FIRE 🙂"
      message = "You can retire comfortably with consistent discipline."
    } else {
      verdict = "Late FIRE 😐"
      message = "You need to increase savings or reduce expenses to FIRE earlier."
    }

    setResult({
      fireAge,
      years,
      fireNumber: Math.round(fireNumber),
      corpus: Math.round(corpus),
      verdict,
      message
    })
  }

  function formatNumber(num: number) {
    return num.toLocaleString("en-IN")
  }

  return (
    <main>
      <a href="/" style={{ color: "#aaa", textDecoration: "none" }}>
        ← Back
      </a>

      <h1 style={{ marginTop: "20px" }}>
        Middle-Class FIRE Calculator
      </h1>

      <p style={{ color: "#22c55e", fontSize: "14px" }}>
        When can you become financially stress-free?
      </p>

      <div className="card" style={{ marginTop: "20px", maxWidth: "420px" }}>
        <input
          className="input"
          type="number"
          placeholder="Your Age"
          value={age}
          onChange={e => setAge(e.target.value)}
        />

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
          placeholder="Monthly Savings (₹)"
          value={savings}
          onChange={e => setSavings(e.target.value)}
        />

        <input
          className="input"
          type="number"
          placeholder="Monthly Expense at FIRE (₹)"
          value={expense}
          onChange={e => setExpense(e.target.value)}
        />

        <button className="button-primary" onClick={calculate}>
          Calculate My FIRE
        </button>
      </div>

      {result && (
        <div className="result-card" style={{ marginTop: "30px", maxWidth: "420px" }}>
          <h3>{result.verdict}</h3>

          <p>You can FIRE at age: <strong>{result.fireAge}</strong></p>
          <p>Years to go: {result.years}</p>
          <p>Required FIRE corpus: ₹{formatNumber(result.fireNumber)}</p>
          <p>Expected corpus: ₹{formatNumber(result.corpus)}</p>

          <p style={{ marginTop: "12px", color: "#aaa" }}>
            {result.message}
          </p>

          <p style={{ marginTop: "8px", fontSize: "12px", color: "#666" }}>
            Assumes 12% annual returns and constant savings.
          </p>
        </div>
      )}
    </main>
  )
}
