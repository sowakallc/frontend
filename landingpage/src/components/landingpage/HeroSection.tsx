// import { ArrowRight, Calendar, Users } from 'lucide-react'
// import {Image, motion,Button } from '../index'

// const HeroSection = () => {
//   return (
//     <section className="pt-32 pb-20 md:pt-40 md:pb-32">
//     <div className="container mx-auto px-4">
//       <div className="flex flex-col md:flex-row items-center gap-12">
//         <motion.div
//           className="md:w-1/2"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mb-6">
//             Connecting <span className="text-teal-600">Patients</span> and{" "}
//             <span className="text-teal-600">Doctors</span> for Better Wellness
//           </h1>
//           <p className="text-xl text-gray-600 mb-8">
//             A platform where healthcare professionals can conduct seminars and patients can easily register, attend,
//             and improve their wellness journey.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4">
//             <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
//               Watch Demo
//               <ArrowRight className="ml-2 h-5 w-5" />
//             </Button>
            
//           </div>
//           <div className="mt-8 flex items-center gap-2">
//             <div className="flex -space-x-2">
//               {[1, 2, 3, 4].map((i) => (
//                 <div key={i} className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white" />
//               ))}
//             </div>
//             <p className="text-sm text-gray-600">
//               <span className="font-bold">1,000+</span> peer population globally joined, also divide later nationally, globally and locally
//             </p>
//           </div>
//         </motion.div>

//         <motion.div
//           className="md:w-1/2"
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//         >
//           <div className="relative">
//             <div className="absolute -inset-4 bg-teal-100 rounded-xl rotate-3"></div>
//             <div className="absolute -inset-4 bg-teal-200 rounded-xl -rotate-3 opacity-70"></div>
//             <div className="relative rounded-xl overflow-hidden shadow-2xl">
//               <Image
//                 src="images/placeholder.svg?height=600&width=800"
//                 alt="Doctor and patient using the platform"
//                 width={800}
//                 height={600}
//                 className="w-full h-auto"
//               />
//             </div>

//             <motion.div
//               className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg"
//               initial={{ y: 20, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ delay: 0.6 }}
//             >
//               <div className="flex items-center gap-3">
//                 <div className="bg-teal-100 p-2 rounded-full">
//                   <Calendar className="h-6 w-6 text-teal-600" />
//                 </div>
//                 <div>
//                   <p className="font-medium">Next Seminar</p>
//                   <p className="text-sm text-gray-500">Tomorrow, 3:00 PM</p>
//                 </div>
//               </div>
//             </motion.div>

//             <motion.div
//               className="absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-lg"
//               initial={{ y: -20, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ delay: 0.8 }}
//             >
//               <div className="flex items-center gap-3">
//                 <div className="bg-teal-100 p-2 rounded-full">
//                   <Users className="h-6 w-6 text-teal-600" />
//                 </div>
//                 <div>
//                   <p className="font-medium">Active Users</p>
//                   <p className="text-sm text-gray-500">5.2k online now</p>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   </section>
//   )
// }

// export default HeroSection

"use client"

import { ArrowRight, Calendar, Users, Play, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Image from "next/image"

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-teal-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-2000"></div>
      </div>

      <div className="relative container mx-auto px-4 py-16 lg:py-12">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          {/* Left Content */}
          <motion.div
            className="lg:w-1/2 space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-teal-50 border border-teal-200 rounded-full text-sm font-medium text-teal-700"
            >
              <span className="w-2 h-2 bg-teal-500 rounded-full mr-2 animate-pulse"></span>
              Now Live: Global Health Platform
            </motion.div>

            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 leading-[1.1] tracking-tight">
                Empowering{" "}
                <span className="relative">
                  <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                    Health
                  </span>
                  <motion.div
                    className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-teal-200 to-cyan-200 rounded-full -z-10"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                  />
                </span>{" "}
                for Everyone, Everywhere.
              </h1>

              <div className="space-y-4">
                <p className="text-xl text-slate-600 leading-relaxed">
                  A transformative platform connecting individuals and professionals to improve global health outcomes.
                </p>
                <p className="text-lg text-slate-500 leading-relaxed">
                  Join us in revolutionizing your health and well-being through knowledge, care, and community.
                </p>
              </div>
            </div>

            {/* Features List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-3"
            >
              {[
                "Expert-Led Health Education",
                "Global Support Network (Peers, Patient Groups & Researchers)",
                "Personalized Health Tools",
                "Collaborative knowledge hub for professionals & innovators",
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-3 text-slate-700"
                >
                  <CheckCircle className="h-5 w-5 text-teal-600 flex-shrink-0" />
                  <span className="text-base">{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-slate-300 hover:border-teal-600 hover:text-teal-600 transition-all duration-300 bg-transparent"
              >
                Explore Platform
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-4 pt-4"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-400 to-cyan-500 border-3 border-white shadow-md flex items-center justify-center text-white text-sm font-semibold"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div className="text-slate-600">
                <p className="font-semibold text-slate-900">10,000+</p>
                <p className="text-sm">healthcare professionals joined</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image Section */}
          <motion.div
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="relative">
              {/* Background Decorations */}
              <div className="absolute -inset-8 bg-gradient-to-r from-teal-100 to-cyan-100 rounded-3xl rotate-3 opacity-60"></div>
              <div className="absolute -inset-6 bg-gradient-to-r from-teal-200 to-cyan-200 rounded-3xl -rotate-2 opacity-40"></div>

              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white p-2">
                <div className="rounded-xl overflow-hidden">
                  <Image
                    src="images/placeholder.svg?height=600&width=800"
                    alt="Healthcare professionals using the platform"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Floating Cards */}
              <motion.div
                className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-slate-100"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-br from-teal-500 to-cyan-500 p-3 rounded-xl">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Next Seminar</p>
                    <p className="text-sm text-slate-500">Tomorrow, 3:00 PM EST</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -top-8 -right-8 bg-white p-6 rounded-2xl shadow-xl border border-slate-100"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-3 rounded-xl">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Active Users</p>
                    <p className="text-sm text-slate-500">12.4k online now</p>
                  </div>
                </div>
              </motion.div>

              {/* Additional floating element */}
              <motion.div
                className="absolute top-1/2 -left-4 bg-gradient-to-r from-green-400 to-emerald-500 p-4 rounded-full shadow-lg"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.1, rotate: 10 }}
              >
                <CheckCircle className="h-6 w-6 text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
