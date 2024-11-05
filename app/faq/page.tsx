export default function FAQ() {
  return (
    <div className="min-h-screen bg-blue-200 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-purple-600 mb-8">Frequently Asked Questions</h1>
        <div className="bg-white rounded-3xl shadow-lg p-8">
          <div className="space-y-6">
            <div className="bg-pink-100 rounded-2xl p-6">
              <h2 className="text-2xl font-bold text-purple-600 mb-4">About Rescuing</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-lg mb-2">How can I report an animal in need?</h3>
                  <p>Use our platform to create a detailed report with location and photos. Our network of rescuers will be notified immediately.</p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">What happens after I report an animal?</h3>
                  <p>Our verified rescuers will assess the situation and coordinate the rescue operation. You'll receive updates on the progress.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-100 rounded-2xl p-6">
              <h2 className="text-2xl font-bold text-purple-600 mb-4">About Adoption</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-lg mb-2">What is the adoption process?</h3>
                  <p>The process includes application submission, home check, meet-and-greet with the pet, and final paperwork completion.</p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Are the pets vaccinated and spayed/neutered?</h3>
                  <p>Yes, all our pets are fully vaccinated, spayed/neutered, and microchipped before adoption.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-green-100 rounded-2xl p-6">
              <h2 className="text-2xl font-bold text-purple-600 mb-4">About Volunteering</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-lg mb-2">How can I become a volunteer?</h3>
                  <p>Fill out our volunteer application form, complete the orientation, and choose your preferred volunteer activities.</p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">What volunteer opportunities are available?</h3>
                  <p>We offer various opportunities including animal transport, fostering, event support, and administrative tasks.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
