import { useState } from 'react'

export default function FloatingButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Floating Menu */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 bg-white rounded-2xl shadow-2xl z-40 border-2 border-primary-orange overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-primary-orange text-white p-6 flex justify-between items-start">
            <div>
              <h3 className="font-bold text-lg">KJM 상담</h3>
              <p className="text-sm text-white opacity-90">지금 바로 상담받으세요!</p>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white hover:opacity-70"
            >
              ✕
            </button>
          </div>

          {/* Content */}
          <div className="p-6 space-y-4">
            {/* Consultation Hours */}
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <p className="text-xs text-gray-600 font-semibold mb-2">상담 가능 시간</p>
              <p className="text-sm text-blue-700 font-bold">24/7 상시 상담 중</p>
              <p className="text-xs text-gray-600 mt-1">급한 일은 전화 문의 권장</p>
            </div>

            {/* Quick Contact */}
            <div className="space-y-3">
              <p className="text-sm font-semibold text-gray-900">빠른 연락처</p>
              <div className="grid grid-cols-2 gap-3">
                <a 
                  href="tel:0221281234"
                  className="p-3 bg-blue-50 border border-blue-200 rounded-lg text-center hover:bg-blue-100 transition"
                >
                  <p className="text-xs text-gray-600 mb-1">명동 지점</p>
                  <p className="text-sm font-bold text-blue-700">02-2128-1234</p>
                </a>
                <a 
                  href="tel:0221281235"
                  className="p-3 bg-blue-50 border border-blue-200 rounded-lg text-center hover:bg-blue-100 transition"
                >
                  <p className="text-xs text-gray-600 mb-1">남대문 지점</p>
                  <p className="text-sm font-bold text-blue-700">02-2128-1235</p>
                </a>
              </div>
            </div>

            {/* KakaoTalk Button */}
            <a 
              href="https://pf.kakao.com/_Yxkxds/chat"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-yellow-300 text-yellow-900 py-3 rounded-lg font-bold text-center hover:bg-yellow-400 transition block"
            >
              💬 카카오톡 상담 시작
            </a>
          </div>
        </div>
      )}

      {/* Main Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-primary-orange text-white rounded-full shadow-2xl flex items-center justify-center font-bold text-2xl hover:bg-primary-orange-dark transition-all hover:scale-110 z-50 border-4 border-white"
        title="카카오톡 상담"
      >
        💬
      </button>

      {/* Info Badge */}
      {!isOpen && (
        <div className="fixed bottom-24 right-6 bg-gray-900 text-white px-4 py-2 rounded-lg shadow-lg z-40 animate-pulse">
          <p className="text-xs font-semibold">상담하기 ↓</p>
        </div>
      )}
    </>
  )
}
