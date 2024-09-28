import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import OffCanvasMenu from './OffCanvasMenu';
// Imports

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header id="sticky-header" className="bg-mainBg xl:pl-12  w-full z-10">
        <div className="flex pl-4 xl:pl-0">
          <div className="flex-1 flex items-center justify-between border-b border-black-800 border-opacity-40">
            <a href="index.html" className="inline-flex items-center gap-3 px-3 text-2xl font-semibold text-dark dark:text-white">
              {/* Logo SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="h-6 w-6">
                <path fill="white" d="M0 1.5A1.5 1.5 0 0 1 1.5 0H9a1.5 1.5 0 0 1 1.5 1.5v21A1.5 1.5 0 0 1 9 24H1.5A1.5 1.5 0 0 1 0 22.5v-21Zm13.5 0A1.5 1.5 0 0 1 15 0h7.5A1.5 1.5 0 0 1 24 1.5V9a1.5 1.5 0 0 1-1.5 1.5H15A1.5 1.5 0 0 1 13.5 9V1.5Zm0 13.5a1.5 1.5 0 0 1 1.5-1.5h7.5A1.5 1.5 0 0 1 24 15v7.5a1.5 1.5 0 0 1-1.5 1.5H15a1.5 1.5 0 0 1-1.5-1.5V15Z"></path>
              </svg>
              <span> H.M.<span className="text-primary">YOUSUF</span> </span>
            </a>
            <a href="#" className="flex items-center flex-wrap py-[6px] px-3 text-[15px] font-bold text-active leading-none mr-2 transition-all duration-300 hover:text-orange md:hover:text-white group" onClick={handleLinkClick}>
              Let’s Talk
              {/* Animated Arrow */}
              <span className="inline-block ml-3 group-hover:animate-arrow-move-up">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7" stroke="currentColor" strokeOpacity="0.9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M7 7H17V17" stroke="currentColor" strokeOpacity="0.9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
          </div>
          <div onClick={toggleMenu} aria-expanded={isMenuOpen} aria-label="Toggle menu"  className="flex-none bg-black flex items-center flex-wrap justify-center py-7 px-[38px] cursor-pointer">
            <button className="text-white">
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Offcanvas Menu */}
      <OffCanvasMenu isOpen={isMenuOpen} onLinkClick={handleLinkClick} />
    </>
  );
};

export default Header;
