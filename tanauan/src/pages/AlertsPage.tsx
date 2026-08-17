import { useState } from 'react';
import collegeImage from '../assets/sections/AlertsPage/College.png';

export default function App() {
  const [currentPage, setCurrentPage] = useState('alerts'); // 'alerts' or 'details'
  const [copied, setCopied] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-between overflow-x-hidden">
      {currentPage === 'alerts' ? (
        // ================= PAGE 1: ALERTS CENTER =================
        <div className="pt-20 pb-12 px-4 flex-grow">
          <div className="max-w-7xl mx-auto space-y-8">
            
            {/* Header Section */}
            <div className="text-center space-y-2">
              <h1 className="text-3xl md:text-4xl font-black text-gray-950 tracking-tight underline decoration-red-600 decoration-2 underline-offset-8">
                Emergency Alerts Center
              </h1>
              <p className="text-sm text-gray-600">
                Stay informed about important alerts and notifications affecting Tanauan City
              </p>
            </div>

            {/* Main Alerts Card Container */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-start space-x-4">
                <div className="bg-gray-100 p-3 rounded-full text-gray-600 mt-0.5">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-gray-500 font-medium">General Alert</span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-amber-100 text-amber-800">
                      Medium
                    </span>
                  </div>
                  <h3 className="font-bold text-gray-900 text-base md:text-lg">
                    ANNOUNCEMENT | Tanauan City College Applicants' Admission
                  </h3>
                  <p className="text-xs text-gray-400 flex items-center">
                    <svg className="w-3.5 h-3.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Jun 6, 2025, 10:45 AM
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setCurrentPage('details')}
                className="text-red-600 font-semibold text-sm hover:underline inline-flex items-center bg-transparent border-none cursor-pointer p-0 ml-auto md:ml-0"
              >
                Read more <span className="ml-1">&gt;</span>
              </button>
            </div>

            {/* Emergency Contact Information Section */}
            <div className="bg-red-50/50 rounded-2xl p-6 md:p-8 border border-red-100 space-y-6">
              <h2 className="text-xl font-bold text-gray-900">
                Emergency Contact Information
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex items-center space-x-4">
                  <div className="bg-red-50 text-red-600 p-3.5 rounded-full flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm">Police Emergency</h3>
                    <p className="text-gray-600 text-xs font-medium">911 or (043) 728 9800</p>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex items-center space-x-4">
                  <div className="bg-red-50 text-red-600 p-3.5 rounded-full flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm">Medical Emergency</h3>
                    <p className="text-gray-600 text-xs font-medium">(043) 765-4321</p>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex items-center space-x-4">
                  <div className="bg-red-50 text-red-600 p-3.5 rounded-full flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm">Fire Department</h3>
                    <p className="text-gray-600 text-xs font-medium">(043) 987-6543</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Download App Section - Optimized Spacing */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-1 text-center md:text-left">
                <h3 className="font-bold text-gray-900 text-lg">Download the Tanauan Emergency App</h3>
                <p className="text-sm text-gray-600">Get real-time alerts and emergency assistance on your phone</p>
              </div>
              <div className="flex items-center space-x-3.5">
                
                {/* iOS / Apple App Store Button */}
                <a 
                  href="#download-ios" 
                  className="group flex items-center space-x-3 bg-gray-900 hover:bg-black text-white px-5 py-3 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 border border-gray-800"
                >
                  <svg className="w-5 h-5 fill-current flex-shrink-0" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 5.39c.65-.79 1.09-1.89.97-2.99-.94.04-2.08.63-2.73 1.42-.58.68-1.09 1.79-.95 2.86 1.05.08 2.12-.5 2.71-1.29z"/>
                  </svg>
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] uppercase tracking-wider text-gray-400 font-medium leading-none">Download on the</span>
                    <span className="text-sm font-bold tracking-tight text-white leading-tight mt-0.5">App Store</span>
                  </div>
                </a>

                {/* Android / Google Play Store Button */}
                <a 
                  href="#download-android" 
                  className="group flex items-center space-x-3 bg-gray-900 hover:bg-black text-white px-5 py-3 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 border border-gray-800"
                >
                  <svg className="w-5 h-5 fill-current flex-shrink-0 text-emerald-400" viewBox="0 0 24 24">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a1.512 1.512 0 0 1-.36-.614V2.428c0-.25.13-.483.359-.614zM15.207 13.415l1.91 1.91-11.83 6.837a1.492 1.492 0 0 1-.744.195l10.664-8.942zm0-2.83L4.593 1.643c.236.035.485.118.744.264l11.87 6.853-1.91 1.909zm1.758 1.758l2.585 1.493a1.5 1.5 0 0 1 0 2.598l-2.585 1.493-2.046-2.046 2.046-2.038z"/>
                  </svg>
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] uppercase tracking-wider text-gray-400 font-medium leading-none">Get it on</span>
                    <span className="text-sm font-bold tracking-tight text-white leading-tight mt-0.5">Google Play</span>
                  </div>
                </a>

              </div>
            </div>

          </div>
        </div>
      ) : (
        // ================= PAGE 2: READ MORE DETAILS =================
        <div className="pt-20 pb-12 px-4 max-w-7xl mx-auto space-y-6 flex-grow">
          
          {/* Back Button */}
          <button 
            onClick={() => setCurrentPage('alerts')}
            className="inline-flex items-center text-red-600 font-semibold text-sm hover:underline bg-transparent border-none cursor-pointer p-0"
          >
            <span className="mr-1">&larr;</span> Back to News
          </button>

          {/* Article Header & Social Media Icons Integration */}
          <div className="space-y-3">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <span className="bg-red-600 text-white text-xs font-bold px-2.5 py-1 rounded">Latest News</span>
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Jun 6, 2025
                </span>
              </div>

              {/* Social Media Share Icons with Colored Branding */}
              <div className="flex items-center space-x-3">
                {/* Facebook Share Dialog Link */}
                <a 
                  href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Ftanauancity.gov.ph%2Fnews%2F20578" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:opacity-80 transition-opacity p-1"
                  title="Share on Facebook"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>

                {/* Twitter / X Share Link */}
                <a 
                  href="https://twitter.com/intent/tweet?url=https%3A%2F%2Ftanauancity.gov.ph%2Fnews%2F20578&text=ANNOUNCEMENT%20%7C%20Tanauan%20City%20College%20Applicants%27%20Admission" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sky-500 hover:opacity-80 transition-opacity p-1"
                  title="Share on Twitter"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>

                {/* Copy Link Button */}
                <button 
                  onClick={() => {
                    navigator.clipboard.writeText("https://tanauancity.gov.ph/news/20578");
                    setCopied(true);
                    setTimeout(() => setCopied(false), 2000);
                  }}
                  className="text-gray-700 hover:opacity-85 transition-opacity p-1 bg-transparent border-none cursor-pointer relative"
                  title="Copy Link"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                  {copied && (
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] px-2 py-0.5 rounded shadow-md whitespace-nowrap">
                      Link copied!
                    </span>
                  )}
                </button>
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">
              ANNOUNCEMENT | Tanauan City College Applicants' Admission
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Main Content Area */}
            <div className="lg:col-span-2 space-y-6">
              
             {/* College Announcement Image Added Here */}
<div className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden">
  <img 
    src={collegeImage} 
    alt="Tanauan City College Announcement" 
    className="w-full h-auto block"
  />
</div>
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm space-y-6">
                <p className="text-700 leading-relaxed text-sm">
                  Please check your email inbox for important updates and instructions regarding the submission of requirements and the enrollment process. Both the submission of requirements and the enrollment period will officially start on June 9, 2025. We look forward to welcoming our future Iskolars!
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="text-blue-600 text-sm font-medium hover:underline cursor-pointer">#TCCAdmission</span>
                  <span className="text-blue-600 text-sm font-medium hover:underline cursor-pointer">#Enrollment</span>
                  <span className="text-blue-600 text-sm font-medium hover:underline cursor-pointer">#TanauanCityCollege</span>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm flex items-center justify-between">
                <div>
                  <span className="text-xs text-gray-400 uppercase tracking-wider block font-semibold mb-1">Next Article &rarr;</span>
                  <h4 className="font-bold text-gray-900 text-sm">Mabuhay ang mga Bagong kasal!</h4>
                </div>
              </div>

            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-red-900 rounded-2xl p-6 text-white shadow-sm space-y-4">
                <h3 className="font-bold text-lg flex items-center">
                  <span className="mr-2">📰</span> Latest Updates
                </h3>
                <div className="space-y-4 bg-white text-gray-900 rounded-xl p-4">
                  <div className="border-b border-gray-100 pb-3">
                    <span className="font-bold text-xs block text-gray-800 hover:text-red-600 cursor-pointer">Mabuhay ang mga Bagong kasal!</span>
                    <span className="text-[10px] text-gray-400">Jun 11, 2026</span>
                  </div>
                  <div className="border-b border-gray-100 pb-3">
                    <span className="font-bold text-xs block text-gray-800 hover:text-red-600 cursor-pointer">Local AICS para sa mga Tanaueño at Senior Citizens...</span>
                    <span className="text-[10px] text-gray-400">Jun 11, 2026</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 rounded-2xl p-5 text-white shadow-sm flex items-center justify-between cursor-pointer hover:bg-gray-800 transition-colors" onClick={() => setCurrentPage('alerts')}>
                <div>
                  <h4 className="font-bold text-sm tracking-wide">Back to Homepage</h4>
                  <p className="text-xs text-gray-400">Return to main site</p>
                </div>
                <div className="bg-gray-800 p-2 rounded-full">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

            </div>

          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-6 px-4 text-center text-xs border-t border-gray-800 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p>City Government of Tanauan, Batangas, Philippines</p>
          <p>&copy; {new Date().getFullYear()} All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}