import React from 'react'

import City_Library from "../../assets/sections/GovernmentLinksLogos/CityLibrary.png";
import City_Ordinances from "../../assets/sections/GovernmentLinksLogos/CityOrdinances.png";
import Gender_And_Development from "../../assets/sections/GovernmentLinksLogos/GenderAndDevelopment.png";
import LGBT_Programs from "../../assets/sections/GovernmentLinksLogos/LGBTQIAPrograms.png";
import Public_Employment from "../../assets/sections/GovernmentLinksLogos/PublicEmploymentServiceOffice.png";
import Public_Safety from "../../assets/sections/GovernmentLinksLogos/PublicSafety.png";
import Tanauan_City from "../../assets/sections/GovernmentLinksLogos/TanauanCity.png";
import Traffic_Management from "../../assets/sections/GovernmentLinksLogos/TrafficManagement.png";

function UlatTanauanSection() {
  const links = [
    { id: 1, name: "Gender and Development", logo: Gender_And_Development },
    { id: 2, name: "LGBTQIA+ Programs", logo: LGBT_Programs },
    { id: 3, name: "Tanauan City", logo: Tanauan_City },
    { id: 4, name: "Traffic Management", logo: Traffic_Management },
    { id: 5, name: "City Library", logo: City_Library },
    { id: 6, name: "Public Safety", logo: Public_Safety },
    { id: 7, name: "Public Employment Service Office", logo: Public_Employment },
    { id: 8, name: "City Ordinances", logo: City_Ordinances },
  ];

  return (
    <section id="ulat-tanauan" className="min-h-[768px] py-16 flex items-center justify-center bg-gray-50/50 overflow-hidden">
      <div className="w-full px-6 md:px-12 lg:px-16 max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">Government Links</h2>
          <p className="text-gray-500 mt-2 text-sm md:text-base">Quick access to official portals and local departments.</p>
        </div>

        {/* Borderless Grid Layout with balanced inner gap */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 md:gap-x-10 md:gap-y-12 justify-items-center">
          {links.map((item) => (
            <a
              key={item.id}
              href="#"
              className="group flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1.5 focus:outline-none"
            >
              {/* Logo Container */}
              <div className="w-20 h-20 md:w-24 md:h-24 mb-1.5 flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-105">
                <img 
                  src={item.logo} 
                  alt={item.name}
                  className="w-full h-full object-contain scale-[0.7] md:scale-[0.7]"
                />
              </div>

              {/* Title */}
              <span className="text-xs md:text-sm font-medium text-gray-600 group-hover:text-blue-600 transition-colors max-w-[150px] line-clamp-2">
                {item.name}
              </span>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}

export default UlatTanauanSection;