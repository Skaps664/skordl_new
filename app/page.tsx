"use client"

import { useState, useEffect } from "react"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import HeroSection from "@/components/sections/HeroSection"
import AboutSection from "@/components/sections/AboutSection"
import ServicesSection from "@/components/sections/ServicesSection"
import WorkSection from "@/components/sections/WorkSection"
import StatsSection from "@/components/sections/StatsSection"
import ParallaxSection from "@/components/sections/ParallaxSection"
import ResearchSection from "@/components/sections/ResearchSection"
import TeamSection from "@/components/sections/TeamSection"
import TestimonialsSection from "@/components/sections/TestimonialsSection"
import FaqSection from "@/components/sections/FaqSection"
import ContactSection from "@/components/sections/ContactSection"
import MobileMenu from "@/components/layout/MobileMenu"

export default function Home() {
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
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white overflow-x-hidden">
      <Header scrollY={scrollY} activeSection={activeSection} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      {isMenuOpen && <MobileMenu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />}

      <main className="pt-20">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WorkSection />
        <StatsSection />
        <ParallaxSection />
        <ResearchSection />
        <TeamSection />
        <TestimonialsSection />
        <FaqSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}

