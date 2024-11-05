import Link from 'next/link'
import Image from 'next/image'

export default function Navigation() {
  return (
    <header className="bg-pink-400 text-white p-4 rounded-b-3xl shadow-lg">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-3xl font-bold flex items-center">
          <Image
            src="https://images.unsplash.com/photo-1603314585442-ee3b3c16fbcf?w=48&h=48&fit=crop&crop=faces&auto=format&q=60"
            alt="Paw Pal Logo"
            width={48}
            height={48}
            className="rounded-full mr-2"
          />
          <span className="font-bold">Paw Pal</span>
        </Link>
        <div className="space-x-4">
          <Link href="/about" className="hover:underline text-lg font-bold">About</Link>
          <Link href="/rescue" className="hover:underline text-lg font-bold">Rescue</Link>
          <Link href="/adopt" className="hover:underline text-lg font-bold">Adopt</Link>
        </div>
      </nav>
    </header>
  )
}
