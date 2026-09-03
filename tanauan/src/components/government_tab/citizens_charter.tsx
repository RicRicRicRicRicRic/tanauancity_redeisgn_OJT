import { useState } from 'react';
import Footer from '../layout/Footer';
import tanauan_logo from '../../assets/sections/pictures/tanauan_logo.webp';

export default function TransparencyPage() {
  const [openAccordion, setOpenAccordion] = useState<string | null>('intro');

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-50/50 pt-36 md:pt-31 text-stone-800">
      
      {/* =====================================================
                          HERO SECTION
      ====================================================== */}
      <section className="bg-gradient-to-b from-stone-100/80 to-stone-100 border-t-4 border-[#7a0000] border-b border-stone-200/80 py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">

            <div className="space-y-5">
              {/* Logo and Badge Lockup */}
              <div className="flex items-center gap-3">
                <span className="inline-block text-[11px] font-bold tracking-[0.2em] text-[#7a0000] uppercase bg-[#7a0000]/10 px-3.5 py-1.5 rounded-full border border-[#7a0000]/10 shadow-2xs">
                  City of Tanauan · Public Transparency Portal
                </span>
              </div>
              
              {/* Premium & Elegant Typography for H1 */}
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-stone-900 tracking-tight leading-[1.08]">
                Citizen's <span className="italic font-normal text-[#7a0000]">Charter</span>
              </h1>
              
              {/* Sophisticated Editorial Subtitle */}
              <p className="text-stone-600/90 text-base sm:text-lg font-light leading-relaxed tracking-wide max-w-xl">
                An authoritative guide to public services, regulatory compliance standards, and administrative procedures for the City of Tanauan.
              </p>
            </div>

            {/* Action Indicator (Card Removed, Width Maintained) */}
            <div className="flex flex-col items-center gap-3.5 flex-shrink-0 w-full md:w-72">
              
              {/* File Icon (Enlarged container and SVG) */}
              <div className="w-16 h-16 text-[#7a0000] flex items-center justify-center">
                <svg className="w-16 h-16 fill-current" viewBox="0 0 24 24">
                  <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
                </svg>
              </div>

              {/* File Specs Text */}
              <p className="text-[11px] text-stone-500 font-medium tracking-wide text-center">
                File Size: <span className="text-stone-800 font-semibold">122MB</span> &bull; File Type: <span className="text-stone-800 font-semibold">PDF</span>
              </p>

              {/* Download Button */}
              <a
                href="#pdf-viewer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#7a0000] text-white text-xs font-semibold tracking-wide shadow-sm hover:bg-[#5c0000] transition-all duration-200 hover:scale-[1.02]"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
                </svg>
                Download Charter File
              </a>

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          MAIN CONTENT CONTAINER (ACCORDIONS & INFO)
      ====================================================== */}
      <main className="mx-auto w-full max-w-5xl px-6 py-16 space-y-10">

        {/* 2025 Citizen's Charter Main Card Wrapper */}
        <div className="bg-white rounded-2xl shadow-sm border border-stone-200/80 overflow-hidden">
          
          {/* Card Header Banner */}
          <div className="bg-[#7a0000] text-white px-8 py-6">
            <div className="flex items-center gap-4">
              <div className="p-2.5 rounded-xl bg-white/10 border border-white/15">
                <svg className="w-6 h-6 fill-current opacity-95" viewBox="0 0 24 24">
                  <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
                </svg>
              </div>
              <div>
                <h2 className="font-serif text-xl sm:text-2xl font-bold tracking-tight">2025 Citizen's Charter</h2>
                <p className="text-xs text-stone-200 font-light tracking-wide mt-0.5">Official compliance documentation and statutory service standards</p>
              </div>
            </div>
          </div>

          {/* Accordion Items List */}
          <div className="divide-y divide-stone-100">
            
            {/* 1. Introduction */}
            <div>
              <button
                onClick={() => toggleAccordion('intro')}
                className="w-full px-8 py-5 flex items-center justify-between text-left group transition-colors hover:bg-stone-50/80"
              >
                <div className="flex items-center gap-4">
                  <span className="h-7 w-7 rounded-full bg-blue-50 text-blue-700 flex items-center justify-center text-xs font-bold shadow-2xs">i</span>
                  <span className="font-serif font-semibold text-stone-900 text-base tracking-tight group-hover:text-[#7a0000] transition-colors">Introduction to Citizen's Charter</span>
                </div>
                <svg className={`w-5 h-5 text-stone-400 transition-transform duration-300 ${openAccordion === 'intro' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {openAccordion === 'intro' && (
                <div className="px-8 pb-8 pt-2 text-stone-700 leading-relaxed space-y-4 bg-stone-50/40 text-sm sm:text-base font-light">
                  <p>
                    This Citizen's Charter serves as an official document and information guide to help the public access government services in the City of Tanauan. It provides detailed information on the specific services available, requirements, procedures, processing time, fees, and responsible personnel.
                  </p>
                  <p>
                    In compliance with Republic Act No. 11032, otherwise known as the Ease of Doing Business and Efficient Government Service Delivery Act of 2018, this Citizen's Charter aims to improve efficiency by reducing bureaucratic red tape and preventing graft and corruption.
                  </p>
                </div>
              )}
            </div>

            {/* 2. Legal Mandate */}
            <div>
              <button
                onClick={() => toggleAccordion('mandate')}
                className="w-full px-8 py-5 flex items-center justify-between text-left group transition-colors hover:bg-stone-50/80"
              >
                <div className="flex items-center gap-4">
                  <span className="h-7 w-7 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center text-xs shadow-2xs">⚖️</span>
                  <span className="font-serif font-semibold text-stone-900 text-base tracking-tight group-hover:text-[#7a0000] transition-colors">Legal Mandate</span>
                </div>
                <svg className={`w-5 h-5 text-stone-400 transition-transform duration-300 ${openAccordion === 'mandate' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openAccordion === 'mandate' && (
                <div className="px-8 pb-8 pt-2 text-stone-700 leading-relaxed bg-stone-50/40 text-sm sm:text-base font-light">
                  <p>The City Government of Tanauan shall exercise the powers expressly granted, those necessarily implied therefrom, as well as the powers necessary, appropriate, or incidental for its efficient and effective governance, and those which are essential to the promotion of the general welfare.</p>
                </div>
              )}
            </div>

            {/* 3. Vision */}
            <div>
              <button
                onClick={() => toggleAccordion('vision')}
                className="w-full px-8 py-5 flex items-center justify-between text-left group transition-colors hover:bg-stone-50/80"
              >
                <div className="flex items-center gap-4">
                  <span className="h-7 w-7 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center text-xs shadow-2xs">👁️</span>
                  <span className="font-serif font-semibold text-stone-900 text-base tracking-tight group-hover:text-[#7a0000] transition-colors">Vision</span>
                </div>
                <svg className={`w-5 h-5 text-stone-400 transition-transform duration-300 ${openAccordion === 'vision' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openAccordion === 'vision' && (
                <div className="px-8 pb-8 pt-2 text-stone-700 leading-relaxed bg-stone-50/40 text-sm sm:text-base font-light space-y-2">
                  <p className="font-semibold text-stone-950 uppercase tracking-wider text-xs">Tanauan City 2025:</p>
                  <p className="italic font-normal">"A Progressive and Ecologically Balanced City with empowered and resilient citizenry under a transparent and dynamic leadership."</p>
                </div>
              )}
            </div>

            {/* 4. Mission */}
            <div>
              <button
                onClick={() => toggleAccordion('mission')}
                className="w-full px-8 py-5 flex items-center justify-between text-left group transition-colors hover:bg-stone-50/80"
              >
                <div className="flex items-center gap-4">
                  <span className="h-7 w-7 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center text-xs shadow-2xs">🎯</span>
                  <span className="font-serif font-semibold text-stone-900 text-base tracking-tight group-hover:text-[#7a0000] transition-colors">Mission</span>
                </div>
                <svg className={`w-5 h-5 text-stone-400 transition-transform duration-300 ${openAccordion === 'mission' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openAccordion === 'mission' && (
                <div className="px-8 pb-8 pt-2 text-stone-700 leading-relaxed bg-stone-50/40 text-sm sm:text-base font-light">
                  <p>Steered by transparent and collective governance, it is the Mission of the City of Tanauan to improve the quality of life of our people through adequate, quality, and accessible health and social services, robust economic enterprise, and sustainable environmental protection.</p>
                </div>
              )}
            </div>

            {/* 5. Service Commitments */}
            <div>
              <button
                onClick={() => toggleAccordion('commitments')}
                className="w-full px-8 py-5 flex items-center justify-between text-left group transition-colors hover:bg-stone-50/80"
              >
                <div className="flex items-center gap-4">
                  <span className="h-7 w-7 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center text-xs shadow-2xs">📄</span>
                  <span className="font-serif font-semibold text-stone-900 text-base tracking-tight group-hover:text-[#7a0000] transition-colors">Service Commitments</span>
                </div>
                <svg className={`w-5 h-5 text-stone-400 transition-transform duration-300 ${openAccordion === 'commitments' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openAccordion === 'commitments' && (
                <div className="px-8 pb-8 pt-2 text-stone-700 leading-relaxed bg-stone-50/40 text-sm sm:text-base font-light">
                  <p>We commit to render prompt, efficient, and courteous public service to all citizens visiting our offices, adhering strictly to anti-red tape guidelines and processing timelines.</p>
                </div>
              )}
            </div>

          </div>
        </div>

        {/* =================================================
            CONTACT INFORMATION SECTION
        ================================================== */}
        <div className="bg-white rounded-2xl shadow-sm border border-stone-200/80 overflow-hidden">
          <div className="bg-slate-900 text-white px-8 py-5 font-serif text-lg sm:text-xl font-bold tracking-tight">
            Institutional Contact Directory
          </div>

          <div className="p-8 grid gap-6 sm:grid-cols-2">
            
            <div className="p-5 rounded-xl bg-stone-50/70 border border-stone-200/60 space-y-1.5">
              <h3 className="font-serif font-bold text-stone-900 text-base tracking-tight">Office of the City Mayor</h3>
              <p className="text-xs text-stone-600 font-medium">Phone: <span className="text-stone-800 font-normal">(043) 728 9800</span></p>
              <p className="text-xs text-stone-600 font-medium">Email: <span className="text-[#7a0000] font-normal hover:underline">mayor@tanauancity.gov.ph</span></p>
            </div>

            <div className="p-5 rounded-xl bg-stone-50/70 border border-stone-200/60 space-y-1.5">
              <h3 className="font-serif font-bold text-stone-900 text-base tracking-tight">Business Permits & Licensing</h3>
              <p className="text-xs text-stone-600 font-medium">Phone: <span className="text-stone-800 font-normal">(043) 123-4568</span></p>
              <p className="text-xs text-stone-600 font-medium">Email: <span className="text-[#7a0000] font-normal hover:underline">bplo@tanauancity.gov.ph</span></p>
            </div>

            <div className="p-5 rounded-xl bg-stone-50/70 border border-stone-200/60 space-y-1.5">
              <h3 className="font-serif font-bold text-stone-900 text-base tracking-tight">Treasury Office</h3>
              <p className="text-xs text-stone-600 font-medium">Phone: <span className="text-stone-800 font-normal">(043) 123-4569</span></p>
              <p className="text-xs text-stone-600 font-medium">Email: <span className="text-[#7a0000] font-normal hover:underline">treasury@tanauancity.gov.ph</span></p>
            </div>

            <div className="p-5 rounded-xl bg-stone-50/70 border border-stone-200/60 space-y-1.5">
              <h3 className="font-serif font-bold text-stone-900 text-base tracking-tight">City Health Office</h3>
              <p className="text-xs text-stone-600 font-medium">Phone: <span className="text-stone-800 font-normal">(043) 123-4570</span></p>
              <p className="text-xs text-stone-600 font-medium">Email: <span className="text-[#7a0000] font-normal hover:underline">health@tanauancity.gov.ph</span></p>
            </div>

          </div>

          <div className="px-8 pb-8">
            <div className="p-5 rounded-xl bg-blue-50/50 border border-blue-100/80 text-stone-700 space-y-2">
              <h4 className="font-serif font-bold text-blue-950 text-base tracking-tight">Feedback and Redress Mechanisms</h4>
              <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">For official inquiries, concerns, or grievances regarding service delivery standards, please route correspondence directly to:</p>
              <div className="text-xs space-y-1 pt-1 font-medium text-stone-800">
                <p className="font-bold text-stone-950 uppercase tracking-wider text-[11px]">Public Assistance and Complaints Desk</p>
                <p>Direct Line: (043) 123-4571</p>
                <p>Official Portal Address: feedback@tanauancity.gov.ph</p>
              </div>
            </div>
          </div>
        </div>

        {/* =================================================
            PDF DOCUMENT VIEWER PREVIEW SECTION
        ================================================== */}
        <div id="pdf-viewer" className="bg-white rounded-2xl shadow-sm border border-stone-200/80 overflow-hidden">
          <div className="bg-[#7a0000] text-white px-8 py-5 font-serif font-bold flex justify-between items-center">
            <span className="text-base sm:text-lg tracking-tight">Citizen's Charter PDF Document</span>
            <span className="text-xs font-sans font-medium tracking-wider uppercase bg-black/20 px-3 py-1 rounded-full border border-white/10">661 Pages</span>
          </div>

          <div className="p-6 bg-stone-100/70 flex justify-center">
            <div className="w-full max-w-3xl bg-white shadow-md rounded-xl border border-stone-300/80 min-h-[480px] flex flex-col items-center justify-center p-10 text-center">
              <div className="w-14 h-14 rounded-full bg-[#7a0000]/10 text-[#7a0000] flex items-center justify-center mb-5 shadow-2xs">
                <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
              </div>
              <h3 className="font-serif font-bold text-xl text-stone-900 tracking-tight mb-2">Tanauan City 2025 Citizen's Charter</h3>
              <p className="text-sm text-stone-600 font-light mb-8 max-w-md leading-relaxed">Review the official publication online or download the full compendium directly to your workstation.</p>
              
              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#7a0000] text-white text-xs font-semibold tracking-wide hover:bg-[#5c0000] transition-all duration-200 shadow-sm hover:scale-[1.02]"
                download
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
                </svg>
                Download PDF (Full Document)
              </a>
            </div>
          </div>
        </div>

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}