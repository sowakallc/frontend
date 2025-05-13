"use client"

import { useState, useEffect } from "react"
import { Link, Image,motion,Button} from '../components/index'
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
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
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
        <div className="container mx-auto flex items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2">
            <motion.div initial={{ rotate: -10 }} animate={{ rotate: 0 }} transition={{ duration: 0.5 }}>
              <Image
                src="images/placeholder.svg?height=40&width=40"
                alt="Sowaka Logo"
                width={40}
                height={40}
                className="rounded-lg"
              />
            </motion.div>
            <span className="font-bold text-xl text-teal-700">SOWAKA</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-gray-600 hover:text-teal-600 transition-colors">
              Features
            </Link>
            <Link href="#how-it-works" className="text-gray-600 hover:text-teal-600 transition-colors">
              How It Works
            </Link>
            <Link href="#pricing" className="text-gray-600 hover:text-teal-600 transition-colors">
              Pricing
            </Link>
            <Link href="#testimonials" className="text-gray-600 hover:text-teal-600 transition-colors">
              Testimonials
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link href='/login'>
            <Button variant="outline" className="hidden sm:flex">
              Log in
            </Button>
            </Link>
            <Button className="bg-teal-600 hover:bg-teal-700">Sign up free</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <HeroSection />

      {/* Trusted By Section */}
      <TrustedBySection />

      {/* Features Section */}
      <FeatureSection />

      {/* How It Works Section */}
      <HowItWorksSection />

      {/* Testimonials Section */}
      <TestimonialSection />

      {/* Pricing Section */}
      <PricingSection />

      {/* FAQ Section */}
     <FAQSection />

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </div>
  )
}
