import { useState } from 'react';
import { 
  Calendar, 
  Megaphone, 
  AlertTriangle, 
  Users, 
  ArrowRight, 
  Grid,
  Search,
  X,
  Eye,
  Clock
} from 'lucide-react';

// Image imports
import kip1Img from '../../assets/sections/AnnouncementsES/Kip1.jpg';
import kip2Img from '../../assets/sections/AnnouncementsES/Kip2.jpg';
import kip3Img from '../../assets/sections/AnnouncementsES/Kip3.jpg';
import kip4Img from '../../assets/sections/AnnouncementsES/Kip4.jpg';
import kip5Img from '../../assets/sections/AnnouncementsES/Kip5.jpg';
import kip6Img from '../../assets/sections/AnnouncementsES/Kip6.jpg';
import kip7Img from '../../assets/sections/AnnouncementsES/Kip7.jpg';
import kip8Img from '../../assets/sections/AnnouncementsES/Kip8.jpg';

interface Item {
  id: number;
  category: string;
  title: string;
  description: string;
  date: string;
  image: string;
}

const itemsData: Item[] = [
  {
    id: 1,
    category: 'Meetings',
    title: 'Estado ng mga pagawaing Bayan sa Lungsod ng Tanauan, tinalakay sa Local Project Monitoring 3rd Quarter Meeting.',
    description: 'Patuloy na pinatitibay ng Pamahalaang Lungsod ng Tanauan ang kanilang pagsusulong ng mga proyektong maghahatid ng kaunlaran at mas mabilis na serbisyo publiko para sa lahat ng Tanaueño.',
    date: 'Aug 13, 2025',
    image: kip1Img,
  },
  {
    id: 2,
    category: 'Notices',
    title: 'Happy Suplang Senior Citizens\' Day! 🥳👵👴',
    description: 'Sa Lungsod ng Tanauan, kinikilala ng pamahalaang lokal ang mahalagang papel ng senior citizens bilang importanteng sektor ng lipunan.',
    date: 'Aug 13, 2025',
    image: kip2Img, 
  },
  {
    id: 3,
    category: 'Meetings',
    title: 'Bagong BOT Members, Enrollment Status, Foundation Week Activities, at mga Programa ng Tanauan City College, Tinalakay sa 2025 TCC 5th Board of Trustees Meeting',
    description: 'Sa pangunguna nina TCC BOT Chair Mayor Sonny Perez Collantes at TCC OIC Mr. Jun Goguanco, pormal na kinilala sa 2025 TCC 5th Board of Trustees Meeting.',
    date: 'Aug 13, 2025',
    image: kip3Img, 
  },
  {
    id: 4,
    category: 'Meetings',
    title: '2024 Tanauan City Top 10 Business and Real Property Taxpayers, binigyang-pagkilala ng Tanauan LGU!',
    description: 'Sa pag-unlad ng Lungsod ng Tanauan, kinikilala ang patuloy na suporta at kontribusyon ng mga namumuhunan at tax payers.',
    date: 'Jul 16, 2025',
    image: kip4Img, 
  },
  {
    id: 5,
    category: 'Advisories',
    title: 'Mas malinis at Ligtas na suplay ng Tubig para sa malusog na mag-aaral!',
    description: 'Malinis at Ligtas na inuming tubig para sa kabataang Tanauan, katuwang ang Pamahalaang Lungsod sa patuloy na inspeksyon.',
    date: 'Jul 16, 2025',
    image: kip5Img, 
  },
  {
    id: 6,
    category: 'Events',
    title: 'Matagumpay na pagbubukas ng School Year 2025-2026 at mga dagdag-programang edukasyon, tinalakay sa 2025 5th Tanauan Local School Board',
    description: 'Tinalakay sa 2025 5th Tanauan Local School Board ang pagpapatayo ng karagdagang pasilidad at tulong-pinansyal.',
    date: 'Jun 25, 2025',
    image: kip6Img, 
  },
  {
    id: 7,
    category: 'Advisories',
    title: 'PABATID | LIBRENG FAMILY PLANNING SA PAMILYANG TANAUEÑO!',
    description: 'Alinsunod sa inisyatibo ni Mayor Sonny Perez Collantes katuwang ang Tanauan City Health na paigtingin ang reproductive health.',
    date: 'Jun 25, 2025',
    image: kip7Img, 
  },
  {
    id: 8,
    category: 'Advisories',
    title: 'Local AICS para sa mga Tanaueño at Cash Incentives para sa mga Senior Citizens, muling inihatid ni Mayor Sonny Perez Collantes!',
    description: 'Mula sa regular na implementasyon ng Local AICS sa Lungsod, mas dumami pa ang mga Tanaueñong natulungan.',
    date: 'Jun 6, 2025',
    image: kip8Img, 
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
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  const filteredItems = itemsData.filter((item) => {
    const matchesTab = activeTab === 'All' || item.category === activeTab;
    const matchesSearch = 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Meetings': return Users;
      case 'Notices': return Megaphone;
      case 'Advisories': return AlertTriangle;
      case 'Events': return Calendar;
      default: return Grid;
    }
  };

  const getCategoryBadgeStyle = (category: string) => {
    switch (category) {
      case 'Meetings': return 'bg-emerald-600/90 text-white border-emerald-400/30';
      case 'Notices': return 'bg-amber-600/90 text-white border-amber-400/30';
      case 'Advisories': return 'bg-rose-600/90 text-white border-rose-400/30';
      case 'Events': return 'bg-sky-600/90 text-white border-sky-400/30';
      default: return 'bg-gray-600/90 text-white border-gray-400/30';
    }
  };

  return (
    <section 
      id="announcements-events" 
      className="relative py-14 px-4 md:px-6 bg-gradient-to-b from-[#fdf2f2] via-[#fcf5f5] to-[#f8eaeae6] overflow-hidden"
    >
      {/* Tanauan Red Themed Faded Glow Accents */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#901c1c]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#901c1c]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle Faded Diagonal Line Background Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#901c1c 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="relative max-w-6xl mx-auto z-10">
        
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center text-center mb-8">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#901c1c]/10 text-[#901c1c] border border-[#901c1c]/20 mb-3 shadow-xs">
            <Megaphone className="w-3.5 h-3.5" />
            Stay Updated
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#901c1c] tracking-tight drop-shadow-xs">
            Announcements & Events
          </h2>
          <div className="w-16 h-1 bg-[#901c1c] rounded-full mt-2.5 mb-3 shadow-xs" />
          <p className="text-gray-700 max-w-md text-xs md:text-sm font-medium leading-relaxed">
            Latest official news, advisories, and upcoming city activities from the Tanauan City Government.
          </p>
        </div>

        {/* Search & Navigation Bar Container */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 bg-white/90 p-2.5 rounded-2xl border border-rose-100 shadow-md backdrop-blur-md">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto justify-center">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeTab === cat.name;
              return (
                <button
                  key={cat.name}
                  onClick={() => setActiveTab(cat.name)}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-300
                    ${isActive 
                      ? 'bg-[#901c1c] text-white shadow-md shadow-red-900/30 scale-105' 
                      : 'bg-transparent text-gray-700 hover:bg-rose-50 hover:text-[#901c1c]'
                    }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-gray-500'}`} />
                  {cat.name}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search news & updates..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-8 py-1.5 text-xs bg-rose-50/50 border border-rose-200/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#901c1c]/30 focus:border-[#901c1c] transition-all"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Uniform 3-Column Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-12 bg-white/80 rounded-2xl border border-rose-100 shadow-xs backdrop-blur-sm">
            <p className="text-gray-600 text-sm font-medium">No announcements found matching your filter.</p>
            <button 
              onClick={() => { setActiveTab('All'); setSearchQuery(''); }}
              className="mt-3 text-xs font-bold text-[#901c1c] underline hover:text-red-800"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredItems.map((item) => {
              const CategoryIcon = getCategoryIcon(item.category);

              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedItem(item)}
                  className="group cursor-pointer bg-white/95 rounded-2xl overflow-hidden border border-rose-100/80 shadow-sm hover:shadow-xl hover:border-rose-200 transition-all duration-300 flex flex-col hover:-translate-y-1 backdrop-blur-xs"
                >
                  {/* Image Container */}
                  <div className="relative h-44 bg-slate-100 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                    />
                    
                    {/* Dark gradient overlay for badge readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                    {/* Category Badge */}
                    <div className="absolute top-3 left-3">
                      <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[10px] font-bold border backdrop-blur-md shadow-sm ${getCategoryBadgeStyle(item.category)}`}>
                        <CategoryIcon className="w-3 h-3" />
                        {item.category}
                      </span>
                    </div>

                    {/* Quick View Hover Effect */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#901c1c]/20 backdrop-blur-[2px]">
                      <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white text-gray-900 text-xs font-semibold shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                        <Eye className="w-3.5 h-3.5 text-[#901c1c]" /> Quick View
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      {/* COMPLETE TITLE (No cut-off or line clamping) */}
                      <h3 className="text-xs md:text-sm font-bold text-gray-900 group-hover:text-[#901c1c] transition-colors leading-snug mb-2">
                        {item.title}
                      </h3>

                      {/* TRUNCATED DESCRIPTION (uses ... if exceeding 2 lines) */}
                      <p className="text-xs text-gray-500 leading-relaxed line-clamp-2 mb-4 overflow-hidden text-ellipsis">
                        {item.description}
                      </p>
                    </div>

                    {/* Card Footer */}
                    <div className="pt-3 border-t border-rose-100/60 flex items-center justify-between mt-auto">
                      <div className="flex items-center text-[11px] text-gray-400 font-medium">
                        <Clock className="w-3 h-3 mr-1 text-gray-400" />
                        {item.date}
                      </div>

                      <span className="flex items-center gap-1 text-[11px] font-bold text-[#901c1c] group-hover:translate-x-1 transition-transform">
                        Read Story
                        <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* View All Button */}
        <div className="flex justify-center mt-10">
          <a
            href="#"
            className="group flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold text-white bg-[#901c1c] hover:bg-[#721515] transition-all duration-300 shadow-md hover:shadow-xl hover:scale-105"
          >
            <span>View All Announcements</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>

      </div>

      {/* Modal Preview for Full Details */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setSelectedItem(null)}
        >
          <div 
            className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-rose-100 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-3 right-3 z-10 bg-black/50 hover:bg-black/70 text-white p-1.5 rounded-full transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Modal Image */}
            <div className="relative h-56 bg-slate-900">
              <img 
                src={selectedItem.image} 
                alt={selectedItem.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3">
                <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-bold border ${getCategoryBadgeStyle(selectedItem.category)}`}>
                  {selectedItem.category}
                </span>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <div className="flex items-center text-xs text-gray-400 font-medium mb-2">
                <Calendar className="w-3.5 h-3.5 mr-1 text-[#901c1c]" />
                {selectedItem.date}
              </div>

              <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3 leading-snug">
                {selectedItem.title}
              </h3>

              <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-6">
                {selectedItem.description}
              </p>

              <div className="flex justify-end gap-2">
                <button
                  onClick={() => setSelectedItem(null)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-gray-600 hover:bg-rose-50 transition-colors"
                >
                  Close
                </button>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-[#901c1c] hover:bg-[#721515] transition-colors shadow-xs"
                >
                  Full Article
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}