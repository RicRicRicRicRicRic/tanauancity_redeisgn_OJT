import Footer from '../layout/Footer';
import sample from '../../assets/sections/pictures/Tnauan.png';

export default function TransparencyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans">

      {/* Hero Header Section */}
      <section className="relative w-full h-[480px] md:h-[560px] lg:h-[497px] overflow-hidden mt-28 md:mt-31">
        
        {/* Background Image (Base Layer) */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src={sample}
            alt="Tanauan City Landscape"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Maroon Overlay Panel (35% top, 65% bottom) */}
        <div 
          className="absolute inset-0 bg-[#5c0000] z-10 pointer-events-none"
          style={{
            clipPath: 'polygon(0 0, 35% 0, 65% 100%, 0 100%)'
          }}
        />

        {/* White Diagonal Divider Stripe (Main split) */}
        <div 
          className="absolute inset-0 bg-white z-20 pointer-events-none hidden md:block"
          style={{
            clipPath: 'polygon(35% 0, 36.4% 0, 66.4% 100%, 65% 100%)'
          }}
        />

        {/* Maroon Border Accent Stripe (Main split) */}
        <div 
          className="absolute inset-0 bg-[#5c0000] z-30 pointer-events-none hidden md:block"
          style={{
            clipPath: 'polygon(36.4% 0, 37.8% 0, 67.8% 100%, 66.4% 100%)'
          }}
        />

        {/* Upper-Right White Accent Stripe (Overlapped to prevent hairline gaps) */}
        <div 
          className="absolute inset-0 bg-white z-30 pointer-events-none hidden md:block"
          style={{
            clipPath: 'polygon(90.6% -0.2%, 89.4% -0.2%, 100% 34.2%, 100% 30.3%)'
          }}
        />

        {/* Upper-Right Maroon Accent Border (Overlapped to prevent hairline gaps) */}
        <div 
          className="absolute inset-0 bg-[#5c0000] z-25 pointer-events-none hidden md:block"
          style={{
            clipPath: 'polygon(100.2% -0.2%, 88% -0.2%, 100.2% 39.2%, 100.2% 9.8%)'
          }}
        />

        {/* Content Container with Refined Typography */}
        <div className="relative z-40 h-full max-w-7xl mx-auto px-6 sm:px-10 md:px-14 flex items-center">
          <div className="max-w-xl text-white pt-4">

            {/* Main Title with Elegant Tracking & Shadow */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-wide mb-3 drop-shadow-md">
              TanaWE <span className="font-normal italic">Tanauan</span>
            </h1>

            {/* Poetic Tagline */}
            <p className="text-base sm:text-lg md:text-xl font-light tracking-wider leading-relaxed ml-1 text-red-100/90">
              Tanawin ang Ganda,
              <br />
              <span className="font-medium">Damhin ang Diwa</span>
            </p>

            {/* Welcome Message */}
            <p className="mt-8 md:mt-12 text-sm sm:text-base md:text-lg uppercase tracking-widest font-semibold text-red-200">
              Welcome to Tanauan City, Batangas
            </p>

          </div>
        </div>

      </section>

      {/* Explore Tanauan Section (Pure White, Borderless) */}
      <section className="py-20 px-6 sm:px-10 md:px-14 max-w-7xl mx-auto w-full bg-white">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-4">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-slate-900 tracking-tight mb-4">
            Explore <span className="font-normal text-[#7A1C1C]">Tanauan</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-light leading-relaxed">
            From historical landmarks to modern attractions, discover everything our city has to offer.
          </p>
        </div>

        {/* 4-Column Category Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          
          {/* Card 1: Tourist Spots */}
          <div className="group bg-slate-50/60 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border-none flex flex-col justify-between hover:-translate-y-1">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center text-[#7A1C1C] mb-6 group-hover:bg-[#7A1C1C] group-hover:text-white transition-colors duration-300 shadow-sm">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-normal text-slate-900 mb-3 tracking-wide">
                Tourist Spots
              </h3>
              <p className="text-slate-600 text-sm font-light leading-relaxed">
                Discover breathtaking locations and historical landmarks that make Tanauan unique.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center text-xs font-semibold uppercase tracking-wider text-[#7A1C1C] group-hover:translate-x-1 transition-transform">
              <span>View Spots &rarr;</span>
            </div>
          </div>

          {/* Card 2: Local Cuisine */}
          <div className="group bg-slate-50/60 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border-none flex flex-col justify-between hover:-translate-y-1">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center text-[#7A1C1C] mb-6 group-hover:bg-[#7A1C1C] group-hover:text-white transition-colors duration-300 shadow-sm">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-normal text-slate-900 mb-3 tracking-wide">
                Local Cuisine
              </h3>
              <p className="text-slate-600 text-sm font-light leading-relaxed">
                Savor the authentic flavors of Tanauan's traditional dishes and delicious local delicacies.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center text-xs font-semibold uppercase tracking-wider text-[#7A1C1C] group-hover:translate-x-1 transition-transform">
              <span>Explore Food &rarr;</span>
            </div>
          </div>

          {/* Card 3: Festivals & Events */}
          <div className="group bg-slate-50/60 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border-none flex flex-col justify-between hover:-translate-y-1">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center text-[#7A1C1C] mb-6 group-hover:bg-[#7A1C1C] group-hover:text-white transition-colors duration-300 shadow-sm">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-normal text-slate-900 mb-3 tracking-wide">
                Festivals & Events
              </h3>
              <p className="text-slate-600 text-sm font-light leading-relaxed">
                Experience the vibrant culture through our colorful festivals, traditions, and city celebrations.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center text-xs font-semibold uppercase tracking-wider text-[#7A1C1C] group-hover:translate-x-1 transition-transform">
              <span>View Events &rarr;</span>
            </div>
          </div>

          {/* Card 4: Accommodations */}
          <div className="group bg-slate-50/60 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border-none flex flex-col justify-between hover:-translate-y-1">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center text-[#7A1C1C] mb-6 group-hover:bg-[#7A1C1C] group-hover:text-white transition-colors duration-300 shadow-sm">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-normal text-slate-900 mb-3 tracking-wide">
                Accommodations
              </h3>
              <p className="text-slate-600 text-sm font-light leading-relaxed">
                Find comfortable stays ranging from luxury resort hotels to cozy, welcoming local inns.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center text-xs font-semibold uppercase tracking-wider text-[#7A1C1C] group-hover:translate-x-1 transition-transform">
              <span>Find Stays &rarr;</span>
            </div>
          </div>

        </div>

      </section>

      {/* Footer */}
      <Footer />

    </div>
  );
}