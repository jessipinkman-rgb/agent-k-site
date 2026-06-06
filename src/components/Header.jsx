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
          {/* 로고 영역 생략 (기존과 동일) */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="w-10 h-10 bg-[#f15d3f] rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">₩</span>
            </div>
            <span className="font-bold text-lg text-gray-900">Money Box KJM</span>
          </div>

          {/* 햄버거 버튼 */}
          <button 
            className="p-2 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* 풀스크린 모달 메뉴 */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-[#f15d3f] flex flex-col items-center justify-center text-white">
          {/* 닫기 버튼 */}
          <button 
            className="absolute top-8 right-8 text-white"
            onClick={() => setMobileMenuOpen(false)}
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* 메뉴 리스트 */}
          <nav className="text-center space-y-8">
            <button onClick={() => scrollToSection('exchange')} className="block text-4xl font-bold hover:text-gray-200">오늘의 환율</button>
            <button onClick={() => scrollToSection('location')} className="block text-4xl font-bold hover:text-gray-200">오시는 길</button>
            <button 
              className="block text-4xl font-bold bg-white text-[#f15d3f] px-10 py-3 rounded-full"
              onClick={() => { window.open('https://pf.kakao.com/_Yxkxds/chat', '_blank'); setMobileMenuOpen(false); }}
            >
              상담 신청
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}