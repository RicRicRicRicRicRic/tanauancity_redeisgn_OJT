import HeroSection from '../components/sections/HeroSection.tsx'
import CityServicesSection from '../components/sections/CityServicesSection.tsx'
import DigitalCityServicesSection from '../components/sections/DigitalCityServicesSection.tsx'
import GadTanauanSection from '../components/sections/GadTanauan.tsx'
import LatestNewsSection from '../components/sections/LatestNewsSection.tsx'
import SonnyAllSection from '../components/sections/SonnyAllSection.tsx'
import AnnouncementsEventsSection from '../components/sections/AnnouncementsEventsSection.tsx'
import WeatherTrafficSection from '../components/sections/WeatherTrafficSection.tsx'
import MayorSection from '../components/sections/Mayor.tsx'
import UlatTanauanSection from '../components/sections/UlatTanauanSection.tsx'
import GovernmentLinksSection from '../components/sections/GovernmentLinksSection.tsx'
import EmergencyHotlinesSection from '../components/sections/EmergencyHotlinesSection.tsx'
import PlanningDocumentsSection from '../components/sections/PlanningDocumentsSection.tsx'
import TanauanEServicesSection from '../components/sections/TanauanEServicesSection.tsx'
import CulturalHeritageSection from '../components/sections/CulturalHeritageSection.tsx'
import PeoplesCornerSection from '../components/sections/PeoplesCornerSection.tsx'
import TanauanCityTVSection from '../components/sections/TanauanCityTVSection.tsx'
import StatusUpdates2025Section from '../components/sections/StatusUpdates2025Section.tsx'

function HomePage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <HeroSection />

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

      {/* In the Service of Our People */}
      <ServiceOfOurPeopleSection />

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
    </main>
  )
}

export default HomePage