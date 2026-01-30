"use client"
import { useState } from "react"

export default function LifestyleRealityCheck() {
  const [salary, setSalary] = useState("")
  const [rent, setRent] = useState("")
  const [emi, setEmi] = useState("")
  const [groceries, setGroceries] = useState("")
  const [transport, setTransport] = useState("")
  const [subs, setSubs] = useState("")
  const [result, setResult] = useState<any>(null)

  function calculate() {
    const s = Number(salary)
    const total =
      Number(rent) +
      Number(emi) +
      Number(groceries) +
      Number(transport) +
      Number(subs)

    if (!s || !total) return

    const savings = s - total
    const savingsPercent = Math.round((savings / s) * 100)

    let status = ""
    let message = ""

    if (savingsPercent >= 25) {
      status = "Balanced 😌"
      message = "You are living within your means. This lifestyle is sustainable."
    } else if (savingsPercent >= 10) {
      status = "Stretching 😐"
      message = "You are stretching your lifestyle. One emergency can hurt."
    } else {
      status = "Delusion 😵"
      message = "Your lifestyle is above your financial reality."
    }

    setResult({ total, savings, savingsPercent, status, message })
  }

  return (
    <main>
      <a href="/" style={{ color: "#aaa", textDecoration: "none" }}>
        ← Back
      </a>

      <h1 style={{ marginTop: "20px" }}>
        Lifestyle Reality Check
      </h1>

      <p style={{ color: "#aaa", maxWidth: "500px" }}>
        Check if your lifestyle matches your salary or you're living in delusion.
      </p>

      <div className="card" style={{ marginTop: "20px", maxWidth: "400px" }}>
        <input className="input" placeholder="Monthly Salary (₹)" value={salary} onChange={e => setSalary(e.target.value)} />
        <input className="input" placeholder="Rent (₹)" value={rent} onChange={e => setRent(e.target.value)} />
        <input className="input" placeholder="EMI (₹)" value={emi} onChange={e => setEmi(e.target.value)} />
        <input className="input" placeholder="Groceries (₹)" value={groceries} onChange={e => setGroceries(e.target.value)} />
        <input className="input" placeholder="Transport (₹)" value={transport} onChange={e => setTransport(e.target.value)} />
        <input className="input" placeholder="Subscriptions (₹)" value={subs} onChange={e => setSubs(e.target.value)} />

        <button className="button-primary" onClick={calculate}>
          Check Lifestyle
        </button>
      </div>

      {result && (
        <div className="card" style={{ marginTop: "30px", maxWidth: "400px" }}>
          <h3>Status: {result.status}</h3>
          <p>Total Monthly Spend: ₹{result.total}</p>
          <p>Monthly Savings: ₹{result.savings}</p>
          <p>Savings Rate: {result.savingsPercent}%</p>

          <p style={{ marginTop: "12px", color: "#aaa" }}>
            {result.message}
          </p>
        </div>
      )}
    </main>
  )
}
