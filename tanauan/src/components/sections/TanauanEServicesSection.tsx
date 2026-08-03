function TanauanEServicesSection() {
  return (
    <section id="tanauan-eservices" className="h-[768px] min-h-[768px] flex items-center justify-center bg-gradient-to-r from-indigo-50 to-purple-50 overflow-hidden">
      <div className="w-full px-6 md:px-12 lg:px-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Tanauan City eServices</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">📝</span>
            </div>
            <h3 className="font-semibold mb-2">Online Application</h3>
            <p className="text-sm text-gray-600">Submit requests digitally</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">💳</span>
            </div>
            <h3 className="font-semibold mb-2">Payment Portal</h3>
            <p className="text-sm text-gray-600">Pay fees online securely</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">📊</span>
            </div>
            <h3 className="font-semibold mb-2">Status Tracking</h3>
            <p className="text-sm text-gray-600">Monitor application progress</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">📱</span>
            </div>
            <h3 className="font-semibold mb-2">Mobile Access</h3>
            <p className="text-sm text-gray-600">Services on the go</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TanauanEServicesSection