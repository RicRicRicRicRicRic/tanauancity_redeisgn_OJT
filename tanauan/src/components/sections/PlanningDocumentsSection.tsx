function PlanningDocumentsSection() {
  return (
    <section id="planning-documents" className="h-[768px] min-h-[768px] flex items-center justify-center bg-gray-50 overflow-hidden">
      <div className="w-full px-6 md:px-12 lg:px-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">City Planning Documents</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="text-3xl mb-3">📐</div>
            <h3 className="text-lg font-semibold mb-2">Zoning Maps</h3>
            <p className="text-sm text-gray-600 mb-3">Comprehensive land use and zoning regulations</p>
            <button className="text-blue-600 hover:text-blue-800 font-semibold text-sm">View Documents →</button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="text-3xl mb-3">🏗️</div>
            <h3 className="text-lg font-semibold mb-2">Development Plans</h3>
            <p className="text-sm text-gray-600 mb-3">Infrastructure and urban development projects</p>
            <button className="text-blue-600 hover:text-blue-800 font-semibold text-sm">View Documents →</button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="text-3xl mb-3">📜</div>
            <h3 className="text-lg font-semibold mb-2">City Ordinances</h3>
            <p className="text-sm text-gray-600 mb-3">Local laws and legislative documents</p>
            <button className="text-blue-600 hover:text-blue-800 font-semibold text-sm">View Documents →</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PlanningDocumentsSection