export const metadata = {
  title: "Is 30% EMI Safe? Real EMI Rule for Indian Salaries",
  description:
    "Is 30 percent of salary for EMI safe? Real Indian finance rule explained with examples and risks."
}

export default function Page() {
  return (
    <main style={{ maxWidth: "700px" }}>
      <h1>Is 30% EMI Safe?</h1>

      <p style={{ color: "#aaa" }}>
        Real money advice for real Indian salaries.
      </p>

      <p>
        One of the most common personal finance questions in India is:
        <strong> “Is 30 percent of salary for EMI safe?”</strong>
      </p>

      <p>
        Short answer: Yes, but only if the rest of your life is under control.
      </p>

      <h2>The 30% EMI Rule (Simple Explanation)</h2>

      <p>
        The 30% rule means your total monthly loan EMIs
        (home loan, car loan, personal loan, credit cards)
        should not exceed 30% of your monthly income.
      </p>

      <p>
        Example:
      </p>

      <ul>
        <li>Salary: ₹50,000</li>
        <li>Max safe EMI: ₹15,000</li>
      </ul>

      <h2>Why 30% is Considered Safe</h2>

      <ul>
        <li>You still have 70% for rent, food, savings and emergencies.</li>
        <li>Bank approvals are usually based on this ratio.</li>
        <li>You can survive income shocks.</li>
      </ul>

      <h2>When 30% EMI is NOT Safe</h2>

      <p>
        30% EMI becomes dangerous if:
      </p>

      <ul>
        <li>You live in a Tier-1 city with high rent.</li>
        <li>You have no emergency fund.</li>
        <li>You already save less than 15% of income.</li>
        <li>You have unstable job or freelancing income.</li>
      </ul>

      <h2>Realistic EMI Ranges (Indian Context)</h2>

      <ul>
        <li>Up to 25% → Comfortable</li>
        <li>25% – 40% → Stress zone</li>
        <li>Above 40% → Financial danger</li>
      </ul>

      <h2>Check Your EMI Stress</h2>

      <p>
        Instead of following generic rules,
        check your personal EMI reality here:
      </p>

      <a href="/emi-stress-test">
        <button className="button-primary">
          Check My EMI Stress
        </button>
      </a>

      <p style={{ marginTop: "40px", color: "#666", fontSize: "14px" }}>
        This article is based on real middle-class loan patterns in India,
        not bank marketing.
      </p>
    </main>
  )
}
