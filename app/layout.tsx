import type { Metadata } from "next"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "Flox Labs — Innovation for Global Impact",
  description:
    "An innovation platform connecting technology with the UN Sustainable Development Goals.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="min-h-[calc(100vh-60px-180px)]">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
