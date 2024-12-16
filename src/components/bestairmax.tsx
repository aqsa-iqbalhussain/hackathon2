"use client";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useRef } from "react";
import Image from "next/image";

export default function BestAir() {
  // Products Array
  const products = [
    {
      id: 1,
      name: "Nike Air Max Pulse",
      type: "Women's Shoes",
      price: "₹ 13,995",
      image: "/photos/bestairmax1.png",
    },
    {
      id: 2,
      name: "Nike Air Max Pulse",
      type: "Men's Shoes",
      price: "₹ 13,995",
      image: "/photos/bestairmax2.png",
    },
    {
      id: 3,
      name: "Nike Air Max 97 SE",
      type: "Men's Shoes",
      price: "₹ 16,995",
      image: "/photos/bestairmax3.png",
    },
    {
      id: 4,
      name: "Nike Air Max 97 SE",
      type: "Men's Shoes",
      price: "₹ 15,995",
      image: "/photos/bestairmax4.webp",
    },
    {
      id: 5,
      name: "Nike Air Max 97 SE",
      type: "Men's Shoes",
      price: "₹ 15,995",
      image: "/photos/bestairmax5.webp",
    },
  ];

  const containerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    containerRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    containerRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="text-center py-8 bg-white shadow-md">
        <h1 className="text-2xl font-bold">Best of Air Max</h1>
      </header>

      {/* Main Section */}
      <main className="container mx-auto px-4 py-12 relative">
        {/* Navigation Buttons */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-200 z-10"
        >
          <FaArrowLeft className="text-xl" />
        </button>
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-200 z-10"
        >
          <FaArrowRight className="text-xl" />
        </button>

        {/* Product Carousel */}
        <div
          ref={containerRef}
          className="flex gap-8 overflow-x-auto scrollbar-hide"
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="min-w-[250px] bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={250}
                height={256}
                className="w-full h-64 object-cover"
              />
              <div className="p-4 text-center">
                <h2 className="text-lg font-bold">{product.name}</h2>
                <p className="text-sm text-gray-500">{product.type}</p>
                <p className="text-lg font-bold mt-2">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}