import { useState } from 'react';

function TanauanCityTVSection() {
  const [isHovering, setIsHovering] = useState(false);
  const [currentVideoId, setCurrentVideoId] = useState('2mqRRGkbkc0');
  
  const playlistItems = [
    {
      id: 1,
      title: "Tanauan City Video 1",
      duration: "0:00",
      videoId: "2mqRRGkbkc0",
      description: "Tanauan City TV Video"
    },
    {
      id: 2,
      title: "Tanauan City Video 2",
      duration: "0:00",
      videoId: "Whv42_oz4bQ",
      description: "Tanauan City TV Video"
    },
    {
      id: 3,
      title: "Tanauan City Video 3",
      duration: "0:00",
      videoId: "NOqAoiiyn2s",
      description: "Tanauan City TV Video"
    },
    {
      id: 4,
      title: "Tanauan City Video 4",
      duration: "0:00",
      videoId: "BjICDZ1qkbA",
      description: "Tanauan City TV Video"
    },
    {
      id: 5,
      title: "Tanauan City Video 5",
      duration: "0:00",
      videoId: "FQlLdRThpug",
      description: "Tanauan City TV Video"
    },
    {
      id: 6,
      title: "Tanauan City Video 6",
      duration: "0:00",
      videoId: "YFL-qbitRN8",
      description: "Tanauan City TV Video"
    },
    {
      id: 7,
      title: "Tanauan City Video 7",
      duration: "0:00",
      videoId: "yukQzNh0MnQ",
      description: "Tanauan City TV Video"
    },
    {
      id: 8,
      title: "Tanauan City Video 8",
      duration: "0:00",
      videoId: "ntrAtyccNyw",
      description: "Tanauan City TV Video"
    },
    {
      id: 9,
      title: "Tanauan City Video 9",
      duration: "0:00",
      videoId: "1HnXZl73u3M",
      description: "Tanauan City TV Video"
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
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-6">
          Tanauan City TV
        </h2>

        {/* Main Content Area - Video Player with Hoverable Playlist Overlay */}
        <div className="flex-1 flex items-center justify-center max-w-6xl mx-auto w-full min-h-0 relative">
        {/* Main YouTube Video Player with Hover Trigger */}
          <div 
            className="w-full max-w-3xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl"
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

          {/* Vertical Playlist Overlay */}
          <div 
            className={`absolute -right-16 top-0 h-full w-64 bg-gray-900 bg-opacity-95 backdrop-blur-sm transform transition-all duration-300 ease-in-out ${
              isHovering ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
            }`}
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