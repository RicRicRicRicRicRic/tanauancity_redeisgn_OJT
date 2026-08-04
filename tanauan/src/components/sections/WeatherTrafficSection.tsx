import React, { useState, useEffect } from 'react';

interface WeatherData {
  temperature: number;
  humidity: number;
  windSpeed: number;
  weatherCode: number;
  lastUpdated: string;
}

function WeatherTrafficSection() {
  const [activeRadar, setActiveRadar] = useState<'rain' | 'wind' | 'temp'>('rain');
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // Tanauan, Batangas Coordinates
  const LAT = 14.0862;
  const LON = 121.1481;

  const radarLayers = {
    rain: `https://embed.windy.com/embed.html?type=map&location=coordinates&metricRain=default&metricTemp=%C2%B0C&metricWind=default&zoom=9&overlay=rain&product=ecmwf&level=surface&lat=${LAT}&lon=${LON}`,
    wind: `https://embed.windy.com/embed.html?type=map&location=coordinates&metricRain=default&metricTemp=%C2%B0C&metricWind=default&zoom=9&overlay=wind&product=ecmwf&level=surface&lat=${LAT}&lon=${LON}`,
    temp: `https://embed.windy.com/embed.html?type=map&location=coordinates&metricRain=default&metricTemp=%C2%B0C&metricWind=default&zoom=9&overlay=temp&product=ecmwf&level=surface&lat=${LAT}&lon=${LON}`,
  };

  // Fetch real-time weather data from Open-Meteo
  useEffect(() => {
    async function fetchLiveWeather() {
      try {
        const response = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${LAT}&longitude=${LON}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m`
        );
        const data = await response.json();
        
        if (data.current) {
          setWeatherData({
            temperature: Math.round(data.current.temperature_2m),
            humidity: data.current.relative_humidity_2m,
            windSpeed: Math.round(data.current.wind_speed_10m),
            weatherCode: data.current.weather_code,
            lastUpdated: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          });
        }
      } catch (error) {
        console.error('Error fetching live weather:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchLiveWeather();
    const interval = setInterval(fetchLiveWeather, 300000);
    return () => clearInterval(interval);
  }, []);

  const getAdvisoryText = (code?: number) => {
    if (code === undefined) return 'Monitoring regional weather conditions...';
    if (code === 0) return 'Clear skies reported across Tanauan City and neighboring highways. Excellent travel conditions.';
    if (code >= 1 && code <= 3) return 'Partly cloudy skies overhead. Normal traffic and travel flow expected.';
    if (code >= 51 && code <= 67) return 'Light rain showers detected in the region. Drive safely and keep headlights on.';
    if (code >= 80 && code <= 82) return 'Rain showers active in local transit corridors. Expect wet road conditions.';
    if (code >= 95) return 'Severe weather / thunderstorm alert in the vicinity. Exercise extra caution on primary highways.';
    return 'Moderate regional weather conditions. Traffic flow normal.';
  };

  return (
    <section 
      id="weather-traffic" 
      className="relative w-full py-12 px-4 sm:px-6 lg:px-12 bg-slate-50 text-slate-900 overflow-hidden"
    >
      {/* Subtle Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-200/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col gap-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-4 border-b border-slate-200">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 border border-sky-200 text-sky-800 text-xs font-semibold tracking-wider uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Live Monitoring • Tanauan City
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              Weather &amp; Traffic Command Center
            </h2>
          </div>

          {/* Real-Time Metrics Bar */}
          <div className="flex items-center gap-4 bg-white/80 backdrop-blur-md border border-slate-200 shadow-sm rounded-xl px-4 py-2 text-xs text-slate-700">
            <div className="text-center">
              <span className="block text-slate-500 font-medium">Temperature</span>
              <span className="font-bold text-sky-600">
                {loading ? '--' : `${weatherData?.temperature}°C`}
              </span>
            </div>
            <div className="h-6 w-px bg-slate-200" />
            <div className="text-center">
              <span className="block text-slate-500 font-medium">Humidity</span>
              <span className="font-bold text-sky-600">
                {loading ? '--' : `${weatherData?.humidity}%`}
              </span>
            </div>
            <div className="h-6 w-px bg-slate-200" />
            <div className="text-center">
              <span className="block text-slate-500 font-medium">Wind Speed</span>
              <span className="font-bold text-emerald-600">
                {loading ? '--' : `${weatherData?.windSpeed} km/h`}
              </span>
            </div>
          </div>
        </div>

        {/* Dynamic Live Advisory Banner */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 px-4 flex items-center justify-between gap-3 text-amber-900 text-xs sm:text-sm shadow-sm">
          <p>
            <strong className="font-semibold text-amber-800 uppercase tracking-wider text-xs mr-2">Live Advisory:</strong>
            {loading ? 'Fetching current meteorological alerts...' : getAdvisoryText(weatherData?.weatherCode)}
          </p>
          {weatherData?.lastUpdated && (
            <span className="hidden sm:inline-block text-xs font-mono font-bold whitespace-nowrap text-amber-800">
              Updated {weatherData.lastUpdated}
            </span>
          )}
        </div>

        {/* Main 3-Column Dashboard Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          
          {/* Card 1: Meteoblue 4-Day Forecast */}
          <div className="bg-white/90 backdrop-blur-md border border-slate-200/80 rounded-2xl p-4 shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-100">
              <h3 className="text-base font-bold text-slate-800">4-Day Forecast</h3>
            </div>

            <div className="w-full h-[420px] rounded-xl overflow-hidden bg-slate-50 border border-slate-200">
              <iframe
                title="meteoblue Weather Forecast"
                src="https://www.meteoblue.com/en/weather/widget/three/tanauan_philippines_1682490?geoloc=fixed&nocurrent=0&noforecast=0&days=4&tempunit=CELSIUS&windunit=KILOMETER_PER_HOUR&layout=light"
                className="w-full h-full border-0"
                scrolling="no"
              ></iframe>
            </div>
          </div>

          {/* Card 2: Interactive Radar Map */}
          <div className="bg-white/90 backdrop-blur-md border border-slate-200/80 rounded-2xl p-4 shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-100">
              <h3 className="text-base font-bold text-slate-800">Interactive Radar</h3>
              
              <div className="flex bg-slate-100 p-1 rounded-lg border border-slate-200 text-[11px]">
                <button
                  onClick={() => setActiveRadar('rain')}
                  className={`px-2 py-0.5 rounded transition ${
                    activeRadar === 'rain' ? 'bg-[#901c1c] text-white font-semibold shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Rain
                </button>
                <button
                  onClick={() => setActiveRadar('wind')}
                  className={`px-2 py-0.5 rounded transition ${
                    activeRadar === 'wind' ? 'bg-[#901c1c] text-white font-semibold shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Wind
                </button>
                <button
                  onClick={() => setActiveRadar('temp')}
                  className={`px-2 py-0.5 rounded transition ${
                    activeRadar === 'temp' ? 'bg-[#901c1c] text-white font-semibold shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Temp
                </button>
              </div>
            </div>

            <div className="w-full h-[420px] rounded-xl overflow-hidden bg-slate-50 border border-slate-200">
              <iframe
                title="Windy Weather Radar"
                src={radarLayers[activeRadar]}
                className="w-full h-full border-0"
              ></iframe>
            </div>
          </div>

          {/* Card 3: Traffic Conditions */}
          <div className="bg-white/90 backdrop-blur-md border border-slate-200/80 rounded-2xl p-4 shadow-sm flex flex-col justify-between md:col-span-2 lg:col-span-1">
            <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-100">
              <h3 className="text-base font-bold text-slate-800">Traffic Conditions</h3>
            </div>

            <div className="w-full h-[420px] rounded-xl overflow-hidden bg-slate-50 border border-slate-200">
              <iframe
                title="Waze Live Map"
                src={`https://embed.waze.com/iframe?zoom=13&lat=${LAT}&lon=${LON}&ct=livemap`}
                className="w-full h-full border-0"
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default WeatherTrafficSection;