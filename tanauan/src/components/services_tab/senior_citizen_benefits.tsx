import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Footer from '../layout/Footer';

export default function TransparencyPage() {
  const [activeTab, setActiveTab] = useState('new');

  const servicesList = [
    {
      number: "01",
      title: "Senior Citizen ID",
      description: "Get your official Senior Citizen ID to access various essential benefits, discounts, and privileges across institutions",
      icon: (
        <svg className="w-6 h-6" style={{ color: '#7a0000' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a1 1 0 100-2 1 1 0 000 2zm0 0h4m-4 3h4" />
        </svg>
      ),
    },
    {
      number: "02",
      title: "Purchase Booklet",
      description: "Obtain your purchase booklet for specialized medical and basic necessity discounts",
      icon: (
        <svg className="w-6 h-6" style={{ color: '#7a0000' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      number: "03",
      title: "Centenarian Award",
      description: "Special recognition packages and financial benefits for our beloved centenarian citizens reaching a century of wisdom",
      icon: (
        <svg className="w-6 h-6" style={{ color: '#7a0000' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
    },
    {
      number: "04",
      title: "Mortuary Assistance",
      description: "Compassionate financial and administrative support services for bereaved senior citizen families",
      icon: (
        <svg className="w-6 h-6" style={{ color: '#7a0000' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
    {
      number: "05",
      title: "Birthday & Christmas Gifts",
      description: "Seasonal packages, holiday tokens, and special celebratory gifts delivered during festive periods",
      icon: (
        <svg className="w-6 h-6" style={{ color: '#7a0000' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
    },
    {
      number: "06",
      title: "Social Pension",
      description: "Consistent monthly financial assistance programs designed to support qualified senior citizens with daily livelihoods",
      icon: (
        <svg className="w-6 h-6" style={{ color: '#7a0000' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  const idRequirements = {
    new: [
      "Registration form signed by the Senior Citizens President",
      "Birth certificate (Photocopy)",
      "Voters ID / Certificate or any valid ID (Photocopy)",
      "2 pcs 1x1 picture"
    ],
    lost: [
      "Registration form signed by the Senior Citizens President",
      "Birth certificate (Photocopy)",
      "Voters ID / Certificate or any valid ID (Photocopy)",
      "2 pcs 1x1 picture",
      "Affidavit of Lost (Original)"
    ],
    transferees: [
      "Registration form signed by the Senior Citizens President",
      "Birth certificate (Photocopy)",
      "Voters ID / Certificate or any valid ID (Photocopy)",
      "2 pcs 1x1 picture",
      "Certification of Cancellation (Original)"
    ]
  };

  return (
    <div className="min-h-screen flex flex-col bg-white pt-36 md:pt-31">
      
      {/* Asymmetric Split-Screen Hero Section */}
      <section className="relative bg-white text-slate-900 py-12 md:py-6 max-w-7xl mx-auto w-full px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="space-y-1"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight" style={{ color: '#7a0000' }}>
                Senior Citizen
              </h1>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif italic font-normal text-slate-800">
                Benefits & Services
              </h2>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-base sm:text-lg text-slate-600 max-w-xl font-normal leading-relaxed"
            >
              Tanauan City deeply cares about the welfare of our senior citizens. Explore our dedicated community support programs, financial aid, and special privileges designed for our respected elders.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="pt-2"
            >
              <a 
                href="#services" 
                className="inline-flex items-center justify-center text-white font-medium px-8 py-4 rounded-full shadow-md transition-all duration-300 active:scale-95 text-sm sm:text-base group hover:opacity-95"
                style={{ backgroundColor: '#7a0000' }}
              >
                <span>Browse Services</span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 bg-white text-slate-900 p-8 md:p-10 rounded-3xl shadow-xl relative overflow-hidden"
            style={{ border: '2px solid #7a0000' }}
          >
            <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full blur-3xl pointer-events-none" style={{ backgroundColor: '#7a000015' }} />

            <div className="relative z-10 space-y-8">
              <div>
                <span className="text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full" style={{ color: '#7a0000', backgroundColor: '#7a000015', border: '1px solid #7a000030' }}>Community Impact</span>
                <h3 className="text-2xl font-extrabold tracking-tight text-slate-900 mt-3">At a Glance</h3>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-4 border-t border-slate-100">
                <div>
                  <div className="text-3xl md:text-4xl font-extrabold" style={{ color: '#7a0000' }}>48</div>
                  <div className="text-xs text-slate-500 mt-1 uppercase tracking-wider font-semibold">Barangays Covered</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-extrabold" style={{ color: '#7a0000' }}>100%</div>
                  <div className="text-xs text-slate-500 mt-1 uppercase tracking-wider font-semibold">Dedicated Support</div>
                </div>
              </div>

              <div className="rounded-2xl p-4 backdrop-blur-sm text-xs sm:text-sm text-slate-700 leading-relaxed font-medium" style={{ backgroundColor: '#7a00000d', border: '1px solid #7a000020' }}>
                "Ensuring dignity, comfort, and comprehensive social services for every senior resident of Tanauan City."
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Numbered Editorial / Structured Services Section */}
      <section id="services" className="py-24 bg-slate-50/60 px-6 lg:px-12 border-t border-slate-100">
        <div className="max-w-6xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs font-bold tracking-widest uppercase px-3.5 py-1.5 rounded-full" style={{ color: '#7a0000', backgroundColor: '#7a000015', border: '1px solid #7a000030' }}>
                Directory
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mt-3">
                Available Programs & Services
              </h2>
            </div>
            <p className="text-slate-600 max-w-md text-sm sm:text-base">
              Review our primary assistance packages structured to provide accessible welfare support.
            </p>
          </div>

          {/* Staggered Editorial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesList.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="group relative bg-white p-8 rounded-3xl border border-slate-200/75 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-serif italic font-bold opacity-40 group-hover:opacity-100 transition-opacity" style={{ color: '#7a0000' }}>
                      {service.number}
                    </span>
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center transition-colors duration-300" style={{ backgroundColor: '#7a000015' }}
                         onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#7a0000'}
                         onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#7a000015'}>
                      {React.cloneElement(service.icon, {
                        className: "w-5 h-5 transition-colors duration-300 group-hover:text-white"
                      })}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-2 group-hover:opacity-80" style={{ color: '#7a0000' }}>
                    {service.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-semibold uppercase tracking-wider" style={{ color: '#7a0000' }}>
                  <span>Learn more</span>
                  <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Redesigned Senior Citizen ID Requirements Hub (Tabbed System) */}
      <section className="py-20 bg-white px-6 lg:px-12 border-t border-slate-100">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-bold tracking-widest uppercase px-3.5 py-1.5" style={{ color: '#7a0000' }}>
              Application Guide
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              Senior Citizen ID Requirements
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Your Senior Citizen ID is your key to accessing various benefits and privileges. Select your application type below to view the checklist.
            </p>
          </div>

          {/* Interactive Navigation Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {[
              { id: 'new', label: 'For New Senior I.D.' },
              { id: 'lost', label: 'For Lost Senior I.D.' },
              { id: 'transferees', label: 'For Senior Citizen Transferees' }
            ].map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className="px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 shadow-sm"
                  style={{
                    backgroundColor: isActive ? '#7a0000' : '#f8fafc',
                    color: isActive ? '#ffffff' : '#475569',
                    border: isActive ? '1px solid #7a0000' : '1px solid #e2e8f0'
                  }}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Active Tab Content Card */}
          <div className="bg-slate-50/70 border-2 rounded-3xl p-8 md:p-12 shadow-sm relative overflow-hidden" style={{ borderColor: '#7a000030' }}>
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-40" style={{ backgroundColor: '#7a000010' }} />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="relative z-10"
              >
                <div className="flex items-center space-x-3 mb-8 pb-6 border-b border-slate-200">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold" style={{ backgroundColor: '#7a0000' }}>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 capitalize">
                      {activeTab === 'new' && 'New Application Requirements'}
                      {activeTab === 'lost' && 'Replacement Requirements (Lost ID)'}
                      {activeTab === 'transferees' && 'Transferee Requirements'}
                    </h3>
                    <p className="text-xs text-slate-500">Please prepare all listed documents before proceeding to the office.</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {idRequirements[activeTab as keyof typeof idRequirements].map((req, idx) => (
                    <div key={idx} className="flex items-start space-x-4 bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm">
                      <span className="flex-shrink-0 w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center text-white" style={{ backgroundColor: '#7a0000' }}>
                        {idx + 1}
                      </span>
                      <span className="text-sm font-medium text-slate-700 leading-snug pt-0.5">
                        {req}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* Redesigned Purchase Booklet Section */}
      <section className="py-20 bg-slate-50/50 px-6 lg:px-12 border-t border-slate-100">
        <div className="max-w-5xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl mb-1 shadow-sm" style={{ backgroundColor: '#7a000015', border: '1px solid #7a000030' }}>
              <svg className="w-6 h-6" style={{ color: '#7a0000' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <span className="text-xs font-bold tracking-widest uppercase block" style={{ color: '#7a0000' }}>
              Privilege Access
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              Purchase Booklet
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Get your purchase booklet to avail of discounts on medicines and basic necessities.
            </p>
          </div>

          {/* Unified Container */}
          <div className="bg-white border-2 rounded-3xl p-8 md:p-12 shadow-sm relative overflow-hidden" style={{ borderColor: '#7a000030' }}>
            <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full blur-3xl pointer-events-none opacity-30" style={{ backgroundColor: '#7a000015' }} />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 relative z-10">
              
              {/* Left Column: Requirements */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-6 lg:pr-8 lg:border-r border-[#7a000030]">
                <div>
                  <h3 className="text-lg font-extrabold tracking-tight text-slate-900 mb-6 flex items-center space-x-2">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#7a0000' }}></span>
                    <span>Requirements</span>
                  </h3>

                  <div className="bg-slate-50 border border-slate-200/80 p-5 rounded-2xl flex items-start space-x-3.5 shadow-sm">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white mt-0.5" style={{ backgroundColor: '#7a0000' }}>
                      ✓
                    </div>
                    <span className="text-sm font-semibold text-slate-700 tracking-wide uppercase leading-relaxed">
                      Any of photocopy or original Senior Citizen I.D.
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl text-xs text-slate-600 leading-relaxed font-medium" style={{ backgroundColor: '#7a000008', border: '1px solid #7a000015' }}>
                  Tip: Make sure your ID is clean and legible to speed up verification at the OSCA office counter.
                </div>
              </div>

              {/* Right Column: Process & Metrics */}
              <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
                <div>
                  <h3 className="text-lg font-extrabold tracking-tight text-slate-900 mb-6 flex items-center space-x-2">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#7a0000' }}></span>
                    <span>How to Get Your Booklet</span>
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-4 bg-slate-50/70 p-4 rounded-2xl border border-slate-200/60">
                      <span className="flex-shrink-0 w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center text-white" style={{ backgroundColor: '#7a0000' }}>
                        1
                      </span>
                      <p className="text-sm font-medium text-slate-700 leading-snug pt-0.5">
                        Present Senior ID to OSCA staff and sign on the client logbook.
                      </p>
                    </div>

                    <div className="flex items-start space-x-4 bg-slate-50/70 p-4 rounded-2xl border border-slate-200/60">
                      <span className="flex-shrink-0 w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center text-white" style={{ backgroundColor: '#7a0000' }}>
                        2
                      </span>
                      <p className="text-sm font-medium text-slate-700 leading-snug pt-0.5">
                        Proceed to OSCA office to claim the senior purchase booklet.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom Metric Badges */}
                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-100">
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/60 flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#7a000015' }}>
                      <span className="text-base">💰</span>
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider font-semibold text-slate-500">Fees to Be Paid</div>
                      <div className="text-base font-extrabold tracking-tight mt-0.5" style={{ color: '#7a0000' }}>NONE</div>
                    </div>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/60 flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#7a000015' }}>
                      <span className="text-base">⏱️</span>
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider font-semibold text-slate-500">Processing Time</div>
                      <div className="text-base font-extrabold tracking-tight mt-0.5" style={{ color: '#7a0000' }}>10 MINUTES</div>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Redesigned Centenarian Award Section */}
      <section className="py-20 bg-slate-50/50 px-6 lg:px-12 border-t border-slate-100">
        <div className="max-w-5xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold tracking-widest uppercase block" style={{ color: '#7a0000' }}>
              Special Recognition
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              Centenarian Award
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Special recognition and benefits for our beloved citizens who have reached 100 years of age.
            </p>
          </div>

          {/* Unified Master Container */}
          <div className="bg-white border-2 rounded-3xl p-8 md:p-12 shadow-sm relative overflow-hidden" style={{ borderColor: '#7a000030' }}>
            <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full blur-3xl pointer-events-none opacity-30" style={{ backgroundColor: '#7a000015' }} />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 relative z-10">
              
              {/* Left Column: General Requirements (Takes up more space due to length) */}
              <div className="lg:col-span-6 flex flex-col justify-between space-y-6 lg:pr-8 lg:border-r border-[#7a000030]">
                <div>
                  <h3 className="text-lg font-extrabold tracking-tight text-slate-900 mb-6 flex items-center space-x-2">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#7a0000' }}></span>
                    <span>General Requirements</span>
                  </h3>

                  <div className="space-y-3">
                    {[
                      "Senior Citizen ID (Photocopy)",
                      "Birth Certificate (Photocopy)",
                      "Whole Body Picture 3R Size (Latest Picture)",
                      "Barangay Clearance (Original)",
                      "Certificate of Indigence",
                      "Valid ID of Recipient (Photocopy) & Contact No. / Social Case Study Report of CSWD"
                    ].map((req, idx) => (
                      <div key={idx} className="flex items-start space-x-3 bg-slate-50/70 p-3.5 rounded-2xl border border-slate-200/60">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center text-white mt-0.5" style={{ backgroundColor: '#7a0000' }}>
                          {idx + 1}
                        </span>
                        <span className="text-xs sm:text-sm font-medium text-slate-700 leading-snug pt-0.5">
                          {req}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Claimants & Application Process */}
              <div className="lg:col-span-6 flex flex-col justify-between space-y-8">
                <div className="space-y-8">
                  
                  {/* Son/Daughter Claimants Section */}
                  <div>
                    <h3 className="text-lg font-extrabold tracking-tight text-slate-900 mb-4 flex items-center space-x-2">
                      <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#7a0000' }}></span>
                      <span>For Son / Daughter Claimants</span>
                    </h3>

                    <div className="space-y-3">
                      {[
                        "Birth Certificate",
                        "Barangay Certificate of Living in One Roof / House"
                      ].map((req, idx) => (
                        <div key={idx} className="flex items-start space-x-3 bg-slate-50/70 p-3.5 rounded-2xl border border-slate-200/60">
                          <span className="flex-shrink-0 w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center text-white mt-0.5" style={{ backgroundColor: '#7a0000' }}>
                            {idx + 1}
                          </span>
                          <span className="text-xs sm:text-sm font-medium text-slate-700 leading-snug pt-0.5">
                            {req}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Application Process Section */}
                  <div>
                    <h3 className="text-lg font-extrabold tracking-tight text-slate-900 mb-4 flex items-center space-x-2">
                      <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#7a0000' }}></span>
                      <span>Application Process</span>
                    </h3>

                    <div className="flex items-start space-x-3 bg-slate-50/70 p-3.5 rounded-2xl border border-slate-200/60">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center text-white mt-0.5" style={{ backgroundColor: '#7a0000' }}>
                        1
                      </span>
                      <span className="text-xs sm:text-sm font-medium text-slate-700 leading-snug pt-0.5">
                        Submit required documents needed for initial evaluation/assessment.
                      </span>
                    </div>
                  </div>

                </div>

                {/* Bottom Metric Badges */}
                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-100">
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/60 flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#7a000015' }}>
                      <span className="text-base">💰</span>
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider font-semibold text-slate-500">Fees to be Paid</div>
                      <div className="text-base font-extrabold tracking-tight mt-0.5" style={{ color: '#7a0000' }}>NONE</div>
                    </div>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/60 flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#7a000015' }}>
                      <span className="text-base">⏱️</span>
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider font-semibold text-slate-500">Processing Time</div>
                      <div className="text-base font-extrabold tracking-tight mt-0.5" style={{ color: '#7a0000' }}>27 MINUTES</div>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Modern Asymmetric "Need Help?" Section */}
      <section className="py-24 bg-slate-50/60 px-6 lg:px-12 border-t border-slate-100">
        <div className="max-w-6xl mx-auto">
          
          <div className="bg-white border-2 rounded-[2.5rem] p-8 md:p-14 shadow-lg relative overflow-hidden" style={{ borderColor: '#7a0000' }}>
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-20" style={{ backgroundColor: '#7a000015' }} />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
              
              {/* Left Column: Heading & Description */}
              <div className="lg:col-span-5 space-y-4">
                <span className="text-xs font-bold tracking-widest uppercase px-3.5 py-1.5 rounded-full inline-block shadow-sm" style={{ color: '#7a0000', backgroundColor: '#7a000015', border: '1px solid #7a000030' }}>
                  Support Desk
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
                  Need Help?
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  For inquiries and assistance, please contact the Office of Senior Citizens Affairs (OSCA). Our team is ready to help you with your requirements and benefits.
                </p>
              </div>

              {/* Right Column: Contact Channels Grid */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
                
                {/* Location */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col justify-between">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-colors" style={{ backgroundColor: '#7a000015' }}>
                    <svg className="w-5 h-5" style={{ color: '#7a0000' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Location</h3>
                    <p className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                      Ground Floor, Tanauan City Hall
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col justify-between">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-colors" style={{ backgroundColor: '#7a000015' }}>
                    <svg className="w-5 h-5" style={{ color: '#7a0000' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Phone</h3>
                    <p className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                      (043) 702-3000
                    </p>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col justify-between">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-colors" style={{ backgroundColor: '#7a000015' }}>
                    <svg className="w-5 h-5" style={{ color: '#7a0000' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Office Hours</h3>
                    <p className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                      Mon - Fri<br/>8:00 AM - 5:00 PM
                    </p>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}