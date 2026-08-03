function CulturalHeritageSection() {
  return (
    <section id="cultural-heritage" className="h-[768px] min-h-[768px] flex items-center justify-center bg-gradient-to-br from-amber-50 to-orange-50 overflow-hidden">
      <div className="w-full px-6 md:px-12 lg:px-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Cultural Heritage Sites</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
            <div className="bg-amber-600 h-40 flex items-center justify-center">
              <span className="text-white text-5xl">🏛️</span>
            </div>
            <div className="p-5">
              <h3 className="font-semibold text-lg mb-2">Historic Town Plaza</h3>
              <p className="text-sm text-gray-600">Century-old colonial architecture and historical markers</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
            <div className="bg-orange-600 h-40 flex items-center justify-center">
              <span className="text-white text-5xl">⛪</span>
            </div>
            <div className="p-5">
              <h3 className="font-semibold text-lg mb-2">San Juan de Dios Church</h3>
              <p className="text-sm text-gray-600">Historic religious site dating back to Spanish colonial era</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
            <div className="bg-yellow-600 h-40 flex items-center justify-center">
              <span className="text-white text-5xl">🏺</span>
            </div>
            <div className="p-5">
              <h3 className="font-semibold text-lg mb-2">Local Museum</h3>
              <p className="text-sm text-gray-600">Artifacts and exhibits showcasing Tanauan's rich history</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CulturalHeritageSection