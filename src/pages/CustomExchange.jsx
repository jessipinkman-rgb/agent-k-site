import { Link } from 'react-router-dom'
import BottomMenu from '../components/BottomMenu'
import centerBanner1 from '../assets/center-banner-1.png.png'
import centerBanner2 from '../assets/center-banner-2.png.png'

const InputLine = ({ label, children }) => (
  <div className="relative mb-[5px] flex w-full items-center border border-[#dfdfdf] bg-[#fafafa] p-[8px] align-middle">
    <div className="relative w-[150px] shrink-0 text-left text-[14px] tracking-[-1px] text-[#333333]">· {label}</div>
    <div className="relative flex-1 text-left text-[14px]">{children}</div>
  </div>
)

const TextInput = ({ type = 'text', readOnly = false, defaultValue = '' }) => (
  <input
    type={type}
    readOnly={readOnly}
    defaultValue={defaultValue}
    className="h-[32px] w-full border border-[#dddddd] bg-white px-[8px] text-[14px] text-[#333333] outline-none"
  />
)

const Comment = ({ children }) => (
  <div className="flex text-left text-[12px] font-light leading-[1.6] tracking-[-1px] text-[#666666]">
    <span className="w-[22px] shrink-0 text-center">※</span>
    <span>{children}</span>
  </div>
)

export default function CustomExchange() {
  return (
    <section className="min-h-screen bg-white pt-[34px] pb-12 md:pt-[42px] md:pb-20">
      <div className="relative mx-auto w-full max-w-[930px] px-5 py-5 text-center font-['Noto_Sans_KR','dotum',sans-serif]">
        <nav className="mb-[35px] flex h-[30px] items-center justify-center whitespace-nowrap p-[5px]">
          <Link to="/" className="inline-block text-[16px] font-normal leading-none text-black transition-colors hover:text-[#008aff]">즉시환전예약</Link>
          <span className="inline-block w-4 text-[18px] font-normal leading-none text-black">·</span>
          <span className="inline-block border-t-2 border-[#008aff] pt-[4px] text-[18px] font-medium leading-none text-[#008aff]">1:1맞춤환전예약</span>
          <span className="inline-block w-4 text-[18px] font-normal leading-none text-black">·</span>
          <Link to="/reservation-history" className="inline-block text-[16px] font-normal leading-none text-black transition-colors hover:text-[#008aff]">예약내역확인</Link>
        </nav>

        <form onSubmit={(e) => e.preventDefault()}>
          <div className="relative mx-auto flex w-[443px] flex-col text-center">
            <button type="button" className="relative block w-[443px] rounded-t-[10px] bg-[#f6905d] p-[10px] text-center text-[18px] leading-none text-white">
              외화사실때 <span className="text-[11px] font-extralight tracking-[-1px] align-middle">( 원화 → 외화 )</span>
            </button>
            <button type="button" className="relative block w-[443px] bg-[#efefef] p-[10px] text-center text-[14px] leading-none text-[#aaaaaa]">
              외화파실때 <span className="text-[11px] font-normal align-middle">( 외화 → 원화 )</span>
            </button>
          </div>

          <div className="relative rounded-b-[10px] border-[3px] border-[#f6905d] bg-white p-[40px]">
            <div className="relative inline-block w-full">
              <InputLine label="통화선택">
                <select className="h-[32px] w-full border border-[#dddddd] bg-white px-[8px] text-[14px] text-[#333333] outline-none">
                  <option>USD</option>
                  <option>JPY</option>
                  <option>EUR</option>
                  <option>HKD</option>
                  <option>CNY</option>
                </select>
              </InputLine>
              <InputLine label="희망(사실때)환율">
                <div className="flex items-center gap-[8px]">
                  <TextInput defaultValue="0" />
                  <span className="shrink-0 text-[14px] text-[#333333]">원</span>
                </div>
              </InputLine>

              <div className="my-[12px]">
                <Comment>1인 1일 450만원(환산금액) 이하로 신청하세요.</Comment>
                <Comment>동전(외화)은 환전하실 수 없습니다.</Comment>
              </div>

              <InputLine label="환전금액">
                <TextInput defaultValue="0" />
              </InputLine>
              <InputLine label="지급하실금액">
                <div className="flex items-center gap-[8px]">
                  <TextInput readOnly defaultValue="0" />
                  <span className="shrink-0 text-[14px] text-[#333333]">원</span>
                </div>
              </InputLine>
              <InputLine label="예약금">
                <div className="flex items-center gap-[8px]">
                  <TextInput readOnly defaultValue="0" />
                  <span className="shrink-0 text-[14px] text-[#333333]">원</span>
                </div>
              </InputLine>

              <div className="my-[12px]">
                <Comment>예약금은 신청금액의 3% 환산금액 입니다(원화기준).</Comment>
                <Comment>예약금은 환전금액 수령 시 돌려드립니다.</Comment>
              </div>

              <InputLine label="기간설정">
                <div className="flex items-center gap-[7px]">
                  <TextInput />
                  <span className="text-[14px] text-[#333333]">~</span>
                  <TextInput />
                </div>
              </InputLine>

              <div className="relative mb-[5px] w-full border border-[#dfdfdf] bg-[#fafafa] p-[8px] text-center text-[14px] tracking-[-1px] text-[#333333]">
                <label className="mr-[45px] inline-flex items-center gap-[5px]"><input type="checkbox" /> 긴급사전통지동의</label>
                <label className="inline-flex items-center gap-[5px]"><input type="checkbox" /> 개인정보수집동의</label>
              </div>
            </div>
          </div>

          <div className="mt-[20px] text-center">
            <button type="submit" className="inline-block w-[120px] rounded-[3px] bg-[#f6905d] px-[20px] py-[10px] text-center text-[14px] font-medium text-white transition-colors hover:bg-[#e57d4a]">
              다음단계
            </button>
          </div>

          <div className="mt-[40px] text-center text-[18px] font-medium tracking-[-1px] text-[#333333]">신청인 정보입력</div>
          <div className="mt-[15px] rounded-[10px] border-[3px] border-[#f6905d] bg-white p-[40px]">
            <InputLine label="성명"><TextInput /></InputLine>
            <InputLine label="비밀번호"><TextInput type="password" /></InputLine>
            <InputLine label="비밀번호확인"><TextInput type="password" /></InputLine>
            <div className="mb-[12px]"><Comment>4자이상 입력하세요.(예약조회시 필요)</Comment></div>
            <InputLine label="생년월일"><TextInput /></InputLine>
            <div className="mb-[12px]"><Comment>Ex) 20200101</Comment></div>
            <InputLine label="휴대폰번호"><TextInput /></InputLine>
            <div className="mb-[12px]"><Comment>'-'을 제외한 휴대폰 번호를 입력하세요.</Comment></div>
            <InputLine label="이메일"><TextInput /></InputLine>
          </div>

          <div className="mt-[40px] text-center text-[18px] font-medium tracking-[-1px] text-[#333333]">환전용도 선택</div>
          <div className="mt-[15px] rounded-[10px] border-[3px] border-[#f6905d] bg-white p-[30px] text-center text-[14px] tracking-[-1px] text-[#333333]">
            <label className="mr-[20px]"><input type="radio" name="use" /> 여행</label>
            <label className="mr-[20px]"><input type="radio" name="use" /> 유학</label>
            <label className="mr-[20px]"><input type="radio" name="use" /> 사업</label>
            <label><input type="radio" name="use" /> 기타</label>
          </div>
        </form>

        <BottomMenu />

        <div className="mx-auto mt-[8px] flex w-full max-w-[888px] flex-col gap-[18px]">
          <img src={centerBanner1} alt="에이전트케이 환전 안내 배너" className="w-full" />
          <img src={centerBanner2} alt="쉽고 빠른 환전 배너" className="w-full" />
        </div>
      </div>
    </section>
  )
}
