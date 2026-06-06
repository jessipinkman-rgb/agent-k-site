import React from 'react';
// assets 폴더에서 이미지 import
import mainBannerImg from '../assets/intro1.jpeg';
import serviceImg from '../assets/moneyex.jpg';

export default function AgentKIntro() {
  const services = [
    {
      title: '① 찾아가는 현장 맞춤 환전',
      description: '투명한 환전 서비스를 고객님이 계신 곳에서 그대로 누리실 수 있습니다. 번거롭게 환전소를 찾아 멀리 이동할 필요 없이, 해외 어디서나 요청하시면 에이전트K가 현장으로 직접 찾아가 경제적이고 안전하게 외화를 인도해 드리는 프리미엄 대면 서비스입니다.',
      imgSrc: serviceImg, // 위에서 import한 이미지 사용
      hasImg: true
    },
    {
      title: '② 실시간 현장 매칭 시스템',
      description: '까다로운 예약 절차를 생략했습니다. 환전이 필요한 순간 불러주시면, 현장에서 당일 실시간 고시 환율을 직관적으로 확인하고 즉시 외화를 주고받는 완벽한 현장 중심의 직거래 방식을 제공합니다.',
      hasImg: false
    },
    {
      title: '③ 시공간 제약 없는 이동식 서비스',
      description: '지정된 공간에 갇혀 있는 창구 시스템에서 벗어나, 고객님의 동선과 일정에 맞춘 기동성 있는 환전 시스템을 구축했습니다. 장소에 구애받지 않고 안전하게 환전 업무를 마칠 수 있도록, 에이전트K 담당자가 직접 발로 뛰며 쾌적한 환전 환경을 배달해 드립니다.',
      hasImg: false
    }
  ];

  return (
    <div className="w-full bg-white text-[#333] font-['Noto_Sans_KR',_sans-serif] break-keep">
      
      <div className="w-full max-w-[1200px] mx-auto px-[20px] pt-[80px] pb-[100px]">
        
        <div className="text-center mb-[70px]">
          <h2 className="text-[#005ba6] text-[34px] font-bold tracking-[-0.05em] mb-[12px]">
            에이전트K 소개
          </h2>
          <p className="text-[#777] text-[14px] tracking-[-0.02em]">
            ▶ 에이전트K와 함께하는 혁신적인 이동형 환전 서비스입니다.
          </p>
        </div>

        <div className="text-left mb-[40px]">
          <h3 className="text-[28px] font-bold text-[#222] mb-[20px] tracking-[-0.05em]">
            환전에 금융을 입히다!
          </h3>
          <p className="text-[16px] text-[#666] leading-[1.8] tracking-[-0.02em]">
            고객님이 계신 곳이 어디든 쉽고, 빠르고, 안전한 환전이 가능하도록 찾아가는 이동형 환전으로 편의성을 더했습니다.<br />
            이제 환전을 위해 직접 움직이거나 기다리실 필요가 없습니다. 에이전트K가 고객님의 현장으로 직접 찾아갑니다.<br />
            정직한 환전 서비스를 통해 찾아가는 원스톱(ONE STOP) 환전 시대를 열어갑니다.
          </p>
        </div>

        {/* 메인 이미지: import한 mainBannerImg 사용 */}
        <div className="w-full mb-[80px]">
          <img src={mainBannerImg} alt="에이전트K 서비스 메인 이미지" className="w-full h-auto block" />
        </div>

        <div className="mb-[80px]">
          <h4 className="text-[24px] font-bold text-[#222] mb-[40px] tracking-[-0.04em]">
            차별화되는 에이전트K만의 對고객서비스
          </h4>
          <ul className="flex flex-col gap-[60px]">
            {services.map((service, idx) => (
              <li key={idx} className="flex flex-col md:flex-row justify-between items-start border-t border-[#eee] pt-[40px] first:border-t-0 first:pt-0">
                <div className="flex-1 w-full">
                  <h5 className="text-[20px] font-bold text-[#222] mb-[15px] tracking-[-0.03em]">{service.title}</h5>
                  <p className="text-[16px] text-[#666] leading-[1.8] tracking-[-0.02em]">{service.description}</p>
                </div>
                {service.hasImg && (
                  <div className="mt-[30px] md:mt-0 w-full md:w-[45%] md:ml-[5%] shrink-0">
                    <img src={service.imgSrc} alt={service.title} className="w-full h-auto block" />
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full bg-[#f8f9fa] border border-[#e5e5e5] px-[20px] py-[30px] text-center">
          <ul className="inline-flex flex-col md:flex-row items-center justify-center gap-y-[10px] gap-x-[35px] text-[14px] text-[#666] tracking-[-0.02em]">
            <li><strong className="text-[#333] font-bold mr-[5px]">· 사업자명 :</strong> 주식회사 MONEY BOX 광장시장점</li>
            <li><strong className="text-[#333] font-bold mr-[5px]">· 환전등록번호 :</strong> 제 010A01786 호</li>
            <li><strong className="text-[#333] font-bold mr-[5px]">· 주소 :</strong> 대한민국 서울특별시 중구 퇴계로 103</li>
            <li><strong className="text-[#333] font-bold mr-[5px]">· 전화번호 :</strong> 080-2269-8898</li>
          </ul>
        </div>

      </div>
    </div>
  );
}