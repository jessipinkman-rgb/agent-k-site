import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SimpleHeader from './components/SimpleHeader'
import FloatingButton from './components/FloatingButton'
import Home from './pages/Home'
import CustomExchange from './pages/CustomExchange'
import AgentKIntro from './pages/AgentKIntro'
import Notice from './pages/Notice'
import FAQ from './pages/FAQ'
import ExchangeGuide from './pages/ExchangeGuide'
import PrivacyPolicy from './pages/PrivacyPolicy'
import ReservationHistory from './pages/ReservationHistory'

function App() {
  return (
    <Router>
      <SimpleHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/custom-exchange" element={<CustomExchange />} />
        <Route path="/shop01" element={<AgentKIntro />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/info01" element={<ExchangeGuide />} />
        <Route path="/policy" element={<PrivacyPolicy />} />
        <Route path="/reservation-history" element={<ReservationHistory />} />
      </Routes>
      <FloatingButton />
    </Router>
  )
}

export default App
