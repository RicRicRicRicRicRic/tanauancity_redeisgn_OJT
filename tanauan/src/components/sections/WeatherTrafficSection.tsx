function WeatherTrafficSection() {
  return (
    <section id="weather-traffic" className="h-[768px] min-h-[768px] flex items-center justify-center bg-gradient-to-br from-blue-100 to-cyan-100 overflow-hidden">
      <div className="w-full px-6 md:px-12 lg:px-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Weather and Traffic Updates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Current Weather</h3>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-5xl font-bold text-blue-600">28°C</div>
                <div className="text-gray-600 mt-2">Partly Cloudy</div>
                <div className="text-sm text-gray-500 mt-1">Humidity: 75%</div>
              </div>
              <div className="text-6xl">⛅</div>
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Traffic Status</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span>Main Highway</span>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Smooth</span>
              </div>
              <div className="flex justify-between items-center">
                <span>City Center</span>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">Moderate</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Market Area</span>
                <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm">Heavy</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WeatherTrafficSection