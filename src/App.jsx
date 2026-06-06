import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SimpleHeader from './components/SimpleHeader'
import Footer from './components/Footer'
// 1. FloatingButton 임포트 추가 (경로가 components 폴더에 있다고 가정)
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
      <div className="flex flex-col min-h-screen bg-white">
        <SimpleHeader />
        <main className="flex-1">
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
        </main>
        <Footer />
        
        {/* 2. 여기에 배치하면 모든 페이지 하단 우측에 항상 고정됩니다 */}
        <FloatingButton />
      </div>
    </Router>
  )
}

export default App