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
  Sparkles,
  ArrowLeft
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
  content: string[];
  date: string;
  image: string;
}

const itemsData: Item[] = [
  {
    id: 1,
    category: 'Meetings',
    title: 'Estado ng mga pagawaing Bayan sa Lungsod ng Tanauan, tinalakay sa Local Project Monitoring 3rd Quarter Meeting.',
    description: 'Patuloy na pinatitibay ng Pamahalaang Lungsod ng Tanauan ang kanilang pagsusulong ng mga proyektong maghahatid ng kaunlaran at mas mabilis na serbisyo publiko para sa lahat ng Tanaueño.',
    content: [
      'Patuloy na pinatitibay ng Pamahalaang Lungsod ng Tanauan ang kanilang pagsusulong ng mga proyektong maghahatid ng kaunlaran sa komunidad sa pamamagitan ng masusing pagbabantay at regular na pagpupulong para sa monitoring ng mga ito.',
      'Sa pangunguna ni Mayor Sonny Perez Collantes kasama sina TCWCC President Atty. Cristine Collantes at Konsehal Tirso Mercado Oruga katuwang ang City Planning and Development Office (CPDO) sa pamumuno ni Ms. Alssa Leyesa, isinagawa ang Local Project Monitoring 3rd Quarter Meeting upang talakayin ang kasalukuyang estado ng mga pangunahing konstruksyon ng imprastruktura sa ating lungsod.',
      'Kabilang sa mga proyektong tinutukan ay ang Pagtatayo ng Tanauan City Sports Complex para sa pagpapalakas ng sports development, pati na rin ang pagtatayo ng bagong School Buildings sa Luyos National High School at Bernardo Lirio National High School.',
      'Nagbigay rin ng presentasyon ang Department of Public Works and Highways (DPWH) hinggil sa kanilang proyekto sa lungsod kabilang ang Taal Lake Circumferential Road, Road Safety Facilities along Tanauan-Tagaytay Road, at Flood Mitigation Structures sa Brgy. Talaga-Janopol-Wawa-Gonzales.'
    ],
    date: 'Aug 13, 2025',
    image: kip1Img,
  },
  {
    id: 2,
    category: 'Notices',
    title: 'Happy Suplang Senior Citizens\' Day! 🥳👵👴',
    description: 'Sa Lungsod ng Tanauan, kinikilala ng pamahalaang lokal ang mahalagang papel ng senior citizens bilang importanteng sektor ng lipunan.',
    content: [
      'Sa Lungsod ng Tanauan, kinikilala ng pamahalaang lokal ang mahalagang papel ng senior citizens bilang importanteng sektor ng lipunan.',
      'Ginanap ang masayang pagtitipon kasama ang ating mga mahal sa buhay na senior citizens upang ipagdiwang ang kanilang dedikasyon at naging ambag sa ating komunidad sa nakalipas na mga taon.',
      'Nagpaabot din si Mayor Sonny Perez Collantes ng tulong-pinansyal at mga papremyo bilang pasasalamat sa kanilang patuloy na pagsuporta sa mga programa ng pamahalaan.'
    ],
    date: 'Aug 13, 2025',
    image: kip2Img, 
  },
  {
    id: 3,
    category: 'Meetings',
    title: 'Bagong BOT Members, Enrollment Status, Foundation Week Activities, at mga Programa ng Tanauan City College, Tinalakay sa 2025 TCC 5th Board of Trustees Meeting',
    description: 'Sa pangunguna nina TCC BOT Chair Mayor Sonny Perez Collantes at TCC OIC Mr. Jun Goguanco, pormal na kinilala sa 2025 TCC 5th Board of Trustees Meeting.',
    content: [
      'Sa pangunguna nina TCC BOT Chair Mayor Sonny Perez Collantes at TCC OIC Mr. Jun Goguanco, pormal na kinilala sa 2025 TCC 5th Board of Trustees Meeting ang mga bagong opisyal.',
      'Inilatag sa nasabing pagpupulong ang kasalukuyang Enrollment Status ng kolehiyo pati na rin ang mga paghahanda para sa nalalapit na Foundation Week Activities ng Tanauan City College.',
      'Layunin ng mga programang ito na mas maitaas pa ang kalidad ng edukasyon sa lungsod at magbigay ng mas maraming oportunidad sa ating mga kabataang mag-aaral.'
    ],
    date: 'Aug 13, 2025',
    image: kip3Img, 
  },
  {
    id: 4,
    category: 'Meetings',
    title: '2024 Tanauan City Top 10 Business and Real Property Taxpayers, binigyang-pagkilala ng Tanauan LGU!',
    description: 'Sa pag-unlad ng Lungsod ng Tanauan, kinikilala ang patuloy na suporta at kontribusyon ng mga namumuhunan at tax payers.',
    content: [
      'Sa pag-unlad ng Lungsod ng Tanauan, kinikilala ang patuloy na suporta at kontribusyon ng mga namumuhunan at tax payers.',
      'Pormal na pinarangalan ng Pamahalaang Lungsod ang Top 10 Business Taxpayers at Real Property Taxpayers para sa Taong 2024 na malaki ang naging tulong sa pagpapatakbo ng mga pampublikong serbisyo.',
      'Ayon kay Mayor Sonny Perez Collantes, ang bawat pisong nagmumula sa buwis ay direktang ibinabalik sa mamamayan sa pamamagitan ng mga imprastruktura, libreng gamot, at scholarship programs.'
    ],
    date: 'Jul 16, 2025',
    image: kip4Img, 
  },
  {
    id: 5,
    category: 'Advisories',
    title: 'Mas malinis at Ligtas na suplay ng Tubig para sa malusog na mag-aaral!',
    description: 'Malinis at Ligtas na inuming tubig para sa kabataang Tanauan, katuwang ang Pamahalaang Lungsod sa patuloy na inspeksyon.',
    content: [
      'Malinis at Ligtas na inuming tubig para sa kabataang Tanauan, katuwang ang Pamahalaang Lungsod sa patuloy na inspeksyon.',
      'Isinagawa ng City Health Office ang inspeksyon sa mga water refilling stations at drinking fountains sa iba\'t ibang pampublikong paaralan sa lungsod.',
      'Ito ay upang masiguro na malayo sa anumang sakit ang ating mga mag-aaral ngayong nagpapatuloy ang klase.'
    ],
    date: 'Jul 16, 2025',
    image: kip5Img, 
  },
  {
    id: 6,
    category: 'Events',
    title: 'Matagumpay na pagbubukas ng School Year 2025-2026 at mga dagdag-programang edukasyon, tinalakay sa 2025 5th Tanauan Local School Board',
    description: 'Tinalakay sa 2025 5th Tanauan Local School Board ang pagpapatayo ng karagdagang pasilidad at tulong-pinansyal.',
    content: [
      'Tinalakay sa 2025 5th Tanauan Local School Board ang pagpapatayo ng karagdagang pasilidad at tulong-pinansyal para sa pagbubukas ng School Year 2025-2026.',
      'Pinag-aralan din ang paglalaan ng pondo para sa karagdagang instructional materials at pagsasaayos ng mga silid-aralan sa malalayong barangay.'
    ],
    date: 'Jun 25, 2025',
    image: kip6Img, 
  },
  {
    id: 7,
    category: 'Advisories',
    title: 'PABATID | LIBRENG FAMILY PLANNING SA PAMILYANG TANAUEÑO!',
    description: 'Alinsunod sa inisyatibo ni Mayor Sonny Perez Collantes katuwang ang Tanauan City Health na paigtingin ang reproductive health.',
    content: [
      'Alinsunod sa inisyatibo ni Mayor Sonny Perez Collantes katuwang ang Tanauan City Health na paigtingin ang reproductive health.',
      'Magkakaroon ng libreng konsultasyon, counseling, at mga kagamitan sa family planning para sa lahat ng mga residente sa darating na linggo sa City Health Center.'
    ],
    date: 'Jun 25, 2025',
    image: kip7Img, 
  },
  {
    id: 8,
    category: 'Advisories',
    title: 'Local AICS para sa mga Tanaueño at Cash Incentives para sa mga Senior Citizens, muling inihatid ni Mayor Sonny Perez Collantes!',
    description: 'Mula sa regular na implementasyon ng Local AICS sa Lungsod, mas dumami pa ang mga Tanaueñong natulungan.',
    content: [
      'Mula sa regular na implementasyon ng Local AICS sa Lungsod, mas dumami pa ang mga Tanaueñong natulungan.',
      'Ipinamahagi ang financial assistance para sa pampagamot, libing, at pang-araw-araw na pangangailangan ng ating mga kababayan sa Covered Court ng Gymnasium.'
    ],
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
  const [currentPage, setCurrentPage] = useState(1);

  const filteredItems = itemsData.filter((item) => {
    const matchesTab = activeTab === 'All' || item.category === activeTab;
    const matchesSearch = 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const itemsPerPage = 3;
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedItems = filteredItems.slice(startIndex, endIndex);

  // Reset to page 1 when filters change
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setCurrentPage(1);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  return (
    <section 
      id="announcements-events" 
      className="relative py-12 px-4 md:px-8 bg-slate-50 overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#901c1c]/10 text-[#901c1c] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              Official Portal Updates
            </div>
            <h2 className="gradient-text !text-3xl md:!text-4xl font-black tracking-tight">
              News & Announcements
            </h2>
          </div>
          <p className="text-slate-600 max-w-md text-xs md:text-sm">
            Stay informed with the latest updates, advisories, and official meetings from the City Government of Tanauan.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6 bg-white p-2 rounded-2xl shadow-sm border border-slate-200/80">
          <div className="flex flex-wrap items-center gap-1 w-full md:w-auto">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeTab === cat.name;
              return (
                <button
                  type="button"
                  key={cat.name}
                  onClick={() => handleTabChange(cat.name)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer
                    ${isActive 
                      ? 'bg-[#901c1c] text-white shadow-md shadow-red-900/20' 
                      : 'text-slate-600 hover:bg-slate-100'
                    }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {cat.name}
                </button>
              );
            })}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search updates..."
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="w-full pl-10 pr-8 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#901c1c]/20 focus:border-[#901c1c] transition-all"
            />
            {searchQuery && (
              <button 
                type="button"
                onClick={() => handleSearchChange('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Content Section */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 shadow-sm">
            <p className="text-slate-500 text-sm font-medium">No announcements found matching your filter.</p>
            <button 
              type="button"
              onClick={() => { handleTabChange('All'); handleSearchChange(''); }}
              className="mt-3 text-xs font-bold text-[#901c1c] hover:underline cursor-pointer"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
              {paginatedItems.map((item) => (
                <div
                  key={item.id}
                  className="group bg-white rounded-lg overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
                >
                  <div className="relative h-24 sm:h-28 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                    <span className="absolute top-1.5 left-1.5 bg-white/90 backdrop-blur-md text-[#901c1c] px-1.5 py-0.5 rounded-full text-[12px] font-bold shadow-sm">
                      {item.category}
                    </span>
                  </div>

                  <div className="p-2.5 flex flex-col flex-1">
                    <div className="flex items-center gap-1 text-[14px] text-slate-400 font-medium mb-0.5">
                      <Calendar className="w-3 h-3 text-[#901c1c]" />
                      {item.date}
                    </div>

                    <h3 className="text-[18px] font-bold text-slate-900 leading-snug mb-0.5 line-clamp-2 group-hover:text-[#901c1c] transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-[14px] text-slate-600 leading-relaxed line-clamp-2 flex-1">
                      {item.description}
                    </p>

                    <div className="mt-1.5 pt-1.5 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-[14px] font-semibold text-[#901c1c] group-hover:underline">
                        Read More
                      </span>
                      <ArrowRight className="w-2 h-2 text-[#901c1c] group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 mt-6">
                <button
                  type="button"
                  onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer"
                >
                  <ArrowLeft className="w-3 h-3" />
                  Previous
                </button>

                <div className="flex items-center gap-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      type="button"
                      onClick={() => setCurrentPage(page)}
                      className={`w-8 h-8 rounded-md text-[11px] font-bold transition-all cursor-pointer
                        ${currentPage === page
                          ? 'bg-[#901c1c] text-white shadow-md shadow-red-900/20'
                          : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                        }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                  disabled={currentPage === totalPages}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer"
                >
                  Next
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}