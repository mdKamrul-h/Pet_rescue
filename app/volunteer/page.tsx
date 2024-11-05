export default function Volunteer() {
  return (
    <div className="min-h-screen bg-blue-200 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-purple-600 mb-8">Volunteer With Us</h1>
        <div className="bg-white rounded-3xl shadow-lg p-8">
          <p className="text-lg mb-6">
            Make a difference in the lives of animals by volunteering with Paw Pal. We offer various
            opportunities for individuals who want to contribute their time and skills to our mission.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-pink-100 rounded-2xl p-6">
              <h2 className="text-2xl font-bold text-purple-600 mb-4">Opportunities</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Animal Transport</li>
                <li>Foster Care</li>
                <li>Event Support</li>
                <li>Social Media Management</li>
              </ul>
            </div>
            <div className="bg-blue-100 rounded-2xl p-6">
              <h2 className="text-2xl font-bold text-purple-600 mb-4">Requirements</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>18 years or older</li>
                <li>Reliable transportation</li>
                <li>Commitment to animal welfare</li>
                <li>Background check clearance</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
