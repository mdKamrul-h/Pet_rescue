'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PawPrint, Heart, Home, ArrowRight, Calendar, MapPin, Clock, Trophy, Medal, Award } from 'lucide-react'

const floatingPawAnimation = `
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
    100% { transform: translateY(0px); }
  }
`

const pawBackgroundPattern = `
  .paw-pattern {
    background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFA500' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }
`

const topRescuers = [
  { name: 'Sarah Johnson', points: 1250, image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=faces&auto=format&q=60', status: 'gold' },
  { name: 'Mike Thompson', points: 1100, image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces&auto=format&q=60', status: 'silver' },
  { name: 'Emily Davis', points: 950, image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces&auto=format&q=60', status: 'bronze' },
]

const latestRescues = [
  { id: 1, type: 'Dog', location: 'New York, NY', image: 'https://images.unsplash.com/photo-1534361960057-19889db9621e?w=300&h=200&fit=crop&crop=faces&auto=format&q=60', date: '2023-05-15', rescuer: 'John Doe' },
  { id: 2, type: 'Cat', location: 'Los Angeles, CA', image: 'https://images.unsplash.com/photo-1548546738-8509cb246ed3?w=300&h=200&fit=crop&crop=faces&auto=format&q=60', date: '2023-05-14', rescuer: 'Jane Smith' },
  { id: 3, type: 'Dog', location: 'Chicago, IL', image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=300&h=200&fit=crop&crop=faces&auto=format&q=60', date: '2023-05-13', rescuer: 'Mike Johnson' },
]

const featuredAnimals = [
  { id: 1, name: 'Max', type: 'Dog', age: '2 years', image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=300&h=200&fit=crop&crop=faces&auto=format&q=60', reason: 'Longest in shelter', description: 'Friendly and energetic, great with kids!' },
  { id: 2, name: 'Luna', type: 'Cat', age: '1 year', image: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=300&h=200&fit=crop&crop=faces&auto=format&q=60', reason: 'Special needs', description: 'Deaf but very affectionate, needs a quiet home.' },
  { id: 3, name: 'Rocky', type: 'Dog', age: '3 years', image: 'https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?w=300&h=200&fit=crop&crop=faces&auto=format&q=60', reason: 'Well-trained', description: 'Knows many tricks, perfect for an active family.' },
  { id: 4, name: 'Whiskers', type: 'Rabbit', age: '6 months', image: 'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=300&h=200&fit=crop&crop=faces&auto=format&q=60', reason: 'Unique pet', description: 'Litter-trained and very social for a rabbit!' },
]

const rescuePosts = [
  { id: 1, title: 'Urgent: Injured Dog Found', location: 'Central Park, NY', date: '2023-05-10', description: 'Golden Retriever with injured paw, needs immediate attention.', status: 'Urgent' },
  { id: 2, title: 'Abandoned Kittens', location: 'Downtown LA', date: '2023-05-09', description: 'Three kittens found in a box, approximately 4 weeks old.', status: 'New' },
  { id: 3, title: 'Senior Cat Needs Home', location: 'Suburbs, Chicago', date: '2023-05-08', description: '10-year-old tabby cat, owner passed away, needs loving home.', status: 'Open' },
  { id: 4, title: 'Stray Puppies Spotted', location: 'Houston, TX', date: '2023-05-07', description: 'Group of 5 mixed-breed puppies seen near local park.', status: 'In Progress' },
]

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-blue-200 paw-pattern font-sans">
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1534361960057-19889db9621e?w=1920&h=600&fit=crop&crop=faces&auto=format&q=60"
          alt="Rescued pets"
          layout="fill"
          objectFit="cover"
          className="brightness-50"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center z-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Connecting Heroes with Homeless Animals!</h1>
          <p className="text-xl mb-8 font-bold">Bridging the gap between Rescuers and Adopters</p>
          <div className="space-y-4">
            <div className="space-x-4">
              <Button variant="default" size="lg" className="bg-purple-500 hover:bg-purple-600 rounded-full font-bold text-lg transform transition-transform duration-200 hover:scale-110">Reporter</Button>
              <Button variant="default" size="lg" className="bg-teal-500 hover:bg-teal-600 rounded-full font-bold text-lg transform transition-transform duration-200 hover:scale-110">Rescuer</Button>
              <Button variant="default" size="lg" className="bg-amber-500 hover:bg-amber-600 rounded-full font-bold text-lg transform transition-transform duration-200 hover:scale-110">Adopter</Button>
            </div>
            <p className="text-sm font-bold">Choose your adventure!</p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#fff4cc" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,224C672,213,768,171,864,149.3C960,128,1056,128,1152,149.3C1248,171,1344,213,1392,234.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
        <div className="absolute top-10 right-10" style={{ animation: 'float 3s ease-in-out infinite' }}>
          <PawPrint className="w-16 h-16 text-yellow-400" />
        </div>
      </section>

      {/* Featured Animals for Adoption Section */}
      <section className="py-12 bg-blue-200">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8 text-purple-600">Featured Cuties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredAnimals.map((animal) => (
              <Card key={animal.id} className="flex flex-col h-full bg-white rounded-3xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-200">
                <div className="relative">
                  <Image
                    src={animal.image}
                    alt={animal.name}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-0 right-0 bg-yellow-400 text-purple-600 px-3 py-1 rounded-bl-2xl font-bold">
                    {animal.reason}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="font-bold text-2xl text-purple-500">{animal.name}</CardTitle>
                  <CardDescription className="font-bold">{animal.type}, {animal.age}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-gray-600 mb-4 font-bold">{animal.description}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      <span className="font-bold">Added 2 weeks ago</span>
                    </div>
                    <Button variant="link" className="p-0 font-bold text-purple-500 transform transition-transform duration-200 hover:scale-110">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Rescues and Recent Rescue Posts Section */}
      <section className="py-12 bg-gradient-to-b from-pink-100 to-blue-100">
        <div className="container mx-auto">
          <Tabs defaultValue="latest-rescues" className="w-full">
            <TabsList className="w-full flex justify-center mb-8">
              <TabsTrigger value="latest-rescues" className="px-8 py-3 text-lg font-bold bg-white rounded-full shadow-md transition-all duration-200 data-[state=active]:bg-pink-400 data-[state=active]:text-white mr-4">
                Latest Rescues
              </TabsTrigger>
              <TabsTrigger value="rescue-posts" className="px-8 py-3 text-lg font-bold bg-white rounded-full shadow-md transition-all duration-200 data-[state=active]:bg-pink-400 data-[state=active]:text-white">
                Rescue Posts
              </TabsTrigger>
            </TabsList>
            <TabsContent value="latest-rescues" className="mb-8">
              <h2 className="text-3xl font-bold mb-8 text-purple-600 text-center">Latest Rescues</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {latestRescues.map((rescue) => (
                  <Card key={rescue.id} className="overflow-hidden rounded-3xl shadow-lg bg-white transform hover:scale-105 transition-transform duration-200">
                    <div className="relative">
                      <Image
                        src={rescue.image}
                        alt={`${rescue.type} in ${rescue.location}`}
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover"
                      />
                      <Badge variant="secondary" className="absolute top-2 right-2 bg-yellow-400 text-purple-600 font-bold">
                        {rescue.type}
                      </Badge>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold mb-2 text-lg text-purple-500">{rescue.location}</h3>
                      <div className="flex justify-between items-center text-sm text-gray-500">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span className="font-bold">{new Date(rescue.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                        </div>
                        <p className="font-bold">Rescued by: {rescue.rescuer}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="rescue-posts">
              <h2 className="text-3xl font-bold mb-8 text-purple-600 text-center">Recent Rescue Posts</h2>
              <div className="grid grid-cols-1 gap-8">
                {rescuePosts.map((post) => (
                  <Card key={post.id} className="rounded-3xl shadow-lg bg-white overflow-hidden transform hover:scale-105 transition-transform duration-200">
                    <CardHeader className="bg-gradient-to-r from-pink-200 to-purple-200 p-6">
                      <div className="flex justify-between items-center">
                        <CardTitle className="font-bold text-xl text-purple-600">{post.title}</CardTitle>
                        <Badge variant={post.status === 'Urgent' ? 'destructive' : 'secondary'} className="font-bold">
                          {post.status}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-center mb-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span className="font-bold">{post.location}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          <span className="font-bold">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                        </div>
                      </div>
                      <p className="mb-4 font-bold text-gray-600">{post.description}</p>
                      <Button variant="outline" className="rounded-full font-bold bg-gradient-to-r from-pink-400 to-purple-400 text-white border-none hover:from-pink-500 hover:to-purple-500 transform transition-transform duration-200 hover:scale-110">
                        Respond to Rescue <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Top Rescuers Section */}
      <section className="py-12 bg-blue-200">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8 text-purple-600">Top Rescuers</h2>
          <div className="flex justify-center space-x-8">
            {topRescuers.map((rescuer, index) => (
              <Card key={index} className="w-64 rounded-3xl shadow-lg bg-white overflow-hidden transform hover:scale-105 transition-transform duration-200">
                <CardContent className="flex flex-col items-center space-y-4 p-4">
                  <div className="relative">
                    <Image
                      src={rescuer.image}
                      alt={rescuer.name}
                      width={80}
                      height={80}
                      className="rounded-full border-4 border-blue-300"
                    />
                    <Badge
                      className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center"
                      variant={rescuer.status === 'gold' ? 'default' : rescuer.status === 'silver' ? 'secondary' : 'outline'}
                    >
                      {rescuer.status === 'gold' && <Trophy className="w-4 h-4 text-yellow-500" />}
                      {rescuer.status === 'silver' && <Medal className="w-4 h-4 text-gray-400" />}
                      {rescuer.status === 'bronze' && <Award className="w-4 h-4 text-purple-600" />}
                    </Badge>
                  </div>
                  <div className="text-center">
                    <p className="font-bold text-lg text-purple-500">{rescuer.name}</p>
                    <p className="text-sm text-gray-500 font-bold">{rescuer.points} points</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 bg-green-200">
        <div className="container mx-auto">
          <h2 className="text-4xl text-center mb-8 font-bold text-purple-600">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="rounded-3xl shadow-lg bg-white overflow-hidden transform hover:scale-105 transition-transform duration-200">
              <CardContent className="p-6">
                <PawPrint size={48} className="mx-auto mb-4 text-purple-500" />
                <h3 className="text-xl mb-2 text-center font-bold text-purple-500">Reporter</h3>
                <div className="absolute top-2 right-2">
                  <PawPrint className="w-6 h-6 text-pink-400 animate-pulse" />
                </div>
                <ul className="list-disc pl-5 space-y-2 font-bold">
                  <li>Create a reporter profile</li>
                  <li>Report animals in need of rescue</li>
                  <li>Provide location and details</li>
                  <li>Track the rescue progress</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="rounded-3xl shadow-lg bg-white overflow-hidden transform hover:scale-105 transition-transform duration-200">
              <CardContent className="p-6">
                <Heart size={48} className="mx-auto mb-4 text-pink-500" />
                <h3 className="text-xl mb-2 text-center font-bold text-purple-500">Rescuer</h3>
                <div className="absolute top-2 right-2">
                  <PawPrint className="w-6 h-6 text-pink-400 animate-pulse" />
                </div>
                <ul className="list-disc pl-5 space-y-2 font-bold">
                  <li>Create a rescuer profile</li>
                  <li>View and accept rescue requests</li>
                  <li>Coordinate with local authorities</li>
                  <li>Update rescue status and outcomes</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="rounded-3xl shadow-lg bg-white overflow-hidden transform hover:scale-105 transition-transform duration-200">
              <CardContent className="p-6">
                <Home size={48} className="mx-auto mb-4 text-green-500" />
                <h3 className="text-xl mb-2 text-center font-bold text-purple-500">Adopter</h3>
                <div className="absolute top-2 right-2">
                  <PawPrint className="w-6 h-6 text-pink-400 animate-pulse" />
                </div>
                <ul className="list-disc pl-5 space-y-2 font-bold">
                  <li>Create an adopter profile</li>
                  <li>Browse available animals</li>
                  <li>Apply for adoption</li>
                  <li>Schedule meet-and-greets</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <style jsx global>{`
        ${floatingPawAnimation}
        ${pawBackgroundPattern}
        body {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        }
      `}</style>
    </div>
  )
}
