function TanauanCityTVSection() {
  return (
    <section id="tanauan-city-tv" className="h-[768px] min-h-[768px] flex items-center justify-center bg-gray-900 overflow-hidden">
      <div className="w-full px-6 md:px-12 lg:px-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Tanauan City TV</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          <div className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="bg-red-600 h-40 flex items-center justify-center">
              <span className="text-white text-5xl">📹</span>
            </div>
            <div className="p-4">
              <h3 className="font-semibold mb-2 text-white">Live Broadcast</h3>
              <p className="text-sm text-gray-400">Watch city events live</p>
            </div>
          </div>
          <div className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="bg-blue-600 h-40 flex items-center justify-center">
              <span className="text-white text-5xl">🎥</span>
            </div>
            <div className="p-4">
              <h3 className="font-semibold mb-2 text-white">Video Archives</h3>
              <p className="text-sm text-gray-400">Browse past recordings</p>
            </div>
          </div>
          <div className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="bg-green-600 h-40 flex items-center justify-center">
              <span className="text-white text-5xl">📡</span>
            </div>
            <div className="p-4">
              <h3 className="font-semibold mb-2 text-white">News Segments</h3>
              <p className="text-sm text-gray-400">Latest news features</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TanauanCityTVSection