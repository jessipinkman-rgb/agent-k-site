import { useState } from 'react';
import { Link } from 'react-router-dom';
import BottomMenu from '../components/BottomMenu';
import centerBanner1 from '../assets/center-banner-1.png.png';
import centerBanner2 from '../assets/center-banner-2.png.png';

export default function Home() {
  const [exchangeType, setExchangeType] = useState('buy');

  return (
    <section className="bg-white flex flex-col items-center justify-center min-h-screen pt-[34px] pb-12 md:pt-[42px] md:pb-20">
      <div className="relative mx-auto w-full max-w-[930px] px-5 py-5 text-center">
        
        <nav className="mb-[35px] flex h-[30px] items-center justify-center whitespace-nowrap p-[5px] font-['Noto_Sans_KR','dotum',sans-serif]">
          <Link to="/exchange" className="inline-block border-t-2 border-[#008aff] pt-[4px] text-[18px] font-medium leading-none text-[#008aff] transition-colors">즉시환전예약</Link>
          <span className="inline-block w-4 text-[18px] font-normal leading-none text-black">·</span>
          <Link to="/custom-exchange" className="inline-block text-[16px] font-normal leading-none text-black hover:text-[#008aff] transition-colors">1:1맞춤환전예약</Link>
          <span className="inline-block w-4 text-[18px] font-normal leading-none text-black">·</span>
          <Link to="/reservation-history" className="inline-block text-[16px] font-normal leading-none text-black hover:text-[#008aff] transition-colors">예약내역확인</Link>
        </nav>

        <div className="relative mx-auto w-full max-w-[930px]">
          <div className="relative mx-auto flex w-[443px] flex-col text-center">
            <button
              onClick={() => setExchangeType('buy')}
              className={`relative block w-[443px] rounded-t-[10px] p-[10px] text-center leading-none transition-colors ${
                exchangeType === 'buy'
                  ? 'bg-[#f6905d] text-[18px] text-white'
                  : 'bg-[#efefef] text-[14px] text-[#aaaaaa] hover:bg-[#efefef]'
              }`}
            >
              외화사실때 <span className="text-[11px] font-extralight tracking-[-1px] align-middle">( 원화 → 외화 )</span>
            </button>
            <button
              onClick={() => setExchangeType('sell')}
              className={`relative block w-[443px] p-[10px] text-center leading-none transition-colors ${
                exchangeType === 'sell'
                  ? 'bg-[#4bc3cf] text-[18px] text-white'
                  : 'bg-[#efefef] text-[14px] text-[#aaaaaa] hover:bg-[#efefef]'
              }`}
            >
              외화파실때 <span className="text-[11px] font-normal align-middle">( 외화 → 원화 )</span>
            </button>
          </div>

          <div className="relative mb-12 rounded-b-[10px] border-[3px] border-[#f6905d] bg-white p-[40px]">
            <div className="w-full">
              <div className="border border-gray-200 rounded-lg divide-y divide-gray-200 bg-gray-50 overflow-hidden mb-5">
                <div className="flex items-center p-4 bg-white">
                  <label className="w-1/4 text-sm font-medium text-gray-700 flex items-center">
                    <span className="text-gray-400 mr-1.5">{'•'}</span> 통화선택
                  </label>
                  <div className="w-3/4">
                    <select className="w-full border border-gray-300 rounded px-3 py-2 text-sm bg-white focus:outline-none focus:border-primary-orange">
                      <option value="USD">USD</option>
                      <option value="JPY">JPY</option>
                      <option value="EUR">EUR</option>
                      <option value="HKD">홍콩달러</option>
                      <option value="MOP">마카오달러</option>
                    </select>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-white">
                  <label className="w-1/4 text-sm font-medium text-gray-700 flex items-center">
                    <span className="text-gray-400 mr-1.5">{'•'}</span> 사실때환율
                  </label>
                  <div className="w-3/4 flex items-center">
                    <input
                      type="text"
                      value="1529.8605"
                      readOnly
                      className="w-full border border-gray-300 rounded px-3 py-2 text-sm bg-gray-50 text-gray-600 focus:outline-none"
                    />
                    <span className="text-sm text-gray-600 ml-3 whitespace-nowrap">원</span>
                  </div>
                </div>
              </div>

              <div className="text-xs text-gray-500 space-y-1.5 mb-6 pl-1">
                <p>※ 1인 1일 450만원(환산금액) 이하로 신청하세요.</p>
                <p>※ 동전(외화)은 환전하실 수 없습니다.</p>
                <p>※ 권종은 보유 현황에 따라 제공됩니다.</p>
                <p>※ 일부 통화는 당일수령이 어려울 수 있습니다.</p>
                <p>※ 위 환율은 환전예약시에만 적용되는 환율입니다.</p>
              </div>

              <div className="border border-gray-200 rounded-lg divide-y divide-gray-200 bg-gray-50 overflow-hidden mb-6">
                <div className="flex items-center p-4 bg-white">
                  <label className="w-1/4 text-sm font-medium text-gray-700 flex items-center">
                    <span className="text-gray-400 mr-1.5">{'•'}</span> 환전금액
                  </label>
                  <div className="w-3/4 flex items-center">
                    <input
                      type="text"
                      placeholder="20 단위"
                      className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-primary-orange"
                    />
                    <span className="text-sm text-gray-600 ml-3 whitespace-nowrap w-8 text-right">USD</span>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-white">
                  <label className="w-1/4 text-sm font-medium text-gray-700 flex items-center">
                    <span className="text-gray-400 mr-1.5">{'•'}</span> 지급하실금액
                  </label>
                  <div className="w-3/4">
                    <input
                      type="text"
                      readOnly
                      className="w-full border border-gray-300 rounded px-3 py-2 text-sm bg-gray-50 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="text-xs text-gray-500 pl-1">
                <p>※ 지점 방문 시, 반드시 현금을 지참하여 주시기 바랍니다.</p>
              </div>
            </div>
          </div>
        </div>

        <BottomMenu />

        <div className="mx-auto mt-[8px] flex w-full max-w-[888px] flex-col gap-[18px]">
          <img src={centerBanner1} alt="에이전트케이 환전 안내 배너" className="w-full" />
          <img src={centerBanner2} alt="쉽고 빠른 환전 배너" className="w-full" />
        </div>
      </div>
    </section>
  );
}