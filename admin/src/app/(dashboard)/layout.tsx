"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import {
  BarChart3,
  Calendar,
  Cog,
  FileText,
  LayoutDashboard,
  LogOut,
  Menu,
  MessageSquare,
  Settings,
  Shield,
  Users,
  Video,
  X,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"

// Mock admin user data
const mockAdmin = {
  id: "1",
  name: "Admin User",
  email: "admin@wellnessconnect.com",
  role: "admin",
  avatar: "/placeholder.svg?height=40&width=40&text=AU",
  initials: "AU",
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  // Admin navigation items
  const navigation = [
    { name: "Dashboard", href: "/", icon: LayoutDashboard },
    { name: "Users", href: "users", icon: Users },
    { name: "Employees", href: "employees", icon: Users },
    { name: "Seminars", href: "seminars", icon: Video },
    // { name: "Reports", href: "reports", icon: BarChart3 },
    // { name: "Content", href: "content", icon: FileText },
    // { name: "Messages", href: "messages", icon: MessageSquare },
    // { name: "Calendar", href: "calendar", icon: Calendar },
    // { name: "Settings", href: "settings", icon: Settings },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile sidebar */}
      <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
        <SheetContent side="left" className="p-0 w-64">
          <div className="flex h-16 items-center justify-between px-4 border-b">
            <Link href="/admin" className="text-teal-600 font-bold text-xl flex items-center">
              <Shield className="h-6 w-6 mr-2" />
              <span>Admin Panel</span>
            </Link>
            <Button variant="ghost" size="icon" onClick={() => setIsSidebarOpen(false)}>
              <X className="h-5 w-5" />
            </Button>
          </div>
          <div className="p-4 border-b">
            <div className="flex items-center">
              <Avatar className="h-10 w-10 mr-3">
                <AvatarImage src={mockAdmin.avatar || "/placeholder.svg"} alt={mockAdmin.name} />
                <AvatarFallback className="bg-teal-500 text-white">{mockAdmin.initials}</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium text-gray-700">{mockAdmin.name}</p>
                <Badge variant="outline" className="mt-1">
                  Administrator
                </Badge>
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
                onClick={() => setIsSidebarOpen(false)}
              >
                <item.icon className="h-5 w-5 flex-shrink-0" />
                {item.name}
              </Link>
            ))}

            <div className="mt-4 pt-4 border-t">
              <Button variant="outline" className="w-full justify-start" onClick={() => router.push("/")}>
                <LogOut className="h-5 w-5 mr-2" />
                Logout
              </Button>
            </div>
          </nav>
        </SheetContent>
      </Sheet>

      {/* Desktop sidebar */}
      <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
        <div className="flex min-h-0 flex-1 flex-col border-r border-gray-200 bg-white">
          <div className="flex flex-shrink-0 items-center h-16 px-4 border-b">
            <Link href="/admin" className="text-teal-600 font-bold text-xl flex items-center">
              <Shield className="h-6 w-6 mr-2" />
              <span>Admin Panel</span>
            </Link>
          </div>
          <div className="flex flex-shrink-0 items-center p-4 border-b">
            <Avatar className="h-10 w-10 mr-3">
              <AvatarImage src={mockAdmin.avatar || "/placeholder.svg"} alt={mockAdmin.name} />
              <AvatarFallback className="bg-teal-500 text-white">{mockAdmin.initials}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium text-gray-700">{mockAdmin.name}</p>
              <Badge variant="outline" className="mt-1">
                Administrator
              </Badge>
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
          {/* <div className="flex flex-shrink-0 border-t border-gray-200 p-4">
            <Button variant="outline" className="w-full justify-start" onClick={() => router.push("/")}>
              <LogOut className="h-5 w-5 mr-2" />
              Logout
            </Button>
          </div> */}
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-1 flex-col md:pl-64">
        <header className="sticky top-0 z-10 bg-white shadow-sm">
          <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
            <div className="flex items-center">
              <Button variant="ghost" size="icon" className="md:hidden mr-2" onClick={() => setIsSidebarOpen(true)}>
                <Menu className="h-6 w-6" />
              </Button>
              <h1 className="text-xl font-semibold text-gray-900 md:hidden">Admin Panel</h1>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative max-w-xs w-full hidden md:block">
                <Input type="search" placeholder="Search..." className="pr-10" />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Avatar>
                      <AvatarImage src={mockAdmin.avatar || "/placeholder.svg"} alt={mockAdmin.name} />
                      <AvatarFallback className="bg-teal-500 text-white">{mockAdmin.initials}</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => router.push("/admin/profile")}>
                    <Users className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => router.push("/admin/settings")}>
                    <Cog className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => router.push("/")}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>

        <main className="flex-1">
          <div className="py-6">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
          </div>
        </main>
      </div>
    </div>
  )
}
