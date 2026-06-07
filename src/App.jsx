import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SimpleHeader from './components/SimpleHeader'
import Home from './pages/Home'
import AgentKIntro from './pages/AgentKIntro'
import Notice from './pages/Notice'
import FAQ from './pages/FAQ'
import ExchangeGuide from './pages/ExchangeGuide'
import PrivacyPolicy from './pages/PrivacyPolicy'

function App() {
  return (
    <Router>
      <SimpleHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop01" element={<AgentKIntro />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/info01" element={<ExchangeGuide />} />
        <Route path="/policy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  )
}

export default App
