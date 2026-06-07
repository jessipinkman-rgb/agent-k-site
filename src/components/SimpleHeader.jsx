import { useState } from 'react'
import { Link } from 'react-router-dom'
import logoImg from '../assets/logo.png'
import homeIcon from '../assets/icon_home.svg'
import closeIcon from '../assets/close.svg'

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
      <header className="sticky top-0 z-[50] border-b border-[rgba(255,255,255,.2)] bg-white shadow-[0_1px_5px_0_#000]">
        <div className="relative flex h-[55px] w-full items-center justify-between px-[15px] text-center md:h-[100px] md:px-[20px]">
          <div className="absolute left-[15px] top-0 z-20 flex h-[55px] w-[60px] items-center text-left md:left-[20px] md:h-[100px] md:w-[100px]"><Link to="/" className="block" onClick={() => setMobileMenuOpen(false)}><img src={logoImg} alt="logo" className="h-auto w-[55px] object-contain md:w-[90px]" /></Link></div>
          <div className="pointer-events-none absolute inset-x-[80px] top-0 flex h-[55px] items-center justify-center text-[16px] leading-none tracking-[-1.5px] text-black md:inset-x-[130px] md:h-[100px] md:text-[30px] md:leading-none md:tracking-normal">
            <Link to="/" className="pointer-events-auto flex items-center gap-[6px] md:gap-[10px]">
              <img src={homeIcon} alt="" className="w-[22px] self-center md:w-[42px]" />
              <span className="font-light">AGENTK</span>
              <strong className="font-bold">에이전트케이</strong>
            </Link>
          </div>
          <div className="absolute right-[10px] top-0 z-20 flex h-[55px] w-[35px] items-center justify-center md:right-[20px] md:h-[100px]">
            <button type="button" onClick={() => setMobileMenuOpen(true)} className="p-0">
              <svg className="h-[50px] w-[24px] md:h-[100px] md:w-[36px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
            </button>
          </div>
        </div>
      </header>

      {/* 모바일 메뉴 팝업 */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[200] bg-[rgba(0,0,0,0.78)]" onClick={() => setMobileMenuOpen(false)}>
          <div className="relative min-h-screen w-[338px] max-w-[82vw] bg-[#0072ce]" onClick={(e) => e.stopPropagation()}>
            <button type="button" onClick={() => setMobileMenuOpen(false)} className="absolute right-[14px] top-[14px] z-10 h-[28px] w-[28px]">
              <img src={closeIcon} alt="닫기" className="h-full w-full brightness-0 invert" />
            </button>

            <div className="px-[22px] pt-[66px]">
              <div className="border-t border-[rgba(255,255,255,0.28)]">
                <div className="border-b border-[rgba(255,255,255,0.28)] py-[22px] text-left font-['Noto_Sans_KR','dotum',sans-serif] text-white">
                  <h3 className="mb-[15px] text-[18px] font-bold leading-none tracking-[-1px]">예약환전</h3>
                  <div className="space-y-[13px]">
                    <Link to="/" onClick={() => setMobileMenuOpen(false)} className="block text-[16px] font-medium leading-none tracking-[-1px] text-white">- 즉시환전예약</Link>
                    <Link to="/custom-exchange" onClick={() => setMobileMenuOpen(false)} className="block text-[16px] font-medium leading-none tracking-[-1px] text-white">- 1:1맞춤환전예약</Link>
                    <Link to="/reservation-history" onClick={() => setMobileMenuOpen(false)} className="block text-[16px] font-medium leading-none tracking-[-1px] text-white">- 예약내역확인</Link>
                  </div>
                </div>

                {menuItems.map((menu, idx) => (
                <div key={idx} className="border-b border-[rgba(255,255,255,0.28)] py-[22px] text-left font-['Noto_Sans_KR','dotum',sans-serif] text-white">
                  <h3 className="mb-[15px] text-[18px] font-bold leading-none tracking-[-1px]">
                    {menu.title}
                  </h3>
                  <div className="space-y-[13px]">
                    {menu.items.map((item, i) => (
                      <Link 
                        key={i} 
                        to={item.path} 
                        onClick={() => setMobileMenuOpen(false)} 
                        className="block text-[16px] font-medium leading-none tracking-[-1px] text-white"
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
        </div>
      )}
    </>
  )
}