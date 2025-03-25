"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { fadeIn, staggerContainer } from "@/lib/animations"

export default function FaqSection() {
  return (
    <section id="faq" className="container mx-auto px-4 py-16 md:py-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="max-w-3xl mx-auto"
      >
        <motion.h2 variants={fadeIn} className="text-4xl sm:text-5xl font-bold mb-6 text-center">
          Frequently Asked Questions
        </motion.h2>
        <motion.p variants={fadeIn} className="text-gray-400 text-center mb-12">
          Have questions? We've got answers.
        </motion.p>

        <motion.div variants={fadeIn}>
          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                question: "What services does skordl offer?",
                answer:
                  "skordl offers a comprehensive range of services including custom software development, UI/UX design, machine learning solutions, and research and development in emerging technologies. We work with businesses of all sizes to create tailored digital solutions that drive growth and innovation.",
              },
              {
                question: "How long does a typical project take?",
                answer:
                  "Project timelines vary depending on scope and complexity. A simple web application might take 4-8 weeks, while more complex enterprise solutions can take 3-6 months or more. During our initial consultation, we'll provide a detailed timeline based on your specific requirements.",
              },
              {
                question: "What is your development process?",
                answer:
                  "We follow an agile development methodology that emphasizes collaboration, flexibility, and continuous improvement. Our process typically includes discovery, planning, design, development, testing, deployment, and ongoing support. We provide regular updates and maintain transparent communication throughout the project.",
              },
              {
                question: "Do you offer ongoing support after project completion?",
                answer:
                  "Yes, we offer various support and maintenance packages to ensure your software continues to perform optimally. These can include bug fixes, security updates, performance optimization, and feature enhancements. We'll work with you to determine the right level of support for your needs.",
              },
              {
                question: "How do you handle data security and privacy?",
                answer:
                  "We take data security and privacy very seriously. We implement industry best practices for secure coding, use encryption for sensitive data, and ensure compliance with relevant regulations like GDPR and CCPA. Our team stays up-to-date with the latest security threats and mitigation strategies.",
              },
              {
                question: "What technologies do you specialize in?",
                answer:
                  "Our team has expertise in a wide range of technologies including React, Node.js, Python, TensorFlow, AWS, Docker, Kubernetes, GraphQL, TypeScript, Next.js, Flutter, and Go. We select the most appropriate technology stack based on your project requirements and business goals.",
              },
            ].map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-gray-800 rounded-md overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-900/50 transition-colors duration-300">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 bg-gray-900/30">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div variants={fadeIn} className="mt-12 text-center">
          <p className="text-gray-400 mb-4">Still have questions?</p>
          <Link href="#contact" className="inline-flex items-center text-[#9eff00] hover:underline">
            Contact us for more information <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}

