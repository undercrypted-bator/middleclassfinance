"use client"
import { useState } from "react"

export default function Page() {
  const [cash, setCash] = useState("")
  const [bank, setBank] = useState("")
  const [investments, setInvestments] = useState("")
  const [property, setProperty] = useState("")
  const [loans, setLoans] = useState("")
  const [result, setResult] = useState<number | null>(null)

  function calculate() {
    const c = Number(cash) || 0
    const b = Number(bank) || 0
    const i = Number(investments) || 0
    const p = Number(property) || 0
    const l = Number(loans) || 0

    const totalAssets = c + b + i + p
    const netWorth = totalAssets - l

    setResult(netWorth)
  }

  return (
    <main style={{ maxWidth: "600px" }}>
      <h1>Net Worth Tracker</h1>

      <p style={{ color: "#aaa" }}>
        Calculate your real net worth. Assets minus liabilities.
      </p>

      <h2 style={{ marginTop: "20px" }}>Assets</h2>

      <input
        className="input"
        placeholder="Cash (₹)"
        value={cash}
        onChange={(e) => setCash(e.target.value)}
      />

      <input
        className="input"
        placeholder="Bank Balance (₹)"
        value={bank}
        onChange={(e) => setBank(e.target.value)}
      />

      <input
        className="input"
        placeholder="Investments (₹)"
        value={investments}
        onChange={(e) => setInvestments(e.target.value)}
      />

      <input
        className="input"
        placeholder="Property Value (₹) (optional)"
        value={property}
        onChange={(e) => setProperty(e.target.value)}
      />

      <h2 style={{ marginTop: "20px" }}>Liabilities</h2>

      <input
        className="input"
        placeholder="Total Loans / Debt (₹)"
        value={loans}
        onChange={(e) => setLoans(e.target.value)}
      />

      <button className="button-primary" onClick={calculate}>
        Calculate Net Worth
      </button>

      {result !== null && (
        <div className="result-card" style={{ marginTop: "30px" }}>
          <h2>Your Net Worth</h2>

          <p style={{ fontSize: "20px", marginTop: "10px" }}>
            ₹{result.toLocaleString("en-IN")}
          </p>

          {result < 0 ? (
            <p style={{ color: "#f87171", marginTop: "10px" }}>
              Your liabilities are higher than your assets.
            </p>
          ) : (
            <p style={{ color: "#22c55e", marginTop: "10px" }}>
              You have positive net worth.
            </p>
          )}
        </div>
      )}
    </main>
  )
}
