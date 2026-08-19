import { useState } from 'react'
import FloatBlobs from '../../common/float-blobs'

const gazetteArticles = [
  {
    id: 'online',
    category: 'DIGITAL SERVICES',
    title: 'Online Services & E-Governance',
    headline: 'Streamlining Civic Access From Home',
    excerpt: 'Access digital government tools seamlessly. Pay municipal fees, request official records, and track paperwork without stepping out of your door.',
    image: '/src/assets/sections/Home/city-services/Online Services.png',
    actionText: 'Access Digital Portal'
  },
  {
    id: 'business',
    category: 'COMMERCE & TRADE',
    title: 'The Business Portal',
    headline: 'Empowering Local Entrepreneurs & Scale',
    excerpt: 'Essential resources for starting, growing, and licensing local enterprises. Discover incentives, local tax guides, and zoning permits.',
    image: '/src/assets/sections/Home/city-services/Business Portal.png',
    actionText: 'Explore Permits'
  },
  {
    id: 'support',
    category: 'COMMUNITY ADVOCACY',
    title: 'Citizen Support Center',
    headline: 'Dedicated Assistance for Every Resident',
    excerpt: 'Get swift resolutions to public inquiries. Connect with community hotline staff, submit neighborhood maintenance reports, and access aid programs.',
    image: '/src/assets/sections/Home/city-services/Citizen Support.png',
    actionText: 'Get Support'
  },
  {
    id: 'departments',
    category: 'PUBLIC ADMINISTRATION',
    title: 'City Departments Directory',
    headline: 'Transparency and Municipal Leadership',
    excerpt: 'Explore active local departments, discover office hours, review public session minutes, and contact direct municipal representatives.',
    image: '/src/assets/sections/Home/city-services/City Departments.png',
    actionText: 'View Directory'
  }
]

function CityServicesSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [animating, setAnimating] = useState(false)
  const [slideDirection, setSlideDirection] = useState('translate-x-0')

  const currentArticle = gazetteArticles[currentIndex]

  // Handle Page-Turn / Flip Animation
  const handlePageChange = (newIndex: number) => {
    if (newIndex === currentIndex || animating) return
    
    // Determine direction of slide flip
    const direction = newIndex > currentIndex ? 'translate-x-8 opacity-0' : '-translate-x-8 opacity-0'
    setSlideDirection(direction)
    setAnimating(true)

    setTimeout(() => {
      setCurrentIndex(newIndex)
      // Reset position from opposite side for smooth entry
      setSlideDirection(newIndex > newIndex ? '-translate-x-8 opacity-0' : 'translate-x-8 opacity-0')
      
      requestAnimationFrame(() => {
        setSlideDirection('translate-x-0 opacity-100')
        setAnimating(false)
      })
    }, 300)
  }

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % gazetteArticles.length
    handlePageChange(nextIdx)
  }

  const handlePrev = () => {
    const prevIdx = (currentIndex - 1 + gazetteArticles.length) % gazetteArticles.length
    handlePageChange(prevIdx)
  }

  return (
    <section id="city-services" className="w-full relative bg-gradient-to-br from-[#fcfbf9] via-[#f5f2eb] to-[#f0eade] py-12 md:py-16 overflow-hidden">
      
      {/* Background Floating Blobs */}
      <FloatBlobs />
      
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center justify-center px-6 md:px-12 relative z-10">
        
        {/* Newspaper Editorial Header Banner */}
        <div className="w-full border-t-2 border-b-2 border-slate-900 py-2.5 mb-8 flex flex-col md:flex-row items-center justify-between text-xs font-semibold tracking-widest text-slate-700 uppercase">
          <span>The Official Municipal Chronicle</span>
          <span>Special Edition • Community Resource Guide</span>
          <span>Vol. XXVI — Issue No. 0{currentIndex + 1}</span>
        </div>

        {/* Section Main Header */}
        <div className="text-center max-w-3xl mb-10">
          <h2 className="text-4xl md:text-5xl font-serif font-black text-slate-900 tracking-tight mb-3">
            Tanauan City <span className="italic font-normal text-red-600">Services</span>
          </h2>
          <div className="w-24 h-0.5 bg-slate-900 mx-auto mb-3"></div>
          <p className="text-slate-600 text-sm md:text-base font-serif italic max-w-2xl mx-auto leading-relaxed">
            "Informing citizens, connecting local commerce, and streamlining public administration with high editorial standard."
          </p>
        </div>

        {/* Premium Single-Page Broadsheet Newspaper Spread Container */}
        <div className="w-full bg-white rounded-3xl p-6 md:p-10 shadow-2xl shadow-slate-900/10 border border-slate-200/90 relative">
          
          {/* Top Broadsheet Dateline Only */}
          <div className="flex items-center justify-between pb-6 mb-8 border-b border-slate-200 text-xs uppercase tracking-wider font-mono">
            <span className="text-slate-500 font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
              BROADSHEET FOLIO 0{currentIndex + 1} OF 04
            </span>
            <span className="text-slate-400 font-serif italic text-xs">Tanauan Municipal Record</span>
          </div>

          {/* Animated Article Content Area */}
          <div className={`transition-all duration-300 transform ${slideDirection}`}>
            
            {/* Category & Headline */}
            <div className="mb-6">
              <div className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-100 text-slate-800 border border-slate-200 mb-4">
                {currentArticle.category}
              </div>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-2 tracking-tight leading-snug">
                {currentArticle.title}
              </h3>
              <p className="text-xs md:text-sm font-semibold text-slate-500 uppercase tracking-wide">
                {currentArticle.headline}
              </p>
            </div>

            {/* Newspaper Split Layout: Message on Left (7 cols) + Enlarged Image on Right (5 cols) */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Editorial Content / Message with Red Drop-Cap style text (7 Cols) */}
              <div className="md:col-span-7 flex flex-col justify-center space-y-4">
                <p className="text-slate-700 text-base md:text-lg font-normal leading-relaxed font-serif first-letter:text-6xl first-letter:font-black first-letter:float-left first-letter:mr-3 first-letter:text-red-600">
                  {currentArticle.excerpt}
                </p>
                <p className="text-xs text-slate-400 font-serif italic">
                  Issued under the authority of Tanauan municipal governance regulations. Verify all records through official channels.
                </p>

                <div className="pt-2">
                  <button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 text-white font-semibold text-sm shadow-md hover:bg-red-600 transition-colors duration-300">
                    <span>{currentArticle.actionText}</span>
                    <span>&rarr;</span>
                  </button>
                </div>
              </div>

              {/* Right Column: Enlarged Prominent Editorial Photograph (5 Cols) */}
              <div className="md:col-span-5">
                <div className="relative h-[280px] md:h-[340px] rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-100 group">
                  <img 
                    src={currentArticle.image} 
                    alt={currentArticle.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-3.5 py-1.5 rounded-md text-xs font-mono font-bold text-slate-800 uppercase tracking-wider shadow-lg">
                    Fig. 0{currentIndex + 1} — Primary Visual Record
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Bottom Bar: Pagination Dots + Navigation Buttons (←Prev Page | Next Page) */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-10 pt-6 border-t border-slate-200">
            
            {/* Pagination Dots */}
            <div className="flex items-center gap-2">
              {gazetteArticles.map((article, idx) => (
                <button
                  key={article.id}
                  onClick={() => handlePageChange(idx)}
                  className={`transition-all duration-300 rounded-full h-2.5 ${
                    currentIndex === idx 
                      ? 'w-8 bg-red-600' 
                      : 'w-2.5 bg-slate-200 hover:bg-slate-300'
                  }`}
                  aria-label={`Go to page ${idx + 1}`}
                ></button>
              ))}
            </div>

            {/* Next Page / Previous Page Interactive Controls */}
            <div className="flex items-center gap-3">
              <button 
                onClick={handlePrev}
                className="px-4 py-2 rounded-xl border border-slate-300 text-slate-700 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all text-xs font-sans font-semibold flex items-center gap-1.5 shadow-sm"
              >
                <span>&larr;</span> Prev Page
              </button>
              <span className="text-slate-300">|</span>
              <button 
                onClick={handleNext}
                className="px-4 py-2 rounded-xl border border-slate-300 text-slate-700 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all text-xs font-sans font-semibold flex items-center gap-1.5 shadow-sm"
              >
                Next Page <span>&rarr;</span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default CityServicesSection