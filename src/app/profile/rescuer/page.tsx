export default function RescuerProfilePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Rescuer Profile</h1>
        
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <div className="flex items-center mb-6">
            <div className="w-20 h-20 bg-gray-200 rounded-full mr-4"></div>
            <div>
              <h2 className="text-xl font-semibold">Happy Paws Rescue</h2>
              <p className="text-gray-600">Verified Rescuer • Since 2020</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Organization Details</h3>
              <p className="text-gray-600">Email: contact@happypawsrescue.com</p>
              <p className="text-gray-600">Phone: (555) 987-6543</p>
              <p className="text-gray-600">Location: New York, NY</p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Current Listings</h3>
              <div className="grid grid-cols-2 gap-4">
                {/* Pet listings will be dynamically rendered here */}
                <div className="border rounded-md p-3">
                  <div className="aspect-square bg-gray-200 rounded-sm mb-2"></div>
                  <p className="font-medium">Pet Name</p>
                  <p className="text-sm text-gray-600">Status: Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
