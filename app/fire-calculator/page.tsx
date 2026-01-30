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
    const returnRate = 0.12

    while (corpus < fireNumber && years < 60) {
      corpus = corpus * (1 + returnRate) + annualSavings
      years++
    }

    const fireAge = currentAge + years

    setResult({
      fireAge,
      years,
      fireNumber: Math.round(fireNumber),
      corpus: Math.round(corpus)
    })
  }

  return (
    <main>
      <a href="/" style={{ color: "#aaa", textDecoration: "none" }}>
        ← Back
      </a>

      <h1 style={{ marginTop: "20px" }}>
        Middle-Class FIRE Calculator
      </h1>

      <p style={{ color: "#aaa", maxWidth: "500px" }}>
        Find out when you can become financially stress-free.
      </p>

      <div className="card" style={{ marginTop: "20px", maxWidth: "400px" }}>
        <input className="input" placeholder="Your Age" value={age} onChange={e => setAge(e.target.value)} />
        <input className="input" placeholder="Monthly Salary (₹)" value={salary} onChange={e => setSalary(e.target.value)} />
        <input className="input" placeholder="Monthly Savings (₹)" value={savings} onChange={e => setSavings(e.target.value)} />
        <input className="input" placeholder="Monthly Expense at FIRE (₹)" value={expense} onChange={e => setExpense(e.target.value)} />

        <button className="button-primary" onClick={calculate}>
          Calculate FIRE
        </button>
      </div>

      {result && (
        <div className="card" style={{ marginTop: "30px", maxWidth: "400px" }}>
          <h3>You can FIRE at age: {result.fireAge}</h3>
          <p>Years to go: {result.years}</p>
          <p>Required FIRE corpus: ₹{result.fireNumber}</p>
          <p>Expected corpus: ₹{result.corpus}</p>

          <p style={{ marginTop: "12px", color: "#aaa" }}>
            Assumes 12% annual returns and constant savings.
          </p>
        </div>
      )}
    </main>
  )
}
