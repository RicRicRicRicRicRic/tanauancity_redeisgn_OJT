function DigitalCityServicesSection() {
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
          <div className="flex flex-col justify-center space-y-4 -mt-4">
            {/* App Logo & Header */}
            <div className="flex items-center gap-3 mb-2">
              <img 
                src="/src/assets/sections/digital-city-services/egov-logo.svg" 
                alt="eGovPH Logo" 
                className="h-12 w-12"
              />
              <h3 className="text-3xl font-bold text-blue-600">eGovPH App</h3>
            </div>

            {/* Tagline */}
            <h4 className="text-3xl font-bold text-gray-800">
              Tanaueños, may eGov ka na ba?
            </h4>

            {/* Sub-tagline */}
            <p className="text-base text-gray-700 leading-relaxed">
              Gamitin na ang <span className="font-bold">ONE-STOP GOVERNMENT TRANSACTION<br></br> APP</span> para ma-access ang online government services!
            </p>

            <p className="!mt-2 text-base text-gray-600 italic">
              Sa eGovPH App, quick access na ang mga sumusunod:
            </p>

            {/* Feature List */}
            <ul className="space-y-3 mt-4">
              <li className="flex items-start gap-3">
                <div className="mt-1">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm text-gray-700">Digital Copy of National ID</span>
              </li>
              
              <li className="flex items-start gap-3">
                <div className="mt-1">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm text-gray-700">Quick access sa GSIS, SSS, PAG IBIG, PhilHealth, BIR at PRC</span>
              </li>
              
              <li className="flex items-start gap-3">
                <div className="mt-1">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm text-gray-700">
                  Features services ng iba't-ibang National and Local <br></br> Government Services tulad Tanauan City website, eBPLS, Real<br></br>Property Tax Payment at Fire Safety Inspection System
                </span>
              </li>
              
              <li className="flex items-start gap-3">
                <div className="mt-1">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm text-gray-700">
                  Bagong Pilipinas Presidential Action Center at Philippine<br></br> eTravel Information System at eReport sa iba't ibang lugar<br></br> sa bansa
                </span>
              </li>
            </ul>
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