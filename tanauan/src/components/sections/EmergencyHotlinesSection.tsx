function EmergencyHotlinesSection() {
  return (
    <section id="emergency-hotlines" className="h-[768px] min-h-[768px] flex items-center justify-center bg-red-50 overflow-hidden">
      <div className="w-full px-6 md:px-12 lg:px-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Emergency Hotlines</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-red-500">
            <div className="text-4xl mb-3">🚔</div>
            <h3 className="font-semibold text-lg mb-2">Police</h3>
            <p className="text-2xl font-bold text-red-600">911</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-orange-500">
            <div className="text-4xl mb-3">🚒</div>
            <h3 className="font-semibold text-lg mb-2">Fire Department</h3>
            <p className="text-2xl font-bold text-orange-600">911</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-green-500">
            <div className="text-4xl mb-3">🏥</div>
            <h3 className="font-semibold text-lg mb-2">Medical Emergency</h3>
            <p className="text-2xl font-bold text-green-600">911</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-purple-500">
            <div className="text-4xl mb-3">🆘</div>
            <h3 className="font-semibold text-lg mb-2">Disaster Response</h3>
            <p className="text-2xl font-bold text-purple-600">911</p>
          </div>
        </div>
        <div className="mt-8 bg-white p-6 rounded-lg shadow-md max-w-7xl mx-auto">
          <h3 className="text-xl font-semibold mb-4 text-center">Additional Emergency Numbers</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-sm text-gray-600">Red Cross</p>
              <p className="font-semibold text-lg">(043) 123-4567</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">City Disaster Office</p>
              <p className="font-semibold text-lg">(043) 765-4321</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Barangay Hotline</p>
              <p className="font-semibold text-lg">(043) 555-0000</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EmergencyHotlinesSection