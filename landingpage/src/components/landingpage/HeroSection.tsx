import { ArrowRight, Calendar, Users } from 'lucide-react'
import {Image, motion,Button } from '../index'

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mb-6">
            Connecting <span className="text-teal-600">Patients</span> and{" "}
            <span className="text-teal-600">Doctors</span> for Better Wellness
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            A platform where healthcare professionals can conduct seminars and patients can easily register, attend,
            and improve their wellness journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline">
              Watch Demo
            </Button>
          </div>
          <div className="mt-8 flex items-center gap-2">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white" />
              ))}
            </div>
            <p className="text-sm text-gray-600">
              <span className="font-bold">1,000+</span> healthcare professionals already joined
            </p>
          </div>
        </motion.div>

        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-teal-100 rounded-xl rotate-3"></div>
            <div className="absolute -inset-4 bg-teal-200 rounded-xl -rotate-3 opacity-70"></div>
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="images/placeholder.svg?height=600&width=800"
                alt="Doctor and patient using the platform"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>

            <motion.div
              className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <div className="flex items-center gap-3">
                <div className="bg-teal-100 p-2 rounded-full">
                  <Calendar className="h-6 w-6 text-teal-600" />
                </div>
                <div>
                  <p className="font-medium">Next Seminar</p>
                  <p className="text-sm text-gray-500">Tomorrow, 3:00 PM</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-lg"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <div className="flex items-center gap-3">
                <div className="bg-teal-100 p-2 rounded-full">
                  <Users className="h-6 w-6 text-teal-600" />
                </div>
                <div>
                  <p className="font-medium">Active Users</p>
                  <p className="text-sm text-gray-500">5.2k online now</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
  )
}

export default HeroSection