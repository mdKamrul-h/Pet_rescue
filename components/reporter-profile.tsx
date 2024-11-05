'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { PawPrint, MapPin, Camera, Send, UserPlus, ArrowLeft } from 'lucide-react'

export function ReporterProfile() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [selectedLocation, setSelectedLocation] = useState({ lat: 40.7128, lng: -74.0060 }) // Default to New York City
  const [photos, setPhotos] = useState<string[]>([])
  const [name, setName] = useState('')
  const [avatarUrl, setAvatarUrl] = useState('')

  useEffect(() => {
    if (name) {
      // Generate a unique avatar based on the name
      setAvatarUrl(`https://api.dicebear.com/6.x/adventurer/svg?seed=${encodeURIComponent(name)}`)
    }
  }, [name])

  const handleMapClick = (event: React.MouseEvent<HTMLDivElement>) => {
    // In a real implementation, this would update with the actual clicked coordinates
    setSelectedLocation({ lat: 40.7128, lng: -74.0060 })
  }

  const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (files) {
      const newPhotos = Array.from(files).map(file => URL.createObjectURL(file))
      setPhotos(prevPhotos => [...prevPhotos, ...newPhotos].slice(0, 3))
    }
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    // Here you would typically send the form data to your backend
    setIsSubmitted(true)
  }

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
        <h1 className="text-4xl font-bold text-center mb-8 text-purple-600">Create your Reporter Profile</h1>
        
        {!isSubmitted ? (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-purple-600">Reporter Profile</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <Avatar className="w-32 h-32">
                    <AvatarImage src={avatarUrl} alt="Guest Avatar" />
                    <AvatarFallback className="bg-purple-300 text-purple-600 text-2xl">
                      {name ? name.charAt(0).toUpperCase() : 'G'}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 text-center md:text-left">
                    <Label htmlFor="name" className="text-lg text-purple-600">Your Name</Label>
                    <Input 
                      id="name" 
                      placeholder="Enter your name" 
                      className="mt-1" 
                      required 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="map" className="text-lg text-purple-600">Stray Animal's Location</Label>
                  <div 
                    id="map" 
                    className="w-full h-64 bg-gray-200 rounded-xl flex items-center justify-center cursor-pointer"
                    onClick={handleMapClick}
                  >
                    <MapPin className="w-8 h-8 text-pink-500" />
                    <span className="ml-2">Click to set stray animal's location (Map placeholder)</span>
                  </div>
                  <p className="text-sm text-gray-500">
                    Stray's Location: Lat {selectedLocation.lat.toFixed(4)}, Lng {selectedLocation.lng.toFixed(4)}
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="animalType" className="text-lg text-purple-600">Animal Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select animal type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="dog">Dog</SelectItem>
                      <SelectItem value="cat">Cat</SelectItem>
                      <SelectItem value="bird">Bird</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="condition" className="text-lg text-purple-600">Animal Condition</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select animal condition" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="healthy">Appears Healthy</SelectItem>
                      <SelectItem value="injured">Injured</SelectItem>
                      <SelectItem value="sick">Sick</SelectItem>
                      <SelectItem value="unknown">Unknown</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="background" className="text-lg text-purple-600">Animal Background</Label>
                  <Textarea 
                    id="background" 
                    placeholder="Provide any known history or background of the animal" 
                    className="min-h-[100px]"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="photos" className="text-lg text-purple-600">Upload Photos (3 required)</Label>
                  <div className="flex items-center space-x-2">
                    <Button type="button" onClick={() => document.getElementById('photo-upload')?.click()} variant="outline">
                      <Camera className="w-4 h-4 mr-2" />
                      Choose Files
                    </Button>
                    <input
                      id="photo-upload"
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={handlePhotoUpload}
                      className="hidden"
                      required
                    />
                    <span className="text-sm text-gray-500">{photos.length} of 3 photos selected</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 mt-2">
                    {photos.map((photo, index) => (
                      <Image key={index} src={photo} alt={`Uploaded photo ${index + 1}`} width={100} height={100} className="rounded-lg object-cover" />
                    ))}
                  </div>
                </div>

                <Button type="submit" className="w-full bg-pink-400 hover:bg-pink-500 text-white" disabled={photos.length !== 3}>
                  <UserPlus className="w-4 h-4 mr-2" />
                  Create Guest Profile
                </Button>
              </form>
            </CardContent>
          </Card>
        ) : (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-purple-600">Guest Profile Created Successfully!</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <Avatar className="w-32 h-32">
                  <AvatarImage src={avatarUrl} alt="Guest Avatar" />
                  <AvatarFallback className="bg-purple-300 text-purple-600 text-2xl">
                    {name ? name.charAt(0).toUpperCase() : 'G'}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-xl text-purple-600">{name}</h2>
                  <p className="text-md text-gray-600">
                    Guest ID: <Badge variant="outline" className="ml-2">GUEST-{Math.random().toString(36).substr(2, 9).toUpperCase()}</Badge>
                  </p>
                </div>
              </div>
              <p className="text-lg text-gray-700 mt-4 mb-6">
                Thank you for creating your guest profile. You can now report animals in need of rescue.
              </p>
              <Button onClick={() => setIsSubmitted(false)} className="w-full bg-pink-400 hover:bg-pink-500 text-white">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Return to Profile
              </Button>
            </CardContent>
          </Card>
        )}
      </main>

      <footer className="bg-pink-400 text-white py-8 rounded-t-3xl mt-12">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 Paw Pal. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}