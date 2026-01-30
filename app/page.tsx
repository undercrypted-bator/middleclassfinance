export default function Home() {
  return (
    <main>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1 style={{ fontSize: "52px", lineHeight: "1.1" }}>
          Real money advice <br />
          for <span style={{ color: "#22c55e" }}>real Indian salaries</span>
        </h1>

        <a href="/login">
          <button className="button-secondary">Login</button>
        </a>
      </div>

      <p style={{ marginTop: "20px", color: "#aaa", maxWidth: "600px" }}>
        Practical finance tools for middle-class people.
        No finfluencer gyaan. No fake motivation.
      </p>

      <div style={{ marginTop: "40px", display: "flex", gap: "16px", flexWrap: "wrap" }}>
        <a href="/finance-dashboard">
          <button className="button-primary">Finance Dashboard</button>
        </a>

        <a href="/salary-reality-check"><button className="button-secondary">Salary Reality</button></a>
        <a href="/is-this-worth-it"><button className="button-secondary">Worth It?</button></a>
        <a href="/emi-stress-test"><button className="button-secondary">EMI Stress</button></a>
        <a href="/lifestyle-reality-check"><button className="button-secondary">Lifestyle</button></a>
        <a href="/savings-splitter"><button className="button-secondary">Savings</button></a>
        <a href="/fire-calculator"><button className="button-secondary">FIRE</button></a>
      </div>

      <div
        style={{
          marginTop: "80px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "20px"
        }}
      >
        <div className="card"><h3>One dashboard</h3><p style={{ color: "#aaa" }}>Complete financial snapshot.</p></div>
        <div className="card"><h3>Spending reality</h3><p style={{ color: "#aaa" }}>Are you overspending?</p></div>
        <div className="card"><h3>Debt stress</h3><p style={{ color: "#aaa" }}>Loan safe or suicide?</p></div>
        <div className="card"><h3>Savings plan</h3><p style={{ color: "#aaa" }}>Where should money go?</p></div>
        <div className="card"><h3>Early freedom</h3><p style={{ color: "#aaa" }}>When can you relax?</p></div>
      </div>
    </main>
  )
}
