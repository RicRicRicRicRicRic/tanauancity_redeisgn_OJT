function HeroSection() {
  return (
    <section id="hero" className="h-[768px] min-h-[768px] flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-800 text-white overflow-hidden">
      <div className="w-full px-6 md:px-12 lg:px-16 text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to Tanauan City</h1>
        <p className="text-xl mb-8">Your Gateway to Digital Governance</p>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
          Explore Services
        </button>
      </div>
    </section>
  )
}

export default HeroSection