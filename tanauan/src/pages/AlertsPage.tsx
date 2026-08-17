import { useState } from 'react';
import Footer from '../components/layout/Footer.tsx'
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
    <div className="min-h-screen bg-gray-50 flex flex-col justify-between overflow-x-hidden">
      {currentPage === 'alerts' ? (
        <div className="pt-20 pb-12 px-4 flex-grow">
          <div className="max-w-7xl mx-auto space-y-8">
            <div className="text-center space-y-2">
              <h1 className="text-3xl md:text-4xl font-black text-gray-950 tracking-tight underline decoration-red-600 decoration-2 underline-offset-8">
                Emergency Alerts Center
              </h1>
              <p className="text-sm text-gray-600">
                Stay informed about important alerts and notifications affecting Tanauan City
              </p>
            </div>

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
                onClick={() => {
                  setSelectedArticleId('tcc');
                  setCurrentPage('details');
                }}
                className="text-red-600 font-semibold text-sm hover:underline inline-flex items-center bg-transparent border-none cursor-pointer p-0 ml-auto md:ml-0"
              >
                Read more <span className="ml-1">&gt;</span>
              </button>
            </div>

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

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-1 text-center md:text-left">
                <h3 className="font-bold text-gray-900 text-lg">Download the Tanauan Emergency App</h3>
                <p className="text-sm text-gray-600">Get real-time alerts and emergency assistance on your phone</p>
              </div>
              <div className="flex items-center space-x-3.5">
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
        <div className="pt-28 pb-12 px-4 max-w-7xl mx-auto space-y-6 flex-grow">
          <button 
            onClick={() => setCurrentPage('alerts')}
            className="inline-flex items-center text-red-600 font-semibold text-sm hover:underline bg-transparent border-none cursor-pointer p-0"
          >
            <span className="mr-1">&larr;</span> Back to News
          </button>

          <div className="space-y-3">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <span className="bg-red-600 text-white text-xs font-bold px-2.5 py-1 rounded">Latest News</span>
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {currentArticle.date}
                </span>
              </div>

              <div className="flex items-center space-x-3">
                {/* Facebook Share Channel Link */}
                <a 
  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://tanauancity.gov.ph')}`}
  target="_blank" 
  rel="noopener noreferrer"
  className="text-blue-600 hover:opacity-80 transition-opacity p-1"
  title="Share on Facebook"
>
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
</a>
                <a 
  href={`https://twitter.com/intent/post?text=${encodeURIComponent(currentArticle.title + ' https://tanauancity.gov.ph')}`}
  target="_blank" 
  rel="noopener noreferrer"
  className="text-sky-500 hover:opacity-80 transition-opacity p-1"
  title="Share on Twitter"
>
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
</a>
                <button 
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.href);
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
              {currentArticle.title}
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              {currentArticle.image ? (
                <div className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden">
                  <img 
                    src={currentArticle.image} 
                    alt={currentArticle.title} 
                    className="w-full h-auto block"
                  />
                </div>
              ) : (
                <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-2xl h-80 flex flex-col items-center justify-center text-center p-6 shadow-inner">
                  <svg className="w-12 h-12 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-sm font-semibold text-gray-600">Image Placeholder</p>
                  <p className="text-xs text-gray-400 mt-1">Replace this block or pass your image asset here</p>
                </div>
              )}

              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm space-y-6">
                <p className="text-gray-700 leading-relaxed text-sm whitespace-pre-line">
                  {currentArticle.content}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {currentArticle.tags.map((tag: string, idx: number) => (
                    <span key={idx} className="text-blue-600 text-sm font-medium hover:underline cursor-pointer">{tag}</span>
                  ))}
                </div>
              </div>

              {/* Previous / Next Navigation */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div 
                  onClick={() => setSelectedArticleId(currentArticle.prevArticle.id)}
                  className="group bg-white rounded-2xl p-5 border border-gray-200/80 shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-200 cursor-pointer flex items-center space-x-4"
                >
                  <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-red-50 group-hover:text-red-600 transition-colors flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-[11px] font-semibold tracking-wider text-gray-400 uppercase block mb-0.5">Previous Article</span>
                    <h4 className="font-semibold text-gray-800 text-sm truncate group-hover:text-red-600 transition-colors">
                      {currentArticle.prevArticle.title}
                    </h4>
                  </div>
                </div>

                <div 
                  onClick={() => setSelectedArticleId(currentArticle.nextArticle.id)}
                  className="group bg-white rounded-2xl p-5 border border-gray-200/80 shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-200 cursor-pointer flex items-center justify-between space-x-4 text-right"
                >
                  <div className="min-w-0 flex-1">
                    <span className="text-[11px] font-semibold tracking-wider text-gray-400 uppercase block mb-0.5">Next Article</span>
                    <h4 className="font-semibold text-gray-800 text-sm truncate group-hover:text-red-600 transition-colors">
                      {currentArticle.nextArticle.title}
                    </h4>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-red-50 group-hover:text-red-600 transition-colors flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>

            </div>

            <div className="space-y-6">
              <div className="bg-red-900 rounded-2xl p-6 text-white shadow-sm space-y-4">
                <h3 className="font-bold text-lg flex items-center">
                  <span className="mr-2">📰</span> Latest Updates
                </h3>
                <div className="space-y-3 bg-white text-gray-900 rounded-xl p-4 max-h-[500px] overflow-y-auto">
                  <div 
                    onClick={() => setSelectedArticleId('tcc')}
                    className={`border-b border-gray-100 pb-3 cursor-pointer transition-colors p-2 rounded-lg ${selectedArticleId === 'tcc' ? 'bg-red-50 border-l-4 border-l-red-600' : 'hover:bg-gray-50'}`}
                  >
                    <span className="font-bold text-xs block text-gray-800">ANNOUNCEMENT | Tanauan City College Applicants' Admission</span>
                    <span className="text-[10px] text-gray-400">Jun 6, 2025</span>
                  </div>

                  <div 
                    onClick={() => setSelectedArticleId('kasal')}
                    className={`border-b border-gray-100 pb-3 cursor-pointer transition-colors p-2 rounded-lg ${selectedArticleId === 'kasal' ? 'bg-red-50 border-l-4 border-l-red-600' : 'hover:bg-gray-50'}`}
                  >
                    <span className="font-bold text-xs block text-gray-800">Mabuhay ang mga Bagong kasal!</span>
                    <span className="text-[10px] text-gray-400">Jun 11, 2026</span>
                  </div>

                  <div 
                    onClick={() => setSelectedArticleId('aics')}
                    className={`border-b border-gray-100 pb-3 cursor-pointer transition-colors p-2 rounded-lg ${selectedArticleId === 'aics' ? 'bg-red-50 border-l-4 border-l-red-600' : 'hover:bg-gray-50'}`}
                  >
                    <span className="font-bold text-xs block text-gray-800">Local AICS para sa mga Tanaueño at Senior Citizens' Cash Incentives, sabayang ipinamahagi ng Tanauan LGU!</span>
                    <span className="text-[10px] text-gray-400">Jun 11, 2026</span>
                  </div>

                  <div 
                    onClick={() => setSelectedArticleId('medical')}
                    className={`border-b border-gray-100 pb-3 cursor-pointer transition-colors p-2 rounded-lg ${selectedArticleId === 'medical' ? 'bg-red-50 border-l-4 border-l-red-600' : 'hover:bg-gray-50'}`}
                  >
                    <span className="font-bold text-xs block text-gray-800">Ngayon sa Tanauan, agarang natutugunan ang pangangailangang medikal ng ating mga kababayan!</span>
                    <span className="text-[10px] text-gray-400">Jun 11, 2026</span>
                  </div>

                  <div 
                    onClick={() => setSelectedArticleId('eyeCheckUp')}
                    className={`border-b border-gray-100 pb-3 cursor-pointer transition-colors p-2 rounded-lg ${selectedArticleId === 'eyeCheckUp' ? 'bg-red-50 border-l-4 border-l-red-600' : 'hover:bg-gray-50'}`}
                  >
                    <span className="font-bold text-xs block text-gray-800">Free Eye Check-up Medical Mission, muling inihatid para sa mga Tanaueño!</span>
                    <span className="text-[10px] text-gray-400">Jun 11, 2026</span>
                  </div>

                  <div 
                    onClick={() => setSelectedArticleId('oathtaking')}
                    className={`pb-1 cursor-pointer transition-colors p-2 rounded-lg ${selectedArticleId === 'oathtaking' ? 'bg-red-50 border-l-4 border-l-red-600' : 'hover:bg-gray-50'}`}
                  >
                    <span className="font-bold text-xs block text-gray-800">Oathtaking ng mga Newly-hired at Promoted na mga Guro, pinangunahan ni Mayor Sonny Perez Collantes!</span>
                    <span className="text-[10px] text-gray-400">Jun 10, 2026</span>
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
      <Footer />
    </div>
  );
}