import Footer from '../layout/Footer';
import tanauan_logo from '../../assets/sections/Home/navbar/tanauan logo.webp';

export default function TransparencyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#080204] text-slate-100 selection:bg-red-600 selection:text-white pt-24 md:pt-28">
      
      {/* Custom Keyframe Animations */}
      <style>{`
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-25px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes expandWidth {
          from { width: 0%; opacity: 0; }
          to { width: 5rem; opacity: 1; }
        }
        .animate-fade-down {
          animation: fadeInDown 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-expand-line {
          animation: expandWidth 1s cubic-bezier(0.16, 1, 0.3, 1) 0.4s forwards;
        }
      `}</style>

      {/* Compact Deep Crimson Hero Section */}
      <section className="relative w-full py-12 md:py-16 flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        
        {/* Deep, Rich Crimson-Dominant Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#120306] via-[#24060d] to-[#4c0d1a] opacity-95 z-0"></div>
        
        {/* Subtle Ambient Crimson Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-red-700/15 blur-[120px] rounded-full pointer-events-none"></div>

        {/* Content Wrapper with Fade-Down Animation */}
        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center animate-fade-down">
          
          {/* Compact Floating Glass Seal Badge with Pulse Effect */}
          <div className="relative mb-5 group">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-red-600 to-rose-500 opacity-50 blur-sm group-hover:opacity-90 transition duration-500 animate-pulse"></div>
            <div className="relative rounded-full bg-slate-950/80 backdrop-blur-xl border border-red-500/20 shadow-xl">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden flex items-center justify-center bg-white/5 border border-white/10 shadow-inner">
                <img 
                  src={tanauan_logo}
                  alt="Tanauan City Seal" 
                  className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
                />
              </div>
            </div>
          </div>

          {/* Section Eyebrow */}
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/40 border border-red-500/30 backdrop-blur-md mb-4 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
            <span className="text-[11px] uppercase tracking-[0.25em] text-red-200 font-medium">City of Tanauan</span>
          </div>

          {/* Compact High-Impact Typography Header */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-red-200 uppercase mb-3 drop-shadow-sm leading-tight">
            The History of Tanauan
          </h1>

          {/* Thematic Accent Bar with Expanding Animation */}
          <div className="h-1 bg-gradient-to-r from-red-600 to-rose-500 rounded-full mb-4 shadow-md shadow-red-900/50 animate-expand-line"></div>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-red-100/80 font-light max-w-xl tracking-wide leading-relaxed">
            Discover the rich heritage and historical journey of our beloved city.
          </p>

        </div>

        {/* Seamless Bottom Gradient Fade into Dark Page Body */}
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#080204] to-transparent pointer-events-none"></div>
      </section>

      {/* Main Content Body: News Article Layout */}
      <main className="flex-grow container mx-auto px-4 py-12 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Article Column */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            
            {/* Existing Main Article Card */}
            <article className="bg-slate-900/40 backdrop-blur-md border border-slate-800/80 rounded-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
              
              {/* Top Article Header Info */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-6 mb-8 text-xs sm:text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded bg-red-900/40 border border-red-500/30 text-red-300 font-semibold uppercase tracking-wider text-[10px]">
                    Historical Development
                  </span>
                  <span>• Special Chronicle</span>
                </div>
                <span>Batangas Heritage</span>
              </div>

              {/* Section 1: Foundation & Cataclysm */}
              <div className="prose prose-invert max-w-none">
                <h2 className="text-2xl font-bold text-white mb-4 tracking-tight flex items-center gap-3">
                  <span className="w-2 h-6 bg-red-600 rounded-full inline-block"></span>
                  Founding and the 1754 Eruption
                </h2>
                
                <p className="text-slate-300 leading-relaxed text-base sm:text-lg mb-6 first-letter:text-5xl first-letter:font-black first-letter:text-red-500 first-letter:mr-3 first-letter:float-left">
                  The town of Tanauan was established on its present location in 1754, having been transferred from the fringe of Taal Lake where it originally stood. It is believed that Tanauan, together with Sala, was originally founded in 1572 by the Augustinian missionaries who built a mission at the shore of a lake known then as Bonbon (now Taal).
                </p>

                <p className="text-slate-300 leading-relaxed text-base sm:text-lg mb-6">
                  The town, however, was totally destroyed during the most impressive and catastrophic historically-recorded eruption of Taal Volcano in 1754. Together with the community of Sala, the residents of Tanauan were relocated to safer places. Tanauan moved to Bañadero, and then to its present location, while Sala transferred from its original site and subsequently became a barangay of Tanauan.
                </p>

                {/* Editorial Pull Quote */}
                <blockquote className="my-8 p-6 bg-red-950/20 border-l-4 border-red-600 rounded-r-xl italic text-red-100 text-lg shadow-inner">
                  &ldquo;The town is considered the cradle of noble heroes because of the contributions to the revolutionary movement of its sons...&rdquo;
                </blockquote>

                {/* Section 2: Cradle of Heroes */}
                <h2 className="text-2xl font-bold text-white mt-10 mb-4 tracking-tight flex items-center gap-3">
                  <span className="w-2 h-6 bg-red-600 rounded-full inline-block"></span>
                  Cradle of Noble Heroes & Leaders
                </h2>

                <p className="text-slate-300 leading-relaxed text-base sm:text-lg mb-6">
                  Throughout history, Tanaueños have displayed characteristics of personal independence and nationalism. The town is considered the cradle of noble heroes because of the contributions to the revolutionary movement of its sons—the most notable is Apolinario Mabini, the &quot;Brains of the Revolution&quot;. 
                </p>

                <p className="text-slate-300 leading-relaxed text-base sm:text-lg mb-6">
                  The City also produced political leaders like the great statesman Former Pres. Jose P. Laurel and Jose P. Laurel V, Modesto Castillo, and Nicolas Gonzales who served as governors of Batangas.
                </p>

                {/* Section 3: Modern Governance & Cityhood */}
                <h2 className="text-2xl font-bold text-white mt-10 mb-4 tracking-tight flex items-center gap-3">
                  <span className="w-2 h-6 bg-red-600 rounded-full inline-block"></span>
                  Post-War Recovery and Cityhood
                </h2>

                <p className="text-slate-300 leading-relaxed text-base sm:text-lg mb-6">
                  The present location of the seat of the City Government of Tanauan was established in March, 1960. Prior to this, the municipal offices occupied a concrete building in the eastern end of Mabini Avenue at the Poblacion, in front of the present Catholic Church and the Modesto Castillo Cultural Center. The old municipal building that was destroyed during World War II was reconstructed and now houses the city library, social hall, and city museum.
                </p>

                <p className="text-slate-300 leading-relaxed text-base sm:text-lg mb-6">
                  In 1996, Tanauan became a first-class municipality and five years after, it became a city by virtue of Republic Act 9005, otherwise known as &quot;An Act Converting the Municipality of Tanauan, Province of Batangas into a Component City to be known as the City of Tanauan&quot; into law by President Gloria Macapagal-Arroyo last February 2, 2001. This was conferred through a plebiscite on March 10, 2001, which duly ratified and approved the cityhood of Tanauan.
                </p>
              </div>
            </article>

            {/* New Bottom Card: Tanauan as a City */}
            <article className="bg-slate-900/40 backdrop-blur-md border border-slate-800/80 rounded-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
              <div className="absolute -top-24 -left-24 w-96 h-96 bg-red-600/10 blur-[100px] rounded-full pointer-events-none"></div>
              
              <h2 className="text-2xl font-bold text-white mb-4 tracking-tight flex items-center gap-3">
                <span className="w-2 h-6 bg-red-600 rounded-full inline-block"></span>
                Tanauan as a City
              </h2>

              <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
                Tanauan, one of the oldest town in the province of Batangas became a 1st class municipality in 1996 and eventually became a city by virtue of Republic Ac 9005, otherwise known as &quot;An Act converting the Municipality of Tanauan into a Component City to be known as the City of Tanauan, enaceted on February 2, 2001. It was signed into law by then President Gloria Macapal Arroyo, was duly ratified and approved through a plebascite held on March 10, 2001.
              </p>
            </article>

          </div>

          {/* Sidebar / Timeline Highlights Column */}
          <aside className="lg:col-span-4 flex flex-col gap-6">
            <div className="bg-slate-900/40 backdrop-blur-md border border-slate-800/80 rounded-2xl p-6 shadow-xl sticky top-28">
              <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500"></span>
                Key Historical Milestones
              </h3>
              
              <div className="space-y-6 text-sm">
                <div className="border-l-2 border-red-500/40 pl-4 py-1">
                  <span className="text-xs font-semibold text-red-400 uppercase tracking-widest">1572</span>
                  <p className="text-slate-200 font-medium mt-1">Foundation by Augustinian missionaries near Lake Bonbon.</p>
                </div>

                <div className="border-l-2 border-red-500/40 pl-4 py-1">
                  <span className="text-xs font-semibold text-red-400 uppercase tracking-widest">1754</span>
                  <p className="text-slate-200 font-medium mt-1">Catastrophic Taal eruption triggers relocation to present site.</p>
                </div>

                <div className="border-l-2 border-red-500/40 pl-4 py-1">
                  <span className="text-xs font-semibold text-red-400 uppercase tracking-widest">1960</span>
                  <p className="text-slate-200 font-medium mt-1">Establishment of the current seat of the City Government.</p>
                </div>

                <div className="border-l-2 border-red-500/40 pl-4 py-1">
                  <span className="text-xs font-semibold text-red-400 uppercase tracking-widest">1996</span>
                  <p className="text-slate-200 font-medium mt-1">Tanauan officially achieves first-class municipality status.</p>
                </div>

                <div className="border-l-2 border-red-500/40 pl-4 py-1">
                  <span className="text-xs font-semibold text-red-400 uppercase tracking-widest">March 10, 2001</span>
                  <p className="text-slate-200 font-medium mt-1">Plebiscite ratifies Republic Act 9005, sealing cityhood.</p>
                </div>
              </div>

              {/* Decorative Callout Box */}
              <div className="mt-8 p-4 rounded-xl bg-gradient-to-br from-red-950/60 to-slate-950 border border-red-500/20 text-center">
                <h4 className="text-xs font-bold uppercase tracking-widest text-red-200 mb-1">Legacy of Freedom</h4>
                <p className="text-xs text-slate-400">Home to revolutionary icons and statesmen who shaped the Philippine republic.</p>
              </div>
            </div>
          </aside>

        </div>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}