"use client"

import Link from "next/link"
import { motion } from "framer-motion"

interface MobileMenuProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export default function MobileMenu({ isOpen, setIsOpen }: MobileMenuProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: "100%" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "100%" }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-40 bg-black pt-20 px-6"
    >
      <nav className="flex flex-col space-y-6 text-xl">
        {[
          { name: "About", href: "#about" },
          { name: "Services", href: "#services" },
          { name: "Work", href: "#work" },
          { name: "Stats", href: "#stats" },
          { name: "Research", href: "#research" },
          { name: "Team", href: "#team" },
          { name: "Testimonials", href: "#testimonials" },
          { name: "FAQ", href: "#faq" },
          { name: "Contact", href: "#contact" },
        ].map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="py-2 border-b border-gray-800 hover:text-[#9eff00] transition-colors"
            onClick={() => setIsOpen(false)}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </motion.div>
  )
}

