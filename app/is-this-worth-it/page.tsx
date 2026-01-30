"use client"
import { useState } from "react"

export default function WorthItPage() {
  const [salary, setSalary] = useState("")
  const [price, setPrice] = useState("")
  const [hours, setHours] = useState<number | null>(null)

  function formatNumber(num: number) {
    return num.toLocaleString("en-IN")
  }

  function calculate() {
    const s = Number(salary)
    const p = Number(price)
    if (!s || !p) return

    const hourlyIncome = s / 160
    const neededHours = Math.round(p / hourlyIncome)
    setHours(neededHours)
  }

  return (
    <main style={{ padding: "80px 20px" }}>
      <a href="/" style={{ color: "#555", textDecoration: "none" }}>
        ← Back
      </a>

      <h1 style={{ marginTop: "20px" }}>Is This Worth It?</h1>

      <div style={card}>
        <input
          type="number"
          placeholder="Monthly Salary (₹)"
          value={salary}
          onChange={e => setSalary(e.target.value)}
          style={input}
        />

        <input
          type="number"
          placeholder="Price of Item (₹)"
          value={price}
          onChange={e => setPrice(e.target.value)}
          style={input}
        />

        <button onClick={calculate} style={primaryBtn}>
          Check Worth
        </button>
      </div>

      {hours && (
        <div style={{ ...card, marginTop: "30px" }}>
          <p>This purchase will cost you:</p>
          <h2>{formatNumber(hours)} hours of your life</h2>
          <p style={{ color: "#555" }}>
            (Assuming 160 working hours per month)
          </p>
        </div>
      )}
    </main>
  )
}

const card = {
  marginTop: "20px",
  padding: "20px",
  borderRadius: "12px",
  background: "white",
  boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
  maxWidth: "400px"
}

const input = {
  width: "100%",
  padding: "12px",
  marginBottom: "12px",
  borderRadius: "8px",
  border: "1px solid #ddd"
}

const primaryBtn = {
  width: "100%",
  padding: "12px",
  borderRadius: "8px",
  border: "none",
  background: "#111",
  color: "white",
  cursor: "pointer"
}
