import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/ui/Navbar'
import HomePage from './pages/HomePage'
import EServicesPage from './pages/EServicesPage'
import TransparencyPage from './pages/TransparencyPage'
import AlertsPage from './pages/AlertsPage'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/e-services" element={<EServicesPage />} />
        <Route path="/transparency" element={<TransparencyPage />} />
        <Route path="/alerts" element={<AlertsPage />} />
      </Routes>
    </Router>
  )
}

export default App
