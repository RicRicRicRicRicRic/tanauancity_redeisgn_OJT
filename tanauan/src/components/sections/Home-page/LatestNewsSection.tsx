import { useState, useRef } from "react";


interface NewsItem {
  id: number;
  badge: string;
  title: string;
  date: string;
  imageUrl: string;
}

function LatestNewsSection() {
  const [selectedNews, setSelectedNews] = useState<NewsItem>({
    id: 1,
    badge: "News",
    title: "Mabuhay ang mga bagong kasal!",
    date: "June 11, 2026",
    imageUrl: "/src/assets/sections/LatestNews/latestnews_photo1.jpg"
  });

  const [isNewsListHovered, setIsNewsListHovered] = useState(false);
  const newsListRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const newsItems: NewsItem[] = [
    {
      id: 1,
      badge: "News",
      title: "Mabuhay ang mga bagong kasal!",
      date: "June 11, 2026",
      imageUrl: "/src/assets/sections/LatestNews/latestnews_photo1.jpg"
    },
    {
      id: 2,
      badge: "News",
      title: "Local AICS pasa sa mga Tanaueno at mga Senior Citizens' Cash incentives sabayang ipinamahagi ng Tanauan LGU!",
      date: "June 11, 2026",
      imageUrl: "/src/assets/sections/LatestNews/latestnews_photo2.jpg"
    },
    {
      id: 3,
      badge: "News",
      title: "Ngayon sa tanauan, agarang natutugunan ang pangangailangang medikal ng ating mga kababayan!",
      date: "June 11, 2026",
      imageUrl: "/src/assets/sections/LatestNews/latestnews_photo3.jpg"
    },
    {
      id: 4,
      badge: "News",
      title: "Oathtaking ng mga Newly-hired at mga Promoted na mga guro, Pinangunahan ni Mayor Sonny Perez Collantes",
      date: "June 10, 2026",
      imageUrl: "/src/assets/sections/LatestNews/latestnews_photo4.jpg"
    },
    {
      id: 5,
      badge: "News",
      title: "Free Eye Checkup Medical Mission, muling inihatid para sa mga Tanaueno!",
      date: "June 11, 2026",
      imageUrl: "/src/assets/sections/LatestNews/latestnews_photo1.jpg"
    },
    {
      id: 6,
      badge: "News",
      title: "Pamahalaang lungsod ng tanauan",
      date: "December 15, 2026",
      imageUrl: "/src/assets/sections/LatestNews/latestnews_photo2.jpg"
    },
    {
      id: 7,
      badge: "News",
      title: "Programa sa kalusugan para sa lahat",
      date: "January 10, 2027",
      imageUrl: "/src/assets/sections/LatestNews/latestnews_photo3.jpg"
    },
    {
      id: 8,
      badge: "News",
      title: "Pagpapaganda ng mga public works",
      date: "February 04, 2027",
      imageUrl: "/src/assets/sections/LatestNews/latestnews_photo4.jpg"
    },
    {
      id: 9,
      badge: "News",
      title: "Araw ng Parangal sa natatanging pulitiko",
      date: "March 20, 2027",
      imageUrl: "/src/assets/sections/LatestNews/latestnews_photo1.jpg"
    },
  ];

  return (
    <section id="latest-news" className="w-full h-[768px] min-h-[768px] bg-white py-10 px-4 relative overflow-hidden">
      
      <div className="w-full h-full flex flex-col items-center justify-center px-6 md:px-12 lg:px-16 py-12 relative z-10 mt-[15px]">
        <div className="w-full max-w-7xl mx-auto">
          
          {/* Header Block */}
          <div className="flex flex-col items-center mb-8">
            <h2 className="!text-3xl font-bold gradient-text mb-2 text-center">
              Latest news and publication
            </h2>
            <div className="w-24 h-1 bg-[#E91E8C] mb-4"></div>
            <p className="text-gray-600 text-lg max-w-2xl text-center">
              Stay updated with the latest happenings in Tanauan City
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="flex gap-6 h-[420px] w-full max-w-6xl mx-auto">
            {/* Left Side - Selected News Display */}
            <div className="w-5/12 flex flex-col bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
              {/* News Image */}
              <div className="relative h-52 bg-gray-100 overflow-hidden">
                <img
                  src={selectedNews.imageUrl}
                  alt={selectedNews.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="border border-red-600 text-red-600 text-xs font-semibold px-3 py-1 rounded-full bg-white/95 backdrop-blur-sm">
                    {selectedNews.badge}
                  </span>
                </div>
              </div>

              {/* News Content - Centered */}
              <div className="flex-1 p-2 flex flex-col overflow-hidden text-center">
                <h3 className="!text-base font-bold text-gray-900 mb-2">
                  {selectedNews.title}
                </h3>
                
                <div className="flex items-center justify-center gap-2 text-xs text-gray-500 mb-2">
                  <span className="w-2 h-2 rounded-full bg-[#a31d1d]"></span>
                  <span>{selectedNews.date}</span>
                </div>

                <button className="text-sm self-center bg-[#a31d1d] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#8a1818] transition-colors duration-300 flex items-center gap-2">
                  Click to know more
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Right Side - Scrollable News List */}
            <div
              ref={newsListRef}
              className="w-7/12 bg-gray-50 rounded-xl overflow-hidden border border-gray-200"
              onMouseEnter={() => setIsNewsListHovered(true)}
              onMouseLeave={() => setIsNewsListHovered(false)}
            >
              <div
                ref={scrollContainerRef}
                className={`h-full overflow-y-auto scrollbar-hide p-4 space-y-3 ${
                  isNewsListHovered ? "overscroll-contain" : ""
                }`}
              >
                {newsItems.map((news) => (
                  <div
                    key={news.id}
                    onClick={() => setSelectedNews(news)}
                    className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                      selectedNews.id === news.id
                        ? "bg-white shadow-md border-l-4 border-[#a31d1d]"
                        : "bg-white hover:shadow-md border-l-4 border-transparent hover:border-gray-300"
                    }`}
                  >
                    <div className="flex gap-3">
                      <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-gray-200">
                        <img
                          src={news.imageUrl}
                          alt={news.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-sm text-gray-900 line-clamp-2 mb-1">
                          {news.title}
                        </h4>
                        <div className="flex items-center gap-1.5 text-xs text-gray-500">
                          <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                          <span>{news.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default LatestNewsSection;