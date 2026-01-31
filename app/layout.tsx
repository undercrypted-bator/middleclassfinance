import "./globals.css"

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
      <body>{children}</body>
    </html>
  )
}
