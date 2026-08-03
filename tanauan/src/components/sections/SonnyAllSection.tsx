import { Quote, Calendar, ArrowRight, ExternalLink } from 'lucide-react';

// Local Image Imports
import kipp1Img from '../../assets/sections/SonnyAllS/Kipp1.jpg';
import kipp2Img from '../../assets/sections/SonnyAllS/Kipp2.jpg';

interface SonnyCard {
  id: number;
  image: string;
  headlineQuote: string;
  quoteBody: string;
  date: string;
  authorTitle: string;
  sourceContext?: string;
}

const cardsData: SonnyCard[] = [
  {
    id: 1,
    image: kipp1Img,
    headlineQuote: "On behalf of the people of Tanauan, let me express my sincerest gratitude...",
    quoteBody: "Maraming-maraming salamat po sa inyo at sana po'y patuloy niyo kaming tulungan. I assure you that in the next few years, Tanauan City will be a very prosperous City.\n\nI would like to believe that at this point in time—the richest LGU in so far as Batangas is concerned is Tanauan City, basically because of fiscal discipline and basically because our partners from the business sector are paying their taxes.",
    date: "July 16, 2025",
    authorTitle: "MAYOR SONNY PEREZ COLLANTES",
    sourceContext: "— on Tanauan City Top 10 Taxpayers, 16 July 2025"
  },
  {
    id: 2,
    image: kipp2Img,
    headlineQuote: "The City Government of Tanauan proudly joins Kerry Philippines...",
    quoteBody: "We support all of these diversification activities and just like Kerry (Philippines), who nourishes life. Life is not just about food and drinks, but also providing a safe space for everybody. Rest assured that the City of Tanauan is one with its vision and we're honored that we, the City Government of Tanauan, hand-in-hand with our cooperative groups are as one with a mission of providing freedom, equality, and open access to everyone in the city and the entire Philippines.",
    date: "June 9, 2025",
    authorTitle: "ATTY. CRISTINE COLLANTES",
    sourceContext: "PRESIDENT, TANAUAN CITY WOMEN'S COORDINATING COUNCIL\non the 2025 GLOBAL PRIDE FLAG RAISING CEREMONY OF KERRY PHILIPPINES, ON JUNE 09, 2025"
  }
];

export default function SonnyAllSection() {
  return (
    <section 
      id="sonny-all" 
      className="relative min-h-[768px] py-16 px-4 md:px-8 lg:px-12 flex flex-col justify-center bg-gradient-to-b from-[#fdf2f2] via-[#fcf4f4] to-[#f8eaeae6] overflow-hidden"
    >
      {/* Background Red Accents */}
      <div className="absolute -top-20 -left-20 w-[450px] h-[450px] bg-[#901c1c]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-red-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-[450px] h-[450px] bg-[#901c1c]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Dot Pattern Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#901c1c 1.2px, transparent 1.2px)`,
          backgroundSize: '24px 24px'
        }}
      />

      {/* Main Container */}
      <div className="relative max-w-5xl mx-auto w-full z-10">
        
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center text-center mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-rose-100/80 text-[#901c1c] mb-3">
            Official Statements & Advocacy
          </span>
          
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#901c1c] tracking-tight">
            #SonnyAll
          </h2>
          
          <div className="w-12 h-1 bg-[#901c1c] rounded-full mt-2 mb-3" />
          
          <p className="text-xs md:text-sm text-gray-600 max-w-md leading-relaxed text-center">
            Pag-asa, Gabay, at Serbisyo mula kay Mayor Sonny
          </p>
        </div>

        {/* 2 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {cardsData.map((card) => (
            <div
              key={card.id}
              className="group relative bg-white rounded-2xl overflow-hidden border border-rose-100 shadow-md hover:shadow-2xl hover:border-rose-300 transition-all duration-300 flex flex-col hover:-translate-y-1.5 min-h-[520px]"
            >
              {/* Top Accent Strip */}
              <div className="h-2 w-full bg-gradient-to-r from-[#901c1c] via-red-600 to-[#901c1c]" />

              {/* Card Image Container */}
              <div className="relative h-64 bg-slate-100 overflow-hidden">
                <img
                  src={card.image}
                  alt={`Statement photo by ${card.authorTitle}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                {/* Quote Icon Badge */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md p-2 rounded-xl shadow-md border border-white/50 text-[#901c1c]">
                  <Quote className="w-5 h-5 fill-[#901c1c]/10 text-[#901c1c]" />
                </div>

                {/* Date Tag */}
                <div className="absolute bottom-3 left-3 flex items-center text-[11px] font-semibold text-white/95 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/20 shadow-xs">
                  <Calendar className="w-3.5 h-3.5 mr-1.5 text-rose-300" />
                  {card.date}
                </div>
              </div>

              {/* Card Content Body */}
              <div className="p-5 flex-1 flex flex-col justify-between bg-gradient-to-b from-white via-white to-rose-50/20">
                <div>
                  <h3 className="text-sm md:text-base font-bold text-gray-900 group-hover:text-[#901c1c] transition-colors leading-snug mb-2 line-clamp-2">
                    "{card.headlineQuote}"
                  </h3>

                  <p className="text-xs text-gray-600 leading-relaxed line-clamp-6 whitespace-pre-line mb-4">
                    {card.quoteBody}
                  </p>
                </div>

                {/* Card Footer */}
                <div className="pt-3 border-t border-rose-100/80 mt-auto">
                  <div className="mb-3">
                    <p className="text-xs font-extrabold text-[#901c1c] tracking-tight uppercase">
                      {card.authorTitle}
                    </p>
                    {card.sourceContext && (
                      <p className="text-[10px] text-gray-500 font-medium leading-tight mt-0.5 line-clamp-2">
                        {card.sourceContext}
                      </p>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#901c1c] group-hover:text-red-700 transition-colors">
                      Read More
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                    
                    <span className="p-1 rounded-full bg-rose-50 text-[#901c1c] group-hover:bg-[#901c1c] group-hover:text-white transition-all duration-300">
                      <ExternalLink className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>

              {/* Official Brand Bottom Strip */}
              <div className="bg-[#901c1c] px-4 py-1.5 flex items-center justify-between text-[10px] text-white/90 font-medium">
                <span>Tanauan CCTV</span>
                <span className="opacity-80">Republic of the Philippines</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}