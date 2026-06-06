import React from 'react';
// assets 폴더에 배너 이미지가 있다고 가정합니다. 파일명을 확인해주세요.
import bannerImg from '../assets/rbbanner1.png'; 

export default function FloatingButton() {
  return (
    <div 
      className="fixed bottom-6 right-6 z-[9999] w-[300px] shadow-2xl rounded-xl overflow-hidden bg-white" 
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
          className="w-full h-auto block"
        />
      </a>
    </div>
  )
}