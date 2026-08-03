function DigitalCityServicesSection() {
  return (
    <section id="digital-city-services" className="h-[768px] min-h-[768px] flex items-center justify-center bg-white overflow-hidden">
      <div className="w-full px-6 md:px-12 lg:px-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Digital City Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 hover:shadow-lg transition-shadow">
            <div className="text-3xl mb-3">💻</div>
            <h3 className="text-lg font-semibold mb-2">Online Permits</h3>
            <p className="text-sm text-gray-600">Apply for permits and licenses online</p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg border border-green-200 hover:shadow-lg transition-shadow">
            <div className="text-3xl mb-3">📊</div>
            <h3 className="text-lg font-semibold mb-2">Tax Payments</h3>
            <p className="text-sm text-gray-600">Pay taxes and fees digitally</p>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg border border-purple-200 hover:shadow-lg transition-shadow">
            <div className="text-3xl mb-3">📋</div>
            <h3 className="text-lg font-semibold mb-2">Document Requests</h3>
            <p className="text-sm text-gray-600">Request certificates and clearances</p>
          </div>
          <div className="bg-orange-50 p-6 rounded-lg border border-orange-200 hover:shadow-lg transition-shadow">
            <div className="text-3xl mb-3">📅</div>
            <h3 className="text-lg font-semibold mb-2">Appointments</h3>
            <p className="text-sm text-gray-600">Schedule government office visits</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DigitalCityServicesSection