function ServiceOfOurPeopleSection() {
  return (
    <section id="service-of-our-people" className="h-[768px] min-h-[768px] flex items-center justify-center bg-gradient-to-r from-green-50 to-emerald-50 overflow-hidden">
      <div className="w-full px-6 md:px-12 lg:px-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">In the Service of Our People</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🤝</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Community Outreach</h3>
            <p className="text-gray-600">Bringing services directly to barangays and remote communities</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">💼</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Employment Programs</h3>
            <p className="text-gray-600">Job matching, skills training, and livelihood assistance</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🎓</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Education Support</h3>
            <p className="text-gray-600">Scholarships, educational assistance, and learning resources</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceOfOurPeopleSection