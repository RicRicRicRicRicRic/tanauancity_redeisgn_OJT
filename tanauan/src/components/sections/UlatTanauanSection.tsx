import { useState } from 'react'

interface NewsItem {
  id: number
  title: string
  description: string
  date: string
  icon: string
  color: string
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: 'City Council Session - March 2026',
    description: 'Watch the latest proceedings and deliberations',
    date: 'Posted: March 14, 2026',
    icon: '📺',
    color: 'bg-red-600'
  },
  {
    id: 2,
    title: "Mayor's Weekly Address",
    description: 'Updates on city projects and initiatives',
    date: 'Posted: March 12, 2026',
    icon: '🎬',
    color: 'bg-blue-600'
  },
  {
    id: 3,
    title: 'Community Feature Story',
    description: 'Highlighting local success stories and achievements',
    date: 'Posted: March 10, 2026',
    icon: '📰',
    color: 'bg-green-600'
  },
  {
    id: 4,
    title: 'Infrastructure Development Update',
    description: 'New road projects and public facilities coming soon',
    date: 'Posted: March 8, 2026',
    icon: '🏗️',
    color: 'bg-orange-600'
  },
  {
    id: 5,
    title: 'Health and Wellness Program',
    description: 'Free medical services for senior citizens',
    date: 'Posted: March 5, 2026',
    icon: '🏥',
    color: 'bg-teal-600'
  },
  {
    id: 6,
    title: 'Youth Sports Festival',
    description: 'Annual athletic competition for young athletes',
    date: 'Posted: March 1, 2026',
    icon: '⚽',
    color: 'bg-purple-600'
  }
]

function UlatTanauanSection() {
  const [currentPage, setCurrentPage] = useState(0)
  const [isFlipping, setIsFlipping] = useState(false)
  const [flipDirection, setFlipDirection] = useState<'next' | 'previous' | null>(null)

  const itemsPerPage = 2
  const totalPages = Math.ceil(newsItems.length / itemsPerPage)
  const currentItems = newsItems.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  )

  const goToNextPage = () => {
    if (currentPage < totalPages - 1 && !isFlipping) {
      setIsFlipping(true)
      setFlipDirection('next')
      setTimeout(() => {
        setCurrentPage(currentPage + 1)
        setTimeout(() => {
          setIsFlipping(false)
          setFlipDirection(null)
        }, 600)
      }, 600)
    }
  }

  const goToPreviousPage = () => {
    if (currentPage > 0 && !isFlipping) {
      setIsFlipping(true)
      setFlipDirection('previous')
      setTimeout(() => {
        setCurrentPage(currentPage - 1)
        setTimeout(() => {
          setIsFlipping(false)
          setFlipDirection(null)
        }, 600)
      }, 600)
    }
  }

  return (
    <section id="ulat-tanauan" className="h-[768px] min-h-[768px] flex items-center justify-center bg-gray-50 overflow-hidden relative">
      <div className="w-full px-6 md:px-12 lg:px-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">New on Ulat Tanauan</h2>
        
        {/* 3D Book Container */}
        <div className="relative max-w-5xl mx-auto" style={{ perspective: '1500px' }}>
          
          {/* Navigation Buttons */}
          <button
            onClick={goToPreviousPage}
            disabled={currentPage === 0 || isFlipping}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-20 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Previous page"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages - 1 || isFlipping}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 z-20 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Next page"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Book Spread Container */}
          <div 
            className="relative flex justify-center items-center"
            style={{ 
              transformStyle: 'preserve-3d',
              perspective: '1500px'
            }}
          >
            {/* Left Page (Static) */}
            <div 
              className="relative bg-white rounded-l-lg shadow-2xl overflow-hidden"
              style={{
                width: '49%',
                minHeight: '420px',
                transformStyle: 'preserve-3d',
                boxShadow: 'inset -15px 0 20px -10px rgba(0,0,0,0.2), -3px 0 10px rgba(0,0,0,0.1)'
              }}
            >
              {currentItems[0] && (
                <div className="p-8 h-full flex flex-col">
                  <div className={`${currentItems[0].color} h-40 rounded-lg flex items-center justify-center mb-6`}>
                    <span className="text-white text-6xl">{currentItems[0].icon}</span>
                  </div>
                  <h3 className="font-bold text-xl mb-3 text-gray-800">{currentItems[0].title}</h3>
                  <p className="text-sm text-gray-600 mb-4 flex-grow">{currentItems[0].description}</p>
                  <span className="text-xs text-gray-500">{currentItems[0].date}</span>
                </div>
              )}
            </div>

            {/* Centered Thin Crease / Spine */}
            <div 
              className="relative bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900"
              style={{
                width: '2%',
                minHeight: '420px',
                boxShadow: '0 0 15px rgba(0,0,0,0.4), inset 0 0 8px rgba(0,0,0,0.6)'
              }}
            >
              {/* Spine texture lines */}
              <div className="absolute inset-0 flex flex-col justify-around items-center opacity-20">
                {[...Array(12)].map((_, i) => (
                  <div key={i} className="w-full h-px bg-gray-300"></div>
                ))}
              </div>
            </div>

            {/* Right Page (Static or Flipping) */}
            <div 
              className="relative bg-white rounded-r-lg shadow-2xl overflow-hidden"
              style={{
                width: '49%',
                minHeight: '420px',
                transformStyle: 'preserve-3d',
                transformOrigin: 'left center',
                transform: isFlipping && flipDirection === 'next' 
                  ? 'rotateY(-180deg)' 
                  : flipDirection === 'previous'
                  ? 'rotateY(180deg)'
                  : 'rotateY(0deg)',
                transition: 'transform 0.8s cubic-bezier(0.645, 0.045, 0.355, 1)',
                boxShadow: 'inset 15px 0 20px -10px rgba(0,0,0,0.2), 3px 0 10px rgba(0,0,0,0.1)'
              }}
            >
              {/* Front side of right page */}
              {currentItems[1] && !isFlipping && (
                <div className="p-8 h-full flex flex-col" style={{ backfaceVisibility: 'hidden' }}>
                  <div className={`${currentItems[1].color} h-40 rounded-lg flex items-center justify-center mb-6`}>
                    <span className="text-white text-6xl">{currentItems[1].icon}</span>
                  </div>
                  <h3 className="font-bold text-xl mb-3 text-gray-800">{currentItems[1].title}</h3>
                  <p className="text-sm text-gray-600 mb-4 flex-grow">{currentItems[1].description}</p>
                  <span className="text-xs text-gray-500">{currentItems[1].date}</span>
                </div>
              )}

              {/* Back side of right page (shows previous left page content when flipping) */}
              {isFlipping && flipDirection === 'next' && currentItems[0] && (
                <div 
                  className="p-8 h-full flex flex-col absolute inset-0"
                  style={{ 
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)'
                  }}
                >
                  <div className={`${currentItems[0].color} h-40 rounded-lg flex items-center justify-center mb-6`}>
                    <span className="text-white text-6xl">{currentItems[0].icon}</span>
                  </div>
                  <h3 className="font-bold text-xl mb-3 text-gray-800">{currentItems[0].title}</h3>
                  <p className="text-sm text-gray-600 mb-4 flex-grow">{currentItems[0].description}</p>
                  <span className="text-xs text-gray-500">{currentItems[0].date}</span>
                </div>
              )}

              {/* Back side for previous flip */}
              {isFlipping && flipDirection === 'previous' && newsItems[(currentPage + 1) * itemsPerPage] && (
                <div 
                  className="p-8 h-full flex flex-col absolute inset-0"
                  style={{ 
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)'
                  }}
                >
                  <div className={`${newsItems[(currentPage + 1) * itemsPerPage].color} h-40 rounded-lg flex items-center justify-center mb-6`}>
                    <span className="text-white text-6xl">{newsItems[(currentPage + 1) * itemsPerPage].icon}</span>
                  </div>
                  <h3 className="font-bold text-xl mb-3 text-gray-800">{newsItems[(currentPage + 1) * itemsPerPage].title}</h3>
                  <p className="text-sm text-gray-600 mb-4 flex-grow">{newsItems[(currentPage + 1) * itemsPerPage].description}</p>
                  <span className="text-xs text-gray-500">{newsItems[(currentPage + 1) * itemsPerPage].date}</span>
                </div>
              )}
            </div>

            {/* Flipping Left Page (for previous navigation) */}
            {isFlipping && flipDirection === 'previous' && (
              <div 
                className="absolute bg-white rounded-l-lg shadow-2xl overflow-hidden"
                style={{
                  width: '49%',
                  minHeight: '420px',
                  transformStyle: 'preserve-3d',
                  transformOrigin: 'right center',
                  transform: 'rotateY(0deg)',
                  transition: 'transform 0.8s cubic-bezier(0.645, 0.045, 0.355, 1)',
                  right: '2%',
                  boxShadow: 'inset -15px 0 20px -10px rgba(0,0,0,0.2), -3px 0 10px rgba(0,0,0,0.1)'
                }}
              >
                <div className="p-8 h-full flex flex-col">
                  <div className={`${currentItems[0]?.color || 'bg-gray-600'} h-40 rounded-lg flex items-center justify-center mb-6`}>
                    <span className="text-white text-6xl">{currentItems[0]?.icon || '📄'}</span>
                  </div>
                  <h3 className="font-bold text-xl mb-3 text-gray-800">{currentItems[0]?.title}</h3>
                  <p className="text-sm text-gray-600 mb-4 flex-grow">{currentItems[0]?.description}</p>
                  <span className="text-xs text-gray-500">{currentItems[0]?.date}</span>
                </div>
              </div>
            )}
          </div>

          {/* Page Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => !isFlipping && setCurrentPage(index)}
                disabled={isFlipping}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentPage 
                    ? 'bg-gray-800 w-8' 
                    : 'bg-gray-400 hover:bg-gray-600'
                } disabled:cursor-not-allowed`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default UlatTanauanSection