"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Eye, EyeOff, Lock, Mail, Stethoscope, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast, Toaster } from "sonner"

export default function DoctorRegisterPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault()

    // In a real app, this would register the user
    // For demo purposes, we'll just show a notification and redirect
    toast.success("Registration submitted", {
      description: "Your doctor registration has been submitted for approval. We'll notify you once it's approved.",
    })

    // Redirect to the doctor login page
    router.push("/")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <Toaster />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <Card className="bg-white">
          <CardHeader className="space-y-1 text-center">
            <div className="flex justify-center mb-2">
              <div className="rounded-full bg-teal-100 p-3">
                <Stethoscope className="h-8 w-8 text-teal-600" />
              </div>
            </div>
            <CardTitle className="text-2xl font-bold">Healthcare Provider Registration</CardTitle>
            <CardDescription>Create your doctor account to provide wellness services</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleRegister} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input id="name" placeholder="Dr. Jane Smith" className="pl-10" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input id="email" placeholder="doctor@example.com" type="email" className="pl-10" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="specialty">Specialty</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your specialty" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cardiology">Cardiology</SelectItem>
                    <SelectItem value="dermatology">Dermatology</SelectItem>
                    <SelectItem value="endocrinology">Endocrinology</SelectItem>
                    <SelectItem value="family-medicine">Family Medicine</SelectItem>
                    <SelectItem value="neurology">Neurology</SelectItem>
                    <SelectItem value="pediatrics">Pediatrics</SelectItem>
                    <SelectItem value="psychiatry">Psychiatry</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="license">License Number</Label>
                <Input id="license" placeholder="License number" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
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
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input id="confirm-password" type="password" className="pl-10" required />
                </div>
              </div>
              <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-white">
                Submit Application
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <div className="text-sm text-center text-gray-500">
              Already have an account?{" "}
              <Link href="/" className="text-teal-600 font-medium hover:underline">
                Login
              </Link>
            </div>
            <div className="text-sm text-center">
              <Link href="/" className="text-teal-600 hover:underline">
                Back to Home
              </Link>
            </div>
            <div className="text-sm text-center text-gray-500">
              Are you a patient?{" "}
              <Link href="/register/patient" className="text-teal-600 hover:underline">
                Register as Patient
              </Link>
            </div>
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
