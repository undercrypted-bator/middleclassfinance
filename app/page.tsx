export default function Home() {
  return (
    <main style={{ padding: "60px", fontFamily: "system-ui" }}>
      <h1 style={{ fontSize: "40px" }}>
        MiddleClassFinance.in
      </h1>

      <p style={{ marginTop: "10px" }}>
        Real money advice for real Indian salaries.
      </p>

      <p style={{ marginTop: "10px", maxWidth: "500px" }}>
        Simple tools for people earning ₹15k–₹1L per month.
        No fluff. No finfluencer gyaan.
      </p>

      <a href="/salary-reality-check">
        <button
          style={{
            marginTop: "30px",
            padding: "12px 20px",
            fontSize: "16px",
            cursor: "pointer"
          }}
        >
          Salary Reality Check
        </button>
      </a>
    </main>
  )
}
