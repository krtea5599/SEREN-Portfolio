
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectItem from './components/ProjectItem';
import Testimonial from './components/Testimonial';
import Systems from './components/Systems';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { PILLARS } from './constants';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen selection:bg-black selection:text-[#E0D7FF]">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <Hero />
        
        {/* Intro Vision Section */}
        <section id="vision" className="px-6 md:px-12 py-24 border-t border-black">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="w-full md:w-1/3">
              <h2 className="text-4xl font-black uppercase tracking-tighter leading-[0.9]">
                CORE <br /><span className="text-outline">VISION</span>
              </h2>
            </div>
            <div className="w-full md:w-2/3">
              <p className="text-xl md:text-2xl font-medium leading-relaxed max-w-2xl">
                세렌(SEREN)은 기술과 철학이 만나는 곳입니다. 1인 법인 기반의 다각화 비즈니스 구조를 통해 
                <span className="italic font-serif-display"> 콘텐츠 하나가 브랜드가 되고, 기술을 만나 시스템으로 완성되는 과정 </span> 
                자체를 증명합니다.
              </p>
            </div>
          </div>
        </section>

        {/* Pillars Section */}
        <section id="work" className="flex flex-col">
          <div className="px-6 md:px-12 py-16 border-y border-black flex justify-between items-center bg-[#E0D7FF]">
             <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter">
              MY <span className="text-outline">WORK</span>
            </h2>
            <div className="hidden md:block text-[10px] font-bold uppercase opacity-60 tracking-[0.3em]">
              The 6 Core Pillars
            </div>
          </div>
          
          {PILLARS.map((project, index) => (
            <ProjectItem key={project.id} project={project} index={index} />
          ))}
        </section>

        {/* Testimonial */}
        <Testimonial />

        {/* Systems & Expertise */}
        <Systems />

        {/* Contact Form */}
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;
