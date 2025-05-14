"use client"

import { useState, useEffect } from "react"
import { motion,Button, Image, Avatar, AvatarFallback, AvatarImage, 
    Link, Share, Star, Users,  Clock,  Heart, Calendar,Card, 
    CardContent, CardDescription,  CardHeader, CardTitle,
    Dialog, DialogContent, DialogHeader, DialogTitle, Badge,
    Tabs, TabsContent, TabsList, TabsTrigger,
    Textarea,Progress,ArrowLeft,  Download, Edit,  MessageSquare

} from "../../../../components/index"




// Sample seminar data
const seminar = {
  id: "1",
  title: "Heart Health Fundamentals",
  image: "/images/placeholder.svg?height=400&width=800&text=Heart+Health",
  doctor: "Dr. Sarah Johnson",
  doctorAvatar: "/images/placeholder.svg?height=40&width=40&text=SJ",
  doctorBio:
    "Dr. Sarah Johnson is a board-certified cardiologist with over 15 years of experience. She specializes in preventative cardiology and has conducted numerous seminars on heart health.",
  date: "May 15, 2025",
  time: "10:00 AM - 11:30 AM",
  duration: "90 minutes",
  participants: 24,
  maxParticipants: 30,
  category: "Cardiology",
  tags: ["Heart Health", "Prevention", "Lifestyle"],
  rating: 4.8,
  reviews: 15,
  description:
    "Learn about the fundamentals of heart health and preventative measures. This seminar covers risk factors, lifestyle modifications, and the latest research in cardiovascular health.",
  longDescription:
    "Join Dr. Sarah Johnson for an in-depth exploration of heart health fundamentals. This comprehensive seminar will cover essential topics including risk factors for heart disease, effective lifestyle modifications, nutrition for heart health, exercise recommendations, stress management techniques, and the latest research in cardiovascular medicine.\n\nParticipants will learn practical strategies to improve heart health, understand warning signs of heart problems, and gain knowledge about preventative measures that can be implemented in daily life. The seminar includes a Q&A session where participants can ask specific questions about heart health concerns.\n\nThis seminar is suitable for anyone interested in improving their cardiovascular health, those with a family history of heart disease, and individuals looking to make positive lifestyle changes for long-term health benefits.",
  isFeatured: true,
  isRegistered: false,
  isSaved: true,
  materials: [
    { name: "Heart Health Guide.pdf", size: "2.4 MB" },
    { name: "Nutrition Recommendations.pdf", size: "1.8 MB" },
    { name: "Exercise Program.pdf", size: "3.1 MB" },
  ],
  agenda: [
    { time: "10:00 AM - 10:10 AM", title: "Introduction and Overview" },
    { time: "10:10 AM - 10:30 AM", title: "Understanding Heart Disease Risk Factors" },
    { time: "10:30 AM - 10:50 AM", title: "Nutrition for Heart Health" },
    { time: "10:50 AM - 11:10 AM", title: "Exercise and Stress Management" },
    { time: "11:10 AM - 11:30 AM", title: "Q&A Session" },
  ],
}

// Sample reviews
const reviews = [
  {
    id: "1",
    name: "John Smith",
    avatar: "/images/placeholder.svg?height=40&width=40&text=JS",
    rating: 5,
    date: "April 28, 2025",
    comment:
      "Excellent seminar! Dr. Johnson explained complex concepts in an easy-to-understand way. I learned a lot about heart health that I can apply to my daily life.",
  },
  {
    id: "2",
    name: "Emily Davis",
    avatar: "/images/placeholder.svg?height=40&width=40&text=ED",
    rating: 4,
    date: "April 25, 2025",
    comment:
      "Very informative session. The Q&A portion was particularly helpful as Dr. Johnson addressed specific concerns. Would recommend to others.",
  },
  {
    id: "3",
    name: "Michael Wong",
    avatar: "/images/placeholder.svg?height=40&width=40&text=MW",
    rating: 5,
    date: "April 22, 2025",
    comment:
      "Dr. Johnson is an excellent presenter. The content was well-organized and the materials provided are very useful. Looking forward to more seminars like this.",
  },
]

// Sample participants
const participants = [
  {
    id: "1",
    name: "John Smith",
    avatar: "/images/placeholder.svg?height=40&width=40&text=JS",
    joinDate: "April 15, 2025",
  },
  {
    id: "2",
    name: "Emily Davis",
    avatar: "/images/placeholder.svg?height=40&width=40&text=ED",
    joinDate: "April 16, 2025",
  },
  {
    id: "3",
    name: "Michael Wong",
    avatar: "/images/placeholder.svg?height=40&width=40&text=MW",
    joinDate: "April 18, 2025",
  },
  {
    id: "4",
    name: "Sarah Thompson",
    avatar: "/images/placeholder.svg?height=40&width=40&text=ST",
    joinDate: "April 20, 2025",
  },
  {
    id: "5",
    name: "David Lee",
    avatar: "/images/placeholder.svg?height=40&width=40&text=DL",
    joinDate: "April 21, 2025",
  },
]

export default function SeminarDetailPage({ params }: { params: { id: string } }) {
  const [isReviewDialogOpen, setIsReviewDialogOpen] = useState(false)
  const [userRole, setUserRole] = useState<"patient" | "doctor">("patient")

  // Use useEffect to check and set the user role from localStorage
  useEffect(() => {
    // Check if we're in the browser
    if (typeof window !== "undefined") {
      // Try to get the role from localStorage or another source
      const storedRole = localStorage.getItem("userRole") as "patient" | "doctor" | null
      if (storedRole) {
        setUserRole(storedRole)
      }
    }
  }, []) // Empty dependency array means this runs once on mount

  const isDoctor = userRole === "doctor"

  const handleRegister = () => {
    console.log(`Registration successful: You have registered for ${seminar.title}.`)
  }

  const handleSaveSeminar = () => {
    console.log("Seminar saved: This seminar has been saved to your favorites.")
  }

  const handleShareSeminar = () => {
    console.log("Seminar shared: A link to this seminar has been copied to your clipboard.")
  }

  const handleDownloadMaterial = (material: string) => {
    console.log(`Download started: Downloading ${material}...`)
  }

  const handleSubmitReview = () => {
    console.log("Review submitted: Thank you for your feedback!")
    setIsReviewDialogOpen(false)
  }

  return (
    <div>
      <div className="mb-8">
        <Button variant="ghost" className="mb-4" asChild>
          <Link href="/seminars">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Seminars
          </Link>
        </Button>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{seminar.title}</h1>
            <div className="flex items-center mt-1">
              <Badge variant="outline" className="mr-2">
                {seminar.category}
              </Badge>
              <div className="flex items-center">
                <Star className="h-4 w-4 text-yellow-500 mr-1" fill="currentColor" />
                <span className="text-sm font-medium">{seminar.rating}</span>
                <span className="text-xs text-gray-500 ml-1">({seminar.reviews} reviews)</span>
              </div>
            </div>
          </div>
          <div className="mt-4 md:mt-0 flex gap-2">
            {isDoctor ? (
              <Button variant="outline" asChild>
                <Link href={`seminars/${params.id}/edit`}>
                  <Edit className="mr-2 h-4 w-4" /> Edit Seminar
                </Link>
              </Button>
            ) : (
              <>
                <Button variant="outline" onClick={handleSaveSeminar} className={seminar.isSaved ? "text-red-500" : ""}>
                  <Heart className="mr-2 h-4 w-4" fill={seminar.isSaved ? "currentColor" : "none"} />
                  {seminar.isSaved ? "Saved" : "Save"}
                </Button>
                <Button variant="outline" onClick={handleShareSeminar}>
                  <Share className="mr-2 h-4 w-4" /> Share
                </Button>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2"
        >
          <Card>
            <div className="aspect-video w-full overflow-hidden">
              <Image
                src={seminar.image || "/images/placeholder.svg"}
                alt={seminar.title}
                width={800}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-6">
              <Tabs defaultValue="overview">
                <TabsList className="mb-4">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="agenda">Agenda</TabsTrigger>
                  <TabsTrigger value="materials">Materials</TabsTrigger>
                  {isDoctor && <TabsTrigger value="participants">Participants</TabsTrigger>}
                </TabsList>

                <TabsContent value="overview" className="mt-0">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-2">About This Seminar</h3>
                      <p className="text-gray-700 whitespace-pre-line">{seminar.longDescription}</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium mb-2">Tags</h3>
                      <div className="flex flex-wrap gap-2">
                        {seminar.tags.map((tag) => (
                          <Badge key={tag} variant="outline">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium mb-2">About the Presenter</h3>
                      <div className="flex items-start space-x-4">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={seminar.doctorAvatar || "/images/placeholder.svg"} alt={seminar.doctor} />
                          <AvatarFallback>
                            {seminar.doctor
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-medium">{seminar.doctor}</h4>
                          <p className="text-sm text-gray-700 mt-1">{seminar.doctorBio}</p>
                        </div>
                      </div>
                    </div>

                    {!isDoctor && (
                      <div className="pt-4">
                        <Button className="w-full bg-teal-600 hover:bg-teal-700" onClick={handleRegister}>
                          Register for This Seminar
                        </Button>
                      </div>
                    )}
                  </div>
                </TabsContent>

                <TabsContent value="agenda" className="mt-0">
                  <div className="space-y-6">
                    <h3 className="text-lg font-medium mb-4">Seminar Agenda</h3>
                    <div className="space-y-4">
                      {seminar.agenda.map((item, index) => (
                        <div key={index} className="flex">
                          <div className="mr-4 w-32 flex-shrink-0">
                            <span className="text-sm font-medium">{item.time}</span>
                          </div>
                          <div className="flex-grow border-l pl-4 pb-4 relative">
                            <div className="absolute w-3 h-3 bg-teal-500 rounded-full -left-[6.5px] top-1.5" />
                            <h4 className="font-medium">{item.title}</h4>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="materials" className="mt-0">
                  <div className="space-y-6">
                    <h3 className="text-lg font-medium mb-4">Seminar Materials</h3>
                    <div className="space-y-3">
                      {seminar.materials.map((material, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50"
                        >
                          <div className="flex items-center">
                            <div className="h-10 w-10 bg-gray-100 rounded-md flex items-center justify-center mr-3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-gray-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                />
                              </svg>
                            </div>
                            <div>
                              <p className="font-medium">{material.name}</p>
                              <p className="text-xs text-gray-500">{material.size}</p>
                            </div>
                          </div>
                          <Button variant="ghost" size="sm" onClick={() => handleDownloadMaterial(material.name)}>
                            <Download className="h-4 w-4 mr-2" /> Download
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                {isDoctor && (
                  <TabsContent value="participants" className="mt-0">
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-medium">Participants ({participants.length})</h3>
                        <Button variant="outline" size="sm">
                          Export List
                        </Button>
                      </div>
                      <div className="space-y-3">
                        {participants.map((participant) => (
                          <div
                            key={participant.id}
                            className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50"
                          >
                            <div className="flex items-center">
                              <Avatar className="h-10 w-10 mr-3">
                                <AvatarImage src={participant.avatar || "/images/placeholder.svg"} alt={participant.name} />
                                <AvatarFallback>
                                  {participant.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <p className="font-medium">{participant.name}</p>
                                <p className="text-xs text-gray-500">Joined: {participant.joinDate}</p>
                              </div>
                            </div>
                            <Button variant="ghost" size="sm">
                              <MessageSquare className="h-4 w-4 mr-2" /> Message
                            </Button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>
                )}
              </Tabs>
            </CardContent>
          </Card>

          {/* Reviews Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6"
          >
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle>Reviews</CardTitle>
                  {!isDoctor && (
                    <Button variant="outline" size="sm" onClick={() => setIsReviewDialogOpen(true)}>
                      Write a Review
                    </Button>
                  )}
                </div>
                <CardDescription>What participants are saying</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {reviews.map((review) => (
                    <div key={review.id} className="border-b pb-6 last:border-0 last:pb-0">
                      <div className="flex items-start">
                        <Avatar className="h-10 w-10 mr-3">
                          <AvatarImage src={review.avatar || "/placeholdersvg"} alt={review.name} />
                          <AvatarFallback>
                            {review.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h4 className="font-medium">{review.name}</h4>
                            <span className="text-xs text-gray-500">{review.date}</span>
                          </div>
                          <div className="flex items-center mt-1 mb-2">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star
                                key={i}
                                className="h-4 w-4 text-yellow-500"
                                fill={i < review.rating ? "currentColor" : "none"}
                              />
                            ))}
                          </div>
                          <p className="text-gray-700">{review.comment}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Sidebar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Seminar Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 mr-3 text-gray-500" />
                  <div>
                    <p className="text-sm font-medium">Date</p>
                    <p className="text-sm text-gray-500">{seminar.date}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-3 text-gray-500" />
                  <div>
                    <p className="text-sm font-medium">Time</p>
                    <p className="text-sm text-gray-500">{seminar.time}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 mr-3 text-gray-500" />
                  <div>
                    <p className="text-sm font-medium">Participants</p>
                    <p className="text-sm text-gray-500">
                      {seminar.participants}/{seminar.maxParticipants} registered
                    </p>
                  </div>
                </div>
                <div className="pt-2">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm">Capacity</span>
                    <span className="text-sm text-gray-500">
                      {Math.round((seminar.participants / seminar.maxParticipants) * 100)}%
                    </span>
                  </div>
                  <Progress value={(seminar.participants / seminar.maxParticipants) * 100} className="h-2" />
                </div>
                {!isDoctor && (
                  <Button className="w-full mt-4 bg-teal-600 hover:bg-teal-700" onClick={handleRegister}>
                    Register Now
                  </Button>
                )}
              </CardContent>
            </Card>

            {isDoctor ? (
              <Card>
                <CardHeader>
                  <CardTitle>Seminar Stats</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium">Registration Rate</span>
                      <span className="text-sm text-gray-500">80%</span>
                    </div>
                    <Progress value={80} className="h-2" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium">Attendance Rate</span>
                      <span className="text-sm text-gray-500">92%</span>
                    </div>
                    <Progress value={92} className="h-2" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium">Satisfaction Score</span>
                      <span className="text-sm text-gray-500">4.8/5</span>
                    </div>
                    <Progress value={(4.8 / 5) * 100} className="h-2" />
                  </div>
                  <div className="pt-2">
                    <Button variant="outline" className="w-full">
                      View Detailed Analytics
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardHeader>
                  <CardTitle>Similar Seminars</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 p-0">
                  <div className="p-4 border-b hover:bg-gray-50">
                    <Link href="/dashboard/seminars/2" className="block">
                      <h4 className="font-medium hover:text-teal-600">Stress Management Techniques</h4>
                      <p className="text-sm text-gray-500 mt-1">Dr. Michael Chen • May 18, 2025</p>
                    </Link>
                  </div>
                  <div className="p-4 border-b hover:bg-gray-50">
                    <Link href="/dashboard/seminars/3" className="block">
                      <h4 className="font-medium hover:text-teal-600">Nutrition for Longevity</h4>
                      <p className="text-sm text-gray-500 mt-1">Dr. Emily Rodriguez • May 20, 2025</p>
                    </Link>
                  </div>
                  <div className="p-4 hover:bg-gray-50">
                    <Link href="/dashboard/seminars/4" className="block">
                      <h4 className="font-medium hover:text-teal-600">Sleep Health and Optimization</h4>
                      <p className="text-sm text-gray-500 mt-1">Dr. James Wilson • May 22, 2025</p>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </motion.div>
      </div>

      {/* Review Dialog */}
      <Dialog open={isReviewDialogOpen} onOpenChange={setIsReviewDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Write a Review</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Rating</label>
              <div className="flex items-center">
                {Array.from({ length: 5 }).map((_, i) => (
                  <button key={i} className="p-1">
                    <Star className="h-6 w-6 text-yellow-500" fill="currentColor" />
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Your Review</label>
              <Textarea placeholder="Share your experience with this seminar..." rows={4} className="resize-none" />
            </div>
          </div>
          <div className="flex justify-end space-x-2">
            <Button variant="outline" onClick={() => setIsReviewDialogOpen(false)}>
              Cancel
            </Button>
            <Button className="bg-teal-600 hover:bg-teal-700" onClick={handleSubmitReview}>
              Submit Review
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}