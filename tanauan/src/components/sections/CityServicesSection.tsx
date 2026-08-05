import FloatBlobs from '../common/float-blobs'

function CityServicesSection() {
  return (
    <section id="city-services" className="w-full h-[768px] min-h-[768px] overflow-hidden relative ">

      <FloatBlobs />
      
      <div className="w-full h-full flex flex-col items-center justify-center px-6 md:px-12 lg:px-16 py-12 relative z-10 mt-[15px]">
        <div className="w-full max-w-[795px] max-h-[575px]">
          {/* Header Section */}
          <div className="text-center mb-8">
            <h2 className="!text-4xl font-bold gradient-text mb-2">
              City services
            </h2>
            <div className="w-24 h-1 bg-[#E91E8C] mx-auto mb-4"></div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Access important city services and resources designed to meet the needs of our citizens
            </p>
          </div>

          {/* 2x2 Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5">
          {/* Card 1: Online Services (Top-Left) */}
          <div className="relative h-[208px] rounded-lg overflow-hidden group cursor-pointer">
            <img 
              src="/src/assets/sections/city-services/Online Services.png" 
              alt="Online Services"
              className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:blur-md"
            />
            <div className="absolute inset-0 bg-[#0096ff] opacity-70 transition-opacity duration-500 ease-out group-hover:opacity-0"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h3 className="text-3xl font-bold text-white text-center transition-all duration-500 ease-out group-hover:-translate-y-1 group-hover:text-[#0096ff]">
                Online Services
              </h3>
              <div className="max-h-0 overflow-hidden opacity-0 group-hover:max-h-40 group-hover:opacity-100 group-hover:mx-14 group-hover: duration-300 ease-out">
                <p className="text-white text-left text-sm mb-2">
                  Access digital government services from the comfort of your home
                </p>
                <span className="text-white font-bold text-base transition-colors duration-500 ease-out group-hover:text-[#0096ff]">
                  Learn More {'>'}
                </span>
              </div>
            </div>
          </div>

          {/* Card 2: Business Portal (Top-Right) */}
          <div className="relative h-[208px] rounded-lg overflow-hidden group cursor-pointer">
            <img 
              src="/src/assets/sections/city-services/Business Portal.png" 
              alt="Business Portal"
              className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:blur-md"
            />
            <div className="absolute inset-0 bg-[#00ff5e] opacity-70 transition-opacity duration-500 ease-out group-hover:opacity-0"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h3 className="text-3xl font-bold text-white text-center transition-all duration-500 ease-out group-hover:-translate-y-1 group-hover:text-[#00ff5e]">
                Business Portal
              </h3>
              <div className="max-h-0 overflow-hidden opacity-0 group-hover:max-h-40 group-hover:opacity-100 group-hover:mx-14 group-hover: duration-300 ease-out">
                <p className="text-white text-left text-sm mb-2">
                  Resources for business owners and entrepreneurs in our city
                </p>
                <span className="text-white font-bold text-base transition-colors duration-500 ease-out group-hover:text-[#00ff5e]">
                  Learn More {'>'}
                </span>
              </div>
            </div>
          </div>

          {/* Card 3: Citizen Support (Bottom-Left) */}
          <div className="relative h-[208px] rounded-lg overflow-hidden group cursor-pointer">
            <img 
              src="/src/assets/sections/city-services/Citizen Support.png" 
              alt="Citizen Support"
              className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:blur-md"
            />
            <div className="absolute inset-0 bg-[#e000ff] opacity-70 transition-opacity duration-500 ease-out group-hover:opacity-0"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h3 className="text-3xl font-bold text-white text-center transition-all duration-500 ease-out group-hover:-translate-y-1 group-hover:text-[#e000ff]">
                Citizen Support
              </h3>
              <div className="max-h-0 overflow-hidden opacity-0 group-hover:max-h-40 group-hover:opacity-100 group-hover:mx-14 group-hover: duration-300 ease-out">
                <p className="text-white text-left text-sm mb-2">
                  Get help with city services and find answers to common questions
                </p>
                <span className="text-white font-bold text-base transition-colors duration-500 ease-out group-hover:text-[#e000ff]">
                  Learn More {'>'}
                </span>
              </div>
            </div>
          </div>

          {/* Card 4: City Departments (Bottom-Right) */}
          <div className="relative h-[208px] rounded-lg overflow-hidden group cursor-pointer">
            <img 
              src="/src/assets/sections/city-services/City Departments.png" 
              alt="City Departments"
              className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:blur-md"
            />
            <div className="absolute inset-0 bg-[#ff0039] opacity-70 transition-opacity duration-500 ease-out group-hover:opacity-0"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h3 className="text-3xl font-bold text-white text-center transition-all duration-500 ease-out group-hover:-translate-y-1 group-hover:text-[#ff0039]">
                City Departments
              </h3>
              <div className="max-h-0 overflow-hidden opacity-0 group-hover:max-h-40 group-hover:opacity-100 group-hover:mx-14 group-hover: duration-300 ease-out">
                <p className="text-white text-left text-sm mb-2">
                  Learn about our city departments and how they serve you
                </p>
                <span className="text-white font-bold text-base transition-colors duration-500 ease-out group-hover:text-[#ff0039]">
                  Learn More {'>'}
                </span>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CityServicesSection