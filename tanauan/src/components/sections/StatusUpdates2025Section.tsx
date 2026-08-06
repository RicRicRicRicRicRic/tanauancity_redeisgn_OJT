import React, { useState } from 'react';

export default function StatusUpdates2025Section() {
  const [activeMetric, setActiveMetric] = useState(1);

  const metrics = [
    {
      id: 1,
      value: "229,334",
      label: "Total Population",
      description: "Citizens thriving in Tanauan's urban and agricultural districts.",
      share: "7.8%",
      comparison: "of total Batangas population",
      icon: "👥",
    },
    {
      id: 2,
      value: "3,870",
      label: "Registered Businesses",
      description: "Active commercial & industrial enterprises driving commerce.",
      share: "12.5%",
      comparison: "of commercial hub activity",
      icon: "🏢",
    },
    {
      id: 3,
      value: "61,500",
      label: "Households",
      description: "Residences spread across 48 barangays in Tanauan.",
      share: "7.6%",
      comparison: "of all provincial households",
      icon: "🏠",
    },
    {
      id: 4,
      value: "10,716",
      unit: "Ha",
      label: "Land Area",
      description: "Strategic geographic footprint in Northern Batangas.",
      share: "3.4%",
      comparison: "of total Batangas land mass",
      icon: "📍",
    },
  ];

  return (
    <section 
      id="status-updates-2025" 
      className="relative py-20 px-3.5 md:px-7 bg-gradient-to-br from-[#fdf2f2] via-[#fff8f8] to-[#f8e8e8] overflow-hidden select-none"
    >
      {/* Background Lighting Accents */}
      <div className="absolute -top-28 -left-28 w-[450px] h-[450px] bg-[#901c1c]/10 rounded-full blur-[125px] pointer-events-none" />
      <div className="absolute -bottom-28 -right-28 w-[450px] h-[450px] bg-rose-300/20 rounded-full blur-[125px] pointer-events-none" />

      {/* Micro-dot Canvas Texture */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#901c1c 1px, transparent 1px)`,
          backgroundSize: '25px 25px'
        }}
      />

      <div className="relative max-w-[90%] md:max-w-5xl mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column (7 Cols): Extended & Credentialed Layout */}
          <div className="lg:col-span-7 flex flex-col justify-between items-start text-left pr-0 lg:pr-7">
            
            <div>
              {/* Top Pill with Glow Indicator */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-bold bg-[#901c1c]/10 text-[#901c1c] border border-[#901c1c]/25 mb-5 backdrop-blur-md shadow-xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#901c1c] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#901c1c]" />
                </span>
                Official Provincial Growth Insights
              </div>

              {/* Headline + Option 1 Executive Message */}
              <div className="relative pl-4 border-l-2 border-[#901c1c]">
                <h2 className="text-3xl md:text-5xl font-black text-[#901c1c] tracking-tight leading-[1.08]">
                  Status Updates <br />
                  <span className="text-gray-900 font-serif italic font-normal text-2xl md:text-4xl">as of 2025</span>
                </h2>

                <p className="text-[11px] font-bold text-[#901c1c] uppercase tracking-wider mt-2.5 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#901c1c]" />
                  Transparent Governance • Measured Impact across 48 Barangays
                </p>

                <p className="text-gray-700 text-sm md:text-base font-medium leading-relaxed mt-4 max-w-lg">
                  The growing numbers reflect Tanauan City&apos;s continuous development and progress towards becoming a primary economic and urban hub in Batangas.
                </p>
              </div>

              {/* Added Official Governance Badges & Credentials Row */}
              <div className="mt-6 grid grid-cols-2 gap-3 max-w-lg">
                <div className="p-3 rounded-xl bg-white/60 border border-rose-200/60 backdrop-blur-xs flex items-center gap-2.5">
                  <span className="text-lg">📜</span>
                  <div>
                    <p className="text-[10px] font-bold text-[#901c1c] uppercase tracking-wider">Certified Source</p>
                    <p className="text-xs font-semibold text-gray-800">CPDO & PSA Verified</p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white/60 border border-rose-200/60 backdrop-blur-xs flex items-center gap-2.5">
                  <span className="text-lg">🏛️</span>
                  <div>
                    <p className="text-[10px] font-bold text-[#901c1c] uppercase tracking-wider">Governance</p>
                    <p className="text-xs font-semibold text-gray-800">SGLG Compliant Standard</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Sub-Feature Card */}
            <div className="mt-6 w-full max-w-lg p-4 rounded-2xl bg-white/80 border border-rose-200/90 shadow-md backdrop-blur-md relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#901c1c] via-rose-500 to-amber-400" />
              
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#901c1c]">
                  City Leadership Direction
                </span>
                <span className="text-[10px] font-black text-amber-600 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                  Batangas Urban Core
                </span>
              </div>

              <p className="text-xs font-semibold text-gray-800 leading-snug">
                Continuous Urban Growth, Smart Economic Zones & Modern Infrastructure Development
              </p>

              <div className="mt-3 pt-2.5 border-t border-rose-100 flex items-center justify-between text-[11px] text-gray-500">
                <span>Updated Annually</span>
                <span className="font-bold text-[#901c1c]">Office of the City Mayor</span>
              </div>
            </div>

          </div>

          {/* Right Column (5 Cols): Interactive Gauge Showcase */}
          <div className="lg:col-span-5 space-y-3.5 flex flex-col justify-center">
            {metrics.map((item) => {
              const isActive = activeMetric === item.id;

              return (
                <div
                  key={item.id}
                  onClick={() => setActiveMetric(item.id)}
                  onMouseEnter={() => setActiveMetric(item.id)}
                  className={`group relative cursor-pointer p-3.5 rounded-xl transition-all duration-300 ease-out border backdrop-blur-md ${
                    isActive
                      ? "bg-white/90 border-[#901c1c]/40 shadow-md shadow-[#901c1c]/5 -translate-y-0.5"
                      : "bg-white/40 border-rose-200/40 hover:bg-white/70 hover:border-rose-300"
                  }`}
                >
                  <div 
                    className={`absolute left-0 top-2.5 bottom-2.5 w-0.5 rounded-r-full bg-gradient-to-b from-[#901c1c] to-amber-500 transition-all duration-300 ${
                      isActive ? "opacity-100 scale-y-100" : "opacity-0 scale-y-50"
                    }`} 
                  />

                  <div className="flex items-center justify-between mb-1 pl-1.5">
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs">{item.icon}</span>
                      <span className={`text-[11px] font-extrabold uppercase tracking-widest transition-colors ${
                        isActive ? "text-[#901c1c]" : "text-gray-500"
                      }`}>
                        {item.label}
                      </span>
                    </div>

                    <span className={`text-[11px] font-black px-2 py-0.5 rounded-full transition-all ${
                      isActive 
                        ? "bg-[#901c1c] text-white shadow-xs" 
                        : "bg-[#901c1c]/10 text-[#901c1c]"
                    }`}>
                      {item.share}
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 pl-1.5 my-1">
                    <div className="flex items-baseline gap-1">
                      <span className={`text-2xl md:text-3xl font-black tracking-tight transition-all duration-300 ${
                        isActive ? "text-[#901c1c] scale-[1.02] origin-left" : "text-gray-900"
                      }`}>
                        {item.value}
                      </span>
                      {item.unit && (
                        <span className="text-xs font-bold text-amber-600">
                          {item.unit}
                        </span>
                      )}
                    </div>

                    <span className={`text-[11px] md:text-xs font-bold transition-colors ${
                      isActive ? "text-gray-800" : "text-gray-600"
                    }`}>
                      {item.comparison}
                    </span>
                  </div>

                  <div className="mt-2.5 pl-1.5 flex items-center gap-2.5">
                    <div className="w-full h-1 bg-rose-200/50 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-[#901c1c] via-rose-500 to-amber-500 transition-all duration-500 ease-out"
                        style={{ width: isActive ? item.share : '15%' }}
                      />
                    </div>
                  </div>

                  <div className={`grid transition-all duration-300 ease-in-out pl-1.5 ${
                    isActive ? "grid-rows-[1fr] opacity-100 mt-2 pt-1.5 border-t border-rose-100/80" : "grid-rows-[0fr] opacity-0"
                  }`}>
                    <p className="overflow-hidden text-[11px] text-gray-600 font-medium leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}