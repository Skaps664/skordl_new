"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, MoonStar, Sun, Linkedin } from "lucide-react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"

interface HeaderProps {
  scrollY: number
  activeSection: string
  isMenuOpen: boolean
  setIsMenuOpen: (isOpen: boolean) => void
}

export default function Header({ scrollY, activeSection, isMenuOpen, setIsMenuOpen }: HeaderProps) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // useEffect to handle mounting state for theme
  useEffect(() => {
    setMounted(true)
  }, [])

  // Prevent hydration mismatch
  const currentTheme = mounted ? theme : "dark"

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 py-4 md:py-6 transition-all duration-300 ${scrollY > 50 ? "bg-black/50 dark:bg-black/50 backdrop-blur-sm" : "bg-transparent"
        }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <Link href="/" className="flex items-center">
            <img
              src="/skordl_logo.png"
              alt="SKORDL Logo"
              className="h-10 w-auto"
            />
          </Link>
        </motion.div>


        {/* Desktop Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:flex items-center space-x-6"
        >
          {[
            { name: "About", href: "#about" },
            { name: "Services", href: "#services" },
            { name: "Work", href: "#work" },
            { name: "Research", href: "#research" },
            { name: "Team", href: "#team" },
            { name: "Contact", href: "#contact" },
          ].map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={`hover:text-[#9eff00] transition-colors duration-300 ${activeSection === item.href.substring(1) ? "text-[#9eff00]" : ""
                }`}
            >
              {item.name}
            </Link>
          ))}

          {<Link href="https://www.linkedin.com/in/skordl" target="_blank" className="text-[#9eff00] hover:text-gray-400 transition-colors">
            <Linkedin className="h-5 w-5" />
          </Link>}
          {/* Theme Toggle */}
          {/* <button
            onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-200"
            aria-label="Toggle theme"
          >
            {mounted &&
              (currentTheme === "dark" ? (
                <Sun className="h-5 w-5 text-[#9eff00]" />
              ) : (
                <MoonStar className="h-5 w-5 text-[#9eff00]" />
              ))}
          </button> */}
        </motion.nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-4 md:hidden">
          {/* Theme Toggle for Mobile */}
          <button
            onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-200"
            aria-label="Toggle theme"
          >
            {mounted &&
              (currentTheme === "dark" ? (
                <Sun className="h-5 w-5 text-[#9eff00]" />
              ) : (
                <MoonStar className="h-5 w-5 text-[#9eff00]" />
              ))}
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="focus:outline-none"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-black dark:text-white" />
            ) : (
              <Menu className="h-6 w-6 text-black dark:text-white" />
            )}
          </button>
        </div>
      </div>
    </header>
  )
}

