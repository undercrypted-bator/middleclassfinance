import "./globals.css"
import { Analytics } from "@vercel/analytics/react"

export const metadata = {
  title: "MiddleClassFinance",
  description: "Real money advice for real Indian salaries."
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
