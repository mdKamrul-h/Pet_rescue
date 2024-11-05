'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PawPrint, Heart, MapPin, Star, Trophy, ArrowLeft, Calendar, Clock, Home } from 'lucide-react'

export function RescuerProfile() {
  const [progress, setProgress] = useState(66)

  const profileData = {
    name: 'Alex Johnson',
    location: 'San Francisco, CA',
    avatarUrl: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop&crop=faces&auto=format&q=60',
    bio: 'Passionate animal rescuer with 5 years of experience. Specializing in rehabilitating injured wildlife and finding homes for abandoned pets.',
    memberSince: 'January 2018',
    rescues: 76,
    points: 3250,
    rank: 3,
    nextRank: 'Silver Rescuer',
    pointsToNextRank: 750,
    specializations: ['Dogs', 'Cats', 'Wildlife'],
    achievements: [
      { name: '50 Rescues', icon: <Trophy className="w-4 h-4 mr-1" />, color: 'bg-yellow-200 text-yellow-700' },
      { name: 'Cat Whisperer', icon: <Star className="w-4 h-4 mr-1" />, color: 'bg-green-200 text-green-700' },
      { name: 'Wildlife Expert', icon: <PawPrint className="w-4 h-4 mr-1" />, color: 'bg-blue-200 text-blue-700' },
      { name: 'Community Leader', icon: <Heart className="w-4 h-4 mr-1" />, color: 'bg-red-200 text-red-700' },
    ],
    recentRescues: [
      { id: 1, name: 'Luna', type: 'Cat', date: '2023-10-15', description: 'Rescued from a storm drain during heavy rain.' },
      { id: 2, name: 'Rocky', type: 'Dog', date: '2023-09-22', description: 'Found abandoned in a park, now in a loving home.' },
      { id: 3, name: 'Feathers', type: 'Bird', date: '2023-08-30', description: 'Rehabilitated after wing injury, released back to wild.' },
      { id: 4, name: 'Whiskers', type: 'Cat', date: '2023-08-05', description: 'Rescued from a high tree, reunited with owner.' },
      { id: 5, name: 'Buddy', type: 'Dog', date: '2023-07-19', description: 'Saved from a busy highway, now in training as a service dog.' },
    ],
    pendingStrays: [
      { id: 1, name: 'Mittens', type: 'Cat', image: '/placeholder.svg?height=100&width=100', description: 'Friendly calico cat, about 2 years old. Good with children.' },
      { id: 2, name: 'Rex', type: 'Dog', image: '/placeholder.svg?height=100&width=100', description: 'Energetic Labrador mix, approximately 1 year old. Needs active home.' },
      { id: 3, name: 'Tweety', type: 'Bird', image: '/placeholder.svg?height=100&width=100', description: 'Rescued canary, fully recovered and ready for a new home.' },
    ],
    rehomedPets: [
      { id: 1, name: 'Max', type: 'Dog', image: '/placeholder.svg?height=100&width=100', adoptionDate: '2023-09-10', adopter: 'Johnson Family' },
      { id: 2, name: 'Bella', type: 'Cat', image: '/placeholder.svg?height=100&width=100', adoptionDate: '2023-08-22', adopter: 'Emily Chen' },
      { id: 3, name: 'Charlie', type: 'Dog', image: '/placeholder.svg?height=100&width=100', adoptionDate: '2023-07-15', adopter: 'Martinez Household' },
      { id: 4, name: 'Nemo', type: 'Fish', image: '/placeholder.svg?height=100&width=100', adoptionDate: '2023-06-30', adopter: 'Aquarium Enthusiasts Club' },
    ],
  }

  return (
    <div className="min-h-screen bg-blue-200 font-sans">
      <header className="bg-pink-400 text-white p-4 rounded-b-3xl shadow-lg">
        <nav className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-3xl font-bold flex items-center">
            <PawPrint className="w-8 h-8 mr-2" />
            <span>Paw Pal</span>
          </Link>
          <Button variant="ghost" className="text-white hover:text-blue-200" asChild>
            <Link href="/adopter-profile">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Adopter Profile
            </Link>
          </Button>
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
                  {profileData.specializations.map((spec, index) => (
                    <Badge key={index} variant="secondary" className="bg-purple-200 text-purple-700">
                      <PawPrint className="w-4 h-4 mr-1" />
                      {spec}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="flex flex-col items-center md:items-end gap-2">
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 text-green-500 mr-2" />
                  <span className="text-sm font-semibold">Rescuer since {profileData.memberSince}</span>
                </div>
                <div className="flex items-center">
                  <Heart className="w-5 h-5 text-pink-500 mr-2" />
                  <span className="text-sm font-semibold">{profileData.rescues} Rescues</span>
                </div>
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-500 mr-2" />
                  <span className="text-sm font-semibold">{profileData.points} Points</span>
                </div>
                <div className="flex items-center">
                  <Trophy className="w-5 h-5 text-blue-500 mr-2" />
                  <span className="text-sm font-semibold">Rank #{profileData.rank}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Achievements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {profileData.achievements.map((achievement, index) => (
                  <Badge key={index} variant="secondary" className={achievement.color}>
                    {achievement.icon}
                    {achievement.name}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Rank Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Progress to {profileData.nextRank}</span>
                  <span>{profileData.points} / {profileData.points + profileData.pointsToNextRank} points</span>
                </div>
                <Progress value={progress} className="w-full" />
                <p className="text-sm text-gray-500">
                  {profileData.pointsToNextRank} more points to reach {profileData.nextRank}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Recent Rescues</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {profileData.recentRescues.map((rescue) => (
                <Card key={rescue.id}>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-semibold text-purple-600">{rescue.name}</h3>
                        <Badge variant="secondary" className="mt-1 bg-pink-200 text-pink-700">
                          {rescue.type}
                        </Badge>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{rescue.date}</span>
                      </div>
                    </div>
                    <p className="mt-2 text-gray-600">{rescue.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Adoption Status</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="pending" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="pending">Pending Adoptions</TabsTrigger>
                <TabsTrigger value="adopted">Successfully Rehomed Pets</TabsTrigger>
              </TabsList>
              <TabsContent value="pending">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                  {profileData.pendingStrays.map((stray) => (
                    <Card key={stray.id}>
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-4">
                          <Image src={stray.image} alt={stray.name} width={100} height={100} className="rounded-full" />
                          <div>
                            <h3 className="text-lg font-semibold text-purple-600">{stray.name}</h3>
                            <Badge variant="secondary" className="mt-1 bg-yellow-200 text-yellow-700">
                              {stray.type}
                            </Badge>
                            <p className="mt-2 text-sm text-gray-600">{stray.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="adopted">
                <h3 className="text-xl font-semibold mb-4">Successfully Rehomed Pets</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                  {profileData.rehomedPets.map((pet) => (
                    <Card key={pet.id}>
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-4">
                          <Image src={pet.image} alt={pet.name} width={100} height={100} className="rounded-full" />
                          <div>
                            <h3 className="text-lg font-semibold text-purple-600">{pet.name}</h3>
                            <Badge variant="secondary" className="mt-1 bg-green-200 text-green-700">
                              {pet.type}
                            </Badge>
                            <p className="mt-1 text-sm text-gray-600">Adopted by: {pet.adopter}</p>
                            <p className="text-sm text-gray-500">
                              <Calendar className="w-4 h-4 inline mr-1" />
                              {pet.adoptionDate}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </main>

      <footer className="bg-pink-400 text-white py-8 rounded-t-3xl mt-12">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 Paw Pal. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}