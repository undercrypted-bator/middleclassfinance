"use client"
import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"

export default function FinanceDashboard() {
  const [salary, setSalary] = useState("")
  const [rent, setRent] = useState("")
  const [emi, setEmi] = useState("")
  const [expenses, setExpenses] = useState("")
  const [savings, setSavings] = useState("")
  const [age, setAge] = useState("")
  const [result, setResult] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  // 🔒 AUTH GUARD
  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (!data.user) {
        window.location.href = "/login"
      }
    })
  }, [])

  async function calculate() {
    const s = Number(salary)
    const r = Number(rent)
    const e = Number(emi)
    const ex = Number(expenses)
    const sav = Number(savings)
    const a = Number(age)

    if (!s || !a) {
      alert("Please fill required fields")
      return
    }

    setLoading(true)

    const totalSpend = r + e + ex
    const lifestylePercent = Math.round((totalSpend / s) * 100)

    let lifestyleStatus = ""
    if (lifestylePercent <= 60) lifestyleStatus = "Balanced 😌"
    else if (lifestylePercent <= 80) lifestyleStatus = "Stretching 😐"
    else lifestyleStatus = "Delusion 😵"

    const emiPercent = Math.round((e / s) * 100)
    let emiStatus = ""
    if (emiPercent <= 30) emiStatus = "Safe"
    else if (emiPercent <= 45) emiStatus = "Risky"
    else emiStatus = "Dangerous"

    const savingsRate = Math.round((sav / s) * 100)

    let verdict = "SAFE"
    if (emiStatus === "Dangerous" || lifestyleStatus.includes("Delusion")) {
      verdict = "DELUSIONAL"
    } else if (emiStatus === "Risky" || lifestyleStatus.includes("Stretching")) {
      verdict = "RISKY"
    }

    const { data: userData } = await supabase.auth.getUser()
    if (!userData.user) {
      alert("Please login first")
      setLoading(false)
      return
    }

    await supabase.from("dashboard_history").insert({
      user_id: userData.user.id,
      salary: s,
      rent: r,
      emi: e,
      expenses: ex,
      savings: sav,
      age: a,
      verdict
    })

    setResult({
      lifestyleStatus,
      lifestylePercent,
      emiStatus,
      emiPercent,
      savingsRate,
      verdict
    })

    setLoading(false)
  }

  return (
    <main>
      <a href="/" style={{ color: "#aaa", textDecoration: "none" }}>
        ← Back
      </a>

      <h1 style={{ marginTop: "20px" }}>
        Personal Finance Dashboard
      </h1>

      <p style={{ color: "#22c55e", fontSize: "14px" }}>
        Your complete financial reality in one place
      </p>

      <div className="card" style={{ marginTop: "20px", maxWidth: "450px" }}>
        <input className="input" type="number" placeholder="Your Age" value={age} onChange={e => setAge(e.target.value)} />
        <input className="input" type="number" placeholder="Monthly Salary (₹)" value={salary} onChange={e => setSalary(e.target.value)} />
        <input className="input" type="number" placeholder="Rent (₹)" value={rent} onChange={e => setRent(e.target.value)} />
        <input className="input" type="number" placeholder="EMI (₹)" value={emi} onChange={e => setEmi(e.target.value)} />
        <input className="input" type="number" placeholder="Other Monthly Expenses (₹)" value={expenses} onChange={e => setExpenses(e.target.value)} />
        <input className="input" type="number" placeholder="Monthly Savings (₹)" value={savings} onChange={e => setSavings(e.target.value)} />

        <button className="button-primary" onClick={calculate} disabled={loading}>
          {loading ? "Saving..." : "Analyze My Financial Life"}
        </button>
      </div>

      {result && (
        <div className="result-card" style={{ marginTop: "30px", maxWidth: "500px" }}>
          <h2>Overall Verdict: {result.verdict}</h2>
          <p>Lifestyle: {result.lifestyleStatus} ({result.lifestylePercent}% spend)</p>
          <p>EMI Stress: {result.emiStatus} ({result.emiPercent}%)</p>
          <p>Savings Rate: {result.savingsRate}%</p>

          <p style={{ marginTop: "12px", color: "#aaa" }}>
            This snapshot has been saved to your account.
          </p>
        </div>
      )}
    </main>
  )
}
