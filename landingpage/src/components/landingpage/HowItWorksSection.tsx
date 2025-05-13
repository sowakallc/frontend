import { ArrowRight } from 'lucide-react'
import {motion } from '../index'

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 bg-teal-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">How SOWAKA Works</h2>
            <p className="text-xl text-gray-600">
              A simple process designed to connect healthcare providers with patients seeking wellness guidance.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "01",
                title: "Create or Find Seminars",
                description: "Doctors create wellness seminars while patients discover relevant health topics.",
                delay: 0,
              },
              {
                step: "02",
                title: "Register & Prepare",
                description:
                  "Patients register for seminars and receive preparation materials from healthcare providers.",
                delay: 0.2,
              },
              {
                step: "03",
                title: "Attend & Follow Up",
                description: "Participate in live or recorded sessions with personalized follow-up resources.",
                delay: 0.4,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: item.delay }}
              >
                <div className="bg-white rounded-xl p-8 shadow-lg h-full">
                  <div className="text-5xl font-bold text-teal-200 mb-4">{item.step}</div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-8 w-8 text-teal-300" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default HowItWorksSection