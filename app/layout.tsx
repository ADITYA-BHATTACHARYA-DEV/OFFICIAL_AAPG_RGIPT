import type React from "react"
import { Inter } from "next/font/google"
import Header from "./components/Header"
import Footer from "../components/Footer"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "AAPG RGIPT SC",
  description: "American Association of Petroleum Geologists Student Chapter at RGIPT",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="pt-16 min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

