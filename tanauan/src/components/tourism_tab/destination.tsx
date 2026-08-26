import { useState, useRef } from 'react';
import Footer from '../layout/Footer';
import sample from '../../assets/sections/pictures/Tnauan.png';
import iluhan_ng_tubo from '../../assets/sections/Home/CulturalHeritagePics/IluhanNgTubo.png';
import museo_ni_mabini from '../../assets/sections/Home/CulturalHeritagePics/MuseoNiMabini.png';
import napayong_island from '../../assets/sections/Home/CulturalHeritagePics/NapayongIsland.png';
import old_muni_hall from '../../assets/sections/Home/CulturalHeritagePics/OldMuniHall.png';
import st_evangelist_parish from '../../assets/sections/Home/CulturalHeritagePics/StEvangelistParish.jpg';
import nilupak_ice_cream from '../../assets/sections/pictures/nilupak_ice_cream.png';
import bulalo_ice_cream from '../../assets/sections/pictures/bulalo_ice_cream.webp';
import bibingka from '../../assets/sections/pictures/bibingka.webp';

const delicacies = [
  {
    image: nilupak_ice_cream,
    title: "Nilupak Ice Cream",
    badge: "Signature Fusion",
    description: "A delightful twist on traditional Batangas nilupak, transformed into a creamy, artisanal frozen treat."
  },
  {
    image: bulalo_ice_cream,
    title: "Bulalo Ice Cream",
    badge: "Unique Specialty",
    description: "An adventurous culinary creation blending the rich, savory essence of Batangas bulalo with sweet cream."
  },
  {
    image: bibingka,
    title: "Special Bibingka",
    badge: "Traditional Favorite",
    description: "Warm, freshly baked rice cake topped with salted egg and cheese, baked to perfection in traditional clay pots."
  }
];

export default function TransparencyPage() {
  const [activeDestination, setActiveDestination] = useState(0);

  // References for drag-to-scroll functionality on the map view
  const mapViewportRef = useRef<HTMLDivElement>(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!mapViewportRef.current) return;
    isDown.current = true;
    mapViewportRef.current.classList.add('cursor-grabbing');
    startX.current = e.pageX - mapViewportRef.current.offsetLeft;
    scrollLeft.current = mapViewportRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDown.current = false;
    if (mapViewportRef.current) {
      mapViewportRef.current.classList.remove('cursor-grabbing');
    }
  };

  const handleMouseUp = () => {
    isDown.current = false;
    if (mapViewportRef.current) {
      mapViewportRef.current.classList.remove('cursor-grabbing');
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown.current || !mapViewportRef.current) return;
    e.preventDefault();
    const x = e.pageX - mapViewportRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5; // Scroll speed multiplier
    mapViewportRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleWheel = (e: React.WheelEvent) => {
    if (mapViewportRef.current && e.deltaY !== 0) {
      e.preventDefault();
      mapViewportRef.current.scrollLeft += e.deltaY;
    }
  };

  const destinations = [
    {
      id: 0,
      title: "ILUHAN NG TUBO / OLD TOWER IN CALE",
      category: "Tourism",
      date: "Jun 16, 2025",
      image: iluhan_ng_tubo,
      description: "A historic sugar cane processing ruin reflecting Tanauan's rich agricultural heritage.",
      coords: { x: 15, y: 45 }
    },
    {
      id: 1,
      title: "NAPAYONG ISLAND",
      category: "Tourism",
      date: "Jun 16, 2025",
      image: napayong_island,
      description: "A serene island escape located on Taal Lake, perfect for nature lovers and scenic views.",
      coords: { x: 38, y: 32 }
    },
    {
      id: 2,
      title: "APOLINARIO MABINI SHRINE",
      category: "Heritage",
      date: "Jun 18, 2025",
      image: museo_ni_mabini,
      description: "The birthplace and historical sanctuary dedicated to the 'Sublime Paralytic', Apolinario Mabini.",
      coords: { x: 55, y: 58 }
    },
    {
      id: 3,
      title: "OLD MUNICIPAL HALL",
      category: "Heritage",
      date: "Jun 19, 2025",
      image: old_muni_hall,
      description: "A cherished architectural landmark preserving the historic civic governance of early Tanauan.",
      coords: { x: 75, y: 35 }
    },
    {
      id: 4,
      title: "ST. JOHN THE EVANGELIST PARISH",
      category: "Culture",
      date: "Jun 20, 2025",
      image: st_evangelist_parish,
      description: "A magnificent spiritual and cultural cornerstone standing proudly at the heart of the city.",
      coords: { x: 90, y: 50 }
    }
  ];

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
          className="absolute inset-0 bg-[#7a0000] z-10 pointer-events-none"
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
          className="absolute inset-0 bg-[#7a0000] z-30 pointer-events-none hidden md:block"
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
          className="absolute inset-0 bg-[#7a0000] z-25 pointer-events-none hidden md:block"
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
        <div className="text-center max-w-2xl mx-auto mb-16">
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

      {/* Interactive Treasure Map Section (Plain White Background) */}
      <section className="relative py-24 bg-white text-slate-900 overflow-hidden border-t border-slate-100">

        {/* Section Header */}
        <div className="relative z-10 text-center max-w-2xl mx-auto mb-12 px-6">
          <span className="text-xs uppercase tracking-widest text-[#7a0000] font-semibold bg-red-50 px-4 py-1.5 rounded-full border border-red-200 mb-4 inline-block shadow-sm">
            Interactive Destination Chart
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-slate-900 tracking-tight mb-4">
            Tanauan <span className="font-normal italic text-[#7a0000]">Destination Map</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-light leading-relaxed">
            Drag horizontally or use your mouse wheel to pan across the map. Click on any marker to inspect landmarks.
          </p>
        </div>

        {/* Map Container & Interactive Interface */}
        <div className="relative max-w-6xl mx-auto px-6 sm:px-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Scrollable Interactive Map Canvas (7 cols) */}
            <div className="lg:col-span-7 relative">
              
              {/* Outer Viewport with Horizontal Scrolling enabled */}
              <div 
                ref={mapViewportRef}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                onWheel={handleWheel}
                className="relative bg-white rounded-3xl overflow-x-auto overflow-y-hidden border-2 border-[#7a0000]/20 shadow-xl h-[400px] sm:h-[480px] cursor-grab select-none [scrollbar-width:thin] [scrollbar-color:#7a0000_#e2e8f0]"
              >
                
                {/* Inner Plain White Canvas */}
                <div className="relative w-[1400px] h-full bg-white overflow-hidden">

                  {/* Map Grid Lines & Border Frame */}
                  <svg className="absolute inset-0 w-full h-full text-slate-200 pointer-events-none" viewBox="0 0 1400 480" preserveAspectRatio="none" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <line x1="350" y1="0" x2="350" y2="480" strokeDasharray="8 8" />
                    <line x1="700" y1="0" x2="700" y2="480" strokeDasharray="8 8" />
                    <line x1="1050" y1="0" x2="1050" y2="480" strokeDasharray="8 8" />
                    <rect x="10" y="10" width="1380" height="460" stroke="#7a0000" strokeWidth="2.5" className="opacity-30" />
                    <rect x="16" y="16" width="1368" height="448" stroke="#7a0000" strokeWidth="1" className="opacity-15" />
                  </svg>

                  {/* Dashed Red Treasure Trail */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 1400 480" preserveAspectRatio="none">
                    <path 
                      d="M 210 216 Q 350 320, 600 180 T 1232 260" 
                      fill="none" 
                      stroke="#7a0000" 
                      strokeWidth="3.5" 
                      strokeDasharray="8 6" 
                      className="opacity-80" 
                    />
                  </svg>

                  {/* Compass Rose Watermark */}
                  <div className="absolute top-10 right-14 opacity-15 pointer-events-none z-10">
                    <svg className="w-24 h-24 text-[#7a0000]" viewBox="0 0 100 100" fill="currentColor">
                      <path d="M50 0 L55 45 L100 50 L55 55 L50 100 L45 55 L0 50 L45 45 Z" />
                    </svg>
                  </div>

                  {/* Map Title Tag */}
                  <div className="absolute top-6 left-6 z-20 bg-[#7a0000] text-white px-3.5 py-1.5 rounded-lg border border-red-900 text-xs tracking-widest uppercase font-mono shadow-md">
                    Destination Chart &harr;
                  </div>

                  {/* Interactive Treasure Pins Placed on Map */}
                  {destinations.map((dest) => {
                    const isSelected = activeDestination === dest.id;
                    return (
                      <button
                        key={dest.id}
                        onClick={() => setActiveDestination(dest.id)}
                        style={{ left: `${dest.coords.x}%`, top: `${dest.coords.y}%` }}
                        className={`absolute -translate-x-1/2 -translate-y-1/2 z-30 group transition-all duration-300 focus:outline-none`}
                        aria-label={`Select ${dest.title}`}
                      >
                        {/* Pulsing Outer Ring */}
                        <span className={`absolute -inset-2 rounded-full animate-ping opacity-75 ${isSelected ? 'bg-white' : 'bg-[#7a0000]/40'}`} />

                        {/* Pin Icon Body */}
                        <div className={`relative w-10 h-10 rounded-full flex items-center justify-center shadow-xl border-2 transition-transform duration-300 ${isSelected ? 'bg-white text-slate-950 border-[#7a0000] scale-125' : 'bg-[#7a0000] text-white border-white hover:scale-110'}`}>
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          </svg>
                        </div>

                        {/* Floating Label Tooltip */}
                        <div className="absolute top-12 left-1/2 -translate-x-1/2 whitespace-nowrap bg-slate-900/95 text-white text-[11px] font-medium px-2.5 py-1 rounded shadow-lg border border-[#7a0000]/40 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                          {dest.title}
                        </div>
                      </button>
                    );
                  })}

                </div>
              </div>

              {/* Map Footer Legend */}
              <div className="absolute bottom-3 left-4 right-4 z-40 flex items-center justify-between text-xs text-slate-700 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-xl border border-slate-200 pointer-events-none shadow-md">
                <span>↔️ Drag horizontally to navigate the map</span>
              </div>
            </div>

            {/* Right Column: Active Destination Card (5 cols) */}
            <div className="lg:col-span-5">
              {(() => {
                const current = destinations[activeDestination];
                return (
                  <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl relative">
                    
                    {/* Category Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-[#7a0000] text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5 shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                        {current.category}
                      </span>
                      <span className="text-xs text-[#7a0000] font-mono font-medium flex items-center gap-1">
                        🗓️ {current.date}
                      </span>
                    </div>

                    {/* Destination Image Thumbnail */}
                    <div className="relative h-48 rounded-2xl overflow-hidden mb-6 border border-slate-100 shadow-inner">
                      <img 
                        src={current.image} 
                        alt={current.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Title & Description */}
                    <h3 className="font-serif text-xl font-normal text-slate-900 mb-2 tracking-wide">
                      {current.title}
                    </h3>
                    <p className="text-slate-600 text-sm font-light leading-relaxed mb-6">
                      {current.description}
                    </p>

                    {/* Action & Navigation */}
                    <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                      <span className="text-xs text-slate-500 font-mono">
                        Landmark #{current.id + 1} of {destinations.length}
                      </span>
                      <button className="bg-[#7a0000] hover:bg-red-800 text-white text-xs font-semibold px-5 py-2.5 rounded-full transition-colors flex items-center gap-2 shadow-md cursor-pointer">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        Visit Destination
                      </button>
                    </div>

                  </div>
                );
              })()}
            </div>

          </div>

        </div>

      </section>

      {/* Redesigned Premium Local Delicacies Section (Correctly placed outside the map container) */}
      <section className="py-24 px-6  sm:px-10 md:px-14 max-w-7xl mx-auto w-full bg-gradient-to-b from-white via-red-50/20 to-white">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-[#7a0000] font-semibold bg-red-50 px-4 py-1.5 rounded-full border border-red-200 mb-4 inline-block shadow-sm">
            Food & Heritage
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-slate-900 tracking-tight mb-4">
            Local <span className="font-normal italic text-[#7a0000]">Delicacies</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-light leading-relaxed">
            Taste the authentic flavors of Tanauan through our traditional dishes and unique culinary innovations.
          </p>
        </div>

        {/* 3-Column Premium Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {delicacies.map((item, index) => (
            <div 
              key={index} 
              className="group relative h-[440px] rounded-3xl overflow-hidden shadow-xl border border-slate-100 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl flex flex-col justify-end"
            >
              {/* Background Image with Zoom on Hover */}
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Sophisticated Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent transition-opacity duration-300 opacity-90 group-hover:opacity-95" />

              {/* Floating Top Badge */}
              <div className="absolute top-5 left-5 z-20">
                <span className="bg-white/90 backdrop-blur-md text-[#7a0000] text-[11px] font-semibold px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow-md">
                  {item.badge}
                </span>
              </div>

              {/* Card Content Footer Area */}
              <div className="relative z-20 p-8 flex flex-col justify-end">
                <h3 className="font-serif text-2xl font-normal text-white mb-2 tracking-wide drop-shadow-md">
                  {item.title}
                </h3>
                <p className="text-slate-200 text-sm font-light leading-relaxed mb-6 opacity-90">
                  {item.description}
                </p>

                <button className="self-start bg-white/10 hover:bg-white text-white hover:text-slate-950 border border-white/30 hover:border-white text-xs font-semibold px-5 py-2.5 rounded-full backdrop-blur-md transition-all duration-300 flex items-center gap-2 shadow-sm cursor-pointer">
                  <span>Discover Recipe</span>
                  <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>

            </div>
          ))}
        </div>

      </section>

      {/* Visit Us / API-Free Elegant Map Section */}
      <section className="py-24 px-6 sm:px-10 md:px-14 max-w-7xl mx-auto w-full bg-white">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest text-[#7a0000] font-semibold bg-red-50 px-4 py-1.5 rounded-full border border-red-200 mb-4 inline-block shadow-sm">
            Location & Directions
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-slate-900 tracking-tight mb-4">
            Visit Us in <span className="font-normal italic text-[#7a0000]">Tanauan City</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-light leading-relaxed">
            Located in the heart of Batangas, Tanauan City welcomes you with open arms. Plan your visit today and discover the charm of our city.
          </p>
        </div>

        {/* Premium Map Wrapper */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Decorative Ambient Glow / Background Card Frame */}
          <div className="absolute -inset-2 bg-gradient-to-r from-[#7a0000]/20 via-amber-500/10 to-[#7a0000]/20 rounded-[32px] blur-xl opacity-70 pointer-events-none" />

          {/* Main Container Card */}
          <div className="relative bg-white p-3 sm:p-4 rounded-[28px] border border-slate-200/80 shadow-2xl overflow-hidden">
            
            {/* Map Inner Frame with rounded corners */}
            <div className="relative w-full h-[460px] sm:h-[520px] rounded-2xl overflow-hidden border border-slate-200 shadow-inner group">
              
              {/* Google Maps Iframe */}
              <iframe
                title="Tanauan City Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3865.617469608226!2d121.1508!3d14.0857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd6d6a5d4d3d21%3A0xf0c541738722!2sTalisay%20-%20Tanauan%20Rd%2C%20Tanauan%2C%20Batangas!5e0!3m2!1sen!2sph!4v1650000000000!5m2!1sen!2sph"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale-[25%] contrast-[105%] group-hover:grayscale-0 transition-all duration-700"
              />

              {/* Bottom Bar Floating Action CTA */}
              <div className="absolute bottom-4 right-4 z-10">
                <a
                  href="https://maps.google.com/?q=Talisay+-+Tanauan+Rd,+Tanauan,+Batangas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-900/90 hover:bg-[#7a0000] text-white backdrop-blur-md text-xs font-semibold px-5 py-3 rounded-xl transition-all duration-300 shadow-xl flex items-center gap-2 border border-white/10"
                >
                  <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  <span>Get Directions on Google Maps</span>
                </a>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Call to Action Banner Section */}
      <section className="relative py-24 px-6 sm:px-10 md:px-14 bg-transparent text-slate-900 text-center overflow-hidden">
        
        <div className="relative z-10 max-w-3xl mx-auto">

          {/* Main Headline */}
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-slate-900 mb-4">
            Start Your Tanauan <span className="font-normal italic text-[#7a0000]">Adventure Today</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg font-light tracking-wide mb-10 max-w-xl mx-auto leading-relaxed">
            Let us help you plan your perfect visit to our beautiful city
          </p>

          <div>
            <a
              href="#contact" 
              className="inline-flex items-center gap-2 bg-[#7a0000] hover:bg-red-800 text-white text-xs md:mt-8 uppercase tracking-wider font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span>Contact Tourism Office</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

        </div>

      </section>

      {/* Footer */}
      <Footer />

    </div>
  );
}