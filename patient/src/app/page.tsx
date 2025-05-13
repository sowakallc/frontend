"use client"
import { motion, Button,Card, CardContent,Link, CardDescription, CardFooter, CardHeader, CardTitle ,Input ,Label,Eye, EyeOff, Lock, Mail, User} from '../components/index'
import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

export default function PatientLoginPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()

    // In a real app, this would authenticate the user
    // For demo purposes, we'll just redirect
    toast.success("Login successful", {
      description: "Welcome back! You are now logged in as a patient.",
    })

    // Store the user role in localStorage
    localStorage.setItem("userRole", "patient")

    // Redirect to the patient dashboard
    router.push("/patient")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <Card>
          <CardHeader className="space-y-1 text-center">
            <div className="flex justify-center mb-2">
              <div className="rounded-full bg-teal-100 p-3">
                <User className="h-8 w-8 text-teal-600" />
              </div>
            </div>
            <CardTitle className="text-2xl font-bold">Patient Login</CardTitle>
            <CardDescription>Enter your credentials to access your patient account</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input id="email" placeholder="m@example.com" type="email" className="pl-10" required />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <Link href="/forgot-password" className="text-xs text-teal-600 hover:underline">
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input id="password" type={showPassword ? "text" : "password"} className="pl-10 pr-10" required />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-1 top-1"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-gray-400" />
                    ) : (
                      <Eye className="h-4 w-4 text-gray-400" />
                    )}
                  </Button>
                </div>
              </div>
              <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700">
                Login
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <div className="text-sm text-center text-gray-500">
              Don't have an account?{" "}
              <Link href="/register/" className="text-teal-600 font-medium hover:underline">
                Register
              </Link>
            </div>
            <div className="text-sm text-center">
              <Link href="/" className="text-teal-600 hover:underline">
                Back to Home
              </Link>
            </div>
            {/* <div className="text-sm text-center text-gray-500">
              Are you a doctor?{" "}
              <Link href="/login/doctor" className="text-teal-600 hover:underline">
                Doctor Login
              </Link>
            </div> */}
            <div className="text-xs text-center text-gray-400">
              By continuing, you agree to our{" "}
              <Link href="/terms" className="text-teal-600 hover:underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="text-teal-600 hover:underline">
                Privacy Policy
              </Link>
              .
            </div>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  )
}