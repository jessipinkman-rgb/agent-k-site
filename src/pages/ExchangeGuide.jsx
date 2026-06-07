import arrowIcon from '../assets/arrow01.png'
import bulletIcon from '../assets/blet-s.svg'

const StepFlow = ({ steps, accent }) => (
  <div className="mt-[22px] grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-0">
    {steps.map((step, index) => (
      <div key={step.title} className="relative flex min-h-[135px] flex-col items-center justify-center border border-[#dddddd] bg-white px-3 py-5 text-center md:border-r-0 md:last:border-r">
        <div className="mb-3 flex h-[54px] w-[54px] items-center justify-center rounded-full text-[18px] font-semibold text-white" style={{ backgroundColor: accent }}>
          {index + 1}
        </div>
        <div className="mb-2 text-[15px] font-semibold text-[#333333]">{step.title}</div>
        <div className="text-[13px] font-light leading-[1.45] text-[#666666]">{step.body}</div>
        {index < steps.length - 1 && (
          <div className="absolute right-[-13px] top-1/2 z-10 hidden h-[26px] w-[26px] -translate-y-1/2 rotate-45 border-r border-t border-[#dddddd] bg-white md:block" />
        )}
      </div>
    ))}
  </div>
)

export default function ExchangeGuide() {
  return (
    <section className="min-h-screen bg-white pt-[34px] pb-16 md:pt-[42px]">
      <div className="mx-auto w-full max-w-[930px] px-5 font-['Noto_Sans_KR','dotum',sans-serif]">
        <div className="mb-[30px] text-center">
          <div className="border-b border-[#dddddd] pb-[18px] text-center text-[24px] font-semibold leading-none tracking-[-1px] text-[#222222]">
            환전예약 이용안내
          </div>
          <div className="flex items-center justify-center pt-[14px] text-[13px] font-light tracking-[-1px] text-[#666666]">
            <img src={arrowIcon} alt="" className="mr-[6px] inline-block align-middle" />
            에이전트k는 고객의 개인정보를 보호하고 있습니다.
          </div>
        </div>

        <div className="text-center">
          <section className="border-b border-[#eeeeee] pb-[44px]">
            <h2 className="mb-[24px] flex items-center justify-center text-[24px] font-medium leading-none tracking-[-1px] text-[#222222]">
              <img src={bulletIcon} alt="" className="mr-[9px] inline-block align-middle" />
              즉시환전신청
            </h2>
            <p className="text-center text-[14px] font-light leading-[1.9] tracking-[-0.5px] text-[#555555]">
              편하게 환전신청을 하면, 근처에 있는 직원이 직접 방문 환전을 하는 방식입니다.
            </p>
            <StepFlow
              accent="#f6905d"
              steps={[
                { title: '1단계', body: '환전예약' },
                { title: '2단계', body: '직원이 직접 계신곳으로 방문' },
                { title: '3단계', body: '대면 수령' },
              ]}
            />
          </section>

          <section className="pt-[42px]">
            <h2 className="mb-[24px] flex items-center justify-center text-[24px] font-medium leading-none tracking-[-1px] text-[#222222]">
              <img src={bulletIcon} alt="" className="mr-[9px] inline-block align-middle" />
              1:1맞춤환전예약
            </h2>
            <p className="text-center text-[14px] font-light leading-[1.9] tracking-[-0.5px] text-[#555555]">
              가능한 시간을 정하시고, 환전 신청을 하시면 직원이 직접 연락합니다. 통화 후 거래 방식은 즉시환전예약과 동일합니다.
            </p>
            <StepFlow
              accent="#4bc3cf"
              steps={[
                { title: '1단계', body: '환전신청' },
                { title: '2단계', body: '직원과 통화 후 수령시간 확정' },
                { title: '3단계', body: '대면 수령' },
              ]}
            />
          </section>

          <a
            href="https://open.kakao.com/o/pIQyMjui"
            target="_blank"
            rel="noreferrer"
            className="mx-auto mt-[45px] flex h-[58px] w-full max-w-[443px] items-center justify-center rounded-[4px] bg-[#008aff] text-center text-[18px] font-medium tracking-[-1px] text-white transition-colors hover:bg-[#0074d6]"
          >
            환전문의하기
          </a>
        </div>
      </div>
    </section>
  )
}
