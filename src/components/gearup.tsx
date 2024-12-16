"use client";

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
      <div className="grid grid-cols-2 gap-8">
        {/* Men's Section */}
        <div className="relative">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium">Shop Men's</h3>
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
            <div className="min-w-[300px] ">
              <img
                src="photos/gearupmen1.png"
                alt="Nike Dri-FIT ADV Techknit Ultra"
                className="w-[300px] h-[300px]"
              />
              <p className="mt-2 w-[219] h-[24] font-medium">Nike Dri-FIT ADV Techknit Ultra</p>
              <p style={{color:'#757575'}} className="text-sm" >Men's Short-Sleeve</p>
              <p style ={{color:'#757575'}} className="text-sm">Running Top</p>
              <p style={{ color: '#11111' }} className="text-sm">₹ 3,895 </p>
            </div>
            <div className="min-w-[300px]">
              <img
                src="photos/gearupmen2.png"
                alt="Nike Dri-FIT Challenger"
                className="w-[300px]h-[300px]"
              />
              <p className="mt-2 font-medium">Nike Dri-FIT Challenger</p>
              <p style ={{color:'#757575'}} className="text-sm">Men's 18cm( approx.) 2-</p>
              <p style ={{color:'#757575'}} className="text-sm">in-1 Versatile Shorts</p>
              <p className="text-sm text-black">₹ 2,495</p>
            </div>
            <div className="min-w-[300px]">
              <img
                src="photos/nikemen.jpg"
                alt="Nike Dri-FIT ADV Techknit Ultra"
                className="w-[300] h-[300]"
              />
              <p className="mt-2 font-medium">Nike Dri-FIT ADV Techknit Ultra</p>
              <p style={{color:'#757575'}} className="text-sm">Running Top</p>
              <p className="text-sm text-black">₹ 3,600</p>
            </div>
            {/* Add more cards as needed */}
          </div>
        </div>

        {/* Women's Section */}
        <div className="relative">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium">Shop Women's</h3>
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
            <div className="min-w-[300px]">
              <img
                src="photos/gearup1.png"
                alt="Nike Dri-FIT ADV Run Division"
                className="w-[300] h-[300]"
              />
              <p className="mt-2 font-medium">Nike Dri-FIT ADV Run Division</p>
              <p style={{color:'#757575'}}  className="text-sm">Women's Long-Sleeve</p>
              <p style={{color:'#757575'}} className="text-sm">Running Top</p>
              <p className="text-sm text-black">₹ 5,295</p>
            </div>
            <div className="min-w-[300px]">
              <img
                src="photos/gearup2.png"
                alt="Nike Fast"
                className="w-[300] h-[300]"
              />
              <p className="mt-2 font-medium">Nike Fast</p>
              <p style={{color:'#757575'}} className="text-sm">Women's Mid-Rise 7/8 Running Leggings with pockets</p>
              <p className="text-sm text-black">₹ 3,795</p>
            </div>

            <div className="min-w-[300px]">
              <img
                src="photos/niketshirt.webp"
                alt="Nike Dri-FIT ADV Run Division"
                className="w-[300] h-[300]"
              />
              <p className="mt-2 font-medium">Nike Dri-FIT ADV Run Division</p>
              <p style={{color:'#757575'}}  className="text-sm">Women's Short-Sleeve</p>
              <p style={{color:'#757575'}} className="text-sm">Running Top</p>
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