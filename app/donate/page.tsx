export default function Donate() {
  return (
    <div className="min-h-screen bg-blue-200 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-purple-600 mb-8">Support Our Cause</h1>
        <div className="bg-white rounded-3xl shadow-lg p-8">
          <p className="text-lg mb-6">
            Your generous donations help us continue our mission of rescuing and rehoming animals in need.
            Every contribution makes a difference in providing care, medical treatment, and resources for
            our rescued animals.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-pink-100 rounded-2xl p-6">
              <h2 className="text-2xl font-bold text-purple-600 mb-4">Ways to Donate</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>One-time Donation</li>
                <li>Monthly Sponsorship</li>
                <li>Medical Fund</li>
                <li>Equipment and Supplies</li>
              </ul>
            </div>
            <div className="bg-blue-100 rounded-2xl p-6">
              <h2 className="text-2xl font-bold text-purple-600 mb-4">Impact of Your Donation</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Medical Treatment</li>
                <li>Food and Supplies</li>
                <li>Transportation Costs</li>
                <li>Shelter Support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
