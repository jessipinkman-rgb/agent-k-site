import bannerImg from '../assets/rbbanner1.png'

export default function FloatingButton() {
  return (
    <div
      className="fixed bottom-6 right-6 z-[9999] w-[300px] overflow-hidden rounded-xl bg-white shadow-2xl"
      style={{ border: '1px solid rgba(0, 0, 0, 0.35)' }}
    >
      <a
        href="https://open.kakao.com/o/pIQyMjui"
        target="_blank"
        rel="noreferrer"
        className="block"
      >
        <img
          src={bannerImg}
          alt="실시간 환전 배너"
          className="block h-auto w-full"
        />
      </a>
    </div>
  )
}
