"use client"

import type React from "react"
import { Button, Input, Search, Bell, User, LogOut, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, Avatar, AvatarFallback, AvatarImage, Menu, Link } from "../../components/index"

interface HeaderProps {
  mockUser: {
    name: string
    avatar: string
    initials: string
  }
  onMobileNavToggle: () => void
}

export default function Header({ mockUser, onMobileNavToggle }: HeaderProps) {
  return (
    <header className="sticky top-0 z-10 bg-white shadow-sm">
      <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <Button variant="ghost" size="icon" className="md:hidden mr-2" onClick={onMobileNavToggle}>
            <Menu className="h-6 w-6" />
          </Button>
          <div className="max-w-xs w-full lg:max-w-md relative hidden sm:block">
            <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <Input
              type="search"
              placeholder="Search seminars..."
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
               <Link href='/profile'> <span>Profile</span></Link>
              </DropdownMenuItem>
              {/* <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem> */}
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
            placeholder="Search seminars..."
            className="block w-full pl-10 pr-3 py-2"
          />
        </div>
      </div>
    </header>
  )
}