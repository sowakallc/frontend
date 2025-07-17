"use client"

import { useState, useEffect } from "react"
import { Link, Image, motion, Button } from "../components/index"
import Footer from "../components/landingpage/Footer"
import CTASection from "../components/landingpage/CTASection"
import FAQSection from "../components/landingpage/FAQSection"
import PricingSection from "../components/landingpage/PricingSection"
import TestimonialSection from "../components/landingpage/TestimonialSection"
import HowItWorksSection from "../components/landingpage/HowItWorksSection"
import FeatureSection from "../components/landingpage/FeatureSection"
import TrustedBySection from "../components/landingpage/TrustedBySection"
import HeroSection from "../components/landingpage/HeroSection"

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
      {/* Navbar */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
          {/* Logo and Brand */}
          <Link href="/" className="flex items-center gap-3">
            <motion.div
              initial={{ rotate: -10 }}
              animate={{ rotate: 0 }}
              transition={{ duration: 0.5 }}
              className="flex-shrink-0"
            >
              <Image
                src="images/placeholder.svg?height=60&width=60"
                alt="Sowaka Logo"
                width={60}
                height={60}
                className="rounded-lg"
              />
            </motion.div>

            <div className="flex flex-col leading-tight">
              <span className="font-semibold text-lg sm:text-xl text-teal-700">
                SOWAKA HEALTH
              </span>
              <span className="text-sm text-gray-500 max-w-xs">
                {/* Recognizes the importance of human interaction and touch for better health! */}
                State of well-being, Health & Happiness
              </span>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link href="#features" className="text-gray-700 hover:text-teal-600 transition-colors">
              Features
            </Link>
            <Link href="#how-it-works" className="text-gray-700 hover:text-teal-600 transition-colors">
              How It Works
            </Link>
            <Link href="#testimonials" className="text-gray-700 hover:text-teal-600 transition-colors">
              Testimonials
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Link href="/login">
              <Button variant="outline" className="hidden sm:inline-flex">
                Log in
              </Button>
            </Link>
            <Button className="bg-teal-600 hover:bg-teal-700 transition-colors">
              Sign up free
            </Button>
          </div>
        </div>
      </header>

      {/* Page Sections */}
      <main className="pt-28 sm:pt-32">
        <HeroSection />
        <TrustedBySection />
        <FeatureSection />
        <HowItWorksSection />
        <TestimonialSection />
        <PricingSection />
        {/* <FAQSection /> */}
        <CTASection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
