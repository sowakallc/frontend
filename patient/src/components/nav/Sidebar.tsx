"use client"

import type React from "react"
import { Link, cn, Avatar, AvatarFallback, AvatarImage } from "../../components/index"

interface NavigationItem {
  name: string
  href: string
  icon: React.ComponentType<{ className?: string }>
}

interface SidebarProps {
  mockUser: {
    name: string
    role: string
    avatar: string
    initials: string
  }
  navigation: NavigationItem[]
  pathname: string
}

export default function Sidebar({ mockUser, navigation, pathname }: SidebarProps) {
  return (
    <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
      <div className="flex min-h-0 flex-1 flex-col border-r border-gray-200 bg-white">
        <div className="flex flex-shrink-0 items-center h-16 px-4 border-b">
          <Link href="/dashboard" className="text-teal-600 font-bold text-xl">
            SOWAKA
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
  )
}