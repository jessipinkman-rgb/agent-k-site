export default function LocationSection() {
  const branches = [
    {
      name: '명동 지점 (본점)',
      address: '서울시 중구 명동길 72-1',
      phone: '02-2128-1234',
      hours: '평일 10:00~19:00 | 토 10:00~18:00 | 일 12:00~18:00',
      mapUrl: 'https://goo.gl/maps/placeholder1',
      directions: 'Line 4 명동역 5번 출구 도보 3분'
    },
    {
      name: '남대문 지점',
      address: '서울시 중구 남대문로 76',
      phone: '02-2128-1235',
      hours: '평일 10:00~19:00 | 토 10:00~18:00 | 일 12:00~18:00',
      mapUrl: 'https://goo.gl/maps/placeholder2',
      directions: 'Line 1, 2 시청역 2번 출구 도보 5분'
    }
  ]

  return (
    <section id="location" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            오시는 길
          </h2>
          <p className="text-lg text-gray-600">
            명동/남대문의 황금 위치에서 편하게 만나세요
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {branches.map((branch, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm border-l-4 border-primary-orange hover:shadow-md transition-shadow">
              <div className="w-full h-64 bg-orange-100 flex items-center justify-center relative overflow-hidden group border-b-4 border-primary-orange">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%22100%22%20height=%22100%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Crect%20fill=%22%23f3f4f6%22%20width=%22100%22%20height=%22100%22/%3E%3Cpath%20d=%22M50%2020%20L80%2080%20L20%2080%20Z%22%20fill=%22%23d4af37%22/%3E%3C/svg%3E')] opacity-50"></div>
                <div className="relative z-10 text-center">
                  <p className="text-6xl mb-3">📍</p>
                  <p className="text-gray-600 font-semibold">지도 프리뷰</p>
                  <p className="text-sm text-gray-500 mt-2">{branch.name}</p>
                </div>
                <a 
                  href={branch.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 bg-deep-blue bg-opacity-0 hover:bg-opacity-20 transition-all flex items-center justify-center opacity-0 hover:opacity-100 group-hover:opacity-100"
                >
                  <button className="bg-gold text-deep-blue px-6 py-2 rounded-lg font-bold">
                    지도 열기
                  </button>
                </a>
              </div>

              {/* Branch Info */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-deep-blue mb-4">
                  {branch.name}
                </h3>

                {/* Address */}
                <div className="mb-4 pb-4 border-b border-gray-200">
                  <p className="text-sm text-gray-600 mb-1">📍 주소</p>
                  <p className="text-lg font-semibold text-gray-800">{branch.address}</p>
                </div>

                {/* Hours */}
                <div className="mb-4 pb-4 border-b border-gray-200">
                  <p className="text-sm text-gray-600 mb-1">🕐 영업시간</p>
                  <p className="text-gray-800 text-sm leading-relaxed">{branch.hours}</p>
                </div>

                {/* Directions */}
                <div className="mb-6 pb-6 border-b border-gray-200">
                  <p className="text-sm text-gray-600 mb-1">🚇 대중교통</p>
                  <p className="text-gray-800 font-medium">{branch.directions}</p>
                </div>

                {/* Phone */}
                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-1">📞 전화</p>
                  <a href={`tel:${branch.phone}`} className="text-lg font-bold text-gold hover:text-light-gold">
                    {branch.phone}
                  </a>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a 
                    href={`tel:${branch.phone}`}
                    className="flex-1 bg-blue-50 text-blue-700 py-3 rounded-lg font-semibold text-center hover:bg-blue-100 transition"
                  >
                    전화하기
                  </a>
                  <button 
                    onClick={() => window.open('https://pf.kakao.com/_Yxkxds/chat', '_blank')}
                    className="flex-1 bg-yellow-50 text-yellow-700 py-3 rounded-lg font-semibold hover:bg-yellow-100 transition"
                  >
                    카톡 상담
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-900 text-white rounded-xl p-8 md:p-12 border-l-4 border-primary-orange">
          <h3 className="text-2xl font-bold mb-6">📋 환전 시 필요한 서류</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold text-primary-orange mb-3">개인 환전 (USD, JPY 등)</h4>
              <ul className="space-y-2 text-gray-300">
                <li>✓ 신분증 (주민등록증, 여권, 운전면허증)</li>
                <li>✓ 통장 사본 (송금 시)</li>
                <li>✓ 외환신고서 (고액 거래 시)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-primary-orange mb-3">법인 환전</h4>
              <ul className="space-y-2 text-gray-300">
                <li>✓ 사업자등록증</li>
                <li>✓ 법인 통장 사본</li>
                <li>✓ 외환신고서</li>
              </ul>
            </div>
          </div>
          <p className="mt-6 text-sm text-gray-400">
            * 상기 서류는 정보 제공용이며, 실제 필요 서류는 거래 시 정확히 안내됩니다.
          </p>
        </div>
      </div>
    </section>
  )
}
