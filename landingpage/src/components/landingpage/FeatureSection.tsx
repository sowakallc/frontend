import {Image, motion,Tabs,TabsList,TabsTrigger,TabsContent,Card,CardContent,Calendar, CheckCircle, Users, Video } from '../index'

const FeatureSection = () => {
  return (
    <section id="features" className="py-20 md:py-32">
    <div className="container mx-auto px-4">
      <motion.div
        className="text-center max-w-3xl mx-auto mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Website features are designed to empower your health journey, leading to a healthier and happier you !
        </h2>
        <p className="text-xl text-gray-600">
          Provide cost-effective care to all, by encouraging self-education and facilitating effective communication, the platform
has the potential to significantly decrease unnecessary healthcare usage, including additional trips to the clinic
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        <Tabs defaultValue="doctors" className="w-full">
          <TabsList className="w-full grid grid-cols-2 mb-12 p-1 bg-gray-100 rounded-lg">
            <TabsTrigger
              value="doctors"
              className="text-lg py-3 data-[state=active]:bg-white data-[state=active]:text-teal-600 data-[state=active]:shadow-sm rounded-md transition-all"
            >
              For Doctors
            </TabsTrigger>
            <TabsTrigger
              value="patients"
              className="text-lg py-3 data-[state=active]:bg-white data-[state=active]:text-teal-600 data-[state=active]:shadow-sm rounded-md transition-all"
            >
              For Patients
            </TabsTrigger>
          </TabsList>

          <TabsContent value="doctors">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Seminar Management",
                  description:
                    "Create and manage virtual or in-person seminars with easy scheduling tools and automated reminders.",
                  icon: <Calendar className="h-10 w-10 text-teal-600" />,
                },
                {
                  title: "Patient Engagement",
                  description:
                    "Interact with patients through Q&A sessions, polls, and personalized follow-ups to enhance participation.",
                  icon: <Users className="h-10 w-10 text-teal-600" />,
                },
                {
                  title: "Analytics Dashboard",
                  description:
                    "Track attendance, engagement metrics, and patient satisfaction scores with detailed visual reports.",
                  icon: <Video className="h-10 w-10 text-teal-600" />,
                },
                {
                  title: "Resource Library",
                  description:
                    "Upload and organize educational materials, presentations, and handouts for your seminars.",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-10 w-10 text-teal-600"
                    >
                      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
                    </svg>
                  ),
                },
                {
                  title: "Automated Follow-ups",
                  description:
                    "Schedule and send personalized follow-up communications based on patient attendance and engagement.",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-10 w-10 text-teal-600"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  ),
                },
                {
                  title: "Certification Management",
                  description:
                    "Create and distribute certificates of completion for patients who attend your wellness seminars.",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-10 w-10 text-teal-600"
                    >
                      <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
                      <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
                    </svg>
                  ),
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="p-6">
                      <div className="bg-teal-50 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 bg-teal-50 rounded-xl p-6 md:p-8">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="md:w-1/3">
                  <Image
                    src="images/placeholder.svg?height=300&width=300"
                    alt="Doctor dashboard preview"
                    width={300}
                    height={300}
                    className="rounded-lg shadow-md"
                  />
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold mb-4">Comprehensive Doctor Dashboard</h3>
                  <p className="text-lg mb-4">
                    Manage all aspects of your wellness seminars from a single, intuitive interface designed
                    specifically for healthcare providers.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-teal-600 mr-2 mt-1" />
                      <span>Schedule and manage multiple seminar series simultaneously</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-teal-600 mr-2 mt-1" />
                      <span>Track patient engagement and participation metrics</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-teal-600 mr-2 mt-1" />
                      <span>Collect and analyze feedback to improve future sessions</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-teal-600 mr-2 mt-1" />
                      <span>Generate detailed reports for practice management</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="patients">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Seminar Discovery",
                  description:
                    "Find relevant health seminars based on your interests, conditions, and wellness goals with smart recommendations.",
                  icon: <Calendar className="h-10 w-10 text-teal-600" />,
                },
                {
                  title: "Easy Registration",
                  description:
                    "One-click registration for seminars with automatic calendar integration and timely reminders.",
                  icon: <CheckCircle className="h-10 w-10 text-teal-600" />,
                },
                {
                  title: "Recorded Sessions",
                  description:
                    "Access recorded seminars anytime if you miss the live event, with bookmarking and note-taking features.",
                  icon: <Video className="h-10 w-10 text-teal-600" />,
                },
                {
                  title: "Personal Health Journal",
                  description:
                    "Track your wellness journey with notes, progress indicators, and insights from attended seminars.",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-10 w-10 text-teal-600"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                  ),
                },
                {
                  title: "Direct Provider Communication",
                  description:
                    "Ask questions and receive personalized guidance from healthcare providers before and after seminars.",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-10 w-10 text-teal-600"
                    >
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                  ),
                },
                {
                  title: "Wellness Community",
                  description:
                    "Connect with other patients with similar health interests and goals in moderated discussion groups.",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-10 w-10 text-teal-600"
                    >
                      <circle cx="18" cy="5" r="3"></circle>
                      <circle cx="6" cy="12" r="3"></circle>
                      <circle cx="18" cy="19" r="3"></circle>
                      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                    </svg>
                  ),
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="p-6">
                      <div className="bg-teal-50 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 bg-teal-50 rounded-xl p-6 md:p-8">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="md:w-1/3">
                  <Image
                    src="images/placeholder.svg?height=300&width=300"
                    alt="Patient mobile app preview"
                    width={300}
                    height={300}
                    className="rounded-lg shadow-md"
                  />
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold mb-4">Your Wellness Journey in One Place</h3>
                  <p className="text-lg mb-4">
                    Access all your wellness resources, seminars, and healthcare provider connections through our
                    intuitive patient portal.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-teal-600 mr-2 mt-1" />
                      <span>Personalized dashboard showing upcoming and recommended seminars</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-teal-600 mr-2 mt-1" />
                      <span>Mobile-friendly interface for on-the-go access to wellness resources</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-teal-600 mr-2 mt-1" />
                      <span>Secure storage of your seminar notes and wellness goals</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-teal-600 mr-2 mt-1" />
                      <span>Integration with health tracking apps for comprehensive wellness monitoring</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  </section>
  )
}

export default FeatureSection