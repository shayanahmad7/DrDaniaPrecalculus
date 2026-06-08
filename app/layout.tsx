import type React from "react"
import type { Metadata } from "next"
import { Inter, Newsreader } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Precalculus with Dr. Dania | Course AI Builds",
  description:
    "A public overview of Dr. Dania Zantout's Math1000A and Math1000B course AI work at NYU Abu Dhabi.",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${newsreader.variable}`}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
