import React, { useState, useRef, useEffect } from 'react';
import Footer from '../layout/Footer';
import tanauan_bg from '../../assets/sections/pictures/Tnauan.png'

export default function StatusHeader() {
  const [searchTerm, setSearchTerm] = useState('');
  const [inquiryType, setInquiryType] = useState('GENERAL INQUIRY');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    barangayName: '',
    message: ''
  });

  // Custom dropdown open state & ref for click outside handling
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Complete chronological array of all 48 barangays with logo properties added
  const barangays = [
    { name: "Altura Bata", address: "Barangay Altura Bata, Tanauan City", logo: "🏛️" },
    { name: "Altura Matanda", address: "Barangay Altura Matanda, Tanauan City", logo: "🏛️" },
    { name: "Altura South", address: "Barangay Altura South, Tanauan City", logo: "🏛️" },
    { name: "Ambulong", address: "Barangay Ambulong, Tanauan City", logo: "🏛️" },
    { name: "Bañadero", address: "Barangay Bañadero, Tanauan City", logo: "🏛️" },
    { name: "Bagbag", address: "Barangay Bagbag, Tanauan City", logo: "🏛️" },
    { name: "Bagumbayan", address: "Barangay Bagumbayan, Tanauan City", logo: "🏛️" },
    { name: "Balele", address: "Barangay Balele, Tanauan City", logo: "🏛️" },
    { name: "Banjo East", address: "Barangay Banjo East, Tanauan City", logo: "🏛️" },
    { name: "Banjo Laurel (Banjo West)", address: "Barangay Banjo Laurel (Banjo West), Tanauan City", logo: "🏛️" },
    { name: "Bilog-bilog", address: "Barangay Bilog-bilog, Tanauan City", logo: "🏛️" },
    { name: "Boot", address: "Barangay Boot, Tanauan City", logo: "🏛️" },
    { name: "Cale", address: "Barangay Cale, Tanauan City", logo: "🏛️" },
    { name: "Darasa", address: "Barangay Darasa, Tanauan City", logo: "🏛️" },
    { name: "Gonzales", address: "Barangay Gonzales, Tanauan City", logo: "🏛️" },
    { name: "Hidalgo", address: "Barangay Hidalgo, Tanauan City", logo: "🏛️" },
    { name: "Janopol Occidental", address: "Barangay Janopol Occidental, Tanauan City", logo: "🏛️" },
    { name: "Janopol Oriental", address: "Barangay Janopol Oriental, Tanauan City", logo: "🏛️" },
    { name: "Laurel", address: "Barangay Laurel, Tanauan City", logo: "🏛️" },
    { name: "Luyos", address: "Barangay Luyos, Tanauan City", logo: "🏛️" },
    { name: "Mabini", address: "Barangay Mabini, Tanauan City", logo: "🏛️" },
    { name: "Malaking Pulo", address: "Barangay Malaking Pulo, Tanauan City", logo: "🏛️" },
    { name: "Maria Paz", address: "Barangay Maria Paz, Tanauan City", logo: "🏛️" },
    { name: "Maugat", address: "Barangay Maugat, Tanauan City", logo: "🏛️" },
    { name: "Montaña (Ik-ik)", address: "Barangay Montaña (Ik-ik), Tanauan City", logo: "🏛️" },
    { name: "Natatas", address: "Barangay Natatas, Tanauan City", logo: "🏛️" },
    { name: "Pagaspas", address: "Barangay Pagaspas, Tanauan City", logo: "🏛️" },
    { name: "Pantay Bata", address: "Barangay Pantay Bata, Tanauan City", logo: "🏛️" },
    { name: "Pantay Matanda", address: "Barangay Pantay Matanda, Tanauan City", logo: "🏛️" },
    { name: "Poblacion Barangay 1", address: "Poblacion Barangay 1, Tanauan City", logo: "🏛️" },
    { name: "Poblacion Barangay 2", address: "Poblacion Barangay 2, Tanauan City", logo: "🏛️" },
    { name: "Poblacion Barangay 3", address: "Poblacion Barangay 3, Tanauan City", logo: "🏛️" },
    { name: "Poblacion Barangay 4", address: "Barangay Poblacion Barangay 4, Tanauan City", logo: "🏛️" },
    { name: "Poblacion Barangay 5", address: "Barangay Poblacion Barangay 5, Tanauan City", logo: "🏛️" },
    { name: "Poblacion Barangay 6", address: "Barangay Poblacion Barangay 6, Tanauan City", logo: "🏛️" },
    { name: "Poblacion Barangay 7", address: "Barangay Poblacion Barangay 7, Tanauan City", logo: "🏛️" },
    { name: "Sala", address: "Barangay Sala, Tanauan City", logo: "🏛️" },
    { name: "Sambat", address: "Barangay Sambat, Tanauan City", logo: "🏛️" },
    { name: "San Jose", address: "Barangay San Jose, Tanauan City", logo: "🏛️" },
    { name: "Santol (Doña Jacoba Garcia)", address: "Barangay Santol (Doña Jacoba Garcia), Tanauan City", logo: "🏛️" },
    { name: "Santor", address: "Barangay Santor, Tanauan City", logo: "🏛️" },
    { name: "Sulpoc", address: "Barangay Sulpoc, Tanauan City", logo: "🏛️" },
    { name: "Suplang", address: "Barangay Suplang, Tanauan City", logo: "🏛️" },
    { name: "Talaga", address: "Barangay Talaga, Tanauan City", logo: "🏛️" },
    { name: "Tinurik", address: "Barangay Tinurik, Tanauan City", logo: "🏛️" },
    { name: "Trapiche", address: "Barangay Trapiche, Tanauan City", logo: "🏛️" },
    { name: "Ulango", address: "Barangay Ulango, Tanauan City", logo: "🏛️" },
    { name: "Wawa", address: "Barangay Wawa, Tanauan City", logo: "🏛️" }
  ];

  // Filter based on search input
  const filteredBarangays = barangays.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const inquiryTypes = [
    "GENERAL INQUIRY",
    "COMMUNITY ASSISTANCE",
    "DOCUMENT REQUEST",
    "HEALTH & SOCIAL SERVICES",
    "PROJECT PROPOSAL"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.barangayName) {
      alert("Please select a target barangay.");
      return;
    }
    alert(`Inquiry submitted successfully for ${formData.barangayName}!`);
  };

  return (
    <div className="w-full bg-slate-50/70 min-h-screen flex flex-col justify-between font-sans">
      <div>
        {/* Header Section Container with Shrunk & Right-Concentrated Background Image */}
        <div 
          className="relative w-full mt-31 overflow-hidden shadow-xl bg-no-repeat bg-right bg-[length:75%_auto]" 
          style={{ 
            minHeight: '380px',
            backgroundImage: `url(${tanauan_bg})` 
          }}
        >
          
          {/* Optional soft dark overlay for blending */}
          <div className="absolute inset-0 z-0 bg-black/10 pointer-events-none"></div>

          {/* Trimmed Crimson Content Box */}
          <div 
            className="relative z-10 w-full text-white pt-12 pb-10 md:pt-16 md:pb-29"
            style={{ 
              backgroundColor: '#7a0000',
              clipPath: 'polygon(0 0, 78% 0, 53% 100%, 0 100%)' 
            }}
          >
            
            {/* Subtle Ambient Overlay for Depth */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/30 pointer-events-none"></div>
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-600/20 rounded-full blur-3xl pointer-events-none"></div>

            {/* Left-Aligned Text Content */}
            <div className="max-w-3xl mx-8 px-6 md:px-12 relative z-10">
              <div className="my-2">
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-2">
                  Barangays
                </h1>
                <p className="text-2xl md:text-3xl italic font-serif text-red-100/90">
                  The list of 48 Barangays in Tanauan City
                </p>
              </div>

              <div className="mt-8 mb-3 flex items-center gap-2 text-xs font-bold tracking-widest text-red-200 uppercase">
                <span>●</span>
                <span>Integrity • Transparency • Harmony</span>
              </div>

              <p className="text-red-50/90 text-base md:text-lg leading-relaxed max-w-xl font-light">
                Access comprehensive data and updates across all 48 districts of Tanauan City, designed to foster transparent governance and track local progress.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content Section */}
        <section className="max-w-5xl mx-auto px-4 md:px-0 py-16">
          
          {/* Section Header & Search Bar Row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <div className="flex items-center gap-2 text-xs font-extrabold tracking-widest text-red-700 uppercase mb-2">
                <span>—</span>
                <span>EXPLORE DISTRICTS</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900">
                Barangay Directory
              </h2>
              <p className="text-slate-600 text-sm md:text-base max-w-xl ml-4 md:ml-12 font-light">
                Connect with your barangay and share your concerns. Together, we build a stronger community.
              </p>
            </div>

            <div className="w-full md:w-80 relative">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </span>
              <input
                type="text"
                placeholder="Search barangay name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent shadow-sm transition-all"
              />
            </div>
          </div>

          {/* 2-Row Horizontal Scrolling Container with Logos */}
          <div className="relative mb-24">
            <div className="grid grid-rows-2 grid-flow-col overflow-x-auto gap-6 pb-6 pt-2 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-slate-300">
              {filteredBarangays.length > 0 ? (
                filteredBarangays.map((item, index) => (
                  <div 
                    key={index} 
                    className="min-w-[280px] md:min-w-[320px] max-w-[320px] bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between snap-start flex-shrink-0 group"
                  >
                    <div>
                      <div className="flex items-center gap-3.5 mb-4">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-red-50 to-red-100 border border-red-200 flex items-center justify-center text-xl flex-shrink-0 shadow-inner group-hover:scale-105 transition-transform">
                          {item.logo}
                        </div>
                        <div className="overflow-hidden">
                          <span className="text-[10px] font-bold tracking-wider text-red-600 uppercase">Barangay</span>
                          <h3 className="text-base font-bold text-slate-900 truncate">
                            {item.name}
                          </h3>
                        </div>
                      </div>
                      <p className="text-slate-600 text-sm mb-4 line-clamp-2 font-normal">
                        {item.address}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                      <span className="flex items-center gap-1.5">
                        <span>📍</span>
                        <span>Tanauan City, Batangas</span>
                      </span>
                      <span className="text-red-600 opacity-0 group-hover:opacity-100 transition-opacity font-semibold">View →</span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full w-full text-center py-12 text-slate-500 bg-white rounded-2xl border border-dashed border-slate-300">
                  No barangays found matching "{searchTerm}".
                </div>
              )}
            </div>
            <p className="text-xs text-slate-400 text-right font-medium">← Scroll horizontally to see more →</p>
          </div>

          {/* Shrunk Barangay Inquiry Form Section */}
          <div className="max-w-2xl mx-auto bg-white text-slate-900 p-8 md:p-10 rounded-3xl shadow-2xl border border-slate-100 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-red-700 via-rose-600 to-red-800"></div>

            <div className="flex items-center gap-2 text-[11px] font-black tracking-widest uppercase mb-3 text-red-700">
              <span>—</span>
              <span>BARANGAY INQUIRY & ASSISTANCE</span>
            </div>

            <h3 className="text-2xl md:text-3xl font-black mb-2 text-slate-900 tracking-tight">
              Send a Concern or Request
            </h3>
            <p className="text-slate-600 text-sm font-light mb-8">
              Connect with your barangay leadership and share your concerns. Together, we build a stronger community.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Inquiry Type Pills */}
              <div>
                <label className="block text-xs font-bold tracking-wider text-slate-700 uppercase mb-2.5">
                  Inquiry Type *
                </label>
                <div className="flex flex-wrap gap-2">
                  {inquiryTypes.map((type) => (
                    <button
                      type="button"
                      key={type}
                      onClick={() => setInquiryType(type)}
                      className={`px-3.5 py-2 rounded-xl text-[11px] font-bold tracking-wider transition-all duration-200 border ${
                        inquiryType === type
                          ? 'text-white shadow-md scale-105'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-red-600 hover:text-red-700'
                      }`}
                      style={inquiryType === type ? { backgroundColor: '#7a0000', borderColor: '#7a0000' } : {}}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Input Fields Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="relative">
                  <label className="block text-xs font-bold tracking-wider text-slate-700 uppercase mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your first name"
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    className="w-full bg-slate-50/80 border border-slate-300 rounded-xl px-4 py-3 text-slate-900 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:bg-white transition-all placeholder:text-slate-400"
                  />
                </div>

                <div className="relative">
                  <label className="block text-xs font-bold tracking-wider text-slate-700 uppercase mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your last name"
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    className="w-full bg-slate-50/80 border border-slate-300 rounded-xl px-4 py-3 text-slate-900 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:bg-white transition-all placeholder:text-slate-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="relative">
                  <label className="block text-xs font-bold tracking-wider text-slate-700 uppercase mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-slate-50/80 border border-slate-300 rounded-xl px-4 py-3 text-slate-900 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:bg-white transition-all placeholder:text-slate-400"
                  />
                </div>

                <div className="relative">
                  <label className="block text-xs font-bold tracking-wider text-slate-700 uppercase mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+63 900 000 0000"
                    maxLength={11}
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-slate-50/80 border border-slate-300 rounded-xl px-4 py-3 text-slate-900 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:bg-white transition-all placeholder:text-slate-400"
                  />
                </div>
              </div>

              {/* Custom Downward-Flowing Barangay Dropdown Field */}
              <div className="relative" ref={dropdownRef}>
                <label className="block text-xs font-bold tracking-wider text-slate-700 uppercase mb-2">
                  Target Barangay *
                </label>
                
                <div 
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full bg-slate-50/80 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 cursor-pointer flex justify-between items-center select-none shadow-sm hover:border-slate-400 transition-all"
                >
                  <span className={formData.barangayName ? "text-slate-900 font-medium" : "text-slate-400 font-normal"}>
                    {formData.barangayName || "Select specific barangay"}
                  </span>
                  <span className={`text-slate-500 text-xs transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}>▼</span>
                </div>

                {isDropdownOpen && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-2xl max-h-56 overflow-y-auto z-50 divide-y divide-slate-100">
                    {barangays.map((b, i) => (
                      <div
                        key={i}
                        onClick={() => {
                          setFormData({...formData, barangayName: b.name});
                          setIsDropdownOpen(false);
                        }}
                        className="px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-red-50 hover:text-red-800 cursor-pointer transition-colors"
                      >
                        {b.name}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Message Box */}
              <div className="relative">
                <label className="block text-xs font-bold tracking-wider text-slate-700 uppercase mb-2">
                  Your Message *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell us about your concern, request details, or barangay issue..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-slate-50/80 border border-slate-300 rounded-xl px-4 py-3 text-slate-900 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:bg-white transition-all resize-none placeholder:text-slate-400"
                ></textarea>
              </div>

              {/* Submit Row */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-slate-100">
                <p className="text-[11px] font-medium text-slate-500 max-w-xs leading-relaxed">
                  By submitting, you agree to our privacy policy regarding local data handling.
                </p>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 text-white font-bold text-xs tracking-widest uppercase rounded-xl shadow-lg hover:shadow-red-900/20 transition-all duration-200 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
                  style={{ backgroundColor: '#7a0000' }}
                >
                  Submit Inquiry
                </button>
              </div>

            </form>

          </div>

        </section>
      </div>

      {/* Footer */}
      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
}