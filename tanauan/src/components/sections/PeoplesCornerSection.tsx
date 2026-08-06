import React, { useState, useEffect, useRef } from 'react';

// Official 48 Barangays of Tanauan City, Batangas
const TANAUAN_BARANGAYS = [
  "Altura Bata", "Altura Lawa", "Altura Matanda font", "Bagbag", "Bagumbayan",
  "Balele", "Banjo East", "Banjo Laurel (Banjo West)", "Bilog-Bilog", "Boot",
  "Cale", "Darasa", "Gonzales", "Hidalgo", "Janopol Hill",
  "Janopol Oriental", "Laurel", "Luyos", "Mabini", "Malaking Pulo",
  "Maria Paz", "Maugat", "Montaña (Ik-ik)", "Natatas", "Pagaspas",
  "Pantay Bata", "Pantay Matanda", "Poblacion Barangay 1", "Poblacion Barangay 2", "Poblacion Barangay 3",
  "Poblacion Barangay 4", "Poblacion Barangay 5", "Poblacion Barangay 6", "Poblacion Barangay 7", "Saimsim",
  "Sala", "Sambat", "San Jose", "Santor", "Sico",
  "Suplang", "Talaga", "Tinurik", "Trapiche", "Ulango",
  "Wawa", "Suplang East", "Zapote"
].sort();

// --- Zero-Dependency Inline SVG Icons ---
export const HeartIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </svg>
);

export const SendIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m22 2-7 20-4-9-9-4Z" />
    <path d="M22 2 11 13" />
  </svg>
);

export const MessageSquareIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

export const CheckCircleIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

export const MapPinIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-10a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export const PhoneIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

export const MailIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

export const FacebookIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export const LockIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

export const SparklesIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z" />
  </svg>
);

export const HelpCircleIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

export const ChevronDownIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m6 9 6 6 6-6"/>
  </svg>
);

export const SearchIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);

export function PeoplesCornerSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    barangay: '',
    typeOfConcern: 'Complaint',
    subject: '',
    message: ''
  });

  const [charCount, setCharCount] = useState(0);

  // Barangay Dropdown State & Refs
  const [isBrgyOpen, setIsBrgyOpen] = useState(false);
  const [brgySearch, setBrgySearch] = useState('');
  const brgyDropdownRef = useRef<HTMLDivElement>(null);

  // --- REACT VERTICAL CENTERING SCROLL MECHANICS ---
  const [pinStyle, setPinStyle] = useState<React.CSSProperties>({});
  const gridContainerRef = useRef<HTMLDivElement>(null);
  const columnRef = useRef<HTMLDivElement>(null);
  const sidebarCardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!gridContainerRef.current || !sidebarCardsRef.current || !columnRef.current) return;

      if (window.innerWidth < 1024) {
        setPinStyle({});
        return;
      }

      const gridRect = gridContainerRef.current.getBoundingClientRect();
      const columnWidth = columnRef.current.offsetWidth;
      const cardsHeight = sidebarCardsRef.current.offsetHeight;
      const windowHeight = window.innerHeight;

      const centeredTop = (windowHeight - cardsHeight) / 2;

      const isPastInitialTop = gridRect.top <= centeredTop;
      const isBeforeFaqBorder = gridRect.bottom >= centeredTop + cardsHeight;

      if (isPastInitialTop && isBeforeFaqBorder) {
        setPinStyle({
          position: 'fixed',
          top: `${centeredTop}px`,
          width: `${columnWidth}px`,
          zIndex: 20,
        });
      } else if (!isBeforeFaqBorder) {
        setPinStyle({
          position: 'absolute',
          bottom: '0px',
          width: '100%',
          zIndex: 20,
        });
      } else {
        setPinStyle({
          position: 'relative',
          width: '100%',
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  // Close Barangay dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (brgyDropdownRef.current && !brgyDropdownRef.current.contains(event.target as Node)) {
        setIsBrgyOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const concernOptions = ['Complaint', 'Inquiry', 'Suggestion', 'Commendation'];

  const filteredBarangays = TANAUAN_BARANGAYS.filter(brgy => 
    brgy.toLowerCase().includes(brgySearch.toLowerCase())
  );

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    if (text.length <= 1000) {
      setFormData({ ...formData, message: text });
      setCharCount(text.length);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.barangay) {
      alert('Please select your Barangay.');
      return;
    }
    alert(`Thank you, ${formData.fullName}! Your concern regarding ${formData.barangay} has been submitted.`);
  };

  return (
    <section 
      id="peoples-corner" 
      className="min-h-screen w-full bg-slate-50 text-slate-800 py-12 px-4 md:px-8 lg:px-12 relative font-sans selection:bg-red-500 selection:text-white"
    >
      {/* Background Glow Accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-10 w-80 h-80 bg-rose-500/10 rounded-full blur-2xl pointer-events-none" />

      {/* Main Container */}
      <div className="max-w-6xl mx-auto w-full space-y-16 relative z-10">
        
        {/* ================= SECTION 1: HEADER & FORM ================= */}
        <div className="space-y-8">
          {/* Header Section */}
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-red-600 text-xs font-bold uppercase tracking-wider shadow-sm">
              <HeartIcon className="w-3.5 h-3.5 text-red-500" />
              <span>Official Feedback Portal</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
              PEOPLE'S CORNER
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
              Share your concerns, feedback, or suggestions to help us improve Tanauan City. Your voice matters in building a better community.
            </p>
          </div>

          {/* Grid Content Container */}
          <div ref={gridContainerRef} className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative items-start">
            
            {/* Left Column (4 Cols): VERTICALLY CENTERED ON SCROLL */}
            <div ref={columnRef} className="lg:col-span-4 h-full relative">
              <div ref={sidebarCardsRef} style={pinStyle} className="space-y-5">
                
                {/* How It Works Card */}
                <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm relative overflow-hidden hover:shadow-md transition-all duration-300">
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-red-600 to-rose-500" />

                  <div className="text-center mb-1">
                    <h3 className="text-base font-bold text-slate-900 tracking-tight inline-flex items-center gap-2">
                      <span>How It Works</span>
                      <SparklesIcon className="w-4 h-4 text-red-500" />
                    </h3>
                  </div>
                  <p className="text-xs text-slate-500 text-center mb-5">
                    We value your input and respond to your concerns.
                  </p>
                  <div className="space-y-4 relative before:absolute before:left-3.5 before:top-3 before:bottom-3 before:w-[2px] before:bg-slate-100">
                    
                    {/* Step 1 */}
                    <div className="flex items-start gap-3 relative">
                      <div className="w-7 h-7 rounded-full bg-red-50 text-red-600 border border-red-200 flex items-center justify-center shrink-0 z-10 text-xs font-bold">
                        <SendIcon className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-slate-800">1. Submit Your Concern</h4>
                        <p className="text-[11px] text-slate-500 leading-tight">
                          Fill out the form with your concerns or suggestions.
                        </p>
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="flex items-start gap-3 relative">
                      <div className="w-7 h-7 rounded-full bg-red-50 text-red-600 border border-red-200 flex items-center justify-center shrink-0 z-10 text-xs font-bold">
                        <MessageSquareIcon className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-slate-800">2. We Review</h4>
                        <p className="text-[11px] text-slate-500 leading-tight">
                          Our team reviews your submission carefully.
                        </p>
                      </div>
                    </div>

                    {/* Step 3 */}
                    <div className="flex items-start gap-3 relative">
                      <div className="w-7 h-7 rounded-full bg-red-50 text-red-600 border border-red-200 flex items-center justify-center shrink-0 z-10 text-xs font-bold">
                        <CheckCircleIcon className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-slate-800">3. Get a Response</h4>
                        <p className="text-[11px] text-slate-500 leading-tight">
                          We'll respond to you via email if needed.
                        </p>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Other Ways to Reach Us Card */}
                <div className="bg-slate-900 text-white rounded-2xl p-5 border border-slate-800 shadow-md space-y-3 hover:border-slate-700 transition-colors">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-red-400">
                    Other Ways to Reach Us
                  </h4>

                  <div className="space-y-2.5 text-[11px] text-slate-300">
                    <div className="flex items-center gap-2.5">
                      <MapPinIcon className="w-3.5 h-3.5 text-red-400 shrink-0" />
                      <span>City Hall, Tanauan City, Batangas</span>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <PhoneIcon className="w-3.5 h-3.5 text-red-400 shrink-0" />
                      <a href="tel:0437785830" className="hover:text-white transition-colors">(043) 778 5830</a>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <MailIcon className="w-3.5 h-3.5 text-red-400 shrink-0" />
                      <a href="mailto:city_hall@tanauancity.gov.ph" className="hover:text-white transition-colors">city_hall@tanauancity.gov.ph</a>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <FacebookIcon className="w-3.5 h-3.5 text-red-400 shrink-0" />
                      <a href="https://facebook.com/cityoftanauan" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">facebook.com/cityoftanauan</a>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Column (8 Cols): Upgraded Form with Barangay Selection */}
            <div className="lg:col-span-8">
              <form 
                onSubmit={handleSubmit}
                className="bg-white border border-slate-200/80 rounded-2xl shadow-xl shadow-slate-200/50 overflow-hidden flex flex-col transition-all duration-300 hover:border-slate-300"
              >
                {/* Header Bar */}
                <div className="bg-gradient-to-r from-red-600 via-red-600 to-rose-600 p-5 sm:p-6 text-white relative overflow-hidden">
                  <div className="absolute -right-10 -top-10 w-32 h-32 bg-white/10 rounded-full blur-xl pointer-events-none" />
                  <div className="relative z-10">
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-white/20 text-[10px] font-extrabold uppercase tracking-widest text-white mb-2 backdrop-blur-sm">
                      Quick Submission
                    </span>
                    <h3 className="text-lg sm:text-xl font-black tracking-tight">Submit Your Concern</h3>
                    <p className="text-xs text-red-100 font-medium mt-1">
                      All submissions are securely reviewed by our team. Your input shapes our community.
                    </p>
                  </div>
                </div>

                {/* Form Content Body */}
                <div className="p-6 sm:p-8 space-y-6">
                  
                  {/* SECTION 1: Category Selector */}
                  <div className="space-y-2">
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700">
                      Type of Concern <span className="text-red-500">*</span>
                    </label>
                    <div className="flex flex-wrap gap-2.5">
                      {concernOptions.map((type) => {
                        const isActive = formData.typeOfConcern === type;
                        return (
                          <button
                            key={type}
                            type="button"
                            onClick={() => setFormData({ ...formData, typeOfConcern: type })}
                            className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wide transition-all duration-200 cursor-pointer ${
                              isActive
                                ? 'bg-slate-900 text-white shadow-md shadow-slate-900/20 scale-[1.02]'
                                : 'bg-slate-50 border border-slate-200/80 text-slate-600 hover:border-slate-300 hover:bg-slate-100'
                            }`}
                          >
                            {type}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="border-t border-slate-100 my-2" />

                  {/* SECTION 2: Personal Details */}
                  <div className="space-y-4">
                    <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">
                      Personal Information
                    </p>

                    {/* Row 1: Full Name & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 mb-1.5">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input 
                          type="text"
                          required
                          placeholder="Juan Dela Cruz"
                          value={formData.fullName}
                          onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                          className="w-full text-xs px-3.5 py-3 rounded-xl bg-slate-50/70 border border-slate-200/90 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-500/10 transition-all shadow-inner"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 mb-1.5">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input 
                          type="email"
                          required
                          placeholder="juandelacruz@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="w-full text-xs px-3.5 py-3 rounded-xl bg-slate-50/70 border border-slate-200/90 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-500/10 transition-all shadow-inner"
                        />
                      </div>
                    </div>

                    {/* Row 2: Phone & Searchable Barangay Selection */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 mb-1.5">
                          Phone Number
                        </label>
                        <input 
                          type="tel"
                          maxLength={11}
                          inputMode="numeric"
                          placeholder="09XXXXXXXXX"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value.replace(/[^0-9]/g, '')})}
                          className="w-full text-xs px-3.5 py-3 rounded-xl bg-slate-50/70 border border-slate-200/90 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-500/10 transition-all shadow-inner"
                        />
                      </div>

                      {/* SEARCHABLE BARANGAY DROPDOWN */}
                      <div className="relative" ref={brgyDropdownRef}>
                        <label className="block text-[11px] font-bold text-slate-700 mb-1.5">
                          Barangay <span className="text-red-500">*</span>
                        </label>
                        
                        <button
                          type="button"
                          onClick={() => setIsBrgyOpen(!isBrgyOpen)}
                          className={`w-full text-xs px-3.5 py-3 rounded-xl border text-left flex items-center justify-between transition-all shadow-inner ${
                            formData.barangay 
                              ? 'bg-white border-slate-300 text-slate-800 font-medium' 
                              : 'bg-slate-50/70 border-slate-200/90 text-slate-400'
                          } focus:outline-none focus:border-red-500 focus:ring-4 focus:ring-red-500/10`}
                        >
                          <span className="truncate">
                            {formData.barangay || "Select Barangay"}
                          </span>
                          <ChevronDownIcon className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${isBrgyOpen ? 'rotate-180 text-red-500' : ''}`} />
                        </button>

                        {/* Dropdown Menu Overlay */}
                        {isBrgyOpen && (
                          <div className="absolute top-full left-0 right-0 mt-1.5 bg-white border border-slate-200 rounded-xl shadow-xl z-50 overflow-hidden flex flex-col max-h-60 animate-in fade-in slide-in-from-top-1 duration-150">
                            {/* Search Input Header */}
                            <div className="p-2 border-b border-slate-100 bg-slate-50/50 flex items-center gap-2">
                              <SearchIcon className="w-3.5 h-3.5 text-slate-400 shrink-0 ml-1" />
                              <input 
                                type="text"
                                autoFocus
                                placeholder="Search barangay..."
                                value={brgySearch}
                                onChange={(e) => setBrgySearch(e.target.value)}
                                className="w-full text-xs bg-transparent text-slate-800 placeholder-slate-400 focus:outline-none"
                              />
                            </div>

                            {/* Barangays Scrollable List */}
                            <div className="overflow-y-auto divide-y divide-slate-50 py-1">
                              {filteredBarangays.length > 0 ? (
                                filteredBarangays.map((brgy) => (
                                  <button
                                    key={brgy}
                                    type="button"
                                    onClick={() => {
                                      setFormData({ ...formData, barangay: brgy });
                                      setIsBrgyOpen(false);
                                      setBrgySearch('');
                                    }}
                                    className={`w-full text-left px-3.5 py-2 text-xs transition-colors flex items-center justify-between ${
                                      formData.barangay === brgy
                                        ? 'bg-red-50 text-red-600 font-bold'
                                        : 'text-slate-700 hover:bg-slate-50'
                                    }`}
                                  >
                                    <span>{brgy}</span>
                                    {formData.barangay === brgy && (
                                      <CheckCircleIcon className="w-3.5 h-3.5 text-red-500" />
                                    )}
                                  </button>
                                ))
                              ) : (
                                <div className="px-3.5 py-3 text-xs text-slate-400 text-center">
                                  No barangay found
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-slate-100 my-2" />

                  {/* SECTION 3: Message Content */}
                  <div className="space-y-4">
                    <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">
                      Concern Details
                    </p>

                    {/* Subject */}
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1.5">
                        Subject Summary <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="text"
                        required
                        placeholder="Brief overview of your issue..."
                        value={formData.subject}
                        onChange={(e) => setFormData({...formData, subject: e.target.value})}
                        className="w-full text-xs px-3.5 py-3 rounded-xl bg-slate-50/70 border border-slate-200/90 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-500/10 transition-all shadow-inner"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <div className="flex justify-between items-center mb-1.5">
                        <label className="text-[11px] font-bold text-slate-700">
                          Detailed Description <span className="text-red-500">*</span>
                        </label>
                        <span className="text-[10px] text-slate-400 font-semibold bg-slate-100 px-2 py-0.5 rounded-full">
                          {charCount}/1000
                        </span>
                      </div>
                      <textarea 
                        required
                        rows={5}
                        placeholder="Please share specific details, dates, or locations related to your concern..."
                        value={formData.message}
                        onChange={handleMessageChange}
                        className="w-full text-xs p-3.5 rounded-xl bg-slate-50/70 border border-slate-200/90 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-500/10 transition-all resize-none shadow-inner"
                      />
                    </div>
                  </div>

                  {/* Privacy Notice Box & Action Button */}
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100">
                    <div className="flex items-start gap-2.5 bg-slate-50 p-3.5 rounded-xl border border-slate-200/60 max-w-lg">
                      <LockIcon className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                      <p className="text-[10px] text-slate-500 leading-relaxed font-medium">
                        <strong className="text-slate-700">Privacy Guarantee:</strong> Your information is encrypted and strictly used by the City Government of Tanauan to process your request.
                      </p>
                    </div>

                    <button 
                      type="submit"
                      className="w-full sm:w-auto px-7 py-3 rounded-xl bg-gradient-to-r from-red-600 via-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-bold text-xs shadow-lg shadow-red-500/25 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 shrink-0 cursor-pointer"
                    >
                      <SendIcon className="w-4 h-4" />
                      <span>Submit Request</span>
                    </button>
                  </div>

                </div>
              </form>
            </div>

          </div>
        </div>

        {/* ================= SECTION 2: FAQ DESIGN ================= */}
        <div className="space-y-8 pt-6 border-t border-slate-200/60">
          
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200/60 text-slate-700 text-[11px] font-bold uppercase tracking-wider">
              <HelpCircleIcon className="w-3.5 h-3.5 text-slate-500" />
              <span>Got Questions?</span>
            </div>
            <h3 className="text-2xl font-black text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
              Find quick answers to common questions about submitting concerns and feedback.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            
            {/* FAQ Card 1 */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-red-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-red-50 text-red-600 flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
                  ?
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                    How soon will my concern be addressed?
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    We aim to respond to all concerns within <strong className="text-slate-700">3-5 business days</strong>, depending on the complexity of the issue and department review.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ Card 2 */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-red-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-red-50 text-red-600 flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
                  ?
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                    Can I submit anonymously?
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    While we prefer complete contact details to properly resolve issues, you may provide minimal details if you wish to stay private.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ Card 3 */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-red-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-red-50 text-red-600 flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
                  ?
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                    What happens after I submit?
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Your submission is routed to our central administrative team and then dispatched directly to the appropriate city department.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ Card 4 */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-red-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-red-50 text-red-600 flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
                  ?
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                    Can I attach files or photos?
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Currently, our web form doesn't take attachments. Please describe details in full, or send photos directly to our official email.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ================= FOOTER COMMITMENT NOTE ================= */}
        <div className="text-center max-w-2xl mx-auto space-y-3 pt-4 pb-6">
          <p className="text-xs text-slate-500 leading-relaxed">
            The City Government of Tanauan is committed to listening to our citizens and addressing your concerns. Your feedback helps us improve our services and build a better community for everyone.
          </p>

          <a 
            href="https://facebook.com/cityoftanauan" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-red-600 hover:text-red-700 font-bold transition-colors bg-red-50 px-4 py-2 rounded-full border border-red-100"
          >
            <FacebookIcon className="w-3.5 h-3.5 fill-current" />
            <span>Follow us on Facebook</span>
          </a>
        </div>

      </div>
    </section>
  );
}

export default PeoplesCornerSection;