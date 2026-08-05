import React from 'react';
import mayorImg from '../../assets/sections/Mayor/Mayor.webp';

const Mayor: React.FC = () => {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-start py-12 px-4 md:px-12 lg:px-16 overflow-hidden bg-[#210203]">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_35%_50%,_#7b151b_0%,_#4d090c_45%,_#2b0305_100%)]" />

      {/* Main Container - Shifted Left */}
      <div className="max-w-[1400px] w-full flex flex-col md:flex-row items-center justify-start gap-6 md:gap-0 relative z-10 lg:-ml-30">

        {/* Left Side: Mayor Image */}
        <div className="w-full md:w-[50%] flex justify-center md:justify-start items-center h-full relative z-0 md:-ml-12">
          <img
            src={mayorImg}
            alt="Mayor Nelson Sonny Perez Collantes"
            className="w-full max-w-[690px] lg:max-w-[820px] h-auto max-h-[92vh] object-contain object-center scale-[1.42] origin-center drop-shadow-[0_25px_35px_rgba(0,0,0,0.8)]"
          />
        </div>

        {/* Right Side */}
<div className="w-full md:w-[50%] flex flex-col justify-center text-left relative z-10 md:-ml-20">

  {/* Office */}
  <div className="flex items-center gap-5 mb-5">

    <span className="w-12 h-[1.5px] bg-[#a85a5d]" />

    <span className="uppercase tracking-[0.45em] text-[17px] font-semibold text-[#FFD2CC] drop-shadow-[0_2px_6px_rgba(255,210,204,0.2)]">
  OFFICE OF THE MAYOR
</span>

  </div>

  {/* Headline */}
  <div className="relative">

    {/* Quote */}
    <span className="absolute top-1 -left-2 text-[52px] leading-none font-serif text-[#b14d50]">
  “
</span>

   <h1 className="text-4xl sm:text-5xl lg:text-[5.8rem]
font-extrabold
leading-[0.92]
tracking-[-0.03em]
text-white
[text-shadow:0_0_8px_rgba(255,255,255,0.35),0_3px_20px_rgba(255,255,255,0.25)]">
      In the Service of
      <br />
      our People,
      <span className="text-[#FFE38A] [text-shadow:0_0_10px_rgba(255,230,120,0.45)]">
  We <br />
  Will Always <br />
  Remain
</span>
    </h1>

    {/* Closing Quote */}
    <span className="absolute bottom-1 right-6 text-[70px] leading-none font-serif text-[#8a3537]/60 select-none">
      ”
    </span>

  </div>

  {/* Mayor Info */}
  <div className="mt-12">

    <div className="flex items-center gap-4 mb-4">

      <span className="w-5 h-[1.5px] bg-[#6c1d20]" />

     <h2 className="text-[34px] font-bold text-white">
  Mayor Nelson "Sonny" Perez Collantes
</h2>

    </div>

    <p className="uppercase tracking-[0.38em] text-[#F1E5DF] text-[17px] font-medium">
      CITY MAYOR — TANAUAN
    </p>

  </div>

</div>

      </div>
    </section>
  );
};

export default Mayor;