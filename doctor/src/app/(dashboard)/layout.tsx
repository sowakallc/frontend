"use client"

import type React from "react"
import { Suspense } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Bell,
  Calendar,
  Contact,
  Home,
  LogOut,
  Menu,
  MessageSquare,
  Search,
  Settings,
  User,
  Users,
  Video,
  X,
} from "lucide-react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Mock user data - in a real app, this would come from authentication
const mockUser = {
  id: "1",
  name: "Dr. John Doe",
  email: "john.doe@example.com",
  role: "doctor",
  avatar: "/images/placeholder.svg?height=40&width=40",
  initials: "JD",
}

export default function DoctorDashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  const navigation = [
    { name: "Dashboard", href: "/dashboard", icon: Home },
    { name: "My Seminars", href: "/dashboard/seminars", icon: Video },
    { name: "Calendar", href: "/dashboard/calendar", icon: Calendar },
    { name: "Directory", href: "/dashboard/directory", icon: Users },
    { name: "Contacts", href: "/dashboard/contacts", icon: Contact },
    { name: "Chat", href: "/dashboard/chat", icon: MessageSquare },
    { name: "Profile", href: "/dashboard/profile", icon: User },
    { name: "Settings", href: "/dashboard/settings", icon: Settings },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile sidebar */}
      <Sheet>
        <SheetContent side="left" className="p-0 w-64">
          <div className="flex h-16 items-center justify-between px-4 border-b">
            <Link href="/dashboard" className="text-teal-600 font-bold text-xl">
              WellnessConnect
            </Link>
            <Button variant="ghost" size="icon">
              <X className="h-5 w-5" />
            </Button>
          </div>
          <div className="p-4 border-b">
            <div className="flex items-center">
              <Avatar className="h-10 w-10 mr-3">
                <AvatarImage src={mockUser.avatar || "/images/placeholder.svg"} alt={mockUser.name} />
                <AvatarFallback className="bg-teal-500 text-white">{mockUser.initials}</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium text-gray-700">{mockUser.name}</p>
                <p className="text-xs text-gray-500 capitalize">{mockUser.role}</p>
              </div>
            </div>
          </div>
          <nav className="flex flex-col gap-1 p-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium",
                  pathname === item.href
                    ? "bg-teal-100 text-teal-700"
                    : "text-gray-700 hover:bg-gray-100 hover:text-gray-900",
                )}
              >
                <item.icon className="h-5 w-5 flex-shrink-0" />
                {item.name}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>

      {/* Desktop sidebar */}
      <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
        <div className="flex min-h-0 flex-1 flex-col border-r border-gray-200 bg-white">
          <div className="flex flex-shrink-0 items-center h-16 px-4 border-b">
            <Link href="/dashboard" className="text-teal-600 font-bold text-xl">
              WellnessConnect
            </Link>
          </div>
          <div className="flex flex-shrink-0 items-center p-4 border-b">
            <Avatar className="h-10 w-10 mr-3">
              <AvatarImage src={mockUser.avatar || "/images/placeholder.svg"} alt={mockUser.name} />
              <AvatarFallback className="bg-teal-500 text-white">{mockUser.initials}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium text-gray-700">{mockUser.name}</p>
              <p className="text-xs text-gray-500 capitalize">{mockUser.role}</p>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto pt-5 pb-4">
            <nav className="flex-1 space-y-1 px-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "group flex items-center px-3 py-2 text-sm font-medium rounded-md",
                    pathname === item.href
                      ? "bg-teal-100 text-teal-700"
                      : "text-gray-700 hover:bg-gray-100 hover:text-gray-900",
                  )}
                >
                  <item.icon
                    className={cn(
                      "mr-3 h-5 w-5 flex-shrink-0",
                      pathname === item.href ? "text-teal-600" : "text-gray-500 group-hover:text-gray-600",
                    )}
                  />
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-1 flex-col md:pl-64">
        <header className="sticky top-0 z-10 bg-white shadow-sm">
          <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
            <div className="flex items-center">
              <Button variant="ghost" size="icon" className="md:hidden mr-2">
                <Menu className="h-6 w-6" />
              </Button>

              <div className="max-w-xs w-full lg:max-w-md relative hidden sm:block">
                <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <Input
                  type="search"
                  placeholder="Search directory..."
                  className="block w-full pl-10 pr-3 py-2"
                />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-6 w-6" />
                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400 ring-2 ring-white" />
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Avatar>
                      <AvatarImage src={mockUser.avatar || "/images/placeholder.svg"} alt={mockUser.name} />
                      <AvatarFallback className="bg-teal-500 text-white">{mockUser.initials}</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* Mobile search */}
          <div className="px-4 pb-3 sm:hidden">
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <Input
                type="search"
                placeholder="Search directory..."
                className="block w-full pl-10 pr-3 py-2"
              />
            </div>
          </div>
        </header>

        <main className="flex-1">
          <div className="py-6">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
              <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}