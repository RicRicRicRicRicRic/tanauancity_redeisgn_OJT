function PeoplesCornerSection() {
  return (
    <section id="peoples-corner" className="h-[768px] min-h-[768px] flex items-center justify-center bg-blue-50 overflow-hidden">
      <div className="w-full px-6 md:px-12 lg:px-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Peoples Corner</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-3xl mb-3">💬</div>
            <h3 className="text-lg font-semibold mb-2">Citizen Feedback</h3>
            <p className="text-sm text-gray-600 mb-3">Share your suggestions and concerns</p>
            <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors">
              Submit Feedback
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-3xl mb-3">📊</div>
            <h3 className="text-lg font-semibold mb-2">Transparency Board</h3>
            <p className="text-sm text-gray-600 mb-3">Public financial reports and audits</p>
            <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition-colors">
              View Reports
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-3xl mb-3">🏛️</div>
            <h3 className="text-lg font-semibold mb-2">Public Forums</h3>
            <p className="text-sm text-gray-600 mb-3">Participate in community discussions</p>
            <button className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition-colors">
              Join Forum
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PeoplesCornerSection