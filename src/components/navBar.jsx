import React, { useState } from 'react';
import Logo from "../assets/Logo.png";
import { MdOutlineMenu, MdClose } from "react-icons/md";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className='w-full border-[1px] bg-white shadow-custom lg:h-[80px] sm:h-[64px] flex items-center justify-between border-b-[1px] border-b-[#DEDFE2] px-[20px] lg:px-[60px]'>
        {/* Logo Section */}
        <div>
          <img src={Logo} loading='lazy' width={96} height={64} alt="Logo" />
        </div>

        {/* Desktop Menu */}
        <div className='hidden lg:flex flex-row gap-7 items-center'>
          <div className="text-[#0F1629] text-[16px] font-semibold text-left hover:text-blue-600">
            Crypto Taxes
          </div>
          <div className="text-[#0F1629] text-[16px] font-semibold text-left hover:text-blue-600">
            Free Tools
          </div>
          <div className="text-[#0F1629] text-[16px] font-semibold text-left hover:text-blue-600">
            Resource Center
          </div>
          <button className='w-[136px] h-[40px] p-[8px] bg-custom-gradient rounded-[8px] text-white hover:shadow-md bg-blue-600'>
            Get Started
          </button>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className='lg:hidden'>
          {isMenuOpen ? (
            <MdClose
              className='w-[27.42px] h-[27.42px] text-[#0B182F]'
              onClick={toggleMenu}
            />
          ) : (
            <MdOutlineMenu
              className='w-[27.42px] h-[27.42px] text-[#0B182F]'
              onClick={toggleMenu}
            />
          )}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`lg:hidden bg-white shadow-md border-t-[1px] border-[#DEDFE2] flex flex-col items-center py-4 transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="text-[#0F1629] text-[16px] font-semibold hover:text-blue-600 mb-3">
          Crypto Taxes
        </div>
        <div className="text-[#0F1629] text-[16px] font-semibold hover:text-blue-600 mb-3">
          Free Tools
        </div>
        <div className="text-[#0F1629] text-[16px] font-semibold hover:text-blue-600 mb-3">
          Resource Center
        </div>
        <button className='w-[136px] h-[40px] p-[8px] bg-custom-gradient rounded-[8px] text-white hover:shadow-md bg-blue-600'>
          Get Started
        </button>
      </div>
    </>
  );
};

export default Navbar;
