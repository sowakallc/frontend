"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  Clock,
  DollarSign,
  Download,
  ShieldAlert,
  Users,
  Video,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

// Sample data for admin dashboard
const overviewStats = [
  {
    title: "Total Users",
    value: "2,856",
    change: "+12%",
    changeType: "positive",
    icon: Users,
    color: "bg-blue-100 text-blue-700",
  },
  {
    title: "Active Doctors",
    value: "124",
    change: "+5%",
    changeType: "positive",
    icon: CheckCircle2,
    color: "bg-green-100 text-green-700",
  },
  {
    title: "Total Seminars",
    value: "348",
    change: "+18%",
    changeType: "positive",
    icon: Video,
    color: "bg-purple-100 text-purple-700",
  },
  {
    title: "System Alerts",
    value: "3",
    change: "-2",
    changeType: "negative",
    icon: ShieldAlert,
    color: "bg-red-100 text-red-700",
  },
]

// Recent activities
const recentActivities = [
  {
    id: "1",
    user: "Dr. Sarah Johnson",
    userAvatar: "/placeholder.svg?height=40&width=40&text=SJ",
    action: "created a new seminar",
    target: "Heart Health Fundamentals",
    time: "10 minutes ago",
  },
  {
    id: "2",
    user: "Admin User",
    userAvatar: "/placeholder.svg?height=40&width=40&text=AU",
    action: "approved doctor registration for",
    target: "Dr. Michael Chen",
    time: "1 hour ago",
  },
  {
    id: "3",
    user: "John Smith",
    userAvatar: "/placeholder.svg?height=40&width=40&text=JS",
    action: "reported an issue with",
    target: "Stress Management Seminar",
    time: "2 hours ago",
  },
  {
    id: "4",
    user: "System",
    userAvatar: "/placeholder.svg?height=40&width=40&text=SYS",
    action: "performed automatic backup",
    target: "",
    time: "4 hours ago",
  },
  {
    id: "5",
    user: "Dr. Emily Rodriguez",
    userAvatar: "/placeholder.svg?height=40&width=40&text=ER",
    action: "requested approval for",
    target: "Nutrition for Longevity Seminar",
    time: "Yesterday",
  },
]

// Pending approvals
const pendingApprovals = [
  {
    id: "1",
    type: "doctor",
    name: "Dr. Robert Williams",
    avatar: "/placeholder.svg?height=40&width=40&text=RW",
    specialty: "Endocrinology",
    submittedDate: "May 9, 2025",
  },
  {
    id: "2",
    type: "seminar",
    name: "Advanced Stress Management Techniques",
    avatar: "/placeholder.svg?height=40&width=40&text=SM",
    doctor: "Dr. Michael Chen",
    submittedDate: "May 8, 2025",
  },
  {
    id: "3",
    type: "content",
    name: "Sleep Health Guide",
    avatar: "/placeholder.svg?height=40&width=40&text=SH",
    author: "Dr. James Wilson",
    submittedDate: "May 7, 2025",
  },
]

// System health metrics
const systemHealth = [
  {
    name: "Server Uptime",
    value: 99.98,
    status: "healthy",
  },
  {
    name: "API Response Time",
    value: 245,
    unit: "ms",
    status: "healthy",
  },
  {
    name: "Database Load",
    value: 42,
    unit: "%",
    status: "healthy",
  },
  {
    name: "Storage Usage",
    value: 68,
    unit: "%",
    status: "warning",
  },
]

export default function AdminDashboardPage() {
  const [timeRange, setTimeRange] = useState("week")

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="mt-1 text-sm text-gray-500">Overview of your wellness platform</p>
        </div>
        <div className="mt-4 md:mt-0 flex gap-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" /> Export Report
          </Button>
          <Button className="bg-teal-600 hover:bg-teal-700">
            <BarChart3 className="mr-2 h-4 w-4" /> View Analytics
          </Button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {overviewStats.map((stat, index) => (
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
                      <span
                        className={`ml-2 text-xs font-medium ${
                          stat.changeType === "positive" ? "text-green-600" : "text-red-600"
                        }`}
                      >
                        {stat.change}
                      </span>
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
          {/* Platform Activity */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle>Platform Activity</CardTitle>
                  <Tabs defaultValue={timeRange} onValueChange={setTimeRange} className="w-[240px]">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="day">Day</TabsTrigger>
                      <TabsTrigger value="week">Week</TabsTrigger>
                      <TabsTrigger value="month">Month</TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>
                <CardDescription>Overview of platform usage and engagement</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center bg-gray-50 rounded-md">
                  <div className="text-center">
                    <BarChart3 className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                    <p className="text-gray-500">Activity chart visualization would appear here</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-gray-50 p-4 rounded-md">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-sm font-medium text-gray-500">User Registrations</h4>
                      <ArrowUpRight className="h-4 w-4 text-green-500" />
                    </div>
                    <p className="text-2xl font-bold">128</p>
                    <p className="text-xs text-gray-500 mt-1">+22% from last {timeRange}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-md">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-sm font-medium text-gray-500">Seminar Attendance</h4>
                      <ArrowUpRight className="h-4 w-4 text-green-500" />
                    </div>
                    <p className="text-2xl font-bold">85%</p>
                    <p className="text-xs text-gray-500 mt-1">+5% from last {timeRange}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-md">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-sm font-medium text-gray-500">Active Sessions</h4>
                      <ArrowUpRight className="h-4 w-4 text-green-500" />
                    </div>
                    <p className="text-2xl font-bold">342</p>
                    <p className="text-xs text-gray-500 mt-1">+18% from last {timeRange}</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="pt-0">
                <Button variant="outline" className="w-full">
                  <BarChart3 className="mr-2 h-4 w-4" /> View Detailed Analytics
                </Button>
              </CardFooter>
            </Card>
          </motion.div>

          {/* Recent Activities */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Recent Activities</CardTitle>
                  <Button variant="ghost" size="sm" className="text-teal-600">
                    View All <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
                <CardDescription>Latest actions across the platform</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity) => (
                    <div key={activity.id} className="flex items-start">
                      <Avatar className="h-10 w-10 mr-3">
                        <AvatarImage src={activity.userAvatar || "/placeholder.svg"} alt={activity.user} />
                        <AvatarFallback>
                          {activity.user
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-900">
                          <span className="font-medium">{activity.user}</span> {activity.action}{" "}
                          {activity.target && <span className="font-medium">{activity.target}</span>}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Sidebar - Right Column */}
        <div className="space-y-6">
          {/* Pending Approvals */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Pending Approvals</CardTitle>
                  <Badge>{pendingApprovals.length}</Badge>
                </div>
                <CardDescription>Items requiring your review</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y">
                  {pendingApprovals.map((item) => (
                    <div key={item.id} className="flex items-center p-4 hover:bg-gray-50">
                      <Avatar className="h-10 w-10 mr-3">
                        <AvatarImage src={item.avatar || "/placeholder.svg"} alt={item.name} />
                        <AvatarFallback>
                          {item.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center">
                          <Badge
                            variant="outline"
                            className={
                              item.type === "doctor"
                                ? "bg-blue-100 text-blue-800 hover:bg-blue-100"
                                : item.type === "seminar"
                                  ? "bg-purple-100 text-purple-800 hover:bg-purple-100"
                                  : "bg-amber-100 text-amber-800 hover:bg-amber-100"
                            }
                          >
                            {item.type}
                          </Badge>
                        </div>
                        <p className="font-medium text-sm mt-1">{item.name}</p>
                        <div className="flex items-center text-xs text-gray-500 mt-1">
                          <Clock className="h-3 w-3 mr-1" />
                          <span>Submitted: {item.submittedDate}</span>
                        </div>
                      </div>
                      <Button size="sm" className="ml-2 bg-teal-600 hover:bg-teal-700">
                        Review
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/admin/approvals">View All Pending Approvals</Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>

          {/* System Health */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>System Health</CardTitle>
                <CardDescription>Current platform status</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {systemHealth.map((metric) => (
                  <div key={metric.name}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium">{metric.name}</span>
                      <span
                        className={`text-sm ${
                          metric.status === "healthy" ? "text-green-600" : "text-amber-600"
                        } flex items-center`}
                      >
                        {metric.value}
                        {metric.unit && metric.unit}
                        {metric.status === "healthy" ? (
                          <CheckCircle2 className="h-4 w-4 ml-1" />
                        ) : (
                          <ShieldAlert className="h-4 w-4 ml-1" />
                        )}
                      </span>
                    </div>
                    <Progress
                      value={metric.unit === "%" ? metric.value : 100}
                      className={`h-2 ${
                        metric.status === "healthy" ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"
                      }`}
                    />
                  </div>
                ))}
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/admin/system">View System Status</Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y">
                  <Link href="/admin/users/new" className="flex items-center p-3 hover:bg-gray-50 transition-colors">
                    <Users className="h-5 w-5 mr-3 text-gray-500" />
                    <span className="text-sm font-medium">Add New User</span>
                  </Link>
                  <Link
                    href="/admin/doctors/approve"
                    className="flex items-center p-3 hover:bg-gray-50 transition-colors"
                  >
                    <CheckCircle2 className="h-5 w-5 mr-3 text-gray-500" />
                    <span className="text-sm font-medium">Approve Doctors</span>
                  </Link>
                  <Link
                    href="/admin/seminars/review"
                    className="flex items-center p-3 hover:bg-gray-50 transition-colors"
                  >
                    <Video className="h-5 w-5 mr-3 text-gray-500" />
                    <span className="text-sm font-medium">Review Seminars</span>
                  </Link>
                  <Link href="/admin/reports" className="flex items-center p-3 hover:bg-gray-50 transition-colors">
                    <BarChart3 className="h-5 w-5 mr-3 text-gray-500" />
                    <span className="text-sm font-medium">Generate Reports</span>
                  </Link>
                  <Link href="/admin/settings" className="flex items-center p-3 hover:bg-gray-50 transition-colors">
                    <DollarSign className="h-5 w-5 mr-3 text-gray-500" />
                    <span className="text-sm font-medium">Manage Billing</span>
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
