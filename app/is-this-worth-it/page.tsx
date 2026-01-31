"use client"
import { useState } from "react"
import { share } from "@/lib/share"

export default function WorthIt() {
  const [salary, setSalary] = useState("")
  const [price, setPrice] = useState("")
  const [result, setResult] = useState<any>(null)

  function calculate() {
    const hourly = Number(salary) / (22 * 8)
    const hours = Math.round(Number(price) / hourly)
    setResult({ hours })
  }

  return (
    <main>
      <h1>Is This Worth It?</h1>

      <div className="card">
        <input className="input" placeholder="Monthly Salary" value={salary} onChange={e => setSalary(e.target.value)} />
        <input className="input" placeholder="Item Price" value={price} onChange={e => setPrice(e.target.value)} />
        <button className="button-primary" onClick={calculate}>Check</button>
      </div>

      {result && (
        <div className="result-card">
          <h2>{result.hours} hours of your life</h2>

          <button
            className="button-secondary"
            onClick={() =>
              share(`This purchase costs me ${result.hours} hours of my life.`)
            }
          >
            Share this reality
          </button>
        </div>
      )}
    </main>
  )
}
