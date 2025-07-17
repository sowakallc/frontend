
// import {Button, motion,Card,CardContent,CheckCircle } from '../index'

// const PricingSection = () => {
//   return (
    

// <section id="pricing" className="py-20 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <motion.div
//             className="text-center max-w-3xl mx-auto mb-16"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Simple, Transparent Pricing</h2>
//             <p className="text-xl text-gray-600">
//               Choose the plan that works best for your healthcare practice or personal wellness journey.
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
//             {[
//               {
//                 name: "Basic",
//                 price: "$29",
//                 description: "Perfect for individual healthcare providers",
//                 features: ["Up to 5 seminars per month", "Basic analytics", "Email support", "Recorded sessions"],
//               },
//               {
//                 name: "Professional",
//                 price: "$79",
//                 description: "Ideal for small practices and clinics",
//                 features: [
//                   "Unlimited seminars",
//                   "Advanced analytics",
//                   "Priority support",
//                   "Custom branding",
//                   "Patient engagement tools",
//                 ],
//                 popular: true,
//               },
//               {
//                 name: "Enterprise",
//                 price: "Custom",
//                 description: "For hospitals and large healthcare networks",
//                 features: [
//                   "Unlimited everything",
//                   "Dedicated account manager",
//                   "API access",
//                   "SSO integration",
//                   "Custom development",
//                 ],
//               },
//             ].map((plan, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: index * 0.2 }}
//                 className="flex"
//               >
//                 <Card
//                   className={`flex flex-col h-full border-none shadow-lg ${plan.popular ? "ring-2 ring-teal-500" : ""}`}
//                 >
//                   {plan.popular && (
//                     <div className="bg-teal-500 text-white text-center py-1 text-sm font-medium">Most Popular</div>
//                   )}
//                   <CardContent className={`p-8 flex flex-col h-full ${plan.popular ? "" : "pt-9"}`}>
//                     <div>
//                       <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
//                       <div className="flex items-baseline mb-4">
//                         <span className="text-4xl font-bold">{plan.price}</span>
//                         {plan.price !== "Custom" && <span className="text-gray-500 ml-2">/month</span>}
//                       </div>
//                       <p className="text-gray-600 mb-6">{plan.description}</p>
//                     </div>

//                     <div className="mb-8 flex-grow">
//                       <ul className="space-y-3">
//                         {plan.features.map((feature, i) => (
//                           <li key={i} className="flex items-center">
//                             <CheckCircle className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0" />
//                             <span>{feature}</span>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>

//                     <Button
//                       className={`w-full ${plan.popular ? "bg-teal-600 hover:bg-teal-700" : ""}`}
//                       variant={plan.popular ? "default" : "outline"}
//                     >
//                       {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
//                     </Button>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
//   )
// }

// export default PricingSection



"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Clock, Star } from "lucide-react"
import { motion } from "framer-motion"

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
            Free healthcare management for patients, with premium features launching soon.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              name: "Patient - Free",
              price: "Free",
              description: "Complete healthcare management at no cost",
              features: [
                "Unlimited health calendar access",
                "Medical appointment reminders",
                "Health goal tracking",
                "Basic analytics dashboard",
                "Secure data storage",
                "Mobile app access",
              ],
              popular: true,
              badge: "Always Free",
            },
            {
              name: "Patient Premium",
              price: "Coming Soon",
              description: "Enhanced features for comprehensive health management",
              features: [
                "Healthcare Provider Direct Interaction",
                "Advanced health calendar with smart notifications",
                "Real-time health analytics & insights",
                "Automated medical record access",
                "Personalized health recommendations",
                "Priority customer support",
              ],
              comingSoon: true,
              badge: "Launch Soon",
            },
            {
              name: "Healthcare Provider",
              price: "$99",
              description: "Professional tools for healthcare practitioners",
              features: [
                "Patient management dashboard",
                "Direct patient communication",
                "Appointment scheduling system",
                "Medical record integration",
                "Analytics & reporting tools",
                "HIPAA compliant platform",
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
                className={`flex flex-col h-full border-none shadow-lg ${
                  plan.popular ? "ring-2 ring-teal-500" : ""
                } ${plan.comingSoon ? "ring-2 ring-orange-400" : ""}`}
              >
                {(plan.popular || plan.comingSoon) && (
                  <div
                    className={`text-white text-center py-2 text-sm font-medium ${
                      plan.popular ? "bg-teal-500" : "bg-orange-400"
                    }`}
                  >
                    {plan.badge}
                  </div>
                )}

                <CardContent className={`p-8 flex flex-col h-full ${plan.popular || plan.comingSoon ? "" : "pt-10"}`}>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <div className="flex items-baseline mb-4">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      {plan.price !== "Free" && plan.price !== "Coming Soon" && (
                        <span className="text-gray-500 ml-2">/month</span>
                      )}
                    </div>
                    <p className="text-gray-600 mb-6">{plan.description}</p>
                  </div>

                  <div className="mb-8 flex-grow">
                    <ul className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          {plan.comingSoon ? (
                            <Clock className="h-5 w-5 text-orange-400 mr-2 flex-shrink-0 mt-0.5" />
                          ) : (
                            <CheckCircle className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
                          )}
                          <span className={plan.comingSoon ? "text-gray-600" : ""}>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "bg-teal-600 hover:bg-teal-700"
                        : plan.comingSoon
                          ? "bg-orange-400 hover:bg-orange-500"
                          : ""
                    }`}
                    variant={plan.popular || plan.comingSoon ? "default" : "outline"}
                    disabled={plan.comingSoon}
                  >
                    {plan.comingSoon ? (
                      <div className="flex items-center">
                        <Star className="w-4 h-4 mr-2" />
                        Notify Me
                      </div>
                    ) : plan.price === "Free" ? (
                      "Get Started Free"
                    ) : (
                      "Contact Sales"
                    )}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Info Section */}
        <motion.div
          className="mt-16 text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="bg-white rounded-lg p-8 shadow-md">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Why Our Patient Services Are Free</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              We believe healthcare management should be accessible to everyone. Our free patient services include
              automated health calendar management, appointment reminders, and health goal tracking -{" "}
              <strong>no typing or manual data entry required</strong>. Simply connect your healthcare providers and let
              our platform handle the rest.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default PricingSection
