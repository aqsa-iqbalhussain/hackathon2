import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-black text-white relative">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        {/* Column 1 */}
        <div>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">FIND A STORE</a></li>
            <li><a href="#" className="hover:underline">BECOME A MEMBER</a></li>
            <li><a href="#" className="hover:underline">SIGN UP FOR EMAIL</a></li>
            <li><a href="#" className="hover:underline">SEND US FEEDBACK</a></li>
            <li><a href="#" className="hover:underline">STUDENT DISCOUNT</a></li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline text-[#ffff]">GET HELP</a></li>
            <li><a href="#" className="hover:underline text-[#7E7E7E]">Order Status</a></li>
            <li><a href="#" className="hover:underline text-[#7E7E7E]">Delivery</a></li>
            <li><a href="#" className="hover:underline text-[#7E7E7E]">Returns</a></li>
            <li><a href="#" className="hover:underline text-[#7E7E7E]">Payment Options</a></li>
            <li><a href="#" className="hover:underline text-[#7E7E7E]">Contact Us on Nike.com Inquiries</a></li>
            <li><a href="#" className="hover:underline text-[#7E7E7E]">Contact Us on All Other Inquiries</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline text-[#ffff]">ABOUT NIKE</a></li>
            <li><a href="#" className="hover:underline text-[#7E7E7E]">News</a></li>
            <li><a href="#" className="hover:underline text-[#7E7E7E]">Careers</a></li>
            <li><a href="#" className="hover:underline text-[#7E7E7E]">Investors</a></li>
            <li><a href="#" className="hover:underline text-[#7E7E7E]">Sustainability</a></li>
          </ul>
        </div>

        {/* Social Icons in Main Footer */}
        <div className=" absolute top-4 right-4 flex space-x-6  ">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Twitter"
          >
            <i className="fab fa-twitter text-xl"></i>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook text-xl"></i>
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="YouTube"
          >
            <i className="fab fa-youtube text-xl"></i>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram text-xl"></i>
          </a>
        </div>
      </div>

      {/* Sub-Footer */}
<div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-[#7E7E7E]">
  {/* Left Section */}
  <div className="flex items-center space-x-2">
    {/* Map Icon */}
    <a
      href="https://www.google.com/maps"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Open Map"
      className="text-gray-400 hover:text-white transition-colors"
    >
      <i className="fas fa-map-marker-alt text-lg"></i>
    </a>
    <div className="flex items-center space-x-4">
          <span className="text-[#ffff]">India</span>
          <span>© 2023 Nike, Inc. All Rights Reserved</span>
        </div>
  </div>

  {/* Right Section */}
  <div className="flex justify-center md:justify-end space-x-4 mt-4 md:mt-0">
    <a href="#" className="hover:underline text-[#7E7E7E]">Guides</a>
    <a href="#" className="hover:underline text-[#7E7E7E]">Terms of Sale</a>
    <a href="#" className="hover:underline text-[#7E7E7E]">Terms of Use</a>
    <a href="#" className="hover:underline text-[#7E7E7E]">Nike Privacy Policy</a>
  </div>
</div>
    
    </footer>
  );
}