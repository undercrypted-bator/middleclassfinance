"use client"
import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer
} from "recharts"

export default function HistoryPage() {
  const [history, setHistory] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [streak, setStreak] = useState(0)
  const [monthlyCount, setMonthlyCount] = useState(0)

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (!data.user) {
        window.location.href = "/login"
      } else {
        loadHistory(data.user.id)
      }
    })
  }, [])

  async function loadHistory(userId: string) {
    const { data } = await supabase
      .from("dashboard_history")
      .select("*")
      .eq("user_id", userId)
      .order("created_at", { ascending: false })

    const records = data || []
    setHistory(records)
    calculateStreak(records)
    calculateMonthly(records)
    setLoading(false)
  }

  function calculateStreak(records: any[]) {
    if (records.length === 0) return setStreak(0)

    let count = 1
    for (let i = 1; i < records.length; i++) {
      const prev = new Date(records[i - 1].created_at)
      const curr = new Date(records[i].created_at)

      const diff = (prev.getTime() - curr.getTime()) / (1000 * 60 * 60 * 24)

      if (diff <= 1.5) count++
      else break
    }

    setStreak(count)
  }

  function calculateMonthly(records: any[]) {
    const now = new Date()
    const thisMonth = records.filter(r => {
      const d = new Date(r.created_at)
      return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear()
    })
    setMonthlyCount(thisMonth.length)
  }

  const chartData = history
    .slice()
    .reverse()
    .map((h, i) => ({
      name: `#${i + 1}`,
      savingsRate: Math.round((h.savings / h.salary) * 100),
    }))

  return (
    <main>
      <a href="/" style={{ color: "#aaa", textDecoration: "none" }}>
        ← Back
      </a>

      <h1 style={{ marginTop: "20px" }}>My Financial Progress</h1>

      {!loading && (
        <div className="result-card" style={{ marginTop: "20px", maxWidth: "450px" }}>
          <h3>🔥 Your Streak</h3>
          <p><strong>{streak} days</strong> in a row</p>
          <p>This month: {monthlyCount} check-ins</p>
        </div>
      )}

      {loading && <p>Loading...</p>}

      {!loading && history.length > 0 && (
        <>
          <div className="result-card" style={{ marginTop: "30px" }}>
            <h3>Savings Rate Trend (%)</h3>

            <div style={{ width: "100%", height: 250 }}>
              <ResponsiveContainer>
                <LineChart data={chartData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="savingsRate"
                    stroke="#22c55e"
                    strokeWidth={3}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div style={{ marginTop: "30px", display: "grid", gap: "16px", maxWidth: "500px" }}>
            {history.map((item, i) => (
              <div key={i} className="result-card">
                <h3>Verdict: {item.verdict}</h3>
                <p>Salary: ₹{item.salary}</p>
                <p>Rent: ₹{item.rent}</p>
                <p>EMI: ₹{item.emi}</p>
                <p>Savings: ₹{item.savings}</p>
                <p style={{ color: "#aaa", fontSize: "12px" }}>
                  {new Date(item.created_at).toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        </>
      )}
    </main>
  )
}
