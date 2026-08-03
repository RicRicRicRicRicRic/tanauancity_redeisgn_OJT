function LatestNewsSection() {
  return (
    <section id="latest-news" className="h-[768px] min-h-[768px] flex items-center justify-center bg-gray-50 overflow-hidden">
      <div className="w-full px-6 md:px-12 lg:px-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Latest News and Publications</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <div className="text-sm text-blue-600 font-semibold mb-2">Press Release</div>
            <h3 className="text-lg font-semibold mb-2">New City Development Project Announced</h3>
            <p className="text-gray-600 text-sm mb-3">Major infrastructure initiative to improve public transportation...</p>
            <span className="text-xs text-gray-500">March 15, 2026</span>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <div className="text-sm text-green-600 font-semibold mb-2">Announcement</div>
            <h3 className="text-lg font-semibold mb-2">Community Health Program Launch</h3>
            <p className="text-gray-600 text-sm mb-3">Free medical services available at all barangay health centers...</p>
            <span className="text-xs text-gray-500">March 12, 2026</span>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <div className="text-sm text-purple-600 font-semibold mb-2">Publication</div>
            <h3 className="text-lg font-semibold mb-2">Annual Report 2025 Now Available</h3>
            <p className="text-gray-600 text-sm mb-3">Comprehensive overview of city programs and achievements...</p>
            <span className="text-xs text-gray-500">March 10, 2026</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LatestNewsSection