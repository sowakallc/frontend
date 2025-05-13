"use client"

import { useState } from "react"
import { motion, Image,Link, ArrowRight, User, UserCog } from '../../components/index'


import { useRouter } from "next/navigation"


export default function LoginSelection() {
  const router = useRouter()
  const [hoveredOption, setHoveredOption] = useState<string | null>(null)

  const handleOptionClick = (type: "patient" | "doctor") => {
    router.push(`/login/${type}`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white flex flex-col">
      {/* Header */}
      <header className="w-full py-4 px-6">
        <div className="container mx-auto">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="images/placeholder.svg?height=40&width=40"
              alt="Wellness Connect Logo"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <span className="font-bold text-xl text-teal-700">SOWAKA</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Welcome to SOWAKA</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Please select your role to continue to the appropriate login page
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16 w-full max-w-4xl">
          {/* Patient Option */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ scale: 1.03 }}
            onHoverStart={() => setHoveredOption("patient")}
            onHoverEnd={() => setHoveredOption(null)}
          >
            <div
              className={`bg-white rounded-xl overflow-hidden shadow-lg cursor-pointer transition-all duration-300 h-full
                ${hoveredOption === "patient" ? "ring-2 ring-teal-500" : ""}
                ${hoveredOption === "doctor" ? "opacity-80" : ""}
              `}
              onClick={() => handleOptionClick("patient")}
            >
              <div className="relative h-48 bg-teal-100">
                <Image
                  src="images/placeholder.svg?height=400&width=600"
                  alt="Patient"
                  fill
                  className="object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-500/30 to-transparent"></div>
                <motion.div
                  className="absolute bottom-4 right-4 bg-teal-500 rounded-full p-3 text-white"
                  animate={{
                    scale: hoveredOption === "patient" ? 1.1 : 1,
                  }}
                >
                  <User size={24} />
                </motion.div>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2 text-gray-800">I am a Patient</h2>
                <p className="text-gray-600 mb-4">
                  Access wellness seminars, register for events, and connect with healthcare providers.
                </p>
                <div className="flex items-center text-teal-600 font-medium">
                  Continue as Patient
                  <motion.div
                    animate={{
                      x: hoveredOption === "patient" ? 5 : 0,
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <motion.div
              className="absolute -top-4 -left-4 bg-teal-100 rounded-full w-16 h-16 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: hoveredOption === "patient" ? 1 : 0.6,
                scale: hoveredOption === "patient" ? 1 : 0.9,
                rotate: hoveredOption === "patient" ? 5 : 0,
              }}
              transition={{ duration: 0.3 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-teal-600"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </motion.div>
          </motion.div>

          {/* Doctor Option */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.03 }}
            onHoverStart={() => setHoveredOption("doctor")}
            onHoverEnd={() => setHoveredOption(null)}
          >
            <div
              className={`bg-white rounded-xl overflow-hidden shadow-lg cursor-pointer transition-all duration-300 h-full
                ${hoveredOption === "doctor" ? "ring-2 ring-teal-500" : ""}
                ${hoveredOption === "patient" ? "opacity-80" : ""}
              `}
              onClick={() => handleOptionClick("doctor")}
            >
              <div className="relative h-48 bg-teal-100">
                <Image
                  src="images/placeholder.svg?height=400&width=600"
                  alt="Doctor"
                  fill
                  className="object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-500/30 to-transparent"></div>
                <motion.div
                  className="absolute bottom-4 right-4 bg-teal-500 rounded-full p-3 text-white"
                  animate={{
                    scale: hoveredOption === "doctor" ? 1.1 : 1,
                  }}
                >
                  <UserCog size={24} />
                </motion.div>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2 text-gray-800">I am a Healthcare Provider</h2>
                <p className="text-gray-600 mb-4">
                  Create and manage wellness seminars, engage with patients, and track outcomes.
                </p>
                <div className="flex items-center text-teal-600 font-medium">
                  Continue as Healthcare Provider
                  <motion.div
                    animate={{
                      x: hoveredOption === "doctor" ? 5 : 0,
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <motion.div
              className="absolute -top-4 -right-4 bg-teal-100 rounded-full w-16 h-16 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: hoveredOption === "doctor" ? 1 : 0.6,
                scale: hoveredOption === "doctor" ? 1 : 0.9,
                rotate: hoveredOption === "doctor" ? -5 : 0,
              }}
              transition={{ duration: 0.3 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-teal-600"
              >
                <path d="M8.56 3.69a9 9 0 0 0-2.92 1.95"></path>
                <path d="M3.69 8.56A9 9 0 0 0 3 12"></path>
                <path d="M3.69 15.44a9 9 0 0 0 1.95 2.92"></path>
                <path d="M8.56 20.31A9 9 0 0 0 12 21"></path>
                <path d="M15.44 20.31a9 9 0 0 0 2.92-1.95"></path>
                <path d="M20.31 15.44A9 9 0 0 0 21 12"></path>
                <path d="M20.31 8.56a9 9 0 0 0-1.95-2.92"></path>
                <path d="M15.44 3.69A9 9 0 0 0 12 3"></path>
                <circle cx="12" cy="12" r="2"></circle>
              </svg>
            </motion.div>
          </motion.div>
        </div>

        {/* Background animated elements */}
        <motion.div
          className="absolute top-1/4 left-10 w-12 h-12 rounded-full bg-teal-100 opacity-40"
          animate={{
            y: [0, 20, 0],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-10 w-16 h-16 rounded-full bg-teal-200 opacity-40"
          animate={{
            y: [0, -30, 0],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 7,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute top-2/3 left-1/4 w-8 h-8 rounded-full bg-teal-300 opacity-30"
          animate={{
            x: [0, 20, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      </main>

      {/* Footer */}
      <footer className="w-full py-6 px-6 text-center text-gray-500">
        <p>© {new Date().getFullYear()} SOWAKA. All rights reserved.</p>
      </footer>
    </div>
  )
}
