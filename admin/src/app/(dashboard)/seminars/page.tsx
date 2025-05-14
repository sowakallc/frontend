"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowUpDown, Check, Edit, Filter, MoreHorizontal, Plus, Search, Trash, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
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

// Seminar interface
interface Seminar {
  id: string
  title: string
  status: string
  date: string
  description: string
}

// Sample seminars data
const seminars: Seminar[] = [
  {
    id: "1",
    title: "Employee Wellness Workshop",
    status: "active",
    date: "May 20, 2025",
    description: "Promoting mental and physical health",
  },
  {
    id: "2",
    title: "Leadership Training",
    status: "ongoing",
    date: "May 15, 2025",
    description: "Developing management skills",
  },
  {
    id: "3",
    title: "Safety Compliance Seminar",
    status: "inactive",
    date: "April 30, 2025",
    description: "Workplace safety regulations",
  },
  {
    id: "4",
    title: "Team Building Retreat",
    status: "active",
    date: "June 1, 2025",
    description: "Enhancing team collaboration",
  },
]

export default function SeminarsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedStatus, setSelectedStatus] = useState("all")
  const [showFilters, setShowFilters] = useState(false)
  const [isAddSeminarOpen, setIsAddSeminarOpen] = useState(false)
  const [selectedSeminars, setSelectedSeminars] = useState<string[]>([])
  const [sortField, setSortField] = useState("title")
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc")

  // Filter seminars based on search query and status
  const filteredSeminars = seminars.filter((seminar) => {
    const matchesSearch =
      seminar.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      seminar.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = selectedStatus === "all" || seminar.status === selectedStatus
    return matchesSearch && matchesStatus
  })

  // Sort seminars
  const sortedSeminars = [...filteredSeminars].sort((a, b) => {
    let comparison = 0
    if (sortField === "title") {
      comparison = a.title.localeCompare(b.title)
    } else if (sortField === "date") {
      comparison = new Date(a.date).getTime() - new Date(b.date).getTime()
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

  const handleSelectAllSeminars = (checked: boolean) => {
    if (checked) {
      setSelectedSeminars(sortedSeminars.map((seminar) => seminar.id))
    } else {
      setSelectedSeminars([])
    }
  }

  const handleSelectSeminar = (seminarId: string, checked: boolean) => {
    if (checked) {
      setSelectedSeminars([...selectedSeminars, seminarId])
    } else {
      setSelectedSeminars(selectedSeminars.filter((id) => id !== seminarId))
    }
  }

  const handleAddSeminar = () => {
    toast.success("Seminar added", {
      description: "The new seminar has been added successfully.",
    })
    setIsAddSeminarOpen(false)
  }

  const handleDeleteSeminar = (seminarId: string) => {
    toast.success("Seminar deleted", {
      description: "The seminar has been deleted successfully.",
    })
  }

  const handleBulkAction = (action: string) => {
    toast.success(`${action} seminars`, {
      description: `${selectedSeminars.length} seminars have been ${action.toLowerCase()}.`,
    })
    setSelectedSeminars([])
  }

  return (
    <div>
      <Toaster />
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Seminar Management</h1>
          <p className="mt-1 text-sm text-gray-500">Manage all seminars and their statuses</p>
        </div>
        <div className="mt-4 md:mt-0 flex gap-2">
          <Button variant="outline" onClick={() => setShowFilters(!showFilters)}>
            <Filter className="mr-2 h-4 w-4" /> Filters
          </Button>
          <Button className="bg-teal-600 hover:bg-teal-700" onClick={() => setIsAddSeminarOpen(true)}>
            <Plus className="mr-2 h-4 w-4" /> Add Seminar
          </Button>
        </div>
      </div>

      <Card className="bg-white">
        <CardHeader className="pb-3">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <CardTitle>Seminars</CardTitle>
              <CardDescription>View and manage all seminars</CardDescription>
            </div>
            <div className="relative w-full md:w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                placeholder="Search seminars..."
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
              className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4"
            >
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
                    <SelectItem value="ongoing">Ongoing</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </motion.div>
          )}

          {selectedSeminars.length > 0 && (
            <div className="mt-4 flex items-center justify-between bg-gray-50 p-2 rounded-md">
              <span className="text-sm font-medium">{selectedSeminars.length} seminars selected</span>
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
              <table className="w-full caption-bottom text HAMs-sm">
                <thead className="border-b bg-gray-50">
                  <tr>
                    <th className="h-12 px-4 text-left align-middle font-medium">
                      <Checkbox
                        checked={selectedSeminars.length === sortedSeminars.length && sortedSeminars.length > 0}
                        onCheckedChange={handleSelectAllSeminars}
                        aria-label="Select all seminars"
                      />
                    </th>
                    <th
                      className="h-12 px-4 text-left align-middle font-medium cursor-pointer"
                      onClick={() => handleSort("title")}
                    >
                      <div className="flex items-center">
                        Title
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                      </div>
                    </th>
                    <th className="h-12 px-4 text-left align-middle font-medium">Status</th>
                    <th
                      className="h-12 px-4 text-left align-middle font-medium cursor-pointer"
                      onClick={() => handleSort("date")}
                    >
                      <div className="flex items-center">
                        Date
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                      </div>
                    </th>
                    <th className="h-12 px-4 text-left align-middle font-medium">Description</th>
                    <th className="h-12 px-4 text-right align-middle font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {sortedSeminars.length > 0 ? (
                    sortedSeminars.map((seminar) => (
                      <tr key={seminar.id} className="border-b hover:bg-gray-50">
                        <td className="p-4 align-middle">
                          <Checkbox
                            checked={selectedSeminars.includes(seminar.id)}
                            onCheckedChange={(checked) => handleSelectSeminar(seminar.id, checked as boolean)}
                            aria-label={`Select ${seminar.title}`}
                          />
                        </td>
                        <td className="p-4 align-middle">{seminar.title}</td>
                        <td className="p-4 align-middle">
                          <Badge variant="outline" className="bg-teal-100 text-teal-800 hover:bg-teal-100">
                            {seminar.status}
                          </Badge>
                        </td>
                        <td className="p-4 align-middle">{seminar.date}</td>
                        <td className="p-4 align-middle">{seminar.description}</td>
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
                                {seminar.status === "active" ? (
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
                                onClick={() => handleDeleteSeminar(seminar.id)}
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
                      <td colSpan={6} className="p-4 text-center text-gray-500">
                        No seminars found matching your criteria
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex items-center justify-between mt-4">
            <div className="text-sm text-gray-500">
              Showing <span className="font-medium">{sortedSeminars.length}</span> of{" "}
              <span className="font-medium">{seminars.length}</span> seminars
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

      {/* Add Seminar Dialog */}
      <Dialog open={isAddSeminarOpen} onOpenChange={setIsAddSeminarOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Add New Seminar</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="title">Title</Label>
              <Input id="title" placeholder="Enter seminar title" />
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
                  <SelectItem value="ongoing">Ongoing</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="date">Date</Label>
              <Input id="date" type="date" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="description">Description</Label>
              <Input id="description" placeholder="Enter seminar description" />
            </div>
          </div>
          <div className="flex justify-end space-x-2">
            <Button variant="outline" onClick={() => setIsAddSeminarOpen(false)}>
              Cancel
            </Button>
            <Button className="bg-teal-600 hover:bg-teal-700" onClick={handleAddSeminar}>
              Add Seminar
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}