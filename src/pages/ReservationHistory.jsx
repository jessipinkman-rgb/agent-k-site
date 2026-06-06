import { Link } from 'react-router-dom'

export default function ReservationHistory() {
  return (
    <section className="min-h-screen bg-white pt-[34px] pb-16 md:pt-[42px]">
      <div className="relative mx-auto w-full max-w-[930px] px-5 py-5 text-center font-['Noto_Sans_KR','dotum',sans-serif]">
        <nav className="mb-[40px] flex h-[30px] items-center justify-center whitespace-nowrap p-[5px]">
          <Link to="/" className="inline-block text-[16px] font-normal leading-none text-black transition-colors hover:text-[#008aff]">즉시환전예약</Link>
          <span className="inline-block w-4 text-[18px] font-normal leading-none text-black">·</span>
          <Link to="/custom-exchange" className="inline-block text-[16px] font-normal leading-none text-black transition-colors hover:text-[#008aff]">1:1맞춤환전예약</Link>
          <span className="inline-block w-4 text-[18px] font-normal leading-none text-black">·</span>
          <span className="inline-block border-t-2 border-[#008aff] pt-[4px] text-[18px] font-medium leading-none text-[#008aff]">예약내역확인</span>
        </nav>

        <form className="mx-auto w-full max-w-[930px]" onSubmit={(e) => e.preventDefault()}>
          <input type="submit" className="h-0 w-0 border-0 p-0" value="검색" />
          <div className="relative w-full rounded-[10px] border-[3px] border-[#f6905d] bg-white p-[40px]">
            <div className="relative inline-block w-full">
              <div className="relative mb-[5px] w-full border border-[#dfdfdf] bg-[#fafafa] p-[8px] align-middle">
                <div className="relative inline-block w-[150px] text-left text-[14px] align-middle">· 성명</div>
                <div className="relative inline-block w-[600px] text-left text-[14px] align-middle">
                  <input type="text" name="nm" className="h-[32px] w-full border border-[#dddddd] bg-white px-[8px] text-[14px] outline-none" />
                </div>
              </div>
              <div className="relative mb-[5px] w-full border border-[#dfdfdf] bg-[#fafafa] p-[8px] align-middle">
                <div className="relative inline-block w-[150px] text-left text-[14px] align-middle">· 휴대폰번호</div>
                <div className="relative inline-block w-[600px] text-left text-[14px] align-middle">
                  <input type="text" name="mobile" className="h-[32px] w-full border border-[#dddddd] bg-white px-[8px] text-[14px] outline-none" />
                </div>
              </div>
              <div className="relative w-full border border-[#dfdfdf] bg-[#fafafa] p-[8px] align-middle">
                <div className="relative inline-block w-[150px] text-left text-[14px] align-middle">· 비밀번호</div>
                <div className="relative inline-block w-[600px] text-left text-[14px] align-middle">
                  <input type="password" name="pass" className="h-[32px] w-full border border-[#dddddd] bg-white px-[8px] text-[14px] outline-none" />
                </div>
              </div>
            </div>
          </div>

          <div className="h-[20px]" />
          <div className="text-center">
            <button type="submit" className="inline-block w-[120px] rounded-[3px] bg-[#f6905d] px-[20px] py-[10px] text-center text-[14px] font-medium text-white transition-colors hover:bg-[#e57d4a]">
              확인
            </button>
          </div>
        </form>

        <div className="mx-auto flex w-[280px] items-center justify-between pt-[30px] pb-[12px] text-[13px] font-light tracking-[-1px]">
          <Link to="/info01" className="inline-flex items-center gap-[4px] text-[13px] leading-none text-[#008aff] transition-colors hover:text-[#006fcc]">
            <span className="flex h-[14px] w-[14px] items-center justify-center rounded-full border border-[#008aff] text-[10px] font-bold leading-none">?</span>
            환전 이용안내
          </Link>
          <a href="https://open.kakao.com/o/pIQyMjui" target="_blank" rel="noreferrer" className="inline-flex items-center gap-[4px] text-[13px] leading-none text-[#008aff] transition-colors hover:text-[#006fcc]">
            <svg className="h-[14px] w-[14px]" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 5.8C4 4.8 4.8 4 5.8 4h12.4C19.2 4 20 4.8 20 5.8v8.4c0 1-.8 1.8-1.8 1.8H9.4L5 20v-4.2c-.6-.3-1-1-1-1.6V5.8Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
              <path d="M8 9h8M8 12h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            채팅문의하기
          </a>
        </div>
        <div className="h-[40px]" />
      </div>
    </section>
  )
}
