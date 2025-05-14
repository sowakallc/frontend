"use client"
import { motion, Button,Card, CardContent,Link, CardFooter, CardHeader, CardTitle,CheckCircle,XCircle } from '../../../components/index'
import { useState, useEffect } from "react"




export default function VerifyEmailPage({ params }: { params: { token: string } }) {
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading")
  const [userType, setUserType] = useState<"patient" | "doctor" | "admin">("patient")

  // In a real app, we would validate the token and determine the user type
  // For demo purposes, we'll simulate a verification process
  useEffect(() => {
    const types = ["patient", "doctor", "admin"] as const
    setUserType(types[Math.floor(Math.random() * types.length)])

    const timer = setTimeout(() => {
      // Simulate success most of the time, but occasionally show an error
      setStatus(Math.random() > 0.2 ? "success" : "error")
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  const getColorScheme = () => {
    switch (userType) {
      case "doctor":
        return {
          bg: "bg-teal-100",
          text: "text-teal-600",
          button: "bg-teal-600 hover:bg-teal-700",
          link: "text-teal-600",
        }
      case "admin":
        return {
          bg: "bg-purple-100",
          text: "text-purple-600",
          button: "bg-purple-600 hover:bg-purple-700",
          link: "text-purple-600",
        }
      default:
        return {
          bg: "bg-teal-100",
          text: "text-teal-600",
          button: "bg-teal-600 hover:bg-teal-700",
          link: "text-teal-600",
        }
    }
  }

  const colors = getColorScheme()

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
            {status === "loading" && (
              <>
                <div className="flex justify-center mb-4">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
                </div>
                <CardTitle className="text-2xl font-bold">Verifying Your Email</CardTitle>
              </>
            )}

            {status === "success" && (
              <>
                <div className="flex justify-center mb-4">
                  <CheckCircle className="h-16 w-16 text-green-500" />
                </div>
                <CardTitle className="text-2xl font-bold">Email Verified!</CardTitle>
              </>
            )}

            {status === "error" && (
              <>
                <div className="flex justify-center mb-4">
                  <XCircle className="h-16 w-16 text-red-500" />
                </div>
                <CardTitle className="text-2xl font-bold">Verification Failed</CardTitle>
              </>
            )}
          </CardHeader>

          <CardContent>
            {status === "loading" && (
              <p className="text-center text-gray-600">Please wait while we verify your email address...</p>
            )}

            {status === "success" && (
              <div className="space-y-4">
                <p className="text-center text-gray-600">
                  Your email has been successfully verified. You can now access all features of your account.
                </p>
                <Button className={`w-full ${colors.button} text-white`}>
                  <Link href={`/`}>Continue to Login</Link>
                </Button>
              </div>
            )}

            {status === "error" && (
              <div className="space-y-4">
                <p className="text-center text-gray-600">
                  We couldn't verify your email address. The verification link may have expired or is invalid.
                </p>
                <Button variant="outline" className="w-full">
                  <Link href={`/resend-verification/${userType}`}>Resend Verification Email</Link>
                </Button>
              </div>
            )}
          </CardContent>

          <CardFooter className="flex justify-center">
            <div className="text-sm text-center text-gray-500">
              Need help?{" "}
              <Link href="/contact" className={`${colors.link} hover:underline`}>
                Contact Support
              </Link>
            </div>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  )
}
