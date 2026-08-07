import City_Library from "../../assets/sections/GovernmentLinksLogos/CityLibrary.png";
import City_Ordinances from "../../assets/sections/GovernmentLinksLogos/CityOrdinance.png";
import Gender_And_Development from "../../assets/sections/GovernmentLinksLogos/GenderAndDevelopment.png";
import LGBT_Programs from "../../assets/sections/GovernmentLinksLogos/LGBTQIAPrograms.png";
import Public_Employment from "../../assets/sections/GovernmentLinksLogos/PublicEmploymentServiceOffice.png";
import Public_Safety from "../../assets/sections/GovernmentLinksLogos/PublicSafety.png";
import Tanauan_City from "../../assets/sections/GovernmentLinksLogos/TanauanCity.png";
import Traffic_Management from "../../assets/sections/GovernmentLinksLogos/TrafficManagement.png";

function GovernmentLinksSection() {
  const links = [
    {
      id: 1,
      name: "Gender & Development",
      category: "Social Services",
      logo: Gender_And_Development,
    },
    {
      id: 2,
      name: "LGBTQIA+ Programs",
      category: "Social Services",
      logo: LGBT_Programs,
    },
    {
      id: 3,
      name: "Tanauan Main Portal",
      category: "Governance",
      logo: Tanauan_City,
    },
    {
      id: 4,
      name: "Traffic Management",
      category: "Public Safety",
      logo: Traffic_Management,
    },
    {
      id: 5,
      name: "City Library",
      category: "Community",
      logo: City_Library,
    },
    {
      id: 6,
      name: "Public Safety Office",
      category: "Public Safety",
      logo: Public_Safety,
    },
    {
      id: 7,
      name: "PESO Employment",
      category: "Employment",
      logo: Public_Employment,
    },
    {
      id: 8,
      name: "City Ordinances",
      category: "Governance",
      logo: City_Ordinances,
    },
  ];

  // Duplicate the array to create a seamless infinite loop effect
  const duplicatedLinks = [...links, ...links];

  return (
    <>
      <style>{`
        @keyframes verticalScroll {
          0% {
            transform: translateY(0);
          }

          100% {
            transform: translateY(-50%);
          }
        }

        .animate-vertical-scroll {
          animation: verticalScroll 25s linear infinite;
        }

        .animate-vertical-scroll:hover {
          animation-play-state: paused;
        }

        .mask-fade-edges {
          mask-image: linear-gradient(
            to bottom,
            transparent 0%,
            black 15%,
            black 85%,
            transparent 100%
          );

          -webkit-mask-image: linear-gradient(
            to bottom,
            transparent 0%,
            black 15%,
            black 85%,
            transparent 100%
          );
        }

        /* Premium Editorial Heading */
        .display-heading {
          font-family: "Montserrat", sans-serif;
          font-weight: 700;
          letter-spacing: -0.035em;
        }

        /* Elegant Serif Accent */
        .serif-highlight {
          font-family: "Playfair Display", Georgia, Cambria, "Times New Roman", Times, serif;
          font-style: italic;
          font-weight: 500;
          letter-spacing: -0.02em;
        }
      `}</style>

      {/* Premium Light Red / Rose Theme */}
      <section
        id="ulat-tanauan"
        className="py-28 text-slate-900 relative overflow-hidden"
      >
        {/* Soft Ambient Background Glows */}
        <div className="absolute top-1/3 -left-20 w-96 h-96 rounded-full blur-[130px] pointer-events-none" />

        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-[140px] pointer-events-none" />

        <div className="w-full px-6 md:px-12 lg:px-16 max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

            {/* =========================================
                LEFT COLUMN
            ========================================= */}
            <div className="lg:col-span-6 space-y-6">

              {/* Minimalist Monospace Eyebrow */}
              <div className="inline-flex items-center gap-3">
                <span className="h-px w-8 bg-red-600" />

                <span className="text-red-700 text-xs font-mono tracking-[0.25em] uppercase font-semibold">
                  Just One Click Away
                </span>
              </div>

              {/* Enhanced Editorial Headline */}
              <div className="space-y-4">
                <h2 className="display-heading text-4xl md:text-5xl lg:text-5xl leading-[1.06] text-slate-900">
                  Discover the Services<p> </p>

                  <span className="font-semibold">
                    of &nbsp;
                  </span>
                  
                  <span className="serif-highlight text-red-600 text-[1.08em]">
                    Tanauan.
                  </span>
                  <br/>
                </h2>

                {/* Body Copy */}
                <p className="text-slate-600 text-base md:text-lg font-light leading-relaxed max-w-xl tracking-wide">
                  Browse verified government offices, public programs, and
                  essential city services through one trusted directory.
                  Designed to make public information easier to discover and
                  quicker to access.
                </p>
              </div>
            </div>

            {/* =========================================
                RIGHT COLUMN
            ========================================= */}
            <div className="lg:col-span-6 relative h-[420px] w-full max-w-md mx-auto overflow-hidden mask-fade-edges">

              {/* Scrolling Container */}
              <div className="flex flex-col gap-3 animate-vertical-scroll absolute w-full py-2">
                {duplicatedLinks.map((item, index) => (
                  <a
                    key={`${item.id}-${index}`}
                    href="#"
                    className="group flex items-center gap-4 bg-white/90 backdrop-blur-xl rounded-2xl p-3.5 border border-red-200/70 shadow-sm hover:border-red-500 hover:shadow-md transition-all duration-300 mx-2"
                  >
                    {/* Circle Logo */}
                    <div className="relative w-12 h-12 md:w-14 md:h-14 flex-shrink-0 rounded-full bg-white border border-red-200/80 shadow-xs flex items-center justify-center overflow-hidden p-0 group-hover:scale-105 transition-transform duration-300">
                      <img
                        src={item.logo}
                        alt={item.name}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>

                    {/* Content Details */}
                    <div className="flex flex-col text-left">
                      <span className="text-[10px] font-mono font-semibold text-red-600 uppercase tracking-widest">
                        {item.category}
                      </span>

                      <span className="text-sm md:text-base font-bold text-slate-800 group-hover:text-red-600 transition-colors">
                        {item.name}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default GovernmentLinksSection;