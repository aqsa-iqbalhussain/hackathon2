"use client"
import React, { useState } from "react";
import { GoSearch } from "react-icons/go";
import { IoMdHeartEmpty } from "react-icons/io";
import { MdOutlineShoppingBag } from "react-icons/md";
import { SiNike } from "react-icons/si";

const Navbar2 = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Main Navbar Section */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 md:px-6 py-2 md:py-4 flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center">
            <SiNike className="w-[50px] h-[20px] md:w-[60px] md:h-[24px]" />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6 font-medium text-gray-700 items-center text-sm md:text-base">
            <a href="newfeature" className="text-black hover:underline">
              New & Featured
            </a>
            <a href="cartpg" className="text-black hover:underline">
              Men
            </a>
            <a href="#" className="text-black hover:underline">
              Women
            </a>
            <a href="#" className="text-black hover:underline">
              Kids
            </a>
            <a href="#" className="text-black hover:underline">
              Sale
            </a>
            <a href="#" className="text-black hover:underline">
              SNKRS
            </a>
          </nav>

          {/* Search Section */}
          <div className="flex-1 max-w-xs md:mx-4 mt-2 md:mt-0">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search"
                className="w-full h-10 leading-6 pl-10 pr-4 bg-[#F5F5F5] border rounded-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300"
              />
              <GoSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
            </div>
          </div>

          {/* Icon Section */}
          <div className="flex items-center space-x-4">
            <IoMdHeartEmpty className="text-black w-6 h-6" />
            <MdOutlineShoppingBag className="text-black w-6 h-6" />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none text-gray-700"
            onClick={toggleMobileMenu}
          >
            {/* Hamburger Icon */}
            <div className="space-y-1">
              <div className="w-6 h-0.5 bg-black"></div>
              <div className="w-6 h-0.5 bg-black"></div>
              <div className="w-6 h-0.5 bg-black"></div>
            </div>
          </button>
        </div>

        {/* Right-Side Dropdown Menu for Mobile */}
        {isMobileMenuOpen && (
          <div
            className="absolute right-4 top-12 bg-white shadow-lg py-2 px-4 w-48 rounded-md z-50 md:hidden"
            style={{ position: "absolute" }}
          >
            <nav className="flex flex-col space-y-2 text-sm font-medium text-gray-700">
              <a href="newfeature" className="text-black hover:underline">
                New & Featured
              </a>
              <a href="cartpg" className="text-black hover:underline">
                Men
              </a>
              <a href="#" className="text-black hover:underline">
                Women
              </a>
              <a href="#" className="text-black hover:underline">
                Kids
              </a>
              <a href="#" className="text-black hover:underline">
                Sale
              </a>
              <a href="#" className="text-black hover:underline">
                SNKRS
              </a>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar2;
