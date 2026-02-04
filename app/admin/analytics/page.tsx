"use client"
import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"

export default function Page() {
  const [events, setEvents] = useState<any[]>([])
  const [counts, setCounts] = useState<any>({})

  useEffect(() => {
    fetchEvents()
  }, [])

  async function fetchEvents() {
    const { data } = await supabase
      .from("events")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(100)

    setEvents(data || [])

    const summary: any = {}
    data?.forEach((e) => {
      summary[e.event] = (summary[e.event] || 0) + 1
    })
    setCounts(summary)
  }

  return (
    <main style={{ maxWidth: "900px" }}>
      <h1>Internal Analytics</h1>

      <h2>Event Summary</h2>
      <ul>
        {Object.keys(counts).map((key) => (
          <li key={key}>
            {key}: {counts[key]}
          </li>
        ))}
      </ul>

      <h2 style={{ marginTop: "40px" }}>Latest Events</h2>

      <table style={{ width: "100%", marginTop: "10px", fontSize: "14px" }}>
        <thead>
          <tr>
            <th align="left">Time</th>
            <th align="left">Event</th>
            <th align="left">Page</th>
            <th align="left">User</th>
          </tr>
        </thead>
        <tbody>
          {events.map((e) => (
            <tr key={e.id}>
              <td>{new Date(e.created_at).toLocaleString()}</td>
              <td>{e.event}</td>
              <td>{e.page}</td>
              <td>{e.user_id || "guest"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  )
}
