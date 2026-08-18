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

      {/* Content Container - Centered on Left Column */}
      <div className="relative z-10 w-full h-full flex items-center ml-[37px]">
        <div className="w-full px-6 md:px-12 lg:px-16 mt-24">
          <div className="max-w-4xl">
            {/* Welcome Text */}
            <p className="text-white md:text-2xl font-light tracking-widest uppercase drop-shadow-lg">
              Welcome to
            </p>

            {/* Main Heading styled similarly to reference image */}
            <h1 className="!my-2 text-white text-6xl md:text-7xl lg:text-8xl font-black tracking-wider uppercase drop-shadow-2xl">
              Tanauan City
            </h1>

            {/* Tagline styled with cursive/script aesthetic similar to reference subtitle */}
            <div className="mb-6">
              <span className="text-3xl md:text-4xl lg:text-5xl font-normal italic tracking-wide text-red-800 drop-shadow-md font-serif">
                Cradle of Noble Heroes
              </span>
            </div>

            {/* Description */}
            <p className="text-white text-base md:text-lg leading-relaxed max-w-2xl drop-shadow-lg">
              1st-class component city in the province of Batangas,<br /> Philippines. Located along the northeastern part of the<br /> province bordered by Taal Lake and serving as a key gateway from Metro Manila.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection