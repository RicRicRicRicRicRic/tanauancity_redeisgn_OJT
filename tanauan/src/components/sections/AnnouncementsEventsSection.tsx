import React, { useState } from 'react';
import { 
  Calendar, 
  Megaphone, 
  AlertTriangle, 
  Users, 
  ArrowRight, 
  Grid 
} from 'lucide-react';

// Card data (8 items total)
const itemsData = [
  {
    id: 1,
    category: 'Meetings',
    title: 'Estado ng mga pagawaing Bayan sa Lungsod ng Tanauan, tinalakay sa Local Project Monitoring 3rd Quarter Meeting.',
    description: 'Patuloy na pinatitibay ng Pamahalaang Lungsod ng Tanauan ang kanilang pagsusulong ng mga proyektong maghahatid ng kaunlaran...',
    date: 'Aug 13, 2025',
    image: '', 
  },
  {
    id: 2,
    category: 'Notices',
    title: 'Happy Suplang Senior Citizens\' Day! 🥳👵👴',
    description: 'Sa Lungsod ng Tanauan, kinikilala ng pamahalaang lokal ang mahalagang papel ng senior citizens bilang importanteng sektor ng...',
    date: 'Aug 13, 2025',
    image: '', 
  },
  {
    id: 3,
    category: 'Meetings',
    title: 'Bagong BOT Members, Enrollment Status, Foundation Week Activities, at mga Programa ng Tanauan City College, Tinalakay sa 2025 TCC 5th Board of Trustees Meeting',
    description: 'Sa pangunguna nina TCC BOT Chair Mayor Sonny Perez Collantes at TCC OIC Mr. Jun Goguanco, pormal na kinilala sa 2025 TCC 5th...',
    date: 'Aug 13, 2025',
    image: '', 
  },
  {
    id: 4,
    category: 'Meetings',
    title: '2024 Tanauan City Top 10 Business and Real Property Taxpayers, binigyang-pagkilala ng Tanauan LGU!',
    description: '2024 Tanauan City Top 10 Business and Real Property Taxpayers, binigyang-pagkilala ng Tanauan LGU! Sa pag-unlad ng Lungsod ng...',
    date: 'Jul 16, 2025',
    image: '', 
  },
  {
    id: 5,
    category: 'Advisories',
    title: 'Mas malinis at Ligtas na suplay ng Tubig para sa malusog na mag-aaral!',
    description: 'Mas malinis at Ligtas na suplay ng Tubig para sa malusog na mag-aaral! Malinis at Ligtas na inuming tubig para sa kabataang Tanauan...',
    date: 'Jul 16, 2025',
    image: '', 
  },
  {
    id: 6,
    category: 'Events',
    title: 'Matagumpay na pagbubukas ng School Year 2025-2026 at mga dagdag-programang edukasyon, tinalakay sa 2025 5th Tanauan Local School Board',
    description: 'Matagumpay na pagbubukas ng School Year 2025-2026 at mga dagdag-programang edukasyon, tinalakay sa 2025 5th Tanauan Local School Board...',
    date: 'Jun 25, 2025',
    image: '', 
  },
  {
    id: 7,
    category: 'Advisories',
    title: 'PABATID | LIBRENG FAMILY PLANNING SA PAMILYANG TANAUEÑO!',
    description: 'Alinsunod sa inisyatibo ni Mayor Sonny Perez Collantes katuwang ang Tanauan City Health na paigtingin ang reproductive health at...',
    date: 'Jun 25, 2025',
    image: '', 
  },
  {
    id: 8,
    category: 'Advisories',
    title: 'Local AICS para sa mga Tanaueño at Cash Incentives para sa mga Senior Citizens, muling inihatid ni Mayor Sonny Perez Collantes!',
    description: 'Mula sa regular na implementasyon ng Local AICS sa Lungsod, mas dumami pa ang mga Tanaueñong natulungan ni Mayor Sonny Perez...',
    date: 'Jun 6, 2025',
    image: '', 
  },
];

const categories = [
  { name: 'All', icon: Grid },
  { name: 'Events', icon: Calendar },
  { name: 'Notices', icon: Megaphone },
  { name: 'Advisories', icon: AlertTriangle },
  { name: 'Meetings', icon: Users },
];

export default function AnnouncementsEventsSection() {
  const [activeTab, setActiveTab] = useState('All');

  const filteredItems = activeTab === 'All' 
    ? itemsData 
    : itemsData.filter(item => item.category === activeTab);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Meetings':
        return Users;
      case 'Notices':
        return Megaphone;
      case 'Advisories':
        return AlertTriangle;
      case 'Events':
        return Calendar;
      default:
        return Grid;
    }
  };

  const getCategoryBadgeStyle = (category: string) => {
    switch (category) {
      case 'Meetings':
        return 'bg-emerald-100/90 text-emerald-800 border-emerald-200';
      case 'Notices':
        return 'bg-amber-100/90 text-amber-800 border-amber-200';
      case 'Advisories':
        return 'bg-rose-100/90 text-rose-800 border-rose-200';
      case 'Events':
        return 'bg-sky-100/90 text-sky-800 border-sky-200';
      default:
        return 'bg-gray-100/90 text-gray-800 border-gray-200';
    }
  };

  return (
    <section id="announcements-events" className="relative py-8 px-3 md:px-4 bg-slate-50/50 overflow-hidden">
      
      {/* Background Soft Red Gradient Spot */}
      <div className="absolute -top-16 -left-16 w-64 h-64 bg-red-200/40 rounded-full blur-2xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto z-10">
        
        {/* Compact Header Section */}
        <div className="flex flex-col items-center justify-center text-center mb-6">
          <h2 
            className="text-2xl md:text-3xl font-extrabold text-red-900 tracking-tight"
            style={{ color: '#901c1c', fontWeight: 900 }}
          >
            Announcements & Events
          </h2>
          
          {/* Accent Line Below Header */}
          <div 
            className="w-8 h-1 bg-red-900 rounded-full mt-1.5 mb-2" 
            style={{ backgroundColor: '#901c1c' }} 
          />

          <p className="text-gray-600 max-w-md text-xs font-normal leading-relaxed">
            Stay informed about the latest announcements, events, and important notices from the City Government
          </p>
        </div>

        {/* Compact Filter Navigation Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-1.5 mb-6">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.name;
            return (
              <button
                key={cat.name}
                onClick={() => setActiveTab(cat.name)}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-[11px] font-medium transition-all duration-300 shadow-xs
                  ${isActive 
                    ? 'bg-[#901c1c] text-white shadow-sm shadow-red-900/20 scale-105' 
                    : 'bg-white text-gray-600 hover:bg-rose-50 hover:text-[#901c1c] border border-gray-100'
                  }`}
              >
                <Icon className={`w-3 h-3 ${isActive ? 'text-white' : 'text-gray-500'}`} />
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* 3-Column Grid Container (Compact 3x3 layout style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredItems.map((item) => {
            const CategoryIcon = getCategoryIcon(item.category);

            return (
              <div
                key={item.id}
                className="group bg-white rounded-lg overflow-hidden border border-gray-100 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col hover:-translate-y-0.5"
              >
                {/* Compact Image Container (h-36) */}
                <div className="relative h-36 bg-slate-100 overflow-hidden flex items-center justify-center">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    /* Placeholder UI */
                    <div className="flex flex-col items-center justify-center text-gray-400 group-hover:scale-105 transition-transform duration-500">
                      <CategoryIcon className="w-8 h-8 mb-1 opacity-30" />
                      <span className="text-[9px] font-medium tracking-wide uppercase opacity-50">
                        Image Placeholder
                      </span>
                    </div>
                  )}

                  {/* Category Badge */}
                  <div className="absolute top-2 left-2">
                    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold border backdrop-blur-md shadow-xs ${getCategoryBadgeStyle(item.category)}`}>
                      <CategoryIcon className="w-2.5 h-2.5" />
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-3.5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Compact Title (Line clamped to 2 lines to keep cards uniform and short) */}
                    <h3 className="text-xs font-bold text-gray-900 mb-1.5 group-hover:text-[#901c1c] transition-colors duration-200 leading-snug line-clamp-2">
                      {item.title}
                    </h3>
                    
                    {/* Compact Description */}
                    <p className="text-gray-500 text-[11px] line-clamp-2 mb-2.5 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Footer details & Read More Button */}
                  <div className="pt-2 border-t border-gray-100 flex items-center justify-between mt-auto">
                    <div className="flex items-center text-[10px] text-gray-400 font-medium">
                      <Calendar className="w-2.5 h-2.5 mr-1 text-gray-400" />
                      {item.date}
                    </div>
                    
                    {/* Read More Button */}
                    <button className="flex items-center gap-1 px-2.5 py-1 rounded-md text-[10px] font-semibold text-[#901c1c] bg-rose-50 hover:bg-[#901c1c] hover:text-white transition-all duration-200">
                      Read More 
                      <ArrowRight className="w-2.5 h-2.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Centered "View All Announcements" Button */}
        <div className="flex justify-center mt-6">
          <a
            href="#"
            className="group flex items-center gap-1.5 px-5 py-2 rounded-full text-xs font-bold text-[#901c1c] bg-white border border-rose-200 hover:bg-[#901c1c] hover:text-white transition-all duration-300 shadow-xs hover:shadow-sm hover:scale-105"
          >
            <span>View All Announcements</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>

      </div>
    </section>
  );
}