import { useState, useEffect } from 'react';
import Footer from '../layout/Footer';
import mayor_collantes from '../../assets/sections/officials/mayor_collantes.webp';
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
import facebook_logo from '../../assets/sections/pictures/facebook_logo.png';
import x_logo from '../../assets/sections/pictures/x_logo.png';
import instagram_logo from '../../assets/sections/pictures/instagram_logo.png';
import tiktok_logo from '../../assets/sections/pictures/tiktok_logo.png';

interface SocialLinks {
  facebook?: string;
  instagram?: string;
  x?: string;
  tiktok?: string;
  email?: string;
}

interface Official {
  name: string;
  position: string;
  image: string;
  description: string;
  socials?: SocialLinks;
}

const mayor: Official = {
  name: 'Nelson "Sonny" Perez Collantes',
  position: 'City Mayor',
  image: mayor_collantes,
  description: 'Leading the city with a vision for sustainable growth, transparent governance, and inclusive development.',
  socials: {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    x: 'https://twitter.com',
    tiktok: 'https://tiktok.com',
    email: 'mayor.collantes@tanauancity.gov.ph',
  },
};

const viceMayor: Official = {
  name: 'Wilfredo Panganiban Ablao',
  position: 'Vice Mayor',
  image: vice_mayor_ablao,
  description: 'Presiding over the legislative council to enact progressive ordinances and public welfare programs.',
  socials: {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    x: 'https://twitter.com',
    tiktok: 'https://tiktok.com',
    email: 'vicemayor.ablao@tanauancity.gov.ph',
  },
};

const councilors: Official[] = [
  {
    name: 'Hon. Tirso Mercado Oruga',
    position: 'City Councilor',
    image: coun_oruga,
    description: 'City Councilor focused on legislative matters and community development, ensuring robust support for local constituents and structural growth.',
    socials: { facebook: 'https://facebook.com', instagram: 'https://instagram.com', x: 'https://twitter.com', tiktok: 'https://tiktok.com', email: 'coun.oruga@tanauancity.gov.ph' },
  },
  {
    name: 'Hon. Clarence Micosa',
    position: 'City Councilor',
    image: coun_micosa,
    description: 'City Councilor focused on legislative matters and community development, championing modern policies and youth empowerment.',
    socials: { facebook: 'https://facebook.com', instagram: 'https://instagram.com', x: 'https://twitter.com', tiktok: 'https://tiktok.com', email: 'coun.micosa@tanauancity.gov.ph' },
  },
  {
    name: 'Hon. Potenciano Mendoza Natanauan',
    position: 'City Councilor',
    image: coun_natanauan,
    description: 'Dedicated to serving the community through effective legislation and public service, bridging public needs with actionable municipal programs.',
    socials: { facebook: 'https://facebook.com', instagram: 'https://instagram.com', x: 'https://twitter.com', tiktok: 'https://tiktok.com', email: 'coun.natanauan@tanauancity.gov.ph' },
  },
  {
    name: 'Hon Czylene Marqueses',
    position: 'City Councilor',
    image: coun_marqueses,
    description: 'Working towards the betterment of Tanauan City through comprehensive legislation, social welfare, and community-centered initiatives.',
    socials: { facebook: 'https://facebook.com', instagram: 'https://instagram.com', x: 'https://twitter.com', tiktok: 'https://tiktok.com', email: 'coun.marqueses@tanauancity.gov.ph' },
  },
  {
    name: 'Hon. Dr. Kristel Guelos-Ramilo',
    position: 'City Councilor',
    image: coun_guelos_ramilo,
    description: 'Committed to public service and community development initiatives, with special emphasis on public health and wellness programs.',
    socials: { facebook: 'https://facebook.com', instagram: 'https://instagram.com', x: 'https://twitter.com', tiktok: 'https://tiktok.com', email: 'coun.guelos@tanauancity.gov.ph' },
  },
  {
    name: 'Hon. Rene Alcantara',
    position: 'City Councilor',
    image: coun_alcantara,
    description: 'Focused on creating positive change through effective local governance, infrastructure oversight, and grassroots economic support.',
    socials: { facebook: 'https://facebook.com', instagram: 'https://instagram.com', x: 'https://twitter.com', tiktok: 'https://tiktok.com', email: 'coun.alcantara@tanauancity.gov.ph' },
  },
  {
    name: 'Hon. Dr. Marissa Maranan-Tabing',
    position: 'City Councilor',
    image: coun_tabing,
    description: 'Dedicated to improving healthcare and social services in the city, strengthening medical access and community safety nets.',
    socials: { facebook: 'https://facebook.com', instagram: 'https://instagram.com', x: 'https://twitter.com', tiktok: 'https://tiktok.com', email: 'coun.tabing@tanauancity.gov.ph' },
  },
  {
    name: 'Hon. Mario Gonzales',
    position: 'City Councilor',
    image: coun_gonzales,
    description: 'Working to enhance city development and community welfare through transparent legislative frameworks and public partnerships.',
    socials: { facebook: 'https://facebook.com', instagram: 'https://instagram.com', x: 'https://twitter.com', tiktok: 'https://tiktok.com', email: 'coun.gonzales@tanauancity.gov.ph' },
  },
  {
    name: 'Hon. Lilibeth Arcega',
    position: 'City Councilor',
    image: coun_arcega,
    description: 'Committed to promoting education and youth development programs, paving the way for sustainable educational infrastructure.',
    socials: { facebook: 'https://facebook.com', instagram: 'https://instagram.com', x: 'https://twitter.com', tiktok: 'https://tiktok.com', email: 'coun.arcega@tanauancity.gov.ph' },
  },
  {
    name: 'HON. Marcelo Eric Manglo',
    position: 'City Councilor',
    image: coun_manglo,
    description: 'Focused on infrastructure development and urban planning, guiding long-term modernization and public utility enhancements.',
    socials: { facebook: 'https://facebook.com', instagram: 'https://instagram.com', x: 'https://twitter.com', tiktok: 'https://tiktok.com', email: 'coun.manglo@tanauancity.gov.ph' },
  },
];

// Reusable Mini CTA / Social Icons Component without Backgrounds
function SocialCTA({ socials, alignRight = false }: { socials?: SocialLinks; alignRight?: boolean }) {
  if (!socials) return null;

  return (
    <div className={`mt-6 pt-5 border-t border-stone-200/60 flex flex-wrap items-center gap-3.5 ${alignRight ? 'lg:justify-end' : 'lg:justify-start'} justify-center`}>
      <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mr-1">Connect:</span>
      
      {socials.facebook && (
        <a
          href={socials.facebook}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="h-5 w-5 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:opacity-80"
        >
          <img src={facebook_logo} alt="Facebook" className="w-full h-full object-contain" />
        </a>
      )}

      {socials.instagram && (
        <a
          href={socials.instagram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="h-5 w-5 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:opacity-80"
        >
          <img src={instagram_logo} alt="Instagram" className="w-full h-full object-contain" />
        </a>
      )}

      {socials.x && (
        <a
          href={socials.x}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X (Twitter)"
          className="h-5 w-5 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:opacity-80"
        >
          <img src={x_logo} alt="X" className="w-full h-full object-contain" />
        </a>
      )}

      {socials.tiktok && (
        <a
          href={socials.tiktok}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="TikTok"
          className="h-5 w-5 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:opacity-80"
        >
          <img src={tiktok_logo} alt="TikTok" className="w-full h-full object-contain" />
        </a>
      )}

      {socials.email && (
        <a
          href={`mailto:${socials.email}`}
          aria-label="Email"
          className="h-5 w-5 flex items-center justify-center text-slate-500 hover:text-[#7a0000] transition-all duration-300 hover:scale-110"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M0 3v18h24V3H0zm21.518 2L12 12.713 2.482 5h19.036zM2 19V7.183l10 8.104 10-8.104V19H2z"/>
          </svg>
        </a>
      )}
    </div>
  );
}

export default function CityOfficials() {
  const allOfficialImages = [
    mayor.image,
    viceMayor.image,
    ...councilors.map((c) => c.image),
  ];

  const [leftIndex, setLeftIndex] = useState(0);
  const [rightIndex, setRightIndex] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setLeftIndex((prev) => (prev + 2) % allOfficialImages.length);
      setRightIndex((prev) => (prev + 2) % allOfficialImages.length);
    }, 6000); // 6 seconds per photo slide for a relaxed pace

    return () => clearInterval(timer);
  }, [allOfficialImages.length]);

  return (
    <div className="min-h-screen flex flex-col bg-stone-50/30 pt-36 md:pt-31">

      {/* Custom Keyframe Animations for Slide In / Slide Out */}
      <style>{`
        @keyframes slideInLeft {
          0% { opacity: 0; transform: translateX(-60px) rotate(-3deg); }
          15% { opacity: 0.75; transform: translateX(0) rotate(-3deg); }
          85% { opacity: 0.55; transform: translateX(0) rotate(-3deg); }
          100% { opacity: 0; transform: translateX(60px) rotate(-3deg); }
        }
        @keyframes slideInRight {
          0% { opacity: 0; transform: translateX(60px) rotate(3deg); }
          15% { opacity: 0.75; transform: translateX(0) rotate(3deg); }
          85% { opacity: 0.35; transform: translateX(0) rotate(3deg); }
          100% { opacity: 0; transform: translateX(-60px) rotate(3deg); }
        }
        .animate-slide-left {
          animation: slideInLeft 6s ease-in-out forwards;
        }
        .animate-slide-right {
          animation: slideInRight 6s ease-in-out forwards;
        }
      `}</style>

      {/* =====================================================
          HERO SECTION WITH SLIDING BACKGROUND OFFICIALS
      ====================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#5c0000] via-[#7a0000] to-[#420000] text-white">
        
        {/* Dynamic Sliding Background Photos */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden flex justify-between items-center">
          
          {/* Left Sliding Image Container */}
          <div className="absolute -left-10 -top-12 w-80 h-[450px] md:w-[420px] md:h-[550px] overflow-hidden">
            <img 
              key={`left-${leftIndex}`}
              src={allOfficialImages[leftIndex]} 
              alt="" 
              className="w-full h-full object-cover object-top grayscale contrast-125 animate-slide-left" 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#7a0000]/60 to-[#7a0000]" />
          </div>

          {/* Right Sliding Image Container */}
          <div className="absolute -right-10 -bottom-12 w-80 h-[450px] md:w-[420px] md:h-[550px] overflow-hidden">
            <img 
              key={`right-${rightIndex}`}
              src={allOfficialImages[rightIndex]} 
              alt="" 
              className="w-full h-full object-cover object-top grayscale contrast-125 animate-slide-right" 
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#7a0000]/60 to-[#7a0000]" />
          </div>

          {/* Abstract decorative circles */}
          <div className="absolute -right-24 -top-24 h-[500px] w-[500px] rounded-full border border-white/10" />
          <div className="absolute left-10 -bottom-20 h-[400px] w-[400px] rounded-full border border-white/10" />
        </div>

        {/* Hero Content */}
        <div className="flex flex-col items-center relative mx-auto max-w-7xl px-6 py-24 text-center md:px-10 md:py-32 z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md mb-6 border border-white/10 shadow-lg">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/90">
              THE OFFICIALS
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-white drop-shadow-md">
            City Officials & Leadership
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base text-stone-100 font-light leading-relaxed md:text-lg drop-shadow">
            Dedicated public servants committed to driving sustainable growth, transparent governance, and a prosperous future for our community.
          </p>
        </div>
      </section>

      {/* =====================================================
          MAIN CONTENT CONTAINER
      ====================================================== */}
      <main className="mx-auto w-full max-w-7xl px-6 py-20 md:px-10 md:py-28">

        {/* =================================================
            EXECUTIVE LEADERSHIP (MAYOR & VICE MAYOR)
        ================================================== */}
        <div className="mb-28">
          <div className="mb-14 text-center max-w-xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#7a0000]">
              Executive Branch
            </span>
            <h2 className="mt-2 font-serif text-3xl font-semibold text-slate-900 md:text-4xl">
              Executive Leadership
            </h2>
            <div className="mx-auto mt-4 h-0.5 w-12 bg-[#7a0000]/40" />
          </div>

          <div className="grid gap-8 lg:grid-cols-2 max-w-5xl mx-auto">
            
            {/* Mayor Card */}
            <div className="group relative bg-white rounded-2xl border border-stone-200/80 p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-6 mb-6 border-b border-stone-100">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-[#7a0000] block mb-1">
                      Office of the Chief Executive
                    </span>
                    <span className="text-xs text-slate-400 font-medium">Local Chief Executive</span>
                  </div>
                  <div className="h-9 w-9 rounded-full bg-[#7a0000]/5 flex items-center justify-center text-[#7a0000] group-hover:bg-[#7a0000] group-hover:text-white transition-colors duration-300">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                  </div>
                </div>

                <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-stone-100 mb-6 max-w-sm mx-auto">
                  <img
                    src={mayor.image}
                    alt={mayor.name}
                    className="h-full w-full object-cover object-top grayscale-[10%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                </div>

                <div className="text-center mb-6">
                  <h3 className="font-serif text-2xl font-bold text-slate-900 tracking-tight">
                    {mayor.name}
                  </h3>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#7a0000] mt-1">
                    {mayor.position}
                  </p>
                </div>
              </div>

              <div className='flex flex-col items-center '>
                <p className="text-xs text-slate-600 leading-relaxed font-normal text-center">
                  {mayor.description}
                </p>
                <SocialCTA socials={mayor.socials} />
              </div>
            </div>

            {/* Vice Mayor Card */}
            <div className="group relative bg-white rounded-2xl border border-stone-200/80 p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-6 mb-6 border-b border-stone-100">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-[#7a0000] block mb-1">
                      Office of the Vice Mayor
                    </span>
                    <span className="text-xs text-slate-400 font-medium">Presiding Officer</span>
                  </div>
                  <div className="h-9 w-9 rounded-full bg-[#7a0000]/5 flex items-center justify-center text-[#7a0000] group-hover:bg-[#7a0000] group-hover:text-white transition-colors duration-300">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                  </div>
                </div>

                <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-stone-100 mb-6 max-w-sm mx-auto">
                  <img
                    src={viceMayor.image}
                    alt={viceMayor.name}
                    className="h-full w-full object-cover object-top grayscale-[10%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                </div>

                <div className="text-center mb-6">
                  <h3 className="font-serif text-2xl font-bold text-slate-900 tracking-tight">
                    {viceMayor.name}
                  </h3>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#7a0000] mt-1">
                    {viceMayor.position}
                  </p>
                </div>
              </div>

              <div className='flex flex-col items-center '>
                <p className="text-xs text-slate-600 leading-relaxed font-normal text-center">
                  {viceMayor.description}
                </p>
                <SocialCTA socials={viceMayor.socials} />
              </div>
            </div>

          </div>
        </div>

        {/* =================================================
            CITY COUNCIL (ALTERNATING CONTINUOUS LINE LAYOUT)
        ================================================== */}
        <section>
          <div className="mb-20 text-center max-w-xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#7a0000]">
              Legislative Branch
            </span>
            <h2 className="mt-2 font-serif text-3xl font-semibold text-slate-900 md:text-4xl">
              City Councilors
            </h2>
            <div className="mx-auto mt-4 h-0.5 w-12 bg-[#7a0000]/40" />
          </div>

          <div className="relative max-w-5xl mx-auto">
            
            {/* Continuous Vertical Centerline Spine */}
            <div className="hidden lg:block absolute left-1/2 top-4 bottom-4 w-px bg-[#7a0000]/30 -translate-x-1/2" />

            <div className="space-y-16 lg:space-y-24">
              {councilors.map((official, index) => {
                const isEven = index % 2 === 0;

                return (
                  <article
                    key={official.name}
                    className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
                  >
                    {/* Left Column (Cols 1-5) */}
                    <div className="w-full lg:col-span-5">
                      {isEven ? (
                        // Even Index: Image on Left (Hugging the spine)
                        <div className="relative aspect-[4/5] max-w-xs mx-auto lg:mx-0 lg:ml-auto overflow-hidden rounded-xl bg-stone-100 shadow-md group">
                          <img
                            src={official.image}
                            alt={official.name}
                            className="h-full w-full object-cover object-top grayscale-[15%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                          />
                          <span className="absolute top-3 left-3 h-8 w-8 rounded-full bg-white/95 backdrop-blur-sm text-xs font-bold text-[#7a0000] flex items-center justify-center shadow">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                        </div>
                      ) : (
                        // Odd Index: Text on Left (Aligned towards spine)
                        <div className="flex flex-col justify-center text-center lg:text-right px-4">
                          <div className="inline-flex items-center gap-2 justify-center lg:justify-end mb-3">
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#7a0000]">
                              {official.position}
                            </span>
                            <span className="h-1.5 w-1.5 rounded-full bg-[#7a0000]" />
                          </div>

                          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight leading-snug mb-4">
                            {official.name}
                          </h3>

                          <div className="h-px w-16 bg-[#7a0000]/20 mx-auto lg:ml-auto lg:mr-0 mb-5" />

                          <p className="text-sm md:text-base text-slate-600 leading-relaxed font-normal">
                            {official.description}
                          </p>

                          <SocialCTA socials={official.socials} alignRight={true} />
                        </div>
                      )}
                    </div>

                    {/* Center Column / Timeline Spine Node (Cols 6-7) */}
                    <div className="hidden lg:block lg:col-span-2 text-center relative">
                      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-4 w-4 rounded-full bg-stone-50 border-2 border-[#7a0000]/40 z-10" />
                    </div>

                    {/* Right Column (Cols 8-12) */}
                    <div className="w-full lg:col-span-5">
                      {isEven ? (
                        // Even Index: Text on Right (Aligned towards spine)
                        <div className="flex flex-col justify-center text-center lg:text-left px-4">
                          <div className="inline-flex items-center gap-2 justify-center lg:justify-start mb-3">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#7a0000]" />
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#7a0000]">
                              {official.position}
                            </span>
                          </div>

                          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight leading-snug mb-4">
                            {official.name}
                          </h3>

                          <div className="h-px w-16 bg-[#7a0000]/20 mx-auto lg:mx-0 mb-5" />

                          <p className="text-sm md:text-base text-slate-600 leading-relaxed font-normal">
                            {official.description}
                          </p>

                          <SocialCTA socials={official.socials} alignRight={false} />
                        </div>
                      ) : (
                        // Odd Index: Image on Right (Hugging the spine)
                        <div className="relative aspect-[4/5] max-w-xs mx-auto lg:mx-0 overflow-hidden rounded-xl bg-stone-100 shadow-md group">
                          <img
                            src={official.image}
                            alt={official.name}
                            className="h-full w-full object-cover object-top grayscale-[15%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                          />
                          <span className="absolute top-3 left-3 h-8 w-8 rounded-full bg-white/95 backdrop-blur-sm text-xs font-bold text-[#7a0000] flex items-center justify-center shadow">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                        </div>
                      )}
                    </div>

                  </article>
                );
              })}
            </div>

          </div>
        </section>

      </main>

      {/* =====================================================
          FOOTER
      ====================================================== */}
      <Footer />

    </div>
  );
}