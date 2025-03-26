"use client"

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

export default function Home() {
  return (
    <main className="pt-20">
      <section id="home">
        <HeroSection />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <section id="services">
        <ServicesSection />
      </section>
      <section id="work">
        <WorkSection />
      </section>
      <StatsSection />
      <ParallaxSection />
      <section id="research">
        <ResearchSection />
      </section>
      <section id="team">
        <TeamSection />
      </section>
      <TestimonialsSection />
      <FaqSection />
      <section id="contact">
        <ContactSection />
      </section>
    </main>
  )
}