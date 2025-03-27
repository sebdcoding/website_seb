import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"

// Using a system font stack that prioritizes Helvetica Neue
const helvetica = {
  className: "font-sans",
  style: {
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
  },
}

export const metadata: Metadata = {
  title: "Seb Dackus | Design Portfolio",
  description: "Portfolio of Seb Dackus, Industrial Designer from TU Delft",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body style={helvetica.style}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Header />
          <div className="pt-16">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'