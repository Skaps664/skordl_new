import type React from "react"
export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen">
      {/* Blog-specific layout elements like header, navigation, etc. */}
      <main>{children}</main>
      {/* Blog-specific footer */}
    </div>
  )
}

