import React from 'react';
import Image from 'next/image';

const Herosection = () => {
  return (
    <>
      <section className="w-full bg-gray-100">
        {/* Image Section */}
        <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[700px]">
          <Image
            src="/photos/nikeshoes.png" // Replace with your image path
            alt="Nike Air Max Pulse"
            layout="fill"
            objectFit="cover"
          />
        </div>

        {/* Text and Button Section */}
        <div className="flex flex-col items-center text-center py-6 px-4 sm:px-6 md:px-12 bg-white">
          <h2 className="text-xs sm:text-sm md:text-base font-semibold mb-2">First Look</h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 leading-tight">
            NIKE AIR MAX PULSE
          </h3>
          <p className="text-sm sm:text-base md:text-lg max-w-4xl mb-6 text-black leading-relaxed">
            Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse
            designed to push you past your limits and help you go to the max.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
            <button className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-700 transition w-full sm:w-auto">
              Notify Me
            </button>
            <button className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-700 transition w-full sm:w-auto">
              Shop Air Max
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Herosection;
