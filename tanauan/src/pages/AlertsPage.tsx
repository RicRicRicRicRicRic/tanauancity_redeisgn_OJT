import { useState } from 'react';
import Footer from '../components/layout/Footer.tsx';
import collegeImage from '../assets/sections/AlertsPage/College.png';
import kasalImage from '../assets/sections/AlertsPage/Kasal.png';
import seniorcitizenImage from '../assets/sections/AlertsPage/SeniorCitizen.png';
import medicalImage from '../assets/sections/AlertsPage/Medical.png';
import eyeCheckUpImage from '../assets/sections/AlertsPage/EyeCheckUp.png';
import oathakingImage from '../assets/sections/AlertsPage/Oathtaking.png';

interface Article {
  title: string;
  date: string;
  image: string | null;
  content: string;
  tags: string[];
  prevArticle: { id: string; title: string; };
  nextArticle: { id: string; title: string; };
}

export default function App() {
  const [currentPage, setCurrentPage] = useState('alerts');
  const [selectedArticleId, setSelectedArticleId] = useState<keyof typeof articlesData>('tcc');
  const [copied, setCopied] = useState(false);

  const articlesData: Record<string, Article> = {
    tcc: {
      title: "ANNOUNCEMENT | Tanauan City College Applicants' Admission",
      date: "Jun 6, 2025",
      image: collegeImage,
      content: "Please check your email inbox for important updates and instructions regarding the submission of requirements and the enrollment process. Both the submission of requirements and the enrollment period will officially start on June 9, 2025. We look forward to welcoming our future Iskolars!",
      tags: ["#TCCAdmission", "#Enrollment", "#TanauanCityCollege"],
      prevArticle: { id: 'oathtaking', title: "Oathtaking ng mga Newly-hired at Promoted na mga Guro..." },
      nextArticle: { id: 'kasal', title: "Mabuhay ang mga Bagong kasal!" }
    },
    kasal: {
      title: "Mabuhay ang mga Bagong kasal!",
      date: "Jun 11, 2026",
      image: kasalImage, 
      content: "Matagumpay at masayang pinasinayaan ng ating Punong Lungsod Sonny Perez Collantes ang pag-iisang dibdib ng ating mga kababayan ngayong Huwebes, ika-11 ng Hunyo katuwang ang Local Civil Registry Office sa pamumuno ni Mr. Dante de Sagun.\n\nSa ating mga bagong kasal, nawa'y mahalin, igalang at magkasama ninyong balikatin ang buhay sa piling ng isa't isa! Hangad namin ang tagumpay ng inyong buhay mag-asawa!\n\nSa ngalan ng mga bumubuo ng Pamahalaan ng Lungsod Tanauan, Congratulations at Best Wishes sa inyong lahat!",
      tags: ["#CivilWedding", "#CityGovermentOfTanauan", "#TanauanCityBatangas"],
      prevArticle: { id: 'tcc', title: "ANNOUNCEMENT | Tanauan City College Applicants' Admission" },
      nextArticle: { id: 'aics', title: "Local AICS para sa mga Tanaueño at Senior Citizens..." }
    },
    aics: {
      title: "Local AICS para sa mga Tanaueño at Senior Citizens' Cash Incentives, sabayang ipinamahagi ng Tanauan LGU!",
      date: "Jun 11, 2026",
      image: seniorcitizenImage, 
      content: `Mula sa regular na implementasyon ng Local AICS sa Lungsod, mas dumami pa ang mga Tanaueñong natulungan nina Mayor Sonny Perez Collantes at Vice Mayor Dodong Panganiban Ablao sa aspeto ng medical, mortuary at hospitalization assistance katuwang ang Tanauan Local Social Welfare and Development at City Treasury Office sa pamumuno ni Mr. Fernando Manzanero.

Habang alinsunod sa paghahatid ng iba't ibang benepisyo para sa mga senior citizens, nagpaabot din ng cash incentives para sa mga Tanaueñong edad 85 pataas ang Tanauan LGU katuwang ang OSCA Tanauan sa pamumuno ni Mr. Leonardo Mercado.

Kaisa rin sa nagpaabot ng suporta sa programang ito ay sina Councilor Tirso Mercado Oruga, Konsehal Potenciano “Sonny” M. Natanauan, COUNCILOR CZYLENE T. MARQUESES, Councilor Lilibeth M. Arcega at ABC President Precious Germaine M. Agojo na katuwang ng lokal na pamahalaan sa paghahatid ng dekalidad na serbisyong publiko para sa mga Tanaueño.

📌

Samantala, sa mga nais mag-apply sa Local AICS ng Pamahalaang Lungsod ng Tanauan, maaaring magtungo sa Tanggapan ng Tanauan CSWD tuwing Huwebes, 8:00 am hanggang 5:00 pm.`,
      tags: ["#CityGovernmentOfTanauan", "#TanauanCityBatangas"],
      prevArticle: { id: 'kasal', title: "Mabuhay ang mga Bagong kasal!" },
      nextArticle: { id: 'medical', title: "Ngayon sa Tanauan, agarang natutugunan ang pangangailangang medikal..." }
    },
    medical: {
      title: "Ngayon sa Tanauan, agarang natutugunan ang pangangailangang medikal ng ating mga kababayan!",
      date: "Jun 11, 2026",
      image: medicalImage, 
      content: `Twing Huwebes, hindi matatawaran ang dami ng mga Tanaueñong lumalapit sa Tanggapan ng mga Mamamayan para humingi ng tulong medikal kabilang na ang medical assistance, hospitalization, mortuary assistance at maintenance medications.
Walang pinahihindian – bawat lumalapit ay tinatanggap, pinakikinggan, at agad na tinutulungan.

Ngayong araw, personal na kinamusta ni Mayor Sonny Perez Collantes kasama sina Kon. Clarence Pamplona Micosa, COUNCILOR CZYLENE T. MARQUESES at Councilor Rene "Eboy" Pia Alcantara ang ating mga kababayan lumalapit.
Tinitiyak niya na ang lahat ng tulong na inilapit ay agad ding maipo-proseso at maipapamahagi upang hindi naaantala ang pagbibigay ng suporta para pangalagaan ang kalusugan ng bawat Tanaueño.

#CityGovernmentOfTanauan
#TanauanCityBatangas`,
      tags: ["#CityGovernmentOfTanauan", "#TanauanCityBatangas"],
      prevArticle: { id: 'aics', title: "Local AICS para sa mga Tanaueño at Senior Citizens..." },
      nextArticle: { id: 'eyeCheckUp', title: "Free Eye Check-up Medical Mission, muling inihatid para sa mga Tanaueño!" }
    },
    eyeCheckUp: {
      title: "Free Eye Check-up Medical Mission, muling inihatid para sa mga Tanaueño!",
      date: "Jun 11, 2026",
      image: eyeCheckUpImage,
      content: `Patuloy ang pagpapaitging ng serbisyong pangkalusugan ng Pamahalaang Lungsod ng Tanauan sa pamamagitan ng isinasagawa muling libreng Eye Check-Up Medical Mission para sa mga kababayang may katarata at iba pang karamdaman sa mata tulad ng pterygium o pugita sa mata.

Isinagawa ang nasabing medical mission sa pangunguna nina Mayor Sonny Perez Collantes, Vice Mayor Dodong Panganiban Ablao, at Cong. Atty. King Collantes upang maghatid ng serbisyong pangkalusugan para sa mga Tanaueño.

Layunin ng programang ito na mabigyan ng agarang atensyong medikal ang mga residente na may problema sa paningin sa pamamagitan ng libreng konsultasyon, screening, at, kung kinakailangan, libreng operasyon.

Bukod dito, nakatanggap din ang mga benepisyaryo ng libreng gamot upang matiyak ang kanilang tuloy-tuloy na paggaling at pangangalaga sa mata.

Kaisa rin upang maisakatuparan ang paghahatid ng dekalidad na serbisyong medikal para sa mga Tanaueño sina Kon. Clarence Pamplona Micosa, COUNCILOR CZYLENE T. MARQUESES, Councilor Rene "Eboy" Pia Alcantara at Kon. Macky Leus Gonzales.

#CityGovernmentOfTanauan
#TanauanCityBatangas`,
      tags: ["#CityGovernmentOfTanauan", "#TanauanCityBatangas"],
      prevArticle: { id: 'medical', title: "Ngayon sa Tanauan, agarang natutugunan ang pangangailangang medikal..." },
      nextArticle: { id: 'oathtaking', title: "Oathtaking ng mga Newly-hired at Promoted na mga Guro..." }
    },
    oathtaking: {
      title: "Oathtaking ng mga Newly-hired at Promoted na mga Guro, pinangunahan ni Mayor Sonny Perez Collantes!",
      date: "Jun 10, 2026",
      image: oathakingImage,
      content: `Sa pangunguna ni Mayor Sonny Perez Collantes ay pormal nang nanumpa sa kanilang katungkulan ang mga newly-hired at promoted na guro mula sa pampublikong paaralan sa Lungsod ng Tanauan kung saan nagsilbing saksi ang mga miyembro ng Sangguniang Panlungsod na sina Councilor Tirso Mercado Oruga, Kon. Clarence Pamplona Micosa, Councilor Lilibeth M. Arcega, ABC President Precious Germaine M. Agojo, at SK Federation President Ephraigme F. Bilog.

Ang mga nasabing guro ay kasalukuyan nang naka-deploy at katuwang ng Lokal na Pamahalaan at DepEd Tayo – DepEd Tanauan City sa mga pampublikong paaralan upang masiguradong nabibigyan ng kaukulang kaalaman at kasanayan ang ating mga mag-aaral na Tanaueño.

Kasabay nito ay taos pusong nagpasalamat din ang ating Punong Lungsod dahil sa kanilang dedikasyon at pakikipagtulungan upang masigurong dekalidad ang edukasyon ng bawat Kabataang Tanaueño.

#CityGovernmentOfTanauan
#TanauanCityBatangas`,
      tags: ["#CityGovernmentOfTanauan", "#TanauanCityBatangas"],
      prevArticle: { id: 'eyeCheckUp', title: "Free Eye Check-up Medical Mission, muling inihatid para sa mga Tanaueño!" },
      nextArticle: { id: 'tcc', title: "ANNOUNCEMENT | Tanauan City College Applicants' Admission" }
    }
  };

  const currentArticle = articlesData[selectedArticleId];

  return (
    <div className="min-h-screen bg-[#FAFAFA] flex flex-col justify-between overflow-x-hidden font-sans text-slate-800">
      {currentPage === 'alerts' ? (
        <div className="pt-20 pb-20 px-4 md:px-8 flex-grow">
          <div className="max-w-7xl mx-auto space-y-12">
            
            {/* Header Section */}
            <div className="relative text-center space-y-4 max-w-3xl mx-auto pt-6">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-32 bg-red-100/40 blur-[90px] rounded-full pointer-events-none"></div>
              
              <div className="inline-flex items-center space-x-2.5 px-3.5 py-1 rounded-full bg-red-50 text-red-600 text-[11px] font-semibold tracking-wider uppercase border border-red-100">
                <span>Tanauan Command & Information Center</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                Public Safety & <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-rose-600">Live Alerts</span>
              </h1>
              <p className="text-sm md:text-base text-slate-500 font-normal max-w-xl mx-auto leading-relaxed">
                Your direct channel for real-time announcements, verified community bulletins, and round-the-clock emergency directories.
              </p>
            </div>

            {/* Bento-Grid Upper Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              
              {/* Left Column: Featured Hero Alert Card (Span 7) */}
              <div className="lg:col-span-7 bg-white rounded-3xl shadow-sm border border-slate-100 p-8 md:p-10 flex flex-col justify-between relative overflow-hidden group hover:border-red-100 transition-all duration-300">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-red-50/50 to-transparent rounded-full blur-2xl -z-0"></div>
                
                <div className="relative z-10 space-y-6">
                  <div className="flex items-center justify-between flex-wrap gap-3">
                    <div className="flex items-center space-x-2">
                      <span className="bg-red-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-lg uppercase tracking-wider">Top Priority</span>
                      <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-100">
                        ⚡ Active Notice
                      </span>
                    </div>
                    <span className="text-xs text-slate-400 font-medium flex items-center bg-slate-50 px-2.5 py-1 rounded-lg border border-slate-100">
                      <svg className="w-3.5 h-3.5 mr-1.5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      Jun 6, 2025
                    </span>
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-bold text-slate-900 text-xl md:text-2xl leading-snug group-hover:text-red-600 transition-colors">
                      ANNOUNCEMENT | Tanauan City College Applicants' Admission
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 font-normal">
                      Please check your email inbox for important updates and instructions regarding the submission of requirements and the enrollment process. Both the submission of requirements and the enrollment period will officially start on June 9, 2025.
                    </p>
                  </div>
                </div>

                <div className="pt-6 relative z-10 flex items-center justify-between border-t border-slate-50 mt-8">
                  <span className="text-xs font-semibold text-slate-400">Tanauan City College</span>
                  
                  <button 
                    onClick={() => {
                      setSelectedArticleId('tcc');
                      setCurrentPage('details');
                    }}
                    className="group/btn relative inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-white text-red-600 hover:bg-red-600 hover:text-white font-bold text-xs tracking-wide shadow-sm hover:shadow transition-all duration-200 cursor-pointer border border-red-200"
                  >
                    <span>Read Full Story</span>
                    <svg className="w-3.5 h-3.5 ml-1.5 group-hover/btn:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Right Column: Emergency Directory Card (Span 5) */}
              <div className="lg:col-span-5 bg-white rounded-3xl shadow-sm border border-slate-100 p-8 flex flex-col justify-between relative overflow-hidden">
                <div className="space-y-6 relative z-10">
                  <div className="flex items-center justify-between">
                    <h2 className="text-base font-bold tracking-tight text-slate-900 flex items-center space-x-2">
                      <span className="w-2 h-2 rounded-full bg-red-600"></span>
                      <span>Emergency Hotlines</span>
                    </h2>
                    <span className="text-[10px] bg-red-50 text-red-600 border border-red-100 px-2.5 py-0.5 rounded-lg font-bold">
                      24/7 Active
                    </span>
                  </div>

                  <div className="space-y-3">
                    <div className="bg-slate-50/60 hover:bg-red-50/30 border border-slate-100 hover:border-red-100 p-3.5 rounded-2xl transition-all flex items-center justify-between group">
                      <div className="flex items-center space-x-3">
                        <div className="bg-white text-red-600 p-2.5 rounded-xl shadow-xs border border-slate-100">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-semibold text-[11px] text-slate-400 uppercase tracking-wide">Police Emergency</h3>
                          <p className="text-slate-900 text-xs font-bold">911 / (043) 728-9800</p>
                        </div>
                      </div>
                      <a href="tel:911" className="text-[11px] bg-white text-red-600 border border-red-200 hover:bg-red-600 hover:text-white font-bold px-3 py-1.5 rounded-lg transition-all shadow-xs">
                        Call
                      </a>
                    </div>

                    <div className="bg-slate-50/60 hover:bg-red-50/30 border border-slate-100 hover:border-red-100 p-3.5 rounded-2xl transition-all flex items-center justify-between group">
                      <div className="flex items-center space-x-3">
                        <div className="bg-white text-red-600 p-2.5 rounded-xl shadow-xs border border-slate-100">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-semibold text-[11px] text-slate-400 uppercase tracking-wide">Medical Services</h3>
                          <p className="text-slate-900 text-xs font-bold">(043) 765-4321</p>
                        </div>
                      </div>
                      <a href="tel:0437654321" className="text-[11px] bg-white text-red-600 border border-red-200 hover:bg-red-600 hover:text-white font-bold px-3 py-1.5 rounded-lg transition-all shadow-xs">
                        Call
                      </a>
                    </div>

                    <div className="bg-slate-50/60 hover:bg-red-50/30 border border-slate-100 hover:border-red-100 p-3.5 rounded-2xl transition-all flex items-center justify-between group">
                      <div className="flex items-center space-x-3">
                        <div className="bg-white text-red-600 p-2.5 rounded-xl shadow-xs border border-slate-100">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-semibold text-[11px] text-slate-400 uppercase tracking-wide">Fire Department</h3>
                          <p className="text-slate-900 text-xs font-bold">(043) 987-6543</p>
                        </div>
                      </div>
                      <a href="tel:0439876543" className="text-[11px] bg-white text-red-600 border border-red-200 hover:bg-red-600 hover:text-white font-bold px-3 py-1.5 rounded-lg transition-all shadow-xs">
                        Call
                      </a>
                    </div>
                  </div>
                </div>

              </div>

            </div>

            {/* Mobile Companion Promo Banner */}
            <div className="bg-white text-slate-900 rounded-3xl shadow-sm border border-slate-100 p-8 md:p-10 flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
              <div className="space-y-2 text-center lg:text-left max-w-lg relative z-10">
                <span className="text-[11px] font-bold text-red-600 uppercase tracking-wider bg-red-50 px-2.5 py-1 rounded-md border border-red-100">Mobile Companion</span>
                <h3 className="font-bold text-xl md:text-2xl tracking-tight text-slate-900">Download the Tanauan Emergency App</h3>
                <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-normal">Get lightning-fast real-time push alerts, community safety updates, and instant emergency routing right on your phone.</p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 relative z-10">
                <a 
                  href="https://apps.apple.com/ph/app/tanauan-ews/id6770605709" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center space-x-2.5 bg-slate-900 hover:bg-slate-800 text-white px-5 py-3 rounded-2xl transition-all shadow-sm"
                >
                  <svg className="w-5 h-5 fill-current flex-shrink-0" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 5.39c.65-.79 1.09-1.89.97-2.99-.94.04-2.08.63-2.73 1.42-.58.68-1.09 1.79-.95 2.86 1.05.08 2.12-.5 2.71-1.29z"/>
                  </svg>
                  <div className="flex flex-col text-left">
                    <span className="text-[9px] uppercase tracking-wider opacity-60 font-semibold leading-none">Download on the</span>
                    <span className="text-xs font-bold tracking-tight leading-tight mt-0.5">App Store</span>
                  </div>
                </a>

                <a 
                  href="https://play.google.com/store/search?q=Tanauan%20EWS&c=apps" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center space-x-2.5 bg-slate-900 hover:bg-slate-800 text-white px-5 py-3 rounded-2xl transition-all shadow-sm"
                >
                  <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24">
                    <path fill="#EA4335" d="M3.609 1.814L13.792 12 3.61 22.186a1.512 1.512 0 0 1-.36-.614V2.428c0-.25.13-.483.359-.614z"/>
                    <path fill="#FBBC04" d="M17.165 15.324l-3.373-3.324L3.609 1.814c.26-.148.56-.233.882-.233.35 0 .684.099.978.272l11.696 13.471z"/>
                    <path fill="#34A853" d="M17.165 8.676L5.469 2.148A1.854 1.854 0 0 0 4.491 1.9c-.322 0-.622.085-.882.233l10.556 10.557 3.001-3.014z"/>
                    <path fill="#4285F4" d="M17.165 15.324L6.52 23.992c.26.148.56.233.882.233.35 0 .684-.099.978-.272l11.696-13.471-2.911-1.478z"/>
                  </svg>
                  <div className="flex flex-col text-left">
                    <span className="text-[9px] uppercase tracking-wider opacity-60 font-semibold leading-none">Get it on</span>
                    <span className="text-xs font-bold tracking-tight leading-tight mt-0.5">Google Play</span>
                  </div>
                </a>
              </div>
            </div>

          </div>
        </div>
      ) : (
        <div className="pt-28 pb-16 px-4 md:px-8 max-w-7xl mx-auto space-y-8 flex-grow">
          <button 
            onClick={() => setCurrentPage('alerts')}
            className="group inline-flex items-center space-x-2 text-red-600 font-bold text-xs uppercase tracking-wider hover:text-white bg-white hover:bg-red-600 px-4 py-2 rounded-xl border border-red-200 shadow-xs transition-all cursor-pointer"
          >
            <span className="group-hover:-translate-x-0.5 transition-transform">&larr;</span> 
            <span>Back to Alerts Center</span>
          </button>

          <div className="space-y-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center space-x-3 text-sm text-slate-500">
                <span className="bg-red-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-lg uppercase tracking-wider">Verified Post</span>
                <span className="flex items-center font-semibold text-xs bg-white px-2.5 py-1 rounded-lg border border-slate-100">
                  <svg className="w-3.5 h-3.5 mr-1 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {currentArticle.date}
                </span>
              </div>

              <div className="flex items-center space-x-2">
                <a 
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://tanauancity.gov.ph')}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white p-2.5 rounded-xl border border-slate-100 text-blue-600 hover:bg-slate-50 transition-colors shadow-xs"
                  title="Share on Facebook"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>

                <a 
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent('https://tanauancity.gov.ph')}&text=${encodeURIComponent(currentArticle.title)}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white p-2.5 rounded-xl border border-slate-100 text-slate-900 hover:bg-slate-50 transition-colors shadow-xs"
                  title="Share on X (Twitter)"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>

                <button 
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.href);
                    setCopied(true);
                    setTimeout(() => setCopied(false), 2000);
                  }}
                  className="bg-white px-3.5 py-2.5 rounded-xl border border-slate-100 text-slate-700 hover:bg-slate-50 transition-colors shadow-xs text-xs font-bold relative flex items-center space-x-1.5 cursor-pointer"
                  title="Copy Link"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                  <span>Share</span>
                  {copied && (
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] px-2 py-0.5 rounded-md shadow-md whitespace-nowrap font-medium">
                      Link copied!
                    </span>
                  )}
                </button>
              </div>
            </div>

            <h1 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
              {currentArticle.title}
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2 space-y-6">
              {currentArticle.image ? (
                <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden flex justify-center items-center p-4">
                  <img 
                    src={currentArticle.image} 
                    alt={currentArticle.title} 
                    className="w-full h-auto block object-contain rounded-2xl"
                  />
                </div>
              ) : null}
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-3xl p-6 shadow-sm space-y-4 border border-slate-100">
                <h3 className="font-bold text-xs uppercase tracking-wider text-slate-400 flex items-center justify-between">
                  <span>📰 Recent Feeds</span>
                  <span className="text-[10px] bg-red-50 text-red-600 px-2 py-0.5 rounded-md font-bold border border-red-100">Live</span>
                </h3>
                <div className="space-y-2 bg-slate-50/50 rounded-2xl p-2.5 max-h-[420px] overflow-y-auto border border-slate-100">
                  {Object.entries(articlesData).map(([id, article]) => (
                    <div 
                      key={id}
                      onClick={() => setSelectedArticleId(id)}
                      className={`cursor-pointer transition-all p-3 rounded-2xl border ${selectedArticleId === id ? 'bg-red-50/60 border-red-100 text-red-900 font-bold shadow-xs' : 'border-transparent hover:bg-white text-slate-500 font-medium bg-transparent'}`}
                    >
                      <span className="text-xs block leading-snug">{article.title}</span>
                      <span className="text-[10px] text-slate-400 mt-1 block">{article.date}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Article Body */}
          <div className="bg-white rounded-3xl p-8 md:p-10 border border-slate-100 shadow-sm space-y-6">
            <p className="text-slate-600 leading-relaxed text-sm md:text-base whitespace-pre-line font-normal">
              {currentArticle.content}
            </p>

            <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-50">
              {currentArticle.tags.map((tag: string, idx: number) => (
                <span key={idx} className="bg-slate-50 text-slate-600 hover:text-red-600 text-xs font-semibold px-3.5 py-1.5 rounded-xl transition-colors cursor-pointer border border-slate-100">{tag}</span>
              ))}
            </div>
          </div>

          {/* Minimal Navigation Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div 
              onClick={() => setCurrentPage('alerts')}
              className="group bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:border-red-200 transition-all cursor-pointer flex items-center justify-center space-x-2.5"
            >
              <svg className="w-4 h-4 text-slate-400 group-hover:text-red-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span className="font-bold text-slate-700 text-xs group-hover:text-red-600 transition-colors">Main Portal</span>
            </div>

            <div 
              onClick={() => setSelectedArticleId(currentArticle.prevArticle.id)}
              className="group bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:border-red-200 transition-all cursor-pointer flex items-center justify-center space-x-2.5"
            >
              <svg className="w-4 h-4 text-slate-400 group-hover:text-red-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
              </svg>
              <span className="font-bold text-slate-700 text-xs group-hover:text-red-600 transition-colors">Previous Article</span>
            </div>

            <div 
              onClick={() => setSelectedArticleId(currentArticle.nextArticle.id)}
              className="group bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:border-red-200 transition-all cursor-pointer flex items-center justify-center space-x-2.5"
            >
              <span className="font-bold text-slate-700 text-xs group-hover:text-red-600 transition-colors">Next Article</span>
              <svg className="w-4 h-4 text-slate-400 group-hover:text-red-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}