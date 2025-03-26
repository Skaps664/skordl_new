"use client"

import { useState, useEffect } from "react"
import type React from "react"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import MobileMenu from "@/components/layout/MobileMenu"

const inter = Inter({ subsets: ["latin"], display: "swap" })

export default function ClientLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [scrollY, setScrollY] = useState(0)
    const [activeSection, setActiveSection] = useState("hero")

    // Handle scroll for header transparency and active section
    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY)

            // Determine active section
            const sections = [
                "hero",
                "about",
                "services",
                "work",
                "stats",
                "research",
                "team",
                "testimonials",
                "faq",
                "contact",
            ]

            for (const section of sections.reverse()) {
                const element = document.getElementById(section)
                if (element) {
                    const rect = element.getBoundingClientRect()
                    if (rect.top <= 100) {
                        setActiveSection(section)
                        break
                    }
                }
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <html lang="en" suppressHydrationWarning>
            <body className={inter.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                    storageKey="skordl-theme"
                >
                    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white overflow-x-hidden">
                        <Header
                            scrollY={scrollY}
                            activeSection={activeSection}
                            isMenuOpen={isMenuOpen}
                            setIsMenuOpen={setIsMenuOpen}
                        />

                        {isMenuOpen && <MobileMenu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />}

                        {children}

                        <Footer />
                    </div>
                </ThemeProvider>
            </body>
        </html>
    )
}

