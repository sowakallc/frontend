
"use client"

import type React from "react"
import { motion,Button,  Avatar, AvatarFallback, AvatarImage, 
     Users,  Clock, Card, 
    CardContent, CardDescription,  CardHeader, CardTitle,
    Dialog, DialogContent, DialogHeader, DialogTitle, Badge,
    CalendarIcon, ChevronLeft, ChevronRight,  Plus,X,
    Textarea,format, addDays, startOfWeek, addWeeks, subWeeks, isSameDay, parseISO,Input,Label,
    Select, SelectContent, SelectItem, SelectTrigger, SelectValue

} from "../../../components/index"

import { useState, useEffect } from "react"






// Sample calendar events
const events = [
  {
    id: "1",
    title: "Heart Health Fundamentals",
    type: "seminar",
    date: "2025-05-15T10:00:00",
    endTime: "2025-05-15T11:30:00",
    doctor: "Dr. Sarah Johnson",
    doctorAvatar: "/placeholder.svg?height=40&width=40&text=SJ",
    location: "Virtual",
    participants: 24,
    description: "Learn about the fundamentals of heart health and preventative measures.",
  },
  {
    id: "2",
    title: "Stress Management Techniques",
    type: "seminar",
    date: "2025-05-18T14:00:00",
    endTime: "2025-05-18T15:30:00",
    doctor: "Dr. Michael Chen",
    doctorAvatar: "/placeholder.svg?height=40&width=40&text=MC",
    location: "Virtual",
    participants: 18,
    description: "Discover effective techniques to manage stress in your daily life.",
  },
  {
    id: "3",
    title: "Wellness Check-up",
    type: "appointment",
    date: "2025-05-16T09:00:00",
    endTime: "2025-05-16T09:30:00",
    doctor: "Dr. Emily Rodriguez",
    doctorAvatar: "/placeholder.svg?height=40&width=40&text=ER",
    location: "Miami Wellness Center",
    description: "Regular wellness check-up appointment.",
  },
  {
    id: "4",
    title: "Nutrition for Longevity",
    type: "seminar",
    date: "2025-05-20T11:00:00",
    endTime: "2025-05-20T12:30:00",
    doctor: "Dr. Emily Rodriguez",
    doctorAvatar: "/placeholder.svg?height=40&width=40&text=ER",
    location: "Virtual",
    participants: 32,
    description: "Learn about nutrition strategies that promote longevity and overall health.",
  },
  {
    id: "5",
    title: "Sleep Health Discussion",
    type: "group",
    date: "2025-05-17T18:00:00",
    endTime: "2025-05-17T19:00:00",
    doctor: "Dr. James Wilson",
    doctorAvatar: "/placeholder.svg?height=40&width=40&text=JW",
    location: "Virtual",
    participants: 12,
    description: "Group discussion about improving sleep quality and habits.",
  },
]

export default function CalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [selectedEvent, setSelectedEvent] = useState<any>(null)
  const [isAddEventOpen, setIsAddEventOpen] = useState(false)
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

  // Get the start of the week
  const startDate = startOfWeek(currentDate, { weekStartsOn: 0 })

  // Generate the days of the week
  const weekDays = Array.from({ length: 7 }, (_, i) => addDays(startDate, i))

  // Filter events for the selected date
  const eventsForSelectedDate = events.filter((event) => {
    const eventDate = parseISO(event.date)
    return isSameDay(eventDate, selectedDate)
  })

  const handlePreviousWeek = () => {
    setCurrentDate(subWeeks(currentDate, 1))
  }

  const handleNextWeek = () => {
    setCurrentDate(addWeeks(currentDate, 1))
  }

  const handleDateClick = (date: Date) => {
    setSelectedDate(date)
  }

  const handleEventClick = (event: any) => {
    setSelectedEvent(event)
  }

  const handleAddEvent = () => {
    console.log("Event added: Your event has been added to the calendar.")
    setIsAddEventOpen(false)
  }

  const handleRegisterForEvent = (event: any) => {
    console.log(`Registration successful: You have registered for ${event.title}.`)
  }

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Calendar</h1>
          <p className="mt-1 text-sm text-gray-500">
            {isDoctor ? "Manage your seminars and appointments" : "View and register for upcoming events"}
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <Button className="bg-teal-600 hover:bg-teal-700" onClick={() => setIsAddEventOpen(true)}>
            <Plus className="mr-2 h-4 w-4" /> {isDoctor ? "Schedule Event" : "Add to Calendar"}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendar View */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2"
        >
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle>Calendar</CardTitle>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="icon" onClick={handlePreviousWeek}>
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <span className="text-sm font-medium">
                    {format(startDate, "MMMM d")} - {format(addDays(startDate, 6), "MMMM d, yyyy")}
                  </span>
                  <Button variant="outline" size="icon" onClick={handleNextWeek}>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {/* Days of the week */}
              <div className="grid grid-cols-7 gap-1 mb-2">
                {weekDays.map((day) => (
                  <div key={day.toString()} className="text-center">
                    <div className="text-xs font-medium text-gray-500 uppercase mb-1">{format(day, "EEE")}</div>
                    <Button
                      variant={isSameDay(day, selectedDate) ? "default" : "outline"}
                      className={`w-full h-10 ${isSameDay(day, selectedDate) ? "bg-teal-600 hover:bg-teal-700" : ""}`}
                      onClick={() => handleDateClick(day)}
                    >
                      {format(day, "d")}
                    </Button>
                  </div>
                ))}
              </div>

              {/* Calendar grid with events */}
              <div className="grid grid-cols-7 gap-1 mt-4">
                {weekDays.map((day) => (
                  <div key={day.toString()} className="min-h-[150px] border rounded-md p-1">
                    <div className="text-xs font-medium mb-1">{format(day, "d")}</div>
                    <div className="space-y-1">
                      {events
                        .filter((event) => {
                          const eventDate = parseISO(event.date)
                          return isSameDay(eventDate, day)
                        })
                        .map((event) => (
                          <div
                            key={event.id}
                            className={`text-xs p-1 rounded truncate cursor-pointer ${
                              event.type === "seminar"
                                ? "bg-blue-100 text-blue-800"
                                : event.type === "appointment"
                                  ? "bg-green-100 text-green-800"
                                  : "bg-purple-100 text-purple-800"
                            }`}
                            onClick={() => handleEventClick(event)}
                          >
                            {format(parseISO(event.date), "h:mm a")} - {event.title}
                          </div>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Events for Selected Date */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Events for {format(selectedDate, "MMMM d, yyyy")}</CardTitle>
              <CardDescription>
                {eventsForSelectedDate.length === 0
                  ? "No events scheduled for this day"
                  : `${eventsForSelectedDate.length} events scheduled`}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {eventsForSelectedDate.length > 0 ? (
                <div className="space-y-4">
                  {eventsForSelectedDate.map((event) => (
                    <div
                      key={event.id}
                      className="p-3 border rounded-lg hover:bg-gray-50 cursor-pointer"
                      onClick={() => handleEventClick(event)}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-medium">{event.title}</h3>
                        <Badge
                          variant="outline"
                          className={
                            event.type === "seminar"
                              ? "bg-blue-100 text-blue-800 hover:bg-blue-100"
                              : event.type === "appointment"
                                ? "bg-green-100 text-green-800 hover:bg-green-100"
                                : "bg-purple-100 text-purple-800 hover:bg-purple-100"
                          }
                        >
                          {event.type === "seminar"
                            ? "Seminar"
                            : event.type === "appointment"
                              ? "Appointment"
                              : "Group"}
                        </Badge>
                      </div>
                      <div className="flex items-center text-sm text-gray-500 mb-2">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>
                          {format(parseISO(event.date), "h:mm a")} - {format(parseISO(event.endTime), "h:mm a")}
                        </span>
                      </div>
                      {event.doctor && (
                        <div className="flex items-center mb-2">
                          <Avatar className="h-5 w-5 mr-2">
                            <AvatarImage src={event.doctorAvatar || "/placeholder.svg"} alt={event.doctor} />
                            <AvatarFallback>
                              {event.doctor
                                .split(" ")
                                .map((n: string) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <span className="text-sm">{event.doctor}</span>
                        </div>
                      )}
                      {event.participants && (
                        <div className="flex items-center text-xs text-gray-500">
                          <Users className="h-3 w-3 mr-1" />
                          <span>{event.participants} participants</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <div className="rounded-full bg-gray-100 p-3 mb-4">
                    <CalendarIcon className="h-6 w-6 text-gray-500" />
                  </div>
                  <h3 className="text-lg font-medium">No Events</h3>
                  <p className="text-sm text-gray-500 mt-2 mb-6">There are no events scheduled for this day.</p>
                  <Button
                    variant="outline"
                    onClick={() => setIsAddEventOpen(true)}
                    className="bg-teal-600 text-white hover:bg-teal-700"
                  >
                    <Plus className="mr-2 h-4 w-4" /> Add Event
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Event Details Dialog */}
      {selectedEvent && (
        <Dialog open={!!selectedEvent} onOpenChange={() => setSelectedEvent(null)}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>{selectedEvent.title}</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Badge
                  variant="outline"
                  className={
                    selectedEvent.type === "seminar"
                      ? "bg-blue-100 text-blue-800"
                      : selectedEvent.type === "appointment"
                        ? "bg-green-100 text-green-800"
                        : "bg-purple-100 text-purple-800"
                  }
                >
                  {selectedEvent.type === "seminar"
                    ? "Seminar"
                    : selectedEvent.type === "appointment"
                      ? "Appointment"
                      : "Group"}
                </Badge>
              </div>
              <div className="flex items-center text-sm">
                <CalendarIcon className="h-4 w-4 mr-2 text-gray-500" />
                <span>{format(parseISO(selectedEvent.date), "EEEE, MMMM d, yyyy")}</span>
              </div>
              <div className="flex items-center text-sm">
                <Clock className="h-4 w-4 mr-2 text-gray-500" />
                <span>
                  {format(parseISO(selectedEvent.date), "h:mm a")} - {format(parseISO(selectedEvent.endTime), "h:mm a")}
                </span>
              </div>
              {selectedEvent.doctor && (
                <div className="flex items-center">
                  <Avatar className="h-8 w-8 mr-2">
                    <AvatarImage src={selectedEvent.doctorAvatar || "/placeholder.svg"} alt={selectedEvent.doctor} />
                    <AvatarFallback>
                      {selectedEvent.doctor
                        .split(" ")
                        .map((n: string) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <span>{selectedEvent.doctor}</span>
                </div>
              )}
              {selectedEvent.location && (
                <div className="text-sm">
                  <span className="font-medium">Location: </span>
                  <span>{selectedEvent.location}</span>
                </div>
              )}
              {selectedEvent.participants && (
                <div className="flex items-center text-sm">
                  <Users className="h-4 w-4 mr-2 text-gray-500" />
                  <span>{selectedEvent.participants} participants</span>
                </div>
              )}
              {selectedEvent.description && (
                <div className="text-sm">
                  <p className="font-medium mb-1">Description:</p>
                  <p>{selectedEvent.description}</p>
                </div>
              )}
              <div className="flex justify-end space-x-2 pt-4">
                {!isDoctor && selectedEvent.type === "seminar" && (
                  <Button
                    className="bg-teal-600 hover:bg-teal-700"
                    onClick={() => {
                      handleRegisterForEvent(selectedEvent)
                      setSelectedEvent(null)
                    }}
                  >
                    Register
                  </Button>
                )}
                {isDoctor && (
                  <Button variant="outline">
                    <Edit className="h-4 w-4 mr-2" /> Edit
                  </Button>
                )}
                <Button variant="outline" onClick={() => setSelectedEvent(null)}>
                  Close
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}

      {/* Add Event Dialog */}
      <Dialog open={isAddEventOpen} onOpenChange={setIsAddEventOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{isDoctor ? "Schedule Event" : "Add to Calendar"}</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="title">Title</Label>
              <Input id="title" placeholder="Event title" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="type">Event Type</Label>
              <Select defaultValue="seminar">
                <SelectTrigger id="type">
                  <SelectValue placeholder="Select event type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="seminar">Seminar</SelectItem>
                  <SelectItem value="appointment">Appointment</SelectItem>
                  <SelectItem value="group">Group Discussion</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="date">Date</Label>
                <Input id="date" type="date" defaultValue={format(selectedDate, "yyyy-MM-dd")} />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="time">Time</Label>
                <Input id="time" type="time" defaultValue="10:00" />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="location">Location</Label>
              <Input id="location" placeholder="Virtual or physical location" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" placeholder="Event description" />
            </div>
          </div>
          <div className="flex justify-end space-x-2">
            <Button variant="outline" onClick={() => setIsAddEventOpen(false)}>
              Cancel
            </Button>
            <Button className="bg-teal-600 hover:bg-teal-700" onClick={handleAddEvent}>
              {isDoctor ? "Schedule" : "Add to Calendar"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

// Edit component for the event details dialog
function Edit({ className, ...props }: React.ComponentProps<typeof X>) {
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
