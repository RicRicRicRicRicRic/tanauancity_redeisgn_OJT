import React from 'react';
import mayorImg from '../../assets/sections/Mayor/Mayor.webp';

const Mayor: React.FC = () => {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-start py-12 px-4 md:px-12 lg:px-16 overflow-hidden bg-[#210203]">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_35%_50%,_#5a0c10_0%,_#1f0203_75%)]" />

      {/* Main Container - Shifted Left */}
      <div className="max-w-[1400px] w-full flex flex-col md:flex-row items-center justify-start gap-6 md:gap-0 relative z-10 lg:-ml-30">

        {/* Left Side: Mayor Image */}
        <div className="w-full md:w-[50%] flex justify-center md:justify-start items-center h-full relative z-0 md:-ml-12">
          <img
            src={mayorImg}
            alt="Mayor Nelson Sonny Perez Collantes"
            className="w-full max-w-[690px] lg:max-w-[780px] h-auto max-h-[92vh] object-contain object-center scale-[1.35] origin-center drop-shadow-[0_25px_35px_rgba(0,0,0,0.8)]"
          />
        </div>

        {/* Right Side: Text */}
        <div className="w-full md:w-[50%] flex flex-col justify-center text-left space-y-3 pb-8 md:pb-0 relative z-10 md:-ml-30">

          {/* Header */}
          <div className="flex items-center space-x-3 mb-1">
            <span className="w-7 h-[2px] bg-[#a82e35]"></span>

            <span className="text-[13px] uppercase font-bold tracking-[0.25em] text-[#f0a6a8]">
              OFFICE OF THE MAYOR
            </span>
          </div>

          {/* Headline */}
          <div className="relative pt-1">

            <span className="text-5xl md:text-6xl font-serif text-[#a82e35] leading-none absolute -top-6 -left-7 select-none">
              “
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.75rem] font-black leading-[1.05] tracking-tight text-white font-sans drop-shadow-md">
              In the Service of <br />
              our People,{' '}
              <span className="text-[#ffe08a]">
                We <br />
                Will Always <br />
                Remain
              </span>
            </h1>

            <div className="flex justify-start pl-16 md:pl-32 -mt-1">
              <span className="text-4xl md:text-5xl font-serif text-[#a82e35] leading-none select-none">
                ”
              </span>
            </div>
          </div>

          {/* Mayor Info */}
          <div className="pt-3 border-t border-white/10 max-w-md">
            <h2 className="text-lg sm:text-xl font-extrabold text-white tracking-wide font-sans">
              Mayor Nelson "Sonny" Perez Collantes
            </h2>

            <div className="flex items-center space-x-2 mt-1">
              <span className="text-[11px] tracking-[0.2em] font-bold text-[#f5f5f5] uppercase">
                CITY MAYOR
              </span>

              <span className="text-white text-xs">—</span>

              <span className="text-[11px] tracking-[0.2em] font-bold text-[#f5f5f5] uppercase">
                TANAUAN
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Mayor;