
import React from 'react';
import { SYSTEMS } from '../constants';

const Systems: React.FC = () => {
  return (
    <section id="systems" className="py-24 px-6 md:px-12 bg-[#E0D7FF]">
      <div className="text-center mb-24">
        <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-4">
          SYSTEMS <span className="text-outline">&</span> AUTOMATION
        </h2>
        <p className="text-xs font-bold uppercase opacity-60 tracking-widest">How we scale 1-person businesses</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-7xl mx-auto">
        {SYSTEMS.map((system, idx) => (
          <div key={idx} className="flex flex-col">
            <div className="mb-8 w-12 h-12 border border-black flex items-center justify-center">
              <span className="font-bold text-lg">{idx + 1}</span>
            </div>
            <h4 className="text-xl font-black uppercase mb-6 tracking-tighter border-b border-black pb-2">
              {system.title}
            </h4>
            <ul className="space-y-3">
              {system.items.map((item, i) => (
                <li key={i} className="text-xs font-bold uppercase flex items-center">
                  <span className="w-4 h-[1px] bg-black mr-3"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      {/* Logos Scrolling Section Mockup */}
      <div className="mt-32 overflow-hidden py-12 border-y border-black">
        <div className="flex space-x-20 whitespace-nowrap animate-marquee">
          {["STIBEE", "N8N", "ZAPIER", "KIPRIS", "INSTAGRAM", "YOUTUBE", "AI SCHOOL"].map((brand, i) => (
            <span key={i} className="text-4xl md:text-6xl font-black uppercase tracking-tighter opacity-20">
              {brand} —
            </span>
          ))}
          {["STIBEE", "N8N", "ZAPIER", "KIPRIS", "INSTAGRAM", "YOUTUBE", "AI SCHOOL"].map((brand, i) => (
            <span key={i} className="text-4xl md:text-6xl font-black uppercase tracking-tighter opacity-20">
              {brand} —
            </span>
          ))}
        </div>
      </div>
      
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
          display: flex;
          width: 200%;
        }
      `}</style>
    </section>
  );
};

export default Systems;
