// import { ArrowRight } from 'lucide-react'
// import {motion } from '../index'

// const HowItWorksSection = () => {
//   return (
//     <section id="how-it-works" className="py-20 bg-teal-50">
//         <div className="container mx-auto px-4">
//           <motion.div
//             className="text-center max-w-3xl mx-auto mb-16"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">How SOWAKA Works</h2>
//             <p className="text-xl text-gray-600">
//               A simple process designed to connect healthcare providers with patients seeking wellness guidance.
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
//             {[
//               {
//                 step: "01",
//                 title: "Create or Find Seminars",
//                 description: "Doctors create wellness seminars while patients discover relevant health topics.",
//                 delay: 0,
//               },
//               {
//                 step: "02",
//                 title: "Register & Prepare",
//                 description:
//                   "Patients register for seminars and receive preparation materials from healthcare providers.",
//                 delay: 0.2,
//               },
//               {
//                 step: "03",
//                 title: "Attend & Follow Up",
//                 description: "Participate in live or recorded sessions with personalized follow-up resources.",
//                 delay: 0.4,
//               },
//             ].map((item, index) => (
//               <motion.div
//                 key={index}
//                 className="relative"
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: item.delay }}
//               >
//                 <div className="bg-white rounded-xl p-8 shadow-lg h-full">
//                   <div className="text-5xl font-bold text-teal-200 mb-4">{item.step}</div>
//                   <h3 className="text-xl font-bold mb-3">{item.title}</h3>
//                   <p className="text-gray-600">{item.description}</p>
//                 </div>
//                 {index < 2 && (
//                   <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
//                     <ArrowRight className="h-8 w-8 text-teal-300" />
//                   </div>
//                 )}
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
//   )
// }

// export default HowItWorksSection


"use client"

import { ArrowRight, UserPlus, RefreshCw, Users, Shield, Zap, Gift } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

const HowItWorksSection = () => {
  const steps = [
    {
      step: "01",
      icon: UserPlus,
      title: "Register for Free",
      description: "Sign up effortlessly and access all resources designed to support your health journey.",
      highlight: "100% Free Registration",
      color: "from-emerald-500 to-teal-500",
    },
    {
      step: "02",
      icon: RefreshCw,
      title: "Profile Updates Every Six Months",
      description: "Share your progress, reflect on improvements, and celebrate your health achievements.",
      highlight: "Stay Connected",
      color: "from-blue-500 to-cyan-500",
    },
    {
      step: "03",
      icon: Users,
      title: "Stay Engaged & Empowered",
      description: "Share your goals and impact with others while maintaining overall wellness in our community.",
      highlight: "Community Support",
      color: "from-purple-500 to-pink-500",
    },
    {
      step: "04",
      icon: Shield,
      title: "Flexible Identity Options",
      description: "Log in anonymously or reveal your identity—your choice, your comfort, full control.",
      highlight: "Your Privacy",
      color: "from-orange-500 to-red-500",
    },
    {
      step: "05",
      icon: Zap,
      title: "Access All Resources Freely",
      description:
        "Enjoy full access to health tools, support networks, and valuable insights regardless of how you sign in.",
      highlight: "Full Access",
      color: "from-indigo-500 to-purple-500",
    },
  ]

  return (
    <section
      id="how-it-works"
      className="py-20 bg-gradient-to-br from-slate-50 via-white to-teal-50 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-64 h-64 bg-teal-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <motion.div
          className="text-center max-w-4xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 bg-teal-100 border border-teal-200 rounded-full text-sm font-medium text-teal-700 mb-6"
          >
            <Gift className="w-4 h-4 mr-2" />
            Join a User-Friendly Health Platform
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            How Our Platform{" "}
            <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">Empowers</span>{" "}
            You
          </h2>

          <p className="text-xl text-slate-600 leading-relaxed mb-8">
            Free registration, full empowerment. A simple process designed to support your health journey while keeping
            you connected to a thriving wellness community.
          </p>

          {/* Key Benefits Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white p-6 rounded-2xl shadow-lg"
          >
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                <span className="font-semibold">Free Registration</span>
              </div>
              <div className="hidden md:block w-px h-6 bg-white/30"></div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse delay-500"></div>
                <span className="font-semibold">No Membership Fee*</span>
              </div>
              <div className="hidden md:block w-px h-6 bg-white/30"></div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse delay-1000"></div>
                <span className="font-semibold">Full Access</span>
              </div>
            </div>
            <p className="text-sm text-white/80 mt-3 text-center">
              *Stay active with profile updates every 6 months to maintain free access
            </p>
          </motion.div>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {steps.map((item, index) => {
            const IconComponent = item.icon
            return (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full border border-slate-100 group-hover:border-teal-200">
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-6xl font-bold text-slate-100 group-hover:text-teal-100 transition-colors">
                      {item.step}
                    </div>
                    <div
                      className={`p-4 rounded-xl bg-gradient-to-r ${item.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <div className="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-sm font-medium rounded-full">
                      {item.highlight}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>

                {/* Connection Arrow - Only for larger screens and not last item */}
                {index < steps.length - 1 && index % 3 !== 2 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                    >
                      <ArrowRight className="h-8 w-8 text-teal-300 group-hover:text-teal-500 transition-colors" />
                    </motion.div>
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-12 text-white"
        >
          <h3 className="text-3xl font-bold mb-4">Ready to Empower Your Health Journey?</h3>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Join thousands of users who are taking control of their wellness with our comprehensive platform.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Start Your Free Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-slate-900 transition-all duration-300 bg-transparent"
            >
              Learn More
            </Button>
          </div>

          <div className="mt-8 flex items-center justify-center gap-8 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>Always Free</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span>Privacy Protected</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              <span>Full Access</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HowItWorksSection
