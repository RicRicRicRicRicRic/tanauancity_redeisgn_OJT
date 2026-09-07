import { useState, useMemo } from 'react';
import Footer from '../layout/Footer';
import spl_img_1 from '../../assets/sections/pictures/1-spl-img.webp';
import spl_img_2 from '../../assets/sections/pictures/2-spl-img.webp';
import spl_img_3 from '../../assets/sections/pictures/3-spl-img.webp';
import spl_img_4 from '../../assets/sections/pictures/4-spl-img.webp';
import vice_mayor_ablao from '../../assets/sections/officials/vice_mayor_ablao.webp';
import coun_alcantara from '../../assets/sections/officials/coun_alcantara.webp';
import coun_arcega from '../../assets/sections/officials/coun_arcega.webp';
import coun_gonzales from '../../assets/sections/officials/coun_gonzales.webp';
import coun_guelos_ramilo from '../../assets/sections/officials/coun_guelos-ramilo.webp';
import coun_manglo from '../../assets/sections/officials/coun_manglo.webp';
import coun_marqueses from '../../assets/sections/officials/coun_marqueses.webp';
import coun_micosa from '../../assets/sections/officials/coun_micosa.webp';
import coun_natanauan from '../../assets/sections/officials/coun_natanauan.webp';
import coun_oruga from '../../assets/sections/officials/coun_oruga.webp';
import coun_tabing from '../../assets/sections/officials/coun_tabing.webp';
import  sk_pres_bilog from '../../assets/sections/pictures/sk_fed_pres_bilog.webp'
import  abc_pres_agojo from '../../assets/sections/pictures/abc_pres_precious_agojo.webp'

import hero_image from '../../assets/sections/pictures/investors2.webp';

import { Search, SortAsc, Download, Eye, FileText, ChevronRight, ChevronDown, LayoutGrid, List, ChevronLeft } from 'lucide-react';

// Organized dataset mapped by category / year / quarter keys[cite: 10]
const documentsDatabase: Record<string, Array<{ id: number; title: string; date: string }>> = {
  '2021-INVITATION TO BID': [
    { id: 1, title: 'Supply, Delivery, and Installation of Christmas Decorations', date: 'August 12, 2021' },
    { id: 2, title: 'Supply and Delivery of Vehicle for City Cooperative and Livelihood Development Office', date: 'August 10, 2021' },
    { id: 3, title: 'Supply and Delivery of Various Deped Forms for end of school year rites of Deped Tanauan City school year 2020-2021', date: 'August 05, 2021' },
    { id: 4, title: 'Supply and Delivery of Tablets to be used by Learners/Students of Deped Tanauan City', date: 'July 28, 2021' },
    { id: 5, title: 'Supply and Delivery of Tablet to be used by Learners/Students of Deped Tanauan City', date: 'July 20, 2021' },
    { id: 6, title: 'Supply and Delivery of Rice for Covid-19 Positive and PUI\'s Patients', date: 'July 15, 2021' },
  ],
  '2021-BAC RESOLUTION': [
    { id: 1, title: 'Supply and delivery of Grocery Items for Tulong Handog sa Tanaueno Program (Re-Bid)', date: 'August 20, 2021' },
    { id: 2, title: 'Supply and Delivery of Mobile Clinic for CHO', date: 'August 15, 2021' },
    { id: 3, title: 'Supply and delivery of Manipulative and Educational Toys for Kindergarten pupils in City Schools Division of Tanauan', date: 'August 10, 2021' },
  ],
  '2021-NOTICE TO PROCEED': [
    { id: 1, title: 'ALWAYS RIGHTPHARMACUETICALS CO./JC HIGH EAGLE MARKETING CO.JVA THAT SUPPLY AND DELIVERY OF MOBILE CLINIC FOR CHO', date: 'August 12, 2021' },
    { id: 2, title: 'ANGELMAI TRADING THAT PURCHASE OF GROCERY ITEM IN ASSISTANCE TO COVID-19 CONFIRMED CASE, PUI AND PUM', date: 'August 10, 2021' },
  ],
  '2021-NOTICE OF AWARD': [
    { id: 1, title: 'Supply and delivery of Mobile Clinic for City Health Office', date: 'August 12, 2021' },
    { id: 2, title: 'Procurement Emergency Purchase', date: 'August 10, 2021' },
  ],
  '2021-FULL DISCLOSURE REPORT': [
    { id: 1, title: '20% Component of the IRA Utilization (IRAU)', date: 'December 15, 2021' },
    { id: 2, title: '70% LDRRM Utilization Fund (LDRRMFU)', date: 'December 10, 2021' },
    { id: 3, title: 'Bid Results on Civil Works, Goods & Services, Consulting Services', date: 'December 05, 2021' },
  ],
  '2022-INVITATION TO BID': [
    { id: 1, title: 'Garbage Hauling Services', date: 'December 28, 2022' },
    { id: 2, title: 'Supply & Delivery of Brand New 4x4 Backhoe (GSO)', date: 'December 20, 2022' },
  ],
  '2022-BAC RESOLUTION': [
    { id: 1, title: 'Supply and Delivery of Armchair for Various School', date: 'December 20, 2022' },
    { id: 2, title: 'Supply and Delivery of Assorted Groceries in Christmas Design', date: 'December 15, 2022' },
  ],
  '2022-NOTICE TO PROCEED': [
    { id: 1, title: 'Supply and Delivery of Armchair for Various Schools', date: 'December 20, 2022' },
  ],
  '2022-NOTICE OF AWARD': [
    { id: 1, title: 'Supply and Delivery of Rice and Sticker Provision of Welfare Goods Assistance', date: 'December 20, 2022' },
  ],
  '2022-FIRST QUARTER': [
    { id: 1, title: '20% Component of the IRA Utilization (IRAU)', date: 'April 20, 2022' },
    { id: 2, title: '70 % LDRRM Utilization Fund (LDRRMFU)', date: 'April 18, 2022' },
    { id: 3, title: 'Bid Results on Civil Works, Goods & Services, Consulting Services', date: 'April 15, 2022' },
    { id: 4, title: 'Human Resource Complement (ManCom)', date: 'April 12, 2022' },
  ],
  '2022-SECOND QUARTER': [
    { id: 1, title: '20% Component of the IRA Utilization (IRAU)', date: 'July 20, 2022' },
    { id: 2, title: '70 % LDRRM Utilization Fund (LDRRMFU)', date: 'July 18, 2022' },
  ],
  '2022-THIRD QUARTER': [
    { id: 1, title: '20% Component of the IRA Utilization (IRAU)', date: 'October 20, 2022' },
  ],
  '2022-FOURTH QUARTER': [
    { id: 1, title: '20% Component of the IRA Utilization (IRAU)', date: 'January 20, 2022' },
  ],
  '2024-FIRST QUARTER': [
    { id: 1, title: 'Q1 2024 Full Disclosure Financial Report', date: 'April 10, 2024' },
  ],
  '2024-SECOND QUARTER': [
    { id: 1, title: 'Q2 2024 Full Disclosure Financial Report', date: 'July 10, 2024' },
  ],
  '2024-THIRD QUARTER': [
    { id: 1, title: 'Q3 2024 Full Disclosure Financial Report', date: 'October 10, 2024' },
  ],
  '2024-FOURTH QUARTER': [
    { id: 1, title: 'Q4 2024 Full Disclosure Financial Report', date: 'January 10, 2025' },
  ],
  '2025-FIRST QUARTER': [
    { id: 1, title: 'Utilization of the 20% of the National Tax Allotment', date: 'April 20, 2025' },
    { id: 2, title: 'Annual Gender and Development (GAD) Accomplishment Report', date: 'April 18, 2025' },
  ],
  '2025-SECOND QUARTER': [
    { id: 1, title: 'Utilization of the 20% of the National Tax Allotment', date: 'July 20, 2025' },
  ],
  '2025-THIRD QUARTER': [
    { id: 1, title: 'Utilization of the 20% of the National Tax Allotment', date: 'October 20, 2025' },
  ],
  '2025-FOURTH QUARTER': [
    { id: 1, title: 'Utilization of the 20% of the National Tax Allotment', date: 'January 20, 2026' },
  ]
};

export default function TransparencyPage() {
  const [activeImage, setActiveImage] = useState(spl_img_1);

  // Document Section States
  const [activeYear, setActiveYear] = useState('2021');
  const [activeCategory, setActiveCategory] = useState('INVITATION TO BID');
  const [openFdrYear, setOpenFdrYear] = useState('2022');
  const [selectedFdrQuarter, setSelectedFdrQuarter] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('default');
  const [viewMode, setViewMode] = useState('grid');
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const [showViewDropdown, setShowViewDropdown] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const galleryImages = [
    { id: 1, src: spl_img_1, label: 'Main Podium View' },
    { id: 2, src: spl_img_2, label: 'Session Hall Overview' },
    { id: 3, src: spl_img_3, label: 'Committee Proceedings' },
    { id: 4, src: spl_img_4, label: 'Interactive Hearing' },
  ];

  const currentKey = selectedFdrQuarter ? selectedFdrQuarter : `${activeYear}-${activeCategory}`;

  const filteredDocuments = useMemo(() => {
    let rawDocs = documentsDatabase[currentKey] || [];
    let result = rawDocs.filter((doc: any) =>
      doc.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (sortOption === 'az') {
      result.sort((a: any, b: any) => a.title.localeCompare(b.title));
    } else if (sortOption === 'za') {
      result.sort((a: any, b: any) => b.title.localeCompare(a.title));
    } else if (sortOption === 'newest') {
      result.sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime());
    }

    return result;
  }, [currentKey, searchQuery, sortOption]);

  useMemo(() => {
    setCurrentPage(1);
  }, [currentKey, searchQuery, sortOption]);

  const paginatedDocuments = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredDocuments.slice(start, start + itemsPerPage);
  }, [filteredDocuments, currentPage]);

  const totalPages = Math.ceil(filteredDocuments.length / itemsPerPage);  
  const quarters = ['FIRST QUARTER', 'SECOND QUARTER', 'THIRD QUARTER', 'FOURTH QUARTER'];

  return (
    <div className="min-h-screen flex flex-col bg-neutral-950 text-neutral-100 pt-36 md:pt-31 selection:bg-neutral-800">
      
      {/* Hero Section */}
      <section className="flex flex-col items-center relative py-24 px-6 md:px-12 overflow-hidden border-b border-neutral-800/50">
        <div className="absolute inset-0 z-0">
          <img 
            src={hero_image} 
            alt="Sangguniang Panglungsod Officials" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/90 via-neutral-900/60 to-neutral-950"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center space-y-3">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium tracking-widest uppercase bg-red-500/10 text-red-400 border border-red-500/20 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            Live Broadcast Portal
          </span>
          <h1 className="text-4xl md:text-5xl font-light tracking-tight text-white drop-shadow-md">
            Sangguniang Panglungsod
          </h1>
          <p className="text-neutral-300 text-sm md:text-base max-w-2xl mx-auto font-light drop-shadow">
            The Legislative Body of the City of Tanauan — Interactive session feeds and archival coverage.
          </p>
        </div>
      </section>

      {/* Main Studio Theater Layout */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-6 md:px-12 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left/Main Column: Big Stage Streamer + Thumbnails */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <h2 className="text-xl font-medium tracking-wide text-white">Live Session Stream</h2>
                <span className="bg-[#7a0000] text-white text-[10px] tracking-wider uppercase font-semibold px-2.5 py-0.5 rounded shadow-sm">
                  LIVE
                </span>
              </div>
              <span className="text-xs text-neutral-400 font-mono">Mondays @ 9:00 AM</span>
            </div>

            <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 shadow-2xl">
              <img 
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
                src={activeImage}
                alt="Active Live Stream Feed"
              />
            </div>

            <div className="space-y-2">
              <p className="text-xs uppercase tracking-wider text-neutral-400 font-medium">Select Feed / Highlights</p>
              <div className="grid grid-cols-4 gap-3">
                {galleryImages.map((img) => (
                  <button
                    key={img.id}
                    onClick={() => setActiveImage(img.src)}
                    className={`relative rounded-lg overflow-hidden aspect-video border-2 transition-all ${
                      activeImage === img.src 
                        ? 'border-[#7a0000] shadow-lg scale-[1.02]' 
                        : 'border-neutral-800 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img.src} alt={img.label} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Sidebar Info & Schedule */}
          <div className="space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800/80 backdrop-blur-md space-y-4">
                <h3 className="text-sm font-semibold tracking-wider uppercase text-neutral-200 border-b border-neutral-800 pb-3">
                  Session Details
                </h3>
                
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-neutral-500 block text-xs uppercase">Regular Schedule</span>
                    <span className="text-neutral-200 font-medium">Every Monday, 9:00 AM</span>
                  </div>
                  <div>
                    <span className="text-neutral-500 block text-xs uppercase">Accessibility</span>
                    <span className="text-neutral-200 font-medium">Open Public Broadcast</span>
                  </div>
                  <div>
                    <span className="text-neutral-500 block text-xs uppercase">Platform Standard</span>
                    <span className="text-neutral-200 font-medium">High-Definition Web Stream</span>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-neutral-900/80 to-neutral-950 border border-neutral-800/80 backdrop-blur-md space-y-3">
                <h3 className="text-sm font-semibold tracking-wider uppercase text-neutral-200">
                  Archived Hearings
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Missed the live broadcast? Access previous weeks' legislative sessions, meeting minutes, and official public records through our archive repository.
                </p>
                <button className="w-full mt-2 py-2.5 text-xs tracking-widest uppercase font-medium bg-neutral-100 text-neutral-950 hover:bg-white transition-colors rounded-lg">
                  Browse Archives
                </button>
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* City Documents Section (Appended to the bottom, styled for dark background blending)[cite: 10] */}
      <section className="border-t border-neutral-800/80 bg-neutral-950 py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-red-400 font-semibold">Repository</span>
              <h2 className="text-3xl font-light text-white tracking-tight mt-1">City Documents & Transparency Reports</h2>
            </div>
            <div className="px-4 py-2 bg-neutral-900 border border-neutral-800 rounded-lg text-xs font-mono text-neutral-300">
              Active Session: 144th Regular Session (June 24, 2025)
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6">
            
            {/* Sidebar Navigation */}
            <div className="w-full md:w-72 bg-neutral-900/60 rounded-2xl shadow-lg border border-neutral-800 p-5 shrink-0 h-fit backdrop-blur-md">
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-xs tracking-wider uppercase mb-3 text-red-400">
                    Bids and Awards
                  </h3>
                  <div className="flex items-center gap-2 mb-3">
                    <button 
                      onClick={() => setActiveYear('2021')}
                      className={`px-3 py-1 text-xs font-medium rounded border transition-colors ${activeYear === '2021' ? 'bg-red-950/60 border-red-500/50 text-red-300' : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-white'}`}
                    >
                      2021
                    </button>
                    <button 
                      onClick={() => setActiveYear('2022')}
                      className={`px-3 py-1 text-xs font-medium rounded border transition-colors ${activeYear === '2022' ? 'bg-red-950/60 border-red-500/50 text-red-300' : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-white'}`}
                    >
                      2022
                    </button>
                  </div>
                  
                  <ul className="space-y-1 text-xs text-neutral-300 font-medium">
                    {['INVITATION TO BID', 'BAC RESOLUTION', 'NOTICE TO PROCEED', 'FULL DISCLOSURE REPORT', 'NOTICE OF AWARD'].map((item) => (
                      <li key={item}>
                        <button
                          onClick={() => {
                            setActiveCategory(item);
                            setSelectedFdrQuarter('');
                          }}
                          className={`w-full text-left px-3 py-2 rounded transition-colors ${activeCategory === item && !selectedFdrQuarter ? 'bg-[#7a0000] text-white font-semibold shadow-md' : 'hover:bg-neutral-800/60 text-neutral-300'}`}
                        >
                          {item}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                <hr className="border-neutral-800" />

                {/* Full Disclosure Report Quarters */}
                <div>
                  <h3 className="font-bold text-xs tracking-wider uppercase mb-3 text-red-400">
                    Full Disclosure Report
                  </h3>
                  <div className="space-y-2 text-xs">
                    {['2022', '2024', '2025'].map((yr) => {
                      const isOpen = openFdrYear === yr;
                      return (
                        <div key={yr} className="border border-neutral-800 rounded-lg overflow-hidden bg-neutral-950/40">
                          <button
                            onClick={() => setOpenFdrYear(isOpen ? '' : yr)}
                            className="w-full text-left px-3 py-2 bg-neutral-900/80 hover:bg-neutral-800 text-neutral-200 font-semibold flex items-center justify-between"
                          >
                            <span>{yr}</span>
                            {isOpen ? <ChevronDown className="w-3.5 h-3.5 text-neutral-400" /> : <ChevronRight className="w-3.5 h-3.5 text-neutral-500" />}
                          </button>

                          {isOpen && (
                            <ul className="bg-neutral-950 py-1 pl-3 pr-2 space-y-1 border-t border-neutral-800">
                              {quarters.map((qtr) => {
                                const quarterKey = `${yr}-${qtr}`;
                                const isSelected = selectedFdrQuarter === quarterKey;
                                return (
                                  <li key={qtr}>
                                    <button
                                      onClick={() => {
                                        setSelectedFdrQuarter(quarterKey);
                                        setActiveCategory('FULL DISCLOSURE REPORT');
                                      }}
                                      className={`w-full text-left px-2 py-1.5 rounded text-[11px] transition-colors flex items-center gap-1.5 ${isSelected ? 'bg-red-950/80 text-red-300 font-bold border border-red-500/30' : 'text-neutral-400 hover:bg-neutral-900 hover:text-neutral-200'}`}
                                    >
                                      <ChevronRight className="w-3 h-3 text-neutral-500 shrink-0" />
                                      <span>{qtr}</span>
                                    </button>
                                  </li>
                                );
                              })}
                            </ul>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Main Documents Content Area */}
            <div className="flex-1 bg-neutral-900/60 rounded-2xl shadow-lg border border-neutral-800 p-6 backdrop-blur-md">
              <div>
                {/* Toolbar */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6 pb-4 border-b border-neutral-800 relative">
                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    {/* Sort Dropdown */}
                    <div className="relative">
                      <button 
                        onClick={() => { setShowSortDropdown(!showSortDropdown); setShowViewDropdown(false); }}
                        className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-neutral-300 bg-neutral-900 border border-neutral-700 rounded-lg hover:bg-neutral-800 transition-colors"
                      >
                        <SortAsc className="w-3.5 h-3.5 text-neutral-400" />
                        Sort {sortOption !== 'default' && `(${sortOption.toUpperCase()})`}
                      </button>
                      {showSortDropdown && (
                        <div className="absolute left-0 mt-2 w-44 bg-neutral-900 border border-neutral-700 rounded-lg shadow-xl z-20 py-1 text-xs">
                          <button onClick={() => { setSortOption('default'); setShowSortDropdown(false); }} className="w-full text-left px-4 py-2 hover:bg-neutral-800 text-neutral-300">Default</button>
                          <button onClick={() => { setSortOption('az'); setShowSortDropdown(false); }} className="w-full text-left px-4 py-2 hover:bg-neutral-800 text-neutral-300">Title (A - Z)</button>
                          <button onClick={() => { setSortOption('za'); setShowSortDropdown(false); }} className="w-full text-left px-4 py-2 hover:bg-neutral-800 text-neutral-300">Title (Z - A)</button>
                          <button onClick={() => { setSortOption('newest'); setShowSortDropdown(false); }} className="w-full text-left px-4 py-2 hover:bg-neutral-800 text-neutral-300">Newest Date</button>
                        </div>
                      )}
                    </div>

                    {/* View Mode Dropdown */}
                    <div className="relative">
                      <button 
                        onClick={() => { setShowViewDropdown(!showViewDropdown); setShowSortDropdown(false); }}
                        className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-neutral-300 bg-neutral-900 border border-neutral-700 rounded-lg hover:bg-neutral-800 transition-colors"
                      >
                        {viewMode === 'grid' ? <LayoutGrid className="w-3.5 h-3.5 text-neutral-400" /> : <List className="w-3.5 h-3.5 text-neutral-400" />}
                        View ({viewMode === 'grid' ? 'Grid' : 'List'})
                      </button>
                      {showViewDropdown && (
                        <div className="absolute left-0 mt-2 w-36 bg-neutral-900 border border-neutral-700 rounded-lg shadow-xl z-20 py-1 text-xs">
                          <button onClick={() => { setViewMode('grid'); setShowViewDropdown(false); }} className="w-full text-left px-4 py-2 hover:bg-neutral-800 text-neutral-300 flex items-center gap-2"><LayoutGrid className="w-3.5 h-3.5" /> Grid View</button>
                          <button onClick={() => { setViewMode('list'); setShowViewDropdown(false); }} className="w-full text-left px-4 py-2 hover:bg-neutral-800 text-neutral-300 flex items-center gap-2"><List className="w-3.5 h-3.5" /> List View</button>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Search Bar */}
                  <div className="relative w-full sm:w-72">
                    <Search className="absolute left-3 top-2.5 w-3.5 h-3.5 text-neutral-400" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search Documents..."
                      className="w-full pl-9 pr-4 py-1.5 text-xs bg-neutral-950 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                </div>

                {/* Documents Cards List/Grid */}
                {paginatedDocuments.length === 0 ? (
                  <div className="text-center py-12 text-neutral-500 text-xs">
                    No documents found matching "{searchQuery}".
                  </div>
                ) : (
                  <div className={viewMode === 'grid' ? "grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch" : "flex flex-col gap-3"}>
                    {paginatedDocuments.map((doc: any) => (
                      <div 
                        key={doc.id}
                        className="flex items-start justify-between p-4 bg-neutral-950/60 border border-neutral-800 rounded-xl hover:border-neutral-700 transition-all h-full shadow-md"
                      >
                        <div className="flex items-start gap-3 overflow-hidden pr-2">
                          <div className="p-2.5 bg-red-950/40 text-red-400 rounded-lg shrink-0 flex flex-col items-center justify-center border border-red-500/20">
                            <FileText className="w-5 h-5" />
                            <span className="text-[9px] font-bold mt-0.5">PDF</span>
                          </div>
                          <div className="overflow-hidden">
                            <h4 className="font-medium text-neutral-200 text-xs leading-snug break-words">{doc.title}</h4>
                            <p className="text-[11px] text-neutral-400 mt-1">Published: {doc.date}</p>
                          </div>
                        </div>

                        <div className="flex flex-col gap-1.5 shrink-0 ml-2">
                          <button 
                            onClick={() => alert(`Downloading ${doc.title}...`)}
                            className="flex items-center justify-center gap-1 px-3 py-1 text-[11px] font-medium text-white bg-[#7a0000] rounded-md hover:bg-red-900 transition-colors shadow-sm"
                          >
                            <Download className="w-3 h-3" />
                            Download
                          </button>
                          <button 
                            onClick={() => alert(`Previewing ${doc.title}...`)}
                            className="flex items-center justify-center gap-1 px-3 py-1 text-[11px] font-medium text-neutral-300 bg-neutral-800 rounded-md hover:bg-neutral-700 transition-colors"
                          >
                            <Eye className="w-3 h-3" />
                            Preview
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Pagination Footer */}
              {totalPages > 1 && (
                <div className="flex items-center justify-between border-t border-neutral-800 mt-8 pt-4">
                  <div className="text-xs text-neutral-400">
                    Page <span className="font-semibold text-white">{currentPage}</span> of <span className="font-semibold text-white">{totalPages}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                      disabled={currentPage === 1}
                      className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-neutral-300 bg-neutral-900 border border-neutral-700 rounded-md hover:bg-neutral-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                    >
                      <ChevronLeft className="w-3.5 h-3.5" />
                      Previous
                    </button>
                    
                    <div className="flex items-center gap-1 px-2">
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                          key={page}
                          onClick={() => setCurrentPage(page)}
                          className={`w-7 h-7 text-xs font-medium rounded-md transition-colors ${currentPage === page ? 'bg-[#7a0000] text-white shadow-sm' : 'text-neutral-400 hover:bg-neutral-800 hover:text-white'}`}
                        >
                          {page}
                        </button>
                      ))}
                    </div>

                    <button
                      onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                      disabled={currentPage === totalPages}
                      className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-neutral-300 bg-neutral-900 border border-neutral-700 rounded-md hover:bg-neutral-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                    >
                      Next
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}

              {/* Added Button at the bottom of the City Document Main Card */}
              <div className="border-t border-neutral-800 mt-6 pt-6 text-center">
                <a
                  href='/transparency'
                  className="w-auto sm:w-60 px-6 py-2.5 text-xs font-medium tracking-wider uppercase text-white bg-[#7a0000] hover:bg-red-900 transition-colors rounded-xl shadow-md flex items-center justify-center gap-2 mx-auto"
                >
                  <FileText className="w-4 h-4" />
                  <span>View All Documents</span>
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Sleek Minimalist Top-Accent Trio Section */}
      <section className="border-t border-neutral-800/80 bg-neutral-950 py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto space-y-12">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium tracking-widest uppercase bg-red-500/10 text-red-400 border border-red-500/20">
              Overview & Information
            </span>
            <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight">
              Legislative Core Pillars
            </h2>
            <p className="text-neutral-400 text-sm font-light">
              Essential references, schedules, and active ordinances governing Tanauan City.
            </p>
          </div>

          {/* Symmetrical 3-Column Minimalist Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Pillar 1: About SP */}
            <div className="relative p-8 rounded-2xl bg-neutral-900/30 border border-neutral-800/80 backdrop-blur-md flex flex-col justify-between overflow-hidden group hover:border-neutral-700 transition-all duration-300">
              {/* Top Glow Accent */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-60 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="space-y-6">
                <div className="w-10 h-10 rounded-lg bg-red-950/50 border border-red-500/20 flex items-center justify-center text-red-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>

                <div className="space-y-2">
                  <h3 className="text-base font-medium text-white tracking-wide">About SP</h3>
                  <p className="text-neutral-400 text-xs md:text-sm font-light leading-relaxed">
                    The Sangguniang Panglungsod is the city's official legislative body responsible for enacting structural ordinances and resolutions for public welfare.
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-neutral-800/60 flex items-center justify-between text-[11px] text-neutral-500 font-mono">
                <span>Mandate</span>
                <span className="text-neutral-300">RA No. 7160</span>
              </div>
            </div>

            {/* Pillar 2: Session Schedule */}
            <div className="relative p-8 rounded-2xl bg-neutral-900/30 border border-neutral-800/80 backdrop-blur-md flex flex-col justify-between overflow-hidden group hover:border-neutral-700 transition-all duration-300">
              {/* Top Glow Accent */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-60 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="space-y-6">
                <div className="w-10 h-10 rounded-lg bg-emerald-950/50 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-medium text-white tracking-wide">Session Schedule</h3>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[9px] uppercase font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      Live
                    </span>
                  </div>
                  <p className="text-neutral-400 text-xs md:text-sm font-light leading-relaxed">
                    Regular public legislative sessions take place every Monday at 9:00 AM at the Session Hall.
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-neutral-800/60 flex items-center justify-between text-[11px] text-neutral-500 font-mono">
                <span>Frequency</span>
                <span className="text-emerald-400">Weekly (Mondays)</span>
              </div>
            </div>

            {/* Pillar 3: Ordinances */}
            <div className="relative p-8 rounded-2xl bg-neutral-900/30 border border-neutral-800/80 backdrop-blur-md flex flex-col justify-between overflow-hidden group hover:border-neutral-700 transition-all duration-300">
              {/* Top Glow Accent */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-60 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="space-y-6">
                <div className="w-10 h-10 rounded-lg bg-purple-950/50 border border-purple-500/20 flex items-center justify-center text-purple-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>

                <div className="space-y-2">
                  <h3 className="text-base font-medium text-white tracking-wide">Ordinances</h3>
                  <p className="text-neutral-400 text-xs md:text-sm font-light leading-relaxed">
                    Explore city resolutions, legislative documents, and public records issued by the council.
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-neutral-800/60 flex items-center justify-between">
                <span className="text-[11px] text-neutral-500 font-mono">Database</span>
                <button 
                  onClick={() => window.scrollTo({ top: 800, behavior: 'smooth' })}
                  className="text-xs font-medium text-purple-400 hover:text-purple-300 flex items-center gap-1 transition-colors"
                >
                  <span>Access</span>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Magazine-Style Editorial SP Members Section */}
      <section className="border-t border-neutral-800/80 bg-neutral-950 py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto space-y-16">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium tracking-widest uppercase bg-red-500/10 text-red-400 border border-red-500/20">
              Directory & Roster
            </span>
            <h2 className="text-3xl md:text-5xl font-light text-white tracking-tight">
              SP Members & Officials
            </h2>
            <p className="text-neutral-400 text-sm md:text-base font-light">
              Meet our dedicated city leaders and representatives driving progress and public welfare in Tanauan City.
            </p>
          </div>

          {/* Featured Presiding Officer (Vice Mayor) Spotlight */}
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden border border-red-500/30 bg-neutral-900 group shadow-2xl grid grid-cols-1 md:grid-cols-12 items-center">
              {/* Background Ambient Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-950/30 via-transparent to-neutral-950/85 pointer-events-none"></div>

              {/* Vice Mayor Photo */}
              <div className="md:col-span-5 relative h-80 md:h-full min-h-[360px] overflow-hidden">
                <img 
                  src={vice_mayor_ablao} 
                  alt="Hon. Wilfredo Dodong Panganiban Ablao" 
                  className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent md:hidden"></div>
              </div>

              {/* Vice Mayor Details */}
              <div className="md:col-span-7 p-8 md:p-12 relative z-10 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-[11px] font-semibold uppercase tracking-wider bg-red-500/20 text-red-400 border border-red-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse"></span>
                  Presiding Officer
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl md:text-3xl font-normal text-white tracking-wide">
                    Hon. Wilfredo "Dodong" Panganiban Ablao
                  </h3>
                  <p className="text-red-400 font-medium text-sm">City Vice Mayor</p>
                </div>

                <p className="text-neutral-300 text-sm font-light leading-relaxed">
                  Leading the Sangguniang Panglungsod with a commitment to transparent governance, progressive legislation, and inclusive community development across all barangays.
                </p>

                <div className="pt-4 border-t border-neutral-800 flex items-center justify-between text-xs text-neutral-400 font-mono">
                  <span>Term: 2025 - Present</span>
                  <span className="text-white">Tanauan City Hall</span>
                </div>
              </div>
            </div>
          </div>

          {/* Magazine Editorial Grid for Councilors & Ex-Officio */}
          <div className="space-y-8">
            <div className="flex items-center justify-between border-b border-neutral-800/80 pb-4">
              <h3 className="text-lg font-medium text-white tracking-wide">City Councilors & Sectoral Representatives</h3>
              <span className="text-xs font-mono text-neutral-500">12 Active Members</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: 'Hon. Tirso Mercado Oruga', role: 'City Councilor', committee: 'Chair, Committee on Rules & Legal Matters', img: coun_oruga },
                { name: 'Hon. Clarence Micosa', role: 'City Councilor', committee: 'Member, Public Works & Infrastructure', img: coun_micosa },
                { name: 'Hon. Potenciano Mendoza Natanauan', role: 'City Councilor', committee: 'Member, Finance & Appropriations', img: coun_natanauan },
                { name: 'Hon. Czylene Marqueses', role: 'City Councilor', committee: 'Chair, Health & Sanitation', img: coun_marqueses },
                { name: 'Hon. Kristel Guelos-Ramilo', role: 'City Councilor', committee: 'Chair, Education & Culture', img: coun_guelos_ramilo },
                { name: 'Hon. Rene \'Eboy\' Pia Alcantara', role: 'City Councilor', committee: 'Chair, Public Safety & Order', img: coun_alcantara },
                { name: 'Hon. Marissa Maranan-Tabing', role: 'City Councilor', committee: 'Chair, Women, Family & Social Services', img: coun_tabing },
                { name: 'Hon. Mario Leus Gonzales', role: 'City Councilor', committee: 'Member, Agriculture & Cooperatives', img: coun_gonzales },
                { name: 'Hon. Lilibeth Arcega', role: 'City Councilor', committee: 'Member, Tourism, Culture & Arts', img: coun_arcega },
                { name: 'Hon. Marcelo Eric Manglo', role: 'City Councilor', committee: 'Chair, Labor, Trade & Industry', img: coun_manglo },
                { name: 'Hon. Ephraigme Bilog', role: 'SK Federation President', committee: 'Sectoral Rep. for Youth & Sports', img: sk_pres_bilog },
                { name: 'Hon. Precious Germaine Agojo', role: 'ABC President', committee: 'President, Association of Barangay Captains', img: abc_pres_agojo },
              ].map((member, idx) => (
                <div 
                  key={idx}
                  className="relative rounded-2xl overflow-hidden group border border-neutral-800/80 bg-neutral-900 aspect-[3/4] flex flex-col justify-end shadow-xl hover:border-neutral-700 transition-all duration-300"
                >
                  {/* Member Background Photo */}
                  <img 
                    src={member.img} 
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Dark Editorial Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/50 to-transparent opacity-90 group-hover:opacity-95 transition-opacity"></div>

                  {/* Content Container with Hover Slide-up Effect */}
                  <div className="relative z-10 p-6 space-y-2 transform group-hover:-translate-y-1 transition-transform duration-300">

                    <h4 className="text-base font-medium text-white tracking-wide leading-snug">
                      {member.name}
                    </h4>

                    <p className="text-neutral-400 text-xs font-light leading-relaxed pt-1 border-t border-neutral-800/80 opacity-90 group-hover:opacity-100 transition-opacity">
                      {member.committee}
                    </p>
                    <span className='italic text-[#7a0000]'>{member.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}