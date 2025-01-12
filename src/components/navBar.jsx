import React from "react";

const NavBar = () => {
  return (
    <nav className="w-full h-16 bg-white flex items-center justify-between px-6 shadow-md mb-5 border-b border-gray-200">
      {/* Left Section: Logo */}
      <div className="flex items-center">
        <img
          src="https://bitcoinworld.co.in/wp-content/uploads/1.-KoinX-Color-Logo-coin.jpg"
          alt="Logo"
          className="h-10 w-auto"
        />
      </div>

      {/* Middle Section: Links */}
      <div className="flex space-x-8 text-gray-600 text-sm font-medium">
        <a href="#" className="hover:text-blue-600">
          Crypto Taxes
        </a>
        <a href="#" className="hover:text-blue-600">
          Free Tools
        </a>
        <a href="#" className="hover:text-blue-600">
          Resource Center
        </a>
      </div>

      {/* Right Section: Button */}
      <div className="flex items-center">
        <button className="px-5 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
