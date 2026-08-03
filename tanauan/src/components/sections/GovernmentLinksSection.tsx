function GovernmentLinksSection() {
  return (
    <section id="government-links" className="h-[768px] min-h-[768px] flex items-center justify-center bg-white overflow-hidden">
      <div className="w-full px-6 md:px-12 lg:px-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Other Government Website Links</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
          <a href="#" className="bg-blue-50 p-6 rounded-lg text-center hover:bg-blue-100 transition-colors">
            <div className="text-3xl mb-3">🏛️</div>
            <h3 className="font-semibold text-sm">National Government</h3>
          </a>
          <a href="#" className="bg-green-50 p-6 rounded-lg text-center hover:bg-green-100 transition-colors">
            <div className="text-3xl mb-3">🏢</div>
            <h3 className="font-semibold text-sm">Provincial Government</h3>
          </a>
          <a href="#" className="bg-purple-50 p-6 rounded-lg text-center hover:bg-purple-100 transition-colors">
            <div className="text-3xl mb-3">🏘️</div>
            <h3 className="font-semibold text-sm">Regional Offices</h3>
          </a>
          <a href="#" className="bg-orange-50 p-6 rounded-lg text-center hover:bg-orange-100 transition-colors">
            <div className="text-3xl mb-3">🌐</div>
            <h3 className="font-semibold text-sm">Partner Agencies</h3>
          </a>
          <a href="#" className="bg-red-50 p-6 rounded-lg text-center hover:bg-red-100 transition-colors">
            <div className="text-3xl mb-3">⚖️</div>
            <h3 className="font-semibold text-sm"> Judiciary</h3>
          </a>
          <a href="#" className="bg-yellow-50 p-6 rounded-lg text-center hover:bg-yellow-100 transition-colors">
            <div className="text-3xl mb-3">📚</div>
            <h3 className="font-semibold text-sm">Education</h3>
          </a>
          <a href="#" className="bg-indigo-50 p-6 rounded-lg text-center hover:bg-indigo-100 transition-colors">
            <div className="text-3xl mb-3">🏥</div>
            <h3 className="font-semibold text-sm">Health Department</h3>
          </a>
          <a href="#" className="bg-pink-50 p-6 rounded-lg text-center hover:bg-pink-100 transition-colors">
            <div className="text-3xl mb-3">🚗</div>
            <h3 className="font-semibold text-sm">Transportation</h3>
          </a>
        </div>
      </div>
    </section>
  )
}

export default GovernmentLinksSection