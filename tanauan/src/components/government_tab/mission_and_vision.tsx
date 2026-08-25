import React, { useState, useEffect } from 'react';
import Footer from '../layout/Footer';
import mision_and_vision_bg from '../../assets/sections/pictures/Tnauan.png';

export default function TransparencyPage() {
  const missionPilars = [
    {
      title: "Health & Social Services",
      description: "Adequate, quality and accessible health and social services",
      icon: "🏥",
      category: "Social Welfare"
    },
    {
      title: "Education Excellence",
      description: "Quality education and academic excellence across all institutions",
      icon: "🎓",
      category: "Human Capital"
    },
    {
      title: "Livelihood Opportunities",
      description: "Livelihood and job opportunities for all with strengthened cooperatives",
      icon: "💼",
      category: "Economic Growth"
    },
    {
      title: "Sustainable Economy",
      description: "Sustainable economy with advanced infrastructure facilities",
      icon: "🏙️",
      category: "Infrastructure"
    },
    {
      title: "Environmental Protection",
      description: "Protected environment seamlessly integrated with a vibrant tourism industry",
      icon: "🌲",
      category: "Ecology"
    },
    {
      title: "Cultural Development",
      description: "Youth and sports development and enriched culture, arts and heritage",
      icon: "🎭",
      category: "Culture & Sports"
    },
    {
      title: "Safe Community",
      description: "Safe, peaceful, gender-responsive and disaster-resilient community",
      icon: "🛡️",
      category: "Security & Resilience"
    }
  ];

  // Rolling words states & effect for continuous top-to-bottom motion + center-outward line
  const rotatingWords = ["Excellence", "Sustainability", "Progress"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState('translate-y-0 opacity-100');
  const [underlineActive, setUnderlineActive] = useState(false);

  useEffect(() => {
    // Trigger initial underline expansion on mount
    setUnderlineActive(true);

    const interval = setInterval(() => {
      // 1. Collapse underline and slide word down
      setUnderlineActive(false);
      setAnimationClass('translate-y-6 opacity-0');

      setTimeout(() => {
        // 2. Instantly jump word to top (invisible) and switch to next word
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % rotatingWords.length);
        setAnimationClass('-translate-y-6 opacity-0');

        setTimeout(() => {
          // 3. Slide word down to center & expand underline from center outward
          setAnimationClass('translate-y-0 opacity-100');
          setUnderlineActive(true);
        }, 50);
      }, 350); // Matches exit transition duration
    }, 3000);

    return () => clearInterval(interval);
  }, [rotatingWords.length]);

  return (
    <div className="w-full bg-slate-50/70 min-h-screen flex flex-col justify-between font-sans">
      <div>
        {/* Custom Keyframe Animations */}
        <style>{`
          @keyframes fadeInDown {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes fadeInScale {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
          }
          .animate-fade-down {
            animation: fadeInDown 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
          .animate-fade-scale {
            animation: fadeInScale 1.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
        `}</style>

       {/* Lightened & Modernized Centered Header Section */}
        <div className="relative w-full mt-31 py-28 px-6 overflow-hidden bg-gradient-to-b from-[#990000] via-[#800000] to-[#600000] text-shadow-sm shadow-xl">
          {/* Background Image brightened and clearly visible */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-65 contrast-105 pointer-events-none"
            style={{ backgroundImage: `url(${mision_and_vision_bg})` }}
          ></div>
          
          {/* Lighter, balanced gradient wash to keep it vivid and airy */}
          <div className="absolute inset-0 bg-gradient-to-b from-red-900/50 via-red-950/40 to-black/60 pointer-events-none"></div>

          {/* Centered Header Content in a Frosted Glass Container */}
          <div className="max-w-4xl mx-auto text-center relative z-10 animate-fade-down flex flex-col items-center">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/30 text-white text-xs font-black tracking-widest uppercase shadow-md backdrop-blur-md mb-4">
              <span>Tanauan City Governance</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white drop-shadow-md mb-3">
              Vision & Mission
            </h1>
            
            <p className="text-lg md:text-xl font-medium text-red-100 max-w-3xl text-center italic font-serif leading-relaxed drop-shadow-md mb-6">
              Guiding principles for a progressive and ecologically balanced Tanauan City
            </p>

            {/* Rolling Word & Center-Outward Underline Animation Container */}
            <div className="flex flex-col items-center">
              <div className="h-8 flex items-center justify-center overflow-hidden px-4">
                <span 
                  className={`text-xs md:text-sm font-extrabold tracking-[0.25em] text-red-200 uppercase drop-shadow transition-all duration-300 transform ${animationClass}`}
                >
                  {rotatingWords[currentWordIndex]}
                </span>
              </div>
              
              {/* Clean Animated Line Only (Spreads from center to left & right without background track) */}
              <div className="h-[2px] relative mt-1 flex justify-center">
                <div 
                  className={`h-full bg-red-200 shadow-sm transition-all duration-700 ease-out ${
                    underlineActive ? 'w-36 opacity-100' : 'w-0 opacity-0'
                  }`}
                ></div>
              </div>
            </div>

          </div>
        </div>

        {/* Main Content Section */}
        <section className="max-w-5xl mx-auto px-4 md:px-0 py-16 space-y-16 animate-fade-scale">
          
          {/* Vision 2025 Card */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 group">
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-red-700 via-rose-600 to-red-800"></div>
            
            <div className="space-y-4 max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-black tracking-widest uppercase">
                <span>✦</span>
                <span>Vision 2025</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                A Progressive and Ecologically Balanced City
              </h2>
              <p className="text-slate-600 text-base leading-relaxed font-light">
                Our vision is to transform Tanauan City into a model of sustainable development, where economic progress harmoniously coexists with environmental stewardship, ensuring a prosperous and livable community for all our citizens.
              </p>
            </div>

            <div className="w-full md:w-72 h-44 rounded-2xl bg-gradient-to-br from-red-800 via-rose-700 to-red-900 shadow-lg flex flex-col items-center justify-center text-white p-6 relative overflow-hidden group-hover:scale-105 transition-transform duration-300 flex-shrink-0">
              <span className="text-4xl mb-2">🌿</span>
              <span className="text-[10px] font-extrabold tracking-widest uppercase text-red-200">Tanauan City 2025</span>
              <span className="text-base font-bold text-center mt-1">Make Governance Exceptional</span>
            </div>
          </div>

          {/* Mission & Guiding Principles Section */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-black tracking-widest text-red-700 uppercase mb-3">
                <span>—</span>
                <span>Our Guiding Principles</span>
                <span>—</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-4">
                The Mission of Tanauan City
              </h3>
              <p className="text-slate-600 text-base font-light">
                Steered by a transparent and collective governance, it is our mission to improve the quality of life of our people through seven strategic development pillars:
              </p>
            </div>

            {/* Grid of 7 Pillars with Wide Spacing (gap-10) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {missionPilars.map((pillar, index) => (
                <div 
                  key={index}
                  className={`relative bg-gradient-to-b from-[#8f0000] via-[#750000] to-[#520000] p-8 rounded-3xl border-t border-red-400/40 border-x border-b border-black/40 shadow-[0_20px_45px_rgba(82,0,0,0.35)] hover:shadow-[0_25px_55px_rgba(120,0,0,0.5)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group overflow-hidden text-white ${
                    index === missionPilars.length - 1 ? 'md:col-span-2' : ''
                  }`}
                >
                  {/* Top Inner Light Highlight Edge */}
<div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-red-300/80 to-transparent"></div>
                  {/* Ambient Back Glow Effect */}
                  <div className="absolute -right-16 -top-16 w-48 h-48 bg-red-500/10 rounded-full blur-2xl group-hover:bg-red-400/25 transition-all duration-500 pointer-events-none"></div>

                  {/* Card Content Layout */}
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      {/* 3D Icon Box */}
                      <div className="w-14 h-14 rounded-2xl bg-black/30 backdrop-blur-md border-t border-white/30 border-b border-black/50 text-white flex items-center justify-center text-2xl shadow-[inset_0_2px_4px_rgba(0,0,0,0.6),0_6px_12px_rgba(0,0,0,0.3)] group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                        {pillar.icon}
                      </div>

                      {/* Pill Badge */}
                      <span className="text-[10px] font-black tracking-widest text-red-100 uppercase bg-black/25 border-t border-white/20 border-b border-black/40 px-3.5 py-1.5 rounded-full shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] backdrop-blur-sm">
                        {pillar.category}
                      </span>
                    </div>

                    <h4 className="text-xl font-black text-white mb-3 group-hover:text-red-200 transition-colors tracking-tight drop-shadow-md">
                      {pillar.title}
                    </h4>
                    <p className="text-red-100/95 text-sm sm:text-base font-normal leading-relaxed drop-shadow">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Card Bottom Indicator */}
                  <div className="relative z-10 mt-6 pt-4 border-t border-black/30 flex items-center text-xs font-bold text-red-200 opacity-80 group-hover:opacity-100 transition-opacity">
                    <span className="tracking-wider uppercase text-[10px]">Pillar {index + 1} of 7</span>
                    <span className="ml-auto transform group-hover:translate-x-1.5 transition-transform text-red-300 font-black">→</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Callout Banner */}
          <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-12 shadow-xl text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
            <div className="relative z-10 max-w-xl mx-auto space-y-4">
              <h3 className="text-2xl md:text-3xl font-black">Based on Tanauan City's Development Plan</h3>
              <p className="text-slate-400 text-sm font-light">
                Committed to delivering accountable public service, sustainable infrastructure, and community empowerment through 2025 and beyond.
              </p>
            </div>
          </div>

        </section>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}