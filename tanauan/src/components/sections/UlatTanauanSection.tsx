import { useState, useEffect } from 'react'
import FloatBlobs from '../common/float-blobs'

interface PageItem {
  id: number
  image: string
}

const pageItems: PageItem[] = [
  { id: 1, image: '/src/assets/sections/UlatTanauanSection/1.webp' },
  { id: 2, image: '/src/assets/sections/UlatTanauanSection/2.webp' },
  { id: 3, image: '/src/assets/sections/UlatTanauanSection/3.webp' },
  { id: 4, image: '/src/assets/sections/UlatTanauanSection/4.webp' },
  { id: 5, image: '/src/assets/sections/UlatTanauanSection/5.webp' },
  { id: 6, image: '/src/assets/sections/UlatTanauanSection/6.webp' },
  { id: 7, image: '/src/assets/sections/UlatTanauanSection/7.webp' },
  { id: 8, image: '/src/assets/sections/UlatTanauanSection/8.webp' },
  { id: 9, image: '/src/assets/sections/UlatTanauanSection/9.webp' },
  { id: 10, image: '/src/assets/sections/UlatTanauanSection/10.webp' },
  { id: 11, image: '/src/assets/sections/UlatTanauanSection/11.webp' }
]

function UlatTanauanSection() {
  const [currentPage, setCurrentPage] = useState(0)
  const [targetPage, setTargetPage] = useState(0)
  const [isFlipping, setIsFlipping] = useState(false)
  const [flipDirection, setFlipDirection] = useState<'next' | 'previous' | null>(null)
  
  // Drag interaction state
  const [isDragging, setIsDragging] = useState(false)
  const [dragStartX, setDragStartX] = useState(0)
  const [dragRotation, setDragRotation] = useState(0)
  const [animationStartRotation, setAnimationStartRotation] = useState(0)
  const [shouldAnimate, setShouldAnimate] = useState(false)
  const [isResetting, setIsResetting] = useState(false)

  // Trigger animation after flip element renders at start position
  useEffect(() => {
    if (isFlipping && !shouldAnimate) {
      const timer = setTimeout(() => {
        setShouldAnimate(true)
      }, 50)
      return () => clearTimeout(timer)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFlipping])

  // Handle reset animation when drag is released without flipping
  useEffect(() => {
    if (isResetting && !isDragging) {
      const timer = setTimeout(() => {
        setIsResetting(false)
        setDragRotation(0)
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [isResetting, isDragging])

  const itemsPerPage = 2
  const totalPages = Math.ceil(pageItems.length / itemsPerPage)

  const getPageItems = (pageIndex: number) => {
    return pageItems.slice(
      pageIndex * itemsPerPage,
      pageIndex * itemsPerPage + itemsPerPage
    )
  }

  const goToNextPage = (startRotation = 0) => {
    if (currentPage < totalPages - 1 && !isFlipping) {
      const nextPg = currentPage + 1
      setTargetPage(nextPg)
      setAnimationStartRotation(startRotation)
      setIsFlipping(true)
      setFlipDirection('next')
      setShouldAnimate(false)

      setTimeout(() => {
        setCurrentPage(nextPg)
        setIsFlipping(false)
        setFlipDirection(null)
        setShouldAnimate(false)
        setDragRotation(0)
      }, 600)
    }
  }

  const goToPreviousPage = (startRotation = 0) => {
    if (currentPage > 0 && !isFlipping) {
      const prevPg = currentPage - 1
      setTargetPage(prevPg)
      setAnimationStartRotation(startRotation)
      setIsFlipping(true)
      setFlipDirection('previous')
      setShouldAnimate(false)

      setTimeout(() => {
        setCurrentPage(prevPg)
        setIsFlipping(false)
        setFlipDirection(null)
        setShouldAnimate(false)
        setDragRotation(0)
      }, 600)
    }
  }

  // Drag handlers for grab-and-flip interaction
  const handleDragStart = (clientX: number) => {
    if (isFlipping) return
    setIsDragging(true)
    setDragStartX(clientX)
    setDragRotation(0)
  }

  const handleDragMove = (clientX: number) => {
    if (!isDragging || isFlipping) return
    
    const deltaX = clientX - dragStartX
    
    // Calculate rotation based on drag distance (max 180 degrees)
    const maxDragDistance = 300
    const rotation = Math.max(-180, Math.min(180, (deltaX / maxDragDistance) * 180))
    setDragRotation(rotation)
  }

  const handleDragEnd = () => {
    if (!isDragging || isFlipping) return
    
    setIsDragging(false)
    
    // Store the current rotation as the animation start point
    const startRotation = dragRotation
    
    // If dragged more than 45 degrees, trigger page flip
    if (Math.abs(dragRotation) > 45) {
      if (dragRotation < 0 && currentPage < totalPages - 1) {
        // Dragged left - flip to next page
        goToNextPage(startRotation)
      } else if (dragRotation > 0 && currentPage > 0) {
        // Dragged right - flip to previous page
        goToPreviousPage(startRotation)
      } else {
        // Reset rotation if can't flip
        setIsResetting(true)
      }
    } else {
      // Not enough drag - trigger reset animation
      setIsResetting(true)
    }
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault()
    handleDragStart(e.clientX)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    handleDragMove(e.clientX)
  }

  const handleMouseUp = () => {
    handleDragEnd()
  }

  const handleMouseLeave = () => {
    if (isDragging) {
      handleDragEnd()
    }
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    handleDragStart(e.touches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    handleDragMove(e.touches[0].clientX)
  }

  const handleTouchEnd = () => {
    handleDragEnd()
  }

  const currentItems = getPageItems(currentPage)
  const targetItems = getPageItems(targetPage)

  // Which page index is currently being shown on the static RIGHT side
  // (this is what must drive transparency so the missing 12th page is invisible at all times)
  const staticRightPageIndex =
    isFlipping && flipDirection === 'next'
      ? targetPage
      : (isDragging || isResetting) && dragRotation < 0 && currentPage < totalPages - 1
      ? currentPage + 1
      : currentPage

  const staticRightItems = getPageItems(staticRightPageIndex)
  const isRightEmpty = !staticRightItems[1]   // true whenever the 12th (non-existent) page would be shown

  const renderPage = (item?: PageItem) => {
    // Non-existent page → fully transparent / invisible
    if (!item) {
      return <div className="w-full h-full bg-transparent" />
    }
    return (
      <div className="w-full h-full bg-white flex items-center justify-center">
        <img 
          src={item.image} 
          alt={`Page ${item.id}`}
          className="w-full h-full object-contain"
        />
      </div>
    )
  }

  return (
    <section id="ulat-tanauan" className="h-[768px] min-h-[768px] flex items-center justify-center bg-[#1a0203] overflow-hidden relative">
      {/* Floating Blobs Background */}
      <FloatBlobs />
      
      <div className="w-full px-6 md:px-12 lg:px-16 relative z-10">
        <h2 className="text-4xl font-bold text-center !mb-6 text-white">
          New on <span className="bg-gradient-to-r from-[#FFE485] to-[#e38d92] bg-clip-text text-transparent">Ulat Tanauan</span>
        </h2>
        
        {/* 3D Book Container */}
        <div className="relative max-w-5xl mx-auto" style={{ perspective: '1500px' }}>
          
          {/* Book Spread Container – transparent as soon as the right page is the missing 12th */}
          <div 
            className={`relative flex justify-center items-center rounded-lg overflow-hidden mx-auto cursor-grab active:cursor-grabbing mb-4 ${
              isRightEmpty ? 'bg-transparent shadow-none' : 'bg-white shadow-2xl'
            }`}
            style={{ 
              transformStyle: 'preserve-3d',
              width: '748px',
              height: '505px'
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            role="button"
            tabIndex={0}
            aria-label="Grab and drag to flip pages"
          >
            {/* Left Static Base Page */}
            <div 
              className="relative bg-white rounded-l-lg overflow-hidden"
              style={{
                width: '374px',
                height: '505px',
                boxShadow: isRightEmpty ? 'none' : 'inset -12px 0 15px -10px rgba(0,0,0,0.15)'
              }}
            >
              {renderPage(
                isFlipping && flipDirection === 'previous'
                  ? targetItems[0]
                  : (isDragging || isResetting) && dragRotation > 0 && currentPage > 0
                  ? getPageItems(currentPage - 1)[0]
                  : currentItems[0]
              )}
            </div>

            {/* Right Static Base Page – transparent whenever it would show the non-existent 12th page */}
            <div 
              className={`relative rounded-r-lg overflow-hidden ${
                isRightEmpty ? 'bg-transparent' : 'bg-white'
              }`}
              style={{
                width: '374px',
                height: '505px',
                boxShadow: isRightEmpty ? 'none' : 'inset 12px 0 15px -10px rgba(0,0,0,0.15)'
              }}
            >
              {renderPage(
                isFlipping && flipDirection === 'next'
                  ? targetItems[1]
                  : (isDragging || isResetting) && dragRotation < 0 && currentPage < totalPages - 1
                  ? getPageItems(currentPage + 1)[1]
                  : currentItems[1]
              )}
            </div>

            {/* Unified Flipping Flap - Next Direction */}
            {(isFlipping && flipDirection === 'next') || (isDragging && dragRotation < 0 && currentPage < totalPages - 1) || (isResetting && dragRotation < 0) ? (
              <div
                className="absolute right-0 top-0"
                style={{
                  width: '374px',
                  height: '505px',
                  transformStyle: 'preserve-3d',
                  transformOrigin: 'left center',
                  transform: isFlipping 
                    ? (shouldAnimate ? 'rotateY(-180deg)' : `rotateY(${animationStartRotation}deg)`)
                    : `rotateY(${isResetting ? 0 : dragRotation}deg)`,
                  transition: isResetting ? 'transform 0.3s ease-out' : (isFlipping && shouldAnimate ? 'transform 0.6s ease-in-out' : 'none'),
                  zIndex: 30
                }}
              >
                {/* Front Side: Current Right Page */}
                <div 
                  className={`w-full h-full absolute inset-0 rounded-r-lg overflow-hidden ${
                    currentItems[1] ? 'bg-white' : 'bg-transparent'
                  }`}
                  style={{ 
                    backfaceVisibility: 'hidden',
                    boxShadow: currentItems[1] ? 'inset 12px 0 15px -10px rgba(0,0,0,0.15)' : 'none'
                  }}
                >
                  {renderPage(currentItems[1])}
                </div>

                {/* Back Side: Target Left Page */}
                <div 
                  className="w-full h-full absolute inset-0 bg-white rounded-l-lg overflow-hidden"
                  style={{ 
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                    boxShadow: 'inset -12px 0 15px -10px rgba(0,0,0,0.15)'
                  }}
                >
                  {renderPage(isFlipping ? targetItems[0] : getPageItems(currentPage + 1)[0])}
                </div>
              </div>
            ) : null}

            {/* Unified Flipping Flap - Previous Direction */}
            {(isFlipping && flipDirection === 'previous') || (isDragging && dragRotation > 0 && currentPage > 0) || (isResetting && dragRotation > 0) ? (
              <div
                className="absolute left-0 top-0"
                style={{
                  width: '374px',
                  height: '505px',
                  transformStyle: 'preserve-3d',
                  transformOrigin: 'right center',
                  transform: isFlipping 
                    ? (shouldAnimate ? 'rotateY(180deg)' : `rotateY(${animationStartRotation}deg)`)
                    : `rotateY(${isResetting ? 0 : dragRotation}deg)`,
                  transition: isResetting ? 'transform 0.3s ease-out' : (isFlipping && shouldAnimate ? 'transform 0.6s ease-in-out' : 'none'),
                  zIndex: 30
                }}
              >
                {/* Front Side: Current Left Page */}
                <div 
                  className="w-full h-full absolute inset-0 bg-white rounded-l-lg overflow-hidden"
                  style={{ 
                    backfaceVisibility: 'hidden',
                    boxShadow: 'inset -12px 0 15px -10px rgba(0,0,0,0.15)'
                  }}
                >
                  {renderPage(currentItems[0])}
                </div>

                {/* Back Side: Target Right Page */}
                <div 
                  className={`w-full h-full absolute inset-0 rounded-r-lg overflow-hidden ${
                    (isFlipping ? targetItems[1] : getPageItems(currentPage - 1)[1])
                      ? 'bg-white'
                      : 'bg-transparent'
                  }`}
                  style={{ 
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(-180deg)',
                    boxShadow: (isFlipping ? targetItems[1] : getPageItems(currentPage - 1)[1])
                      ? 'inset 12px 0 15px -10px rgba(0,0,0,0.15)'
                      : 'none'
                  }}
                >
                  {renderPage(isFlipping ? targetItems[1] : getPageItems(currentPage - 1)[1])}
                </div>
              </div>
            ) : null}
          </div>
        </div>

        {/* Drag instruction hint */}
        <p className="text-center text-gray-400 text-sm mt-4">
          Grab and drag the book to flip pages
        </p>
      </div>
    </section>
  )
}

export default UlatTanauanSection