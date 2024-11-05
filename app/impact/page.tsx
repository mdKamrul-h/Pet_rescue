export default function Impact() {
  return (
    <div className="min-h-screen bg-blue-200 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-purple-600 mb-8">Our Impact</h1>
        <div className="bg-white rounded-3xl shadow-lg p-8">
          <p className="text-lg mb-6">
            Discover the real-world impact of Paw Pal's mission and how our platform has helped
            countless animals find their forever homes while building a strong community of animal
            welfare advocates.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-pink-100 rounded-2xl p-6">
              <h2 className="text-2xl font-bold text-purple-600 mb-4">Success Stories</h2>
              <p>Read heartwarming stories of successful rescues and adoptions.</p>
            </div>
            <div className="bg-blue-100 rounded-2xl p-6">
              <h2 className="text-2xl font-bold text-purple-600 mb-4">Statistics</h2>
              <p>View our rescue and adoption statistics and community growth.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
