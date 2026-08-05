import { 
  FolderKanban, 
  Database, 
  QrCode, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Users, 
  HeartHandshake,
  ExternalLink
} from 'lucide-react';

// Imports relative to component path
import gadQrCode from '../../assets/sections/gad-qr/gad-qr.png';
import gadLogo from '../../assets/sections/gadlogo/gadtanauanlogo.webp';

export default function GadTanauan() {
  return (
    <div className="w-full h-[768px] min-h-[768px] bg-gradient-to-b from-slate-900 via-slate-800/95 to-slate-900 text-slate-100 relative overflow-hidden font-sans flex flex-col justify-between selection:bg-purple-600 selection:text-white">
      
      {/* Lightened Ambient Background Glows */}
      <div className="absolute top-1/4 right-10 w-[450px] h-[450px] bg-purple-600/25 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-indigo-600/18 rounded-full blur-[140px] pointer-events-none" />
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0c_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0c_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      {/* Main Full-Page Layout Container */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-6 lg:py-8 flex-1 flex flex-col justify-center mt-[15px]">
        
        {/* Top Tag Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/90 border border-slate-600/60 text-purple-300 text-xs font-semibold w-fit mb-6 shadow-sm backdrop-blur-xl">
          <Sparkles className="w-3.5 h-3.5 text-purple-400 shrink-0" />
          <span>Official Public Services Portal • City Government of Tanauan</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Hero Section: Headline & Description */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Header Title */}
            <div>
              <p className="text-purple-300/90 font-bold tracking-widest uppercase text-xs mb-1 flex items-center gap-2">
                <span className="w-6 h-[2px] bg-purple-400 inline-block"></span>
                Republic of the Philippines
              </p>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">
                <span className="text-slate-100">Gender & </span> <br />
                <span className="text-white drop-shadow-[0_0_30px_rgba(168,85,247,0.4)] bg-gradient-to-r from-white via-slate-100 to-purple-200 bg-clip-text text-transparent">
                  Development
                </span>
              </h1>
            </div>

            {/* Description Paragraph */}
            <p className="text-sm sm:text-base text-slate-200 font-normal leading-relaxed max-w-xl mt-4">
              Promoting gender equality and women's empowerment through comprehensive programs, policies, and initiatives that ensure inclusive development in Tanauan City.
            </p>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-3 gap-3 mt-6 pt-2">
              <div className="p-3 rounded-2xl bg-white/[0.05] border border-white/15 backdrop-blur-md transition-all duration-300 hover:border-purple-400/50 hover:bg-white/[0.08] group">
                <Users className="w-5 h-5 text-purple-300 mb-1 shrink-0 group-hover:scale-110 transition-transform" />
                <p className="text-xs font-semibold text-slate-100">Inclusive Community</p>
              </div>
              <div className="p-3 rounded-2xl bg-white/[0.05] border border-white/15 backdrop-blur-md transition-all duration-300 hover:border-blue-400/50 hover:bg-white/[0.08] group">
                <ShieldCheck className="w-5 h-5 text-blue-300 mb-1 shrink-0 group-hover:scale-110 transition-transform" />
                <p className="text-xs font-semibold text-slate-100">Policy Support</p>
              </div>
              <div className="p-3 rounded-2xl bg-white/[0.05] border border-white/15 backdrop-blur-md transition-all duration-300 hover:border-fuchsia-400/50 hover:bg-white/[0.08] group">
                <HeartHandshake className="w-5 h-5 text-fuchsia-300 mb-1 shrink-0 group-hover:scale-110 transition-transform" />
                <p className="text-xs font-semibold text-slate-100">Empowerment</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mt-8 pt-2">
              
              <a 
                href="https://gad.tanauancity.gov.ph/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-sm font-bold shadow-lg shadow-blue-900/30 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto text-center"
              >
                <FolderKanban className="w-4 h-4 shrink-0" />
                <span>Explore GAD Programs</span>
              </a>

              <a 
                href="https://gad.tanauancity.gov.ph/Database"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-bold border border-white/20 backdrop-blur-md shadow-md transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] group w-full sm:w-auto text-center"
              >
                <Database className="w-4 h-4 text-purple-300 shrink-0" />
                <span>View Database</span>
                <ArrowRight className="w-3.5 h-3.5 text-purple-300 transition-transform group-hover:translate-x-1 shrink-0" />
              </a>

            </div>
          </div>

          {/* Right Hero Section: Centered Glassmorphism Cards */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center gap-5 w-full">
            
            {/* Lightened GAD Office Badge */}
            <div className="w-full max-w-sm rounded-2xl p-5 bg-slate-900/80 border border-slate-600/60 backdrop-blur-2xl shadow-xl relative group hover:border-purple-400/50 transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-white p-1.5 shadow-md group-hover:scale-105 transition-transform duration-300 shrink-0 flex items-center justify-center">
                  <img 
                    src={gadLogo} 
                    alt="Tanauan GAD Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-black text-white tracking-tight">GAD Office</h3>
                  <p className="text-xs text-purple-200">Gender & Development Office</p>
                  
                  {/* Live Status Badge */}
                  <span className="inline-flex items-center gap-1.5 mt-2 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    ACTIVE SYSTEM
                  </span>
                </div>
              </div>
            </div>

            {/* Glowing Interactive QR Code Card */}
            <a 
              href="https://gad.tanauancity.gov.ph/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full max-w-sm rounded-2xl p-5 bg-white/95 border border-white/20 shadow-2xl flex flex-col items-center text-center relative group hover:scale-[1.02] hover:shadow-purple-950/20 transition-all duration-300 block text-slate-900"
            >
              <div className="flex items-center gap-2 text-purple-900 text-xs font-black tracking-wider uppercase w-full">
                <QrCode className="w-4 h-4 text-purple-700" />
                <span>Scan or Click QR Code</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-purple-700 transition-colors ml-auto" />
              </div>
              
              {/* Custom QR Image Wrapper - Balanced Vertical Margins */}
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 shadow-inner group-hover:scale-105 transition-transform duration-300 mt-3 mb-2">
                <img 
                  src={gadQrCode} 
                  alt="GAD Portal QR Code" 
                  className="w-32 h-32 object-contain"
                />
              </div>

              {/* Refined Footer Helper Text Spacing */}
              <p className="text-xs text-slate-600 font-semibold mt-2 group-hover:text-purple-900 transition-colors flex items-center justify-center gap-1.5">
                <span>Click to open direct GAD Portal</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </p>
            </a>

          </div>
        </div>
      </main>

      {/* Footer Accent */}
      <footer className="relative z-10 border-t border-slate-700/60 py-3 px-6 text-center text-xs text-slate-300 font-medium bg-slate-900/80 backdrop-blur-md">
        <p>© {new Date().getFullYear()} City Government of Tanauan. All Rights Reserved.</p>
      </footer>
    </div>
  );
}