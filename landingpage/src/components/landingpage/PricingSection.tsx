
import {Button, motion,Card,CardContent,CheckCircle } from '../index'

const PricingSection = () => {
  return (
    

<section id="pricing" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600">
              Choose the plan that works best for your healthcare practice or personal wellness journey.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Basic",
                price: "$29",
                description: "Perfect for individual healthcare providers",
                features: ["Up to 5 seminars per month", "Basic analytics", "Email support", "Recorded sessions"],
              },
              {
                name: "Professional",
                price: "$79",
                description: "Ideal for small practices and clinics",
                features: [
                  "Unlimited seminars",
                  "Advanced analytics",
                  "Priority support",
                  "Custom branding",
                  "Patient engagement tools",
                ],
                popular: true,
              },
              {
                name: "Enterprise",
                price: "Custom",
                description: "For hospitals and large healthcare networks",
                features: [
                  "Unlimited everything",
                  "Dedicated account manager",
                  "API access",
                  "SSO integration",
                  "Custom development",
                ],
              },
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex"
              >
                <Card
                  className={`flex flex-col h-full border-none shadow-lg ${plan.popular ? "ring-2 ring-teal-500" : ""}`}
                >
                  {plan.popular && (
                    <div className="bg-teal-500 text-white text-center py-1 text-sm font-medium">Most Popular</div>
                  )}
                  <CardContent className={`p-8 flex flex-col h-full ${plan.popular ? "" : "pt-9"}`}>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                      <div className="flex items-baseline mb-4">
                        <span className="text-4xl font-bold">{plan.price}</span>
                        {plan.price !== "Custom" && <span className="text-gray-500 ml-2">/month</span>}
                      </div>
                      <p className="text-gray-600 mb-6">{plan.description}</p>
                    </div>

                    <div className="mb-8 flex-grow">
                      <ul className="space-y-3">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button
                      className={`w-full ${plan.popular ? "bg-teal-600 hover:bg-teal-700" : ""}`}
                      variant={plan.popular ? "default" : "outline"}
                    >
                      {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default PricingSection


