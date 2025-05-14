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

// Employee interface
interface Employee {
  id: string
  name: string
  email: string
  role: string
  status: string
  avatar: string
  hireDate: string
}

// Sample employees data
const employees: Employee[] = [
  {
    id: "1",
    name: "Alice Smith",
    email: "alice.smith@example.com",
    role: "staff",
    status: "active",
    avatar: "/placeholder.svg?height=40&width=40&text=AS",
    hireDate: "May 1, 2025",
  },
  {
    id: "2",
    name: "Bob Johnson",
    email: "bob.johnson@example.com",
    role: "manager",
    status: "active",
    avatar: "/placeholder.svg?height=40&width=40&text=BJ",
    hireDate: "April 15, 2025",
  },
  {
    id: "3",
    name: "Carol White",
    email: "carol.white@example.com",
    role: "staff",
    status: "inactive",
    avatar: "/placeholder.svg?height=40&width=40&text=CW",
    hireDate: "April 20, 2025",
  },
  {
    id: "4",
    name: "David Brown",
    email: "david.brown@example.com",
    role: "admin",
    status: "pending",
    avatar: "/placeholder.svg?height=40&width=40&text=DB",
    hireDate: "May 5, 2025",
  },
]

export default function EmployeePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedRole, setSelectedRole] = useState("all")
  const [selectedStatus, setSelectedStatus] = useState("all")
  const [showFilters, setShowFilters] = useState(false)
  const [isAddEmployeeOpen, setIsAddEmployeeOpen] = useState(false)
  const [selectedEmployees, setSelectedEmployees] = useState<string[]>([])
  const [sortField, setSortField] = useState("name")
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc")

  // Filter employees based on search query and filters
  const filteredEmployees = employees.filter((employee) => {
    const matchesSearch =
      employee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      employee.email.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesRole = selectedRole === "all" || employee.role === selectedRole
    const matchesStatus = selectedStatus === "all" || employee.status === selectedStatus
    return matchesSearch && matchesRole && matchesStatus
  })

  // Sort employees
  const sortedEmployees = [...filteredEmployees].sort((a, b) => {
    let comparison = 0
    if (sortField === "name") {
      comparison = a.name.localeCompare(b.name)
    } else if (sortField === "email") {
      comparison = a.email.localeCompare(b.email)
    } else if (sortField === "hireDate") {
      comparison = new Date(a.hireDate).getTime() - new Date(b.hireDate).getTime()
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

  const handleSelectAllEmployees = (checked: boolean) => {
    if (checked) {
      setSelectedEmployees(sortedEmployees.map((employee) => employee.id))
    } else {
      setSelectedEmployees([])
    }
  }

  const handleSelectEmployee = (employeeId: string, checked: boolean) => {
    if (checked) {
      setSelectedEmployees([...selectedEmployees, employeeId])
    } else {
      setSelectedEmployees(selectedEmployees.filter((id) => id !== employeeId))
    }
  }

  const handleAddEmployee = () => {
    toast.success("Employee added", {
      description: "The new employee has been added successfully.",
    })
    setIsAddEmployeeOpen(false)
  }

  const handleDeleteEmployee = (employeeId: string) => {
    toast.success("Employee deleted", {
      description: "The employee has been deleted successfully.",
    })
  }

  const handleBulkAction = (action: string) => {
    toast.success(`${action} employees`, {
      description: `${selectedEmployees.length} employees have been ${action.toLowerCase()}.`,
    })
    setSelectedEmployees([])
  }

  return (
    <div>
      <Toaster />
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Employee Management</h1>
          <p className="mt-1 text-sm text-gray-500">Manage employees and their roles</p>
        </div>
        <div className="mt-4 md:mt-0 flex gap-2">
          <Button variant="outline" onClick={() => setShowFilters(!showFilters)}>
            <Filter className="mr-2 h-4 w-4" /> Filters
          </Button>
          <Button className="bg-teal-600 hover:bg-teal-700" onClick={() => setIsAddEmployeeOpen(true)}>
            <Plus className="mr-2 h-4 w-4" /> Add Employee
          </Button>
        </div>
      </div>

      <Card className="bg-white">
        <CardHeader className="pb-3">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <CardTitle>Employees</CardTitle>
              <CardDescription>Manage all employees in the application</CardDescription>
            </div>
            <div className="relative w-full md:w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                placeholder="Search employees..."
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
                    <SelectItem value="staff">Staff</SelectItem>
                    <SelectItem value="manager">Manager</SelectItem>
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
            </motion.div>
          )}

          {selectedEmployees.length > 0 && (
            <div className="mt-4 flex items-center justify-between bg-gray-50 p-2 rounded-md">
              <span className="text-sm font-medium">{selectedEmployees.length} employees selected</span>
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
                        checked={selectedEmployees.length === sortedEmployees.length && sortedEmployees.length > 0}
                        onCheckedChange={handleSelectAllEmployees}
                        aria-label="Select all employees"
                      />
                    </th>
                    <th
                      className="h-12 px-4 text-left align-middle font-medium cursor-pointer"
                      onClick={() => handleSort("name")}
                    >
                      <div className="flex items-center">
                        Name
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
                      onClick={() => handleSort("hireDate")}
                    >
                      <div className="flex items-center">
                        Hire Date
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                      </div>
                    </th>
                    <th className="h-12 px-4 text-right align-middle font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {sortedEmployees.length > 0 ? (
                    sortedEmployees.map((employee) => (
                      <tr key={employee.id} className="border-b hover:bg-gray-50">
                        <td className="p-4 align-middle">
                          <Checkbox
                            checked={selectedEmployees.includes(employee.id)}
                            onCheckedChange={(checked) => handleSelectEmployee(employee.id, checked as boolean)}
                            aria-label={`Select ${employee.name}`}
                          />
                        </td>
                        <td className="p-4 align-middle">
                          <div className="flex items-center gap-3">
                            <Avatar className="h-9 w-9">
                              <AvatarImage src={employee.avatar || "/placeholder.svg"} alt={employee.name} />
                              <AvatarFallback>
                                {employee.name
                                  .split(" ")
                                  .map((n: string) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium">{employee.name}</div>
                            </div>
                          </div>
                        </td>
                        <td className="p-4 align-middle">{employee.email}</td>
                        <td className="p-4 align-middle">
                          <Badge variant="outline" className="bg-teal-100 text-teal-800 hover:bg-teal-100">
                            {employee.role}
                          </Badge>
                        </td>
                        <td className="p-4 align-middle">
                          <Badge variant="outline" className="bg-teal-100 text-teal-800 hover:bg-teal-100">
                            {employee.status}
                          </Badge>
                        </td>
                        <td className="p-4 align-middle">{employee.hireDate}</td>
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
                                {employee.status === "active" ? (
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
                              <DropdownMenuItem
                                className="text-red-600"
                                onClick={() => handleDeleteEmployee(employee.id)}
                              >
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
                        No employees found matching your criteria
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex items-center justify-between mt-4">
            <div className="text-sm text-gray-500">
              Showing <span className="font-medium">{sortedEmployees.length}</span> of{" "}
              <span className="font-medium">{employees.length}</span> employees
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

      {/* Add Employee Dialog */}
      <Dialog open={isAddEmployeeOpen} onOpenChange={setIsAddEmployeeOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Add New Employee</DialogTitle>
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
              <Select defaultValue="staff">
                <SelectTrigger id="role">
                  <SelectValue placeholder="Select role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="staff">Staff</SelectItem>
                  <SelectItem value="manager">Manager</SelectItem>
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
            <Button variant="outline" onClick={() => setIsAddEmployeeOpen(false)}>
              Cancel
            </Button>
            <Button className="bg-teal-600 hover:bg-teal-700" onClick={handleAddEmployee}>
              Add Employee
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
