"use client"

import type React from "react"
import { useState, Suspense } from "react"
import { usePathname } from "next/navigation"
import MobileNav from "../../components/nav/MobileNav"
import Sidebar from "../../components/nav/Sidebar"
import Header from "../../components/nav/Header"
import { Home, Video, Calendar, MessageSquare, User,Settings } from "../../components/index"


// Mock user data - in a real app, this would come from authentication
const mockUser = {
  id: "1",
  name: "John Doe",
  email: "john.doe@example.com",
  role: "patient",
  avatar: "/images/placeholder.svg?height=40&width=40",
  initials: "JD",
}

export default function PatientDashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  const navigation = [
    { name: "Dashboard", href: "/dashboard", icon: Home },
    { name: "Seminars", href: "seminars", icon: Video },
    { name: "Calendar", href: "calendar", icon: Calendar },
    { name: "Chat", href: "chat", icon: MessageSquare },
    { name: "Profile", href: "profile", icon: User },
    
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <MobileNav
        mockUser={mockUser}
        navigation={navigation}
        pathname={pathname}
        isOpen={isMobileNavOpen}
        onOpenChange={setIsMobileNavOpen}
      />
      <Sidebar mockUser={mockUser} navigation={navigation} pathname={pathname} />
      <div className="flex flex-1 flex-col md:pl-64">
        <Header mockUser={mockUser} onMobileNavToggle={() => setIsMobileNavOpen(true)} />
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