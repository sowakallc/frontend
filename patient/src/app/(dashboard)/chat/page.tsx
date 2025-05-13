"use client"

import type React from "react"
import { motion,Button,  Avatar, AvatarFallback, AvatarImage, 
    Users, Card, Image,
   CardContent, Tabs, TabsContent, TabsList, TabsTrigger,
   Dialog, DialogContent, DialogHeader, DialogTitle, Badge,
   Separator, Plus,
   Input,
   Info, MessageSquare, MoreHorizontal, Phone,  Search, Send, User,  Video, Check,
   DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, ScrollArea,DialogTrigger 

} from "../../../components/index"

import { useState, useRef, useEffect } from "react"












// Sample data
const contacts = [
  {
    id: "1",
    name: "Sarah Johnson",
    avatar: "/images/placeholder.svg?height=40&width=40&text=SJ",
    lastMessage: "Are you attending the heart health seminar?",
    time: "10:30 AM",
    unread: 2,
    online: true,
    type: "individual",
  },
  {
    id: "2",
    name: "Michael Chen",
    avatar: "/images/placeholder.svg?height=40&width=40&text=MC",
    lastMessage: "Thanks for the information!",
    time: "Yesterday",
    unread: 0,
    online: false,
    type: "individual",
  },
  {
    id: "3",
    name: "Wellness Support Group",
    avatar: "/images/placeholder.svg?height=40&width=40&text=WS",
    lastMessage: "Emily: I'll share some resources with everyone",
    time: "Yesterday",
    unread: 5,
    online: true,
    type: "group",
    members: 8,
  },
  {
    id: "4",
    name: "Heart Health Community",
    avatar: "/images/placeholder.svg?height=40&width=40&text=HH",
    lastMessage: "Dr. Williams: Remember to check your blood pressure daily",
    time: "2 days ago",
    unread: 0,
    online: true,
    type: "group",
    members: 24,
  },
  {
    id: "5",
    name: "Robert Williams",
    avatar: "/images/placeholder.svg?height=40&width=40&text=RW",
    lastMessage: "Looking forward to your presentation",
    time: "3 days ago",
    unread: 0,
    online: true,
    type: "individual",
  },
]

// Sample messages for a conversation
const sampleMessages = [
  {
    id: "1",
    sender: "1",
    senderName: "Sarah Johnson",
    senderAvatar: "/images/placeholder.svg?height=40&width=40&text=SJ",
    content: "Hi there! Are you attending the heart health seminar next week?",
    timestamp: "10:30 AM",
    isMe: false,
  },
  {
    id: "2",
    sender: "me",
    senderName: "Me",
    senderAvatar: "/images/placeholder.svg?height=40&width=40&text=JD",
    content: "Yes, I've already registered. It looks really interesting!",
    timestamp: "10:32 AM",
    isMe: true,
  },
  {
    id: "3",
    sender: "1",
    senderName: "Sarah Johnson",
    senderAvatar: "/images/placeholder.svg?height=40&width=40&text=SJ",
    content: "Great! I'm planning to attend as well. Dr. Williams is an excellent speaker.",
    timestamp: "10:33 AM",
    isMe: false,
  },
  {
    id: "4",
    sender: "me",
    senderName: "Me",
    senderAvatar: "/images/placeholder.svg?height=40&width=40&text=JD",
    content: "I've heard that too. Have you attended any of his seminars before?",
    timestamp: "10:35 AM",
    isMe: true,
  },
  {
    id: "5",
    sender: "1",
    senderName: "Sarah Johnson",
    senderAvatar: "/images/placeholder.svg?height=40&width=40&text=SJ",
    content:
      "Yes, I attended his stress management workshop last month. It was very informative and practical. He provides a lot of actionable advice that you can implement right away.",
    timestamp: "10:38 AM",
    isMe: false,
  },
  {
    id: "6",
    sender: "me",
    senderName: "Me",
    senderAvatar: "/images/placeholder.svg?height=40&width=40&text=JD",
    content:
      "That sounds great! I'm looking forward to it even more now. Are there any specific topics you're hoping he'll cover?",
    timestamp: "10:40 AM",
    isMe: true,
  },
  {
    id: "7",
    sender: "1",
    senderName: "Sarah Johnson",
    senderAvatar: "/images/placeholder.svg?height=40&width=40&text=SJ",
    content:
      "I'm particularly interested in learning about preventative measures and diet recommendations. What about you?",
    timestamp: "10:42 AM",
    isMe: false,
  },
]

// Sample group members
const groupMembers = [
  {
    id: "1",
    name: "Sarah Johnson",
    avatar: "/images/placeholder.svg?height=40&width=40&text=SJ",
    role: "Member",
    online: true,
  },
  {
    id: "2",
    name: "Michael Chen",
    avatar: "/images/placeholder.svg?height=40&width=40&text=MC",
    role: "Member",
    online: false,
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    avatar: "/images/placeholder.svg?height=40&width=40&text=ER",
    role: "Admin",
    online: true,
  },
  {
    id: "4",
    name: "John Doe",
    avatar: "/images/placeholder.svg?height=40&width=40&text=JD",
    role: "Member",
    online: true,
  },
  {
    id: "5",
    name: "Lisa Park",
    avatar: "/images/placeholder.svg?height=40&width=40&text=LP",
    role: "Member",
    online: false,
  },
]

export default function ChatPage() {
  const [activeChat, setActiveChat] = useState<any>(contacts[0])
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState(sampleMessages)
  const [showInfo, setShowInfo] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Filter contacts based on search query
  const filteredContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(searchQuery.toLowerCase()))

  // Scroll to bottom of messages when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSendMessage = () => {
    if (!message.trim()) return

    const newMessage = {
      id: String(messages.length + 1),
      sender: "me",
      senderName: "Me",
      senderAvatar: "/images/placeholder.svg?height=40&width=40&text=JD",
      content: message,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      isMe: true,
    }

    setMessages([...messages, newMessage])
    setMessage("")

    // Simulate a reply after a delay
    if (Math.random() > 0.5) {
      setTimeout(() => {
        const reply = {
          id: String(messages.length + 2),
          sender: activeChat.id,
          senderName: activeChat.name,
          senderAvatar: activeChat.avatar,
          content: "Thanks for your message! I'll get back to you soon.",
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          isMe: false,
        }
        setMessages((prev) => [...prev, reply])
      }, 2000)
    }
  }

  const handleCreateGroup = () => {
    console.log("Group created: Your new group chat has been created.")
  }

  return (
    <div className="h-[calc(100vh-10rem)]">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Chat</h1>
          <p className="mt-1 text-sm text-gray-500">Connect with other members and groups</p>
        </div>
        <div className="mt-4 md:mt-0">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-teal-600 hover:bg-teal-700">
                <Plus className="mr-2 h-4 w-4" /> New Chat
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Create New Chat</DialogTitle>
              </DialogHeader>
              <Tabs defaultValue="individual">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="individual">Individual</TabsTrigger>
                  <TabsTrigger value="group">Group</TabsTrigger>
                </TabsList>
                <TabsContent value="individual" className="mt-4 space-y-4">
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                    <Input placeholder="Search contacts..." className="pl-9" />
                  </div>
                  <ScrollArea className="h-72">
                    <div className="space-y-2">
                      {contacts
                        .filter((c) => c.type === "individual")
                        .map((contact) => (
                          <div
                            key={contact.id}
                            className="flex items-center p-2 rounded-md hover:bg-gray-100 cursor-pointer"
                          >
                            <Avatar className="h-10 w-10 mr-3">
                              <AvatarImage src={contact.avatar || "/images/placeholder.svg"} alt={contact.name} />
                              <AvatarFallback>
                                {contact.name
                                  .split(" ")
                                  .map((n: string) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium">{contact.name}</p>
                            </div>
                          </div>
                        ))}
                    </div>
                  </ScrollArea>
                  <Button className="w-full bg-teal-600 hover:bg-teal-700">Start Chat</Button>
                </TabsContent>
                <TabsContent value="group" className="mt-4 space-y-4">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="group-name">Group Name</Label>
                      <Input id="group-name" placeholder="Enter group name" />
                    </div>
                    <div>
                      <Label>Add Members</Label>
                      <div className="relative mt-1">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                        <Input placeholder="Search contacts..." className="pl-9" />
                      </div>
                    </div>
                    <ScrollArea className="h-48 border rounded-md p-2">
                      <div className="space-y-2">
                        {contacts
                          .filter((c) => c.type === "individual")
                          .map((contact) => (
                            <div
                              key={contact.id}
                              className="flex items-center justify-between p-2 rounded-md hover:bg-gray-100"
                            >
                              <div className="flex items-center">
                                <Avatar className="h-8 w-8 mr-3">
                                  <AvatarImage src={contact.avatar || "/images/placeholder.svg"} alt={contact.name} />
                                  <AvatarFallback>
                                    {contact.name
                                      .split(" ")
                                      .map((n: string) => n[0])
                                      .join("")}
                                  </AvatarFallback>
                                </Avatar>
                                <p className="font-medium">{contact.name}</p>
                              </div>
                              <Checkbox id={`contact-${contact.id}`} />
                            </div>
                          ))}
                      </div>
                    </ScrollArea>
                  </div>
                  <Button className="w-full bg-teal-600 hover:bg-teal-700" onClick={handleCreateGroup}>
                    Create Group
                  </Button>
                </TabsContent>
              </Tabs>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full">
        {/* Contacts List */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="md:col-span-1"
        >
          <Card className="h-full">
            <CardContent className="p-0 h-full flex flex-col">
              <div className="p-3 border-b">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                  <Input
                    placeholder="Search chats..."
                    className="pl-9"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>

              <Tabs defaultValue="all" className="flex-1 flex flex-col">
                <div className="px-3 pt-2">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="individual">Individual</TabsTrigger>
                    <TabsTrigger value="groups">Groups</TabsTrigger>
                  </TabsList>
                </div>

                <ScrollArea className="flex-1 p-3">
                  <TabsContent value="all" className="m-0 h-full">
                    <div className="space-y-2">
                      {filteredContacts.map((contact) => (
                        <div
                          key={contact.id}
                          className={`flex items-center p-2 rounded-md cursor-pointer transition-colors ${
                            activeChat?.id === contact.id ? "bg-teal-50" : "hover:bg-gray-100"
                          }`}
                          onClick={() => setActiveChat(contact)}
                        >
                          <div className="relative">
                            <Avatar className="h-12 w-12 mr-3">
                              <AvatarImage src={contact.avatar || "/images/placeholder.svg"} alt={contact.name} />
                              <AvatarFallback>
                                {contact.name
                                  .split(" ")
                                  .map((n: string) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            {contact.online && (
                              <span className="absolute bottom-0 right-2 h-3 w-3 rounded-full bg-green-500 ring-2 ring-white" />
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-baseline">
                              <p className="font-medium truncate">{contact.name}</p>
                              <span className="text-xs text-gray-500">{contact.time}</span>
                            </div>
                            <p className="text-sm text-gray-500 truncate">{contact.lastMessage}</p>
                          </div>
                          {contact.unread > 0 && (
                            <div className="ml-2 bg-teal-500 text-white text-xs font-medium rounded-full h-5 min-w-5 flex items-center justify-center px-1">
                              {contact.unread}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="individual" className="m-0 h-full">
                    <div className="space-y-2">
                      {filteredContacts
                        .filter((contact) => contact.type === "individual")
                        .map((contact) => (
                          <div
                            key={contact.id}
                            className={`flex items-center p-2 rounded-md cursor-pointer transition-colors ${
                              activeChat?.id === contact.id ? "bg-teal-50" : "hover:bg-gray-100"
                            }`}
                            onClick={() => setActiveChat(contact)}
                          >
                            <div className="relative">
                              <Avatar className="h-12 w-12 mr-3">
                                <AvatarImage src={contact.avatar || "/images/placeholder.svg"} alt={contact.name} />
                                <AvatarFallback>
                                  {contact.name
                                    .split(" ")
                                    .map((n: string) => n[0])
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>
                              {contact.online && (
                                <span className="absolute bottom-0 right-2 h-3 w-3 rounded-full bg-green-500 ring-2 ring-white" />
                              )}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex justify-between items-baseline">
                                <p className="font-medium truncate">{contact.name}</p>
                                <span className="text-xs text-gray-500">{contact.time}</span>
                              </div>
                              <p className="text-sm text-gray-500 truncate">{contact.lastMessage}</p>
                            </div>
                            {contact.unread > 0 && (
                              <div className="ml-2 bg-teal-500 text-white text-xs font-medium rounded-full h-5 min-w-5 flex items-center justify-center px-1">
                                {contact.unread}
                              </div>
                            )}
                          </div>
                        ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="groups" className="m-0 h-full">
                    <div className="space-y-2">
                      {filteredContacts
                        .filter((contact) => contact.type === "group")
                        .map((contact) => (
                          <div
                            key={contact.id}
                            className={`flex items-center p-2 rounded-md cursor-pointer transition-colors ${
                              activeChat?.id === contact.id ? "bg-teal-50" : "hover:bg-gray-100"
                            }`}
                            onClick={() => setActiveChat(contact)}
                          >
                            <div className="relative">
                              <Avatar className="h-12 w-12 mr-3">
                                <AvatarImage src={contact.avatar || "/images/placeholder.svg"} alt={contact.name} />
                                <AvatarFallback>
                                  {contact.name
                                    .split(" ")
                                    .map((n: string) => n[0])
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>
                              {contact.online && (
                                <span className="absolute bottom-0 right-2 h-3 w-3 rounded-full bg-green-500 ring-2 ring-white" />
                              )}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex justify-between items-baseline">
                                <p className="font-medium truncate">{contact.name}</p>
                                <span className="text-xs text-gray-500">{contact.time}</span>
                              </div>
                              <div className="flex items-center">
                                <Users className="h-3 w-3 mr-1 text-gray-500" />
                                <span className="text-xs text-gray-500 mr-2">{contact.members}</span>
                                <p className="text-sm text-gray-500 truncate">{contact.lastMessage}</p>
                              </div>
                            </div>
                            {contact.unread > 0 && (
                              <div className="ml-2 bg-teal-500 text-white text-xs font-medium rounded-full h-5 min-w-5 flex items-center justify-center px-1">
                                {contact.unread}
                              </div>
                            )}
                          </div>
                        ))}
                    </div>
                  </TabsContent>
                </ScrollArea>
              </Tabs>
            </CardContent>
          </Card>
        </motion.div>

        {/* Chat Area */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="md:col-span-2 h-full"
        >
          <Card className="h-full">
            <CardContent className="p-0 h-full flex flex-col">
              {activeChat ? (
                <>
                  {/* Chat Header */}
                  <div className="p-3 border-b flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="relative">
                        <Avatar className="h-10 w-10 mr-3">
                          <AvatarImage src={activeChat.avatar || "/images/placeholder.svg"} alt={activeChat.name} />
                          <AvatarFallback>
                            {activeChat.name
                              .split(" ")
                              .map((n: string) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        {activeChat.online && (
                          <span className="absolute bottom-0 right-2 h-2.5 w-2.5 rounded-full bg-green-500 ring-2 ring-white" />
                        )}
                      </div>
                      <div>
                        <p className="font-medium">{activeChat.name}</p>
                        <p className="text-xs text-gray-500">
                          {activeChat.type === "group"
                            ? `${activeChat.members} members`
                            : activeChat.online
                              ? "Online"
                              : "Offline"}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="icon" className="hidden md:flex">
                        <Phone className="h-5 w-5" />
                      </Button>
                      <Button variant="ghost" size="icon" className="hidden md:flex">
                        <Video className="h-5 w-5" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setShowInfo(!showInfo)}
                        className={showInfo ? "text-teal-600" : ""}
                      >
                        <Info className="h-5 w-5" />
                      </Button>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-5 w-5" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <User className="mr-2 h-4 w-4" />
                            <span>View Profile</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <MessageSquare className="mr-2 h-4 w-4" />
                            <span>Mute Conversation</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">
                            <span>Delete Conversation</span>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>

                  {/* Chat Messages */}
                  <div className="flex flex-1 overflow-hidden">
                    <div className={`flex-1 overflow-y-auto p-4 ${showInfo ? "md:pr-0" : ""}`}>
                      <div className="space-y-4">
                        {messages.map((msg) => (
                          <div key={msg.id} className={`flex ${msg.isMe ? "justify-end" : "justify-start"}`}>
                            <div className={`flex max-w-[80%] ${msg.isMe ? "flex-row-reverse" : ""}`}>
                              {!msg.isMe && (
                                <Avatar className="h-8 w-8 mr-2">
                                  <AvatarImage src={msg.senderAvatar || "/images/placeholder.svg"} alt={msg.senderName} />
                                  <AvatarFallback>
                                    {msg.senderName
                                      .split(" ")
                                      .map((n: string) => n[0])
                                      .join("")}
                                  </AvatarFallback>
                                </Avatar>
                              )}
                              <div>
                                <div
                                  className={`rounded-lg p-3 ${
                                    msg.isMe ? "bg-teal-500 text-white ml-2" : "bg-gray-100 text-gray-800"
                                  }`}
                                >
                                  {msg.content}
                                </div>
                                <p className={`text-xs text-gray-500 mt-1 ${msg.isMe ? "text-right" : ""}`}>
                                  {msg.timestamp}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                        <div ref={messagesEndRef} />
                      </div>
                    </div>

                    {/* Info Panel */}
                    {showInfo && (
                      <div className="hidden md:block w-72 border-l p-4 overflow-y-auto">
                        <div className="flex flex-col items-center text-center mb-6">
                          <Avatar className="h-20 w-20 mb-3">
                            <AvatarImage src={activeChat.avatar || "/images/placeholder.svg"} alt={activeChat.name} />
                            <AvatarFallback className="text-xl">
                              {activeChat.name
                                .split(" ")
                                .map((n: string) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <h3 className="font-bold text-lg">{activeChat.name}</h3>
                          {activeChat.type === "individual" ? (
                            <Badge variant="outline" className={activeChat.online ? "text-green-500" : "text-gray-500"}>
                              {activeChat.online ? "Online" : "Offline"}
                            </Badge>
                          ) : (
                            <Badge variant="outline" className="text-teal-500">
                              {activeChat.members} members
                            </Badge>
                          )}
                        </div>

                        {activeChat.type === "group" && (
                          <>
                            <div className="mb-4">
                              <h4 className="font-medium text-sm text-gray-500 mb-2">MEMBERS</h4>
                              <div className="space-y-2">
                                {groupMembers.map((member) => (
                                  <div key={member.id} className="flex items-center justify-between">
                                    <div className="flex items-center">
                                      <div className="relative">
                                        <Avatar className="h-8 w-8 mr-2">
                                          <AvatarImage src={member.avatar || "/images/placeholder.svg"} alt={member.name} />
                                          <AvatarFallback>
                                            {member.name
                                              .split(" ")
                                              .map((n: string) => n[0])
                                              .join("")}
                                          </AvatarFallback>
                                        </Avatar>
                                        {member.online && (
                                          <span className="absolute bottom-0 right-1 h-2 w-2 rounded-full bg-green-500 ring-1 ring-white" />
                                        )}
                                      </div>
                                      <div>
                                        <p className="text-sm font-medium">{member.name}</p>
                                        <p className="text-xs text-gray-500">{member.role}</p>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                            <Button variant="outline" className="w-full">
                              <Plus className="h-4 w-4 mr-2" /> Add Members
                            </Button>
                          </>
                        )}

                        {activeChat.type === "individual" && (
                          <div className="space-y-4">
                            <Button variant="outline" className="w-full">
                              <User className="h-4 w-4 mr-2" /> View Profile
                            </Button>
                            <Separator />
                            <div>
                              <h4 className="font-medium text-sm text-gray-500 mb-2">SHARED MEDIA</h4>
                              <div className="grid grid-cols-3 gap-2">
                                {[1, 2, 3, 4, 5, 6].map((i) => (
                                  <div key={i} className="aspect-square bg-gray-100 rounded-md overflow-hidden">
                                    <Image
                                      src={`/images/placeholder.svg?height=80&width=80&text=${i}`}
                                      alt={`Shared media ${i}`}
                                      width={80}
                                      height={80}
                                      className="w-full h-full object-cover"
                                    />
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Message Input */}
                  <div className="p-3 border-t">
                    <div className="flex items-center">
                      <Button variant="ghost" size="icon" className="text-gray-500">
                        <Plus className="h-5 w-5" />
                      </Button>
                      <Input
                        placeholder="Type a message..."
                        className="mx-2"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" && !e.shiftKey) {
                            e.preventDefault()
                            handleSendMessage()
                          }
                        }}
                      />
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-teal-600"
                        onClick={handleSendMessage}
                        disabled={!message.trim()}
                      >
                        <Send className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex-1 flex flex-col items-center justify-center p-4">
                  <div className="rounded-full bg-teal-100 p-4 mb-4">
                    <MessageSquare className="h-8 w-8 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">Your Messages</h3>
                  <p className="text-gray-500 text-center max-w-md mb-6">
                    Connect with other members and groups to share information and support each other.
                  </p>
                  <Button className="bg-teal-600 hover:bg-teal-700">
                    <Plus className="mr-2 h-4 w-4" /> Start a New Chat
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

// Label component for the form
function Label({ htmlFor, children }: { htmlFor?: string; children: React.ReactNode }) {
  return (
    <label htmlFor={htmlFor} className="block text-sm font-medium text-gray-700 mb-1">
      {children}
    </label>
  )
}

// Checkbox component for the form
function Checkbox({ id }: { id: string }) {
  return (
    <div className="h-5 w-5 rounded border border-gray-300 flex items-center justify-center">
      <input type="checkbox" id={id} className="opacity-0 absolute h-5 w-5 cursor-pointer" />
      <Check className="h-3 w-3 text-teal-600 hidden peer-checked:block" />
    </div>
  )
}