import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Kipp1 from "../../assets/sections/SonnyAllS/Kipp1.jpg";
import Kipp2 from "../../assets/sections/SonnyAllS/Kipp2.jpg";
import FloatBlobs from '../common/float-blobs'

interface CardData {
  id: number;
  image: string;
  title: string;
  description: string;
  date: string;
}

const cardsData: CardData[] = [
  {
    id: 1,
    image: Kipp1,
    title: "On behalf of the people of Tanauan, let me express my sincere gratitude to the Top 10 Taxpayers of our City!",
    description: "Pag-asa at Gabay para sa lahat ng Tanauanense",
    date: "August 2025"
  },
  {
    id: 2,
    image: Kipp2,
    title: "The City Government of Tanauan proudly joins Kerry Philippines in the 2025 Global PRIDE Flag Raising Ceremony!",
    description: "Serbisyo at Suporta mula sa lokal na pamahalaan",
    date: "August 2025"
  }
];

function LatestNewsSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section id="latest-news" className="w-full h-auto min-h-[768px] bg-white py-10 px-4 relative overflow-hidden">
      <FloatBlobs />
      
      <div className="w-full flex flex-col items-center justify-center px-6 md:px-12 lg:px-16 py-12 relative z-10 mt-[15px]">
        <div className="w-full max-w-7xl mx-auto">
          
          {/* Header Block */}
          <div className="flex flex-col items-center mb-8">
            <h2 className="!text-3xl font-bold gradient-text mb-2 text-center">
              #SonnyAll 
            </h2>
            <div className="w-24 h-1 bg-[#E91E8C] mb-4"></div>
            <p className="text-gray-600 text-lg max-w-2xl text-center">
              Pag-asa, Gabay, at Serbisyo mula kay Mayor Sonny 
            </p>
          </div>

          {/* 2 Column Card Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 max-w-xl mx-auto">
            {cardsData.map((card) => (
              <div 
                key={card.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 relative group"
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="aspect-[3/4] w-full overflow-hidden">
                  <img 
                    src={card.image} 
                    alt={card.title} 
                    className="w-full h-full object-fill group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                {/* Hover Overlay */}
                <div 
                  className={`absolute inset-0 bg-black/60 flex flex-col justify-end p-6 transition-all duration-500 ease-out ${
                    hoveredCard === card.id 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-full'
                  }`}
                >
                  <h3 className="text-white text-xl font-bold mb-2">
                    {card.title}
                  </h3>
                  <p className="text-gray-200 text-sm !mb-2">
                    {card.description}
                  </p>
                  <p className="text-gray-300 text-xs !mb-4">
                    {card.date}
                  </p>
                  <button 
                    className="bg-transparent text-white border border-white px-6 py-2 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 w-fit flex items-center gap-2 group"
                    aria-label={`Read more about ${card.title}`}
                  >
                    <span>Read More</span>
                    <div className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center group-hover:bg-white group-hover:text-[#E91E8C] transition-all duration-300">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default LatestNewsSection;