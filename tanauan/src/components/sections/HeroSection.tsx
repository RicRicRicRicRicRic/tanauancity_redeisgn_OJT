function HeroSection() {
  return (
    <section id="hero" className="relative w-full h-[768px] min-h-[768px] overflow-hidden -mt-8">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/src/assets/sections/hero/placeholder_video.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>


      {/* Content Container */}
      <div className="relative z-10 w-full h-full flex items-center ml-[37px] ">
        <div className="w-full px-6 md:px-12 lg:px-16 mt-24">
          <div className="max-w-3xl">
            {/* Welcome Text */}
            <p className="text-white md:text-4xl font-light drop-shadow-lg">
              Welcome to
            </p>

            {/* Main Heading */}
            <h1 className="!my-3 text-white text-5xl md:text-6xl lg:text-7xl font-bold drop-shadow-lg">
              Tanauan City
            </h1>

            {/* Tagline */}
            <h2 className="!text-2xl md:text-3xl font-semibold inline-block gradient-text">
              Cradle of Noble Heroes
            </h2>

            {/* Description */}
            <p className="text-white text-base md:text-lg leading-relaxed max-w-2xl drop-shadow-lg">
              1st-class component city in the province of Batangas,<br></br> Philippines. Located along the northeastern part of the<br></br> province bordered by Taal Lake and serving as a key<br></br>gateway from Metro Manila.
            </p>
          </div>
        </div>
      </div>

      {/* Mayor Image - Right Side */}
      <div className="absolute right-0 bottom-0 z-20 pointer-events-none -mr-[37px] ">
        <img
          src="/src/assets/sections/hero/mayor_tanauan.png"
          alt="Mayor of Tanauan City"
          className="h-[489px] w-auto object-contain object-bottom "
        />
      </div>
    </section>
  )
}

export default HeroSection