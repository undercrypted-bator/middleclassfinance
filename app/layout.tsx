import "./globals.css"
import { Analytics } from "@vercel/analytics/react"

export const metadata = {
  title: "MiddleClassFinance",
  description: "Real money advice for real Indian salaries.",
  openGraph: {
    title: "MiddleClassFinance",
    description: "Real money advice for real Indian salaries.",
    url: "https://middleclassfinance.vercel.app",
    siteName: "MiddleClassFinance",
    images: [
      {
        url: "https://middleclassfinance.vercel.app/MIDDLECLASSFINANCE.png",
        width: 1200,
        height: 630,
        alt: "MiddleClassFinance Preview"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "MiddleClassFinance",
    description: "Real money advice for real Indian salaries.",
    images: ["https://middleclassfinance.vercel.app/MIDDLECLASSFINANCE.png"]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}

        {/* FOOTER */}
        <footer
          style={{
            marginTop: "80px",
            padding: "40px 20px",
            borderTop: "1px solid #1f2933",
            textAlign: "center",
            color: "#888",
            fontSize: "14px"
          }}
        >
          <div style={{ marginBottom: "10px" }}>
            <a href="/about" style={{ margin: "0 10px" }}>About</a>
            •
            <a href="/disclaimer" style={{ margin: "0 10px" }}>Disclaimer</a>
            •
            <a href="/privacy" style={{ margin: "0 10px" }}>Privacy</a>
          </div>

          <div>
            © {new Date().getFullYear()} MiddleClassFinance
          </div>
        </footer>

        <Analytics />
      </body>
    </html>
  )
}
