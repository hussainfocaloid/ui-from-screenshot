import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function SignupPage() {
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

        {/* Signup Form */}
        <div className="mb-8">
          <h2 className="text-lg font-medium mb-6 text-center">Sign Up</h2>
          <p className="text-sm text-muted-foreground text-center mb-6">Create your account to get started</p>

          <div className="space-y-4 mb-6">
            <Input type="text" placeholder="Name" className="w-full" />
            <Input type="email" placeholder="Email" className="w-full" />
            <Input type="password" placeholder="Password" className="w-full" />
            <Input type="password" placeholder="Confirm Password" className="w-full" />
            <div className="flex gap-2">
              <Input type="text" placeholder="Enter verification code" className="flex-1" />
              <Button className="bg-black text-white hover:bg-black/90">Sign Up</Button>
            </div>
          </div>

          <div className="text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link href="/login" className="text-black underline">
              Login here
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
