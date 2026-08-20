import { useState } from "react";
import Footer from '../layout/Footer';

interface NewsItem {
  id: number;
  badge: string;
  title: string;
  date: string;
  imageUrl: string;
  excerpt: string;
  fullContent?: string;
} 

export default function TransparencyPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [activeModalNews, setActiveModalNews] = useState<NewsItem | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const newsItems: NewsItem[] = [
    {
      id: 1,
      badge: "News",
      title: "Mabuhay ang mga Bagong kasal!",
      date: "Jun 11, 2026",
      imageUrl: "/src/assets/sections/Home/LatestNews/latestnews_photo1.jpg",
      excerpt: "Matagumpay at masayang pinasinayaan ng ating Punong Lungsod Sonny Perez Collantes ang pag-iisang dibdib ng ating mga kababayan...",
      fullContent: "Matagumpay at masayang pinasinayaan ng ating Punong Lungsod Sonny Perez Collantes ang pag-iisang dibdib ng ating mga kababayan sa isinagawang mass wedding ceremony. Naging saksi ang buong pamahalaan sa pag-iibigan at simula ng bagong yugto ng pamilya ng mga bagong kasal. Nagpaabot din ang LGU ng mga espesyal na regalo at suporta para sa kanilang pagsisimula."
    },
    {
      id: 2,
      badge: "News",
      title: "Local AICS pasa sa mga Tanaueno at Senior Citizens' Cash Incentive...",
      date: "Jun 11, 2026",
      imageUrl: "/src/assets/sections/Home/LatestNews/latestnews_photo2.jpg",
      excerpt: "Mula sa regular na implementasyon ng Local AICS sa Lungsod, mas dumami pa ang mga Tanaueñong natulungan nina Mayor Sonny...",
      fullContent: "Mula sa regular na implementasyon ng Local AICS sa Lungsod, mas dumami pa ang mga Tanaueñong natulungan nina Mayor Sonny Perez Collantes. Kasabay rin nito ang pamamahagi ng Cash Incentives para sa ating mga minamahal na Senior Citizens upang masuportahan ang kanilang pang-araw-araw na pangangailangan at kalusugan."
    },
    {
      id: 3,
      badge: "News",
      title: "Ngayon sa Tanauan, agarang natutugunan ang pangangailanga...",
      date: "Jun 11, 2026",
      imageUrl: "/src/assets/sections/Home/LatestNews/latestnews_photo3.jpg",
      excerpt: "Tuwing Huwebes, hindi matatawaran ang dami ng mga Tanaueñong lumalapit sa Tanggapan ng mga Mamamayan para humingi ng tulong...",
      fullContent: "Tuwing Huwebes, hindi matatawaran ang dami ng mga Tanaueñong lumalapit sa Tanggapan ng mga Mamamayan para humingi ng tulong medikal at pinansyal. Sa pamamagitan ng direktang aksyon ng lokal na pamahalaan, agarang naipapaabot ang tulong sa mga pamilyang nangangailangan."
    },
    {
      id: 4,
      badge: "News",
      title: "Free Eye Check-up Medical Mission, muling inihatid para sa mga...",
      date: "Jun 11, 2026",
      imageUrl: "/src/assets/sections/Home/LatestNews/latestnews_photo1.jpg",
      excerpt: "Patuloy ang pagpapaigting ng serbisyong pangkalusugan ng Pamahalaang Lungsod ng Tanauan sa pamamagitan ng isinasagawa...",
      fullContent: "Patuloy ang pagpapaigting ng serbisyong pangkalusugan ng Pamahalaang Lungsod ng Tanauan sa pamamagitan ng isinasagawang Libreng Eye Check-up at pamamahagi ng salamin para sa mga residenteng may problema sa paningin. Daan-daang mamamayan na naman ang nakinabang sa programang ito."
    },
    {
      id: 5,
      badge: "News",
      title: "Oathtaking ng mga Newly-hired at Promoted na mga Guro,...",
      date: "Jun 10, 2026",
      imageUrl: "/src/assets/sections/Home/LatestNews/latestnews_photo4.jpg",
      excerpt: "Sa pangunguna ni Mayor Sonny Perez Collantes ay pormal nang nanumpa sa kanilang katungkulan ang mga newly-hired at promoted...",
      fullContent: "Sa pangunguna ni Mayor Sonny Perez Collantes ay pormal nang nanumpa sa kanilang katungkulan ang mga newly-hired at promoted na mga guro sa Lungsod ng Tanauan. Hinimok sila ng Punong Lungsod na magpatuloy sa pagbibigay ng de-kalidad na edukasyon sa kabataang Tanaueno."
    },
    {
      id: 6,
      badge: "News",
      title: "Tanauan City Development Full Council Meeting",
      date: "Jun 10, 2026",
      imageUrl: "/src/assets/sections/Home/LatestNews/latestnews_photo2.jpg",
      excerpt: "Sa patuloy na pagsulong ng kaunlaran sa Lungsod ng Tanauan, matagumpay na isinagawa ngayong araw ang City Development Me...",
      fullContent: "Sa patuloy na pagsulong ng kaunlaran sa Lungsod ng Tanauan, matagumpay na isinagawa ngayong araw ang City Development Full Council Meeting. Tinalakay dito ang mga susunod na proyektong pang-imprastruktura, pangkabuhayan, at mga estratehiya para sa mas maunlad na komunidad."
    },
    {
      id: 7,
      badge: "News",
      title: "Programa sa kalusugan para sa lahat ng mamamayan",
      date: "January 10, 2027",
      imageUrl: "/src/assets/sections/Home/LatestNews/latestnews_photo3.jpg",
      excerpt: "Isang malawakang programa sa kalusugan ang inilunsad upang matiyak na ang bawat pamilya ay may access sa libreng gamot...",
      fullContent: "Isang malawakang programa sa kalusugan ang inilunsad upang matiyak na ang bawat pamilya ay may access sa libreng gamot at konsultasyon sa mga pampublikong klinika sa buong lungsod."
    },
    {
      id: 8,
      badge: "News",
      title: "Pagpapaganda ng mga public works at pasilidad",
      date: "February 04, 2027",
      imageUrl: "/src/assets/sections/Home/LatestNews/latestnews_photo4.jpg",
      excerpt: "Sinimulan na ang rehabilitasyon ng mga pangunahing daanan at pampublikong pasilidad sa iba't ibang barangay...",
      fullContent: "Sinimulan na ang rehabilitasyon ng mga pangunahing daanan at pampublikong pasilidad sa iba't ibang barangay upang masiguro ang ligtas at maayos na daloy ng trapiko at transportasyon."
    },
    {
      id: 9,
      badge: "News",
      title: "Araw ng Parangal sa mga natatanging mamamayan",
      date: "March 20, 2027",
      imageUrl: "/src/assets/sections/Home/LatestNews/latestnews_photo1.jpg",
      excerpt: "Kinilala ng Pamahalaang Lungsod ang mga indibidwal na nagbigay ng karangalan at natatanging kontribusyon...",
      fullContent: "Kinilala ng Pamahalaang Lungsod ang mga indibidwal na nagbigay ng karangalan at natatanging kontribusyon sa iba't ibang larangan ng sining, edukasyon, at pampublikong paglilingkod."
    }
  ];

  const handlePageChange = (page: number) => {
    setIsLoading(true);
    setCurrentPage(page);
    window.scrollTo({ top: 400, behavior: 'smooth' });
    setTimeout(() => setIsLoading(false), 350);
  };

  const handleFilterChange = (category: string) => {
    setIsLoading(true);
    setSelectedCategory(category);
    setCurrentPage(1);
    setTimeout(() => setIsLoading(false), 350);
  };

  const handleSearchChange = (query: string) => {
    setIsLoading(true);
    setSearchQuery(query);
    setCurrentPage(1);
    setTimeout(() => setIsLoading(false), 350);
  };

  const filteredItems = newsItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All Categories" || item.badge === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const itemsPerPage = 6;
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage) || 1;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredItems.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 pt-36 md:pt-31">
      
      {/* Overhauled Hero Section */}
      <section className="relative w-full py-16 px-4 bg-gradient-to-b from-slate-100 via-slate-50 to-white flex items-center justify-center overflow-hidden border-b border-gray-100">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#a31d1d_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-[#a31d1d] text-xs font-bold uppercase tracking-widest mb-4 shadow-sm">
            City Bulletin & Press Releases
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight mb-4">
            Tanauan City <span className="text-[#a31d1d]">News</span>
          </h1>
          <div className="w-24 h-1.5 bg-[#a31d1d] mx-auto mb-6 rounded-full shadow-sm"></div>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-normal">
            Stay informed with the latest updates, official announcements, and community developments from the City of Innovation and Progress.
          </p>
        </div>
      </section>

      {/* Main Grid Section */}
      <section id="latest-news" className="w-full bg-slate-50/50 py-12 px-4 md:px-12 relative flex-1">
        <div className="max-w-7xl mx-auto">

          {/* Overhauled Search and Filter Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10 bg-white p-5 rounded-2xl shadow-sm border border-gray-200/80">
            <div className="relative w-full md:w-96">
              <input
                type="text"
                placeholder="Search news articles..."
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#a31d1d] focus:bg-white transition-all"
              />
              <svg className="w-5 h-5 text-gray-400 absolute left-3.5 top-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            <div className="w-full md:w-auto">
              <select
                value={selectedCategory}
                onChange={(e) => handleFilterChange(e.target.value)}
                className="w-full md:w-52 py-3 px-4 bg-gray-50/50 border border-gray-200 rounded-xl text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#a31d1d] focus:bg-white transition-all cursor-pointer"
              >
                <option value="All Categories">All Categories</option>
                <option value="News">News</option>
              </select>
            </div>
          </div>

          {/* 3-Column Cards Grid or Skeleton Loader */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 min-h-[420px]">
            {isLoading ? (
              Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden flex flex-col justify-between animate-pulse">
                  <div>
                    <div className="h-52 bg-gray-200 w-full"></div>
                    <div className="p-6">
                      <div className="h-3 bg-gray-200 rounded w-1/4 mb-3"></div>
                      <div className="h-5 bg-gray-200 rounded w-full mb-2"></div>
                      <div className="h-5 bg-gray-200 rounded w-3/4 mb-4"></div>
                      <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
                      <div className="h-3 bg-gray-200 rounded w-2/3"></div>
                    </div>
                  </div>
                  <div className="px-6 pb-6">
                    <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                  </div>
                </div>
              ))
            ) : currentItems.length > 0 ? (
              currentItems.map((news) => (
                <div 
                  key={news.id} 
                  onClick={() => setActiveModalNews(news)}
                  className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-[0_12px_30px_-10px_rgba(163,29,29,0.12)] hover:border-red-200 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col justify-between cursor-pointer group"
                >
                  <div>
                    {/* Card Image with Floating Badge */}
                    <div className="relative h-56 bg-gray-100 overflow-hidden">
                      <img
                        src={news.imageUrl}
                        alt={news.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-gray-900/80 backdrop-blur-md text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                          {news.badge}
                        </span>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-xs font-semibold text-[#a31d1d] mb-2.5">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>{news.date}</span>
                      </div>

                      <h3 className="font-bold text-gray-900 text-lg line-clamp-2 mb-3 leading-snug group-hover:text-[#a31d1d] transition-colors">
                        {news.title}
                      </h3>

                      <p className="text-gray-600 text-sm line-clamp-3 mb-4 leading-relaxed">
                        {news.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-0">
                    <span className="text-sm font-bold text-[#a31d1d] group-hover:text-[#8a1818] inline-flex items-center gap-1.5 transition-colors">
                      Read Full Article 
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full py-16 text-center text-gray-500 bg-white rounded-2xl border border-gray-200">
                No articles found matching your criteria.
              </div>
            )}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && !isLoading && (
            <div className="flex justify-center items-center gap-2 pb-6">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2.5 text-sm font-semibold border border-gray-300 rounded-xl bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed shadow-sm transition-all"
              >
                Previous
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`w-10 h-10 text-sm font-bold rounded-xl transition-all shadow-sm ${
                    currentPage === page
                      ? "bg-[#a31d1d] text-white shadow-md shadow-red-900/20"
                      : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {page}
                </button>
              ))}

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-4 py-2.5 text-sm font-semibold border border-gray-300 rounded-xl bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed shadow-sm transition-all"
              >
                Next
              </button>
            </div>
          )}

        </div>
      </section>

      {/* Quick-View Article Modal */}
      {activeModalNews && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-100 flex flex-col relative">
            
            {/* Modal Header Image */}
            <div className="relative h-64 md:h-72 w-full bg-gray-100 flex-shrink-0">
              <img 
                src={activeModalNews.imageUrl} 
                alt={activeModalNews.title} 
                className="w-full h-full object-cover"
              />
              <button 
                onClick={() => setActiveModalNews(null)}
                className="absolute top-4 right-4 bg-black/60 hover:bg-black text-white p-2.5 rounded-full transition-colors shadow-lg"
                aria-label="Close modal"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="absolute bottom-4 left-4">
                <span className="bg-[#a31d1d] text-white text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-md">
                  {activeModalNews.badge}
                </span>
              </div>
            </div>

            {/* Modal Body Content */}
            <div className="p-6 md:p-8 flex-1">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#a31d1d] mb-3">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>{activeModalNews.date}</span>
              </div>

              <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-4 leading-snug">
                {activeModalNews.title}
              </h2>

              <div className="w-16 h-1 bg-[#a31d1d] mb-6 rounded-full"></div>

              <p className="text-gray-700 text-base leading-relaxed mb-8">
                {activeModalNews.fullContent || activeModalNews.excerpt}
              </p>

              <div className="border-t border-gray-100 pt-4 flex justify-end">
                <button
                  onClick={() => setActiveModalNews(null)}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold px-6 py-3 rounded-xl text-sm transition-colors"
                >
                  Close Article
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
      
      {/* Footer */}
      <Footer />
    </div>
  );
}