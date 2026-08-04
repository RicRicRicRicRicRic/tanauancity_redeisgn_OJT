export default function StatusUpdates2025Section() {
  const metrics = [
    {
      id: 1,
      value: "229,334",
      label: "Total Population",
      description: "Citizens thriving in our vibrant, rapidly expanding community",
      featured: true,
    },
    {
      id: 2,
      value: "3,870",
      label: "Registered Businesses",
      description: "Active enterprises driving the local economy",
      featured: false,
    },
    {
      id: 3,
      value: "61,500",
      label: "Households",
      description: "Families residing across Tanauan City",
      featured: false,
    },
    {
      id: 4,
      value: "10,716",
      unit: "Ha",
      label: "Land Area",
      description: "Total geographic scope of the city",
      featured: false,
    },
  ];

  return (
    <section 
      id="status-updates-2025" 
      className="relative py-16 px-4 md:px-6 bg-gradient-to-b from-[#fdf2f2] via-[#fcf5f5] to-[#f8eaeae6] overflow-hidden"
    >
      {/* Background Soft Glow Accents */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#901c1c]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#901c1c]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle Dot Matrix Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#901c1c 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="relative max-w-6xl mx-auto z-10">
        
        {/* Asymmetric 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Headline & Narrative (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#901c1c]/10 text-[#901c1c] border border-[#901c1c]/20 mb-4 shadow-xs">
              City Growth Metrics
            </span>

            <h2 className="text-3xl md:text-4xl font-extrabold text-[#901c1c] tracking-tight leading-tight">
              Status Updates <br />
              <span className="text-gray-900">as of 2025</span>
            </h2>

            <div className="w-16 h-1 bg-[#901c1c] rounded-full my-4" />

            <p className="text-gray-600 text-xs md:text-sm font-medium leading-relaxed mb-6">
              The growing numbers reflect our city&apos;s continued development and progress towards becoming a premier urban center in Batangas.
            </p>

            {/* Quick Stat Summary Chip without Dot */}
            <div className="inline-flex items-center py-2 px-3.5 bg-[#901c1c]/5 rounded-full">
              <span className="text-xs font-bold text-gray-800">
                Continuous Urban Growth & Development
              </span>
            </div>
          </div>

          {/* Right Column: Clean Metric List (7 cols) */}
          <div className="lg:col-span-7 flex flex-col divide-y divide-rose-200/60">
            {metrics.map((item) => {
              if (item.featured) {
                // Featured Primary Metric
                return (
                  <div
                    key={item.id}
                    className="group pb-6 flex flex-col justify-between transition-all duration-300"
                  >
                    <div className="mb-2">
                      <span className="text-[11px] font-bold tracking-wider text-[#901c1c] uppercase">
                        Primary Statistic — {item.label}
                      </span>
                    </div>

                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-4xl md:text-5xl font-extrabold text-[#901c1c] tracking-tight">
                        {item.value}
                      </span>
                    </div>

                    <p className="text-xs text-gray-500 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              }

              // Cardless Stacked Rows
              return (
                <div
                  key={item.id}
                  className="group py-4.5 flex items-center justify-between gap-4 transition-all duration-300"
                >
                  <div>
                    <h3 className="text-xs md:text-sm font-bold text-gray-900 group-hover:text-[#901c1c] transition-colors">
                      {item.label}
                    </h3>
                    <p className="text-[11px] text-gray-500 line-clamp-1">
                      {item.description}
                    </p>
                  </div>

                  <div className="text-right shrink-0">
                    <div className="flex items-baseline justify-end gap-1">
                      <span className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-[#901c1c] transition-colors">
                        {item.value}
                      </span>
                      {item.unit && (
                        <span className="text-[10px] font-semibold text-gray-400">
                          {item.unit}
                        </span>
                      )}
                    </div>
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