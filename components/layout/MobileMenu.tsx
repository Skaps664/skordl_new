"use client"

import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Linkedin } from "lucide-react"

interface MobileMenuProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  activeSection: string
}

export default function MobileMenu({ isOpen, setIsOpen, activeSection }: MobileMenuProps) {
  const router = useRouter();

  // Handle section navigation
  const handleSectionNavigation = (section: string) => {
    router.push(`/#${section}`);
    setIsOpen(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: "100%" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "100%" }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-40 bg-black pt-24 px-6"
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
          <button
            key={index}
            onClick={() => handleSectionNavigation(item.href.substring(1))}
            className={`text-left mt-2 border-b border-gray-800 hover:text-[#9eff00] transition-colors ${
              activeSection === item.href.substring(1) ? "text-[#9eff00]" : ""
            }`}
          >
            {item.name}
          </button>
        ))}

        {/* LinkedIn Link */}
        <div className="pt-1">
          <a 
            href="https://www.linkedin.com/company/skordl" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-[#9eff00] hover:text-gray-400 transition-colors"
          >
            <Linkedin className="h-5 w-5 mr-2" />
            LinkedIn
          </a>
        </div>
      </nav>
    </motion.div>
  )
}