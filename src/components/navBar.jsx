import React from "react";

const NavBar = () => {
  return (
    <nav className="w-full h-16 bg-white flex items-center justify-between px-6 shadow-md mb-5">
      {/* Left Section: Logo */}
      <div className="flex">
        <img
          src="https://bitcoinworld.co.in/wp-content/uploads/1.-KoinX-Color-Logo-coin.jpg"
          alt="Logo"
          className=" h-16 w-auto "
        />
      </div>

      {/* Middle Section: Links */}
      <div className="flex space-x-6 text-gray-700 text-sm font-medium">
        <a href="#" className="hover:text-blue-500">
          Crypto Taxes
        </a>
        <a href="#" className="hover:text-blue-500">
          Free Tools
        </a>
        <a href="#" className="hover:text-blue-500">
          Resource Center
        </a>
      </div>

      {/* Right Section: Button */}
      <div>
        <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
