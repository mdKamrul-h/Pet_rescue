export default function AdoptPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Available Pets</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Pet cards will be dynamically rendered here */}
        <div className="border rounded-lg p-4 shadow-sm">
          <div className="aspect-square bg-gray-200 rounded-md mb-4"></div>
          <h2 className="text-xl font-semibold mb-2">Pet Name</h2>
          <p className="text-gray-600 mb-2">Breed • Age • Location</p>
          <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}
