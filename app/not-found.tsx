import Link from "next/link"

export default function GlobalNotFound() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-40 text-center">
      <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
      <p className="text-gray-400 mb-8">We couldn't find the page you were looking for.</p>
      <Link href="/" className="inline-flex items-center text-[#9eff00] hover:underline">
        Back to Home
      </Link>
    </div>
  )
}

