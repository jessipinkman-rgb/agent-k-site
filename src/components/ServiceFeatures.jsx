export default function ServiceFeatures() {
  const features = [
    {
      icon: '🏆',
      title: '최저 수수료',
      description: '명동/남대문 지역 최저 수수료로 더 많은 이득을 보세요.',
      highlight: '기본 환율 + 1.5%만 추가'
    },
    {
      icon: '⚡',
      title: '빠른 거래',
      description: '신원 확인 후 평균 5분 이내에 환전 완료. 대기 시간 최소화.',
      highlight: '최소 대기, 최대 효율'
    },
    {
      icon: '🔒',
      title: '안전한 거래',
      description: '엄격한 보안 절차와 실명 거래로 100% 안전하게 진행됩니다.',
      highlight: '신뢰할 수 있는 파트너'
    },
    {
      icon: '📍',
      title: '편리한 위치',
      description: '명동과 남대문의 황금 위치에 2개 지점 운영 중.',
      highlight: '대중교통 접근성 우수'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            MoneyBox KJM만의 특장점
          </h2>
          <p className="text-lg text-gray-600">
            왜 우리 환전소를 선택해야 하는지 한눈에 보세요
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white rounded-xl p-8 hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-primary-orange"
            >
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {feature.description}
              </p>
              <div className="pt-4 border-t border-gray-300">
                <p className="text-sm font-semibold text-primary-orange">
                  ✨ {feature.highlight}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-12 text-white">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-primary-orange mb-2">15+</p>
              <p className="text-gray-300">년간의 신뢰할 수 있는 환전 경력</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-primary-orange mb-2">10,000+</p>
              <p className="text-gray-300">만족한 고객들의 재방문율</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-primary-orange mb-2">24/7</p>
              <p className="text-gray-300">카카오톡으로 언제든 상담 가능</p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            지금 바로 실시간 환율을 확인하고 최고의 환전 서비스를 경험하세요!
          </p>
          <button
            onClick={() => window.open('https://pf.kakao.com/_Yxkxds/chat', '_blank')}
            className="bg-primary-orange text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-orange-dark transition shadow-lg"
          >
            지금 상담 신청하기 →
          </button>
        </div>
      </div>
    </section>
  )
}
