import {Image, motion,Card,CardContent } from '../index'

const TestimonialSection = () => {
  return (
    <section id="testimonials" className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What Our Users Say</h2>
            <p className="text-xl text-gray-600">
              Hear from healthcare professionals and patients who have transformed their wellness coordination.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                quote:
                  "WellnessConnect has revolutionized how I conduct patient education seminars. The engagement tools and analytics help me deliver more effective wellness programs.",
                name: "Dr. Sarah Johnson",
                role: "Cardiologist",
                image: "images/placeholder.svg?height=80&width=80",
              },
              {
                quote:
                  "As someone managing a chronic condition, finding relevant seminars from trusted healthcare providers has been invaluable. The platform is intuitive and the recorded sessions are a lifesaver.",
                name: "Michael Chen",
                role: "Patient",
                image: "images/placeholder.svg?height=80&width=80",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="h-full border-none shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex flex-col h-full">
                      <div className="mb-6">
                        <svg className="h-8 w-8 text-teal-500 mb-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                        <p className="text-gray-700 italic">{testimonial.quote}</p>
                      </div>
                      <div className="mt-auto flex items-center">
                        <Image
                          src={testimonial.image || "images/placeholder.svg"}
                          alt={testimonial.name}
                          width={80}
                          height={80}
                          className="rounded-full mr-4"
                        />
                        <div>
                          <p className="font-bold">{testimonial.name}</p>
                          <p className="text-gray-500">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default TestimonialSection