function CityServicesSection() {
  return (
    <section id="city-services" className="h-[768px] min-h-[768px] flex items-center justify-center bg-gray-50 overflow-hidden">
      <div className="w-full px-6 md:px-12 lg:px-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">City Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Permits & Licenses</h3>
            <p className="text-gray-600">Business permits, barangay clearances, and other regulatory documents.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Public Safety</h3>
            <p className="text-gray-600">Police, fire, and emergency response services for citizen protection.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Health Services</h3>
            <p className="text-gray-600">Medical assistance, vaccination programs, and health monitoring.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CityServicesSection