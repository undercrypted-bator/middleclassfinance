export const metadata = {
  title: "Net Worth of Middle Class Indian – Reality Check",
  description:
    "What is the net worth of a middle class Indian? Realistic breakdown and how to calculate your own net worth."
}

export default function Page() {
  return (
    <main style={{ maxWidth: "700px" }}>
      <h1>Net Worth of Middle Class Indian</h1>

      <p style={{ color: "#aaa" }}>
        A realistic look at middle class wealth in India.
      </p>

      <p>
        Net worth is the most honest indicator of your financial health.
        It shows what you actually own after subtracting what you owe.
      </p>

      <h2>What is Net Worth?</h2>

      <p>
        Net worth = Total Assets – Total Liabilities
      </p>

      <p>
        Assets include:
      </p>

      <ul>
        <li>Cash and bank balance</li>
        <li>Investments</li>
        <li>Property</li>
        <li>Gold</li>
      </ul>

      <p>
        Liabilities include:
      </p>

      <ul>
        <li>Home loan</li>
        <li>Personal loans</li>
        <li>Credit card debt</li>
      </ul>

      <h2>Average Net Worth of Middle Class Indians</h2>

      <p>
        There is no official number, but realistic estimates:
      </p>

      <ul>
        <li>Lower middle class: ₹2–10 lakhs</li>
        <li>Mid middle class: ₹10–40 lakhs</li>
        <li>Upper middle class: ₹40 lakhs – ₹1 crore</li>
      </ul>

      <p>
        These numbers vary based on:
      </p>

      <ul>
        <li>City</li>
        <li>Age</li>
        <li>Career stage</li>
        <li>Family responsibilities</li>
      </ul>

      <h2>Why Most Indians Have Low Net Worth</h2>

      <ul>
        <li>Low savings rate</li>
        <li>High EMIs</li>
        <li>Late investing</li>
        <li>Lifestyle inflation</li>
        <li>Lack of financial planning</li>
      </ul>

      <h2>How to Increase Your Net Worth</h2>

      <ul>
        <li>Increase income</li>
        <li>Control expenses</li>
        <li>Invest regularly</li>
        <li>Avoid unnecessary debt</li>
        <li>Track finances yearly</li>
      </ul>

      <h2>Calculate Your Real Net Worth</h2>

      <p>
        Don’t compare blindly.
        Calculate your own net worth here:
      </p>

      <a href="/net-worth">
        <button className="button-primary">
          Net Worth Calculator
        </button>
      </a>

      <p style={{ marginTop: "40px", color: "#666", fontSize: "14px" }}>
        This article is written for realistic Indian income levels,
        not extreme wealth or influencer lifestyles.
      </p>
    </main>
  )
}
