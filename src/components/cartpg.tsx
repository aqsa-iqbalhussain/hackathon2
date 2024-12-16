import React from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function CartPage() {
  return (
    <div className="bg-white text-gray-800 p-4 md:p-8">
      {/* Container */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {/* Bag Section */}
        <div className="md:col-span-1 lg:col-span-2">
          {/* Free Delivery */}
          <div className="bg-gray-100 p-4 mb-6 text-sm leading-5 rounded-md">
            <h1 className="font-semibold text-sm">Free Delivery</h1>
            Applies to orders of ₹14,000.00 or more.{" "}
            <a href="#" className="text-black underline">
              View details
            </a>
          </div>

          <h1 className="font-bold text-lg mb-4">Bag</h1>

          {/* Item 1 */}
          <div className="flex flex-wrap border-b pb-6 mb-6 items-start">
            <img
              src="/photos/cartmen.jpg"
              alt="Nike Product"
              className="w-24 md:w-[150px] h-[150px] object-cover rounded"
            />
            <div className="ml-4 flex-1 text-[#757575] leading-tight">
              <h3 className="text-lg text-black">Nike Dri-FIT ADV TechKnit Ultra</h3>
              <p className="text-sm text-[#757575]">Men's Short-Sleeve Running Top</p>
              <p className="text-sm text-[#757575]">Ashen Slate/Cobalt Bliss</p>
              <p className="text-sm mt-1 flex items-center">
                <span>Size</span>
                <span className="ml-2">L</span>
                <span className="ml-8">Quantity</span>
                <span className="ml-2">1</span>
              </p>
              <div className="flex items-center space-x-4 mt-2">
                <IoMdHeartEmpty className="border-[#111111] w-[24px] h-[24px] text-black" />
                <RiDeleteBin6Line className="border-[#111111] w-[24px] h-[24px] text-black" />
              </div>
            </div>
            <div className="text-right mt-2 w-full md:w-auto">MRP: ₹ 3,895.00</div>
          </div>

          {/* Item 2 */}
          <div className="flex flex-wrap border-b pb-6 mb-6 items-start">
            <div className="ml-4 flex-1 text-[#757575] flex flex-col leading-6">
              <h3 className="text-black text-lg mt-1 text-center lg:text-left">Nike Air Max 97 SE</h3>
              <p className="text-sm text-[#757575] mt-1 text-center lg:text-left">Men's Shoes</p>
              <p className="text-sm text-[#757575] mt-1 text-center lg:text-left">Flat Pewter/Light Bone/Black/White</p>
              <div className="mt-2 flex items-center justify-center lg:justify-start space-x-4">
                <span>Size</span>
                <span className="ml-1">8</span>
                <span className="ml-4">Quantity</span>
                <span className="ml-1">1</span>
              </div>
              <div className="flex items-center space-x-4 mt-2">
                <IoMdHeartEmpty className="border-[#111111] w-[24px] h-[24px] text-black" />
                <RiDeleteBin6Line className="border-[#111111] w-[24px] h-[24px] text-black" />
              </div>
            </div>
            <div className="text-right mt-2 w-full md:w-auto">MRP: ₹ 16,995.00</div>
          </div>
        </div>

        {/* Summary Section */}
        <div className="bg-white p-4 md:p-6 rounded-lg w-full md:w-[400px] lg:w-[350px] h-auto">
          <h2 className="text-xl font-semibold mb-4">Summary</h2>
          <div className="flex justify-between text-sm mb-2">
            <span>Subtotal</span>
            <span>₹ 20,890.00</span>
          </div>
          <div className="flex justify-between text-sm mb-2">
            <span>Estimated Delivery & Handling</span>
            <span>Free</span>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between text-lg mb-2">
            <span>Total</span>
            <span>₹ 20,890.00</span>
          </div>
          <hr className="my-4" />
          <button className="w-full bg-black text-white py-3 mt-6 rounded-full hover:bg-gray-800">
            Member Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
