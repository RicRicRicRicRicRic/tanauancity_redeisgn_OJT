import Footer from '../layout/Footer';
import mayor_collantes from '../../assets/sections/officials/mayor_collantes.webp'
import vice_mayor_ablao from '../../assets/sections/officials/vice_mayor_ablao.webp'
import coun_alcantara from '../../assets/sections/officials/coun_alcantara.webp'
import coun_arcega from '../../assets/sections/officials/coun_arcega.webp'
import coun_gonzales from '../../assets/sections/officials/coun_gonzales.webp'
import coun_guelos_ramilo from '../../assets/sections/officials/coun_guelos-ramilo.webp'
import coun_manglo from '../../assets/sections/officials/coun_manglo.webp'
import coun_marqueses from '../../assets/sections/officials/coun_marqueses.webp'
import coun_micosa from '../../assets/sections/officials/coun_micosa.webp'
import coun_natanauan from '../../assets/sections/officials/coun_natanauan.webp'
import coun_oruga from '../../assets/sections/officials/coun_oruga.webp'
import coun_tabing from '../../assets/sections/officials/coun_tabing.webp'


interface Official {
  name: string;
  position: string;
  image: string;
}

const mayor: Official = {
  name: 'Nelson "Sonny" Perez Collantes',
  position: 'City Mayor',
  image: mayor_collantes,
};

const viceMayor: Official = {
  name: 'Wilfredo Panganiban Ablao',
  position: 'Vice Mayor',
  image: vice_mayor_ablao,
};

const councilors: Official[] = [
  {
    name: 'Hon. Tirso Mercado Oruga',
    position: 'City Councilor',
    image: coun_oruga,
  },
  {
    name: 'Hon. Clarence Micosa',
    position: 'City Councilor',
    image: coun_micosa,
  },
  {
    name: 'Hon. Potenciano Mendoza Natanauan',
    position: 'City Councilor',
    image: coun_natanauan,
  },
  {
    name: 'Hon Czylene Marqueses',
    position: 'City Councilor',
    image: coun_marqueses,
  },
  {
    name: 'Hon. Dr. Kristel Guelos-Ramilo',
    position: 'City Councilor',
    image: coun_guelos_ramilo,
  },
  {
    name: 'Hon. Rene Alcantara',
    position: 'City Councilor',
    image: coun_alcantara,
  },
  {
    name: 'Hon. Dr. Marissa Maranan-Tabing',
    position: 'City Councilor',
    image: coun_tabing,
  },
  {
    name: 'Hon. Mario Gonzales',
    position: 'City Councilor',
    image: coun_gonzales,
  },
  {
    name: 'Hon. Lilibeth Arcega',
    position: 'City Councilor',
    image: coun_arcega,
  },
  {
    name: 'HON. Marcelo Eric Manglo',
    position: 'City Councilor',
    image: coun_manglo,
  },
];

export default function CityOfficials() {
  return (
    <div className="min-h-screen flex flex-col bg-white pt-36 md:pt-31">

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#7a0000]">

        {/* Decorative background */}
        <div className="absolute inset-0">
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full border border-white/10" />
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full border border-white/10" />
          <div className="absolute -left-40 bottom-[-180px] h-96 w-96 rounded-full border border-white/5" />
        </div>

        <div className="flex flex-col items-center mx-auto max-w-7xl px-6 py-24 text-center md:px-10 md:py-32">

          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-white/60">
            City Government
          </p>

          <h1 className="font-serif text-5xl font-semibold tracking-tight text-white md:text-7xl">
            City Officials
          </h1>

          <div className="mx-auto mt-7 h-px w-20 bg-white/50" />

          <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-white/70 md:text-base">
            Meet the leaders entrusted with guiding our city,
            serving our community, and building a stronger future
            for every citizen.
          </p>

        </div>
      </section>


      {/* =====================================================
          LEADERSHIP
      ====================================================== */}
      <main className="mx-auto w-full max-w-7xl px-6 py-20 md:px-10 md:py-28">

        <div className="mb-14 text-center">

          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#7a0000]/70">
            Executive Leadership
          </p>

          <h2 className="mt-3 font-serif text-3xl font-semibold text-slate-900 md:text-4xl">
            The City's Leadership
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-500">
            Providing direction, leadership, and dedicated public service
            to the people of the city.
          </p>

        </div>


        {/* =================================================
            MAYOR + VICE MAYOR
        ================================================== */}
        <div className="relative mx-auto max-w-5xl">

          {/* Connecting line */}
          <div className="absolute left-1/2 top-16 hidden h-[calc(100%-4rem)] w-px -translate-x-1/2 bg-[#7a0000]/10 lg:block" />

          <div className="grid gap-8 lg:grid-cols-2">

            {/* MAYOR */}
            <div className="group relative overflow-hidden rounded-3xl border border-[#7a0000]/10 bg-white shadow-[0_20px_60px_rgba(122,0,0,0.10)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(122,0,0,0.16)]">

              {/* Top accent */}
              <div className="h-1.5 bg-[#7a0000]" />

              <div className="p-7 md:p-9">

                <div className="mb-7 flex items-center justify-between">

                  <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#7a0000]">
                    City Mayor
                  </span>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#7a0000]/5 text-[#7a0000]">
                    ★
                  </span>

                </div>

                {/* Image */}
                <div className="relative mx-auto aspect-[4/5] max-w-sm overflow-hidden rounded-2xl bg-slate-100">

                  <img
                    src={mayor.image}
                    alt={mayor.name}
                    className="h-full w-full object-cover grayscale-[15%] transition duration-700 group-hover:scale-105"
                  />

                  {/* Image overlay */}
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#7a0000]/50 to-transparent" />

                </div>

                <div className="pt-7 text-center">

                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7a0000]/70">
                    {mayor.position}
                  </p>

                  <h3 className="mt-2 font-serif text-2xl font-bold text-slate-900 md:text-3xl">
                    {mayor.name}
                  </h3>

                  <div className="mx-auto mt-5 h-px w-12 bg-[#7a0000]/30" />

                </div>

              </div>
            </div>


            {/* VICE MAYOR */}
            <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-[#fafafa] shadow-[0_15px_45px_rgba(0,0,0,0.06)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_25px_65px_rgba(122,0,0,0.12)]">

              <div className="h-1.5 bg-[#7a0000]/70" />

              <div className="p-7 md:p-9">

                <div className="mb-7 flex items-center justify-between">

                  <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#7a0000]/80">
                    City Vice Mayor
                  </span>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#7a0000]/5 text-[#7a0000]">
                    ◆
                  </span>

                </div>

                {/* Image */}
                <div className="relative mx-auto aspect-[4/5] max-w-sm overflow-hidden rounded-2xl bg-slate-200">

                  <img
                    src={viceMayor.image}
                    alt={viceMayor.name}
                    className="h-full w-full object-cover grayscale-[15%] transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#7a0000]/40 to-transparent" />

                </div>

                <div className="pt-7 text-center">

                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7a0000]/70">
                    {viceMayor.position}
                  </p>

                  <h3 className="mt-2 font-serif text-2xl font-bold text-slate-900 md:text-3xl">
                    {viceMayor.name}
                  </h3>

                  <div className="mx-auto mt-5 h-px w-12 bg-[#7a0000]/30" />

                </div>

              </div>
            </div>

          </div>
        </div>


        {/* =================================================
            CITY COUNCIL
        ================================================== */}
        <section className="mt-28">

          <div className="mb-12 flex flex-col items-center text-center">

            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#7a0000]/70">
              Legislative Body
            </span>

            <h2 className="mt-3 font-serif text-3xl font-semibold text-slate-900 md:text-4xl">
              City Council
            </h2>

            <div className="mt-5 h-px w-16 bg-[#7a0000]/30" />

          </div>


          {/* Officials */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">

            {councilors.map((official, index) => (

              <article
                key={official.name}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-500 hover:-translate-y-1 hover:border-[#7a0000]/20 hover:shadow-xl hover:shadow-[#7a0000]/10"
              >

                {/* Image */}
                <div className="relative aspect-[4/5] overflow-hidden bg-slate-100">

                  <img
                    src={official.image}
                    alt={official.name}
                    className="h-full w-full object-cover grayscale-[20%] transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#7a0000]/50 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                  {/* Number */}
                  <span className="absolute left-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-xs font-bold text-[#7a0000] shadow-sm">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                </div>

                {/* Details */}
                <div className="p-5">

                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#7a0000]/70">
                    {official.position}
                  </p>

                  <h3 className="mt-2 font-serif text-lg font-semibold leading-tight text-slate-900">
                    {official.name}
                  </h3>

                  <div className="mt-4 h-px w-8 bg-[#7a0000]/30 transition-all duration-300 group-hover:w-14" />

                </div>

              </article>

            ))}

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