function HeroSection() {
  return (
    <section id="hero" className="relative w-full min-h-[768px] overflow-hidden">
      {/* Video Background - Fixed position so it stays in place while scrolling */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover z-0"
      >
        <source src="/src/assets/sections/Home/hero/AERIAL.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>

      {/* Content Container - Centered Vertically and Horizontally within Left Column */}
      <div className="relative z-10 w-full h-full min-h-[768px] flex items-center justify-start px-6 md:px-16 lg:px-24">
        <div className="max-w-4xl text-left my-auto">
          {/* Welcome Text */}
          <p className="text-white md:text-2xl font-serif font-light tracking-widest uppercase drop-shadow-lg">
            Welcome to
          </p>

          {/* Main Heading using Serif */}
          <h1 className="!my-2 text-white text-6xl md:text-7xl lg:text-8xl font-serif font-bold tracking-wide uppercase drop-shadow-2xl">
            Tanauan City
          </h1>

          {/* Tagline using Serif Italic */}
          <div className="mb-6">
            <span className="text-3xl md:text-4xl lg:text-5xl font-serif italic tracking-wide text-amber-200 drop-shadow-md">
              Cradle of Noble Heroes
            </span>
          </div>

          {/* Description using Serif */}
          <p className="text-white text-base md:text-lg font-serif leading-relaxed max-w-2xl drop-shadow-lg">
            1st-class component city in the province of Batangas,<br /> Philippines. Located along the northeastern part of the<br /> province bordered by Taal Lake and serving as a key gateway from Metro Manila.
          </p>
        </div>
      </div>
    </section>
  )
}

export default HeroSection