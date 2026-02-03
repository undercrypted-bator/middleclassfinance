"use client"
import { useEffect } from "react"
import { logEvent } from "@/lib/analytics"

export default function Page() {
  useEffect(() => {
    logEvent("dashboard_open", "/finance-dashboard")
  }, [])

  return (
    <main>
      <h1>Finance Dashboard</h1>

      <p style={{ color: "#aaa" }}>
        Your personal financial overview.
      </p>

      {/* Your existing dashboard UI stays here */}
    </main>
  )
}
