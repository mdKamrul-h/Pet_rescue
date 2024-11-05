export default function Rescue() {
  return (
    <div className="min-h-screen bg-blue-200 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-purple-600 mb-8">Rescue Operations</h1>
        <div className="bg-white rounded-3xl shadow-lg p-8">
          <p className="text-lg mb-6">
            Join our network of dedicated rescuers making a difference in animals' lives. As a rescuer
            on Paw Pal, you'll have access to rescue requests, coordination tools, and a supportive
            community.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="bg-pink-100 rounded-2xl p-6">
              <h2 className="text-2xl font-bold text-purple-600 mb-4">Active Rescues</h2>
              <p>View and respond to current rescue requests in your area.</p>
            </div>
            <div className="bg-blue-100 rounded-2xl p-6">
              <h2 className="text-2xl font-bold text-purple-600 mb-4">Success Stories</h2>
              <p>Read about successful rescues and the impact of our community.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
