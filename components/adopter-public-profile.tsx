'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PawPrint, Heart, MapPin, Clock, Home, Users, MessageCircle, Calendar, Search, Star, Trophy, ArrowRight } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export function AdopterPublicProfile() {
  const [activeTab, setActiveTab] = useState('adoptions')
  const [isLookingForPet, setIsLookingForPet] = useState(false)

  const profileData = {
    name: 'Alex Johnson',
    location: 'San Francisco, CA',
    avatarUrl: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop&crop=faces&auto=format&q=60',
    bio: 'Animal lover and proud adopter of rescue pets. Advocate for animal welfare.',
    memberSince: 'January 2020',
    adoptions: 3,
    preferences: [
      { name: 'Dogs', icon: <PawPrint className="w-4 h-4 mr-1" />, color: 'bg-yellow-200 text-yellow-700' },
      { name: 'Cats', icon: <PawPrint className="w-4 h-4 mr-1" />, color: 'bg-blue-200 text-blue-700' },
      { name: 'Senior Pets', icon: <Heart className="w-4 h-4 mr-1" />, color: 'bg-purple-200 text-purple-700' },
      { name: 'Rescuer', icon: <Star className="w-4 h-4 mr-1" />, color: 'bg-green-200 text-green-700' },
      { name: 'Adopter', icon: <Home className="w-4 h-4 mr-1" />, color: 'bg-pink-200 text-pink-700' },
    ],
    rescuerProfile: {
      rescues: 15,
      points: 1250,
      rank: 3,
      achievements: [
        { name: '10 Rescues', icon: <Trophy className="w-4 h-4 mr-1" />, color: 'bg-pink-200 text-purple-600' },
        { name: 'Cat Whisperer', icon: <Trophy className="w-4 h-4 mr-1" />, color: 'bg-green-200 text-green-600' },
        { name: 'Dog Expert', icon: <Trophy className="w-4 h-4 mr-1" />, color: 'bg-blue-200 text-blue-600' },
      ],
    },
  }

  const adoptionHistory = [
    { id: 1, name: 'Buddy', type: 'Dog', age: '5 years', image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=300&h=200&fit=crop&crop=faces&auto=format&q=60', adoptedOn: '2022-03-15', description: 'Loving golden retriever, now enjoying long walks in the park.' },
    { id: 2, name: 'Whiskers', type: 'Cat', age: '3 years', image: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=300&h=200&fit=crop&crop=faces&auto=format&q=60', adoptedOn: '2021-07-22', description: 'Playful tabby cat, loves chasing laser pointers.' },
    { id: 3, name: 'Max', type: 'Dog', age: '8 years', image: 'https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?w=300&h=200&fit=crop&crop=faces&auto=format&q=60', adoptedOn: '2020-11-30', description: 'Senior poodle mix, enjoying his golden years on the couch.' },
  ]

  const testimonials = [
    { id: 1, text: "Alex provided a loving home for Buddy. It's heartwarming to see how well they've bonded!", author: "Sarah - Rescue Center Volunteer" },
    { id: 2, text: "The care and attention Alex gives to senior pets is admirable. Max couldn't have found a better home.", author: "Dr. Johnson - Veterinarian" },
    { id: 3, text: "Alex's commitment to animal welfare goes beyond adoption. They're always ready to help with fundraisers and awareness campaigns.", author: "Mark - Animal Shelter Manager" },
  ]

  return (
    <div className="min-h-screen bg-blue-200 font-sans">
      <header className="bg-pink-400 text-white p-4 rounded-b-3xl shadow-lg">
        <nav className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-3xl font-bold flex items-center">
            <PawPrint className="w-8 h-8 mr-2" />
            <span>Paw Pal</span>
          </Link>
          <div className="space-x-4">
            <Link href="/" className="hover:underline text-lg">Home</Link>
            <Link href="/about" className="hover:underline text-lg">About</Link>
            <Link href="/adopt" className="hover:underline text-lg">Adopt</Link>
          </div>
        </nav>
      </header>

      <main className="container mx-auto py-8 px-4">
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <Avatar className="w-32 h-32">
                <AvatarImage src={profileData.avatarUrl} alt={profileData.name} />
                <AvatarFallback>{profileData.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-3xl font-bold text-purple-600 mb-2">{profileData.name}</h1>
                <div className="flex items-center justify-center md:justify-start mb-2">
                  <MapPin className="w-4 h-4 mr-1 text-gray-500" />
                  <span className="text-gray-600">{profileData.location}</span>
                </div>
                <p className="text-gray-600 mb-4">{profileData.bio}</p>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  {profileData.preferences.map((pref, index) => (
                    <Badge key={index} variant="secondary" className={pref.color}>
                      {pref.icon}
                      {pref.name}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="flex flex-col items-center md:items-end gap-2">
                <div className="flex items-center whitespace-nowrap">
                  <Calendar className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-sm font-semibold">Member since {profileData.memberSince}</span>
                </div>
                <div className="flex items-center">
                  <Heart className="w-4 h-4 text-pink-500 mr-2 flex-shrink-0" />
                  <span className="text-sm font-semibold">{profileData.adoptions} Adoptions</span>
                </div>
                <Button className="mt-2 rounded-full">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Contact
                </Button>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-center md:justify-start space-x-2">
              <Switch
                id="looking-for-pet"
                checked={isLookingForPet}
                onCheckedChange={setIsLookingForPet}
              />
              <Label htmlFor="looking-for-pet" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                {isLookingForPet ? (
                  <span className="flex items-center text-green-600">
                    <Search className="w-4 h-4 mr-1" />
                    Currently looking for a pet
                  </span>
                ) : (
                  <span className="flex items-center text-gray-500">
                    <Search className="w-4 h-4 mr-1" />
                    Not currently looking for a pet
                  </span>
                )}
              </Label>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8 bg-gradient-to-r from-pink-100 to-purple-100">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-purple-600 mb-4">Rescuer Profile</h2>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center">
                  <PawPrint className="w-5 h-5 text-pink-500 mr-2" />
                  <span className="text-lg font-semibold">{profileData.rescuerProfile.rescues} Rescues</span>
                </div>
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-500 mr-2" />
                  <span className="text-lg font-semibold">{profileData.rescuerProfile.points} Points</span>
                </div>
                <div className="flex items-center">
                  <Trophy className="w-5 h-5 text-blue-500 mr-2" />
                  <span className="text-lg font-semibold">Rank #{profileData.rescuerProfile.rank}</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {profileData.rescuerProfile.achievements.map((achievement, index) => (
                  <Badge key={index} variant="secondary" className={achievement.color}>
                    {achievement.icon}
                    {achievement.name}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="mt-4 text-center md:text-right">
              <Button variant="link" className="text-purple-600 hover:text-purple-800">
                View Full Rescuer Profile <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="adoptions" className="w-full">
          <TabsList className="grid w-full grid-cols-2 rounded-full overflow-hidden bg-pink-200 p-1">
            <TabsTrigger
              value="adoptions"
              onClick={() => setActiveTab('adoptions')}
              className={`rounded-full ${activeTab === 'adoptions' ? 'bg-pink-400 text-white' : ''}`}
            >
              <Heart className="w-4 h-4 mr-2" />
              Adoption History
            </TabsTrigger>
            <TabsTrigger
              value="testimonials"
              onClick={() => setActiveTab('testimonials')}
              className={`rounded-full ${activeTab === 'testimonials' ? 'bg-pink-400 text-white' : ''}`}
            >
              <Users className="w-4 h-4 mr-2" />
              Testimonials
            </TabsTrigger>
          </TabsList>
          <TabsContent value="adoptions">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {adoptionHistory.map((adoption) => (
                <Card key={adoption.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <Image src={adoption.image} alt={adoption.name} width={300} height={200} className="w-full h-48 object-cover" />
                  <CardContent className="p-4">
                    <h2 className="text-2xl text-purple-600 mb-2">{adoption.name}</h2>
                    <div className="flex justify-between items-center mb-2">
                      <Badge variant="secondary" className="bg-pink-200 text-purple-600">
                        {adoption.type}
                      </Badge>
                      <span className="text-sm text-gray-500">{adoption.age}</span>
                    </div>
                    <p className="text-gray-600 mb-2">{adoption.description}</p>
                    <div className="flex items-center text-sm text-gray-500 mt-2">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>Adopted on {adoption.adoptedOn}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="testimonials">
            <div className="space-y-6 mt-6">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.id}>
                  <CardContent className="p-6">
                    <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                    <p className="text-sm text-gray-500 font-semibold">- {testimonial.author}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <footer className="bg-pink-400 text-white py-8 rounded-t-3xl mt-12">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 Paw Pal. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}