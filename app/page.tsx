"use client"
import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import Image from "next/image"

export default function Home() {
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user)
    })
  }, [])

  async function logout() {
    await supabase.auth.signOut()
    window.location.href = "/"
  }

  return (
    <main>
      {/* HERO SECTION */}
      <div className="hero-grid">
        <div>
          <h1 className="hero-title">
            MiddleClassFinance
          </h1>

          <p className="hero-sub">
            A personal finance system for Indian salaries.
          </p>

          <div className="hero-buttons">
            <a href="/finance-dashboard">
              <button className="button-primary">Get Started</button>
            </a>

            {!user ? (
              <a href="/login">
                <button className="button-secondary">Login</button>
              </a>
            ) : (
              <button className="button-secondary" onClick={logout}>
                Logout
              </button>
            )}
          </div>
        </div>

        <Image
          src="/hero.png"
          alt="MiddleClassFinance dashboard preview"
          width={1200}
          height={675}
          className="hero-image"
          priority
        />
      </div>

      {/* FEATURE SECTION */}
      <div className="feature-grid">
        <Image
          src="/saving.png"
          alt="Savings and finance tracking"
          width={800}
          height={600}
          className="feature-image"
        />

        <div>
          <h2>One Dashboard. Real Reality.</h2>
          <p className="feature-text">
            Track salary, rent, EMI, savings and lifestyle stress in one place.
            No fake motivation. Just real numbers.
          </p>
        </div>
      </div>

      {/* GUIDES SECTION */}
      <div style={{ marginTop: "120px" }}>
        <h2>Popular Money Guides</h2>

        <div style={{ marginTop: "20px" }}>
          <Image
            src="/guide.png"
            alt="Personal finance guides"
            width={1200}
            height={500}
            className="guide-image"
          />
        </div>

        <div className="guide-grid">
          <a href="/40k-salary-delhi" className="card">
            <h3>40k Salary in Delhi</h3>
            <p style={{ color: "#aaa" }}>
              Is it enough for a decent middle class life?
            </p>
          </a>

          <a href="/30-percent-emi-safe" className="card">
            <h3>Is 30% EMI Safe?</h3>
            <p style={{ color: "#aaa" }}>
              The real EMI rule banks won’t tell you.
            </p>
          </a>

          <a href="/middle-class-fire-india" className="card">
            <h3>FIRE for Middle Class</h3>
            <p style={{ color: "#aaa" }}>
              Can normal Indians really retire early?
            </p>
          </a>
        </div>
      </div>
    </main>
  )
}
