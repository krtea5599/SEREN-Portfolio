
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-12 py-8 bg-[#E0D7FF]/80 backdrop-blur-sm">
      <div className="text-xs font-bold tracking-tighter uppercase leading-none">
        Portfolio<br />Of Seren Group
      </div>
      <div className="hidden md:flex space-x-12 text-xs font-bold uppercase tracking-widest">
        <a href="#home" className="hover:opacity-50 transition-opacity">Home</a>
        <a href="#vision" className="hover:opacity-50 transition-opacity">Vision</a>
        <a href="#work" className="hover:opacity-50 transition-opacity">Work</a>
        <a href="#systems" className="hover:opacity-50 transition-opacity">Systems</a>
        <a href="#contact" className="hover:opacity-50 transition-opacity">Contact</a>
      </div>
      <div className="md:hidden">
        {/* Mobile menu could go here, keeping it simple for now */}
        <button className="text-xs font-bold uppercase">Menu</button>
      </div>
    </nav>
  );
};

export default Navbar;
