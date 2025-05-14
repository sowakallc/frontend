"use client"

import type React from "react"
import { motion,Button, Image,Input, Search, Avatar, AvatarFallback, AvatarImage, 
    Link, Share, Star, Users, Video,ChevronDown, Clock, Filter, Heart, Plus,Calendar,Card, 
    CardContent, CardDescription, CardFooter, CardHeader, CardTitle,
    Dialog, DialogContent, DialogHeader, DialogTitle, Badge,
    Tabs, TabsContent, TabsList, TabsTrigger,
    Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
    Label, Textarea

} from "../../../components/index"
import { useState, useEffect } from "react"







// Sample seminars data
const seminars = [
  {
    id: "1",
    title: "Heart Health Fundamentals",
    image: "images/placeholder.svg?height=200&width=400&text=Heart+Health",
    doctor: "Dr. Sarah Johnson",
    doctorAvatar: "images/placeholder.svg?height=40&width=40&text=SJ",
    date: "May 15, 2025",
    time: "10:00 AM - 11:30 AM",
    participants: 24,
    maxParticipants: 30,
    category: "Cardiology",
    tags: ["Heart Health", "Prevention", "Lifestyle"],
    rating: 4.8,
    reviews: 15,
    description:
      "Learn about the fundamentals of heart health and preventative measures. This seminar covers risk factors, lifestyle modifications, and the latest research in cardiovascular health.",
    isFeatured: true,
    isRegistered: false,
    isSaved: true,
  },
  {
    id: "2",
    title: "Stress Management Techniques",
    image: "images/placeholder.svg?height=200&width=400&text=Stress+Management",
    doctor: "Dr. Michael Chen",
    doctorAvatar: "images/placeholder.svg?height=40&width=40&text=MC",
    date: "May 18, 2025",
    time: "2:00 PM - 3:30 PM",
    participants: 18,
    maxParticipants: 25,
    category: "Mental Health",
    tags: ["Stress", "Mindfulness", "Wellness"],
    rating: 4.6,
    reviews: 12,
    description:
      "Discover effective techniques to manage stress in your daily life. This seminar will teach you practical mindfulness exercises, breathing techniques, and cognitive strategies to reduce stress and improve well-being.",
    isFeatured: false,
    isRegistered: true,
    isSaved: false,
  },
  {
    id: "3",
    title: "Nutrition for Longevity",
    image: "images/placeholder.svg?height=200&width=400&text=Nutrition",
    doctor: "Dr. Emily Rodriguez",
    doctorAvatar: "images/placeholder.svg?height=40&width=40&text=ER",
    date: "May 20, 2025",
    time: "11:00 AM - 12:30 PM",
    participants: 32,
    maxParticipants: 40,
    category: "Nutrition",
    tags: ["Diet", "Longevity", "Health"],
    rating: 4.9,
    reviews: 28,
    description:
      "Learn about nutrition strategies that promote longevity and overall health. This seminar covers the latest research on dietary patterns associated with longer, healthier lives, including the Mediterranean diet, Blue Zones, and caloric restriction.",
    isFeatured: true,
    isRegistered: false,
    isSaved: false,
  },
  {
    id: "4",
    title: "Sleep Health and Optimization",
    image: "images/placeholder.svg?height=200&width=400&text=Sleep+Health",
    doctor: "Dr. James Wilson",
    doctorAvatar: "images/placeholder.svg?height=40&width=40&text=JW",
    date: "May 22, 2025",
    time: "7:00 PM - 8:30 PM",
    participants: 15,
    maxParticipants: 30,
    category: "Sleep Medicine",
    tags: ["Sleep", "Health", "Wellness"],
    rating: 4.7,
    reviews: 9,
    description:
      "Discover the science of sleep and learn practical strategies to improve your sleep quality. This seminar covers sleep cycles, common sleep disorders, and evidence-based techniques to optimize your sleep environment and habits.",
    isFeatured: false,
    isRegistered: false,
    isSaved: true,
  },
  {
    id: "5",
    title: "Mindfulness Meditation Workshop",
    image: "images/placeholder.svg?height=200&width=400&text=Mindfulness",
    doctor: "Dr. Lisa Park",
    doctorAvatar: "images/placeholder.svg?height=40&width=40&text=LP",
    date: "May 25, 2025",
    time: "9:00 AM - 10:30 AM",
    participants: 22,
    maxParticipants: 25,
    category: "Mental Health",
    tags: ["Meditation", "Mindfulness", "Wellness"],
    rating: 4.9,
    reviews: 18,
    description:
      "Join this interactive workshop to learn and practice mindfulness meditation techniques. This seminar includes guided meditations, discussions on the science behind mindfulness, and strategies to incorporate mindfulness into your daily routine.",
    isFeatured: false,
    isRegistered: false,
    isSaved: false,
  },
  {
    id: "6",
    title: "Diabetes Management and Prevention",
    image: "images/placeholder.svg?height=200&width=400&text=Diabetes",
    doctor: "Dr. Robert Williams",
    doctorAvatar: "images/placeholder.svg?height=40&width=40&text=RW",
    date: "May 27, 2025",
    time: "1:00 PM - 2:30 PM",
    participants: 19,
    maxParticipants: 30,
    category: "Endocrinology",
    tags: ["Diabetes", "Prevention", "Health"],
    rating: 4.8,
    reviews: 14,
    description:
      "Learn about diabetes prevention and management strategies. This seminar covers risk factors, lifestyle modifications, monitoring techniques, and the latest treatments for type 1 and type 2 diabetes.",
    isFeatured: true,
    isRegistered: true,
    isSaved: true,
  },
]

// Categories for filtering
const categories = [
  { value: "all", label: "All Categories" },
  { value: "Cardiology", label: "Cardiology" },
  { value: "Mental Health", label: "Mental Health" },
  { value: "Nutrition", label: "Nutrition" },
  { value: "Sleep Medicine", label: "Sleep Medicine" },
  { value: "Endocrinology", label: "Endocrinology" },
]

export default function SeminarsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [showFilters, setShowFilters] = useState(false)
  const [isCreateSeminarOpen, setIsCreateSeminarOpen] = useState(false)
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

  // Filter seminars based on search query and filters
  const filteredSeminars = seminars.filter((seminar) => {
    const matchesSearch =
      seminar.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      seminar.doctor.toLowerCase().includes(searchQuery.toLowerCase()) ||
      seminar.description.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesCategory = selectedCategory === "all" || seminar.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  const handleRegister = (seminarId: string) => {
    console.log(`Registered for seminar with ID: ${seminarId}`)
  }

  const handleSaveSeminar = (seminarId: string) => {
    console.log(`Saved seminar with ID: ${seminarId}`)
  }

  const handleShareSeminar = (seminarId: string) => {
    console.log(`Shared seminar with ID: ${seminarId}`)
  }

  const handleCreateSeminar = () => {
    console.log("Seminar created: Your seminar has been created successfully.")
    setIsCreateSeminarOpen(false)
  }

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{isDoctor ? "My Seminars" : "Upcoming Seminars"}</h1>
          <p className="mt-1 text-sm text-gray-500">
            {isDoctor
              ? "Create and manage your wellness seminars"
              : "Browse and register for upcoming wellness seminars"}
          </p>
        </div>
        <div className="mt-4 md:mt-0 flex gap-2">
          <Button
            variant="outline"
            onClick={() => setShowFilters(!showFilters)}
            className={showFilters ? "bg-gray-100" : ""}
          >
            <Filter className="mr-2 h-4 w-4" /> Filters
          </Button>
          {isDoctor && (
            <Button className="bg-teal-600 hover:bg-teal-700" onClick={() => setIsCreateSeminarOpen(true)}>
              <Plus className="mr-2 h-4 w-4" /> Create Seminar
            </Button>
          )}
        </div>
      </div>

      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <Input
            placeholder="Search seminars by title, doctor, or keywords..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {showFilters && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Date Range</label>
              <Select defaultValue="upcoming">
                <SelectTrigger>
                  <SelectValue placeholder="Select date range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="upcoming">Upcoming</SelectItem>
                  <SelectItem value="this-week">This Week</SelectItem>
                  <SelectItem value="this-month">This Month</SelectItem>
                  <SelectItem value="past">Past Seminars</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
              <Select defaultValue="all">
                <SelectTrigger>
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Seminars</SelectItem>
                  <SelectItem value="registered">Registered</SelectItem>
                  <SelectItem value="saved">Saved</SelectItem>
                  <SelectItem value="available">Available</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </motion.div>
        )}
      </div>

      {isDoctor ? (
        <Tabs defaultValue="upcoming">
          <TabsList className="mb-6">
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="past">Past</TabsTrigger>
            <TabsTrigger value="drafts">Drafts</TabsTrigger>
          </TabsList>
          <TabsContent value="upcoming" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSeminars.map((seminar) => (
                <DoctorSeminarCard key={seminar.id} seminar={seminar} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="past" className="mt-0">
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="rounded-full bg-gray-100 p-3 mb-4">
                <Calendar className="h-6 w-6 text-gray-500" />
              </div>
              <h3 className="text-lg font-medium">No Past Seminars</h3>
              <p className="text-sm text-gray-500 mt-2 mb-6 max-w-md">
                You haven't conducted any seminars yet. Create your first seminar to get started.
              </p>
              <Button className="bg-teal-600 hover:bg-teal-700" onClick={() => setIsCreateSeminarOpen(true)}>
                <Plus className="mr-2 h-4 w-4" /> Create Seminar
              </Button>
            </div>
          </TabsContent>
          <TabsContent value="drafts" className="mt-0">
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="rounded-full bg-gray-100 p-3 mb-4">
                <Edit className="h-6 w-6 text-gray-500" />
              </div>
              <h3 className="text-lg font-medium">No Draft Seminars</h3>
              <p className="text-sm text-gray-500 mt-2 mb-6 max-w-md">
                You don't have any seminars saved as drafts. Create a new seminar to get started.
              </p>
              <Button className="bg-teal-600 hover:bg-teal-700" onClick={() => setIsCreateSeminarOpen(true)}>
                <Plus className="mr-2 h-4 w-4" /> Create Seminar
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSeminars.length > 0 ? (
            filteredSeminars.map((seminar) => (
              <PatientSeminarCard
                key={seminar.id}
                seminar={seminar}
                onRegister={handleRegister}
                onSave={handleSaveSeminar}
                onShare={handleShareSeminar}
              />
            ))
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center py-12 text-center">
              <div className="rounded-full bg-gray-100 p-3 mb-4">
                <Video className="h-6 w-6 text-gray-500" />
              </div>
              <h3 className="text-lg font-medium">No Seminars Found</h3>
              <p className="text-sm text-gray-500 mt-2 mb-6 max-w-md">
                Try adjusting your search or filters to find what you're looking for
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery("")
                  setSelectedCategory("all")
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      )}

      {/* Create Seminar Dialog */}
      <Dialog open={isCreateSeminarOpen} onOpenChange={setIsCreateSeminarOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Create New Seminar</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="title">Seminar Title</Label>
              <Input id="title" placeholder="Enter seminar title" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="category">Category</Label>
                <Select>
                  <SelectTrigger id="category">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Cardiology">Cardiology</SelectItem>
                    <SelectItem value="Mental Health">Mental Health</SelectItem>
                    <SelectItem value="Nutrition">Nutrition</SelectItem>
                    <SelectItem value="Sleep Medicine">Sleep Medicine</SelectItem>
                    <SelectItem value="Endocrinology">Endocrinology</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="max-participants">Maximum Participants</Label>
                <Input id="max-participants" type="number" placeholder="Enter maximum number of participants" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="date">Date</Label>
                <Input id="date" type="date" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="time">Time</Label>
                <Input id="time" type="time" />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="duration">Duration (minutes)</Label>
              <Input id="duration" type="number" placeholder="Enter seminar duration in minutes" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="tags">Tags (comma separated)</Label>
              <Input id="tags" placeholder="Heart Health, Prevention, Lifestyle" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" placeholder="Enter a detailed description of your seminar" rows={4} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="image">Cover Image</Label>
              <Input id="image" type="file" />
            </div>
          </div>
          <div className="flex justify-end space-x-2">
            <Button variant="outline" onClick={() => setIsCreateSeminarOpen(false)}>
              Cancel
            </Button>
            <Button className="bg-teal-600 hover:bg-teal-700" onClick={handleCreateSeminar}>
              Create Seminar
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

// Seminar card for patients
function PatientSeminarCard({
  seminar,
  onRegister,
  onSave,
  onShare,
}: {
  seminar: any
  onRegister: (id: string) => void
  onSave: (id: string) => void
  onShare: (id: string) => void
}) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <Card className="h-full flex flex-col overflow-hidden">
        <div className="relative">
          <div className="aspect-video w-full overflow-hidden">
            <Image
              src={seminar.image || "images/placeholder.svg"}
              alt={seminar.title}
              width={400}
              height={200}
              className="w-full h-full object-cover transition-transform hover:scale-105"
            />
          </div>
          {seminar.isFeatured && (
            <Badge className="absolute top-2 left-2 bg-yellow-500 hover:bg-yellow-600">Featured</Badge>
          )}
          <Button
            variant="ghost"
            size="icon"
            className={`absolute top-2 right-2 rounded-full bg-white/80 ${
              seminar.isSaved ? "text-red-500" : "text-gray-500"
            }`}
            onClick={() => onSave(seminar.id)}
          >
            <Heart className="h-5 w-5" fill={seminar.isSaved ? "currentColor" : "none"} />
          </Button>
        </div>
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start">
            <Badge variant="outline" className="mb-2">
              {seminar.category}
            </Badge>
            <div className="flex items-center">
              <Star className="h-4 w-4 text-yellow-500 mr-1" fill="currentColor" />
              <span className="text-sm font-medium">{seminar.rating}</span>
              <span className="text-xs text-gray-500 ml-1">({seminar.reviews})</span>
            </div>
          </div>
          <CardTitle className="text-lg">
            <Link href={`seminars/${seminar.id}`} className="hover:text-teal-600">
              {seminar.title}
            </Link>
          </CardTitle>
          <CardDescription className="flex items-center mt-1">
            <Avatar className="h-5 w-5 mr-1">
              <AvatarImage src={seminar.doctorAvatar || "images/placeholder.svg"} alt={seminar.doctor} />
              <AvatarFallback>
                {seminar.doctor
                  .split(" ")
                  .map((n: string) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <span>{seminar.doctor}</span>
          </CardDescription>
        </CardHeader>
        <CardContent className="pb-2 flex-grow">
          <div className="flex items-center text-sm text-gray-500 mb-2">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{seminar.date}</span>
            <span className="mx-1">•</span>
            <Clock className="h-4 w-4 mr-1" />
            <span>{seminar.time}</span>
          </div>
          <div className="flex items-center text-sm text-gray-500 mb-3">
            <Users className="h-4 w-4 mr-1" />
            <span>
              {seminar.participants}/{seminar.maxParticipants} participants
            </span>
          </div>
          <p className="text-sm text-gray-600 line-clamp-3">{seminar.description}</p>
        </CardContent>
        <CardFooter className="pt-2">
          <div className="flex w-full justify-between items-center">
            <Button variant="ghost" size="sm" onClick={() => onShare(seminar.id)}>
              <Share className="h-4 w-4 mr-2" /> Share
            </Button>
            {seminar.isRegistered ? (
              <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Registered</Badge>
            ) : (
              <Button size="sm" className="bg-teal-600 hover:bg-teal-700" onClick={() => onRegister(seminar.id)}>
                Register
              </Button>
            )}
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

// Seminar card for doctors
function DoctorSeminarCard({ seminar }: any) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <Card className="h-full flex flex-col overflow-hidden">
        <div className="relative">
          <div className="aspect-video w-full overflow-hidden">
            <Image
              src={seminar.image || "images/placeholder.svg"}
              alt={seminar.title}
              width={400}
              height={200}
              className="w-full h-full object-cover transition-transform hover:scale-105"
            />
          </div>
          {seminar.isFeatured && (
            <Badge className="absolute top-2 left-2 bg-yellow-500 hover:bg-yellow-600">Featured</Badge>
          )}
        </div>
        <CardHeader className="pb-2">
          <Badge variant="outline" className="w-fit mb-2">
            {seminar.category}
          </Badge>
          <CardTitle className="text-lg">
            <Link href={`seminars/${seminar.id}`} className="hover:text-teal-600">
              {seminar.title}
            </Link>
          </CardTitle>
        </CardHeader>
        <CardContent className="pb-2 flex-grow">
          <div className="flex items-center text-sm text-gray-500 mb-2">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{seminar.date}</span>
            <span className="mx-1">•</span>
            <Clock className="h-4 w-4 mr-1" />
            <span>{seminar.time}</span>
          </div>
          <div className="flex items-center text-sm text-gray-500 mb-3">
            <Users className="h-4 w-4 mr-1" />
            <span>
              {seminar.participants}/{seminar.maxParticipants} participants
            </span>
          </div>
          <div className="flex items-center text-sm mb-3">
            <Star className="h-4 w-4 text-yellow-500 mr-1" fill="currentColor" />
            <span className="font-medium">{seminar.rating}</span>
            <span className="text-gray-500 ml-1">({seminar.reviews} reviews)</span>
          </div>
          <p className="text-sm text-gray-600 line-clamp-2">{seminar.description}</p>
        </CardContent>
        <CardFooter className="pt-2">
          <div className="flex w-full justify-between items-center">
            <Button variant="outline" size="sm" asChild>
              <Link href={`/dashboard/seminars/${seminar.id}/edit`}>
                <Edit className="h-4 w-4 mr-2" /> Edit
              </Link>
            </Button>
            <Button size="sm" className="bg-teal-600 hover:bg-teal-700" asChild>
              <Link href={`/dashboard/seminars/${seminar.id}`}>Manage</Link>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

// Edit component for the seminar cards
function Edit({ className, ...props }: React.ComponentProps<typeof ChevronDown>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
  )
}