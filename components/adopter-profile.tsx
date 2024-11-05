'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { PawPrint, Camera, MessageCircle, Clock, Heart, Edit, MapPin, Star, Trophy, Medal, Home, Users, Search, Bell, Quote } from 'lucide-react'
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Toast } from "@/components/ui/toast"

export function AdopterProfile() {
  const [name, setName] = useState('Alice Johnson')
  const [location, setLocation] = useState('New York, NY')
  const [experience, setExperience] = useState('First-time adopter')
  const [bio, setBio] = useState('Animal lover looking to provide a forever home.')
  const [avatarUrl, setAvatarUrl] = useState('/placeholder.svg?height=100&width=100')
  const [showNotification, setShowNotification] = useState(false)
  const [hasRescuerProfile, setHasRescuerProfile] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNotification(true)
    }, 5000)
    return () => clearTimeout(timer)
  }, [])

  const adoptionRequests = [
    { id: 1, name: 'Buddy', type: 'Dog', age: '3 years', health: 'Excellent', status: 'In Queue', position: 2, estimatedWait: '3-5 days', image: '/placeholder.svg?height=200&width=300', location: 'Brooklyn, NY' },
    { id: 2, name: 'Whiskers', type: 'Cat', age: '2 years', health: 'Good', status: 'Approved', position: null, estimatedWait: 'Ready for pickup', image: '/placeholder.svg?height=200&width=300', location: 'Manhattan, NY' },
    { id: 3, name: 'Max', type: 'Dog', age: '5 years', health: 'Good', status: 'Pending', position: 1, estimatedWait: '1-2 days', image: '/placeholder.svg?height=200&width=300', location: 'Queens, NY' },
  ]

  const chatHistory = [
    { id: 1, rescuer: 'Jane Doe', lastMessage: 'Great! Let\'s schedule a meet and greet for Buddy.', time: '2 hours ago' },
    { id: 2, rescuer: 'John Smith', lastMessage: 'Whiskers is ready for pickup this Saturday.', time: '1 day ago' },
  ]

  const adoptionHistory = [
    { id: 1, name: 'Max', type: 'Dog', adoptedOn: '2022-05-15', image: '/placeholder.svg?height=200&width=300' },
  ]

  const testimonials = [
    { id: 1, name: 'Emily Thompson', pet: 'Luna', text: 'Alice was amazing throughout the adoption process. She made sure Luna was the perfect fit for our family!', date: '2023-04-15' },
    { id: 2, name: 'Michael Rodriguez', pet: 'Rocky', text: 'We couldn\'t be happier with our experience adopting from Alice. She truly cares about the animals and their new homes.', date: '2023-03-22' },
    { id: 3, name: 'Sarah Lee', pet: 'Whiskers', text: 'Alice\'s dedication to animal welfare is evident in everything she does. We\'re so grateful for her help in bringing Whiskers into our lives.', date: '2023-02-10' },
  ]

  const handleProfileUpdate = (event: React.FormEvent) => {
    event.preventDefault()
    console.log('Profile updated')
  }

  const handleAdoptionStory = (event: React.FormEvent) => {
    event.preventDefault()
    console.log('Adoption story submitted')
  }

  const handleCreateRescuerProfile = () => {
    console.log('Creating Rescuer Profile')
    setHasRescuerProfile(true)
  }

  return (
    <div className="min-h-screen bg-blue-100">
      <header className="bg-pink-400 text-white p-4 rounded-b-3xl shadow-lg">
        <nav className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-3xl font-bold flex items-center">
            <PawPrint className="w-8 h-8 mr-2" />
            <span className="font-comic-sans">PetRescue</span>
          </Link>
          <div className="space-x-4">
            <Link href="/" className="hover:underline text-lg">Home</Link>
            <Link href="/adopt" className="hover:underline text-lg">Adopt</Link>
            <Link href="/about" className="hover:underline text-lg">About</Link>
          </div>
        </nav>
      </header>

      <main className="container mx-auto py-8">
        <h1 className="text-4xl font-bold text-center mb-2 font-comic-sans text-pink-600">Alice Johnson</h1>
        <div className="flex justify-center space-x-2 mb-8">
          <Badge variant="secondary" className="bg-pink-200 text-pink-600">
            Rescuer
          </Badge>
          <Badge variant="default" className="bg-pink-500 text-white">
            Adopter
          </Badge>
        </div>
        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="grid w-full grid-cols-4 rounded-full overflow-hidden bg-pink-200 p-1">
            <TabsTrigger value="profile" className="rounded-full data-[state=active]:bg-pink-400 data-[state=active]:text-white">
              <PawPrint className="w-4 h-4 mr-2" />
              Profile
            </TabsTrigger>
            <TabsTrigger value="requests" className="rounded-full data-[state=active]:bg-pink-400 data-[state=active]:text-white">
              <Heart className="w-4 h-4 mr-2" />
              Adoption Requests
            </TabsTrigger>
            <TabsTrigger value="chats" className="rounded-full data-[state=active]:bg-pink-400 data-[state=active]:text-white">
              <MessageCircle className="w-4 h-4 mr-2" />
              Chats
            </TabsTrigger>
            <TabsTrigger value="history" className="rounded-full data-[state=active]:bg-pink-400 data-[state=active]:text-white">
              <Clock className="w-4 h-4 mr-2" />
              Adoption History
            </TabsTrigger>
          </TabsList>
          <TabsContent value="profile">
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-2xl font-comic-sans text-pink-600">My Profile</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleProfileUpdate} className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <Avatar className="w-24 h-24">
                      <AvatarImage src={avatarUrl} alt="Profile Picture" />
                      <AvatarFallback className="bg-pink-300 text-pink-600 text-2xl font-comic-sans">
                        {name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <Button variant="outline" className="rounded-full">
                        <Camera className="w-4 h-4 mr-2" />
                        Change Picture
                      </Button>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="font-comic-sans text-lg text-pink-600">Name</Label>
                      <Input id="name" value={name} onChange={(e) => setName(e.target.value)} className="rounded-full" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location" className="font-comic-sans text-lg text-pink-600">Location</Label>
                      <Input id="location" value={location} onChange={(e) => setLocation(e.target.value)} className="rounded-full" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="experience" className="font-comic-sans text-lg text-pink-600">Adoption Experience</Label>
                    <Select value={experience} onValueChange={setExperience}>
                      <SelectTrigger className="rounded-full">
                        <SelectValue placeholder="Select your experience level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="First-time adopter">First-time adopter</SelectItem>
                        <SelectItem value="Previous adopter">Previous adopter</SelectItem>
                        <SelectItem value="Experienced adopter">Experienced adopter</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bio" className="font-comic-sans text-lg text-pink-600">Bio</Label>
                    <Textarea id="bio" value={bio} onChange={(e) => setBio(e.target.value)} className="rounded-xl min-h-[100px]" />
                  </div>
                  <Button type="submit" className="w-full rounded-full bg-pink-500 hover:bg-pink-600 font-comic-sans text-lg">
                    Update Profile
                  </Button>
                </form>
              </CardContent>
            </Card>
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-2xl font-comic-sans text-pink-600">My Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="flex flex-col items-center p-4 bg-pink-100 rounded-xl">
                    <PawPrint className="w-8 h-8 text-pink-500 mb-2" />
                    <span className="text-2xl font-bold text-pink-600">5</span>
                    <span className="text-sm text-gray-600">Adoptions</span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-pink-100 rounded-xl">
                    <Home className="w-8 h-8 text-pink-500 mb-2" />
                    <span className="text-2xl font-bold text-pink-600">12</span>
                    <span className="text-sm text-gray-600">Animals Fostered</span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-pink-100 rounded-xl">
                    <Clock className="w-8 h-8 text-pink-500 mb-2" />
                    <span className="text-2xl font-bold text-pink-600">150</span>
                    <span className="text-sm text-gray-600">Volunteer Hours</span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-pink-100 rounded-xl">
                    <Star className="w-8 h-8 text-pink-500 mb-2" />
                    <span className="text-2xl font-bold text-pink-600">4.9</span>
                    <span className="text-sm text-gray-600">Adopter Rating</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-2xl font-comic-sans text-pink-600">Adoption Testimonials</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {testimonials.map((testimonial) => (
                    <Card key={testimonial.id} className="bg-pink-50">
                      <CardContent className="p-4">
                        <div className="flex items-start space-x-4">
                          <Quote className="w-8 h-8 text-pink-500 flex-shrink-0 mt-1" />
                          <div>
                            <p className="text-gray-700 italic mb-2">{testimonial.text}</p>
                            <div className="flex justify-between items-center">
                              <span className="text-sm font-semibold text-pink-600">
                                {testimonial.name} (adopted {testimonial.pet})
                              </span>
                              <span className="text-xs text-gray-500">{testimonial.date}</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-2xl font-comic-sans text-pink-600">Pet Preferences</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <PawPrint className="w-6 h-6 text-pink-500" />
                    <span className="text-lg  font-comic-sans">Preferred Animals:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="text-pink-600 bg-pink-200">
                      Dogs
                    </Badge>
                    <Badge variant="secondary" className="text-blue-600 bg-blue-200">
                      Cats
                    </Badge>
                    <Badge variant="secondary" className="text-blue-600 bg-blue-200">
                      Small Animals
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Home className="w-6 h-6 text-pink-500" />
                    <span className="text-lg font-comic-sans">Living Situation:</span>
                    <span className="text-gray-600">Apartment with a small yard</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-6 h-6 text-pink-500" />
                    <span className="text-lg font-comic-sans">Household:</span>
                    <span className="text-gray-600">Family with young children</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-2xl font-comic-sans text-pink-600">Become a Rescuer</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Want to help rescue animals? Create a Rescuer Profile to get started!</p>
                <Button
                  className="w-full rounded-full bg-blue-500 hover:bg-blue-600 font-comic-sans text-white"
                  onClick={handleCreateRescuerProfile}
                  disabled={hasRescuerProfile}
                >
                  {hasRescuerProfile ? 'Rescuer Profile Created' : 'Create Rescuer Profile'}
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="requests">
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-2xl font-comic-sans text-pink-600">Find Your Perfect Pet</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-4">
                  <div className="flex-1 min-w-[200px]">
                    <Label htmlFor="search" className="font-comic-sans">Search</Label>
                    <div className="relative">
                      <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <Input
                        id="search"
                        type="text"
                        placeholder="Search for pets..."
                        className="pl-8 rounded-full"
                      />
                    </div>
                  </div>
                  <div className="flex-1 min-w-[200px]">
                    <Label htmlFor="animalType" className="font-comic-sans">Animal Type</Label>
                    <Select>
                      <SelectTrigger id="animalType" className="rounded-full">
                        <SelectValue placeholder="Select animal type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Animals</SelectItem>
                        <SelectItem value="dog">Dogs</SelectItem>
                        <SelectItem value="cat">Cats</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex-1 min-w-[200px]">
                    <Label htmlFor="breed" className="font-comic-sans">Breed</Label>
                    <Select>
                      <SelectTrigger id="breed" className="rounded-full">
                        <SelectValue placeholder="Select breed" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Breeds</SelectItem>
                        <SelectItem value="golden retriever">Golden Retriever</SelectItem>
                        <SelectItem value="german shepherd">German Shepherd</SelectItem>
                        <SelectItem value="siamese">Siamese</SelectItem>
                        <SelectItem value="persian">Persian</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="maxAge" className="font-comic-sans">Max Age: 10 years</Label>
                  <Slider
                    id="maxAge"
                    min={0}
                    max={20}
                    step={1}
                    defaultValue={[10]}
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="text-pink-500" />
                  <Input
                    type="text"
                    placeholder="Enter your location"
                    className="rounded-full flex-1"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="notifications" />
                  <Label htmlFor="notifications" className="font-comic-sans">
                    Enable notifications for new pets in my area
                  </Label>
                </div>
              </CardContent>
            </Card>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {adoptionRequests.map((request) => (
                <Card key={request.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <Image src={request.image} alt={request.name} width={300} height={200} className="w-full h-48 object-cover" />
                  <CardContent className="p-4">
                    <h2 className="text-2xl font-comic-sans text-pink-600 mb-2">{request.name}</h2>
                    <div className="flex justify-between items-center mb-2">
                      <Badge variant="secondary" className="bg-pink-200 text-pink-600">
                        {request.type}
                      </Badge>
                      <span className="text-sm text-gray-500">{request.age} years old</span>
                    </div>
                    <p className="text-gray-600 mb-2">Health: {request.health}</p>
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <MapPin className="w-4 h-4 mr-1" />
                      {request.location}
                    </div>
                    <Badge variant={request.status === 'Approved' ? 'success' : 'secondary'} className="mb-2">
                      {request.status}
                    </Badge>
                    {request.position && (
                      <p className="text-sm text-gray-600">Queue Position: {request.position}</p>
                    )}
                    <p className="text-sm text-gray-600">Estimated Wait: {request.estimatedWait}</p>
                    <Button className="w-full mt-4 rounded-full bg-blue-500 hover:bg-blue-600 font-comic-sans text-white">
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="chats">
            <div className="space-y-4 mt-6">
              {chatHistory.map((chat) => (
                <Card key={chat.id}>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-lg font-comic-sans text-pink-600">{chat.rescuer}</h3>
                      <span className="text-sm text-gray-500">{chat.time}</span>
                    </div>
                    <p className="text-gray-600">{chat.lastMessage}</p>
                    <Button variant="outline" className="mt-2 rounded-full">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Continue Chat
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="history">
            <div className="space-y-6 mt-6">
              {adoptionHistory.map((adoption) => (
                <Card key={adoption.id}>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <Image src={adoption.image} alt={adoption.name} width={80} height={80} className="rounded-full" />
                      <div>
                        <h3 className="text-xl font-comic-sans text-pink-600">{adoption.name}</h3>
                        <p className="text-gray-600">{adoption.type}</p>
                        <p className="text-sm text-gray-500">Adopted on: {adoption.adoptedOn}</p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" className="rounded-full">
                            <Edit className="w-4 h-4 mr-2" />
                            Share Adoption Story
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                          <DialogHeader>
                            <DialogTitle>Share Your Adoption Story</DialogTitle>
                            <DialogDescription>
                              Tell us about your experience adopting {adoption.name}.
                            </DialogDescription>
                          </DialogHeader>
                          <form onSubmit={handleAdoptionStory} className="grid gap-4 py-4">
                            <Textarea placeholder="Write your adoption story here..." className="min-h-[200px] rounded-xl" />
                            <Button type="submit" className="rounded-full">Share Story</Button>
                          </form>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <footer className="bg-pink-400 text-white py-8 rounded-t-3xl mt-12">
        <div className="container mx-auto text-center">
          <p className="font-comic-sans">&copy; 2023 PetRescue. All rights reserved.</p>
        </div>
      </footer>
      {showNotification && (
        <Toast className="fixed bottom-4 right-4 bg-blue-500 text-white p-4 rounded-lg shadow-lg">
          <div className="flex items-center">
            <Bell className="w-6 h-6 mr-2" />
            <p className="font-comic-sans">New pet available in your area!</p>
          </div>
        </Toast>
      )}
    </div>
  )
}