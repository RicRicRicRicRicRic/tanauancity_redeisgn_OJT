import React from 'react';
import mayorImg from '../../../assets/sections/Home/Mayor/Mayor.webp';

const Mayor: React.FC = () => {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center py-16 px-4 md:px-8 lg:px-12 overflow-hidden bg-[#1a0203]">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,_#5c0d12_0%,_#330407_50%,_#140102_100%)] opacity-95" />

      {/* Main Two-Column Grid Container */}
      <div className="max-w-[1400px] w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
        
        {/* ================= LEFT COLUMN ================= */}
        <div className="flex flex-col items-center justify-center text-center space-y-3 w-full overflow-hidden">
          
          {/* Office Badge */}
          <div className="flex items-center justify-center gap-3">
            <span className="w-8 h-[2px] bg-[#e38d92]" />
            <span className="uppercase tracking-[0.35em] text-xs sm:text-sm font-semibold text-[#FFD6D1] drop-shadow-[0_0_8px_rgba(255,214,209,0.3)]">
              Office of the Mayor
            </span>
            <span className="w-8 h-[2px] bg-[#e38d92]" />
          </div>

          {/* Centered & Enlarged Mayor Image */}
          <div className="w-full flex justify-center items-center relative">
            <img
              src={mayorImg}
              alt="Mayor Nelson Sonny Perez Collantes"
              className="w-full max-w-[550px] lg:max-w-[680px] h-auto object-contain scale-105 sm:scale-115 transform origin-center drop-shadow-[0_20px_30px_rgba(0,0,0,0.85)]"
            />
          </div>

          {/* Scaled-Down Compact Marquee Slideshow (Right to Left) */}
          <div className="w-full overflow-hidden relative py-1.5 bg-[#2b0507]/60 border-y border-[#8a2228]/40 backdrop-blur-sm">
            {/* Inline keyframe animation setup (Right-to-Left Scroll) */}
            <style>{`
              @keyframes marquee-forward {
                0% { transform: translateX(0%); }
                100% { transform: translateX(-50%); }
              }
              .animate-marquee-left {
                display: flex;
                width: max-content;
                animation: marquee-forward 22s linear infinite;
              }
              .animate-marquee-left:hover {
                animation-play-state: paused;
              }
            `}</style>

            <div className="animate-marquee-left flex gap-6 whitespace-nowrap">
              {/* Repeated twice for smooth infinite loop */}
              {[1, 2].map((key) => (
                <div key={key} className="flex items-center gap-6 font-serif text-sm sm:text-base lg:text-lg font-bold italic tracking-wide text-white drop-shadow-[0_1px_8px_rgba(255,255,255,0.3)]">
                  <span>
                    “In the Service of our People,{' '}
                    <span className="text-[#FFE485] font-serif not-italic font-extrabold drop-shadow-[0_0_10px_rgba(255,228,133,0.5)]">
                      We Will Always Remain
                    </span>”
                  </span>
                  <span className="text-[#e38d92] not-italic text-sm">•</span>
                </div>
              ))}
            </div>
          </div>

          {/* Mayor Name & Title (Hardcoded text color with inline styles) */}
          <div className="pt-3 border-t border-[#8a2228]/50 w-full max-w-md text-center relative z-20 space-y-1">
            <h2 
              className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-wide drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]"
              style={{ color: '#F1E5DF' }}
            >
              Mayor Nelson "Sonny" Perez Collantes
            </h2>
            <p 
              className="uppercase tracking-[0.3em] text-xs sm:text-sm font-semibold drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
              style={{ color: '#F1E5DF' }}
            >
              City Mayor — Tanauan
            </p>
          </div>

        </div>

        {/* ================= RIGHT COLUMN (NEWSPAPER THEME) ================= */}
        <div className="relative bg-[#260507]/80 backdrop-blur-md border border-[#8a2228]/40 p-8 sm:p-10 rounded-sm shadow-2xl space-y-6">
          
          {/* Newspaper Header */}
          <div className="border-b-2 border-double border-[#d48b90]/40 pb-4 text-center lg:text-left space-y-1">
            <div className="flex items-center justify-between text-xs tracking-widest text-[#f5c2be] uppercase font-mono border-b border-[#5e1216] pb-2 mb-3">
              <span>Official Address</span>
              <span>City of Tanauan</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-black tracking-wide text-[#FFFFFF] uppercase">
              Welcome to Tanauan City
            </h3>
            <p className="text-xs italic text-[#f0b5b0] font-serif">
              "Building a progressive, inclusive, and resilient community together."
            </p>
          </div>

          {/* Newspaper Content Body */}
          <div className="text-[#FCEEEA] text-sm sm:text-base leading-relaxed font-sans space-y-4 text-justify">
            <p className="first-letter:text-4xl first-letter:font-bold first-letter:font-serif first-letter:text-[#FFE485] first-letter:mr-2 first-letter:float-left first-letter:leading-none">
              Warmest greetings to all residents, visitors, and partners of Tanauan City. As we steer our beloved city toward greater heights, our commitment remains anchored on transparent governance, economic advancement, and the well-being of every Tanaueño.
            </p>

            <p>
              Through unified action and continuous innovation, we strive to build a vibrant environment where businesses thrive, families prosper, and sustainable growth reaches every corner of our community. 
            </p>

            <p>
              We invite you to explore our initiatives, engage in our local programs, and join hands with us in shaping a brighter, more resilient future for Tanauan City.
            </p>
          </div>

          {/* Newspaper Footer */}
          <div className="pt-6 border-t border-[#601317] flex items-center justify-between text-xs text-[#f0b5b0] font-serif italic">
            <span>Leadership & Public Service</span>
            <span className="font-semibold text-[#FFE485]">— Office of the Mayor</span>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Mayor;