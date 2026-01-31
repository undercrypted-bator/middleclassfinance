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

  const [targetSavings, setTargetSavings] = useState(30)
  const [targetEmi, setTargetEmi] = useState(25)

  const [result, setResult] = useState<any>(null)
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (!data.user) {
        window.location.href = "/login"
      } else {
        setUser(data.user)
        loadGoals(data.user.id)
      }
    })
  }, [])

  async function loadGoals(userId: string) {
    const { data } = await supabase
      .from("user_goals")
      .select("*")
      .eq("user_id", userId)
      .single()

    if (data) {
      setTargetSavings(data.target_savings)
      setTargetEmi(data.target_emi)
    }
  }

  async function saveGoals() {
    await supabase.from("user_goals").upsert({
      user_id: user.id,
      target_savings: targetSavings,
      target_emi: targetEmi
    })
    alert("Goals saved")
  }

  async function calculate() {
    const s = Number(salary)
    const r = Number(rent)
    const e = Number(emi)
    const ex = Number(expenses)
    const sav = Number(savings)
    const a = Number(age)

    if (!s || !a) return

    const savingsRate = Math.round((sav / s) * 100)
    const emiRate = Math.round((e / s) * 100)

    await supabase.from("dashboard_history").insert({
      user_id: user.id,
      salary: s,
      rent: r,
      emi: e,
      expenses: ex,
      savings: sav,
      age: a,
      verdict: savingsRate >= targetSavings && emiRate <= targetEmi ? "ON TRACK" : "OFF TRACK"
    })

    setResult({ savingsRate, emiRate })
  }

  return (
    <main>
      <h1>Personal Finance Dashboard</h1>

      <div className="card" style={{ maxWidth: "450px" }}>
        <input className="input" placeholder="Age" value={age} onChange={e => setAge(e.target.value)} />
        <input className="input" placeholder="Salary" value={salary} onChange={e => setSalary(e.target.value)} />
        <input className="input" placeholder="Rent" value={rent} onChange={e => setRent(e.target.value)} />
        <input className="input" placeholder="EMI" value={emi} onChange={e => setEmi(e.target.value)} />
        <input className="input" placeholder="Expenses" value={expenses} onChange={e => setExpenses(e.target.value)} />
        <input className="input" placeholder="Savings" value={savings} onChange={e => setSavings(e.target.value)} />

        <button className="button-primary" onClick={calculate}>
          Analyze My Financial Life
        </button>
      </div>

      <div className="result-card" style={{ marginTop: "30px", maxWidth: "450px" }}>
        <h3>Your Goals</h3>

        <p>Target Savings Rate (%)</p>
        <input className="input" type="number" value={targetSavings} onChange={e => setTargetSavings(Number(e.target.value))} />

        <p>Target EMI (%)</p>
        <input className="input" type="number" value={targetEmi} onChange={e => setTargetEmi(Number(e.target.value))} />

        <button className="button-secondary" onClick={saveGoals}>
          Save Goals
        </button>
      </div>

      {result && (
        <div className="result-card" style={{ marginTop: "20px", maxWidth: "450px" }}>
          <h3>Progress</h3>

          <p>Savings: {result.savingsRate}% / {targetSavings}%</p>
          <progress value={result.savingsRate} max={targetSavings}></progress>

          <p>EMI: {result.emiRate}% / {targetEmi}%</p>
          <progress value={targetEmi - result.emiRate} max={targetEmi}></progress>

          <p style={{ marginTop: "10px", color: "#aaa" }}>
            {result.savingsRate >= targetSavings && result.emiRate <= targetEmi
              ? "You are on track. Keep going."
              : "You are off track. Adjust your lifestyle."}
          </p>
        </div>
      )}
    </main>
  )
}
