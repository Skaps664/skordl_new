import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-40 text-center">
      <h2 className="text-3xl font-bold mb-4">Blog Post Not Found</h2>
      <p className="text-gray-400 mb-8">We couldn't find the blog post you were looking for.</p>
      <Link href="/blog-posts" className="inline-flex items-center text-[#9eff00] hover:underline">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to all posts
      </Link>
    </div>
  )
}