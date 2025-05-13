"use client"
import { motion, Button,Card, CardContent,Link, CardDescription, CardFooter, CardHeader, CardTitle , Mail} from '../../components/index'


export default function VerifyEmailInstructionsPage() {
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
            <div className="flex justify-center mb-4">
              <div className="rounded-full bg-teal-100 p-4">
                <Mail className="h-10 w-10 text-teal-600" />
              </div>
            </div>
            <CardTitle className="text-2xl font-bold">Check Your Email</CardTitle>
            <CardDescription>We've sent you a verification link to complete your registration</CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="rounded-lg bg-teal-50 p-4 text-sm text-teal-800 border border-teal-200">
              <p>
                We've sent a verification email to <strong>your-email@example.com</strong>.
              </p>
              <p className="mt-2">Click the link in the email to verify your account.</p>
            </div>

            <div className="space-y-2">
              <h3 className="font-medium">Didn't receive an email?</h3>
              <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                <li>Check your spam or junk folder</li>
                <li>Make sure you entered the correct email address</li>
                <li>Allow a few minutes for the email to arrive</li>
              </ul>
            </div>

            <Button variant="outline" className="w-full mt-2">
              Resend Verification Email
            </Button>
          </CardContent>

          <CardFooter className="flex flex-col space-y-4">
            <div className="text-sm text-center">
              <Link href="/" className="text-teal-600 hover:underline">
                Back to Home
              </Link>
            </div>
            <div className="text-xs text-center text-gray-400">
              Need help?{" "}
              <Link href="/contact" className="text-teal-600 hover:underline">
                Contact Support
              </Link>
            </div>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  )
}
