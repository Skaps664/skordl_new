"use client";

import Link from "next/link";
import { Twitter, Linkedin, Github, Heart } from "lucide-react";
import { useRouter } from "next/navigation";
import ClutchWidget from "../ClutchWidget";


// Extend the Window interface to include clutchwp
declare global {
  interface Window {
    clutchwp?: {
      init: (element: HTMLElement) => void;
    };
  }
}


export default function Footer() {
  const router = useRouter();


  // Function to handle section navigation
  const handleSectionNavigation = (section: string) => {
    router.push(`/#${section}`);
  };



  return (
    <>
      
      <footer className="container mx-auto px-4 py-12 border-t border-gray-800">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-7 mb-12">
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
              <Link href="#" target="_blank" className="text-gray-400 hover:text-[#9eff00] transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="https://www.linkedin.com/company/skordl" target="_blank" className="text-gray-400 hover:text-[#9eff00] transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="https://github.com/SKORDL" target="_blank" className="text-gray-400 hover:text-[#9eff00] transition-colors duration-300">
                <Github className="h-5 w-5" />
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleSectionNavigation("services")}
                  className="text-gray-400 hover:text-[#9eff00] transition-colors duration-300 text-left w-full"
                >
                  Software Development
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSectionNavigation("services")}
                  className="text-gray-400 hover:text-[#9eff00] transition-colors duration-300 text-left w-full"
                >
                  UI/UX Design
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSectionNavigation("services")}
                  className="text-gray-400 hover:text-[#9eff00] transition-colors duration-300 text-left w-full"
                >
                  Machine Learning
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSectionNavigation("services")}
                  className="text-gray-400 hover:text-[#9eff00] transition-colors duration-300 text-left w-full"
                >
                  Research & Development
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSectionNavigation("services")}
                  className="text-gray-400 hover:text-[#9eff00] transition-colors duration-300 text-left w-full"
                >
                  Consulting
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleSectionNavigation("about")}
                  className="text-gray-400 hover:text-[#9eff00] transition-colors duration-300 text-left w-full"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSectionNavigation("team")}
                  className="text-gray-400 hover:text-[#9eff00] transition-colors duration-300 text-left w-full"
                >
                  Our Team
                </button>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#9eff00] transition-colors duration-300">
                  Careers
                </Link>
              </li>
              <li>
                <button
                  onClick={() => handleSectionNavigation("contact")}
                  className="text-gray-400 hover:text-[#9eff00] transition-colors duration-300 text-left w-full"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Insights</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog-posts" className="text-gray-400 hover:text-[#9eff00] transition-colors duration-300">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#9eff00] transition-colors duration-300">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#9eff00] transition-colors duration-300">
                  Activities
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className="text-gray-400 hover:text-[#9eff00] transition-colors duration-300">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="text-gray-400 hover:text-[#9eff00] transition-colors duration-300">
                  Terms of Service
                </Link>
              </li>
              
            </ul>
          </div>
          <div>
          <ClutchWidget backgroundColor="black" />
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 mb-4 md:mb-0">
            © {new Date().getFullYear()} skordl. All rights reserved.
          </div>
          <div className="text-gray-500 flex items-center justify-center">
            Designed and built with{" "}
            <span className="text-[#9eff00] mx-1">
              <Heart className="inline-block" />
            </span>{" "}
            by skordl team
          </div>
        </div>
      </footer>
    </>
  );
}