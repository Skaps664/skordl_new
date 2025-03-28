"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Bell, CheckCircle, Loader2 } from "lucide-react"

export default function ComingSoon() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setEmail("")
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-4">
      <div className="absolute top-6 left-6">
        <Link href="/" className="inline-flex items-center text-gray-400 hover:text-[#9eff00] transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
        </Link>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-md w-full text-center"
      >
        <div className="relative mb-8 mx-auto w-24 h-24 flex items-center justify-center">
          <div className="absolute inset-0 border-4 border-[#9eff00] rounded-full opacity-20"></div>
          <div className="absolute inset-0 border-4 border-[#9eff00] rounded-full opacity-40 animate-ping"></div>
          <Bell className="w-10 h-10 text-[#9eff00]" />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">Coming Soon</h1>

        <p className="text-gray-400 mb-8 text-lg">
          We're working hard to bring you something amazing. This section of our website is currently under development.
        </p>

        <div className="bg-gray-900 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-semibold mb-4">Get Notified When We Release</h2>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="px-4 py-3 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9eff00] transition-all"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center justify-center px-4 py-3 bg-[#9eff00] text-black font-medium rounded-md hover:bg-opacity-90 transition-all disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Notify Me"
                )}
              </button>
            </form>
          ) : (
            <div className="flex items-center justify-center text-[#9eff00] space-x-2">
              <CheckCircle className="w-5 h-5" />
              <span>Thank you! We'll notify you when we release.</span>
            </div>
          )}
        </div></motion.div>
    </div>
  )
}

