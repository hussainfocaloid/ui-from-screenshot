"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useState, useEffect } from "react"
import Image from "next/image"

interface PicsumImage {
  id: string
  author: string
  width: number
  height: number
  url: string
  download_url: string
}

export default function HomePage() {
  const [featuredImages, setFeaturedImages] = useState<PicsumImage[]>([])
  const [loading, setLoading] = useState(true)

  const categories = [
    { name: "Music", count: 150, icon: "🎵" },
    { name: "Tech", count: 75, icon: "📊" },
    { name: "People", count: 50, icon: "👥" },
    { name: "Flying", count: 30, icon: "✈️" },
  ]

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch("https://picsum.photos/v2/list?limit=6")
        const data: PicsumImage[] = await response.json()
        setFeaturedImages(data)
      } catch (error) {
        console.error("Failed to fetch images:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchImages()
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-md mx-auto p-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-lg font-medium mb-2">Welcome to Our Platform</h1>
          <div className="flex gap-4 text-sm text-muted-foreground mb-6">
            <Link href="/" className="underline">
              Home
            </Link>
            <Link href="/login" className="underline">
              Login
            </Link>
            <Link href="/signup" className="underline">
              Signup
            </Link>
          </div>
        </div>

        {/* Explore Section */}
        <div className="mb-8">
          <h2 className="text-lg font-medium mb-4 text-center">Explore Amazing Content</h2>
          <div className="flex gap-2 mb-6">
            <Button variant="outline" size="sm" className="flex-1 bg-transparent">
              Home
            </Button>
            <Button size="sm" className="flex-1 bg-black text-white hover:bg-black/90">
              Explore
            </Button>
          </div>
        </div>

        {/* Categories */}
        <div className="mb-8">
          <h3 className="font-medium mb-4">Categories</h3>
          <div className="grid grid-cols-4 gap-4">
            {categories.map((category) => (
              <div key={category.name} className="text-center">
                <div className="text-2xl mb-2">{category.icon}</div>
                <div className="text-sm font-medium">{category.name}</div>
                <div className="text-sm text-muted-foreground">{category.count}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Images */}
        <div>
          <h3 className="font-medium mb-4">Featured Images</h3>
          <div className="grid grid-cols-3 gap-3">
            {loading
              ? Array.from({ length: 6 }, (_, i) => (
                  <Card key={i} className="aspect-square">
                    <CardContent className="p-4 h-full flex flex-col justify-between">
                      <div className="text-xs text-muted-foreground">Loading...</div>
                      <div>
                        <div className="text-sm font-medium">Image {i + 1}</div>
                        <div className="text-xs text-muted-foreground">Loading...</div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              : featuredImages.map((image) => (
                  <Card key={image.id} className="aspect-square overflow-hidden">
                    <CardContent className="p-0 h-full relative">
                      <Image
                        src={image.download_url || "/placeholder.svg"}
                        alt={`Photo by ${image.author}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 33vw, 200px"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-2">
                        <div className="text-xs font-medium truncate">By {image.author}</div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
          </div>
        </div>

        {/* Footer Links */}
        <div className="flex justify-center gap-6 mt-8 text-sm text-muted-foreground">
          <Link href="#" className="underline">
            Privacy Policy
          </Link>
          <Link href="#" className="underline">
            Privacy Policy
          </Link>
          <Link href="#" className="underline">
            Contact Us
          </Link>
          <Link href="#" className="underline">
            About Us
          </Link>
        </div>
      </div>
    </div>
  )
}
