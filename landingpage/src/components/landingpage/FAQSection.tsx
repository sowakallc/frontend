import { motion, ChevronDown} from '../index'

const FAQSection = () => {
  return (
    <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Find answers to common questions about our platform.</p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "How do I create my first wellness seminar?",
                answer:
                  "After signing up as a healthcare provider, you can create your first seminar by navigating to the 'Seminars' section and clicking 'Create New'. Our intuitive wizard will guide you through setting up dates, topics, and materials.",
              },
              {
                question: "Can patients access recorded seminars?",
                answer:
                  "Yes, all seminars are automatically recorded (unless disabled by the presenter) and made available to registered participants. Patients can access these recordings from their dashboard for a period determined by the healthcare provider.",
              },
              {
                question: "Is the platform HIPAA compliant?",
                answer:
                  "Absolutely. WellnessConnect is fully HIPAA compliant and we implement industry-leading security measures to protect all patient and provider data. We provide BAAs for healthcare organizations as needed.",
              },
              {
                question: "Can I integrate this with my existing EHR system?",
                answer:
                  "Yes, WellnessConnect offers API integration with major EHR systems. Our Enterprise plan includes dedicated support for custom integrations with your specific healthcare technology stack.",
              },
              {
                question: "How do patients find and register for seminars?",
                answer:
                  "Patients can discover seminars through our searchable directory, filtering by specialty, topic, or provider. Registration is a simple one-click process, and patients receive confirmation and reminder notifications automatically.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="mb-6"
              >
                <div className="border-b pb-6">
                  <div className="flex justify-between items-center cursor-pointer">
                    <h3 className="text-xl font-medium">{faq.question}</h3>
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  </div>
                  <div className="mt-3">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default FAQSection