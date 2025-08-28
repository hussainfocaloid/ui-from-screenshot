import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function DashboardPage() {
  const photos = Array.from({ length: 3 }, (_, i) => ({
    id: i + 1,
    title: `Photo ${i + 1}`,
    description: "Photo description here",
  }))

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-md mx-auto p-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-lg font-medium mb-2">User Dashboard</h1>
          <div className="flex gap-4 text-sm text-muted-foreground mb-6">
            <Link href="/" className="underline">
              Home
            </Link>
            <Link href="/login" className="underline">
              Login
            </Link>
            <Link href="/dashboard" className="underline">
              Dashboard
            </Link>
            <Link href="/add-photo" className="underline">
              Upload
            </Link>
          </div>
        </div>

        {/* My Photos Section */}
        <div className="mb-8">
          <h2 className="text-lg font-medium mb-4 text-center">My Photos</h2>
          <p className="text-sm text-muted-foreground text-center mb-6">Manage and organize your photos</p>

          <div className="flex gap-2 mb-6">
            <Button variant="outline" size="sm" className="flex-1 bg-transparent">
              Gallery
            </Button>
            <Button size="sm" className="flex-1 bg-black text-white hover:bg-black/90">
              Upload New Photo
            </Button>
          </div>

          <div className="flex gap-2 mb-6">
            <Button variant="outline" size="sm">
              All Photos
            </Button>
            <Button variant="outline" size="sm">
              Favorites
            </Button>
            <Button variant="outline" size="sm">
              Recent
            </Button>
          </div>
        </div>

        {/* Photo Management */}
        <div className="mb-8">
          <h3 className="font-medium mb-4 text-center">Photo Management</h3>
          <p className="text-sm text-muted-foreground text-center mb-6">Add and organize your photo content</p>

          <div className="grid grid-cols-3 gap-3 mb-6">
            {photos.map((photo) => (
              <Card key={photo.id} className="aspect-square">
                <CardContent className="p-4 h-full flex flex-col justify-between">
                  <div className="text-xs text-muted-foreground">Photo {photo.id}</div>
                  <div>
                    <div className="text-sm font-medium">{photo.title}</div>
                    <div className="text-xs text-muted-foreground">{photo.description}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* My Photo Actions */}
        <div className="mb-8">
          <h3 className="font-medium mb-4 text-center">My Photo Actions</h3>
          <p className="text-sm text-muted-foreground text-center mb-6">Quick actions for your photos</p>

          <div className="flex justify-center gap-8">
            <Link href="/add-photo" className="text-center">
              <div className="w-12 h-12 bg-gray-100 rounded mb-2 flex items-center justify-center">📷</div>
              <div className="text-sm">Add Photo</div>
            </Link>
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-100 rounded mb-2 flex items-center justify-center">🗑️</div>
              <div className="text-sm">Delete Photo</div>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="flex justify-center gap-6 text-sm text-muted-foreground">
          <Link href="#" className="underline">
            Privacy Policy
          </Link>
          <Link href="#" className="underline">
            Terms of Service
          </Link>
          <Link href="#" className="underline">
            Help
          </Link>
        </div>
      </div>
    </div>
  )
}
