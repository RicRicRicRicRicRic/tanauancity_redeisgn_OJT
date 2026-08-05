import { useState } from 'react'

interface Slide {
  id: number
  title: string
  tagline: string
  description: string
  features: {
    icon: 'check' | 'id' | 'building' | 'card' | 'shield'
    text: string
  }[]
}

const slides: Slide[] = [
  {
    id: 1,
    title: 'eGovPH App',
    tagline: 'Tanaueños, may eGov ka na ba?',
    description: 'Gamitin na ang ONE-STOP GOVERNMENT TRANSACTION APP para ma-access ang online government services!',
    features: [
      {
        icon: 'id',
        text: 'Digital Copy of National ID'
      },
      {
        icon: 'building',
        text: 'Quick access sa GSIS, SSS, PAG IBIG, PhilHealth, BIR at PRC'
      },
      {
        icon: 'card',
        text: 'Features services ng iba\'t-ibang National and Local Government Services tulad Tanauan City website, eBPLS, Real Property Tax Payment at Fire Safety Inspection System'
      },
      {
        icon: 'shield',
        text: 'Bagong Pilipinas Presidential Action Center at Philippine eTravel Information System at eReport sa iba\'t ibang lugar sa bansa'
      }
    ]
  },
  {
    id: 2,
    title: 'Business Permit (e-BPLS)',
    tagline: 'Available through the e-Business Permit & Licensing System at eservices.tanauancity.gov.ph',
    description: '',
    features: []
  },
  {
    id: 3,
    title: 'Real Property Tax',
    tagline: 'Manage your property tax payments',
    description: '',
    features: []
  }
]

function DigitalCityServicesSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const currentSlideData = slides[currentSlide]

  const renderSlideContent = () => {
    // Special Layout for Slide 3 (Real Property Tax)
    if (currentSlide === 2) {
      return (
        <div className="">
          {/* Access Points Section */}
          <div>
            <div className="flex items-center gap-2 -mt-3">
              <svg className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              <h5 className="text-base font-bold text-gray-800">Access Points</h5>
            </div>
            <p className="text-xs text-gray-600 mb-2">
              The City Treasurer's Office manages real property tax (RPT) payments and showcases combined schedules for RPT and business permit payments
            </p>
            
            {/* Payment Schedule Box */}
            <div className="border-2 border-blue-300 rounded-lg p-1.5 bg-white w-[350px] mx-auto my-2">
              <h6 className="text-sm font-bold text-gray-800">Payment Schedule 2024-2025</h6>
              <ul className="space-y-1">
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs text-gray-700">Q1: January - March</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs text-gray-700">Q2: April - June</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs text-gray-700">Full Payment: 10% discount if paid by January 31</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Convenient Payment Section */}
          <div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
              </svg>
              <h5 className="text-base font-bold text-gray-800">Convenient Payment:</h5>
            </div>
            <p className="text-xs text-gray-700 leading-relaxed mb-3">
              Kiosk-based access allows citizens to settle Real Property Tax payments, located in the same municipal eGov setup:
            </p>
            
            {/* Location Pill Buttons */}
            <div className="flex flex-wrap gap-2">
              <span className="px-4 py-2 border-2 border-blue-300 text-gray-700 rounded-full text-xs font-medium">
                City hall
              </span>
              <span className="px-4 py-2 border-2 border-blue-300 text-gray-700 rounded-full text-xs font-medium">
                Victory Mall
              </span>
              <span className="px-4 py-2 border-2 border-blue-300 text-gray-700 rounded-full text-xs font-medium">
                Waltermart
              </span>
              <span className="px-4 py-2 border-2 border-blue-300 text-gray-700 rounded-full text-xs font-medium">
                FPIP
              </span>
            </div>
          </div>

          {/* Access RPT Portal Button */}
          <div className="pt-2 flex justify-center md:justify-start">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border-2 border-blue-600 rounded-full text-gray-800 font-semibold hover:bg-blue-50 transition-colors w-full md:w-auto"
              aria-label="Access RPT Portal"
            >
              <span className="text-sm">Access RPT Portal</span>
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      )
    }

    // Special Layout for Slide 2 (e-BPLS)
    if (currentSlide === 1) {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          {/* Left Column - Services Covered & User Journey */}
          <div className="space-y-3">
            {/* Services Covered */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <svg className="w-5 h-5 text-[#E91E8C]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                </svg>
                <h5 className="text-base font-bold text-gray-800">Services Covered:</h5>
              </div>
              <ul className="space-y-1.5">
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs text-gray-700">New business permit applications</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs text-gray-700">Permit renewals</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs text-gray-700">Amendments and special/short-term permits</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs text-gray-700">Permit verification</span>
                </li>
              </ul>
            </div>

            {/* User Journey */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <svg className="w-5 h-5 text-[#E91E8C]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z"/>
                </svg>
                <h5 className="text-base font-bold text-gray-800">User Journey:</h5>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-[#E91E8C] text-white flex items-center justify-center font-bold text-xs">1</div>
                  <span className="text-xs text-gray-700 mt-1">Create</span>
                </div>
                <div className="flex-1 h-0.5 bg-gray-400 mx-1"></div>
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-[#E91E8C] text-white flex items-center justify-center font-bold text-xs">2</div>
                  <span className="text-xs text-gray-700 mt-1">Submit</span>
                </div>
                <div className="flex-1 h-0.5 bg-gray-400 mx-1"></div>
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-[#E91E8C] text-white flex items-center justify-center font-bold text-xs">3</div>
                  <span className="text-xs text-gray-700 mt-1">Process</span>
                </div>
                <div className="flex-1 h-0.5 bg-gray-400 mx-1"></div>
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-[#E91E8C] text-white flex items-center justify-center font-bold text-xs">4</div>
                  <span className="text-xs text-gray-700 mt-1">Complete</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Access Points & Payment */}
          <div className="space-y-3">
            {/* Access Points */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <svg className="w-5 h-5 text-[#E91E8C]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <h5 className="text-base font-bold text-gray-800">Access Points</h5>
              </div>
              <p className="text-xs text-gray-600 !mb-2 !-mt-2">Use via web or physical kiosks at:</p>
              <div className="grid grid-cols-2 gap-1.5">
                <span className="px-3 py-1.5 border-2 border-[#E91E8C] text-gray-700 rounded-full text-xs font-medium text-center">
                  City hall
                </span>
                <span className="px-3 py-1.5 border-2 border-[#E91E8C] text-gray-700 rounded-full text-xs font-medium text-center">
                  Waltermart
                </span>
                <span className="px-3 py-1.5 border-2 border-[#E91E8C] text-gray-700 rounded-full text-xs font-medium text-center">
                  Victory Mall
                </span>
                <span className="px-3 py-1.5 border-2 border-[#E91E8C] text-gray-700 rounded-full text-xs font-medium text-center">
                  FPIP
                </span>
              </div>
            </div>

            {/* Convenient Payment */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <svg className="w-5 h-5 text-[#E91E8C]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
                </svg>
                <h5 className="text-base font-bold text-gray-800">Convenient Payment:</h5>
              </div>
              <p className="text-xs text-gray-700 leading-relaxed">
                Dedicated schedules and extended deadlines (e.g., January deadlines in 2025) for permit payments without penalty
              </p>
            </div>
          </div>

          {/* Access e-BPLS Portal Button */}
          <div className="flex justify-center md:justify-start">
            <a
              href="https://eservices.tanauancity.gov.ph"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border-2 border-[#E91E8C] rounded-3xl text-gray-800 font-semibold hover:bg-pink-50 transition-colors shadow-sm"
              aria-label="Access e-BPLS Portal"
            >
              <span className="text-sm">Access e-BPLS Portal</span>
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      )
    }

    // Default Layout for Slide 1 (eGovPH App)
    return (
      <>
        {/* Sub-tagline */}
        <p className="text-base text-gray-700 leading-relaxed">
          {currentSlideData.description.split('ONE-STOP GOVERNMENT TRANSACTION').map((part, index, array) => (
            index === 0 && array.length > 1 ? (
              <span key={index}>
                {part}
                <span className="font-bold">ONE-STOP GOVERNMENT TRANSACTION</span>
                {array[1]}
              </span>
            ) : (
              <span key={index}>{part}</span>
            )
          ))}
        </p>

        <p className="!mt-2 text-base text-gray-600 italic">
          Sa {currentSlideData.title}, quick access na ang mga sumusunod:
        </p>

         {/* Feature List */}
         <ul className="space-y-3 mt-4">
           {currentSlideData.features.map((feature, index) => (
             <li key={index} className="flex items-start gap-3">
               <div className="mt-1">
                 <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                   <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                 </svg>
               </div>
               {/* Feature Icon */}
               <div className="mt-1 flex-shrink-0">
                 {feature.icon === 'check' ? (
                   <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                   </svg>
                 ) : feature.icon === 'id' ? (
                   <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                     <rect x="3" y="5" width="18" height="14" rx="2" strokeWidth="2"/>
                     <circle cx="8" cy="10" r="2" strokeWidth="2"/>
                     <path d="M14 9h6M14 12h6M14 15h4" strokeWidth="2" strokeLinecap="round"/>
                   </svg>
                 ) : feature.icon === 'building' ? (
                   <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                   </svg>
                 ) : feature.icon === 'card' ? (
                   <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                     <rect x="2" y="4" width="20" height="16" rx="2" strokeWidth="2"/>
                     <path d="M2 8h20" strokeWidth="2"/>
                     <rect x="5" y="11" width="6" height="2" rx="1" strokeWidth="2"/>
                     <rect x="5" y="15" width="4" height="2" rx="1" strokeWidth="2"/>
                   </svg>
                 ) : (
                   <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                   </svg>
                 )}
               </div>
               <span className="text-sm text-gray-700">{feature.text}</span>
             </li>
           ))}
         </ul>
      </>
    )
  }

  return (
    <section id="digital-city-services" className="w-full h-[768px] min-h-[768px] bg-white overflow-hidden">
      <div className="w-full h-full flex flex-col md:px-20  mt-[15px]">
        {/* Header */}
        <div className="text-center mt-25">
          <h2 className="!text-4xl md:text-5xl font-bold">
            <span className="text-[#E91E8C]">Digital</span>
            <span className="text-gray-800"> City Services</span>
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 items-center relative">
          {/* Left Column - Text & Features */}
          <div className="flex flex-col justify-center space-y-4 -mt-4 min-h-[500px]">
            {/* App Logo & Header */}
            <div className="flex items-center gap-3 mb-2">
              {currentSlide === 1 ? (
                <svg className="w-12 h-12 text-[#E91E8C]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
                </svg>
              ) : (
                <img 
                  src="/src/assets/sections/digital-city-services/egov-logo.svg" 
                  alt="eGovPH Logo" 
                  className="h-12 w-12"
                />
              )}
              <h3 className="text-3xl font-bold text-blue-600">{currentSlideData.title}</h3>
            </div>

            {/* Tagline */}
            {currentSlide === 1 ? (
              <div>
                <h4 className="text-xl font-semibold text-gray-800">
                  {currentSlideData.tagline.split(' at ')[0]}
                </h4>
                <a 
                  href="https://eservices.tanauancity.gov.ph" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-lg text-blue-600 underline hover:text-blue-800 transition-colors"
                >
                  {currentSlideData.tagline.split(' at ')[1] || currentSlideData.tagline}
                </a>
              </div>
            ) : (
              <h4 className="text-3xl font-bold text-gray-800">
                {currentSlideData.tagline}
              </h4>
            )}

            {/* Render slide-specific content */}
            {renderSlideContent()}

            {/* Pagination Dots - Always visible */}
            <div className="flex items-center justify-center gap-2 mt-2" role="tablist" aria-label="Service slides">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#E91E8C] focus:ring-offset-2 ${
                    currentSlide === index
                      ? 'w-8 h-3 bg-[#E91E8C]'
                      : 'w-3 h-3 bg-gray-400 hover:bg-gray-500'
                  }`}
                  aria-label={`Go to slide ${index + 1}: ${slides[index].title}`}
                  aria-selected={currentSlide === index}
                  role="tab"
                  aria-controls={`slide-${index}`}
                />
              ))}
            </div>
          </div>

          {/* Right Column - Visual Card & Downloads */}
          <div className="absolute bottom-3  -right-20 w-[458px] h-[567px] flex flex-col items-end justify-center gap-4 rounded-tl-4xl" style={{ background: 'linear-gradient(to right, #fde2e2, #dce9fc)' }}>
              {/* QR Code and Store Badges */}
              <div className="flex flex-col items-start space-y-4 flex-[2] p-14 ">
                {/* QR Code Box */}
                <div className=" border-gray-300 rounded-lg shadow-md">
                  <img 
                    src="/src/assets/sections/digital-city-services/QR-code.webp" 
                    alt="QR Code for Download" 
                    className="size-[200px] object-contain rounded-2xl"
                  />
                </div>

                {/* Scan to Download Button */}
                <button 
                  className="flex items-center justify-center gap-2 w-[200px] h-[60px] bg-white border-3 border-blue-600 rounded-xl hover:bg-blue-50 transition-colors"
                  aria-label="Scan to Download"
                >
                  <svg className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
                    <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
                    <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
                    <rect x="14" y="14" width="3" height="3" fill="currentColor"/>
                    <rect x="18" y="14" width="3" height="3" fill="currentColor"/>
                    <rect x="14" y="18" width="3" height="3" fill="currentColor"/>
                    <rect x="18" y="18" width="3" height="3" fill="currentColor"/>
                    <rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" strokeDasharray="2 2"/>
                  </svg>
                  <span className="text-sm font-bold text-gray-800">Scan to download</span>
                </button>

                 {/* Store Badges */}
                 <div className="flex flex-col gap-3">
                   {/* Google Play Button */}
                   <button 
                     className="w-[200px] h-[60px] bg-black border-3 border-white rounded-xl flex items-center gap-3 px-3 hover:bg-gray-900 transition-colors"
                     aria-label="Get it on Google Play"
                   >
                     <img 
                       src="/src/assets/sections/digital-city-services/googleplay.png" 
                       alt="Google Play" 
                       className="w-6 h-6 object-contain"
                     />
                     <div className="flex flex-col items-start leading-none">
                       <span className="text-sm text-white font-normal -mb-1">Get it on</span>
                       <span className="text-sm text-white font-bold">Google Play</span>
                     </div>
                   </button>
                   
                   {/* Apple App Store Button */}
                   <button
                     className="w-[200px] h-[60px] bg-black border-3 border-white rounded-xl flex items-center gap-3 px-3 hover:bg-gray-900 transition-colors"
                     aria-label="Download on the App Store"
                   >
                     <img 
                       src="/src/assets/sections/digital-city-services/apple.png" 
                       alt="Apple" 
                       className="w-6 h-6 object-contain"
                     />
                     <div className="flex flex-col items-start leading-none">
                       <span className="text-sm text-white font-normal -mb-1">Download on the</span>
                       <span className="text-sm text-white font-bold">App store</span>
                     </div>
                   </button>
                  </div>
               </div>
             </div>

          {/* Banner Image - Overlapping Element */}
          <div className="absolute bottom-3 right-0 -translate-x-50 z-10 hidden lg:block">
              <img 
                src="/src/assets/sections/digital-city-services/banner.webp" 
                alt="eGovPH App Illustration" 
                className="w-[386px] h-[481px] max-w-md object-contain"
              />
            </div>
        </div>
      </div>
    </section>
  )
}

export default DigitalCityServicesSection