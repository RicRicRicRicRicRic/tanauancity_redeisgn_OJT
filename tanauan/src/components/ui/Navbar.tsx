import { useState, useEffect } from 'react'
import { Megaphone, Calendar, ChevronDown, Monitor, FileText, AlertCircle } from 'lucide-react'

function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isAtTop, setIsAtTop] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'The City', href: '#the-city', hasDropdown: true },
    { name: 'Government', href: '#government', hasDropdown: true },
    { name: 'Services', href: '#services', hasDropdown: true },
    { name: 'Transparency Report', href: '#transparency', hasDropdown: true },
    { name: 'Tourism', href: '#tourism', hasDropdown: true },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full">
      {/* Top Utility Bar */}
      <div
        className={`w-full backdrop-blur-md transition-all duration-300 ease-in-out ${
          isAtTop ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
        style={{
          background: 'rgba(210, 36, 36, 0.65)',
        }}
      >
        <div className="w-full px-4 py-1">
          <div className="flex items-center justify-between">
            {/* Left Side - Utility Buttons */}
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 bg-[#931818] hover:bg-[#7a1414] text-white px-4 py-1.5 rounded-full text-sm font-medium transition-colors">
                <Monitor className="w-4 h-4" />
                <span>E-services</span>
              </button>
              <button className="flex items-center gap-2 bg-[#931818] hover:bg-[#7a1414] text-white px-4 py-1.5 rounded-full text-sm font-medium transition-colors">
                <FileText className="w-4 h-4" />
                <span>Transparency</span>
              </button>
              <button className="flex items-center gap-2 bg-[#931818] hover:bg-[#7a1414] text-white px-4 py-1.5 rounded-full text-sm font-medium transition-colors">
                <AlertCircle className="w-4 h-4" />
                <span>Alerts</span>
              </button>
            </div>

            {/* Right Side - Announcement Banner */}
            <div className="flex items-center">
              <div className="flex items-center gap-3 bg-[#931818] hover:bg-[#7a1414] text-white px-4 py-1.5 rounded-full transition-colors cursor-pointer">
                <Megaphone className="w-4 h-4" />
                <span className="text-sm font-medium">
                  ANNOUNCEMENT | Tanauan City's Applicants Admission
                </span>
                <div className="flex items-center gap-1.5 bg-[#661414] hover:bg-[#551010] px-2.5 py-0.5 rounded-full">
                  <Calendar className="w-3.5 h-3.5" />
                  <span className="text-xs font-medium">June 6, 2025</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Red Navigation Bar */}
      <nav
        className={`w-full transition-all duration-300 ease-in-out ${
          isAtTop ? 'bg-red-700' : 'bg-red-700/80'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="w-full px-4 py-1.5">
          <div className="flex items-center justify-between">
            {/* Left Brand Section */}
            <div className="flex items-center gap-4">
              <img
                src="/src/assets/sections/navbar/tanauan logo.webp"
                alt="Tanauan City Logo"
                className="h-14 w-auto object-contain"
              />
              <div className="flex flex-col">
                <h1 className="text-white !text-xl !m-0 md:text-2xl font-bold leading-tight">
                  City Government of Tanauan
                </h1>
                <p className="text-white/90 text-sm md:text-base">
                  Republic of the Philippines
                </p>
              </div>
            </div>

            {/* Right Navigation Links */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div key={item.name} className="relative">
                  <button
                    className="flex items-center gap-1 text-white hover:bg-red-800 px-4 py-2 rounded-md text-base font-medium transition-colors"
                    onClick={() => item.hasDropdown && setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                    aria-expanded={activeDropdown === item.name}
                    aria-haspopup={item.hasDropdown ? 'true' : undefined}
                  >
                    <span>{item.name}</span>
                    {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                  </button>
                  {item.hasDropdown && activeDropdown === item.name && (
                    <div className="absolute top-full left-0 mt-1 bg-white rounded-md shadow-lg min-w-[200px] z-50">
                      <a href="#" className="block px-4  text-gray-700 hover:bg-gray-100 text-sm">
                        Dropdown Item 1
                      </a>
                      <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm">
                        Dropdown Item 2
                      </a>
                      <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm">
                        Dropdown Item 3
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar