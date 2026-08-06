import React, { useState, useEffect } from 'react';

import City_Library from "../../assets/sections/GovernmentLinksLogos/CityLibrary.png";
import City_Ordinances from "../../assets/sections/GovernmentLinksLogos/CityOrdinances.png";
import Gender_And_Development from "../../assets/sections/GovernmentLinksLogos/GenderAndDevelopment.png";
import LGBT_Programs from "../../assets/sections/GovernmentLinksLogos/LGBTQIAPrograms.png";
import Public_Employment from "../../assets/sections/GovernmentLinksLogos/PublicEmploymentServiceOffice.png";
import Public_Safety from "../../assets/sections/GovernmentLinksLogos/PublicSafety.png";
import Tanauan_City from "../../assets/sections/GovernmentLinksLogos/TanauanCity.png";
import Traffic_Management from "../../assets/sections/GovernmentLinksLogos/TrafficManagement.png";

function UlatTanauanSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  const links = [
    { id: 1, name: "Gender & Development", category: "Social Services", logo: Gender_And_Development },
    { id: 2, name: "LGBTQIA+ Programs", category: "Social Services", logo: LGBT_Programs },
    { id: 3, name: "Tanauan Main Portal", category: "Governance", logo: Tanauan_City },
    { id: 4, name: "Traffic Management", category: "Public Safety", logo: Traffic_Management },
    { id: 5, name: "City Library", category: "Community", logo: City_Library },
    { id: 6, name: "Public Safety Office", category: "Public Safety", logo: Public_Safety },
    { id: 7, name: "PESO Employment", category: "Employment", logo: Public_Employment },
    { id: 8, name: "City Ordinances", category: "Governance", logo: City_Ordinances },
  ];

  const totalSlides = Math.ceil(links.length / 4);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % totalSlides);
    }, 6000);
    return () => clearInterval(timer);
  }, [totalSlides]);

  return (
    <section id="ulat-tanauan" className="py-20 bg-gradient-to-br from-white via-rose-50/30 to-red-100/40 text-slate-800 relative overflow-hidden">
      
      {/* Soft Ambient Background Glows */}
      <div className="absolute top-1/2 -left-20 w-80 h-80 bg-red-300/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-10 right-0 w-96 h-96 bg-rose-200/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full px-6 md:px-12 lg:px-16 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: Clear Gateway Opening */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Verification Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-red-100/80 border border-red-200 text-red-700 text-xs font-bold tracking-wider uppercase shadow-xs">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
              Official Portal Directory
            </div>

            {/* Direct Gateway Opening Statement */}
            <div className="space-y-3">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                Welcome to the Official Access Gateway of <span className="text-red-600">Tanauan City</span>
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Your direct entry point to verified municipal portals, public safety channels, and official local government departments. Connect safely with guaranteed SSL protection.
              </p>
            </div>

            {/* Minimal Switcher Indicators */}
            <div className="pt-4 border-t border-red-200/50 flex items-center gap-3">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    activeSlide === index 
                      ? "w-8 bg-red-600 shadow-xs shadow-red-500/50" 
                      : "w-2.5 bg-red-200 hover:bg-red-300"
                  }`}
                />
              ))}
            </div>

          </div>

          {/* RIGHT COLUMN: Circular Seamless Fill Display */}
          <div className="lg:col-span-7 relative w-full overflow-hidden py-4">
            <div 
              className="flex w-full transition-transform duration-700 ease-in-out" 
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => {
                const slideItems = links.slice(slideIndex * 4, slideIndex * 4 + 4);
                
                return (
                  <div key={slideIndex} className="w-full flex-shrink-0 grid grid-cols-2 gap-8 md:gap-12 px-2">
                    {slideItems.map((item) => (
                      <a
                        key={item.id}
                        href="#"
                        className="group flex flex-col items-center justify-center text-center transition-all duration-300 focus:outline-none"
                      >
                        {/* Seamless Edge-to-Edge Circle Frame */}
                        <div className="relative w-32 h-32 md:w-36 md:h-36 rounded-full bg-white border-2 border-red-200/70 shadow-md group-hover:border-red-500 group-hover:shadow-lg group-hover:shadow-red-500/15 group-hover:scale-105 transition-all duration-300 flex items-center justify-center overflow-hidden p-3">
                          
                          {/* Scaled Full-Bleed Logo */}
                          <img
                            src={item.logo}
                            alt={item.name}
                            className="w-full h-full object-contain filter drop-shadow-sm group-hover:scale-110 transition-transform duration-300"
                          />

                        </div>

                        {/* Title & Tag Underneath */}
                        <div className="mt-3 space-y-1">
                          <span className="block text-xs font-semibold text-red-600 uppercase tracking-wider">
                            {item.category}
                          </span>
                          <span className="block text-sm font-bold text-slate-800 group-hover:text-red-600 transition-colors line-clamp-2 max-w-[160px]">
                            {item.name}
                          </span>
                        </div>
                      </a>
                    ))}
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default UlatTanauanSection;