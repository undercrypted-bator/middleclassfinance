"use client"
import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import { share } from "@/lib/share"

export default function FinanceDashboard() {
  const [salary, setSalary] = useState("")
  const [rent, setRent] = useState("")
  const [emi, setEmi] = useState("")
  const [expenses, setExpenses] = useState("")
  const [savings, setSavings] = useState("")
  const [age, setAge] = useState("")
  const [result, setResult] = useState<any>(null)
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (!data.user) window.location.href = "/login"
      else setUser(data.user)
    })
  }, [])

  async function calculate() {
    const s = Number(salary)
    const e = Number(emi)
    const sav = Number(savings)

    const savingsRate = Math.round((sav / s) * 100)
    const emiRate = Math.round((e / s) * 100)

    let verdict = "SAFE"
    if (savingsRate < 20 || emiRate > 40) verdict = "RISKY"
    if (savingsRate < 10 || emiRate > 50) verdict = "DELUSIONAL"

    await supabase.from("dashboard_history").insert({
      user_id: user.id,
      salary: s,
      rent,
      emi: e,
      expenses,
      savings: sav,
      age,
      verdict
    })

    setResult({ savingsRate, emiRate, verdict })
  }

  return (
    <main>
      <h1>Finance Dashboard</h1>

      <div className="card">
        <input className="input" placeholder="Age" value={age} onChange={e => setAge(e.target.value)} />
        <input className="input" placeholder="Salary" value={salary} onChange={e => setSalary(e.target.value)} />
        <input className="input" placeholder="Rent" value={rent} onChange={e => setRent(e.target.value)} />
        <input className="input" placeholder="EMI" value={emi} onChange={e => setEmi(e.target.value)} />
        <input className="input" placeholder="Expenses" value={expenses} onChange={e => setExpenses(e.target.value)} />
        <input className="input" placeholder="Savings" value={savings} onChange={e => setSavings(e.target.value)} />
        <button className="button-primary" onClick={calculate}>Analyze</button>
      </div>

      {result && (
        <div className="result-card">
          <h2>Verdict: {result.verdict}</h2>
          <p>Savings: {result.savingsRate}%</p>
          <p>EMI: {result.emiRate}%</p>

          <button
            className="button-secondary"
            onClick={() =>
              share(`My financial verdict is ${result.verdict} on MiddleClassFinance.`)
            }
          >
            Share this reality
          </button>
        </div>
      )}
    </main>
  )
}
