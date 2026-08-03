function SonnyAllSection() {
  return (
    <section id="sonny-all" className="h-[768px] min-h-[768px] flex items-center justify-center bg-blue-50 overflow-hidden">
      <div className="w-full px-6 md:px-12 lg:px-16 text-center">
        <h2 className="text-4xl font-bold mb-6 text-gray-800">Sonny All</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          A dedicated platform connecting citizens with city services and information.
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-4xl mb-3">📱</div>
            <h3 className="font-semibold mb-2">Mobile Access</h3>
            <p className="text-sm text-gray-600">Access services anywhere</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-4xl mb-3">🔒</div>
            <h3 className="font-semibold mb-2">Secure Platform</h3>
            <p className="text-sm text-gray-600">Your data is protected</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-4xl mb-3">⚡</div>
            <h3 className="font-semibold mb-2">Fast Service</h3>
            <p className="text-sm text-gray-600">Quick and efficient processing</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SonnyAllSection