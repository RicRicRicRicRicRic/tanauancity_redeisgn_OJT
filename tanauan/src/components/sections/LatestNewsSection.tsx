import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import latestnews_photo1 from "../../assets/sections/LatestNews/latestnews_photo1.jpg";
import latestnews_photo2 from "../../assets/sections/LatestNews/latestnews_photo2.jpg";
import latestnews_photo3 from "../../assets/sections/LatestNews/latestnews_photo3.jpg";
import latestnews_photo4 from "../../assets/sections/LatestNews/latestnews_photo4.jpg";

function LatestNewsSection() {
  // Array of imported images
  const imageUrls = [
    latestnews_photo1,
    latestnews_photo2,
    latestnews_photo3,
    latestnews_photo4,
    latestnews_photo1,
  ];

  // News Items Data
  const rawNews = [
    { id: 1, badge: "News", title: "Mabuhay ang mga bagong kasal!", date: "June 11, 2026" },
    { id: 2, badge: "News", title: "Local AICS pasa sa mga Tanaueno at mga Senior Citizens' Cash incentives sabayang ipinamahagi ng Tanauan LGU!", date: "June 11, 2026" },
    { id: 3, badge: "News", title: "Ngayon sa tanauan, agarang natutugunan ang pangangailangang medikal ng ating mga kababayan!", date: "June 11, 1524" },
    { id: 4, badge: "News", title: "Oathtaking ng mga Newly-hired at mga Promoted na mga guro, Pinangunahan ni Mayor Sonny Perez Collantes", date: "June 10, 2026" },
    { id: 5, badge: "News", title: "Free Eye Checkup Medical Mission, muling inihatid para sa mga Tanaueno!", date: "June 11, 2026, 2026" },
    { id: 6, badge: "News", title: "Pamahalaang lungsod ng tanauan", date: "December 15, 2026" },
    { id: 7, badge: "News", title: "Programa sa kalusugan para sa lahat", date: "January 10, 2027" },
    { id: 8, badge: "News", title: "Pagpapaganda ng mga public works", date: "February 04, 2027" },
    { id: 9, badge: "News", title: "Araw ng Parangal sa natatanging pulitiko", date: "March 20, 2027" },
  ];

  // Attach images to news items
  const allNews = rawNews.map((item, index) => ({
    ...item,
    imageUrl: imageUrls[index] || "",
  }));

  const ITEMS_PER_PAGE = 3;
  const [[page, direction], setPage] = useState([1, 0]);

  const totalPages = Math.ceil(allNews.length / ITEMS_PER_PAGE);
  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const currentNews = allNews.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleDotClick = (newPage: number) => {
    if (newPage === page) return;
    const newDirection = newPage > page ? 1 : -1;
    setPage([newPage, newDirection]);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <section id="latest-news" className="w-full bg-white py-10 px-4">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        
        {/* Header Block */}
        <div className="-mt-28 mb-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-1">
            Latest news and publication
          </h2>
          <p className="text-gray-500 text-xs md:text-sm">
            Stay updated with the latest happenings in Tanauan City
          </p>
        </div>

        {/* Sliding Grid Container */}
        <div className="relative w-full mb-6 overflow-hidden min-h-[220px]">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={page}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full py-2"
            >
              {currentNews.map((item) => (
                <div
                  key={item.id}
                  className="group cursor-pointer border border-gray-200 rounded-xl bg-white overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-xl hover:-translate-y-1.5 hover:border-red-200 transition-all duration-300 ease-out"
                >
                  {/* Image Container with Zoom Effect */}
                  <div className="relative bg-[#fcfcfc] h-48 border-b border-gray-100 overflow-hidden flex items-center justify-center">
                    {item.imageUrl ? (
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                    ) : (
                      <span className="text-gray-400 text-xs">No image provided</span>
                    )}

                    {/* Badge Pill with Hover Scale */}
                    <div className="absolute top-3 left-3 z-10 border border-red-600 text-red-600 text-[11px] font-semibold px-3 py-0.5 rounded-full bg-white/95 backdrop-blur-sm shadow-sm group-hover:scale-105 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                      {item.badge}
                    </div>
                  </div>

                  {/* Card Info Footer */}
                  <div className="p-4 bg-white flex flex-col justify-between flex-1 gap-3">
                    <h3 className="font-semibold text-gray-900 group-hover:text-[#a31d1d] text-sm md:text-base leading-snug tracking-tight line-clamp-2 transition-colors duration-200">
                      {item.title}
                    </h3>
                    
                    {/* Date text stays #a31d1d, dot turns #a31d1d on hover */}
                    <div className="flex items-center gap-1.5 text-[11px]">
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-[#a31d1d] transition-colors duration-200" />
                      <span className="text-[#a31d1d] font-medium">{item.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-2">
          {Array.from({ length: totalPages }).map((_, index) => {
            const pageNumber = index + 1;
            const isActive = page === pageNumber;
            return (
              <button
                key={pageNumber}
                onClick={() => handleDotClick(pageNumber)}
                className={`rounded-full transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "w-3 h-3 bg-[#a31d1d]"
                    : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to page ${pageNumber}`}
              />
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default LatestNewsSection;