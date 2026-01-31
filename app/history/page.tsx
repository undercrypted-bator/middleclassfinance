"use client"
import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"

export default function HistoryPage() {
  const [history, setHistory] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  // 🔒 AUTH GUARD
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
      .limit(10)

    setHistory(data || [])
    setLoading(false)
  }

  return (
    <main>
      <a href="/" style={{ color: "#aaa", textDecoration: "none" }}>
        ← Back
      </a>

      <h1 style={{ marginTop: "20px" }}>My Financial History</h1>
      <p style={{ color: "#22c55e", fontSize: "14px" }}>
        Your last 10 financial snapshots
      </p>

      {loading && <p>Loading...</p>}

      {!loading && history.length === 0 && (
        <p style={{ color: "#aaa" }}>No history yet. Use the dashboard first.</p>
      )}

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
    </main>
  )
}
