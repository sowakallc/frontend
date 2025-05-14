"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowUpDown, Check, Edit, Filter, MoreHorizontal, Plus, Search, Trash, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { toast, Toaster } from "sonner"

// User interface
interface User {
  id: string
  name: string
  email: string
  role: string
  status: string
  avatar: string
  joinDate: string
  lastActive: string
}

// Sample users data
const users: User[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john.doe@example.com",
    role: "patient",
    status: "active",
    avatar: "/placeholder.svg?height=40&width=40&text=JD",
    joinDate: "May 1, 2025",
    lastActive: "10 minutes ago",
  },
  {
    id: "2",
    name: "Dr. Sarah Johnson",
    email: "sarah.johnson@example.com",
    role: "doctor",
    status: "active",
    avatar: "/placeholder.svg?height=40&width=40&text=SJ",
    joinDate: "April 15, 2025",
    lastActive: "2 hours ago",
  },
  {
    id: "3",
    name: "Emily Davis",
    email: "emily.davis@example.com",
    role: "patient",
    status: "inactive",
    avatar: "/placeholder.svg?height=40&width=40&text=ED",
    joinDate: "April 28, 2025",
    lastActive: "3 days ago",
  },
  {
    id: "4",
    name: "Dr. Michael Chen",
    email: "michael.chen@example.com",
    role: "doctor",
    status: "active",
    avatar: "/placeholder.svg?height=40&width=40&text=MC",
    joinDate: "April 10, 2025",
    lastActive: "1 day ago",
  },
  {
    id: "5",
    name: "Robert Williams",
    email: "robert.williams@example.com",
    role: "patient",
    status: "active",
    avatar: "/placeholder.svg?height=40&width=40&text=RW",
    joinDate: "May 2, 2025",
    lastActive: "5 hours ago",
  },
  {
    id: "6",
    name: "Dr. Emily Rodriguez",
    email: "emily.rodriguez@example.com",
    role: "doctor",
    status: "pending",
    avatar: "/placeholder.svg?height=40&width=40&text=ER",
    joinDate: "May 5, 2025",
    lastActive: "Just now",
  },
  {
    id: "7",
    name: "Lisa Park",
    email: "lisa.park@example.com",
    role: "patient",
    status: "active",
    avatar: "/placeholder.svg?height=40&width=40&text=LP",
    joinDate: "April 20, 2025",
    lastActive: "2 days ago",
  },
  {
    id: "8",
    name: "Dr. James Wilson",
    email: "james.wilson@example.com",
    role: "doctor",
    status: "inactive",
    avatar: "/placeholder.svg?height=40&width=40&text=JW",
    joinDate: "March 15, 2025",
    lastActive: "1 week ago",
  },
]

export default function AdminUsersPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedRole, setSelectedRole] = useState("all")
  const [selectedStatus, setSelectedStatus] = useState("all")
  const [showFilters, setShowFilters] = useState(false)
  const [isAddUserOpen, setIsAddUserOpen] = useState(false)
  const [selectedUsers, setSelectedUsers] = useState<string[]>([])
  const [sortField, setSortField] = useState("name")
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc")

  // Filter users based on search query and filters
  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesRole = selectedRole === "all" || user.role === selectedRole
    const matchesStatus = selectedStatus === "all" || user.status === selectedStatus

    return matchesSearch && matchesRole && matchesStatus
  })

  // Sort users
  const sortedUsers = [...filteredUsers].sort((a, b) => {
    let comparison = 0
    if (sortField === "name") {
      comparison = a.name.localeCompare(b.name)
    } else if (sortField === "email") {
      comparison = a.email.localeCompare(b.email)
    } else if (sortField === "joinDate") {
      comparison = new Date(a.joinDate).getTime() - new Date(b.joinDate).getTime()
    }
    return sortDirection === "asc" ? comparison : -comparison
  })

  const handleSort = (field: string) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortField(field)
      setSortDirection("asc")
    }
  }

  const handleSelectAllUsers = (checked: boolean) => {
    if (checked) {
      setSelectedUsers(sortedUsers.map((user) => user.id))
    } else {
      setSelectedUsers([])
    }
  }

  const handleSelectUser = (userId: string, checked: boolean) => {
    if (checked) {
      setSelectedUsers([...selectedUsers, userId])
    } else {
      setSelectedUsers(selectedUsers.filter((id) => id !== userId))
    }
  }

  const handleAddUser = () => {
    toast.success("User added", {
      description: "The new user has been added successfully.",
    })
    setIsAddUserOpen(false)
  }

  const handleDeleteUser = (userId: string) => {
    toast.success("User deleted", {
      description: "The user has been deleted successfully.",
    })
  }

  const handleBulkAction = (action: string) => {
    toast.success(`${action} users`, {
      description: `${selectedUsers.length} users have been ${action.toLowerCase()}.`,
    })
    setSelectedUsers([])
  }

  return (
    <div>
      <Toaster />
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">User Management</h1>
          <p className="mt-1 text-sm text-gray-500">Manage users, roles, and permissions</p>
        </div>
        <div className="mt-4 md:mt-0 flex gap-2">
          <Button variant="outline" onClick={() => setShowFilters(!showFilters)}>
            <Filter className="mr-2 h-4 w-4" /> Filters
          </Button>
          <Button className="bg-teal-600 hover:bg-teal-700" onClick={() => setIsAddUserOpen(true)}>
            <Plus className="mr-2 h-4 w-4" /> Add User
          </Button>
        </div>
      </div>

      <Card className="bg-white">
        <CardHeader className="pb-3">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <CardTitle>Users</CardTitle>
              <CardDescription>Manage all users on the platform</CardDescription>
            </div>
            <div className="relative w-full md:w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                placeholder="Search users..."
                className="pl-9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
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
                <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                <Select value={selectedRole} onValueChange={setSelectedRole}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Roles</SelectItem>
                    <SelectItem value="patient">Patient</SelectItem>
                    <SelectItem value="doctor">Doctor</SelectItem>
                    <SelectItem value="admin">Admin</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Statuses</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="inactive">Inactive</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Join Date</label>
                <Select defaultValue="all">
                  <SelectTrigger>
                    <SelectValue placeholder="Select date range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Time</SelectItem>
                    <SelectItem value="today">Today</SelectItem>
                    <SelectItem value="this-week">This Week</SelectItem>
                    <SelectItem value="this-month">This Month</SelectItem>
                    <SelectItem value="last-month">Last Month</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </motion.div>
          )}

          {selectedUsers.length > 0 && (
            <div className="mt-4 flex items-center justify-between bg-gray-50 p-2 rounded-md">
              <span className="text-sm font-medium">{selectedUsers.length} users selected</span>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={() => handleBulkAction("Activated")}>
                  <Check className="mr-2 h-4 w-4" /> Activate
                </Button>
                <Button variant="outline" size="sm" onClick={() => handleBulkAction("Deactivated")}>
                  <X className="mr-2 h-4 w-4" /> Deactivate
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-red-600"
                  onClick={() => handleBulkAction("Deleted")}
                >
                  <Trash className="mr-2 h-4 w-4" /> Delete
                </Button>
              </div>
            </div>
          )}
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <div className="relative w-full overflow-auto">
              <table className="w-full caption-bottom text-sm">
                <thead className="border-b bg-gray-50">
                  <tr>
                    <th className="h-12 px-4 text-left align-middle font-medium">
                      <Checkbox
                        checked={selectedUsers.length === sortedUsers.length && sortedUsers.length > 0}
                        onCheckedChange={handleSelectAllUsers}
                        aria-label="Select all users"
                      />
                    </th>
                    <th
                      className="h-12 px-4 text-left align-middle font-medium cursor-pointer"
                      onClick={() => handleSort("name")}
                    >
                      <div className="flex items-center">
                        User
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                      </div>
                    </th>
                    <th
                      className="h-12 px-4 text-left align-middle font-medium cursor-pointer"
                      onClick={() => handleSort("email")}
                    >
                      <div className="flex items-center">
                        Email
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                      </div>
                    </th>
                    <th className="h-12 px-4 text-left align-middle font-medium">Role</th>
                    <th className="h-12 px-4 text-left align-middle font-medium">Status</th>
                    <th
                      className="h-12 px-4 text-left align-middle font-medium cursor-pointer"
                      onClick={() => handleSort("joinDate")}
                    >
                      <div className="flex items-center">
                        Join Date
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                      </div>
                    </th>
                    <th className="h-12 px-4 text-right align-middle font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {sortedUsers.length > 0 ? (
                    sortedUsers.map((user) => (
                      <tr key={user.id} className="border-b hover:bg-gray-50">
                        <td className="p-4 align-middle">
                          <Checkbox
                            checked={selectedUsers.includes(user.id)}
                            onCheckedChange={(checked) => handleSelectUser(user.id, checked as boolean)}
                            aria-label={`Select ${user.name}`}
                          />
                        </td>
                        <td className="p-4 align-middle">
                          <div className="flex items-center gap-3">
                            <Avatar className="h-9 w-9">
                              <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                              <AvatarFallback>
                                {user.name
                                  .split(" ")
                                  .map((n: string) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium">{user.name}</div>
                              <div className="text-xs text-gray-500">Last active: {user.lastActive}</div>
                            </div>
                          </div>
                        </td>
                        <td className="p-4 align-middle">{user.email}</td>
                        <td className="p-4 align-middle">
                          <Badge variant="outline" className="bg-teal-100 text-teal-800 hover:bg-teal-100">
                            {user.role}
                          </Badge>
                        </td>
                        <td className="p-4 align-middle">
                          <Badge variant="outline" className="bg-teal-100 text-teal-800 hover:bg-teal-100">
                            {user.status}
                          </Badge>
                        </td>
                        <td className="p-4 align-middle">{user.joinDate}</td>
                        <td className="p-4 align-middle text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-5 w-5" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>
                                <Edit className="mr-2 h-4 w-4" />
                                <span>Edit</span>
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                {user.status === "active" ? (
                                  <>
                                    <X className="mr-2 h-4 w-4" />
                                    <span>Deactivate</span>
                                  </>
                                ) : (
                                  <>
                                    <Check className="mr-2 h-4 w-4" />
                                    <span>Activate</span>
                                  </>
                                )}
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-red-600" onClick={() => handleDeleteUser(user.id)}>
                                <Trash className="mr-2 h-4 w-4" />
                                <span>Delete</span>
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={7} className="p-4 text-center text-gray-500">
                        No users found matching your criteria
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex items-center justify-between mt-4">
            <div className="text-sm text-gray-500">
              Showing <span className="font-medium">{sortedUsers.length}</span> of{" "}
              <span className="font-medium">{users.length}</span> users
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" disabled>
                Previous
              </Button>
              <Button variant="outline" size="sm">
                Next
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Add User Dialog */}
      <Dialog open={isAddUserOpen} onOpenChange={setIsAddUserOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Add New User</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="Enter full name" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter email address" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="role">Role</Label>
              <Select defaultValue="patient">
                <SelectTrigger id="role">
                  <SelectValue placeholder="Select role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="patient">Patient</SelectItem>
                  <SelectItem value="doctor">Doctor</SelectItem>
                  <SelectItem value="admin">Admin</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="status">Status</Label>
              <Select defaultValue="active">
                <SelectTrigger id="status">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="send-email" />
                <label
                  htmlFor="send-email"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Send welcome email
                </label>
              </div>
            </div>
          </div>
          <div className="flex justify-end space-x-2">
            <Button variant="outline" onClick={() => setIsAddUserOpen(false)}>
              Cancel
            </Button>
            <Button className="bg-teal-600 hover:bg-teal-700" onClick={handleAddUser}>
              Add User
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
