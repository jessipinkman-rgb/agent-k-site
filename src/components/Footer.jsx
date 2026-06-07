export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300 border-t-4 border-primary-orange">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center">
                <span className="text-deep-blue font-bold">₩</span>
              </div>
              <span className="font-bold text-lg text-white">Money Box KJM</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              명동/남대문의 신뢰할 수 있는 환전소. 15년의 경력과 신뢰로 최고의 환전 서비스를 제공합니다.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white mb-4">빠른 링크</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-gold transition">
                  홈
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('exchange')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-primary-orange transition">
                  환율 정보
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('location')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-primary-orange transition">
                  오시는 길
                </button>
              </li>
              <li>
                <button onClick={() => window.open('https://pf.kakao.com/_Yxkxds/chat', '_blank')} className="hover:text-primary-orange transition">
                  상담 신청
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-white mb-4">연락처</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <span>📍</span>
                <span>명동 지점: 02-2128-1234</span>
              </li>
              <li className="flex items-start gap-2">
                <span>📍</span>
                <span>남대문 지점: 02-2128-1235</span>
              </li>
              <li className="flex items-start gap-2">
                <span>💬</span>
                <span>카카오톡 상담 24/7</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-bold text-white mb-4">영업시간</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between">
                <span>평일</span>
                <span className="text-gold">10:00~19:00</span>
              </li>
              <li className="flex justify-between">
                <span>토요일</span>
                <span className="text-primary-orange">10:00~18:00</span>
              </li>
              <li className="flex justify-between">
                <span>일요일</span>
                <span className="text-primary-orange">12:00~18:00</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <div>
            <p>&copy; {currentYear} Money Box KJM. All rights reserved.</p>
          </div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary-orange transition">개인정보처리방침</a>
            <a href="#" className="hover:text-primary-orange transition">이용약관</a>
            <a href="#" className="hover:text-primary-orange transition">고객문의</a>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 p-4 bg-orange-900 rounded text-xs text-gray-300 border border-primary-orange">
          <p className="font-semibold text-primary-orange mb-2">⚠️ 공지사항</p>
          <p>
            본 사이트의 환율 정보는 참고용입니다. 실제 환전 시 환율은 변동될 수 있습니다. 
            정확한 환율 및 수수료는 방문 시 또는 전화/카톡 상담 시 확인해주시기 바랍니다.
            환전은 외환거래 규정을 준수하여 진행됩니다.
          </p>
        </div>
      </div>
    </footer>
  )
}
