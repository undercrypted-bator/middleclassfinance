"use client"
import { useState } from "react"
import { share } from "@/lib/share"

export default function Fire() {
  const [age, setAge] = useState("")
  const [savings, setSavings] = useState("")
  const [expense, setExpense] = useState("")
  const [result, setResult] = useState<any>(null)

  function calculate() {
    const fireNumber = Number(expense) * 12 * 25
    const years = Math.round(fireNumber / (Number(savings) * 12))
    setResult({ fireAge: Number(age) + years })
  }

  return (
    <main>
      <h1>FIRE Calculator</h1>

      <div className="card">
        <input className="input" placeholder="Age" value={age} onChange={e => setAge(e.target.value)} />
        <input className="input" placeholder="Monthly Savings" value={savings} onChange={e => setSavings(e.target.value)} />
        <input className="input" placeholder="Monthly Expense at FIRE" value={expense} onChange={e => setExpense(e.target.value)} />
        <button className="button-primary" onClick={calculate}>Calculate</button>
      </div>

      {result && (
        <div className="result-card">
          <h2>You can FIRE at {result.fireAge}</h2>

          <button
            className="button-secondary"
            onClick={() =>
              share(`I can become financially free at age ${result.fireAge}.`)
            }
          >
            Share this reality
          </button>
        </div>
      )}
    </main>
  )
}
