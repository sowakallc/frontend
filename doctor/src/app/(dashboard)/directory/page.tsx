"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Building, Filter, Mail, MapPin, MessageSquare, Phone, Plus, Search, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { toast, Toaster } from "sonner"

// Doctor interface
interface Doctor {
  id: string
  name: string
  specialty: string
  avatar: string
  location: string
  hospital: string
  experience: string
  email: string
  phone: string
  available: boolean
  state: string
  region: string
}

// Sample data for doctors directory
const doctors: Doctor[] = [
  {
    id: "1",
    name: "Dr. Sarah Johnson",
    specialty: "Cardiology",
    avatar: "/placeholder.svg?height=100&width=100&text=SJ",
    location: "New York, NY",
    hospital: "NYC Medical Center",
    experience: "15 years",
    email: "sarah.johnson@example.com",
    phone: "+1 (555) 123-4567",
    available: true,
    state: "New York",
    region: "Northeast",
  },
  {
    id: "2",
    name: "Dr. Michael Chen",
    specialty: "Psychiatry",
    avatar: "/placeholder.svg?height=100&width=100&text=MC",
    location: "San Francisco, CA",
    hospital: "SF General Hospital",
    experience: "10 years",
    email: "michael.chen@example.com",
    phone: "+1 (555) 234-5678",
    available: true,
    state: "California",
    region: "West",
  },
  {
    id: "3",
    name: "Dr. Emily Rodriguez",
    specialty: "Nutrition",
    avatar: "/placeholder.svg?height=100&width=100&text=ER",
    location: "Miami, FL",
    hospital: "Miami Wellness Center",
    experience: "8 years",
    email: "emily.rodriguez@example.com",
    phone: "+1 (555) 345-6789",
    available: false,
    state: "Florida",
    region: "Southeast",
  },
  {
    id: "4",
    name: "Dr. James Wilson",
    specialty: "Sleep Medicine",
    avatar: "/placeholder.svg?height=100&width=100&text=JW",
    location: "Chicago, IL",
    hospital: "Chicago Sleep Center",
    experience: "12 years",
    email: "james.wilson@example.com",
    phone: "+1 (555) 456-7890",
    available: true,
    state: "Illinois",
    region: "Midwest",
  },
  {
    id: "5",
    name: "Dr. Lisa Park",
    specialty: "Psychology",
    avatar: "/placeholder.svg?height=100&width=100&text=LP",
    location: "Boston, MA",
    hospital: "Boston Medical Group",
    experience: "9 years",
    email: "lisa.park@example.com",
    phone: "+1 (555) 567-8901",
    available: true,
    state: "Massachusetts",
    region: "Northeast",
  },
  {
    id: "6",
    name: "Dr. Robert Williams",
    specialty: "Endocrinology",
    avatar: "/placeholder.svg?height=100&width=100&text=RW",
    location: "Austin, TX",
    hospital: "Texas Medical Institute",
    experience: "20 years",
    email: "robert.williams@example.com",
    phone: "+1 (555) 678-9012",
    available: false,
    state: "Texas",
    region: "South",
  },
  {
    id: "7",
    name: "Dr. Jennifer Adams",
    specialty: "Dermatology",
    avatar: "/placeholder.svg?height=100&width=100&text=JA",
    location: "Seattle, WA",
    hospital: "Pacific Northwest Medical",
    experience: "11 years",
    email: "jennifer.adams@example.com",
    phone: "+1 (555) 789-0123",
    available: true,
    state: "Washington",
    region: "West",
  },
  {
    id: "8",
    name: "Dr. David Kim",
    specialty: "Orthopedics",
    avatar: "/placeholder.svg?height=100&width=100&text=DK",
    location: "Denver, CO",
    hospital: "Rocky Mountain Health",
    experience: "14 years",
    email: "david.kim@example.com",
    phone: "+1 (555) 890-1234",
    available: true,
    state: "Colorado",
    region: "West",
  },
]

// Sample data for regions and specialties
const regions = [
  { value: "all", label: "All Regions" },
  { value: "Northeast", label: "Northeast" },
  { value: "Southeast", label: "Southeast" },
  { value: "Midwest", label: "Midwest" },
  { value: "South", label: "South" },
  { value: "West", label: "West" },
]

const specialties = [
  { value: "all", label: "All Specialties" },
  { value: "Cardiology", label: "Cardiology" },
  { value: "Psychiatry", label: "Psychiatry" },
  { value: "Nutrition", label: "Nutrition" },
  { value: "Sleep Medicine", label: "Sleep Medicine" },
  { value: "Psychology", label: "Psychology" },
  { value: "Endocrinology", label: "Endocrinology" },
  { value: "Dermatology", label: "Dermatology" },
  { value: "Orthopedics", label: "Orthopedics" },
]

export default function DirectoryPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedRegion, setSelectedRegion] = useState("all")
  const [selectedSpecialty, setSelectedSpecialty] = useState("all")
  const [showFilters, setShowFilters] = useState(false)

  // Filter doctors based on search query and filters
  const filteredDoctors = doctors.filter((doctor) => {
    const matchesSearch =
      doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctor.location.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesRegion = selectedRegion === "all" || doctor.region === selectedRegion
    const matchesSpecialty = selectedSpecialty === "all" || doctor.specialty === selectedSpecialty

    return matchesSearch && matchesRegion && matchesSpecialty
  })

  const handleAddContact = (doctor: Doctor) => {
    toast.success("Contact added", {
      description: `${doctor.name} has been added to your contacts.`,
    })
  }

  const handleStartChat = (doctor: Doctor) => {
    toast.success("Chat started", {
      description: `Starting a new conversation with ${doctor.name}.`,
    })
  }

  return (
    <div>
      <Toaster />
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Doctor Directory</h1>
          <p className="mt-1 text-sm text-gray-500">Connect with other healthcare professionals</p>
        </div>
        <div className="mt-4 md:mt-0 flex gap-2">
          <Button
            variant="outline"
            onClick={() => setShowFilters(!showFilters)}
            className={showFilters ? "bg-gray-100" : ""}
          >
            <Filter className="mr-2 h-4 w-4" /> Filters
          </Button>
          <Button className="bg-teal-600 hover:bg-teal-700">
            <Plus className="mr-2 h-4 w-4" /> Add to Contacts
          </Button>
        </div>
      </div>

      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <Input
            placeholder="Search by name, specialty, or location..."
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
            className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Region</label>
              <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                <SelectTrigger>
                  <SelectValue placeholder="Select region" />
                </SelectTrigger>
                <SelectContent>
                  {regions.map((region) => (
                    <SelectItem key={region.value} value={region.value}>
                      {region.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Specialty</label>
              <Select value={selectedSpecialty} onValueChange={setSelectedSpecialty}>
                <SelectTrigger>
                  <SelectValue placeholder="Select specialty" />
                </SelectTrigger>
                <SelectContent>
                  {specialties.map((specialty) => (
                    <SelectItem key={specialty.value} value={specialty.value}>
                      {specialty.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </motion.div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map((doctor) => (
            <motion.div
              key={doctor.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-white">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div className="flex items-start space-x-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={doctor.avatar || "/placeholder.svg"} alt={doctor.name} />
                        <AvatarFallback>
                          {doctor.name
                            .split(" ")
                            .map((n: string) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg">{doctor.name}</CardTitle>
                        <CardDescription>{doctor.specialty}</CardDescription>
                      </div>
                    </div>
                    <Badge
                      variant={doctor.available ? "default" : "outline"}
                      className={doctor.available ? "bg-teal-100 text-teal-800 hover:bg-teal-100" : ""}
                    >
                      {doctor.available ? "Available" : "Unavailable"}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <MapPin className="h-4 w-4 mr-2 text-gray-500" />
                      <span>{doctor.location}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Building className="h-4 w-4 mr-2 text-gray-500" />
                      <span>{doctor.hospital}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <User className="h-4 w-4 mr-2 text-gray-500" />
                      <span>{doctor.experience} experience</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between pt-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm">
                        <User className="h-4 w-4 mr-2" /> View Profile
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle>Doctor Profile</DialogTitle>
                      </DialogHeader>
                      <div className="flex flex-col items-center text-center mb-4">
                        <Avatar className="h-24 w-24 mb-4">
                          <AvatarImage src={doctor.avatar || "/placeholder.svg"} alt={doctor.name} />
                          <AvatarFallback>
                            {doctor.name
                              .split(" ")
                              .map((n: string) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <h2 className="text-xl font-bold">{doctor.name}</h2>
                        <p className="text-gray-500">{doctor.specialty}</p>
                        <Badge
                          variant={doctor.available ? "default" : "outline"}
                          className={doctor.available ? "bg-teal-100 text-teal-800 hover:bg-teal-100 mt-2" : "mt-2"}
                        >
                          {doctor.available ? "Available" : "Unavailable"}
                        </Badge>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <MapPin className="h-5 w-5 mr-3 text-gray-500" />
                          <div>
                            <p className="text-sm font-medium">Location</p>
                            <p className="text-sm text-gray-500">{doctor.location}</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <Building className="h-5 w-5 mr-3 text-gray-500" />
                          <div>
                            <p className="text-sm font-medium">Hospital</p>
                            <p className="text-sm text-gray-500">{doctor.hospital}</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <User className="h-5 w-5 mr-3 text-gray-500" />
                          <div>
                            <p className="text-sm font-medium">Experience</p>
                            <p className="text-sm text-gray-500">{doctor.experience}</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <Mail className="h-5 w-5 mr-3 text-gray-500" />
                          <div>
                            <p className="text-sm font-medium">Email</p>
                            <p className="text-sm text-gray-500">{doctor.email}</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <Phone className="h-5 w-5 mr-3 text-gray-500" />
                          <div>
                            <p className="text-sm font-medium">Phone</p>
                            <p className="text-sm text-gray-500">{doctor.phone}</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between mt-4">
                        <Button variant="outline" onClick={() => handleAddContact(doctor)}>
                          <Plus className="h-4 w-4 mr-2" /> Add to Contacts
                        </Button>
                        <Button className="bg-teal-600 hover:bg-teal-700" onClick={() => handleStartChat(doctor)}>
                          <MessageSquare className="h-4 w-4 mr-2" /> Message
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                  <div className="space-x-2">
                    <Button variant="outline" size="sm" onClick={() => handleAddContact(doctor)}>
                      <Plus className="h-4 w-4 mr-2" /> Add
                    </Button>
                    <Button size="sm" className="bg-teal-600 hover:bg-teal-700" onClick={() => handleStartChat(doctor)}>
                      <MessageSquare className="h-4 w-4 mr-2" /> Chat
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))
        ) : (
          <div className="col-span-full flex flex-col items-center justify-center p-8 text-center">
            <div className="rounded-full bg-gray-100 p-3 mb-4">
              <User className="h-6 w-6 text-gray-500" />
            </div>
            <h3 className="text-lg font-medium">No doctors found</h3>
            <p className="text-sm text-gray-500 mt-2 mb-6">
              Try adjusting your search or filters to find what you're looking for
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchQuery("")
                setSelectedRegion("all")
                setSelectedSpecialty("all")
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
