import { useState } from 'react'

export default function FAQ() {
  const [openId, setOpenId] = useState(null)

  const faqs = [
    {
      id: 1,
      question: '환전은 어떻게 신청하나요?',
      answer: '홈페이지의 환전 계산기를 통해 신청하시거나, 직접 방문하여 신청하실 수 있습니다.'
    },
    {
      id: 2,
      question: '환전 수수료는 얼마인가요?',
      answer: '기본 환율에 1.5%의 수수료가 포함되어 있습니다. 대량 환전 시 할인 가능합니다.'
    },
    {
      id: 3,
      question: '환전 처리 시간은 얼마나 걸리나요?',
      answer: '일반적으로 신원 확인 후 5-10분 내에 환전이 완료됩니다.'
    },
    {
      id: 4,
      question: '어떤 통화를 환전할 수 있나요?',
      answer: 'USD, JPY, TWD, HKD, CNY, EUR 등 주요 통화를 환전할 수 있습니다.'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">자주 묻는 질문 (FAQ)</h1>
        
        <div className="space-y-3">
          {faqs.map((faq) => (
            <div key={faq.id} className="bg-white rounded-lg shadow overflow-hidden">
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full px-6 py-4 flex justify-between items-center hover:bg-gray-50 transition"
              >
                <h2 className="text-lg font-bold text-gray-900 text-left">{faq.question}</h2>
                <span className={`text-primary-orange text-2xl transition transform ${openId === faq.id ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              {openId === faq.id && (
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
