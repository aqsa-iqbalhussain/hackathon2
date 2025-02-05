"use client";

import Image from "next/image";
import React, { useRef } from "react";

const GearUpSection = () => {
  const mensRef = useRef<HTMLDivElement>(null);
  const womensRef = useRef<HTMLDivElement>(null);

  const scrollHorizontally = (ref: React.RefObject<HTMLDivElement>, direction: "left" | "right") => {
    if (ref.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      ref.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-xl font-semibold mb-6">Gear Up</h2>

      {/* Wrapper for Men's and Women's Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Men's Section */}
        <div className="relative">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium">Shop Men&apos;s</h3>
            <div className="flex gap-2">
              <button
                onClick={() => scrollHorizontally(mensRef, "left")}
                className="bg-white border border-gray-300 rounded-full w-10 h-10 flex items-center justify-center"
              >
                &lt;
              </button>
              <button
                onClick={() => scrollHorizontally(mensRef, "right")}
                className="bg-white border border-gray-300 rounded-full w-10 h-10 flex items-center justify-center"
              >
                &gt;
              </button>
            </div>
          </div>
          <div
            ref={mensRef}
            className="flex overflow-x-scroll scrollbar-hide gap-4 scroll-smooth"
          >
            <div className="min-w-[280px] sm:min-w-[300px]">
              <Image
                src="/photos/gearupmen1.png" // Added the leading slash
                alt="Nike Dri-FIT ADV Techknit Ultra"
                width={500}
                height={500}
                className="w-full h-auto"
              />
              <p className="mt-2 font-medium">Nike Dri-FIT ADV Techknit Ultra</p>
              <p style={{ color: '#757575' }} className="text-sm">Men&apos;s Short-Sleeve</p>
              <p style={{ color: '#757575' }} className="text-sm">Running Top</p>
              <p className="text-sm text-black">₹ 3,895</p>
            </div>
            <div className="min-w-[280px] sm:min-w-[300px]">
              <Image
                src="/photos/gearupmen2.png" // Added the leading slash
                alt="Nike Dri-FIT Challenger"
                width={500}
                height={500}
                className="w-full h-auto"
              />
              <p className="mt-2 font-medium">Nike Dri-FIT Challenger</p>
              <p style={{ color: '#757575' }} className="text-sm">Men&apos;s 18cm( approx.) 2-</p>
              <p style={{ color: '#757575' }} className="text-sm">in-1 Versatile Shorts</p>
              <p className="text-sm text-black">₹ 2,495</p>
            </div>
            <div className="min-w-[280px] sm:min-w-[300px]">
              <Image
                src="/photos/nikemen.jpg" // Added the leading slash
                alt="Nike Dri-FIT ADV Techknit Ultra"
                width={500}
                height={500}
                className="w-full h-auto"
              />
              <p className="mt-2 font-medium">Nike Dri-FIT ADV Techknit Ultra</p>
              <p style={{ color: '#757575' }} className="text-sm">Running Top</p>
              <p className="text-sm text-black">₹ 3,600</p>
            </div>
            {/* Add more cards as needed */}
          </div>
        </div>

        {/* Women's Section */}
        <div className="relative">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium">Shop Women&apos;s</h3>
            <div className="flex gap-2">
              <button
                onClick={() => scrollHorizontally(womensRef, "left")}
                className="bg-white border border-gray-300 rounded-full w-10 h-10 flex items-center justify-center"
              >
                &lt;
              </button>
              <button
                onClick={() => scrollHorizontally(womensRef, "right")}
                className="bg-white border border-gray-300 rounded-full w-10 h-10 flex items-center justify-center"
              >
                &gt;
              </button>
            </div>
          </div>
          <div
            ref={womensRef}
            className="flex overflow-x-scroll scrollbar-hide gap-4 scroll-smooth"
          >
            <div className="min-w-[280px] sm:min-w-[300px]">
              <Image
                src="/photos/gearup1.png" // Added the leading slash
                alt="Nike Dri-FIT ADV Run Division"
                width={500}
                height={500}
                className="w-full h-auto"
              />
              <p className="mt-2 font-medium">Nike Dri-FIT ADV Run Division</p>
              <p style={{ color: '#757575' }} className="text-sm">Women&apos;s Long-Sleeve</p>
              <p style={{ color: '#757575' }} className="text-sm">Running Top</p>
              <p className="text-sm text-black">₹ 5,295</p>
            </div>
            <div className="min-w-[280px] sm:min-w-[300px]">
              <Image
                src="/photos/gearup2.png" // Added the leading slash
                alt="Nike Fast"
                height={500}
                width={500}
                className="w-full h-auto"
              />
              <p className="mt-2 font-medium">Nike Fast</p>
              <p style={{ color: '#757575' }} className="text-sm">Women&apos;s Mid-Rise 7/8 Running Leggings with pockets</p>
              <p className="text-sm text-black">₹ 3,795</p>
            </div>

            <div className="min-w-[280px] sm:min-w-[300px]">
              <Image
                src="/photos/niketshirt.webp" // Added the leading slash
                alt="Nike Dri-FIT ADV Run Division"
                width={500}
                height={500}
                className="w-full h-auto"
              />
              <p className="mt-2 font-medium">Nike Dri-FIT ADV Run Division</p>
              <p style={{ color: '#757575' }} className="text-sm">Women&apos;s Short-Sleeve</p>
              <p style={{ color: '#757575' }} className="text-sm">Running Top</p>
              <p className="text-sm text-black">₹ 5,295</p>
            </div>
            {/* Add more cards as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GearUpSection;
