import { useState, useEffect } from "react";
import City_Library from "../../../assets/sections/GovernmentLinksLogos/CityLibrary.png";
import City_Ordinances from "../../../assets/sections/GovernmentLinksLogos/CityOrdinance.png";
import Gender_And_Development from "../../../assets/sections/GovernmentLinksLogos/GenderAndDevelopment.png";
import LGBT_Programs from "../../../assets/sections/GovernmentLinksLogos/LGBTQIAPrograms.png";
import Public_Employment from "../../../assets/sections/GovernmentLinksLogos/PublicEmploymentServiceOffice.png";
import Public_Safety from "../../../assets/sections/GovernmentLinksLogos/PublicSafety.png";
import Tanauan_City from "../../../assets/sections/GovernmentLinksLogos/TanauanCity.png";
import Traffic_Management from "../../../assets/sections/GovernmentLinksLogos/TrafficManagement.png";

function GovernmentLinksSection() {
  const links = [
    {
      id: 1,
      name: "Gender & Development",
      category: "Social Services",
      logo: Gender_And_Development,
      description: "Empowerment programs, gender mainstreaming, and community welfare advocacy designed for inclusive civic growth.",
      stats: "24/7 Support Desk",
    },
    {
      id: 2,
      name: "LGBTQIA+ Programs",
      category: "Social Services",
      logo: LGBT_Programs,
      description: "Inclusive community support, anti-discrimination initiatives, and comprehensive rights awareness campaigns.",
      stats: "Active Advocacy",
    },
    {
      id: 3,
      name: "Tanauan Main Portal",
      category: "Governance",
      logo: Tanauan_City,
      description: "The official digital gateway for city announcements, public leadership directories, and core municipal services.",
      stats: "Primary Hub",
    },
    {
      id: 4,
      name: "Traffic Management",
      category: "Public Safety",
      logo: Traffic_Management,
      description: "Real-time road safety updates, traffic advisory streams, and city transport corridor guidelines.",
      stats: "Live Tracking",
    },
    {
      id: 5,
      name: "City Library",
      category: "Community",
      logo: City_Library,
      description: "Extensive digital archives, research tools, educational programs, and quiet modern study environments.",
      stats: "Open Access",
    },
    {
      id: 6,
      name: "Public Safety Office",
      category: "Public Safety",
      logo: Public_Safety,
      description: "Emergency coordination networks, disaster response preparedness, and municipal security protocols.",
      stats: "Emergency Ready",
    },
    {
      id: 7,
      name: "PESO Employment",
      category: "Employment",
      logo: Public_Employment,
      description: "Direct job placement assistance, local recruitment caravans, and specialized livelihood training workshops.",
      stats: "Career Support",
    },
    {
      id: 8,
      name: "City Ordinances",
      category: "Governance",
      logo: City_Ordinances,
      description: "Comprehensive public repository of local executive orders, city mandates, and enforceable legal codes.",
      stats: "Public Record",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-advance slideshow unless hovered
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % links.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, links.length]);

  const activeItem = links[currentIndex];

  return (
    <>
      <style>{`
        @keyframes fadeSlide {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-slide {
          animation: fadeSlide 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .display-heading {
          font-family: "Montserrat", sans-serif;
          font-weight: 800;
          letter-spacing: -0.04em;
        }
        .serif-highlight {
          font-family: "Playfair Display", Georgia, Cambria, "Times New Roman", Times, serif;
          font-style: italic;
          font-weight: 500;
          letter-spacing: -0.02em;
        }
      `}</style>

      {/* Zero Cards: Clean, Compact White and Red Modern Slideshow */}
      <section
        id="ulat-tanauan"
        className="py-16 md:py-20 text-slate-900 relative overflow-hidden bg-gradient-to-b from-white via-red-50/30 to-white"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Subtle Ambient Red Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-100/40 rounded-full blur-[180px] pointer-events-none" />

        <div className="w-full px-6 md:px-12 lg:px-16 max-w-7xl mx-auto relative z-10">
          
          {/* Section Micro-Header */}
          <div className="flex items-center justify-between mb-10 border-b border-red-100 pb-4">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-red-600" />
              <span className="text-red-700 text-xs font-mono tracking-[0.3em] uppercase font-semibold">
                Immersive Slideshow Stage
              </span>
            </div>
            <div className="text-xs font-mono text-slate-400">
              0{currentIndex + 1} <span className="text-red-200">/</span> 0{links.length}
            </div>
          </div>

          {/* Slideshow Content Frame (Zero Cards, Compact Layout) */}
          <div className="min-h-[320px] md:min-h-[280px] flex flex-col justify-between">
            
            <div key={currentIndex} className="animate-fade-slide grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Editorial Text & Typography */}
              <div className="lg:col-span-8 flex flex-col">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="text-[11px] font-mono font-bold text-red-700 bg-red-100/80 px-3.5 py-1 rounded-full border border-red-200 uppercase tracking-widest">
                    {activeItem.category}
                  </span>
                  <span className="text-[11px] font-mono text-slate-500">
                    // {activeItem.stats}
                  </span>
                </div>

                <h3 className="display-heading text-3xl md:text-5xl text-slate-900 mb-4 leading-[1.1]">
                  {activeItem.name}
                </h3>

                <p className="text-slate-600 text-sm md:text-base font-light leading-relaxed max-w-2xl mb-6">
                  {activeItem.description}
                </p>

                {/* Button placed with comfortable spacing */}
                <div className="flex items-center pt-2">
                  <a
                    href="#"
                    className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-500 text-white text-xs font-bold uppercase tracking-widest px-7 py-3.5 rounded-xl transition-all duration-300 shadow-xl shadow-red-600/20 group"
                  >
                    <span>Launch Portal Channel</span>
                    <span className="transform group-hover:translate-x-1 transition-transform">↗</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Floating High-Contrast Logo Showcase */}
              <div className="lg:col-span-4 flex justify-lg-end justify-center">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-tr from-white to-red-50/50 border border-red-200 p-6 flex items-center justify-center shadow-2xl shadow-red-950/5 relative">
                  <div className="absolute inset-0 rounded-full bg-red-500/5 blur-2xl pointer-events-none" />
                  <img src={activeItem.logo} alt={activeItem.name} className="w-full h-full object-contain relative z-10 filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.08)]" />
                </div>
              </div>

            </div>

          </div>

          {/* Cinematic Interactive Progress Control Bars (With the requested list items) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 mt-10 pt-6 border-t border-red-100">
            {links.map((item, index) => {
              const isActive = currentIndex === index;
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentIndex(index)}
                  className="group text-left py-1.5 focus:outline-none"
                >
                  {/* Animated Progress Track */}
                  <div className="h-1 w-full bg-red-100 rounded-full overflow-hidden mb-2">
                    <div 
                      className={`h-full bg-red-600 transition-all duration-500 ${
                        isActive ? "w-full" : "w-0 group-hover:w-1/3"
                      }`} 
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] font-mono ${isActive ? "text-red-700 font-bold" : "text-slate-400"}`}>
                      0{item.id}
                    </span>
                    <span className={`text-xs font-semibold truncate max-w-[100px] ${isActive ? "text-slate-900" : "text-slate-500 group-hover:text-slate-800"}`}>
                      {item.name}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

        </div>
      </section>
    </>
  );
}

export default GovernmentLinksSection;