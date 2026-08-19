import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Monitor, FileText, AlertCircle, ChevronDown } from 'lucide-react'

function Navbar() {
  const [isAtTop, setIsAtTop] = useState(true)
  const [currentTime, setCurrentTime] = useState(new Date())
  const location = useLocation()

  // Handle scroll effect to track if the user has scrolled from the top
  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0)
    }

    // Set initial state
    handleScroll()

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Real-time clock update
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const shouldCollapseUtilityBar = 
    location.pathname === '/e-services' || 
    location.pathname === '/transparency' || 
    location.pathname === '/alerts'

  const navItems = [
    { name: 'Home', href: '/', hasDropdown: false },
    { 
      name: 'The City', 
      href: '#the-city', 
      hasDropdown: true,
      dropdownItems: ['History', 'Vision & Mission', 'City Officials', 'Geographical Profile']
    },
    { 
      name: 'Government', 
      href: '#government', 
      hasDropdown: true,
      dropdownItems: ['Executive Department', 'Legislative', 'Departments & Offices', 'Barangays']
    },
    { 
      name: 'Services', 
      href: '#services', 
      hasDropdown: true,
      dropdownItems: ['Business Permit', 'Civil Registry', 'Health Services', 'Social Services']
    },
    { 
      name: 'Transparency Report', 
      href: '#transparency', 
      hasDropdown: true,
      dropdownItems: ['Full Disclosure Policy', 'Bids and Awards', 'Annual Budget', 'Ordinances']
    },
    { 
      name: 'Tourism', 
      href: '#tourism', 
      hasDropdown: true,
      dropdownItems: ['Attractions', 'Festivals', 'Local Delicacies', 'Accommodations']
    },
  ]

  const formattedDate = currentTime.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })

  const formattedTime = currentTime.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  })

  return (
    <header className="fixed top-0 left-0 right-0 z-[9999] w-full font-serif">
      {/* Top Utility Bar - Dark/Crimson Red styled bar */}
      <div
        className={`w-full bg-[#5c0000] border-b border-[#7a0000] text-white transition-all duration-300 ease-in-out overflow-hidden ${
          shouldCollapseUtilityBar || !isAtTop ? 'max-h-0 opacity-0 py-0' : 'max-h-12 opacity-100 py-1'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between text-xs tracking-wider uppercase">
          
          {/* Left Column - Utility Links */}
          <div className="flex items-center gap-2">
            <Link
              to="/e-services"
              className="flex items-center gap-1 bg-[#7a0000] hover:bg-[#990000] px-2.5 py-0.5 rounded transition-colors font-medium text-white shadow-sm"
            >
              <Monitor className="w-3 h-3 text-red-200" />
              <span>E-Services</span>
            </Link>
            <Link
              to="/transparency"
              className="flex items-center gap-1 bg-[#7a0000] hover:bg-[#990000] px-2.5 py-0.5 rounded transition-colors font-medium text-white shadow-sm"
            >
              <FileText className="w-3 h-3 text-red-200" />
              <span>Transparency</span>
            </Link>
            <Link
              to="/alerts"
              className="flex items-center gap-1 bg-[#7a0000] hover:bg-[#990000] px-2.5 py-0.5 rounded transition-colors font-medium text-white shadow-sm"
            >
              <AlertCircle className="w-3 h-3 text-red-200" />
              <span>Alerts</span>
            </Link>
          </div>

          {/* Right Column - Realtime Updates (Date & Time) */}
          <div className="flex items-center gap-2 font-medium tracking-widest text-white bg-[#7a0000]/60 px-3 py-0.5 rounded shadow-sm">
            <span>{formattedDate}</span>
            <span className="text-red-300">|</span>
            <span className="text-white">{formattedTime}</span>
          </div>

        </div>
      </div>

      {/* Main Navigation Bar with Left-to-Right Crimson Red Wipe Animation on Scroll */}
      <nav 
        className={`w-full px-4 py-3 transition-all duration-500 relative ${
          isAtTop ? 'bg-black/40 backdrop-blur-[3px] shadow-none' : 'bg-[#990000] shadow-md'
        }`}
        role="navigation" 
        aria-label="Main navigation"
      >
        {/* Left-to-Right Red Wipe Background Layer */}
        <div 
          className={`absolute inset-0 bg-[#990000] z-0 transition-transform duration-700 ease-out origin-left pointer-events-none ${
            isAtTop ? 'scale-x-0' : 'scale-x-100'
          }`}
        />

        <div className="max-w-7xl mx-auto flex items-center justify-between relative z-10">
          
          {/* Left Brand Section */}
          <Link to="/" className="flex items-center gap-3.5 group">
            <img
              src="/src/assets/sections/Home/navbar/tanauan logo.webp"
              alt="Tanauan City Logo"
              className="h-12 w-auto object-contain transition-transform group-hover:scale-105 filter drop-shadow-md"
            />
            <div className="flex flex-col justify-center">
              <span className={`text-xs font-normal tracking-normal normal-case font-serif transition-colors duration-500 ${isAtTop ? 'text-white/90 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]' : 'text-red-100'}`}>
                Republic of the Philippines
              </span>
              <span className={`text-lg md:text-xl font-bold tracking-tight uppercase transition-colors duration-500 ${isAtTop ? 'text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]' : 'text-white'}`}>
                CITY OF TANAUAN
              </span>
            </div>
          </Link>

          {/* Right Navigation Links with Transparent Hover Cards */}
          <div className="hidden lg:flex items-center gap-1.5">
            {navItems.map((item) => (
              <div key={item.name} className="relative group py-2 -my-2">
                <Link
                  to={item.href}
                  className={`flex items-center gap-1 px-3 py-1.5 rounded text-xs md:text-sm font-bold tracking-wider uppercase transition-all ${
                    isAtTop 
                      ? 'text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)] hover:bg-white/20' 
                      : 'text-white hover:bg-[#b30000]'
                  }`}
                >
                  <span>{item.name}</span>
                  {item.hasDropdown && <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />}
                </Link>

                {/* Clean Glassmorphism Dropdown Menu with Transparent/White Hover Effects */}
                {item.hasDropdown && item.dropdownItems && (
                  <div className="absolute top-full left-0 pt-1 w-56 opacity-0 translate-y-1 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-150 ease-in-out z-50">
                    <div className="bg-white/90 backdrop-blur-md rounded shadow-xl border border-white/40 py-1.5 overflow-hidden">
                      {item.dropdownItems.map((subItem, index) => (
                        <a
                          key={index}
                          href="#"
                          className="block px-4 py-2 text-gray-900 hover:bg-black/5 hover:text-[#990000] text-xs font-semibold tracking-wider uppercase transition-colors border-b border-gray-100 last:border-none"
                        >
                          {subItem}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </nav>
    </header>
  )
}

export default Navbar