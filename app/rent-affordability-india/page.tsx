export const metadata = {
  title: "How Much Rent Can I Afford in India? Real Middle Class Rule",
  description:
    "How much rent should you pay in India based on salary? Realistic rent affordability rule for Indian cities."
}

export default function Page() {
  return (
    <main style={{ maxWidth: "700px" }}>
      <h1>How Much Rent Can I Afford in India?</h1>

      <p style={{ color: "#aaa" }}>
        Real money advice for real Indian salaries.
      </p>

      <p>
        One of the biggest financial mistakes Indians make is
        choosing rent emotionally instead of financially.
      </p>

      <p>
        The simple answer:
        <strong> Your rent should not exceed 30% of your monthly salary.</strong>
      </p>

      <h2>The 30% Rent Rule (Indian Context)</h2>

      <p>
        The 30% rule exists because after rent,
        you still need money for:
      </p>

      <ul>
        <li>Food and groceries</li>
        <li>Transport</li>
        <li>Savings</li>
        <li>Emergency fund</li>
        <li>Basic lifestyle</li>
      </ul>

      <h2>Rent Affordability Examples</h2>

      <ul>
        <li>Salary ₹30,000 → Max rent ₹9,000</li>
        <li>Salary ₹50,000 → Max rent ₹15,000</li>
        <li>Salary ₹80,000 → Max rent ₹24,000</li>
      </ul>

      <h2>When Paying More Than 30% Rent is Dangerous</h2>

      <p>
        Paying more than 30% rent becomes risky if:
      </p>

      <ul>
        <li>You live in a Tier-1 city (Delhi, Mumbai, Bangalore).</li>
        <li>You have EMIs.</li>
        <li>You have no savings.</li>
        <li>Your job is unstable.</li>
      </ul>

      <h2>Real Middle Class Advice</h2>

      <p>
        If you want financial peace,
        always compromise on:
        <strong> location and luxury, not savings.</strong>
      </p>

      <h2>Check Your Rent Reality</h2>

      <p>
        Instead of guessing,
        calculate your personal rent limit here:
      </p>

      <a href="/salary-reality-check">
        <button className="button-primary">
          Check My Rent Reality
        </button>
      </a>

      <p style={{ marginTop: "40px", color: "#666", fontSize: "14px" }}>
        This guide is written for Indian middle-class income levels,
        not influencer lifestyles.
      </p>
    </main>
  )
}
