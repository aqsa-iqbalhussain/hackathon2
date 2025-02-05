import React from 'react';
import Image from 'next/image';

const Dontmiss = () => {
  return (
    <>
      {/* Section Wrapper */}
      <section className="w-full bg-white">
        {/* Section Header */}
        <div className="text-center pt-6 sm:pt-8 md:pt-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800">
            Don&apos;t Miss
          </h1>
        </div>

        {/* Image Section */}
        <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[700px]">
          <Image
            src="/photos/dontmiss.png"
            alt="Nike Air Max Pulse"
            layout="fill"
            objectFit="cover"
            className="object-cover w-full h-full" // Ensure image scales correctly
          />
        </div>

        {/* Content Section */}
        <div className="flex flex-col items-center text-center py-8 px-4 sm:px-6 md:px-12 bg-white">
          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 leading-tight max-w-3xl">
            FLIGHT ESSENTIALS
          </h1>

          {/* Description Text */}
          <p className="text-sm sm:text-base md:text-lg mb-6 text-gray-700 leading-relaxed max-w-lg">
            Your build-to-last, all week wears—but with style only Jordan Brand can deliver.
          </p>

          {/* Call-to-Action Button */}
          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2">
            <button className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-700 transition">
              Shop
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dontmiss;
