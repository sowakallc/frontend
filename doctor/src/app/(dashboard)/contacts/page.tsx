"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Building,
  Copy,
  Edit,
  Mail,
  MapPin,
  MessageSquare,
  MoreHorizontal,
  Phone,
  Plus,
  Search,
  Share,
  Trash,
  Users,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast, Toaster } from "sonner"

// Contact interface
interface Contact {
  id: string
  name: string
  specialty: string
  avatar: string
  location: string
  hospital: string
  email: string
  phone: string
  group: string
  favorite: boolean
}

// Sample data for contacts
const contacts: Contact[] = [
  {
    id: "1",
    name: "Dr. Sarah Johnson",
    specialty: "Cardiology",
    avatar: "/placeholder.svg?height=100&width=100&text=SJ",
    location: "New York, NY",
    hospital: "NYC Medical Center",
    email: "sarah.johnson@example.com",
    phone: "+1 (555) 123-4567",
    group: "Colleagues",
    favorite: true,
  },
  {
    id: "2",
    name: "Dr. Michael Chen",
    specialty: "Psychiatry",
    avatar: "/placeholder.svg?height=100&width=100&text=MC",
    location: "San Francisco, CA",
    hospital: "SF General Hospital",
    email: "michael.chen@example.com",
    phone: "+1 (555) 234-5678",
    group: "Colleagues",
    favorite: false,
  },
  {
    id: "3",
    name: "Dr. Emily Rodriguez",
    specialty: "Nutrition",
    avatar: "/placeholder.svg?height=100&width=100&text=ER",
    location: "Miami, FL",
    hospital: "Miami Wellness Center",
    email: "emily.rodriguez@example.com",
    phone: "+1 (555) 345-6789",
    group: "Research Team",
    favorite: true,
  },
  {
    id: "4",
    name: "Dr. James Wilson",
    specialty: "Sleep Medicine",
    avatar: "/placeholder.svg?height=100&width=100&text=JW",
    location: "Chicago, IL",
    hospital: "Chicago Sleep Center",
    email: "james.wilson@example.com",
    phone: "+1 (555) 456-7890",
    group: "Research Team",
    favorite: false,
  },
  {
    id: "5",
    name: "Dr. Lisa Park",
    specialty: "Psychology",
    avatar: "/placeholder.svg?height=100&width=100&text=LP",
    location: "Boston, MA",
    hospital: "Boston Medical Group",
    email: "lisa.park@example.com",
    phone: "+1 (555) 567-8901",
    group: "Conference",
    favorite: false,
  },
  {
    id: "6",
    name: "Dr. Robert Williams",
    specialty: "Endocrinology",
    avatar: "/placeholder.svg?height=100&width=100&text=RW",
    location: "Austin, TX",
    hospital: "Texas Medical Institute",
    email: "robert.williams@example.com",
    phone: "+1 (555) 678-9012",
    group: "Conference",
    favorite: true,
  },
]

// Sample contact groups
const contactGroups = [
  { id: "1", name: "All Contacts", count: contacts.length },
  { id: "2", name: "Favorites", count: contacts.filter((c) => c.favorite).length },
  { id: "3", name: "Colleagues", count: contacts.filter((c) => c.group === "Colleagues").length },
  { id: "4", name: "Research Team", count: contacts.filter((c) => c.group === "Research Team").length },
  { id: "5", name: "Conference", count: contacts.filter((c) => c.group === "Conference").length },
]

export default function ContactsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedGroup, setSelectedGroup] = useState("All Contacts")
  const [isAddContactOpen, setIsAddContactOpen] = useState(false)
  const [newContact, setNewContact] = useState({
    name: "",
    specialty: "",
    email: "",
    phone: "",
    hospital: "",
    location: "",
    group: "Colleagues",
  })

  // Filter contacts based on search query and selected group
  const filteredContacts = contacts.filter((contact) => {
    const matchesSearch =
      contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesGroup =
      selectedGroup === "All Contacts" ||
      (selectedGroup === "Favorites" && contact.favorite) ||
      contact.group === selectedGroup

    return matchesSearch && matchesGroup
  })

  const handleAddContact = () => {
    // In a real app, this would add the contact to the database
    toast.success("Contact added", {
      description: `${newContact.name} has been added to your contacts.`,
    })
    setIsAddContactOpen(false)
    setNewContact({
      name: "",
      specialty: "",
      email: "",
      phone: "",
      hospital: "",
      location: "",
      group: "Colleagues",
    })
  }

  const handleShareContact = (contact: Contact) => {
    // In a real app, this would generate a shareable link or QR code
    toast.success("Contact shared", {
      description: `${contact.name}'s contact information has been copied to clipboard.`,
    })
  }

  const handleDeleteContact = (contact: Contact) => {
    // In a real app, this would delete the contact from the database
    toast.success("Contact deleted", {
      description: `${contact.name} has been removed from your contacts.`,
    })
  }

  const handleStartChat = (contact: Contact) => {
    toast.success("Chat started", {
      description: `Starting a new conversation with ${contact.name}.`,
    })
  }

  const handleCopyInfo = (contact: Contact, field: string) => {
    // In a real app, this would copy the field to clipboard
    toast.success("Copied to clipboard", {
      description: `${field} has been copied to clipboard.`,
    })
  }

  return (
    <div>
      <Toaster />
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Contacts</h1>
          <p className="mt-1 text-sm text-gray-500">Manage your professional network</p>
        </div>
        <div className="mt-4 md:mt-0">
          <Button className="bg-teal-600 hover:bg-teal-700" onClick={() => setIsAddContactOpen(true)}>
            <Plus className="mr-2 h-4 w-4" /> Add Contact
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Contact Groups */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="md:col-span-1"
        >
          <Card className="bg-white">
            <CardHeader className="pb-3">
              <CardTitle>Groups</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="space-y-1">
                {contactGroups.map((group) => (
                  <button
                    key={group.id}
                    className={`w-full flex items-center justify-between px-4 py-2 text-sm ${
                      selectedGroup === group.name
                        ? "bg-teal-50 text-teal-700 font-medium"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                    onClick={() => setSelectedGroup(group.name)}
                  >
                    <span>{group.name}</span>
                    <Badge variant="outline">{group.count}</Badge>
                  </button>
                ))}
              </div>
            </CardContent>
            <CardFooter className="pt-3">
              <Button variant="outline" className="w-full">
                <Plus className="mr-2 h-4 w-4" /> New Group
              </Button>
            </CardFooter>
          </Card>
        </motion.div>

        {/* Contacts List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="md:col-span-3"
        >
          <Card className="bg-white">
            <CardHeader className="pb-3">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <CardTitle>{selectedGroup}</CardTitle>
                <div className="relative w-full sm:w-64">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                  <Input
                    placeholder="Search contacts..."
                    className="pl-9"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {filteredContacts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredContacts.map((contact) => (
                    <div key={contact.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex justify-between">
                        <div className="flex items-start space-x-4">
                          <Avatar className="h-12 w-12">
                            <AvatarImage src={contact.avatar || "/placeholder.svg"} alt={contact.name} />
                            <AvatarFallback>
                              {contact.name
                                .split(" ")
                                .map((n: string) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="flex items-center">
                              <h3 className="font-medium">{contact.name}</h3>
                              {contact.favorite && (
                                <svg className="h-4 w-4 ml-1 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                </svg>
                              )}
                            </div>
                            <p className="text-sm text-gray-500">{contact.specialty}</p>
                          </div>
                        </div>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-5 w-5" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => handleStartChat(contact)}>
                              <MessageSquare className="mr-2 h-4 w-4" />
                              <span>Message</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleShareContact(contact)}>
                              <Share className="mr-2 h-4 w-4" />
                              <span>Share Contact</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Edit className="mr-2 h-4 w-4" />
                              <span>Edit</span>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-red-600" onClick={() => handleDeleteContact(contact)}>
                              <Trash className="mr-2 h-4 w-4" />
                              <span>Delete</span>
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>

                      <div className="mt-4 space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center text-gray-500">
                            <Mail className="h-4 w-4 mr-2" />
                            <span>{contact.email}</span>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-6 w-6"
                            onClick={() => handleCopyInfo(contact, "Email")}
                          >
                            <Copy className="h-3 w-3" />
                          </Button>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center text-gray-500">
                            <Phone className="h-4 w-4 mr-2" />
                            <span>{contact.phone}</span>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-6 w-6"
                            onClick={() => handleCopyInfo(contact, "Phone")}
                          >
                            <Copy className="h-3 w-3" />
                          </Button>
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <Building className="h-4 w-4 mr-2" />
                          <span>{contact.hospital}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <MapPin className="h-4 w-4 mr-2" />
                          <span>{contact.location}</span>
                        </div>
                      </div>

                      <div className="mt-4 flex justify-between">
                        <Badge variant="outline">{contact.group}</Badge>
                        <Button
                          size="sm"
                          className="bg-teal-600 hover:bg-teal-700"
                          onClick={() => handleStartChat(contact)}
                        >
                          <MessageSquare className="h-4 w-4 mr-2" /> Message
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="rounded-full bg-gray-100 p-3 mb-4">
                    <Users className="h-6 w-6 text-gray-500" />
                  </div>
                  <h3 className="text-lg font-medium">No contacts found</h3>
                  <p className="text-sm text-gray-500 mt-2 mb-6 max-w-md">
                    {searchQuery
                      ? "Try adjusting your search to find what you're looking for"
                      : "Add your first contact to get started"}
                  </p>
                  <Button className="bg-teal-600 hover:bg-teal-700" onClick={() => setIsAddContactOpen(true)}>
                    <Plus className="mr-2 h-4 w-4" /> Add Contact
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Add Contact Dialog */}
      <Dialog open={isAddContactOpen} onOpenChange={setIsAddContactOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Add New Contact</DialogTitle>
            <DialogDescription>Add a new contact to your professional network</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                placeholder="Dr. John Doe"
                value={newContact.name}
                onChange={(e) => setNewContact({ ...newContact, name: e.target.value })}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="specialty">Specialty</Label>
              <Input
                id="specialty"
                placeholder="Cardiology, Nutrition, etc."
                value={newContact.specialty}
                onChange={(e) => setNewContact({ ...newContact, specialty: e.target.value })}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="doctor@example.com"
                  value={newContact.email}
                  onChange={(e) => setNewContact({ ...newContact, email: e.target.value })}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  placeholder="+1 (555) 123-4567"
                  value={newContact.phone}
                  onChange={(e) => setNewContact({ ...newContact, phone: e.target.value })}
                />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="hospital">Hospital/Practice</Label>
              <Input
                id="hospital"
                placeholder="Medical Center Name"
                value={newContact.hospital}
                onChange={(e) => setNewContact({ ...newContact, hospital: e.target.value })}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                placeholder="City, State"
                value={newContact.location}
                onChange={(e) => setNewContact({ ...newContact, location: e.target.value })}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="group">Group</Label>
              <Select
                value={newContact.group}
                onValueChange={(value) => setNewContact({ ...newContact, group: value })}
              >
                <SelectTrigger id="group">
                  <SelectValue placeholder="Select a group" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Colleagues">Colleagues</SelectItem>
                  <SelectItem value="Research Team">Research Team</SelectItem>
                  <SelectItem value="Conference">Conference</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddContactOpen(false)}>
              Cancel
            </Button>
            <Button className="bg-teal-600 hover:bg-teal-700" onClick={handleAddContact}>
              Add Contact
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}