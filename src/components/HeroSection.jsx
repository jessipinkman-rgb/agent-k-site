export default function HeroSection() {
  return (
    <section className="bg-white py-12 md:py-16 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Content */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              명동/남대문<br />
              <span className="text-primary-orange">최저 수수료</span><br />
              환전소
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              신뢰할 수 있는 환전 서비스, 빠른 거래, 합리적인 가격.<br />
              Money Box KJM에서 최고의 환전 경험을 누려보세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => document.getElementById('exchange').scrollIntoView({ behavior: 'smooth' })}
                className="bg-primary-orange text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-orange-dark transition shadow-lg"
              >
                실시간 환율 확인
              </button>
              <button 
                onClick={() => window.open('https://pf.kakao.com/_Yxkxds/chat', '_blank')}
                className="border-2 border-primary-orange text-primary-orange px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-50 transition"
              >
                지금 상담하기
              </button>
            </div>
          </div>

          {/* Card Illustration */}
          <div className="hidden md:block">
            <div className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-2xl border-2 border-primary-orange shadow-lg">
              <div className="flex items-center justify-center h-64">
                <div className="text-center">
                  <div className="text-6xl mb-4">💱</div>
                  <p className="text-2xl font-bold text-gray-900">환율 계산</p>
                  <p className="text-gray-600 mt-2">실시간 가격으로 환전</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
