import { motion, Button} from '../index'

const CTASection = () => {
  return (
    <section className="py-20 bg-teal-600 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform your wellness coordination?</h2>
            <p className="text-xl mb-8 text-teal-100">
              Join thousands of healthcare providers and patients already using WellnessConnect.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-teal-600 hover:bg-teal-50">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-teal-700">
                Schedule Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
  )
}

export default CTASection