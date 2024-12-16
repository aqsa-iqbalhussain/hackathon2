import React from 'react';
import Image from 'next/image';

const Features = () => {
  return (
    <>
      {/* Section Wrapper */}
      <section className="w-full bg-white">
        {/* Section Header */}
        <div className=" pt-6 sm:pt-8 md:pt-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium text-gray-800">Featured</h1>
        </div>

        {/* Image Section */}
        <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[700px]">
          <Image
            src="/photos/featured.jpg"
            alt="Nike Air Max Pulse"
            layout="fill"
            objectFit="cover"
          />
        </div>

        {/* Content Section */}
        <div className="flex flex-col items-center text-center py-8 px-4 sm:px-6 md:px-12 bg-white">
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 leading-tight max-w-4xl">
            STEP INTO WHAT FEELS GOOD
          </h1>

          {/* Description Text */}
          <p className="text-sm sm:text-base md:text-lg mb-6 text-gray-700 leading-relaxed max-w-lg">
            Cause everyone should know the feeling of running in that perfect pair.
          </p>

          {/* Call-to-Action Button */}
          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2">
            <button className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-700 transition">
              Find Your Shoe
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
