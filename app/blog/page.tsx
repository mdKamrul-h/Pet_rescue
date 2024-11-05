export default function Blog() {
  return (
    <div className="min-h-screen bg-blue-200 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-purple-600 mb-8">Blog</h1>
        <div className="space-y-6">
          <div className="bg-white rounded-3xl shadow-lg p-8">
            <article className="mb-8">
              <h2 className="text-2xl font-bold text-purple-600 mb-4">Tips for First-Time Pet Parents</h2>
              <div className="text-sm text-gray-500 mb-4">Published: June 1, 2024</div>
              <p className="text-lg mb-4">
                Bringing a new pet home is an exciting experience. Here are essential tips to help you
                prepare for your new family member and ensure a smooth transition.
              </p>
              <button className="text-purple-600 font-bold hover:underline">Read More →</button>
            </article>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8">
            <article className="mb-8">
              <h2 className="text-2xl font-bold text-purple-600 mb-4">Success Story: Luna's Journey Home</h2>
              <div className="text-sm text-gray-500 mb-4">Published: May 28, 2024</div>
              <p className="text-lg mb-4">
                From a scared stray to a loving family member, read about Luna's incredible journey
                and the dedicated rescuers who made it possible.
              </p>
              <button className="text-purple-600 font-bold hover:underline">Read More →</button>
            </article>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8">
            <article className="mb-8">
              <h2 className="text-2xl font-bold text-purple-600 mb-4">Understanding Pet Behavior</h2>
              <div className="text-sm text-gray-500 mb-4">Published: May 25, 2024</div>
              <p className="text-lg mb-4">
                Learn to better understand your pet's body language and behavior patterns to build
                a stronger bond with your furry friend.
              </p>
              <button className="text-purple-600 font-bold hover:underline">Read More →</button>
            </article>
          </div>
        </div>
      </div>
    </div>
  )
}
