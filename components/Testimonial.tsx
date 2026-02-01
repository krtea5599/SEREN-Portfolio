
import React from 'react';

const Testimonial: React.FC = () => {
  return (
    <section className="bg-black text-white py-24 px-6 md:px-12 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-light italic leading-snug mb-12">
          "창작자와 지역, AI를 연결하여 혼자서도 견고한 브랜드 제국을 구축하는 사례를 만듭니다. 당신의 실험이 곧 콘텐츠가 되는 곳, 바로 세렌(SEREN)입니다."
        </h2>
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-[#E0D7FF]">
            <img src="https://picsum.photos/seed/ceo/200/200" alt="CEO" className="w-full h-full object-cover" />
          </div>
          <span className="text-xs font-bold uppercase tracking-widest">Seren Group Founder</span>
          <span className="text-[10px] opacity-60 uppercase">1-Person Brand Empire Architect</span>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
