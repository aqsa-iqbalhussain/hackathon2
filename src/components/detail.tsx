import React from 'react';
import Link from 'next/link';

import { LuShoppingCart } from "react-icons/lu";

export default function ProductDetail() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        {/* Left Side: Hero Image */}
        <div className="">
          <img
            alt="hero"
            src="/photos/product3.png"
            className="object-cover object-center rounded h-[653px] top-[110px] "
          />
        </div>

        {/* Right Side: Content Section */}
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-8 font-medium text-gray-900">
          Nike Air Force 1 
        
            <br className="hidden lg:inline-block" />

            PLT.AF.ORM
          </h1>
          <p className="mb-8 leading-relaxed text-sm">
          Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its &quot;inside out &quot;-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, 
          while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.
          </p>
          <span className=' text-black text-4xl'>₹ 8 695.00</span>

          <br/>
          <div className="flex justify-center">
            {/* Primary Button */}
            <Link href="/details">
            <button className="inline-flex items-center text-white bg-black rounded-full border-0 py-2 px-6 focus:outline-none text-lg">
  <LuShoppingCart style={{ marginRight: '8px' }} /> Add To Cart
</button>

            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
