import { useState } from 'react'
import { Link } from 'react-router-dom'
import logoImg from '../assets/logo.png'

export default function SimpleHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const menuItems = [
    { title: '에이전트K', items: [{ label: '에이전트K 소개', path: '/shop01' }] },
    { title: '알림게시판', items: [{ label: '공지사항', path: '/notice' }, { label: 'FAQ', path: '/faq' }] },
    { title: '정책 및 이용안내', items: [{ label: '환전예약 이용안내', path: '/info01' }, { label: '개인정보 보호정책', path: '/policy' }] }
  ]

  return (
    <>
      {/* 고정 헤더 */}
      <header className="sticky top-0 z-[50] bg-white border-b border-gray-100 shadow-[0_2px_4px_rgba(0,0,0,0.08)]">
        <div className="flex justify-between items-center px-6 h-[80px]">
          <div className="flex-1 flex justify-start"><Link to="/"><img src={logoImg} alt="logo" className="h-10 w-auto" /></Link></div>
          <div className="flex-1 flex justify-center items-center gap-2 font-semibold text-xl tracking-tight text-gray-900">
            <Link to="/" className="flex items-center gap-2">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
              에이전트K
            </Link>
          </div>
          <div className="flex-1 flex justify-end">
            <button onClick={() => setMobileMenuOpen(true)} className="p-2">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
            </button>
          </div>
        </div>
      </header>

      {/* 모바일 메뉴 팝업 */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[200] bg-white overflow-y-auto" onClick={() => setMobileMenuOpen(false)}>
          {/* 헤더와 완전히 동일한 구조의 상단 닫기 바 */}
          <div className="flex justify-between items-center px-6 h-[80px] border-b border-gray-100">
            <div className="flex-1"></div>
            <div className="flex-1 text-center font-semibold text-xl">메뉴</div>
            <div className="flex-1 flex justify-end">
              <button onClick={() => setMobileMenuOpen(false)} className="p-2">
                <img src="https://moneyboxkjm.com/img/close.svg" alt="close" className="w-10 h-10" />
              </button>
            </div>
          </div>

          <div className="max-w-7xl mx-auto py-12 px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {menuItems.map((menu, idx) => (
                <div key={idx}>
                  <h3 className="text-[20px] font-bold text-gray-900 mb-6 tracking-tight border-b border-gray-200 pb-4">
                    {menu.title}
                  </h3>
                  <div className="space-y-1">
                    {menu.items.map((item, i) => (
                      <Link 
                        key={i} 
                        to={item.path} 
                        onClick={() => setMobileMenuOpen(false)} 
                        className="block text-[18px] text-gray-500 hover:text-black transition-colors"
                      >
                        - {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}