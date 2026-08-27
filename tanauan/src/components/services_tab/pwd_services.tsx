import React from 'react';
import { motion } from 'framer-motion';
import Footer from '../layout/Footer';

export default function TransparencyPage() {

  const servicesList = [
    {
      number: "01",
      title: "PWD ID Card",
      description: "Get your official PWD ID to access various benefits, and privileges",
      icon: (
        <svg className="w-6 h-6" style={{ color: '#7a0000' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a1 1 0 100-2 1 1 0 000 2zm0 0h4m-4 3h4" />
        </svg>
      ),
    },
    {
      number: "02",
      title: "Purchase Booklet",
      description: "Obtain your purchase booklet for discounts on medicines and basic necessities",
      icon: (
        <svg className="w-6 h-6" style={{ color: '#7a0000' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      number: "03",
      title: "Social Assistance",
      description: "Access various social assistance programs and support sercvices",
      icon: (
        <svg className="w-6 h-6" style={{ color: '#7a0000' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
    },
    {
      number: "04",
      title: "Special Benefits",
      description: "Special benefits and privileges for PWD cardholders",
      icon: (
        <svg className="w-6 h-6" style={{ color: '#7a0000' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
    {
      number: "05",
      title: "Medical Assistance",
      description: "Access to medical services and healthcare support",
      icon: (
        <svg className="w-6 h-6" style={{ color: '#7a0000' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
    },
    {
      number: "06",
      title: "Legal Protection",
      description: "Legal rights and protection under PWD laws",
      icon: (
        <svg className="w-6 h-6" style={{ color: '#7a0000' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white pt-36 md:pt-31">
      
      {/* Premium Editorial Hero Section */}
      <section className="relative bg-white text-slate-900 py-16 md:py-10 px-6 lg:px-12 overflow-hidden">
        
        {/* Subtle Decorative Background Blob */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none opacity-10" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col items-start space-y-6">
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-2"
              >
                <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
                  PWD Benefits <br />
                  <span className="font-serif italic font-normal" style={{ color: '#7a0000' }}>& Services</span>
                </h1>
              </motion.div>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base sm:text-lg text-slate-600 max-w-xl font-normal leading-relaxed"
              >
                Tanauan City is deeply committed to supporting persons with disabilities. Explore our dedicated community support programs, essential ID services, and barrier-free privileges.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="pt-2 flex flex-wrap gap-4"
              >
                <a 
                  href="#services" 
                  className="inline-flex items-center justify-center text-white font-medium px-8 py-4 rounded-full shadow-lg transition-all duration-300 active:scale-95 text-sm sm:text-base group hover:opacity-95"
                  style={{ backgroundColor: '#7a0000' }}
                >
                  <span>Explore Programs</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </a>
              </motion.div>
            </div>

            {/* Right Feature Card Column */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-5 bg-slate-50 border-2 p-8 md:p-10 rounded-[2.5rem] shadow-sm relative overflow-hidden"
              style={{ borderColor: '#7a0000' }}
            >
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl pointer-events-none opacity-20"/>

              <div className="relative z-10 space-y-6">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm" style={{ backgroundColor: '#7a000015' }}>
                  <svg className="w-6 h-6" style={{ color: '#7a0000' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">Inclusive Community</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Designed to provide seamless access to government services, medical assistance, and social protection for PWD residents.
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/80 grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-2xl font-extrabold" style={{ color: '#7a0000' }}>100%</div>
                    <div className="text-xs uppercase tracking-wider text-slate-500 font-semibold mt-0.5">Commitment</div>
                  </div>
                  <div>
                    <div className="text-2xl font-extrabold" style={{ color: '#7a0000' }}>1,258</div>
                    <div className="text-xs uppercase tracking-wider text-slate-500 font-semibold mt-0.5">PWD Cardholders</div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
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

      {/* Modern Redesigned ID Requirements & Application Section */}
      <section className="py-24 bg-white px-6 lg:px-12 relative overflow-hidden">
        
        {/* Subtle Background Accent */}
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-5" style={{ backgroundColor: '#7a0000' }} />

        <div className="max-w-6xl mx-auto relative z-10 space-y-16">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold tracking-widest uppercase px-3.5 py-1.5 rounded-full" style={{ color: '#7a0000', backgroundColor: '#7a000015', border: '1px solid #7a000030' }}>
              Step-by-Step Guide
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              ID Requirements & Application Process
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Everything you need to know to secure your official Tanauan City PWD ID smoothly.
            </p>
          </div>

          {/* Grid Layout: Requirements vs Process */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Requirements Card */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 bg-slate-50/80 p-8 sm:p-10 rounded-[2.5p_2.5rem] rounded-3xl border border-slate-200/80 shadow-sm relative space-y-6"
            >
              <div className="flex items-center space-x-3 pb-4 border-b border-slate-200">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white shadow-sm" style={{ backgroundColor: '#7a0000' }}>
                  1
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900">Documentary Requirements</h3>
                  <p className="text-xs text-slate-500 font-medium">Prepare these items before proceeding</p>
                </div>
              </div>

              <ul className="space-y-4">
                {[
                  { text: "Voter's ID or Voter's Certification (1 photocopy)", note: "Proof of residency" },
                  { text: "Birth Certificate (1 photocopy)", note: "Civil status & identity" },
                  { text: "1x1 Pictures (4 pieces, white background)", note: "Recent standard ID photos" },
                  { text: "1 Whole Body Picture", note: "Required only if disability is already apparent" },
                  { text: "Medical Certification from a Doctor", note: "Required only if disability is non-apparent" }
                ].map((req, idx) => (
                  <li key={idx} className="flex items-start space-x-3 bg-white p-4 rounded-2xl border border-slate-100 shadow-xs">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mt-0.5" style={{ color: '#7a0000', backgroundColor: '#7a000015' }}>
                      {idx + 1}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-slate-800">{req.text}</p>
                      <p className="text-xs text-slate-500 mt-0.5">{req.note}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Right Column: Application Process & Meta */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-6 flex flex-col space-y-6"
            >
              {/* Process Card */}
              <div className="bg-slate-50/80 p-8 sm:p-10 rounded-3xl border border-slate-200/80 shadow-sm space-y-6">
                <div className="flex items-center space-x-3 pb-4 border-b border-slate-200">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white shadow-sm" style={{ backgroundColor: '#7a0000' }}>
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-slate-900">Application Steps</h3>
                    <p className="text-xs text-slate-500 font-medium">Follow these workflow steps at the office</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    { step: "01", title: "Present Requirements", desc: "Go to the Information Desk to submit and have your documents evaluated." },
                    { step: "02", title: "Fill Out Application Form", desc: "Complete the form and wait for a text message or call notification for pickup." },
                    { step: "03", title: "Claim Your PWD ID", desc: "Proceed to PDAO to collect your official ID and sign the logbook." }
                  ].map((proc, idx) => (
                    <div key={idx} className="flex items-start space-x-4 bg-white p-4 rounded-2xl border border-slate-100 shadow-xs">
                      <span className="font-serif italic font-extrabold text-lg opacity-60" style={{ color: '#7a0000' }}>
                        {proc.step}
                      </span>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">{proc.title}</h4>
                        <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{proc.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Highlight Metrics Bar (Processing Time & Fees) */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm text-center">
                  <div className="text-xs font-semibold tracking-wider uppercase text-slate-400 mb-1">Processing Time</div>
                  <div className="text-2xl font-extrabold" style={{ color: '#7a0000' }}>18 Minutes</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Average evaluation time</div>
                </div>

                <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm text-center">
                  <div className="text-xs font-semibold tracking-wider uppercase text-slate-400 mb-1">Service Fees</div>
                  <div className="text-2xl font-extrabold text-emerald-600">FREE</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">No hidden charges</div>
                </div>
              </div>

            </motion.div>

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
                  For inquiries and assistance, please contact the Persons with Disability Affairs Office(PDAO)
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