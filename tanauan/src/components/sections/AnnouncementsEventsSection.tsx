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
  Clock,
  Sparkles,
  ChevronRight,
  ArrowLeft,
  Share2
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
  
  const [currentView, setCurrentView] = useState<'home' | 'detail'>('home');
  const [activeArticle, setActiveArticle] = useState<Item>(itemsData[0]);
  const [featuredId, setFeaturedId] = useState<number>(itemsData[0]?.id || 1);

  const filteredItems = itemsData.filter((item) => {
    const matchesTab = activeTab === 'All' || item.category === activeTab;
    const matchesSearch = 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const featuredItem = filteredItems.find(i => i.id === featuredId) || filteredItems[0];
  const sideItems = filteredItems.filter(i => i.id !== featuredItem?.id);

  const scrollToSection = () => {
    const sectionElement = document.getElementById('announcements-events');
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenArticle = (e: React.MouseEvent, item: Item) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveArticle(item);
    setCurrentView('detail');
    scrollToSection();
  };

  const handleBackToHome = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentView('home');
    scrollToSection();
  };

  /* FULL DEDICATED ARTICLE VIEW */
  if (currentView === 'detail' && activeArticle) {
    const otherNews = itemsData.filter(i => i.id !== activeArticle.id);

    return (
      <section id="announcements-events" className="min-h-screen bg-slate-100/70 py-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          
          {/* Breadcrumb Navigation */}
          <div className="flex items-center justify-between mb-6 border-b border-slate-200 pb-4">
            <button
              type="button"
              onClick={handleBackToHome}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 text-xs font-bold text-[#901c1c] hover:bg-rose-50 transition-all shadow-xs cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to News
            </button>

            <div className="flex items-center gap-2 text-xs text-[#901c1c] font-medium">
              <span className="text-slate-500">Home</span>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-slate-500">News</span>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="font-bold truncate max-w-[200px] md:max-w-xs">
                {activeArticle.category}
              </span>
            </div>
          </div>

          {/* Main Layout Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative">
            
            {/* Article Content */}
            <article className="lg:col-span-8 bg-white p-6 md:p-10 rounded-3xl border border-slate-200/80 shadow-sm">
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#901c1c] text-white">
                  {activeArticle.category}
                </span>
                <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                  <Calendar className="w-3.5 h-3.5 text-[#901c1c]" />
                  {activeArticle.date}
                </div>
              </div>

              <h1 className="text-xl md:text-3xl font-extrabold text-slate-900 leading-snug mb-6">
                {activeArticle.title}
              </h1>

              <div className="relative w-full h-72 sm:h-96 rounded-2xl overflow-hidden mb-8 bg-slate-900 shadow-inner">
                <img 
                  src={activeArticle.image} 
                  alt={activeArticle.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-4 text-slate-700 text-sm md:text-base leading-relaxed font-normal">
                {activeArticle.content.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-10 pt-6 border-t border-slate-100 flex items-center justify-between">
                <button 
                  type="button"
                  onClick={handleBackToHome}
                  className="text-xs font-bold text-[#901c1c] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  ← Back to main updates
                </button>
                <button 
                  type="button"
                  onClick={() => navigator.clipboard.writeText(window.location.href)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-800 cursor-pointer"
                >
                  <Share2 className="w-3.5 h-3.5" /> Share Article
                </button>
              </div>
            </article>

            {/* Fixed Sticky Sidebar Layout */}
            <aside className="lg:col-span-4 sticky top-6 h-[calc(100vh-3rem)] flex flex-col gap-4">
              
              {/* Top Card: Scrollable List */}
              <div className="bg-white rounded-3xl border border-slate-200/80 overflow-hidden shadow-sm flex flex-col flex-1 min-h-0">
                <div className="bg-[#901c1c] text-white px-5 py-4 flex items-center gap-2 shrink-0">
                  <Megaphone className="w-4 h-4" />
                  <h3 className="text-sm font-bold tracking-wide">Latest Updates</h3>
                </div>

                <div className="p-4 divide-y divide-slate-100 overflow-y-auto flex-1">
                  {otherNews.slice(0, 5).map((news) => (
                    <div 
                      key={news.id}
                      onClick={(e) => handleOpenArticle(e, news)}
                      className="py-3.5 first:pt-1 last:pb-1 group cursor-pointer flex gap-3 items-center hover:bg-slate-50 rounded-xl px-2 transition-colors"
                    >
                      <img 
                        src={news.image} 
                        alt={news.title}
                        className="w-16 h-16 rounded-xl object-cover shrink-0" 
                      />
                      <div className="min-w-0 flex-1">
                        <h4 className="text-xs font-bold text-slate-800 group-hover:text-[#901c1c] transition-colors line-clamp-2 leading-snug">
                          {news.title}
                        </h4>
                        <span className="text-[10px] text-slate-400 mt-1 block">
                          {news.date}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Fixed Button */}
              <button 
                type="button"
                onClick={handleBackToHome}
                className="w-full bg-slate-900 hover:bg-slate-800 text-white p-4 rounded-2xl flex items-center justify-between transition-colors shadow-sm group cursor-pointer shrink-0"
              >
                <div className="text-left">
                  <span className="block text-xs font-bold">Back to Homepage</span>
                  <span className="block text-[10px] text-slate-400">Return to main section</span>
                </div>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

            </aside>

          </div>
        </div>
      </section>
    );
  }

  /* OVERVIEW SECTION VIEW */
  return (
    <section 
      id="announcements-events" 
      className="relative py-16 px-4 md:px-8 bg-slate-50 overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#901c1c]/10 text-[#901c1c] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              Official Portal Updates
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              News & Announcements
            </h2>
          </div>
          <p className="text-slate-600 max-w-md text-xs md:text-sm">
            Stay informed with the latest updates, advisories, and official meetings from the City Government of Tanauan.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 bg-white p-2 rounded-2xl shadow-sm border border-slate-200/80">
          <div className="flex flex-wrap items-center gap-1 w-full md:w-auto">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeTab === cat.name;
              return (
                <button
                  type="button"
                  key={cat.name}
                  onClick={() => setActiveTab(cat.name)}
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
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-8 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#901c1c]/20 focus:border-[#901c1c] transition-all"
            />
            {searchQuery && (
              <button 
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Content Section */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 shadow-sm">
            <p className="text-slate-500 text-sm font-medium">No announcements found matching your filter.</p>
            <button 
              type="button"
              onClick={() => { setActiveTab('All'); setSearchQuery(''); }}
              className="mt-3 text-xs font-bold text-[#901c1c] hover:underline cursor-pointer"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative">
            
            {/* Featured Card */}
            {featuredItem && (
              <div 
                className="lg:col-span-7 bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div 
                  onClick={(e) => handleOpenArticle(e, featuredItem)}
                  className="relative h-72 sm:h-80 md:h-96 overflow-hidden cursor-pointer group"
                >
                  <img
                    src={featuredItem.image}
                    alt={featuredItem.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
                  
                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-[#901c1c] px-3.5 py-1 rounded-full text-xs font-bold shadow-sm">
                    {featuredItem.category}
                  </span>

                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <div className="flex items-center gap-1.5 text-xs text-slate-300 mb-2">
                      <Clock className="w-3.5 h-3.5" />
                      {featuredItem.date}
                    </div>
                    <h3 className="text-lg md:text-xl font-bold leading-snug line-clamp-2 group-hover:text-red-200 transition-colors">
                      {featuredItem.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6 flex items-center justify-between bg-white border-t border-slate-100">
                  <p className="text-slate-600 text-xs md:text-sm line-clamp-2 max-w-xl">
                    {featuredItem.description}
                  </p>
                  <button 
                    type="button"
                    onClick={(e) => handleOpenArticle(e, featuredItem)}
                    className="shrink-0 ml-4 px-4 py-2 rounded-xl bg-[#901c1c] text-white text-xs font-semibold hover:bg-red-800 transition-colors flex items-center gap-1.5 shadow-sm cursor-pointer"
                  >
                    Read Full
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {/* Scrollable Right Side List */}
            <div className="lg:col-span-5 flex flex-col sticky top-6 max-h-[calc(100vh-3rem)] overflow-y-auto">
              <div className="flex items-center justify-between mb-3 px-1">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  More Updates ({sideItems.length})
                </span>
                <span className="text-[11px] text-slate-400">Click to preview</span>
              </div>

              <div className="space-y-3 pr-1">
                {sideItems.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setFeaturedId(item.id)}
                    className="group cursor-pointer bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-2xs hover:border-red-200 hover:shadow-md transition-all duration-200 flex gap-3.5 items-center"
                  >
                    <div className="relative w-20 h-20 shrink-0 rounded-xl overflow-hidden bg-slate-100">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-bold text-[#901c1c] uppercase tracking-wider">
                          {item.category}
                        </span>
                        <span className="text-slate-300">•</span>
                        <span className="text-[11px] text-slate-400">{item.date}</span>
                      </div>

                      <h4 className="text-xs font-bold text-slate-800 group-hover:text-[#901c1c] transition-colors line-clamp-2 leading-snug">
                        {item.title}
                      </h4>
                    </div>

                    <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-[#901c1c] group-hover:translate-x-0.5 transition-all shrink-0" />
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}