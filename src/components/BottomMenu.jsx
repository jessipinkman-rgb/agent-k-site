import { Link } from 'react-router-dom'

export default function BottomMenu() {
  return (
    <div className="mx-auto flex w-[280px] items-center justify-between pt-[30px] pb-[12px] text-[13px] font-light tracking-[-1px]">
      <Link
        to="/info01"
        className="inline-flex items-center gap-[4px] text-[13px] leading-none text-[#008aff] transition-colors hover:text-[#006fcc]"
      >
        <span className="flex h-[14px] w-[14px] items-center justify-center rounded-full border border-[#008aff] text-[10px] font-bold leading-none">?</span>
        환전 이용안내
      </Link>

      <a
        href="https://open.kakao.com/o/pIQyMjui"
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-[4px] text-[13px] leading-none text-[#008aff] transition-colors hover:text-[#006fcc]"
      >
        <svg className="h-[14px] w-[14px]" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M4 5.8C4 4.8 4.8 4 5.8 4h12.4C19.2 4 20 4.8 20 5.8v8.4c0 1-.8 1.8-1.8 1.8H9.4L5 20v-4.2c-.6-.3-1-1-1-1.6V5.8Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          <path d="M8 9h8M8 12h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
        채팅문의하기
      </a>
    </div>
  )
}
