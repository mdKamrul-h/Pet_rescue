export default function Events() {
  return (
    <div className="min-h-screen bg-blue-200 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-purple-600 mb-8">Upcoming Events</h1>
        <div className="bg-white rounded-3xl shadow-lg p-8">
          <p className="text-lg mb-6">
            Join us at our upcoming events to support animal welfare, meet our community, and
            potentially find your new furry friend. We regularly organize adoption drives,
            fundraisers, and educational workshops.
          </p>
          <div className="space-y-6">
            <div className="bg-pink-100 rounded-2xl p-6">
              <h2 className="text-2xl font-bold text-purple-600 mb-4">Adoption Drive</h2>
              <div className="space-y-2">
                <p className="font-bold">Date: June 15, 2024</p>
                <p className="font-bold">Location: Central Park</p>
                <p>Meet our adorable rescues looking for their forever homes!</p>
              </div>
            </div>
            <div className="bg-blue-100 rounded-2xl p-6">
              <h2 className="text-2xl font-bold text-purple-600 mb-4">Pet Care Workshop</h2>
              <div className="space-y-2">
                <p className="font-bold">Date: June 22, 2024</p>
                <p className="font-bold">Location: Community Center</p>
                <p>Learn essential pet care tips from our experienced veterinarians.</p>
              </div>
            </div>
            <div className="bg-green-100 rounded-2xl p-6">
              <h2 className="text-2xl font-bold text-purple-600 mb-4">Fundraising Gala</h2>
              <div className="space-y-2">
                <p className="font-bold">Date: July 1, 2024</p>
                <p className="font-bold">Location: Grand Hotel</p>
                <p>Join us for an evening of celebration and support for our cause.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
