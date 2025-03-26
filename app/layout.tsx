import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import ClientLayout from "./ClientLayout"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"], display: "swap" })

export const metadata = {
  title: "skordl | Software Development & Research Labs",
  description: "Exploring the Edge of Innovation.",
  generator: 'v0.dev',
  icons: {
    icon: "/favicon.ico", // Default favicon
    shortcut: "/favicon.ico", // Fallback
    apple: "/apple-touch-icon.png", // Apple devices
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={inter.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}



import './globals.css'
