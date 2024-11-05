export default function Team() {
  return (
    <div className="min-h-screen bg-blue-200 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-purple-600 mb-8">Our Team</h1>
        <div className="bg-white rounded-3xl shadow-lg p-8">
          <p className="text-lg mb-6">
            Meet the passionate individuals behind Paw Pal who work tirelessly to make our platform
            a success and help animals in need find their forever homes.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-pink-100 rounded-2xl p-6">
              <h2 className="text-2xl font-bold text-purple-600 mb-4">Leadership</h2>
              <p>Our dedicated leadership team guiding Paw Pal's mission.</p>
            </div>
            <div className="bg-blue-100 rounded-2xl p-6">
              <h2 className="text-2xl font-bold text-purple-600 mb-4">Volunteers</h2>
              <p>The amazing volunteers who make our work possible.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
