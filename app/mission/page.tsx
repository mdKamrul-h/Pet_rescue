export default function Mission() {
  return (
    <div className="min-h-screen bg-blue-200 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-purple-600 mb-8">Our Mission</h1>
        <div className="bg-white rounded-3xl shadow-lg p-8">
          <p className="text-lg mb-6">
            At Paw Pal, our mission is to create a world where every animal has a loving home. We strive
            to connect compassionate individuals and facilitate efficient rescue operations while promoting
            responsible pet adoption.
          </p>
          <div className="space-y-6">
            <div className="bg-pink-100 rounded-2xl p-6">
              <h2 className="text-2xl font-bold text-purple-600 mb-4">Vision</h2>
              <p>A world where no animal is left behind, and every pet has a caring family.</p>
            </div>
            <div className="bg-blue-100 rounded-2xl p-6">
              <h2 className="text-2xl font-bold text-purple-600 mb-4">Values</h2>
              <p>Compassion, dedication, and community-driven action for animal welfare.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
