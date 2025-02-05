import React from 'react';

const Navbar3 = () => {
  return (
    <>
      <header className="bg-[#f5f5f5] w-full h-[60px] flex items-center justify-center px-4 sm:px-6 md:px-8">
        <nav className="flex flex-col items-center text-center">
          <span className="font-bold text-black text-sm sm:text-base md:text-lg">
            Hello Nike App
          </span>
          <span className="text-xs sm:text-sm md:text-base text-black mt-1">
            Download the app to access everything Nike.{' '}
            <a href="#" className="underline hover:text-blue-500">
              Get your great
            </a>
          </span>
        </nav>
      </header>
    </>
  );
};

export default Navbar3;
