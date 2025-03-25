import Link from "next/link"
import { Twitter, Linkedin, Github } from "lucide-react"

export default function Footer() {
  return (
    <footer className="container mx-auto px-4 py-12 border-t border-gray-800">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        <div>
          <Link href="/" className="flex items-center">
            <img
              src="/skordl_logo.png"
              alt="SKORDL Logo"
              className="h-10 w-auto"
            />
          </Link>
          <p className="text-gray-400 mb-4">
            Creating exceptional digital experiences through innovative software solutions.
          </p>
          <div className="flex space-x-4">
            <Link href="#" className="text-gray-400 hover:text-[#9eff00] transition-colors duration-300">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-[#9eff00] transition-colors duration-300">
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-[#9eff00] transition-colors duration-300">
              <Github className="h-5 w-5" />
            </Link>
          </div>
        </div>

        <div>
          <h3 className="font-bold mb-4">Services</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="text-gray-400 hover:text-[#9eff00] transition-colors duration-300">
                Software Development
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-400 hover:text-[#9eff00] transition-colors duration-300">
                UI/UX Design
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-400 hover:text-[#9eff00] transition-colors duration-300">
                Machine Learning
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-400 hover:text-[#9eff00] transition-colors duration-300">
                Research & Development
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-400 hover:text-[#9eff00] transition-colors duration-300">
                Consulting
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4">Company</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#about" className="text-gray-400 hover:text-[#9eff00] transition-colors duration-300">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#team" className="text-gray-400 hover:text-[#9eff00] transition-colors duration-300">
                Our Team
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-400 hover:text-[#9eff00] transition-colors duration-300">
                Careers
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-400 hover:text-[#9eff00] transition-colors duration-300">
                Blog
              </Link>
            </li>
            <li>
              <Link href="#contact" className="text-gray-400 hover:text-[#9eff00] transition-colors duration-300">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4">Legal</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="text-gray-400 hover:text-[#9eff00] transition-colors duration-300">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-400 hover:text-[#9eff00] transition-colors duration-300">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-400 hover:text-[#9eff00] transition-colors duration-300">
                Cookie Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
        <div className="text-gray-500 mb-4 md:mb-0">© {new Date().getFullYear()} skordl. All rights reserved.</div>
        <div className="text-gray-500">
          Designed and built with <span className="text-[#9eff00]">❤️</span> by skordl team
        </div>
      </div>
    </footer>
  )
}

