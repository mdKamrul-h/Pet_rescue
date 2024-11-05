import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function Home() {
  const features = [
    {
      title: 'Find Your Perfect Pet',
      description: 'Browse through our collection of lovable pets waiting for their forever homes.',
      icon: '🐾',
    },
    {
      title: 'Easy Adoption Process',
      description: 'Simple and straightforward adoption process to help you welcome a new family member.',
      icon: '📝',
    },
    {
      title: 'Support Network',
      description: 'Connect with experienced pet owners and get advice on pet care.',
      icon: '💝',
    },
  ];

  const recentPets = [
    {
      name: 'Max',
      type: 'Dog',
      breed: 'Golden Retriever',
      age: '2 years',
      location: 'New York',
    },
    {
      name: 'Luna',
      type: 'Cat',
      breed: 'Persian',
      age: '1 year',
      location: 'Los Angeles',
    },
    {
      name: 'Rocky',
      type: 'Dog',
      breed: 'German Shepherd',
      age: '3 years',
      location: 'Chicago',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Find Your Perfect Companion
            </h1>
            <p className="text-xl mb-8">
              Connect with loving pets waiting for their forever homes. Make a difference in a pet&apos;s life today.
            </p>
            <div className="space-x-4">
              <Link href="/adopt">
                <Button>Browse Pets</Button>
              </Link>
              <Link href="/about">
                <Button variant="outline">Learn More</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <Card key={feature.title}>
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Pets Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Recently Added Pets</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentPets.map((pet) => (
              <Card key={pet.name}>
                <CardContent className="p-6">
                  <div className="aspect-square relative mb-4">
                    <Image
                      src="/placeholder.svg"
                      alt={pet.name}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{pet.name}</h3>
                  <div className="space-y-2">
                    <Badge>{pet.type}</Badge>
                    <p className="text-gray-600">{pet.breed}</p>
                    <p className="text-gray-600">{pet.age} • {pet.location}</p>
                  </div>
                  <Link href="/adopt" className="block mt-4">
                    <Button className="w-full">View Details</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/adopt">
              <Button variant="outline">View All Pets</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Find Your New Best Friend?</h2>
          <p className="text-xl mb-8">Start your journey to pet adoption today.</p>
          <Link href="/adopt">
            <Button size="lg" variant="outline">Start Adoption Process</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
