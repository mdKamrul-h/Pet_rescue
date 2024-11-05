export default function Adopt() {
  return (
    <div className="min-h-screen bg-blue-200 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-purple-600 mb-8">Adopt a Pet</h1>
        <div className="bg-white rounded-3xl shadow-lg p-8">
          <p className="text-lg mb-6">
            Find your perfect companion through our adoption platform. We have many loving animals
            waiting for their forever homes. Our adoption process is designed to ensure the best match
            between pets and their new families.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="bg-pink-100 rounded-2xl p-6">
              <h2 className="text-2xl font-bold text-purple-600 mb-4">Available Pets</h2>
              <p>Browse through our database of animals ready for adoption.</p>
            </div>
            <div className="bg-blue-100 rounded-2xl p-6">
              <h2 className="text-2xl font-bold text-purple-600 mb-4">Adoption Process</h2>
              <p>Learn about our adoption procedures and requirements.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
