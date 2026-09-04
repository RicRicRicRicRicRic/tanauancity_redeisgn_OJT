import { useState } from 'react';
import Footer from '../layout/Footer';
import tanauan_logo from '../../assets/sections/pictures/tanauan_logo.webp';
import citizen_charter_file from '../../assets/sections/PDF_Files/Citizens-Charter-2025-Final.docx.pdf'

export default function TransparencyPage() {
  const [openAccordion, setOpenAccordion] = useState<string | null>('intro');

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

            {/* Action Indicator */}
            <div className="flex flex-col items-center gap-3.5 flex-shrink-0 w-full md:w-72">
              
              {/* File Icon */}
              <div className="w-16 h-16 text-[#7a0000] flex items-center justify-center">
                <svg className="w-16 h-16 fill-current" viewBox="0 0 24 24">
                  <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
                </svg>
              </div>

              {/* File Specs Text */}
              <p className="text-[11px] text-stone-500 font-medium tracking-wide text-center">
                File Size: <span className="text-stone-800 font-semibold">6.8MB</span> &bull; File Type: <span className="text-stone-800 font-semibold">PDF</span>
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

        {/* =====================================================
            CITIZEN'S CHARTER — INFORMATION SECTION
        ====================================================== */}
        <section className="relative">

          {/* Section Intro (Centered) */}
          <div className="mb-10 max-w-3xl mx-auto text-center">

            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-px w-10 bg-[#7a0000]" />
              <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-[#7a0000]">
                2025 · Official Documentation
              </span>
              <span className="h-px w-10 bg-[#7a0000]" />
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-stone-900 leading-tight">
              Everything you need to know about the{' '}
              <span className="text-[#7a0000] italic font-normal">
                Citizen's Charter.
              </span>
            </h2>

            <p className="mt-5 text-sm sm:text-base text-stone-500 font-light leading-relaxed max-w-2xl mx-auto">
              Explore the City's service commitments, legal mandate, vision,
              mission, and the principles that guide transparent and efficient
              public service.
            </p>

          </div>


          {/* =====================================================
              TOPIC NAVIGATION
          ====================================================== */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-6">

            {[
              {
                id: 'intro',
                title: 'Introduction',
                description: 'Understanding the Charter',
              },
              {
                id: 'mandate',
                title: 'Legal Mandate',
                description: 'Our governing framework',
              },
              {
                id: 'vision',
                title: 'Vision',
                description: 'Where we are heading',
              },
              {
                id: 'mission',
                title: 'Mission',
                description: 'Our purpose and direction',
              },
              {
                id: 'commitments',
                title: 'Commitments',
                description: 'Our promise to citizens',
              },
            ].map((item) => {

              const isActive = openAccordion === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => setOpenAccordion(item.id)}
                  className={`
                    group relative text-left p-5 rounded-2xl border
                    transition-all duration-300
                    ${
                      isActive
                        ? 'bg-[#7a0000] border-[#7a0000] shadow-lg shadow-[#7a0000]/10'
                        : 'bg-white border-stone-200/80 hover:border-[#7a0000]/30 hover:shadow-md'
                    }
                  `}
                >
                  {/* Upper Right "View" & Arrow Indicator */}
                  <div
                    className={`
                      absolute right-4 top-5 flex items-center gap-1 text-[11px] font-semibold tracking-wider uppercase transition-all duration-300
                      ${
                        isActive
                          ? 'text-white'
                          : 'text-stone-400 group-hover:text-[#7a0000]'
                      }
                    `}
                  >
                    <span>View</span>
                    <span className="transform transition-transform duration-300 group-hover:translate-x-1">
                      &rarr;
                    </span>
                  </div>

                  {/* Content Container */}
                  <div className="pr-10">
                    <h3
                      className={`
                        font-serif text-base font-bold tracking-tight
                        transition-colors
                        ${
                          isActive
                            ? 'text-white'
                            : 'text-stone-900 group-hover:text-[#7a0000]'
                        }
                      `}
                    >
                      {item.title}
                    </h3>

                    <p
                      className={`
                        mt-1.5 text-[11px] leading-relaxed
                        ${
                          isActive
                            ? 'text-white/65'
                            : 'text-stone-500'
                        }
                      `}
                    >
                      {item.description}
                    </p>
                  </div>

                </button>
              );
            })}

          </div>


          {/* =====================================================
              ACTIVE CONTENT PANEL (With Minimum Height for Consistency)
          ====================================================== */}
          <div className="relative overflow-hidden rounded-tl-3xl rounded-br-3xl rounded-tr-xl rounded-bl-xl border border-stone-200/80 bg-white shadow-sm min-h-[400px] flex flex-col justify-between">

            {/* Explicit Upper-Left Border Bracket */}
            <div className="absolute top-0 left-0 w-24 h-24 rounded-tl-3xl border-t-2 border-l-2 border-[#7a0000] pointer-events-none z-10" />

            {/* Explicit Lower-Right Border Bracket */}
            <div className="absolute bottom-0 right-0 w-24 h-24 rounded-br-3xl border-b-2 border-r-2 border-[#7a0000] pointer-events-none z-10" />

            <div className="py-12 px-7 sm:py-14 sm:px-9 md:py-16 md:px-12 flex-grow">

              {/* INTRODUCTION */}
              {openAccordion === 'intro' && (
                <div className="animate-in fade-in duration-300">

                  <div className="flex items-start gap-5 mb-7">

                    <span className="text-[11px] font-bold tracking-[0.2em] text-[#7a0000] pt-1">
                      01
                    </span>

                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] font-semibold text-stone-400 mb-2">
                        Overview
                      </p>

                      <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
                        Introduction to Citizen's Charter
                      </h3>
                    </div>

                  </div>

                  <div className="ml-0 sm:ml-14 max-w-3xl space-y-5 text-sm sm:text-base text-stone-600 font-light leading-[1.9]">

                    <p>
                      This Citizen's Charter serves as an official document and
                      information guide to help the public access government
                      services in the City of Tanauan. It provides detailed
                      information on the specific services available, requirements,
                      procedures, processing time, fees, and responsible personnel.
                    </p>

                    <p>
                      In compliance with Republic Act No. 11032, otherwise known as
                      the Ease of Doing Business and Efficient Government Service
                      Delivery Act of 2018, this Citizen's Charter aims to improve
                      efficiency by reducing bureaucratic red tape and preventing
                      graft and corruption.
                    </p>

                  </div>

                </div>
              )}


              {/* LEGAL MANDATE */}
              {openAccordion === 'mandate' && (
                <div className="animate-in fade-in duration-300">

                  <div className="flex items-start gap-5 mb-7">

                    <span className="text-[11px] font-bold tracking-[0.2em] text-[#7a0000] pt-1">
                      02
                    </span>

                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] font-semibold text-stone-400 mb-2">
                        Governance
                      </p>

                      <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
                        Legal Mandate
                      </h3>
                    </div>

                  </div>

                  <div className="ml-0 sm:ml-14 max-w-3xl">

                    <p className="text-sm sm:text-base text-stone-600 font-light leading-[1.9]">
                      The City Government of Tanauan shall exercise the powers
                      expressly granted, those necessarily implied therefrom, as
                      well as the powers necessary, appropriate, or incidental for
                      its efficient and effective governance, and those which are
                      essential to the promotion of the general welfare.
                    </p>

                  </div>

                </div>
              )}


              {/* VISION */}
              {openAccordion === 'vision' && (
                <div className="animate-in fade-in duration-300">

                  <div className="flex items-start gap-5 mb-7">

                    <span className="text-[11px] font-bold tracking-[0.2em] text-[#7a0000] pt-1">
                      03
                    </span>

                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] font-semibold text-stone-400 mb-2">
                        Direction
                      </p>

                      <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
                        Vision
                      </h3>
                    </div>

                  </div>

                  <div className="ml-0 sm:ml-14 max-w-3xl">

                    <p className="text-[10px] uppercase tracking-[0.2em] font-semibold text-stone-400 mb-4">
                      Tanauan City 2025
                    </p>

                    <blockquote className="border-l-2 border-[#7a0000] pl-6">
                      <p className="font-serif italic text-xl sm:text-2xl text-stone-800 leading-relaxed">
                        "A Progressive and Ecologically Balanced City with empowered
                        and resilient citizenry under a transparent and dynamic
                        leadership."
                      </p>
                    </blockquote>

                  </div>

                </div>
              )}


              {/* MISSION */}
              {openAccordion === 'mission' && (
                <div className="animate-in fade-in duration-300">

                  <div className="flex items-start gap-5 mb-7">

                    <span className="text-[11px] font-bold tracking-[0.2em] text-[#7a0000] pt-1">
                      04
                    </span>

                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] font-semibold text-stone-400 mb-2">
                        Purpose
                      </p>

                      <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
                        Mission
                      </h3>
                    </div>

                  </div>

                  <div className="ml-0 sm:ml-14 max-w-3xl">

                    <p className="text-sm sm:text-base text-stone-600 font-light leading-[1.9]">
                      Steered by transparent and collective governance, it is the
                      Mission of the City of Tanauan to improve the quality of life
                      of our people through adequate, quality, and accessible health
                      and social services, robust economic enterprise, and sustainable
                      environmental protection.
                    </p>

                  </div>

                </div>
              )}


              {/* SERVICE COMMITMENTS */}
              {openAccordion === 'commitments' && (
                <div className="animate-in fade-in duration-300">

                  <div className="flex items-start gap-5 mb-7">

                    <span className="text-[11px] font-bold tracking-[0.2em] text-[#7a0000] pt-1">
                      05
                    </span>

                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] font-semibold text-stone-400 mb-2">
                        Public Service
                      </p>

                      <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
                        Service Commitments
                      </h3>
                    </div>

                  </div>

                  <div className="ml-0 sm:ml-14 max-w-3xl">

                    <p className="text-sm sm:text-base text-stone-600 font-light leading-[1.9]">
                      We commit to render prompt, efficient, and courteous public
                      service to all citizens visiting our offices, adhering strictly
                      to anti-red tape guidelines and processing timelines.
                    </p>

                  </div>

                </div>
              )}

            </div>

            {/* Bottom metadata */}
            <div className="border-t border-stone-100 px-7 sm:px-9 md:px-12 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-white">

              <span className="text-[10px] uppercase tracking-[0.18em] text-stone-400 font-semibold">
                City Government of Tanauan
              </span>

              <span className="text-[10px] text-stone-400">
                Citizen's Charter · 2025
              </span>

            </div>

          </div>

        </section>

        {/* =================================================
            CONTACT INFORMATION SECTION
        ================================================== */}
        <div className="bg-white rounded-2xl shadow-sm border border-stone-200/80 overflow-hidden">
          {/* Harmonized Burgundy Header */}
          <div className="bg-[#7a0000] text-white px-8 py-5 font-serif text-lg sm:text-xl font-bold tracking-tight">
            Institutional Contact Directory
          </div>

          <div className="p-8 grid gap-6 sm:grid-cols-2">
            
            {/* Office 1 */}
            <div className="group relative p-6 rounded-xl bg-stone-50/70 border border-stone-200/60 hover:border-[#7a0000]/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <h3 className="font-serif font-bold text-stone-900 text-base tracking-tight">Office of the City Mayor</h3>
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-medium tracking-wide uppercase px-2.5 py-1 rounded-full bg-stone-200/60 text-stone-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
                    Mon–Fri · 8AM–5PM
                  </span>
                </div>
              </div>
              <div className="space-y-2 pt-3 border-t border-stone-200/60">
                <a href="tel:0437289800" className="flex items-center gap-2.5 text-xs text-stone-600 hover:text-[#7a0000] transition-colors group/link">
                  <span className="w-7 h-7 rounded-lg bg-stone-200/70 text-stone-700 group-hover/link:bg-[#7a0000] group-hover/link:text-white flex items-center justify-center transition-all">
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                  </span>
                  <span className="font-medium text-stone-800">(043) 728 9800</span>
                </a>
                <a href="mailto:mayor@tanauancity.gov.ph" className="flex items-center gap-2.5 text-xs text-stone-600 hover:text-[#7a0000] transition-colors group/link">
                  <span className="w-7 h-7 rounded-lg bg-stone-200/70 text-stone-700 group-hover/link:bg-[#7a0000] group-hover/link:text-white flex items-center justify-center transition-all">
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                  </span>
                  <span className="font-medium text-[#7a0000] hover:underline">mayor@tanauancity.gov.ph</span>
                </a>
              </div>
            </div>

            {/* Office 2 */}
            <div className="group relative p-6 rounded-xl bg-stone-50/70 border border-stone-200/60 hover:border-[#7a0000]/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <h3 className="font-serif font-bold text-stone-900 text-base tracking-tight">Business Permits & Licensing</h3>
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-medium tracking-wide uppercase px-2.5 py-1 rounded-full bg-stone-200/60 text-stone-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
                    Mon–Fri · 8AM–5PM
                  </span>
                </div>
              </div>
              <div className="space-y-2 pt-3 border-t border-stone-200/60">
                <a href="tel:0431234568" className="flex items-center gap-2.5 text-xs text-stone-600 hover:text-[#7a0000] transition-colors group/link">
                  <span className="w-7 h-7 rounded-lg bg-stone-200/70 text-stone-700 group-hover/link:bg-[#7a0000] group-hover/link:text-white flex items-center justify-center transition-all">
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                  </span>
                  <span className="font-medium text-stone-800">(043) 123-4568</span>
                </a>
                <a href="mailto:bplo@tanauancity.gov.ph" className="flex items-center gap-2.5 text-xs text-stone-600 hover:text-[#7a0000] transition-colors group/link">
                  <span className="w-7 h-7 rounded-lg bg-stone-200/70 text-stone-700 group-hover/link:bg-[#7a0000] group-hover/link:text-white flex items-center justify-center transition-all">
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                  </span>
                  <span className="font-medium text-[#7a0000] hover:underline">bplo@tanauancity.gov.ph</span>
                </a>
              </div>
            </div>

            {/* Office 3 */}
            <div className="group relative p-6 rounded-xl bg-stone-50/70 border border-stone-200/60 hover:border-[#7a0000]/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <h3 className="font-serif font-bold text-stone-900 text-base tracking-tight">Treasury Office</h3>
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-medium tracking-wide uppercase px-2.5 py-1 rounded-full bg-stone-200/60 text-stone-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
                    Mon–Fri · 8AM–5PM
                  </span>
                </div>
              </div>
              <div className="space-y-2 pt-3 border-t border-stone-200/60">
                <a href="tel:0431234569" className="flex items-center gap-2.5 text-xs text-stone-600 hover:text-[#7a0000] transition-colors group/link">
                  <span className="w-7 h-7 rounded-lg bg-stone-200/70 text-stone-700 group-hover/link:bg-[#7a0000] group-hover/link:text-white flex items-center justify-center transition-all">
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                  </span>
                  <span className="font-medium text-stone-800">(043) 123-4569</span>
                </a>
                <a href="mailto:treasury@tanauancity.gov.ph" className="flex items-center gap-2.5 text-xs text-stone-600 hover:text-[#7a0000] transition-colors group/link">
                  <span className="w-7 h-7 rounded-lg bg-stone-200/70 text-stone-700 group-hover/link:bg-[#7a0000] group-hover/link:text-white flex items-center justify-center transition-all">
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                  </span>
                  <span className="font-medium text-[#7a0000] hover:underline">treasury@tanauancity.gov.ph</span>
                </a>
              </div>
            </div>

            {/* Office 4 */}
            <div className="group relative p-6 rounded-xl bg-stone-50/70 border border-stone-200/60 hover:border-[#7a0000]/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <h3 className="font-serif font-bold text-stone-900 text-base tracking-tight">City Health Office</h3>
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-medium tracking-wide uppercase px-2.5 py-1 rounded-full bg-stone-200/60 text-stone-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
                    Mon–Fri · 8AM–5PM
                  </span>
                </div>
              </div>
              <div className="space-y-2 pt-3 border-t border-stone-200/60">
                <a href="tel:0431234570" className="flex items-center gap-2.5 text-xs text-stone-600 hover:text-[#7a0000] transition-colors group/link">
                  <span className="w-7 h-7 rounded-lg bg-stone-200/70 text-stone-700 group-hover/link:bg-[#7a0000] group-hover/link:text-white flex items-center justify-center transition-all">
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                  </span>
                  <span className="font-medium text-stone-800">(043) 123-4570</span>
                </a>
                <a href="mailto:health@tanauancity.gov.ph" className="flex items-center gap-2.5 text-xs text-stone-600 hover:text-[#7a0000] transition-colors group/link">
                  <span className="w-7 h-7 rounded-lg bg-stone-200/70 text-stone-700 group-hover/link:bg-[#7a0000] group-hover/link:text-white flex items-center justify-center transition-all">
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                  </span>
                  <span className="font-medium text-[#7a0000] hover:underline">health@tanauancity.gov.ph</span>
                </a>
              </div>
            </div>

          </div>

          {/* Option 4: Side-by-Side Split Container with Burgundy Accent */}
          <div className="px-8 pb-8">
            <div className="p-6 rounded-xl bg-stone-50/85 border border-stone-200/80 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-7 space-y-2">
                <h4 className="font-serif font-bold text-stone-900 text-base tracking-tight">Feedback and Redress Mechanisms</h4>
                <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">For official inquiries, concerns, or grievances regarding service delivery standards, please route correspondence directly to:</p>
              </div>
              <div className="md:col-span-5 p-4 rounded-xl bg-white border border-stone-200/80 border-l-4 border-l-[#7a0000] text-xs space-y-1.5 shadow-2xs">
                <p className="font-bold text-stone-950 uppercase tracking-wider text-[11px]">Public Assistance and Complaints Desk</p>
                <p className="text-stone-600">Direct Line: <span className="font-medium text-stone-800">(043) 123-4571</span></p>
                <p className="text-stone-600">Portal: <span className="font-medium text-[#7a0000] hover:underline">feedback@tanauancity.gov.ph</span></p>
              </div>
            </div>
          </div>
        </div>

        {/* =================================================
            PDF DOCUMENT VIEWER PREVIEW SECTION
        ================================================== */}
        <div id="pdf-viewer" className="bg-white rounded-2xl shadow-sm border border-stone-200/80 overflow-hidden">
          
          {/* Header */}
          <div className="bg-[#7a0000] text-white px-8 py-5 font-serif font-bold flex justify-between items-center">
            <span className="text-base sm:text-lg tracking-tight">Citizen's Charter PDF Document</span>
            <span className="text-xs font-sans font-medium tracking-wider uppercase bg-black/20 px-3 py-1 rounded-full border border-white/10">661 Pages</span>
          </div>

          {/* Embedded PDF Viewer Container */}
          <div className="p-4 sm:p-6 bg-stone-100/70">
            <div className="w-full bg-white shadow-sm rounded-xl border border-stone-300/80 overflow-hidden">
              
              <iframe
                src= {citizen_charter_file}
                className="w-full h-[700px]"
                title="Tanauan City Citizen's Charter 2025 PDF Viewer"
              />

            </div>
          </div>

        </div>

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}