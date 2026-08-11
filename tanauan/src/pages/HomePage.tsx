import HeroSection from '../components/sections/Home-page/HeroSection.tsx'
import CityServicesSection from '../components/sections/Home-page/CityServicesSection.tsx'
import DigitalCityServicesSection from '../components/sections/Home-page/DigitalCityServicesSection.tsx'
import GadTanauanSection from '../components/sections/Home-page/GadTanauan.tsx'
import LatestNewsSection from '../components/sections/Home-page/LatestNewsSection.tsx'
import SonnyAllSection from '../components/sections/Home-page/SonnyAllSection.tsx'
import AnnouncementsEventsSection from '../components/sections/Home-page/AnnouncementsEventsSection.tsx'
import WeatherTrafficSection from '../components/sections/Home-page/WeatherTrafficSection.tsx'
import MayorSection from '../components/sections/Home-page/Mayor.tsx'
import UlatTanauanSection from '../components/sections/Home-page/UlatTanauanSection.tsx'
import GovernmentLinksSection from '../components/sections/Home-page/GovernmentLinksSection.tsx'
import EmergencyHotlinesSection from '../components/sections/Home-page/EmergencyHotlinesSection.tsx'
import PlanningDocumentsSection from '../components/sections/Home-page/PlanningDocumentsSection.tsx'
import TanauanEServicesSection from '../components/sections/Home-page/TanauanEServicesSection.tsx'
import CulturalHeritageSection from '../components/sections/Home-page/CulturalHeritageSection.tsx'
import PeoplesCornerSection from '../components/sections/Home-page/PeoplesCornerSection.tsx'
import TanauanCityTVSection from '../components/sections/Home-page/TanauanCityTVSection.tsx'
import StatusUpdates2025Section from '../components/sections/Home-page/StatusUpdates2025Section.tsx'
import Footer from '../components/layout/Footer.tsx'

function HomePage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <HeroSection />

      {/* Solid background wrapper to cover fixed video when scrolling */}
      <div className="relative bg-white z-10">
        {/* City Services */}
        <CityServicesSection />

      {/* Digital City Services */}
      <DigitalCityServicesSection />

        {/* Gad Tanauan Services */}
      <GadTanauanSection />

      {/* Latest News and Publication */}
      <LatestNewsSection />

      {/* Sonny All */}
      <SonnyAllSection />

      {/* Announcement and Events */}
      <AnnouncementsEventsSection />

      {/* Weather and Traffic Updates */}
      <WeatherTrafficSection />

      {/* Mayor Section */}
      <MayorSection />

      {/* New on Ulat Tanauan */}
      <UlatTanauanSection />


      {/* Other Government Website Links */}
      <GovernmentLinksSection />

      {/* Emergency Hotlines */}
      <EmergencyHotlinesSection />

      {/* City Planning Documents */}
      <PlanningDocumentsSection />

      {/* Tanauan City eServices */}
      <TanauanEServicesSection />

      {/* Cultural Heritage Sites */}
      <CulturalHeritageSection />

      {/* Peoples Corner */}
      <PeoplesCornerSection />

      {/* Tanauan City TV */}
      <TanauanCityTVSection />

      {/* Status Updates as of 2025 */}
      <StatusUpdates2025Section />

      {/* Footer */}
      <Footer />
      </div>
    </main>
  )
}

export default HomePage