"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Users, Lightbulb, Heart, Check, ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"

const CTASection = () => {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set())

  const toggleSection = () => {
    setExpandedSections((prev) => {
      const newSet = new Set(prev)
      if (newSet.size === 3) {
        // If all are expanded, collapse all
        return new Set()
      } else {
        // Expand all sections
        return new Set(['connect', 'collaborate', 'empower'])
      }
    })
  }

  const features = {
    connect: [
      "Build authentic, professional relationships that matter",
      "Instantly access detailed profiles with credentials, interests, and availability",
      "Effortlessly filter by expertise, location, or therapeutic area",
      "Identify and connect with local collaborators",
      "Chat directly with peers and innovators",
      "Schedule Zoom calls or phone chats in just one click",
    ],
    collaborate: [
      "Stay informed on local health needs through shared insights",
      "Co-create solutions and align on community education and resource priorities",
      "Upload and access educational materials in one centralized space",
    ],
    empower: [
      "Share how you can contribute—from workshops to webinars to clinical insights",
      "Contribute to a growing library Lowry of community-driven health resources",
    ],
  }

  return (
    <section className="py-20 bg-teal-600 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10">
          <Users className="w-16 h-16" />
        </div>
        <div className="absolute top-32 right-20">
          <Lightbulb className="w-12 h-12" />
        </div>
        <div className="absolute bottom-20 left-1/4">
          <Heart className="w-14 h-14" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          className="max-w-5xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Join the Movement</h2>
            <p className="text-xl md:text-2xl text-teal-100 font-medium">Built for Connection. Designed for Impact.</p>
          </motion.div>

          <motion.p
            className="text-lg md:text-xl mb-8 text-teal-100 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Be part of a growing network of healthcare professionals and innovators shaping the future of
            health—together.
          </motion.p>

          <motion.div
            className="grid md:grid-cols-3 gap-6 mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {/* Connect with Purpose */}
            <div className="bg-teal-700/30 rounded-lg p-6 text-left backdrop-blur-sm">
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={toggleSection}
              >
                <div className="flex items-center">
                  <Users className="w-6 h-6 mr-3 text-teal-200" />
                  <h3 className="font-semibold text-lg">Connect with Purpose</h3>
                </div>
                {expandedSections.has("connect") ? (
                  <ChevronUp className="w-5 h-5 text-teal-200" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-teal-200" />
                )}
              </div>

              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: expandedSections.has("connect") ? "auto" : 0,
                  opacity: expandedSections.has("connect") ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <ul className="mt-4 space-y-2">
                  {features.connect.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="w-4 h-4 text-teal-200 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-sm text-teal-50">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Collaborate & Co-create */}
            <div className="bg-teal-700/30 rounded-lg p-6 text-left backdrop-blur-sm">
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={toggleSection}
              >
                <div className="flex items-center">
                  <Lightbulb className="w-6 h-6 mr-3 text-teal-200" />
                  <h3 className="font-semibold text-lg">Collaborate & Co-create</h3>
                </div>
                {expandedSections.has("collaborate") ? (
                  <ChevronUp className="w-5 h-5 text-teal-200" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-teal-200" />
                )}
              </div>

              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: expandedSections.has("collaborate") ? "auto" : 0,
                  opacity: expandedSections.has("collaborate") ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <ul className="mt-4 space-y-2">
                  {features.collaborate.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="w-4 h-4 text-teal-200 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-sm text-teal-50">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Empower Communities */}
            <div className="bg-teal-700/30 rounded-lg p-6 text-left backdrop-blur-sm">
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={toggleSection}
              >
                <div className="flex items-center">
                  <Heart className="w-6 h-6 mr-3 text-teal-200" />
                  <h3 className="font-semibold text-lg">Empower Communities</h3>
                </div>
                {expandedSections.has("empower") ? (
                  <ChevronUp className="w-5 h-5 text-teal-200" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-teal-200" />
                )}
              </div>

              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: expandedSections.has("empower") ? "auto" : 0,
                  opacity: expandedSections.has("empower") ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <ul className="mt-4 space-y-2">
                  {features.empower.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="w-4 h-4 text-teal-200 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-sm text-teal-50">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Button size="lg" className="bg-white text-teal-600 hover:bg-teal-50 font-semibold px-8 py-3">
              Join SOWAKA! Connect
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-teal-700 font-semibold px-8 py-3 bg-transparent"
            >
              Learn More
            </Button>
          </motion.div>

          <motion.p
            className="mt-6 text-teal-200 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            For healthcare professionals and innovators ready to make a difference
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

export default CTASection