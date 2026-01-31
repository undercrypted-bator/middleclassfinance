"use client"
import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer
} from "recharts"

export default function HistoryPage() {
  const [history, setHistory] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

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
      .order("created_at", { ascending: true })

    setHistory(data || [])
    setLoading(false)
  }

  const chartData = history.map((h, i) => ({
    name: `#${i + 1}`,
    savingsRate: Math.round((h.savings / h.salary) * 100),
  }))

  return (
    <main>
      <a href="/" style={{ color: "#aaa", textDecoration: "none" }}>
        ← Back
      </a>

      <h1 style={{ marginTop: "20px" }}>My Financial Progress</h1>
      <p style={{ color: "#22c55e", fontSize: "14px" }}>
        Track your improvement over time
      </p>

      {loading && <p>Loading...</p>}

      {!loading && history.length === 0 && (
        <p style={{ color: "#aaa" }}>
          No history yet. Use the dashboard first.
        </p>
      )}

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
            {history.slice().reverse().map((item, i) => (
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
