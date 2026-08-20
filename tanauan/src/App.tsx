import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/ui/Navbar'
import HomePage from './pages/HomePage'
import EServicesPage from './pages/EServicesPage'
import TransparencyPage from './pages/TransparencyPage'
import AlertsPage from './pages/AlertsPage'
import NewsAndPublications from './components/the_city__tab/news_and_publication'
import Barangay from './components/the_city__tab/barangay'
import CitizensCharter from './components/government_tab/citizens_charter'
import CityOfficials from './components/government_tab/city_officials'
import Departments from './components/government_tab/departments'
import Investors from './components/government_tab/investors'
import MissionAndVision from './components/government_tab/mission_and_vision'
import SanguniangPanglungsod from './components/government_tab/sanguniang_panglungsod'
import CityPlanning from './components/services_tab/city_planning'
import CSWDServices from './components/services_tab/cswd_services'
import EducationalAssistance from './components/services_tab/educational_assistance'
import PWDServices from './components/services_tab/pwd_services'
import SafetySealProgram from './components/services_tab/safety_seal_program'
import SeniorCitizensBenefits from './components/services_tab/senior_citizen_benefits'
import History from './components/tourism_tab/history'
import Destination from './components/tourism_tab/destination'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/e-services" element={<EServicesPage />} />
        <Route path="/transparency" element={<TransparencyPage />} />
        <Route path="/alerts" element={<AlertsPage />} />
        <Route path="/news_and_publications" element={<NewsAndPublications />} />
        <Route path="/barangays" element={<Barangay />} />
        <Route path="/citizens_charter" element={<CitizensCharter />} />
        <Route path="/city_officials" element={<CityOfficials />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/investors" element={<Investors />} />
        <Route path="/mission_and_vision" element={<MissionAndVision />} />
        <Route path="/sanguinang_panglungsod" element={<SanguniangPanglungsod />} />
        <Route path="/city_planning" element={<CityPlanning />} />
        <Route path="/cswd_services" element={<CSWDServices />} />
        <Route path="/educational_assistance" element={<EducationalAssistance />} />
        <Route path="/pwd_id_services" element={<PWDServices />} />
        <Route path="/safety_seal_program" element={<SafetySealProgram />} />
        <Route path="/senior_citizen_id_benefits" element={<SeniorCitizensBenefits />} />
        <Route path="/history" element={<History />} />
        <Route path="/destination" element={<Destination />} />
      </Routes>
    </Router>
  )
}

export default App
