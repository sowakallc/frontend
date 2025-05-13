"use client"

import type React from "react"
import { useState } from "react"
import { motion, Button,Card, CardContent,Link, CardDescription, CardFooter, CardHeader, CardTitle ,Input ,Label, ArrowLeft, Mail, User} from '../../components/index'
import { toast } from "sonner"



export default function PatientForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // In a real app, this would send a password reset email
    // For demo purposes, we'll just show a success message
    toast.success("Reset link sent", {
      description: "Check your email for instructions to reset your password.",
    })

    setIsSubmitted(true)
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
            <CardTitle className="text-2xl font-bold">Forgot Your Password</CardTitle>
            <CardDescription>
              {!isSubmitted
                ? "Enter your email and we'll send you instructions to reset your password"
                : "Check your email for a link to reset your password"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="email"
                      placeholder="m@example.com"
                      type="email"
                      className="pl-10"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700">
                  Send Reset Link
                </Button>
              </form>
            ) : (
              <div className="space-y-4">
                <div className="rounded-lg bg-teal-50 p-4 text-sm text-teal-800 border border-teal-200">
                  <p>
                    We've sent an email to <strong>{email}</strong> with instructions to reset your password.
                  </p>
                  <p className="mt-2">If you don't see it in your inbox, please check your spam folder.</p>
                </div>
                <Button
                  variant="outline"
                  className="w-full border-teal-200 text-teal-700 hover:bg-teal-50"
                  onClick={() => setIsSubmitted(false)}
                >
                  Try a different email
                </Button>
              </div>
            )}
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <div className="text-sm text-center">
              <Link href="/" className="inline-flex items-center text-teal-600 hover:underline">
                <ArrowLeft className="mr-1 h-4 w-4" /> Back to Login
              </Link>
            </div>
            <div className="text-xs text-center text-gray-400">
              Remember your password?{" "}
              <Link href="/" className="text-teal-600 hover:underline">
                Sign in
              </Link>
            </div>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  )
}