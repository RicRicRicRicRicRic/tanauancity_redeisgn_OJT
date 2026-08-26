import Footer from '../layout/Footer';
import { 
  CheckCircle2, 
  AlertTriangle, 
  MapPin, 
  Clock, 
  Info,
  ChevronRight
} from 'lucide-react';
import educ_header_bg from'../../assets/sections/Home/AnnouncementsES/Kip6.jpg'

export default function TransparencyPage() {
  const newAvailersRequirements = [
    "Family Profile (From Barangay)",
    "1x1 ID picture",
    "Copy of Previous Grades (Year/Sem)",
    "School Registration Form SY 2024-2025 (Original or Certified True Copy)",
    "Certificate of Residency (student)",
    "Voter's Certification (Student, Parent or Guardian)",
    "Photocopy of School ID (2 copies)"
  ];

  const repeatAvailersRequirements = [
    "School Registration Form SY 2024-2025 (If not Original need Certified True copy)",
    "Photocopy of Previous Grades (Year/Sem)",
    "Photocopy of School ID (2 copies)"
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans antialiased">
      
      {/* --- CENTERED HERO SECTION (Full-Bleed Modern Motif) --- */}
      <div className="relative text-white mt-31 pt-36 pb-24 md:pt-14 md:pb-22 overflow-hidden text-center">
        
        {/* Background Image Layer - 100% Clear */}
        <div className="absolute inset-0 z-0">
          <img 
            src={educ_header_bg} 
            alt="Educational Assistance Program" 
            className="w-full h-full object-cover scale-105"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-[#7A1C1C]/90 via-[#501010]/75 to-[#7A1C1C]/95 z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/30 to-black/60 z-0" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 flex flex-col items-center">
          
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/15 text-white border border-white/25 backdrop-blur-md shadow-lg">
            <Info className="w-4 h-4 text-red-200" /> CGT Educational Assistance • 2nd Semester
          </span>
          
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight text-white drop-shadow-md">
            Educational Assistance
          </h1>
          
          <p className="text-lg md:text-xl text-red-100 leading-relaxed max-w-3xl mb-8 drop-shadow">
            Mula sa inisyatibo ni Mayor Sonny Perez Collantes katuwang ang Barangay Affairs Office, narito ang mga sumusunod na requirements at schedule ng pagpapasa para sa ating <strong className="text-white font-semibold">CGT EDUCATIONAL ASSISTANCE - 2nd Semester, School Year 2024-2025</strong>.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="#requirements" 
              className="inline-flex items-center gap-2 bg-white hover:bg-red-50 text-[#7A1C1C] font-semibold px-6 py-3.5 rounded-xl shadow-xl transition-all duration-200"
            >
              View Requirements <ChevronRight className="w-4 h-4" />
            </a>
          </div>

        </div>
      </div>

      {/* --- MAIN CONTENT CONTAINER --- */}
      <main id="requirements" className="max-w-7xl mx-auto px-6 lg:px-8 -mt-12 relative z-20 space-y-12 mb-20">
        
        {/* REQUIREMENTS GRID */}
        <div className="grid grid-cols-1 mt-26 lg:grid-cols-2 gap-8">
          
          {/* New Availers Card */}
          <div className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1">
            <div>
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-100">
                <h2 className="text-xl font-bold text-slate-900 tracking-tight flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-[#7A1C1C]"></span>
                  PARA SA MGA NEW AVAILERS
                </h2>
                <span className="text-xs font-bold uppercase tracking-wider bg-red-50 text-[#7A1C1C] px-3 py-1 rounded-full border border-red-100">
                  First Time
                </span>
              </div>
              <ul className="space-y-4">
                {newAvailersRequirements.map((req, idx) => (
                  <li key={idx} className="flex items-start gap-3.5 text-slate-600 text-sm md:text-base">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-50 text-[#7A1C1C] font-semibold text-xs flex items-center justify-center mt-0.5 border border-red-100">
                      {idx + 1}
                    </span>
                    <span className="leading-snug">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Repeat Availers Card */}
          <div className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1">
            <div>
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-100">
                <h2 className="text-xl font-bold text-slate-900 tracking-tight flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-emerald-600"></span>
                  PARA SA MGA REPEAT AVAILERS
                </h2>
                <span className="text-xs font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full border border-emerald-100">
                  Renewal
                </span>
              </div>
              <ul className="space-y-4">
                {repeatAvailersRequirements.map((req, idx) => (
                  <li key={idx} className="flex items-start gap-3.5 text-slate-600 text-sm md:text-base">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 font-semibold text-xs flex items-center justify-center mt-0.5 border border-emerald-100">
                      {idx + 1}
                    </span>
                    <span className="leading-snug">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* --- MAHALAGANG PAALALA (ALERT BOX) --- */}
        <div className="bg-amber-50/80 border border-amber-200/70 rounded-3xl p-8 md:p-10 shadow-lg shadow-amber-900/5">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-2xl bg-amber-600 text-white flex items-center justify-center shadow-md shadow-amber-600/20">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-amber-950 tracking-tight">MAHALAGANG PAALALA</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-amber-900/90 text-sm md:text-base">
            <div className="bg-white/60 p-5 rounded-2xl border border-amber-200/50 flex flex-col gap-2">
              <span className="font-semibold text-amber-950 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0" /> Kompletong Requirements
              </span>
              <p className="text-slate-600">Ipasa ang TAMA at KUMPLETONG requirements sa itinakdang araw at oras. Wala nang tatanggapin na mga dokumento sa araw ng payout.</p>
            </div>
            <div className="bg-white/60 p-5 rounded-2xl border border-amber-200/50 flex flex-col gap-2">
              <span className="font-semibold text-amber-950 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0" /> No Stub, No Grant Policy
              </span>
              <p className="text-slate-600">Makakatanggap ng BAGONG STUB ang lahat ng nakapagpasa ng requirements sa itinakdang schedule o deadline. Ang Barangay Affairs Office ay hindi magbibigay ng kapalit na nawalang stub.</p>
            </div>
            <div className="bg-white/60 p-5 rounded-2xl border border-amber-200/50 flex flex-col gap-2">
              <span className="font-semibold text-amber-950 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0" /> Takdang Schedule
              </span>
              <p className="text-slate-600">Abangan ang schedule ng pagpasa ng requirements para sa SECOND SEMESTER SY 2024-2025 ng mga mag-aaral ng TANAUAN INSTITUTE at TANAUAN CITY COLLEGE.</p>
            </div>
          </div>
        </div>

        {/* --- CONTACT / MORE INFORMATION BANNER --- */}
        <div className="bg-gradient-to-br from-[#501010] to-[#3a0b0b] text-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">Need More Information?</h3>
            <p className="text-red-100/80 text-sm md:text-base">Para sa karagdagang impormasyon, bisitahin ang official Facebook Page ng Barangay Affairs Office</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {/* Location */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/10 text-white flex items-center justify-center flex-shrink-0 border border-white/20">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">Location</h4>
                <p className="text-red-100/70 text-sm leading-relaxed">Barangay Affairs Office, Tanauan City Hall</p>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm flex items-start gap-4">
              <div>
                <h4 className="font-semibold text-white mb-1">Social Media</h4>
                <a href="#" className="text-red-200 hover:text-white text-sm font-medium transition-colors inline-flex items-center gap-1">
                  Facebook Page <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/10 text-white flex items-center justify-center flex-shrink-0 border border-white/20">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">Office Hours</h4>
                <p className="text-red-100/70 text-sm leading-relaxed">Monday - Friday<br />8:00 AM - 5:00 PM</p>
              </div>
            </div>
          </div>
        </div>

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}