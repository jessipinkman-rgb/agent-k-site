export default function Notice() {
  const notices = [
    {
      id: 1,
      title: '2026년 상반기 환율 정책 안내',
      date: '2026-06-04',
      content: '환전소 환율 정책이 변경되었습니다. 자세한 내용을 확인해주세요.'
    },
    {
      id: 2,
      title: '신규 지점 오픈 안내',
      date: '2026-06-01',
      content: '마카오 지점에 이어 호이안 지점이 새로 오픈했습니다. 많은 이용 부탁드립니다.'
    },
    {
      id: 3,
      title: '휴무일 안내',
      date: '2026-05-28',
      content: '설날 및 추석 휴무일 안내입니다.'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">공지사항</h1>
        
        <div className="space-y-4">
          {notices.map((notice) => (
            <div key={notice.id} className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition cursor-pointer">
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-xl font-bold text-gray-900 flex-1">{notice.title}</h2>
                <span className="text-sm text-gray-500">{notice.date}</span>
              </div>
              <p className="text-gray-700">{notice.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
