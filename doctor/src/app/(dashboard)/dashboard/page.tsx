"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import {
  ArrowRight,
  Calendar,
  Clock,
  MessageSquare,
  TrendingUp,
  Users,
  Video,
  Plus,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

// Sample data
const upcomingSeminars = [
  {
    id: "1",
    title: "Heart Health Fundamentals",
    doctor: "Dr. Sarah Johnson",
    doctorAvatar: "/placeholder.svg?height=40&width=40&text=SJ",
    date: "May 15, 2025",
    time: "10:00 AM - 11:30 AM",
    participants: 24,
    category: "Cardiology",
  },
  {
    id: "2",
    title: "Stress Management Techniques",
    doctor: "Dr. Michael Chen",
    doctorAvatar: "/placeholder.svg?height=40&width=40&text=MC",
    date: "May 18, 2025",
    time: "2:00 PM - 3:30 PM",
    participants: 18,
    category: "Mental Health",
  },
  {
    id: "3",
    title: "Nutrition for Longevity",
    doctor: "Dr. Emily Rodriguez",
    doctorAvatar: "/placeholder.svg?height=40&width=40&text=ER",
    date: "May 20, 2025",
    time: "11:00 AM - 12:30 PM",
    participants: 32,
    category: "Nutrition",
  },
]

const recentActivity = [
  {
    id: "1",
    type: "message",
    content: "New message from Dr. Sarah Johnson",
    time: "10 minutes ago",
    icon: MessageSquare,
  },
  {
    id: "2",
    type: "seminar",
    content: "You registered for 'Heart Health Fundamentals'",
    time: "2 hours ago",
    icon: Video,
  },
  {
    id: "3",
    type: "calendar",
    content: "Appointment reminder: Wellness Check-up",
    time: "Yesterday",
    icon: Calendar,
  },
  {
    id: "4",
    type: "group",
    content: "You were added to 'Wellness Support Group'",
    time: "2 days ago",
    icon: Users,
  },
]

// Doctor-specific data
interface DoctorStat {
  title: string
  value: number | string
  change?: string
  icon: React.ComponentType<{ className?: string }>
  color: string
}

const doctorStats: DoctorStat[] = [
  {
    title: "Total Seminars",
    value: 24,
    change: "+3",
    icon: Video,
    color: "bg-blue-100 text-blue-700",
  },
  {
    title: "Total Participants",
    value: 568,
    change: "+42",
    icon: Users,
    color: "bg-green-100 text-green-700",
  },
  {
    title: "Engagement Rate",
    value: "87%",
    change: "+5%",
    icon: TrendingUp,
    color: "bg-purple-100 text-purple-700",
  },
  {
    title: "Messages",
    value: 18,
    change: "+3",
    icon: MessageSquare,
    color: "bg-yellow-100 text-yellow-700",
  },
]

export default function DoctorDashboardPage() {
  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="mt-1 text-sm text-gray-500">Manage your seminars and connect with patients</p>
        </div>
        <div className="mt-4 md:mt-0">
          <Button className="bg-teal-600 hover:bg-teal-700" asChild>
            <Link href="/dashboard/seminars">
              <Plus className="mr-2 h-4 w-4" /> Create Seminar
            </Link>
          </Button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {doctorStats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                    <div className="flex items-center mt-1">
                      <h3 className="text-2xl font-bold">{stat.value}</h3>
                      {stat.change && <span className="ml-2 text-xs font-medium text-green-600">{stat.change}</span>}
                    </div>
                  </div>
                  <div className={`p-3 rounded-full ${stat.color}`}>
                    <stat.icon className="h-5 w-5" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content - Left Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Upcoming Seminars */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle>Your Upcoming Seminars</CardTitle>
                  <Button variant="ghost" size="sm" className="text-teal-600" asChild>
                    <Link href="/dashboard/seminars">
                      View All <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <CardDescription>Seminars you're hosting in the coming days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingSeminars.map((seminar) => (
                    <div key={seminar.id} className="flex items-start p-3 rounded-lg hover:bg-gray-50">
                      <div className="flex-shrink-0 mr-4">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={seminar.doctorAvatar || "/placeholder.svg"} alt={seminar.doctor} />
                          <AvatarFallback>
                            {seminar.doctor
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <Link
                            href={`/dashboard/seminars/${seminar.id}`}
                            className="text-base font-medium text-gray-900 hover:text-teal-600"
                          >
                            {seminar.title}
                          </Link>
                          <Badge variant="outline" className="ml-2">
                            {seminar.category}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-500">{seminar.doctor}</p>
                        <div className="mt-1 flex items-center text-xs text-gray-500">
                          <Calendar className="mr-1 h-3 w-3" />
                          <span>{seminar.date}</span>
                          <span className="mx-1">•</span>
                          <Clock className="mr-1 h-3 w-3" />
                          <span>{seminar.time}</span>
                          <span className="mx-1">•</span>
                          <Users className="mr-1 h-3 w-3" />
                          <span>{seminar.participants} participants</span>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" className="ml-2" asChild>
                        <Link href={`/dashboard/seminars/${seminar.id}`}>Manage</Link>
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="pt-0">
                <Button className="w-full bg-teal-600 hover:bg-teal-700" asChild>
                  <Link href="/dashboard/seminars">
                    <Plus className="mr-2 h-4 w-4" /> Create New Seminar
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>

          {/* Engagement Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Engagement Overview</CardTitle>
                <CardDescription>Participant engagement in your recent seminars</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium">Heart Health Fundamentals</span>
                      <span className="text-sm text-gray-500">92%</span>
                    </div>
                    <Progress value={92} className="h-2" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium">Stress Management Techniques</span>
                      <span className="text-sm text-gray-500">78%</span>
                    </div>
                    <Progress value={78} className="h-2" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium">Nutrition for Longevity</span>
                      <span className="text-sm text-gray-500">85%</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View Detailed Analytics
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        </div>

        {/* Sidebar - Right Column */}
        <div className="space-y-6">
          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Your latest interactions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-start">
                      <div className="flex-shrink-0 mr-3">
                        <div className="h-8 w-8 rounded-full bg-gray-1
                        00 flex items-center justify-center">
                          <activity.icon className="h-4 w-4 text-gray-600" />
                        </div>
                      </div>
                      <div>
                        <p className="text-sm">{activity.content}</p>
                        <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" size="sm" className="w-full text-gray-600">
                  View All Activity
                </Button>
              </CardFooter>
            </Card>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y">
                  <Link href="/dashboard/calendar" className="flex items-center p-3 hover:bg-gray-50 transition-colors">
                    <Calendar className="h-5 w-5 mr-3 text-gray-500" />
                    <span className="text-sm font-medium">Schedule a Seminar</span>
                  </Link>
                  <Link href="/dashboard/chat" className="flex items-center p-3 hover:bg-gray-50 transition-colors">
                    <MessageSquare className="h-5 w-5 mr-3 text-gray-500" />
                    <span className="text-sm font-medium">Message a Colleague</span>
                  </Link>
                  <Link href="/dashboard/profile" className="flex items-center p-3 hover:bg-gray-50 transition-colors">
                    <Users className="h-5 w-5 mr-3 text-gray-500" />
                    <span className="text-sm font-medium">Update Your Profile</span>
                  </Link>
                  <Link
                    href="/dashboard/directory"
                    className="flex items-center p-3 hover:bg-gray-50 transition-colors"
                  >
                    <Users className="h-5 w-5 mr-3 text-gray-500" />
                    <span className="text-sm font-medium">Browse Doctor Directory</span>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}