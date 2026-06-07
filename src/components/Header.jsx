import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="w-10 h-10 bg-primary-orange rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">₩</span>
            </div>
            <span className="font-bold text-lg text-gray-900 hidden sm:inline">Money Box KJM</span>
            <span className="font-bold text-base text-gray-900 sm:hidden">KJM</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('exchange')} 
              className="text-gray-700 hover:text-primary-orange font-medium transition"
            >
              오늘의 환율
            </button>
            <button 
              onClick={() => scrollToSection('location')} 
              className="text-gray-700 hover:text-primary-orange font-medium transition"
            >
              오시는 길
            </button>
            <button 
              className="bg-primary-orange text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary-orange-dark transition"
              onClick={() => window.open('https://pf.kakao.com/_Yxkxds/chat', '_blank')}
            >
              상담 신청
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-gray-200">
            <button 
              onClick={() => scrollToSection('exchange')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 font-medium"
            >
              오늘의 환율
            </button>
            <button 
              onClick={() => scrollToSection('location')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 font-medium"
            >
              오시는 길
            </button>
            <button 
              className="block w-full text-left px-4 py-2 bg-primary-orange text-white font-semibold rounded m-2"
              onClick={() => {
                window.open('https://pf.kakao.com/_Yxkxds/chat', '_blank')
                setMobileMenuOpen(false)
              }}
            >
              상담 신청
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}
