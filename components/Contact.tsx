
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 px-6 md:px-12 bg-[#E0D7FF] flex flex-col items-center">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-20">
        <div>
          <h2 className="text-6xl md:text-9xl font-black uppercase leading-[0.8] mb-8">
            CONTACT <br />
            <span className="text-outline">ME</span>
          </h2>
          <p className="text-xs font-bold uppercase tracking-widest opacity-60 max-w-xs leading-relaxed">
            세렌과 함께 새로운 브랜드 세계관을 확장하고 싶으신 분들의 연락을 기다립니다.
          </p>
        </div>
        
        <form className="flex flex-col space-y-8 w-full">
          <div className="flex flex-col group">
            <label className="text-[10px] font-bold uppercase mb-2 group-focus-within:opacity-100 opacity-60 transition-opacity">Full Name*</label>
            <input 
              type="text" 
              className="bg-transparent border-b border-black py-2 outline-none text-sm font-medium"
              placeholder="YOUR NAME"
            />
          </div>
          <div className="flex flex-col group">
            <label className="text-[10px] font-bold uppercase mb-2 group-focus-within:opacity-100 opacity-60 transition-opacity">Email Address*</label>
            <input 
              type="email" 
              className="bg-transparent border-b border-black py-2 outline-none text-sm font-medium"
              placeholder="YOUR@EMAIL.COM"
            />
          </div>
          <div className="flex flex-col group">
            <label className="text-[10px] font-bold uppercase mb-2 group-focus-within:opacity-100 opacity-60 transition-opacity">Message</label>
            <textarea 
              rows={4}
              className="bg-transparent border-b border-black py-2 outline-none text-sm font-medium resize-none"
              placeholder="HOW CAN WE COLLABORATE?"
            />
          </div>
          <button className="self-start bg-black text-white px-10 py-4 text-[10px] font-bold uppercase tracking-[0.2em] rounded-full hover:bg-white hover:text-black border border-black transition-all">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
