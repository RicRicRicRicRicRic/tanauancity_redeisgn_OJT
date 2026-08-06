export default function GovernmentLinksSection() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* LEFT COLUMN */}
          <div className="lg:col-span-6 flex items-center">

            <div className="max-w-xl">

              {/* Eyebrow */}
              <div className="inline-flex items-center gap-3 mb-8">
                <span className="w-10 h-px bg-slate-300"></span>

                <span className="text-xs uppercase tracking-[0.28em] font-semibold text-red-700">
                  Official Government Links
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.02] tracking-tight text-slate-900">

                Everything

                <br />

                <span className="font-serif italic font-medium">
                  Tanauan
                </span>

                <br />

                at your fingertips.

              </h2>

              {/* Description */}
              <p className="mt-8 max-w-lg text-lg leading-8 text-slate-600">

                Browse verified government offices, public programs, and essential
                city services through one trusted directory. Designed to make
                public information easier to discover and quicker to access.

              </p>

              {/* Divider */}
              <div className="w-24 h-px bg-slate-200 my-10"></div>

              {/* Quick Facts */}
              <div className="grid grid-cols-3 gap-8">

                <div>

                  <p className="text-3xl font-bold text-slate-900">
                    8+
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Official
                    <br />
                    Portals
                  </p>

                </div>

                <div>

                  <p className="text-3xl font-bold text-slate-900">
                    100%
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Verified
                    <br />
                    Resources
                  </p>

                </div>

                <div>

                  <p className="text-3xl font-bold text-slate-900">
                    24/7
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Public
                    <br />
                    Access
                  </p>

                </div>

              </div>

              {/* Quote */}
              <div className="mt-12 border-l-2 border-slate-200 pl-5">

                <p className="text-slate-500 italic leading-7">

                  Connecting citizens with trusted government
                  services through one centralized platform.

                </p>

              </div>

              {/* CTA */}
              <div className="mt-10">

                <a
                  href="#"
                  className="inline-flex items-center gap-2 font-semibold text-slate-900 transition-all duration-300 hover:gap-4 hover:text-red-700"
                >

                  Explore the Directory

                  <span>→</span>

                </a>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}