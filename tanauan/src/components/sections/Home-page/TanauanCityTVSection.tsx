import { useState } from 'react';

function TanauanCityTVSection() {
  const [isHovering, setIsHovering] = useState(false);
  const [isMobileOverlayVisible, setIsMobileOverlayVisible] = useState(true);
  const [currentVideoId, setCurrentVideoId] = useState('2mqRRGkbkc0');
  
  const playlistItems = [
    {
      id: 1,
      title: "SINSAY PASADA EP27 | KULAWO GOTONG BATANGAS",
      duration: "11:25",
      videoId: "2mqRRGkbkc0",
      description: "SINSAY PASADA EP27 | KULAWO GOTONG BATANGAS"
    },
    {
      id: 2,
      title: "GAME: Tanauan City vs Zambales (Senior League Baseball) CHAMPIONSHIP GAME",
      duration: "2:22:58",
      videoId: "Whv42_oz4bQ",
      description: "🔴LIVE ACTION | Philippines Series 2023 National Finals\nGAME: Tanauan City vs Zambales (Senior League Baseball) CHAMPIONSHIP GAME\n\n#TanauanCGTV\n#CityGovernmentOfTanauan\n#LittleLeaguePh"
    },
    {
      id: 3,
      title: "🔴 Watch Live | Protect Our Nation's Youth | Philippines Vs. China (SEMIFINAL)",
      duration: "54:40",
      videoId: "NOqAoiiyn2s",
      description: "🔴 Watch Live | Protect Our Nation's Youth\n2023 Asia Pacific (ASPAC) Zone Mustang Championships Tournament\nPhilippines Vs. China (SEMIFINAL)\n#CityGovernmentOfTanauan\n#TanauanBatangas\n#PONY"
    },
    {
      id: 4,
      title: "GAME: Tanauan City vs Negros (Senior League Softball)",
      duration: "1:30:50",
      videoId: "BjICDZ1qkbA",
      description: "🔴LIVE ACTION | Philippines Series 2023 National Finals\nGAME: Tanauan City vs Negros (Senior League Softball)\n\n#TanauanCGTV\n#CityGovernmentOfTanauan\n#LittleLeaguePh"
    },
    {
      id: 5,
      title: "🔴 Watch Live | Protect Our Nation's Youth | Philippines Vs. Japan (Championship Game)",
      duration: "2:26:33",
      videoId: "FQlLdRThpug",
      description: "🔴 Watch Live | Protect Our Nation's Youth\n2023 Asia Pacific (ASPAC) Zone Mustang Championships Tournament\nPhilippines Vs. Japan (Championship Game)\n\n#citygovernmentoftanauan\n#TanauanBatangas\n#PONY"
    },
    {
      id: 6,
      title: "GAME: Tanauan City vs Northen Samar (Junior League Baseball)",
      duration: "2:25:15",
      videoId: "YFL-qbitRN8",
      description: "🔴LIVE ACTION | Philippines Series 2023 National Finals\nGAME: Tanauan City vs Northen Samar (Junior League Baseball)\n\n#TanauanCGTV\n#CityGovernmentOfTanauan\n#LittleLeaguePh"
    },
    {
      id: 7,
      title: "GAME: Tanauan City vs Davao City (Major League Softball)",
      duration: "1:45:35",
      videoId: "yukQzNh0MnQ",
      description: "🔴LIVE ACTION | Philippines Series 2023 National Finals\nGAME: Tanauan City vs Davao City (Major League Softball)\n\n#TanauanCGTV\n#CityGovernmentOfTanauan\n#LittleLeaguePh"
    },
    {
      id: 8,
      title: "🔴 Watch Live | Protect Our Nation's Youth (JAPAN Vs. CHINA )",
      duration: "1:24:58",
      videoId: "ntrAtyccNyw",
      description: "🔴 Watch Live | Protect Our Nation's Youth\n2023 Asia Pacific (ASPAC) Zone Mustang Championships Tournament\nJapan Vs. China\n\n#CityGovernmentOfTanauan\n#TanauanBatangas\n#PONY"
    },
    {
      id: 9,
      title: "GAME: Tanauan City vs Zambales (Junior League Baseball)",
      duration: "2:36:16",
      videoId: "1HnXZl73u3M",
      description: "🔴LIVE ACTION | Philippines Series 2023 National Finals\nGAME: Tanauan City vs Zambales (Junior League Baseball)\n\n#TanauanCGTV\n#CityGovernmentOfTanauan\n#LittleLeaguePh"
    }
  ];

  return (
    <section 
      id="tanauan-city-tv" 
      className="w-full h-[768px] min-h-[768px] bg-gray-900 relative flex flex-col py-8 px-6 md:px-12 lg:px-16 overflow-x-hidden"
    >
      {/* Parent container for header, main content, and playlist */}
      <div className="mt-20 flex-1 flex flex-col">
        {/* Header Section */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white">
          Tanauan City TV
        </h2>

        {/* Main Content Area - Video Player with Hoverable Overlays */}
        <div className="flex-1 flex items-center justify-center max-w-6xl mx-auto w-full min-h-0 relative -mt-6">
        
        {/* MOBILE LAYOUT - Stacked vertically */}
        <div className="flex flex-col md:hidden w-full max-w-3xl mx-auto gap-4">
          {/* Mobile Channel Promo - Above video (Compact Horizontal Layout) */}
          {isMobileOverlayVisible && (
            <div className="bg-gray-900 bg-opacity-95 backdrop-blur-sm rounded-lg p-2">
              <div className="flex gap-2">
                {/* Channel Profile Image - Very Small */}
                <img
                  src="/src/assets/sections/Home/TanauanCityTVSection/tanauan-chennel-profile.jpg"
                  alt="Tanauan City Channel"
                  className="w-10 h-10 rounded-full object-cover border-2 border-gray-600 flex-shrink-0"
                />
                
                {/* Channel Info - Compact */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-xs font-bold text-white mb-0.5 truncate">
                    Official Channel
                  </h3>
                  
                  {/* Stats stacked vertically - ultra minimal spacing */}
                  <div className="flex gap-1 mb-1">
                    <div className="text-center">
                      <span className="text-white font-semibold text-[10px] block leading-none">1K</span>
                      <span className="text-gray-400 text-[8px] block leading-none -mt-[1px]">Subscribers</span>
                    </div>
                    <div className="text-center">
                      <span className="text-white font-semibold text-[10px] block leading-none">340+</span>
                      <span className="text-gray-400 text-[8px] block leading-none -mt-[1px]">Videos</span>
                    </div>
                  </div>

                  <a
                    href="https://www.youtube.com/@CityGovernmentofTanauan/videos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1 bg-[#0F0F0F] hover:bg-[#1A1A1A] text-white font-medium py-1.5 px-3 rounded-full transition-colors duration-200 border border-gray-700"
                    style={{ marginLeft: '-50px', width: 'calc(100% + 50px)' }}
                  >
                    <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                      <img
                        src="/src/assets/sections/Home/TanauanCityTVSection/youtube-logo-transparent.webp"
                        alt="YouTube"
                        className="w-2.5 h-2.5"
                      />
                    </div>
                    <span className="text-[10px]">Visit YouTube Channel</span>
                  </a>
                </div>

                {/* Description on the right */}
                <div className="flex-shrink-0 max-w-[100px]">
                  <p className="text-[10px] text-gray-400 leading-tight">
                    Check out all our past broadcasts, city events, and updates on our official YouTube channel.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Main YouTube Video Player with Click Trigger */}
          <div 
            className="w-full aspect-video bg-black rounded-xl overflow-hidden shadow-2xl"
            onClick={() => setIsMobileOverlayVisible(!isMobileOverlayVisible)}
          >
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${currentVideoId}?autoplay=0&mute=0`}
              title="Tanauan City TV Main Broadcast"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* Mobile Horizontal Playlist - Below video */}
          {isMobileOverlayVisible && (
            <div className="bg-gray-900 bg-opacity-95 backdrop-blur-sm rounded-xl p-3">
              <h3 className="text-xs font-semibold text-white mb-3 uppercase tracking-wider px-1">                Up Next / Playlist
              </h3>
              <div className="flex gap-3 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden pb-2">
                {playlistItems.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setCurrentVideoId(item.videoId)}
                    className={`cursor-pointer transition-all flex-shrink-0 w-40 bg-gray-800 rounded-lg ${
                      currentVideoId === item.videoId 
                        ? 'shadow-[0_0_0_2px_#E91E8C]' 
                        : 'hover:shadow-[0_0_0_2px_#E91E8C]'
                    }`}
                  >
                    <div className="aspect-video bg-gray-700 relative overflow-hidden">
                      <img
                        src={`https://img.youtube.com/vi/${item.videoId}/mqdefault.jpg`}
                        alt={item.title}
                        className="w-full h-full object-contain"
                      />
                      <span className="absolute bottom-1 right-1.5 bg-black bg-opacity-80 text-white text-xs px-1.5 py-0.5 rounded">
                        {item.duration}
                      </span>
                    </div>
                    <div className="p-2">
                      <h4 className="text-white text-xs font-medium truncate">
                        {item.title}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* DESKTOP LAYOUT - Side overlays with hover */}
        <div className="hidden md:block w-full max-w-3xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${currentVideoId}?autoplay=0&mute=0`}
            title="Tanauan City TV Main Broadcast"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Desktop Left-Side Channel Promo Overlay */}
        <div 
          className={`
            absolute -left-16 top-0 h-full w-64 bg-gray-900 bg-opacity-95 backdrop-blur-sm transform transition-all duration-300 ease-in-out
            hidden md:block
            ${isHovering ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}
          `}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className="p-4 h-full flex flex-col justify-center">
            {/* Channel Profile Image */}
            <div className="flex justify-center mb-4">
              <img
                  src="/src/assets/sections/Home/TanauanCityTVSection/tanauan-chennel-profile.jpg"
                  alt="Tanauan City Channel"
                className="w-20 h-20 rounded-full object-cover border-2 border-gray-600"
              />
            </div>

            <h3 className="text-lg font-bold text-white mb-3 text-center">
              Official Channel
            </h3>
            
            {/* Stats Columns */}
            <div className="flex justify-center gap-8 mb-4">
              <div className="text-center">
                <p className="text-white font-semibold text-sm">1K</p>
                <p className="text-gray-400 text-xs">Subscribers</p>
              </div>
              <div className="text-center">
                <p className="text-white font-semibold text-sm">340+</p>
                <p className="text-gray-400 text-xs">Videos</p>
              </div>
            </div>

            <p className="text-sm text-gray-300 !mb-4 text-center">
              Check out all our past broadcasts, city events, and updates on our official YouTube channel.
            </p>
            <a
              href="https://www.youtube.com/@CityGovernmentofTanauan/videos"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#0F0F0F] hover:bg-[#1A1A1A] text-white font-medium py-3 px-5 rounded-full transition-colors duration-200 border border-gray-700"
            >
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                <img
                  src="/src/assets/sections/Home/TanauanCityTVSection/youtube-logo-transparent.webp"
                  alt="YouTube"
                  className="w-6 h-6"
                />
              </div>
              <span className="text-sm">Visit Our YouTube Channel</span>
            </a>
          </div>
        </div>

        {/* Desktop Vertical Playlist Overlay */}
        <div 
          className={`
            absolute -right-16 top-0 h-full w-64 bg-gray-900 bg-opacity-95 backdrop-blur-sm transform transition-all duration-300 ease-in-out
            hidden md:block
            ${isHovering ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
          `}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className="p-3 h-full flex flex-col pb-6 overflow-x-hidden">
            <h3 className="text-xs font-semibold text-white mb-3 uppercase tracking-wider px-1">
              Up Next / Playlist
            </h3>
            {/* Added pt-1 so the top shadow border of the first item won't be clipped */}
            <div className="flex-1 overflow-y-auto space-y-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden px-1 pt-1 pb-8">
              {playlistItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setCurrentVideoId(item.videoId)}
                  className={`cursor-pointer transition-all w-full bg-gray-800 ${
                    currentVideoId === item.videoId 
                      ? 'shadow-[0_0_0_2px_#E91E8C]' 
                      : 'hover:shadow-[0_0_0_2px_#E91E8C]'
                  }`}
                >
                  <div className="aspect-video bg-gray-700 relative overflow-hidden origin-top-left">
                    <img
                      src={`https://img.youtube.com/vi/${item.videoId}/mqdefault.jpg`}
                      alt={item.title}
                      className="w-full h-full object-contain"
                    />
                    <span className="absolute bottom-1 right-1.5 bg-black bg-opacity-80 text-white text-xs px-1.5 py-0.5 rounded">
                      {item.duration}
                    </span>
                  </div>
                  <div className="p-2">
                    <h4 className="text-white text-sm font-medium truncate">
                      {item.title}
                    </h4>
                    <p className="text-xs text-gray-400 mt-1 line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}

export default TanauanCityTVSection;