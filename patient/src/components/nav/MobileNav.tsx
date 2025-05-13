"use client"

import type React from "react"
import { Button, Link, Sheet, SheetContent, X, Avatar, AvatarFallback, AvatarImage, cn } from "../../components/index"

interface NavigationItem {
  name: string
  href: string
  icon: React.ComponentType<{ className?: string }>
}

interface MobileNavProps {
  mockUser: {
    name: string
    role: string
    avatar: string
    initials: string
  }
  navigation: NavigationItem[]
  pathname: string
  isOpen: boolean
  onOpenChange: (open: boolean) => void
}

export default function MobileNav({ mockUser, navigation, pathname, isOpen, onOpenChange }: MobileNavProps) {
  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetContent side="left" className="p-0 w-64">
        <div className="flex h-16 items-center justify-between px-4 border-b">
          <Link href="/dashboard" className="text-teal-600 font-bold text-xl">
            SOWAKA
          </Link>
          <Button variant="ghost" size="icon" onClick={() => onOpenChange(false)}>
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
              onClick={() => onOpenChange(false)}
            >
              <item.icon className="h-5 w-5 flex-shrink-0" />
              {item.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}