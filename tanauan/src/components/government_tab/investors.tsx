import Footer from '../layout/Footer';
import investors1 from '../../assets/sections/pictures/investors1.webp';
import investors2 from '../../assets/sections/pictures/investors2.webp';

export default function InvestorsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F4EF] text-stone-900 pt-32 md:pt-32 selection:bg-[#7a0000] selection:text-white font-sans">
      
      {/* =====================================================
          BROADSHEET EDITORIAL MASTHEAD
      ====================================================== */}
      <header className="max-w-7xl mx-auto px-6 lg:px-12 w-full pt-6 pb-10">
        <div className="flex flex-col md:flex-row justify-between items-center text-xs uppercase tracking-[0.25em] text-stone-500 mb-4 font-semibold gap-2">
          <span></span>
          <span>Tanauan City, Batangas</span>
          <span></span>
        </div>
        
        <div className="flex flex-col items-center text-center py-6">
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-serif font-extrabold text-stone-950 tracking-tight leading-none mb-3">
            INVESTORS <span className="italic font-light text-[#7a0000]">CORNER</span>
          </h1>
          <p className="font-serif italic text-stone-600 text-sm sm:text-base max-w-2xl mx-auto">
            "A comprehensive chronicle of economic enterprise, municipal governance milestones, and private sector partnerships."
          </p>
        </div>

        <div className="flex justify-between items-center pt-4 border-t border-stone-300 text-[11px] font-mono tracking-wider text-stone-600">
          <span>EST. 2026 EDITION</span>
          <span className="text-[#7a0000] font-bold uppercase">Confidential &bull; Public Record</span>
          <span>SOUTHERN LUZON HUB</span>
        </div>
      </header>

      {/* =====================================================
          FEATURE SPREAD: THE LEAD ARTICLE (Dark Mode Variant)
      ====================================================== */}
      <section className="bg-stone-900 text-stone-100 py-20 px-6 lg:px-12 w-full my-6 shadow-xl">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Drop-Cap Editorial Story (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-block uppercase tracking-[0.2em] text-[10px] font-bold px-3 py-1 bg-[#7a0000]/60 border border-[#7a0000]/100">
              Cover Story &middot; Destination Spotlight
            </div>
            
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white leading-[1.1]">
              Welcome to <span className="italic font-normal text-[#7a0000]">Tanauan City</span> — Your Next Investment Destination
            </h2>

            {/* Editorial Multi-column split feel */}
            <div className="text-stone-300 font-light text-sm sm:text-base leading-relaxed space-y-4 pt-2">
              <p className="first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:text-[#7a0000] first-letter:float-left first-letter:pr-3 first-letter:leading-none">
                Strategically positioned in the heart of Batangas, Tanauan City stands as a towering economic powerhouse. Blending world-class industrial infrastructure with an agile local government, the city offers an unmatched landscape for local enterprises and global multi-nationals alike.
              </p>
              <p>
                Backed by a visionary administration and a highly competent labor force, Tanauan continues to streamline administrative processes, minimizing friction for investors looking to scale rapidly in the Philippine market.
              </p>
            </div>

            {/* Editorial Pull Quote */}
            <blockquote className="my-6 p-6 bg-stone-800/90 border-l-4 border-[#7a0000] font-serif italic text-stone-200 text-sm sm:text-base leading-relaxed shadow-xs">
              "Recognized nationally for transparency, rigorous accountability standards, and unyielding commitment to excellence in public governance."
            </blockquote>

            <div>
              <a 
                href="#contact-section"
                className="inline-flex items-center gap-3 bg-[#7a0000] hover:bg-[#9e0000] text-white px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-bold transition-colors duration-300 shadow-md"
              >
                <span>Inquire About Ventures</span>
                <span>&rarr;</span>
              </a>
            </div>
          </div>

          {/* Right Column: Framed Broadside Photo (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-stone-950 p-4 border border-stone-800 shadow-2xl relative">
              <div className="overflow-hidden relative">
                <img 
                  src={investors1}
                  alt="Tanauan Investment Delegation" 
                  className="w-full h-[420px] sm:h-[480px] object-cover filter contrast-[1.08] hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4 text-white">
                  <span className="text-[10px] uppercase tracking-widest text-[#7a0000] font-bold font-mono">Plate 01.0</span>
                  <p className="font-serif text-sm font-medium">Tanauan City Economic Enterprise Delegation on site inspection.</p>
                </div>
              </div>
              <div className="pt-3 px-1 flex justify-between items-center text-[10px] uppercase tracking-widest text-stone-400 font-mono border-t border-stone-800 mt-3">
                <span>Archival Image</span>
                <span className="text-[#7a0000] font-bold">FPIP Corridor</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =====================================================
          MINIMALIST HORIZONTAL CARDS: HONORS & DISTINCTION
      ====================================================== */}
      <section className="max-w-7xl mx-auto px-6 lg:px-16 py-24 w-full">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
          <div>
            <h2 className="font-serif text-4xl font-normal text-stone-950 mt-1">Honors & Distinction</h2>
          </div>
          <p className="text-xs font-mono uppercase tracking-widest text-stone-500">Record of Public Excellence</p>
        </div>

        {/* Clean Line-Separated Editorial Rows */}
        <div className="divide-y divide-stone-300 border-t border-b border-stone-300">
          
          <div className="py-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-center group">
            <div className="md:col-span-3 text-xs font-mono uppercase tracking-widest text-[#7a0000] font-semibold">
              01 &bull; Governance
            </div>
            <div className="md:col-span-4 font-serif text-2xl font-bold text-stone-950">
              Most Business-Friendly LGU
            </div>
            <div className="md:col-span-5 text-stone-600 font-light text-sm leading-relaxed">
              Multiple-time finalist under former Mayor Antonio Halili (2017–2018), with active participation continuing under Mayor Sonny Collantes.
            </div>
          </div>

          <div className="py-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-center group">
            <div className="md:col-span-3 text-xs font-mono uppercase tracking-widest text-[#7a0000] font-semibold">
              02 &bull; Commerce
            </div>
            <div className="md:col-span-4 font-serif text-2xl font-bold text-stone-950">
              Top Business Taxpayer Awards
            </div>
            <div className="md:col-span-5 text-stone-600 font-light text-sm leading-relaxed">
              First Philippine Industrial Park (FPIP) claimed Top 5 in 2022 and advanced to 4th place in 2023, showcasing robust private sector alignment.
            </div>
          </div>

          <div className="py-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-center group">
            <div className="md:col-span-3 text-xs font-mono uppercase tracking-widest text-[#7a0000] font-semibold">
              03 &bull; Accountability
            </div>
            <div className="md:col-span-4 font-serif text-2xl font-bold text-stone-950">
              National Subaybayani Awards
            </div>
            <div className="md:col-span-5 text-stone-600 font-light text-sm leading-relaxed">
              Awarded Top Overall Performer by the DILG on Nov 16, 2023, coupled with a special award for transparent and accountable governance.
            </div>
          </div>

          <div className="py-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-center group">
            <div className="md:col-span-3 text-xs font-mono uppercase tracking-widest text-[#7a0000] font-semibold">
              04 &bull; Management
            </div>
            <div className="md:col-span-4 font-serif text-2xl font-bold text-stone-950">
              Philippine Quality Award
            </div>
            <div className="md:col-span-5 text-stone-600 font-light text-sm leading-relaxed">
              Honored in 2015 for unwavering commitment to quality management practices across municipal public services.
            </div>
          </div>

        </div>

      </section>

      {/* =====================================================
          THE CEREMONY SPREAD: TOP 10 TAXPAYERS (BROADSHEET SPLIT)
      ====================================================== */}
      <section className="bg-stone-900 text-stone-100 py-20 px-6 lg:px-12 w-full my-6">
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#7a0000]">Special Honor Roll &middot; 2024 Edition</span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Top 10 Taxpayers Chronicle
            </h2>
            <div className="w-12 h-0.5 bg-[#7a0000] mx-auto" />
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-stone-400">
              Recognized July 14, 2024 at Tanauan City Hall
            </p>
          </div>

          {/* Photo & Ceremony Narrative Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-8">
            <div className="lg:col-span-6 space-y-6 text-stone-300 font-light text-sm leading-relaxed">
              <div className="p-6 bg-stone-800/80 border-l-2 border-[#7a0000] space-y-4">
                <h3 className="font-serif text-lg font-bold text-white flex items-center gap-2">
                  <span>🎖️</span> Official Recognition Narrative
                </h3>
                <p>
                  Sa pag-unlad ng Lungsod ng Tanauan, kaakibat nito ang bukas na pakikipagtulungan sa bawat pribadong sektor - at bilang pasasalamat ng Pamahalaang Lungsod sa ilalim ng pamumuno nina Mayor Sonny Perez Collantes at Vice Mayor Dodong Panganiban Ablao kasama ang Sangguniang Panlungsod...
                </p>
                <p className="text-xs font-mono text-stone-400 pt-2 border-t border-stone-700">
                  Led by BPLO Head Ms. Marilou Blaza & Treasury Office Head Mr. Fernando Manzanero via computerized "Ease of Doing Business" collection frameworks.
                </p>
              </div>

              <div className="p-6 bg-stone-800/80 border-l-2 border-[#7a0000] space-y-3">
                <h3 className="font-serif text-lg font-bold text-white flex items-center gap-2">
                  <span>🏆</span> Mayor Sonny's Call to Action
                </h3>
                <p>
                  Mayor Sonny binigyang-diin ang natatanging kontribusyon ng pribadong sektor tungo sa paghahatid ng pangunahing serbisyo. Hinikayat ang mga negosyante na palawakin ang kolaborasyon sa pamamagitan ng Corporate Social Responsibility (CSR) Programs.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="p-3 bg-stone-950 border border-stone-700 shadow-2xl">
                <div className="relative overflow-hidden">
                  <img 
                    src={investors2}
                    alt="Taxpayers Recognition Night" 
                    className="w-full h-[450px] sm:h-[520px] object-cover filter contrast-[1.1]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex items-end p-6">
                    <div className="space-y-1 text-white">
                      <span className="text-[10px] font-mono tracking-widest bg-[#7a0000] px-2 py-0.5">Plate 02.0</span>
                      <h4 className="font-serif text-base font-bold">Awards Night Assembly</h4>
                      <p className="text-xs text-stone-400 font-mono">Tanauan City Hall &bull; July 14, 2024</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 border-t border-b border-stone-800 py-12">
            
            {/* Real Property Taxpayers */}
            <div className="space-y-6 lg:pr-8 lg:border-r border-stone-800">
              <div className="flex items-center justify-between border-b border-stone-800 pb-4">
                <h3 className="font-serif text-2xl font-medium text-white">2024 Top 10 Real Property Taxpayers</h3>
                <span className="font-serif italic text-sm text-[#7a0000]">Honor Roll</span>
              </div>
              <ol className="divide-y divide-stone-800/80 text-sm font-sans">
                <li className="py-3 flex items-center justify-between"><span className="font-serif font-bold text-[#7a0000] mr-4 text-lg">01</span> <span className="flex-1 text-stone-200 font-medium">Philip Morris Manufacturing, Inc.</span></li>
                <li className="py-3 flex items-center justify-between"><span className="font-serif font-bold text-[#7a0000] mr-4 text-lg">02</span> <span className="flex-1 text-stone-200 font-medium">Nestlé Philippines, Inc</span></li>
                <li className="py-3 flex items-center justify-between"><span className="font-serif font-bold text-[#7a0000] mr-4 text-lg">03</span> <span className="flex-1 text-stone-200 font-medium">Philippine Manufacturing Co. of Murata, Inc.</span></li>
                <li className="py-3 flex items-center justify-between"><span className="font-serif font-bold text-[#7a0000] mr-4 text-lg">04</span> <span className="flex-1 text-stone-200 font-medium">Brother Industries (Philippines), Inc. (BIPI)</span></li>
                <li className="py-3 flex items-center justify-between"><span className="font-serif font-bold text-[#7a0000] mr-4 text-lg">05</span> <span className="flex-1 text-stone-200 font-medium">Honda Philippines, Inc. (HPI)</span></li>
                <li className="py-3 flex items-center justify-between"><span className="font-serif font-bold text-[#7a0000] mr-4 text-lg">06</span> <span className="flex-1 text-stone-200 font-medium">First Philippine Industrial Park</span></li>
                <li className="py-3 flex items-center justify-between"><span className="font-serif font-bold text-[#7a0000] mr-4 text-lg">07</span> <span className="flex-1 text-stone-200 font-medium">Canon Business Machine (Philippines) Inc.</span></li>
                <li className="py-3 flex items-center justify-between"><span className="font-serif font-bold text-[#7a0000] mr-4 text-lg">08</span> <span className="flex-1 text-stone-200 font-medium">Shimano (Philippines) Inc.</span></li>
                <li className="py-3 flex items-center justify-between"><span className="font-serif font-bold text-[#7a0000] mr-4 text-lg">09</span> <span className="flex-1 text-stone-200 font-medium">WCL Ventures Development, Inc.</span></li>
                <li className="py-3 flex items-center justify-between"><span className="font-serif font-bold text-[#7a0000] mr-4 text-lg">10</span> <span className="flex-1 text-stone-200 font-medium">First Industrial Township, Inc.</span></li>
              </ol>
            </div>

            {/* Business Taxpayers */}
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-stone-800 pb-4">
                <h3 className="font-serif text-2xl font-medium text-white">2024 Top 10 Business Taxpayers</h3>
                <span className="font-serif italic text-sm text-[#7a0000]">Honor Roll</span>
              </div>
              <ol className="divide-y divide-stone-800/80 text-sm font-sans">
                <li className="py-3 flex items-center justify-between"><span className="font-serif font-bold text-[#7a0000] mr-4 text-lg">01</span> <span className="flex-1 text-stone-200 font-medium">Honda Philippines, Inc.</span></li>
                <li className="py-3 flex items-center justify-between"><span className="font-serif font-bold text-[#7a0000] mr-4 text-lg">02</span> <span className="flex-1 text-stone-200 font-medium">PMFTC Inc.- Darasa</span></li>
                <li className="py-3 flex items-center justify-between"><span className="font-serif font-bold text-[#7a0000] mr-4 text-lg">03</span> <span className="flex-1 text-stone-200 font-medium">PMFTC Inc.</span></li>
                <li className="py-3 flex items-center justify-between"><span className="font-serif font-bold text-[#7a0000] mr-4 text-lg">04</span> <span className="flex-1 text-stone-200 font-medium">First Philec, Inc.</span></li>
                <li className="py-3 flex items-center justify-between"><span className="font-serif font-bold text-[#7a0000] mr-4 text-lg">05</span> <span className="flex-1 text-stone-200 font-medium">Taikisha Philippines Inc.</span></li>
                <li className="py-3 flex items-center justify-between"><span className="font-serif font-bold text-[#7a0000] mr-4 text-lg">06</span> <span className="flex-1 text-stone-200 font-medium">Nestle Philippines Inc.</span></li>
                <li className="py-3 flex items-center justify-between"><span className="font-serif font-bold text-[#7a0000] mr-4 text-lg">07</span> <span className="flex-1 text-stone-200 font-medium">Kerry Manufacturing (Philippines), Inc.</span></li>
                <li className="py-3 flex items-center justify-between"><span className="font-serif font-bold text-[#7a0000] mr-4 text-lg">08</span> <span className="flex-1 text-stone-200 font-medium">Healthway Daniel O. Mercado Medical Center Inc.</span></li>
                <li className="py-3 flex items-center justify-between"><span className="font-serif font-bold text-[#7a0000] mr-4 text-lg">09</span> <span className="flex-1 text-stone-200 font-medium">Hitachi Astemo Philippines Corporation</span></li>
                <li className="py-3 flex items-center justify-between"><span className="font-serif font-bold text-[#7a0000] mr-4 text-lg">10</span> <span className="flex-1 text-stone-200 font-medium">Uni-President (Philippines) Corporation</span></li>
              </ol>
            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          COMMITMENT TO EXCELLENCE (Editorial Pull-Quote Banner)
      ====================================================== */}
      <section className="max-w-7xl mx-auto px-6 lg:px-16 py-12 w-full">
        <div className="bg-[#7a0000] text-[#F7F4EF] p-10 md:p-14 relative overflow-hidden shadow-xl">
          <div className="absolute -right-10 -bottom-10 font-serif text-9xl text-white/10 select-none pointer-events-none">“</div>
          <div className="max-w-4xl relative z-10 space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] text-stone-300 font-semibold block font-mono">Commitment to Excellence</span>
            <p className="font-serif text-xl md:text-2xl leading-relaxed italic">
              "Kaugnay nito, patuloy ang Pamahalaang Lungsod ng Tanauan sa hangarin nitong maging isang huwarang lungsod na kinikilala ang mahalagang papel ng mga tapat na pagbabayad ng buwis at maayos na pamamahalang pananalapi ng lungsod tungo sa pagtataguyod ng isang inklusibo at maunlad na Tanauan."
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY INVEST IN TANAUAN? (Editorial Grid with Thin Borders)
      ====================================================== */}
      <section className="max-w-7xl mx-auto px-6 lg:px-16 py-16 w-full space-y-12">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.25em] text-[#7a0000] font-semibold mb-2 block font-mono">Opportunities</span>
          <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight text-stone-950">Why Invest in Tanauan?</h2>
          <div className="w-12 h-0.5 bg-[#7a0000] mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-stone-300 border border-stone-300">
          
          <div className="bg-[#F7F4EF] p-8 space-y-3">
            <h3 className="font-serif text-2xl font-medium text-[#7a0000]">Strategic Location</h3>
            <p className="text-sm text-stone-700 leading-relaxed font-light">Direct access to SLEX and STAR Tollway, just 45 minutes from Metro Manila, making logistics and transportation highly efficient.</p>
          </div>
          
          <div className="bg-[#F7F4EF] p-8 space-y-3">
            <h3 className="font-serif text-2xl font-medium text-[#7a0000]">Industrial Powerhouse</h3>
            <p className="text-sm text-stone-700 leading-relaxed font-light">Home to the First Philippine Industrial Park (FPIP) with over 67 multinational companies operating in various sectors.</p>
          </div>
          
          <div className="bg-[#F7F4EF] p-8 space-y-3">
            <h3 className="font-serif text-2xl font-medium text-[#7a0000]">Green Energy Leader</h3>
            <p className="text-sm text-stone-700 leading-relaxed font-light">Site of a 64-MW solar power facility supporting clean energy goals and sustainable development initiatives.</p>
          </div>
          
          <div className="bg-[#F7F4EF] p-8 space-y-3">
            <h3 className="font-serif text-2xl font-medium text-[#7a0000]">Robust Workforce</h3>
            <p className="text-sm text-stone-700 leading-relaxed font-light">Young, skilled, and job-ready population with access to quality education and training facilities.</p>
          </div>
          
          <div className="bg-[#F7F4EF] p-8 space-y-3">
            <h3 className="font-serif text-2xl font-medium text-[#7a0000]">Investor-Friendly Policies</h3>
            <p className="text-sm text-stone-700 leading-relaxed font-light">Fast, transparent, and efficient business processing with supportive local government policies.</p>
          </div>
          
          <div className="bg-[#F7F4EF] p-8 space-y-3">
            <h3 className="font-serif text-2xl font-medium text-[#7a0000]">Established Ecosystem</h3>
            <p className="text-sm text-stone-700 leading-relaxed font-light">Join global brands like Honda, Canon, Nestlé, and B/E Aerospace that have already made Tanauan their home.</p>
          </div>

        </div>
      </section>

      {/* =====================================================
          PRIORITY INVESTMENT AREAS
      ====================================================== */}
      <section className="max-w-7xl mx-auto px-6 lg:px-16 py-16 w-full space-y-12">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.25em] text-[#7a0000] font-semibold mb-2 block font-mono">Focus Sectors</span>
          <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight text-stone-950">Priority Investment Areas</h2>
          <div className="w-12 h-0.5 bg-[#7a0000] mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-b border-stone-300 py-12 bg-white/40 p-8 shadow-sm">
          <div className="space-y-2 pr-6 border-b md:border-b-0 pb-6 md:pb-0 border-stone-300">
            <h3 className="font-serif text-xl font-medium text-[#7a0000]">Industrial Zones & Manufacturing</h3>
            <p className="text-sm text-stone-700 leading-relaxed font-light">Advanced manufacturing, electronics, automotive parts, and other high-value industries with export potential.</p>
          </div>
          <div className="space-y-2 pl-0 md:pl-6">
            <h3 className="font-serif text-xl font-medium text-[#7a0000]">Real Estate Development</h3>
            <p className="text-sm text-stone-700 leading-relaxed font-light">Residential, mixed-use, and commercial developments to support the growing population and business community.</p>
          </div>
          <div className="space-y-2 pr-6 pt-6 border-t border-stone-300">
            <h3 className="font-serif text-xl font-medium text-[#7a0000]">Renewable Energy Projects</h3>
            <p className="text-sm text-stone-700 leading-relaxed font-light">Solar, wind, and other clean energy initiatives aligned with the city's sustainability goals.</p>
          </div>
          <div className="space-y-2 pl-0 md:pl-6 pt-6 border-t border-stone-300">
            <h3 className="font-serif text-xl font-medium text-[#7a0000]">Public Market & Commercial Redevelopment</h3>
            <p className="text-sm text-stone-700 leading-relaxed font-light">Modern retail spaces, public markets, and commercial centers to serve the growing community.</p>
          </div>
        </div>
      </section>

      {/* =====================================================
          GOVERNMENT SUPPORT FOR INVESTORS
      ====================================================== */}
      <section className="max-w-7xl mx-auto px-6 lg:px-16 py-16 w-full space-y-12 text-center">
        <div className="max-w-2xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-[#7a0000] font-semibold block font-mono">Partnership</span>
          <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight text-stone-950">Government Support for Investors</h2>
          <p className="text-sm text-stone-600">The City Government of Tanauan is committed to supporting your business through:</p>
          <div className="w-12 h-0.5 bg-[#7a0000] mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="border border-stone-300 p-6 bg-[#F7F4EF] space-y-3 flex flex-col justify-center items-center text-center shadow-sm">
            <span className="font-serif text-[#7a0000] text-2xl font-bold">I</span>
            <h3 className="font-serif text-lg font-medium text-stone-900">Streamlined permits and licensing</h3>
          </div>
          <div className="border border-stone-300 p-6 bg-[#F7F4EF] space-y-3 flex flex-col justify-center items-center text-center shadow-sm">
            <span className="font-serif text-[#7a0000] text-2xl font-bold">II</span>
            <h3 className="font-serif text-lg font-medium text-stone-900">Local tax incentives (where applicable)</h3>
          </div>
          <div className="border border-stone-300 p-6 bg-[#F7F4EF] space-y-3 flex flex-col justify-center items-center text-center shadow-sm">
            <span className="font-serif text-[#7a0000] text-2xl font-bold">III</span>
            <h3 className="font-serif text-lg font-medium text-stone-900">Investor facilitation and assistance</h3>
          </div>
          <div className="border border-stone-300 p-6 bg-[#F7F4EF] space-y-3 flex flex-col justify-center items-center text-center shadow-sm">
            <span className="font-serif text-[#7a0000] text-2xl font-bold">IV</span>
            <h3 className="font-serif text-lg font-medium text-stone-900">Access to local partnerships</h3>
          </div>
        </div>
      </section>

      {/* =====================================================
          CALL TO ACTION BANNER
      ====================================================== */}
      <section id="contact-section" className="max-w-7xl mx-auto px-6 lg:px-16 py-16 w-full">
        <div className="bg-[#7a0000] text-[#F7F4EF] p-12 md:p-16 text-center space-y-6 shadow-xl">
          <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight">Tanauan City is ready. Are you?</h2>
          <p className="max-w-xl mx-auto text-stone-200 text-sm leading-relaxed font-light">
            Partner with us and build the future—today. Connect with our investment team to explore opportunities.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a href="mailto:invest@tanauancity.gov.ph" className="bg-[#F7F4EF] text-stone-950 px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-bold hover:bg-white transition-colors">Email Us</a>
            <a href="tel:0437784343" className="border border-stone-300/60 px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-bold hover:border-white text-white transition-colors">Call: (043) 778-4343</a>
          </div>
        </div>
      </section>

      {/* Footer Component */}
      <Footer />
    </div>
  );
}