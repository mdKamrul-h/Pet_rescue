export default function Contact() {
  return (
    <div className="min-h-screen bg-blue-200 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-purple-600 mb-8">Contact Us</h1>
        <div className="bg-white rounded-3xl shadow-lg p-8">
          <p className="text-lg mb-6">
            Have questions or need assistance? We're here to help! Choose the most convenient
            way to reach us, and we'll get back to you as soon as possible.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-pink-100 rounded-2xl p-6">
              <h2 className="text-2xl font-bold text-purple-600 mb-4">General Inquiries</h2>
              <div className="space-y-2">
                <p className="font-bold">Email:</p>
                <p>info@pawpal.com</p>
                <p className="font-bold mt-4">Phone:</p>
                <p>(555) 123-4567</p>
                <p className="font-bold mt-4">Hours:</p>
                <p>Monday - Friday: 9 AM - 6 PM</p>
                <p>Saturday: 10 AM - 4 PM</p>
              </div>
            </div>
            
            <div className="bg-blue-100 rounded-2xl p-6">
              <h2 className="text-2xl font-bold text-purple-600 mb-4">Emergency Rescue</h2>
              <div className="space-y-2">
                <p className="font-bold">24/7 Rescue Hotline:</p>
                <p>(555) 911-PETS</p>
                <p className="mt-4">For immediate assistance with animals in distress, please use our emergency hotline or the rescue reporting feature in our app.</p>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-green-100 rounded-2xl p-6">
            <h2 className="text-2xl font-bold text-purple-600 mb-4">Visit Us</h2>
            <div className="space-y-2">
              <p className="font-bold">Main Office:</p>
              <p>123 Rescue Avenue</p>
              <p>Pet City, PC 12345</p>
              <p className="mt-4">Please note that visits to our facility are by appointment only to ensure we can provide you with the best possible assistance.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
