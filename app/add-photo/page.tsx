import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"

export default function AddPhotoPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-md mx-auto p-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-lg font-medium mb-2">Add Photo</h1>
          <div className="flex gap-4 text-sm text-muted-foreground mb-6">
            <Link href="/" className="underline">
              Home
            </Link>
            <Link href="/dashboard" className="underline">
              Dashboard
            </Link>
            <Link href="/add-photo" className="underline">
              Upload
            </Link>
            <Link href="#" className="underline">
              Profile
            </Link>
          </div>
        </div>

        {/* Upload Section */}
        <div className="mb-8">
          <h2 className="text-lg font-medium mb-6 text-center">Upload Your Photo</h2>
          <p className="text-sm text-muted-foreground text-center mb-6">Choose a photo to upload to your gallery</p>

          <div className="flex gap-2 mb-6">
            <Button variant="outline" size="sm" className="flex-1 bg-transparent">
              Choose File
            </Button>
            <Button size="sm" className="bg-black text-white hover:bg-black/90">
              Add Photo
            </Button>
          </div>
        </div>

        {/* Photo Submission Form */}
        <div className="mb-8">
          <h3 className="font-medium mb-4 text-center">Photo Submission Form</h3>
          <p className="text-sm text-muted-foreground text-center mb-6">Add details about your photo</p>

          <div className="space-y-4 mb-6">
            <div>
              <label className="text-sm font-medium mb-2 block">Photo Title</label>
              <Input placeholder="Enter photo title" />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Description</label>
              <Textarea placeholder="Enter photo description" className="min-h-[80px]" />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Tags</label>
              <Input placeholder="Enter tags (comma separated)" />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Category</label>
              <Input placeholder="Select category" />
            </div>
          </div>

          <Button className="w-full bg-black text-white hover:bg-black/90">Submit Photo</Button>
        </div>

        {/* Preview Section */}
        <div className="mb-8">
          <h3 className="font-medium mb-4 text-center">Preview</h3>
          <p className="text-sm text-muted-foreground text-center mb-6">Preview your submitted photo below</p>

          <Card className="bg-gray-50">
            <CardContent className="p-6">
              <div className="text-center">
                <div className="text-sm font-medium mb-2">Selected Photo</div>
                <div className="text-xs text-muted-foreground">This is how your photo will appear once uploaded</div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="text-center text-xs text-muted-foreground">
          © 2024 Photo Platform • Privacy Policy • Terms of Service
        </div>
      </div>
    </div>
  )
}
