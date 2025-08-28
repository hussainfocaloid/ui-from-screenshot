import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-md mx-auto p-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-lg font-medium mb-2">Welcome to Our Service</h1>
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

        {/* Login Form */}
        <div className="mb-8">
          <h2 className="text-lg font-medium mb-2 text-center">Login</h2>
          <p className="text-sm text-muted-foreground text-center mb-6">Please enter your credentials to continue</p>

          <div className="space-y-4 mb-6">
            <Input type="email" placeholder="Enter your email here" className="w-full" />
            <div className="flex gap-2">
              <Input type="password" placeholder="Password" className="flex-1" />
              <Button className="bg-black text-white hover:bg-black/90">Login</Button>
            </div>
          </div>
        </div>

        {/* Additional Content */}
        <Card className="bg-gray-50">
          <CardContent className="p-6">
            <div className="text-center text-sm text-muted-foreground">
              Don't have an account?{" "}
              <Link href="/signup" className="text-black underline">
                Sign up here
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
