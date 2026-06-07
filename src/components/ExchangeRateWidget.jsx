import { useState, useEffect } from 'react'
import axios from 'axios'

export default function ExchangeRateWidget() {
  const [rates, setRates] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [krwAmount, setKrwAmount] = useState(10000)

  const MARGIN = 1.5
  const CURRENCIES = ['USD', 'JPY', 'TWD', 'HKD', 'CNY', 'EUR']

  useEffect(() => {
    fetchExchangeRates()
  }, [])

  const fetchExchangeRates = async () => {
    try {
      setLoading(true)
      const response = await axios.get('https://api.exchangerate-api.com/v4/latest/KRW', {
        timeout: 5000
      })
      
      const data = response.data
      const ratesData = {}
      
      CURRENCIES.forEach(currency => {
        if (data.rates[currency]) {
          const baseRate = data.rates[currency]
          ratesData[currency] = {
            baseRate: baseRate.toFixed(4),
            marginRate: (baseRate * (1 + MARGIN / 100)).toFixed(4)
          }
        }
      })
      
      setRates(ratesData)
      setError(null)
    } catch (err) {
      const fallbackRates = {
        'USD': { baseRate: '0.00077', marginRate: '0.00078' },
        'JPY': { baseRate: '0.114', marginRate: '0.116' },
        'TWD': { baseRate: '0.0244', marginRate: '0.0248' },
        'HKD': { baseRate: '0.0061', marginRate: '0.0062' },
        'CNY': { baseRate: '0.0111', marginRate: '0.0113' },
        'EUR': { baseRate: '0.00084', marginRate: '0.00085' }
      }
      setRates(fallbackRates)
      setError('실시간 환율 로드 중... (데모 환율 표시)')
    } finally {
      setLoading(false)
    }
  }

  const getCurrencySymbol = (code) => {
    const symbols = { USD: '$', JPY: '¥', CNY: '¥', EUR: '€' }
    return symbols[code] || code
  }

  const calculateExchange = (amount, rate) => {
    return (amount * parseFloat(rate)).toFixed(0)
  }

  if (loading && Object.keys(rates).length === 0) {
    return (
      <section id="exchange" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-12">
            <div className="animate-spin inline-block w-8 h-8 border-4 border-primary-orange border-t-gray-300 rounded-full"></div>
            <p className="mt-4 text-gray-600">환율을 불러오는 중...</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="exchange" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            실시간 환율 계산기
          </h2>
          <p className="text-gray-600">기본 환율에 수수료 마진 {MARGIN}%가 포함된 환전소 전용 환율입니다</p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-yellow-50 border border-yellow-300 rounded-lg text-yellow-800">
            {error}
            <button 
              onClick={fetchExchangeRates}
              className="ml-4 underline font-semibold hover:no-underline"
            >
              다시 시도
            </button>
          </div>
        )}

        <div className="bg-white rounded-lg p-6 mb-8 shadow-sm border border-gray-200">
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            KRW 환전 금액
          </label>
          <div className="flex gap-2">
            <input
              type="number"
              value={krwAmount}
              onChange={(e) => setKrwAmount(Number(e.target.value) || 0)}
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent outline-none"
              placeholder="금액을 입력하세요"
            />
            <span className="px-4 py-3 bg-gray-100 rounded-lg text-gray-700 font-semibold">₩ KRW</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {CURRENCIES.map(currency => {
            const rate = rates[currency]
            if (!rate) return null

            return (
              <div key={currency} className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-primary-orange hover:shadow-md transition">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-sm text-gray-600">
                      {currency === 'USD' && '미국 달러'} 
                      {currency === 'JPY' && '일본 엔'}
                      {currency === 'TWD' && '대만 달러'}
                      {currency === 'HKD' && '홍콩 달러'}
                      {currency === 'CNY' && '중국 위안'}
                      {currency === 'EUR' && '유로'}
                    </p>
                    <p className="text-2xl font-bold text-gray-900">{currency}</p>
                  </div>
                  <span className="text-4xl">{getCurrencySymbol(currency)}</span>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="border-b pb-2">
                    <p className="text-gray-600 text-xs">기본 환율</p>
                    <p className="text-lg font-semibold text-gray-800">1 {currency} = {rate.baseRate} ₩</p>
                  </div>
                  <div className="bg-orange-50 p-3 rounded border border-orange-200">
                    <p className="text-gray-600 mb-1 text-xs">💰 환전소 전용 환율</p>
                    <p className="text-lg font-bold text-primary-orange">1 {currency} = {rate.marginRate} ₩</p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded border border-blue-200">
                    <p className="text-gray-600 text-xs mb-2">₩{krwAmount.toLocaleString()} 환전 시</p>
                    <p className="text-2xl font-bold text-blue-700">
                      {calculateExchange(krwAmount, rate.marginRate)} {currency}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="bg-gray-900 text-white rounded-lg p-8">
          <h3 className="text-xl font-bold mb-4">💡 환전 시 참고사항</h3>
          <ul className="space-y-2 text-gray-300">
            <li>✓ 표시된 환율은 매 시간 업데이트됩니다</li>
            <li>✓ 대량 환전 시 추가 할인 가능 (상담 신청 후 확인)</li>
            <li>✓ 현금 환전, 송금, 수표 등 다양한 환전 방식 제공</li>
            <li>✓ 명동/남대문 지점에서 즉시 환전 가능</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
