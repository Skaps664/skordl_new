"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock } from "lucide-react"
import { useParams } from "next/navigation"
import { motion } from "framer-motion"
import { fadeIn } from "@/lib/animations"
import { notFound } from "next/navigation"
import { blogPosts } from "../blogPosts"

export default function BlogPostPage() {
  const params = useParams()
  const slug = params.slug as string

  // Find the blog post with the matching slug
  const post = blogPosts.find((post) => post.slug === slug)

  // If no post is found, return a 404 page
  if (!post) {
    notFound()
  }

  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <motion.div initial="hidden" animate="visible" variants={fadeIn} className="max-w-3xl mx-auto">
        <Link href="/blog-posts" className="inline-flex items-center text-gray-400 hover:text-[#9eff00] mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to all posts
        </Link>

        <div className="aspect-video relative mb-8 rounded-lg overflow-hidden">
          <Image src={post.image || ""} alt={post.title} fill className="object-cover" />
        </div>

        <div className="flex items-center text-sm text-gray-400 mb-4">
          <Calendar className="h-4 w-4 mr-2" />
          <span>{post.date}</span>
          <span className="mx-2">•</span>
          <Clock className="h-4 w-4 mr-2" />
          <span>{post.readTime}</span>
          <span className="mx-2">•</span>
          <span>By {post.author}</span>
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{post.title}</h1>

        <div className="prose prose-lg prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
      </motion.div>
    </section>
  )
}

