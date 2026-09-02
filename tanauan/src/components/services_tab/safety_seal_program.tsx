import { useState } from 'react';
import Footer from '../layout/Footer';
import safety_seal from '../../assets/sections/pictures/safety_seal.png';

interface CertifiedBusiness {
  no: number;
  name: string;
  date: string;
}

const certifiedBusinessesData: CertifiedBusiness[] = [
  { no: 1, name: "SIMPLY SHOES (SHOEMART INC.)", date: "December 06, 2022" },
  { no: 2, name: "ABENSON VENTURES (MOTORPRO)", date: "December 06, 2022" },
  { no: 3, name: "FUNTIME", date: "December 09, 2022" },
  { no: 4, name: "ELECTROWORLD", date: "December 09, 2022" },
  { no: 5, name: "WORLD OF FUN", date: "December 09, 2022" },
  { no: 6, name: "JOLLIBEE WALTERMART – TANAUAN", date: "February 23, 2023" },
  { no: 7, name: "ABENSON VENTURES, INC. (APPLIANCES)", date: "February 25, 2023" },
  { no: 8, name: "BANK OF COMMERCE", date: "January 25, 2023" },
  { no: 9, name: "OTTO GENERAL MERCHANDISE", date: "March 2, 2023" },
  { no: 10, name: "WILLIN SALES INC. (WALTERMART)", date: "March 2, 2023" },
  { no: 11, name: "W DEPARTMENT STORE", date: "March 2, 2023" },
  { no: 12, name: "A WORLD OF KNOWLEDGE LEARNING CENTER (KUMON)", date: "March 2, 2023" },
  { no: 13, name: "EXPRESSIONS STATIONERY SHOP INC. (WALTERMART)", date: "March 5, 2023" },
  { no: 14, name: "JOLLIBEE – TANAUAN CROSSING", date: "March 12, 2023" },
  { no: 15, name: "HOMEPLUS – TANAUAN", date: "OCTOBER 07, 2022" },
  { no: 16, name: "STI – ANAUAN", date: "OCTOBER 28, 2022" },
  { no: 17, name: "MINISO  – WALTERMART", date: "SEPTEMBER 28, 2022" },
  { no: 18, name: "JOLLIBEE – VICTORY MALL TANAUAN", date: "March 29, 2023" },
  { no: 19, name: "BENCH – WALTERMART", date: "APRIL 26, 2023" },
  { no: 20, name: "LYNDERM FACIAL CENTER AND DAY SPA", date: "APRIL 26, 2023" },
];

export default function TransparencyPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredBusinesses = certifiedBusinessesData.filter((b) =>
    b.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F5F0] text-[#111827] pt-36 md:pt-31">
      
      {/* =========================================================
          CENTERED EDITORIAL HEADER SECTION
      ========================================================= */}
      <section className="relative bg-[#F7F5F0] border-b border-black/10 overflow-hidden">
        
        <div className="absolute left-1/2 top-10 -translate-x-1/2 h-64 w-64 rounded-full bg-[#7a0000]/5 blur-3xl pointer-events-none" />

        <div className="flex flex-col items-center relative mx-auto max-w-4xl px-6 py-12 text-center">
          
          <div className="inline-flex items-center gap-2.5 rounded-full border border-black/10 bg-white px-3.5 py-1 shadow-xs mx-auto mb-4">
            <span className="h-2 w-2 rounded-full bg-[#7a0000] animate-pulse" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#7a0000]">
              Compliance & Public Records
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl tracking-tight text-[#111827] whitespace-nowrap">
            Safety Seal <span className="text-[#7a0000]">Program.</span>
          </h1>

          <p className="mt-4 mx-auto max-w-xl text-sm leading-relaxed text-[#6B7280] sm:text-base">
            An official certification scheme affirming compliance with public health standards and government mandates, assuring safe environments for citizens and visitors in Tanauan City.
          </p>

          <div className="mt-6 flex justify-center">
            <div className="overflow-hidden rounded-xl transition-transform duration-300 hover:scale-105">
              <img
                src={safety_seal}
                alt="Safety Seal Logo"
                className="h-24 w-24 sm:h-28 sm:w-28 object-contain"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Main Content Area */}
      <main className="flex-1 mx-auto max-w-7xl w-full px-6 py-16 lg:px-8">

        {/* Top Editorial Issue Metadata Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-black/20 pb-6 mb-12 gap-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#7a0000] bg-[#7a0000]/10 px-2.5 py-1 rounded">
              Safety // Compliance
            </span>
            <span className="text-xs uppercase tracking-widest text-[#6B7280]">
              Tanauan City Public Registry
            </span>
          </div>
          <div className="text-xs tracking-widest text-[#6B7280] uppercase">
            Issued under national health mandates
          </div>
        </div>

        {/* Avant-Garde Asymmetric Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          <div className="lg:col-span-7 flex flex-col">
            <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl tracking-tighter text-[#111827] leading-[1.05]">
              Protect Your Business <br />
              <span className="italic font-normal text-[#7a0000]">and Customers</span>
            </h2>

            <p className="mt-8 text-lg sm:text-xl text-[#4B5563] font-light leading-relaxed max-w-xl">
              The Safety Seal Certification functions as an elite benchmark—affording establishments a verified stamp of compliance with minimum public health standards and advanced digital tracking frameworks.
            </p>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8 border-t border-black/10">
              <div>
                <h4 className="text-xs uppercase font-mono tracking-widest text-[#7a0000] mb-1">01. Standard</h4>
                <p className="text-sm text-[#6B7280]">Minimum public health adherence across all operational physical spaces.</p>
              </div>
              <div>
                <h4 className="text-xs uppercase font-mono tracking-widest text-[#7a0000] mb-1">02. Protocol</h4>
                <p className="text-sm text-[#6B7280]">Direct integration with digital frameworks like StaySafe.ph.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col items-center lg:items-end">
            <div className="w-full max-w-sm rounded-2xl bg-[#7a0000] text-white p-8 sm:p-10 shadow-2xl relative overflow-hidden group">
              <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#7a0000]/40 blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />

              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="h-32 w-32 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center p-4 mb-6 backdrop-blur-md">
                  <img
                    src={safety_seal}
                    alt="Safety Seal Logo"
                    className="h-24 w-24 object-contain drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]"
                  />
                </div>
                
                <span className="font-mono text-[10px] tracking-widest text-gray-400 uppercase">
                  Official Certification Object
                </span>
                <h3 className="font-serif text-2xl mt-1 mb-6">Tanauan Compliance</h3>

                <div className="w-full flex flex-col gap-3">
                  <a
                    href="#apply"
                    className="w-full py-3 px-4 rounded-xl bg-[#7a0000] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#990000] transition-colors text-center shadow-lg"
                  >
                    Apply Online Now
                  </a>
                  <a
                    href="#certified-registry"
                    className="w-full py-3 px-4 rounded-xl bg-transparent border border-white/20 text-white text-xs font-semibold uppercase tracking-wider hover:bg-white/10 transition-colors text-center"
                  >
                    View Certified Registry
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* =========================================================
            EDITORIAL PROGRAM OVERVIEW & ELIGIBILITY
        ========================================================= */}
        <div className="mt-28 border-t border-black/10 pt-20">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
            <div className="lg:col-span-5">
              <h3 className="font-serif text-3xl sm:text-4xl text-[#111827] tracking-tight">
                About the Program
              </h3>
              <p className="mt-2 text-sm text-[#6B7280] font-mono">
                Mandatory compliance standards for Tanauan establishments.
              </p>
            </div>
            <div className="lg:col-span-7">
              <p className="text-lg text-[#4B5563] font-light leading-relaxed">
                The Safety Seal Certification is an official scheme that affirms an establishment is fully compliant with minimum public health standards set by the government, seamlessly integrating digital contact tracing protocols through systems like StaySafe.ph.
              </p>
            </div>
          </div>

          <div className="mb-24">
            <div className="mb-10">
              <h3 className="font-serif text-2xl sm:text-3xl text-[#111827]">
                Who Can Apply?
              </h3>
              <p className="text-sm text-[#6B7280] mt-1">
                The City Government of Tanauan issues the Safety Seal across multiple sectors:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="rounded-3xl bg-white p-8 sm:p-10 border border-black/10 shadow-sm hover:shadow-md transition-shadow">
                <span className="font-mono text-xs uppercase tracking-widest text-[#7a0000]">Category A</span>
                <h4 className="font-serif text-xl text-[#111827] mt-1 mb-6">Business Establishments</h4>
                <ul className="space-y-4 text-sm text-[#4B5563]">
                  {['Malls and wet markets', 'Retail stores', 'Restaurants and food establishments', 'Banks and financial services', 'Car wash and laundry services'].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#7a0000]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl bg-white p-8 sm:p-10 border border-black/10 shadow-sm hover:shadow-md transition-shadow">
                <span className="font-mono text-xs uppercase tracking-widest text-[#7a0000]">Category B</span>
                <h4 className="font-serif text-xl text-[#111827] mt-1 mb-6">Other Establishments</h4>
                <ul className="space-y-4 text-sm text-[#4B5563]">
                  {['Art galleries, libraries, and museums', 'Educational centers and gyms', 'Spas and wellness centers', 'Entertainment venues', 'Other private establishments'].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#7a0000]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-black/10 pt-20">
            <div className="mb-12">
              <h3 className="font-serif text-3xl sm:text-4xl text-[#111827] tracking-tight mt-4">
                Benefits of Getting Certified
              </h3>
              <p className="text-sm text-[#6B7280] mt-2 max-w-xl">
                Elevate your enterprise reputation and provide absolute assurance to the public.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Increased Customer Trust", desc: "Build immediate public confidence and secure consumer loyalty in physical spaces." },
                { title: "Government Compliance", desc: "Ensure full adherence to state mandates and avoid regulatory penalties." },
                { title: "Safety Culture", desc: "Promote a proactive corporate environment centered on health and protection." },
                { title: "Competitive Edge", desc: "Stand out distinctly against non-certified local competitors in your market." },
                { title: "Community Security", desc: "Directly contribute to lowering health transmission risks across Tanauan City." },
                { title: "Business Incentives", desc: "Unlock potential local government privileges and expedited municipal processing." }
              ].map((benefit, idx) => (
                <div 
                  key={idx} 
                  className="group rounded-2xl bg-white p-8 border border-black/10 transition-all duration-300 hover:-translate-y-1 hover:border-[#7a0000]/40 hover:shadow-lg hover:shadow-black/5 flex flex-col justify-between"
                >
                  <div>
                    <span className="font-mono text-xs text-[#7a0000] font-semibold">0{idx + 1}</span>
                    <h4 className="font-serif text-xl text-[#111827] mt-3 mb-2">{benefit.title}</h4>
                    <p className="text-sm text-[#6B7280] leading-relaxed">{benefit.desc}</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-black/5 flex items-center justify-between text-xs font-mono text-[#7a0000]">
                    <span>Verified Benefit</span>
                    <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* =========================================================
            MASTER CONTAINER CARD REGISTRY LAYOUT
        ========================================================= */}
        <div id="certified-registry" className="mt-28 pt-8">
          
          <div className="bg-white rounded-3xl border border-black/10 shadow-md overflow-hidden p-8 sm:p-12">
            
            {/* Card Header & Search Area */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-black/10 pb-8 mb-8">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#7a0000] bg-[#7a0000]/10 px-2.5 py-1 rounded">
                  Directory // Public Registry
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl text-[#111827] tracking-tight mt-3">
                  Certified Establishments
                </h3>
                <p className="text-sm text-[#6B7280] mt-1.5">
                  A running public record of active Safety Seal compliance credentials in Tanauan City.
                </p>
              </div>

              {/* Filter Search Field */}
              <div className="relative w-full md:w-80">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-gray-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </span>
                <input
                  type="text"
                  placeholder="Search establishments..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-full bg-[#F7F5F0] text-[#111827] text-sm border border-black/15 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7a0000] shadow-xs"
                />
              </div>
            </div>

            {/* List Inside Card */}
            {filteredBusinesses.length > 0 ? (
              <div className="divide-y divide-black/5">
                {filteredBusinesses.map((item) => (
                  <div 
                    key={item.no}
                    className="py-4.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 group hover:bg-[#F7F5F0]/70 px-4 rounded-xl transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-xs font-semibold text-[#7a0000] w-7">
                        {String(item.no).padStart(2, '0')}
                      </span>
                      <h4 className="text-base sm:text-lg text-[#111827] font-medium tracking-tight group-hover:text-[#7a0000] transition-colors">
                        {item.name}
                      </h4>
                    </div>

                    <div className="flex items-center gap-5 pl-11 sm:pl-0">
                      <span className="font-mono text-xs text-gray-500">
                        Certified: <strong className="text-[#111827] font-medium">{item.date}</strong>
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-medium border border-emerald-200">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 animate-pulse" />
                        Active
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="py-16 text-center">
                <p className="text-gray-500 text-sm">No certified businesses found matching "{searchQuery}".</p>
              </div>
            )}

            {/* Card Footer Count */}
            <div className="mt-10 pt-5 border-t border-black/10 flex justify-between items-center text-xs text-gray-500 font-mono">
              <span>Showing {filteredBusinesses.length} entries</span>
              <span>Tanauan City Official Record</span>
            </div>

          </div>

        </div>

        {/* =========================================================
            NEED HELP? / SUPPORT SECTION (THEMED TWO-COLUMN)
        ========================================================= */}
        <section id="contact" className="mt-28">
          <div className="bg-white rounded-3xl border border-black/10 p-8 sm:p-14 shadow-md">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Column: Heading & Description */}
              <div className="lg:col-span-5 flex flex-col">
                <span className="font-mono text-xs uppercase tracking-widest text-[#7a0000] bg-[#7a0000]/10 px-2.5 py-1 rounded w-fit mb-3">
                  Support // Inquiries
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl text-[#111827] tracking-tight">
                  Need Help?
                </h3>
                <p className="text-sm sm:text-base text-[#6B7280] mt-3 leading-relaxed">
                  For inquiries, validation, or assistance regarding the Safety Seal Certification Program, please reach out directly to the official municipal department.
                </p>
              </div>

              {/* Right Column: Clean Themed Detail Card */}
              <div className="lg:col-span-7">
                <div className="bg-[#F7F5F0] rounded-2xl p-6 sm:p-8 border border-black/10">
                  
                  <h4 className="text-[#111827] font-serif text-xl sm:text-2xl font-semibold mb-6 pb-4 border-b border-black/10">
                    Business Permits and Licensing Office
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-[#4B5563]">
                    
                    {/* Phone */}
                    <div className="flex items-start gap-3.5">
                      <div className="mt-1 flex-shrink-0 text-[#7a0000]">
                        <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <span className="block text-[11px] uppercase tracking-wider text-gray-400 font-mono">Phone</span>
                        <span className="text-[#111827] font-medium mt-0.5 block">(043) 123-4568</span>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start gap-3.5">
                      <div className="mt-1 flex-shrink-0 text-[#7a0000]">
                        <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <span className="block text-[11px] uppercase tracking-wider text-gray-400 font-mono">Email</span>
                        <a href="mailto:bplo@tanauancity.gov.ph" className="text-[#7a0000] hover:underline font-medium mt-0.5 block break-all">
                          bplo@tanauancity.gov.ph
                        </a>
                      </div>
                    </div>

                    {/* Address - Full Span */}
                    <div className="sm:col-span-2 flex items-start gap-3.5 pt-4 border-t border-black/5">
                      <div className="mt-1 flex-shrink-0 text-[#7a0000]">
                        <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <span className="block text-[11px] uppercase tracking-wider text-gray-400 font-mono">Address</span>
                        <span className="text-[#111827] font-medium mt-0.5 block">City Hall, Talisay-Tanauan Rd, Tanauan City, Batangas</span>
                      </div>
                    </div>

                  </div>

                </div>
              </div>

            </div>

          </div>
        </section>

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}