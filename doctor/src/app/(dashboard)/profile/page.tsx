"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Camera, Check, Edit, Save } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Sample avatars
const avatarOptions = [
  "/images/placeholder.svg?height=100&width=100&text=A1",
  "/images/placeholder.svg?height=100&width=100&text=A2",
  "/images/placeholder.svg?height=100&width=100&text=A3",
  "/images/placeholder.svg?height=100&width=100&text=A4",
  "/images/placeholder.svg?height=100&width=100&text=A5",
  "/images/placeholder.svg?height=100&width=100&text=A6",
  "/images/placeholder.svg?height=100&width=100&text=A7",
  "/images/placeholder.svg?height=100&width=100&text=A8",
]

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [showAvatarSelector, setShowAvatarSelector] = useState(false)
  const [selectedAvatar, setSelectedAvatar] = useState(avatarOptions[0])
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    role: "Doctor", // or "doctor"
    bio: "I'm interested in wellness seminars related to heart health and stress management.",
    location: "New York, NY",
    interests: ["Heart Health", "Stress Management", "Nutrition"],
    // Doctor-specific fields
    specialty: "",
    credentials: "",
    practiceLocation: "",
    yearsOfExperience: "",
  })

  const handleSaveProfile = () => {
    setIsEditing(false)
    console.log("Profile updated: Your profile has been updated successfully.")
  }

  const handleAvatarSelect = (avatar: string) => {
    setSelectedAvatar(avatar)
    setShowAvatarSelector(false)
    console.log("Avatar updated: Your profile avatar has been updated.")
  }

  const isDoctor = profile.role === "doctor"

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">My Profile</h1>
          <p className="mt-1 text-sm text-gray-500">Manage your personal information and preferences</p>
        </div>
        <div className="mt-4 md:mt-0">
          {isEditing ? (
            <Button className="bg-teal-600 hover:bg-teal-700" onClick={handleSaveProfile}>
              <Save className="mr-2 h-4 w-4" /> Save Changes
            </Button>
          ) : (
            <Button variant="outline" onClick={() => setIsEditing(true)}>
              <Edit className="mr-2 h-4 w-4" /> Edit Profile
            </Button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Profile Summary Card */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Card>
            <CardHeader className="pb-4">
              <CardTitle>Profile Summary</CardTitle>
              <CardDescription>Your public profile information</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center text-center">
              <div className="relative mb-4">
                <Avatar className="h-24 w-24">
                  <AvatarImage src={selectedAvatar || "/images/placeholder.svg"} alt={profile.name} />
                  <AvatarFallback className="text-2xl bg-teal-500 text-white">
                    {profile.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute bottom-0 right-0 rounded-full bg-white"
                  onClick={() => setShowAvatarSelector(!showAvatarSelector)}
                >
                  <Camera className="h-4 w-4" />
                </Button>

                {showAvatarSelector && (
                  <div className="absolute top-full mt-2 p-2 bg-white rounded-lg shadow-lg z-10 grid grid-cols-4 gap-2">
                    {avatarOptions.map((avatar, index) => (
                      <button
                        key={index}
                        className={`relative rounded-full overflow-hidden h-12 w-12 border-2 ${
                          selectedAvatar === avatar ? "border-teal-500" : "border-transparent"
                        }`}
                        onClick={() => handleAvatarSelect(avatar)}
                      >
                        <Image
                          src={avatar || "/images/placeholder.svg"}
                          alt={`Avatar option ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                        {selectedAvatar === avatar && (
                          <div className="absolute inset-0 bg-teal-500 bg-opacity-20 flex items-center justify-center">
                            <Check className="h-4 w-4 text-white" />
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <h3 className="text-xl font-bold">{profile.name}</h3>
              <p className="text-gray-500 capitalize">{profile.role}</p>

              {isDoctor && (
                <div className="mt-2 text-sm text-gray-600">
                  <p>{profile.specialty}</p>
                  <p>{profile.yearsOfExperience} years of experience</p>
                </div>
              )}

              <div className="mt-4 w-full">
                <p className="text-sm text-gray-600">{profile.bio}</p>
              </div>

              <Separator className="my-4" />

              <div className="w-full text-left">
                <div className="flex items-center mb-2">
                  <span className="w-24 text-sm text-gray-500">Location:</span>
                  <span className="text-sm">{profile.location}</span>
                </div>
                <div className="flex items-center mb-2">
                  <span className="w-24 text-sm text-gray-500">Email:</span>
                  <span className="text-sm">{profile.email}</span>
                </div>
                <div className="flex items-center">
                  <span className="w-24 text-sm text-gray-500">Phone:</span>
                  <span className="text-sm">{profile.phone}</span>
                </div>
              </div>

              <div className="mt-4 w-full">
                <p className="text-sm text-gray-500 mb-2">Interests:</p>
                <div className="flex flex-wrap gap-2">
                  {profile.interests.map((interest, index) => (
                    <span key={index} className="px-2 py-1 bg-teal-100 text-teal-800 rounded-full text-xs">
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Edit Profile Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="md:col-span-2"
        >
          <Card>
            <CardHeader>
              <CardTitle>Edit Profile</CardTitle>
              <CardDescription>Update your personal information</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={profile.name}
                      onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                      disabled={!isEditing}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={profile.email}
                      onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                      disabled={!isEditing}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      value={profile.phone}
                      onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                      disabled={!isEditing}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      value={profile.location}
                      onChange={(e) => setProfile({ ...profile, location: e.target.value })}
                      disabled={!isEditing}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea
                    id="bio"
                    rows={4}
                    value={profile.bio}
                    onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                    disabled={!isEditing}
                    placeholder="Tell us about yourself..."
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="interests">Interests (comma separated)</Label>
                  <Input
                    id="interests"
                    value={profile.interests.join(", ")}
                    onChange={(e) =>
                      setProfile({
                        ...profile,
                        interests: e.target.value
                          .split(",")
                          .map((i) => i.trim())
                          .filter((i) => i),
                      })
                    }
                    disabled={!isEditing}
                    placeholder="Heart Health, Nutrition, Fitness..."
                  />
                </div>

                {isDoctor && (
                  <>
                    <Separator />
                    <h3 className="text-lg font-medium">Professional Information</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="specialty">Specialty</Label>
                        <Input
                          id="specialty"
                          value={profile.specialty}
                          onChange={(e) => setProfile({ ...profile, specialty: e.target.value })}
                          disabled={!isEditing}
                          placeholder="Cardiology, Nutrition, etc."
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="credentials">Credentials</Label>
                        <Input
                          id="credentials"
                          value={profile.credentials}
                          onChange={(e) => setProfile({ ...profile, credentials: e.target.value })}
                          disabled={!isEditing}
                          placeholder="MD, PhD, etc."
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="practiceLocation">Practice Location</Label>
                        <Input
                          id="practiceLocation"
                          value={profile.practiceLocation}
                          onChange={(e) => setProfile({ ...profile, practiceLocation: e.target.value })}
                          disabled={!isEditing}
                          placeholder="Hospital or clinic name"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="experience">Years of Experience</Label>
                        <Input
                          id="experience"
                          type="number"
                          value={profile.yearsOfExperience}
                          onChange={(e) => setProfile({ ...profile, yearsOfExperience: e.target.value })}
                          disabled={!isEditing}
                        />
                      </div>
                    </div>
                  </>
                )}
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}