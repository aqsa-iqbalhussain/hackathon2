"use client";
import Link from "next/link";
import React, { useState } from "react";
import { SiJordan } from "react-icons/si";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Header Section */}
      <header className="border-b shadow-sm bg-[#f5f5f5] w-full">
        <div className="container mx-auto flex justify-between items-center px-4 md:px-6 py-2">

          {/* Logo Section */}
          <div className="flex items-center text-2xl md:text-3xl text-black">
            <Link href="/">
            <SiJordan />
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-4 text-sm font-medium text-gray-700">
            <a href="checkout" className="text-black hover:text-gray-600">Find a Store</a>
            <span className="text-black">|</span>
            <a href="contactus" className="text-black hover:text-gray-600">Help</a>
            <span className="text-black">|</span>
            <a href="joinus" className="text-black hover:text-gray-600">Join Us</a>
            <span className="text-black">|</span>
            <a href="signin" className="text-black hover:text-gray-600">Sign In</a>
          </nav>

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

        {/* Mobile Menu Dropdown - Positioned to the right side */}
        {isMobileMenuOpen && (
          <div
            className="absolute right-4 top-12 bg-white shadow-lg py-2 px-4 space-y-2 text-sm text-gray-700 w-48 z-50 md:hidden"
          >
            <a href="checkout" className="block hover:text-gray-600">Find a Store</a>
            <a href="contactus" className="block hover:text-gray-600">Help</a>
            <a href="joinus" className="block hover:text-gray-600">Join Us</a>
            <a href="signin" className="block hover:text-gray-600">Sign In</a>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
