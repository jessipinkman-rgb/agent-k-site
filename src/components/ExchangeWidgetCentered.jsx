import { useState, useEffect } from 'react'
import axios from 'axios'

export default function ExchangeWidgetCentered() {
  const [mainTab, setMainTab] = useState('instant') // instant, custom, check
  const [exchangeType, setExchangeType] = useState('send') // send: 원화->외화, receive: 외화->원화
  const [selectedCurrency, setSelectedCurrency] = useState('USD')
  const [exchangeRate, setExchangeRate] = useState(0)
  const [amount, setAmount] = useState('')
  const [resultAmount, setResultAmount] = useState('')
  const [loading, setLoading] = useState(true)

  const MARGIN = 1.5
  const CURRENCIES = {
    'USD': { name: '미국 달러', symbol: '$' },
    'JPY': { name: '일본 엔', symbol: '¥' },
    'TWD': { name: '대만 달러', symbol: '$' },
    'HKD': { name: '홍콩 달러', symbol: '🇭🇰 $' },
    'MOP': { name: '마카오 파타카', symbol: '🇲🇴 MOP' },
    'CNY': { name: '중국 위안', symbol: '¥' },
    'EUR': { name: '유로', symbol: '€' }
  }

  useEffect(() => {
    fetchExchangeRate(selectedCurrency)
  }, [selectedCurrency])

  const fetchExchangeRate = async (currency) => {
    try {
      setLoading(true)
      const response = await axios.get('https://api.exchangerate-api.com/v4/latest/KRW', {
        timeout: 5000
      })
      const baseRate = response.data.rates[currency]
      const marginRate = baseRate * (1 + MARGIN / 100)
      setExchangeRate(marginRate)
      setLoading(false)
    } catch (err) {
      const fallbackRates = {
        'USD': 0.00078,
        'JPY': 0.116,
        'TWD': 0.0248,
        'HKD': 0.0062,
        'MOP': 0.0063,
        'CNY': 0.0113,
        'EUR': 0.00085
      }
      setExchangeRate(fallbackRates[currency] || 0.00078)
      setLoading(false)
    }
  }

  const handleAmountChange = (e) => {
    const value = e.target.value
    setAmount(value)

    if (value && exchangeRate) {
      if (exchangeType === 'send') {
        // 원화 -> 외화
        const result = (parseFloat(value) * exchangeRate).toFixed(2)
        setResultAmount(result)
      } else {
        // 외화 -> 원화
        const result = (parseFloat(value) / exchangeRate).toFixed(0)
        setResultAmount(result)
      }
    } else {
      setResultAmount('')
    }
  }

  return (
    <section className="py-12 md:py-20 bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-2xl mx-auto px-4">
        {/* Main Tab Navigation */}
        <div className="flex gap-2 mb-8 justify-center flex-wrap">
          <button
            onClick={() => setMainTab('instant')}
            className={`px-6 py-2 rounded-lg font-semibold transition ${
              mainTab === 'instant'
                ? 'bg-primary-orange text-white shadow-lg'
                : 'bg-white text-gray-700 border border-gray-300 hover:border-primary-orange'
            }`}
          >
            즉시환전예약
          </button>
          <button
            onClick={() => setMainTab('custom')}
            className={`px-6 py-2 rounded-lg font-semibold transition ${
              mainTab === 'custom'
                ? 'bg-primary-orange text-white shadow-lg'
                : 'bg-white text-gray-700 border border-gray-300 hover:border-primary-orange'
            }`}
          >
            1:1맞춤환전예약
          </button>
          <button
            onClick={() => setMainTab('check')}
            className={`px-6 py-2 rounded-lg font-semibold transition ${
              mainTab === 'check'
                ? 'bg-primary-orange text-white shadow-lg'
                : 'bg-white text-gray-700 border border-gray-300 hover:border-primary-orange'
            }`}
          >
            예약내역확인
          </button>
        </div>

        {/* Main Widget Card */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Exchange Type Toggle */}
          <div className="flex gap-0">
            <button
              onClick={() => {
                setExchangeType('send')
                setAmount('')
                setResultAmount('')
              }}
              className={`flex-1 py-4 font-bold text-lg transition border-b-4 ${
                exchangeType === 'send'
                  ? 'bg-primary-orange text-white border-primary-orange'
                  : 'bg-gray-50 text-gray-700 border-gray-300 hover:bg-gray-100'
              }`}
            >
              외화 사실 때
              <br />
              <span className="text-sm font-normal">(원화 → 외화)</span>
            </button>
            <button
              onClick={() => {
                setExchangeType('receive')
                setAmount('')
                setResultAmount('')
              }}
              className={`flex-1 py-4 font-bold text-lg transition border-b-4 ${
                exchangeType === 'receive'
                  ? 'bg-primary-orange text-white border-primary-orange'
                  : 'bg-gray-50 text-gray-700 border-gray-300 hover:bg-gray-100'
              }`}
            >
              외화 파실 때
              <br />
              <span className="text-sm font-normal">(외화 → 원화)</span>
            </button>
          </div>

          {/* Main Content */}
          <div className="p-8">
            {/* Currency Selection */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                통화선택
              </label>
              <select
                value={selectedCurrency}
                onChange={(e) => setSelectedCurrency(e.target.value)}
                className="w-full px-4 py-3 border-2 border-primary-orange rounded-lg font-semibold text-lg focus:outline-none focus:ring-2 focus:ring-primary-orange bg-white"
              >
                {Object.entries(CURRENCIES).map(([code, info]) => (
                  <option key={code} value={code}>
                    {code} - {info.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Orange Border Box for Calculation */}
            <div className="border-4 border-primary-orange rounded-xl p-6 bg-orange-50">
              {/* Exchange Rate */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  사실 때 환율
                </label>
                <div className="text-2xl font-bold text-primary-orange">
                  1 {selectedCurrency} = {loading ? '로딩중...' : `${exchangeRate.toFixed(6)} ₩`}
                </div>
                <p className="text-xs text-gray-600 mt-1">
                  ✓ 수수료 {MARGIN}% 포함
                </p>
              </div>

              {/* Amount Input */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {exchangeType === 'send' ? '환전 금액 (원화)' : '환전 금액 (외화)'}
                </label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    value={amount}
                    onChange={handleAmountChange}
                    placeholder={exchangeType === 'send' ? '원화 금액을 입력하세요' : '외화 금액을 입력하세요'}
                    className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary-orange text-lg font-semibold"
                  />
                  <div className="px-4 py-3 bg-white border-2 border-gray-300 rounded-lg font-bold text-lg text-gray-700">
                    {exchangeType === 'send' ? '₩' : CURRENCIES[selectedCurrency].symbol}
                  </div>
                </div>
              </div>

              {/* Result Amount */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {exchangeType === 'send' ? '지급받으실 금액 (외화)' : '지급받으실 금액 (원화)'}
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={resultAmount}
                    readOnly
                    placeholder="계산 결과"
                    className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg bg-gray-100 text-lg font-bold text-gray-800"
                  />
                  <div className="px-4 py-3 bg-white border-2 border-gray-300 rounded-lg font-bold text-lg text-gray-700">
                    {exchangeType === 'send' ? CURRENCIES[selectedCurrency].symbol : '₩'}
                  </div>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <button className="w-full mt-8 bg-primary-orange text-white py-4 rounded-lg font-bold text-lg hover:bg-primary-orange-dark transition shadow-lg">
              {mainTab === 'instant' && '즉시 환전 신청'}
              {mainTab === 'custom' && '맞춤 환전 예약'}
              {mainTab === 'check' && '예약 내역 확인'}
            </button>
          </div>
        </div>

        {/* Info Box */}
        <div className="mt-8 bg-white rounded-lg p-6 shadow-sm border-l-4 border-primary-orange">
          <h3 className="font-bold text-gray-900 mb-3">💡 이용안내</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>✓ 표시된 환율은 매 시간 업데이트됩니다</li>
            <li>✓ 대량 환전 시 추가 할인 가능합니다</li>
            <li>✓ 현금 환전, 송금 등 다양한 방식을 지원합니다</li>
            <li>✓ 카카오톡 상담: 24/7 언제든 문의 가능</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
