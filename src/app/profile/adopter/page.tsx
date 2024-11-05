export default function AdopterProfilePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Adopter Profile</h1>
        
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <div className="flex items-center mb-6">
            <div className="w-20 h-20 bg-gray-200 rounded-full mr-4"></div>
            <div>
              <h2 className="text-xl font-semibold">John Doe</h2>
              <p className="text-gray-600">Member since 2023</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Contact Information</h3>
              <p className="text-gray-600">Email: john.doe@example.com</p>
              <p className="text-gray-600">Phone: (555) 123-4567</p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Adoption History</h3>
              <div className="space-y-2">
                <p className="text-gray-600">No adoptions yet</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
