
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center px-6 md:px-12 pt-32 pb-20">
      <div className="flex flex-col">
        <h1 className="text-7xl md:text-[140px] font-black uppercase leading-[0.85] tracking-tighter mb-4">
          BRAND <br />
          <span className="text-outline">EMPIRE</span>
        </h1>
        
        <div className="mt-12 md:mt-24 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl">
          <div>
            <h2 className="text-xl md:text-2xl font-bold uppercase mb-4">HI! WE ARE SEREN GROUP</h2>
            <p className="text-sm md:text-base leading-relaxed opacity-80 uppercase font-medium max-w-md">
              "단 하나의 콘텐츠에서 시작되는 무한한 브랜드 확장" <br />
              1인 법인이 실현하는 AI, IP, 그리고 지식 재산의 생태계를 구축합니다.
            </p>
          </div>
          <div className="flex flex-col justify-end">
            <p className="text-xs md:text-sm leading-relaxed opacity-60 uppercase font-medium max-w-md">
              단순히 상품을 파는 회사가 아닙니다. AI, 출판, 교육, IP, 실물 상품, 컨설팅을 유기적으로 연결하는 브랜드 확장 실험 모델을 증명합니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
