export default function Home() {
  return (
    <main>
      <h1 style={{ fontSize: "52px", lineHeight: "1.1" }}>
        Real money advice <br />
        for <span style={{ color: "#22c55e" }}>real Indian salaries</span>
      </h1>

      <p style={{ marginTop: "20px", color: "#aaa", maxWidth: "600px" }}>
        Practical finance tools for middle-class people.
        No finfluencer gyaan. No fake motivation.
      </p>

      <div style={{ marginTop: "40px", display: "flex", gap: "16px", flexWrap: "wrap" }}>
        <a href="/salary-reality-check"><button className="button-primary">Salary Reality</button></a>
        <a href="/is-this-worth-it"><button className="button-secondary">Worth It?</button></a>
        <a href="/emi-stress-test"><button className="button-secondary">EMI Stress</button></a>
        <a href="/lifestyle-reality-check"><button className="button-secondary">Lifestyle</button></a>
        <a href="/savings-splitter"><button className="button-secondary">Savings Splitter</button></a>
        <a href="/fire-calculator"><button className="button-secondary">FIRE Calculator</button></a>
      </div>

      <div
        style={{
          marginTop: "80px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "20px"
        }}
      >
        <div className="card"><h3>Salary planning</h3><p style={{ color: "#aaa" }}>Know your real limits.</p></div>
        <div className="card"><h3>Spending reality</h3><p style={{ color: "#aaa" }}>Check before you buy.</p></div>
        <div className="card"><h3>Debt stress</h3><p style={{ color: "#aaa" }}>Avoid financial traps.</p></div>
        <div className="card"><h3>Lifestyle check</h3><p style={{ color: "#aaa" }}>Are you delusional?</p></div>
        <div className="card"><h3>Smart savings</h3><p style={{ color: "#aaa" }}>Invest with clarity.</p></div>
        <div className="card"><h3>Early freedom</h3><p style={{ color: "#aaa" }}>Plan your exit.</p></div>
      </div>
    </main>
  )
}
