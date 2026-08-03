function UlatTanauanSection() {
  return (
    <section id="ulat-tanauan" className="h-[768px] min-h-[768px] flex items-center justify-center bg-gray-50 overflow-hidden">
      <div className="w-full px-6 md:px-12 lg:px-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">New on Ulat Tanauan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
            <div className="bg-red-600 h-32 flex items-center justify-center">
              <span className="text-white text-4xl">📺</span>
            </div>
            <div className="p-4">
              <h3 className="font-semibold mb-2">City Council Session - March 2026</h3>
              <p className="text-sm text-gray-600">Watch the latest proceedings and deliberations</p>
              <span className="text-xs text-gray-500 mt-2 block">Posted: March 14, 2026</span>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
            <div className="bg-blue-600 h-32 flex items-center justify-center">
              <span className="text-white text-4xl">🎬</span>
            </div>
            <div className="p-4">
              <h3 className="font-semibold mb-2">Mayor's Weekly Address</h3>
              <p className="text-sm text-gray-600">Updates on city projects and initiatives</p>
              <span className="text-xs text-gray-500 mt-2 block">Posted: March 12, 2026</span>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
            <div className="bg-green-600 h-32 flex items-center justify-center">
              <span className="text-white text-4xl">📰</span>
            </div>
            <div className="p-4">
              <h3 className="font-semibold mb-2">Community Feature Story</h3>
              <p className="text-sm text-gray-600">Highlighting local success stories and achievements</p>
              <span className="text-xs text-gray-500 mt-2 block">Posted: March 10, 2026</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UlatTanauanSection