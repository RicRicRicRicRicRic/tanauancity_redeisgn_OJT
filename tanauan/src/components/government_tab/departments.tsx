import { useState } from 'react';
import Footer from '../layout/Footer';
import community_affairs_logo from '../../assets/sections/pictures/community_affairs_office_logo.webp';
import business_permit_logo from '../../assets/sections/pictures/business_permit_logo.png';
import cswd_logo from '../../assets/sections/pictures/community_affairs_office_logo.webp';
import sports_development_logo from '../../assets/sections/pictures/sports_development_office_logo.webp';
import traffic_management_logo from '../../assets/sections/pictures/traffic_management_office_logo.png';
import gad_logo from '../../assets/sections/pictures/gad_logo.svg';
import human_resource_management_logo from '../../assets/sections/pictures/human_resource_development_logo.png';
import tanauan_logo from '../../assets/sections/pictures/tanauan_logo.webp'

const departmentsData = [
  { id: 1, title: "MAYOR'S OFFICE", category: "INSTITUTIONAL", desc: "The Office of the Mayor serves as the executive department of the local government, responsible for implementing local laws, providing...", icon: tanauan_logo, isImage: true },
  { id: 2, title: "GENDER AND DEVELOPMENT OFFICE", category: "INSTITUTIONAL", desc: "The Gender and Development Office is responsible for implementing programs that promote gender...", icon: gad_logo, isImage: true },
  { id: 3, title: "BUSINESS PERMIT AND LICENSING OFFICE", category: "INSTITUTIONAL", desc: "The BPLO oversees the issuance of business permits and licenses, ensuring that businesses within the...", icon: business_permit_logo, isImage: true },
  { id: 4, title: "HUMAN RESOURCE MANAGEMENT AND DEVELOPMENT OFFICE", category: "INSTITUTIONAL", desc: "The HRMDO handles personnel management for city government employees, including recruitment,...", icon: human_resource_management_logo, isImage: true },
  { id: 5, title: "CITY SOCIAL WELFARE AND DEVELOPMENT OFFICE", category: "INSTITUTIONAL", desc: "The CSWD implements social welfare programs aimed at protecting vulnerable sectors of society,...", icon: cswd_logo, isImage: true },
  { id: 6, title: "OFFICE OF THE PUBLIC MARKET", category: "INSTITUTIONAL", desc: "The OPM manages and oversees the operations of the city's public markets, ensuring proper maintenance,...", icon: tanauan_logo, isImage: true },
  { id: 7, title: "MANAGEMENT INFORMATION OFFICE", category: "INSTITUTIONAL", desc: "The MIS handles the city's information technology needs, managing computer systems, networks, and...", icon: tanauan_logo, isImage: true },
  { id: 8, title: "COMMUNITY AFFAIRS OFFICE, PESO, TOURISM, DIVISION", category: "INSTITUTIONAL", desc: "In general, responsible for the formulation of policies and guidelines and implementation of programs an...", icon: community_affairs_logo, isImage: true },
  { id: 9, title: "TRAFFIC MANAGEMENT OFFICE(TMO)", category: "SOCIAL", desc: "The TMO plans and implements traffic management systems, enforces traffic regulations, and works to improve road safety and...", icon: traffic_management_logo, isImage: true },
  { id: 10, title: "SPORTS DEVELOPMENT OFFICE(SDO)", category: "SOCIAL", desc: "The SDO promotes physical fitness and sports development among residents, organizing sports events,...", icon: sports_development_logo, isImage: true },
  { id: 11, title: "CITY ENGINEERING OFFICE", category: "LAND USE | INFRASTRUCTURE", desc: "The City Engineering Office oversees infrastructure development, including the design, construction, and...", icon: tanauan_logo, isImage: true },
  { id: 12, title: "OFFICE OF THE BUILDING OFFICIAL(OBO)", category: "LAND USE | INFRASTRUCTURE", desc: "The OBO regulates building construction within the city, ensuring compliance with the National Buildi...", icon: tanauan_logo, isImage: true },
  { id: 13, title: "CITY AGRICULTURE OFFICE(CAGRO)", category: "INSTITUTIONAL", desc: "The City Agriculture Office promotes agricultural development, provides technical assistance to farmers, and...", icon: tanauan_logo, isImage: true },
  { id: 14, title: "CITY TREASURER'S OFFICE(CTO)", category: "INSTITUTIONAL", desc: "The City Treasurer's Office is responsible for the collection, custody, and disbursement of city funds,...", icon: tanauan_logo, isImage: true },
  { id: 15, title: "CITY ASSESSOR'S OFFICE(CASSO)", category: "INSTITUTIONAL", desc: "The City Assessor's Office is responsible for the appraisal and assessment of real properties within...", icon: tanauan_logo, isImage: true },
  { id: 16, title: "CITY DISASTER RISK REDUCTION AND MANAGEMENT OFFICE(CDRRMO)", category: "SOCIAL", desc: "The CDRRMO is responsible for implementing the city's disaster risk reduction and management progra...", icon: tanauan_logo, isImage: true },
  { id: 17, title: "CITY HEALTH OFFICE (CHO)", category: "SOCIAL", desc: "The City Health Office is responsible for protecting and promoting the...", icon: "⚕️" },
  { id: 18, title: "ENVIRONMENTAL MANAGEMENT OFFICE", category: "ENVIRONMENTAL", desc: "This office develops and implements programs for environmental protection, conservation, and...", icon: tanauan_logo, isImage: true },
];

export default function TransparencyPage() {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const categories = [
    { name: 'ALL', label: 'All Departments', activeColor: 'bg-[#7A0000] text-white shadow-rose-950/30 border-[#7A0000]' },
    { name: 'INSTITUTIONAL', label: 'INSTITUTIONAL', activeColor: 'bg-blue-600 text-white shadow-blue-500/30 border-blue-600' },
    { name: 'SOCIAL', label: 'SOCIAL', activeColor: 'bg-purple-600 text-white shadow-purple-500/30 border-purple-600' },
    { name: 'ENVIRONMENTAL', label: 'ENVIRONMENTAL', activeColor: 'bg-emerald-600 text-white shadow-emerald-500/30 border-emerald-600' },
    { name: 'LAND USE | INFRASTRUCTURE', label: 'LAND USE | INFRASTRUCTURE', activeColor: 'bg-orange-600 text-white shadow-orange-500/30 border-orange-600' },
  ];

  const filteredDepartments = activeFilter === 'ALL' 
    ? departmentsData 
    : departmentsData.filter(dept => dept.category === activeFilter);

  // Category color mapping with matched badges and card borders
  const categoryStyles: Record<string, { badge: string; cardBorder: string }> = {
    "INSTITUTIONAL": { 
      badge: "bg-blue-700 text-white border-blue-700", 
      cardBorder: "border-blue-600 hover:border-blue-700" 
    },
    "SOCIAL": { 
      badge: "bg-purple-700 text-white border-purple-700", 
      cardBorder: "border-purple-600 hover:border-purple-700" 
    },
    "ENVIRONMENTAL": { 
      badge: "bg-emerald-700 text-white border-emerald-700", 
      cardBorder: "border-emerald-600 hover:border-emerald-700" 
    },
    "LAND USE | INFRASTRUCTURE": { 
      badge: "bg-orange-700 text-white border-orange-700", 
      cardBorder: "border-orange-600 hover:border-orange-700" 
    },
  };

  return (
    <div className="min-h-screen flex flex-col text-slate-100 pt-31 bg-slate-50">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#2B0A0A] via-[#4A0E0E] to-[#7A0000] py-20 px-6 md:px-16 border-b border-rose-950/50">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto">
          <span className="text-xs uppercase tracking-[0.25em] text-rose-300 font-semibold mb-3 block">
            Official Directory
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
            City Government Departments
          </h1>
          <div className="w-20 h-1 bg-[#7A0000] mb-6 rounded-full shadow-lg shadow-rose-900/50"></div>
          <p className="text-lg text-slate-200 max-w-2xl font-light leading-relaxed">
            Explore Tanauan City's government departments and offices working together to provide quality services and implement programs that benefit our citizens.
          </p>
        </div>
      </section>

      {/* Redesigned Filter Bar with Wrapping (No Scrollbars) */}
      <section className="sticky top-0 z-30 bg-slate-50/90 backdrop-blur-xl border-b border-slate-200/80 px-6 md:px-16 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          
          <div className="flex items-center gap-2">
            <div className="flex flex-col">
              <span className="text-[11px] uppercase tracking-wider font-extrabold text-slate-400">Directory Filter</span>
              <span className="text-xs font-bold text-slate-800">Select Sector</span>
            </div>
          </div>

          <div className="flex items-center flex-wrap gap-2 w-full lg:w-auto">
            {categories.map((cat) => {
              const isActive = activeFilter === cat.name;
              return (
                <button
                  key={cat.name}
                  onClick={() => setActiveFilter(cat.name)}
                  className={`px-4 py-2 rounded-xl text-[11px] font-bold tracking-wider transition-all duration-300 border flex items-center gap-2 shadow-sm ${
                    isActive
                      ? `${cat.activeColor} shadow-md scale-105 ring-2 ring-offset-2 ring-slate-200`
                      : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border-slate-200'
                  }`}
                >
                  <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-white animate-pulse' : 'bg-slate-300'}`}></span>
                  {cat.label}
                </button>
              );
            })}
          </div>

        </div>
      </section>

      {/* Departments Grid Section */}
      <section className="px-6 md:px-16 py-16 max-w-7xl mx-auto w-full flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDepartments.map((dept) => {
            const style = categoryStyles[dept.category] || { 
              badge: "bg-zinc-800 text-white border-zinc-700", 
              cardBorder: "border-zinc-300 hover:border-zinc-400" 
            };

            return (
              <div
                key={dept.id}
                className={`group relative bg-white border-2 ${style.cardBorder} rounded-2xl p-7 transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 flex flex-col justify-between`}
              >
                <div>
                  {/* Top Badge & Icon/Logo Render */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-20 h-20 flex items-center justify-center p-2 rounded-xl bg-slate-50 border border-slate-100 group-hover:scale-110 transition-transform overflow-hidden shadow-inner">
                      {dept.isImage ? (
                        <img src={dept.icon as string} alt={dept.title} className="w-full h-full object-contain" />
                      ) : (
                        <span className="text-2xl">{dept.icon}</span>
                      )}
                    </div>
                    <span className={`text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full border shadow-sm ${style.badge}`}>
                      {dept.category}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-slate-900 tracking-wide transition-colors mb-3">
                    {dept.title}
                  </h3>
                  <p className="text-sm text-slate-600 font-normal leading-relaxed line-clamp-3 mb-6">
                    {dept.desc}
                  </p>
                </div>

                {/* Action Button */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-medium">Tanauan Portal</span>
                  <button className="inline-flex items-center gap-2 text-xs font-semibold text-slate-800 group-hover:text-black transition-colors">
                    View Details 
                    <span className="transform transition-transform group-hover:translate-x-1">→</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}