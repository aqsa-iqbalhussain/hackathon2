"use client";
import Image from "next/image";
import { FaRegSquareCheck } from "react-icons/fa6";

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
  <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 px-5 py-5">
    {/* LEFT SECTION with reduced width */}
    <div className="lg:col-span-2 lg:max-w-[65%]">
      {/* Header */}
      <h1 className="text-2xl font-bold mb-4">
        How would you like to get your order?
      </h1>
      <p className="text-sm text-[#757575] mb-6 leading-5">
      Customs regulation for India require a copy of the recipient's KYC. The address on the KYC needs to match the shipping address. Our courier will contact you via SMS/email to obtain a copy of your KYC. The KYC will be stored securely and used solely for the purpose of clearing customs (including sharing it with customs officials) for all orders and returns.
       If your KYC does not match your shipping address, please click the link for more information. <span className="underline ">Learn More</span>
      </p>

      {/* Deliver Button */}
      <button className="w-full py-3 border border-black rounded-md font-medium text-left text-black mb-8 flex items-center gap-2">
      <FaRegSquareCheck className="text-center" />
      Deliver It
    </button>


      {/* FORM */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold mb-2">Enter your name and address:</h2>

        
          <input
            type="text"
            placeholder="First Name"
            className="border border-gray-300 p-3 rounded-md w-full text-sm  placeholder-black"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="border border-gray-300 p-3 rounded-md w-full text-sm  placeholder-black"
          />
          <div className="space-y-1">
        

        <input
          type="text"
          placeholder="Address Line 1"
          className="border border-gray-300 p-3 rounded-md w-full text-sm  placeholder-black "
        />
        <p className="text-xs text-[#757575]  mt-0 mb-0 py-0 leading-6 pl-5 ">We do not ship to P.O. boxes </p>
        <input
          type="text"
          placeholder="Address Line 2"
          className="border border-gray-300 p-3 rounded-md w-full text-sm  placeholder-black"
        />
        </div>
        <input
          type="text"
          placeholder="Address Line 3"
          className="border border-gray-300 p-3 rounded-md w-full text-sm  placeholder-black"
        />

        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Postal Code"
            className="border border-gray-300 p-3 rounded-md w-full text-sm  placeholder-black"
          />
          <input
            type="text"
            placeholder="Locality"
            className="border border-gray-300 p-3 rounded-md w-full text-sm  placeholder-black"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <select className="border border-gray-300 p-3 rounded-md w-full text-sm text-[#8D8D8D]">
            <option>State/Territory</option>
          </select>
          <div className="relative w-full">
  <input
    type="text"
    placeholder="India"
    className="border border-gray-300 p-3 rounded-md w-full text-sm placeholder-black"
  />
  {/* Green Dot */}
  <div className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#19AB20] w-2 h-2 rounded-full"></div>
</div>

        </div>

        {/* CONTACT INFO */}
        <h2 className="text-lg font-semibold mt-6 mb-2">
          What's your contact information?
        </h2>
        <div className="space-y-1">
        <input
          type="email"
          placeholder="Email"
          className="border border-gray-300 p-3 rounded-md w-full text-sm placeholder-black"
        />
        <p className="text-xs text-[#757575] leading-6 pl-5">A confirmation email will be sent after checkout.</p>
        <input
          type="text"
          placeholder="Phone Number"
          className="border border-gray-300 p-3 rounded-md w-full text-sm placeholder-black"
        />
        <p className="text-xs text-[#757575] leading-6 pl-5">A carrier might contact you to confirm delivery.</p>
        </div>

        {/* PAN INFO */}
        <h2 className="text-lg font-semibold mt-6 mb-2">What's your PAN?</h2>
        <input
          type="text"
          placeholder="PAN"
          className="border border-gray-300 p-3 rounded-md w-full text-sm placeholder-black"
        />
        <p className="text-[#757575] text-sm leading-5 pl-5">Enter your PAN to enable payment with UPI, Net Banking or local card methods</p>

        {/* Agreement and Continue */}
        <div className="flex items-start mt-4 space-x-2">
          <input type="checkbox" className="mt-0 " />
          <p className="text-xs text-[#757575]">
          Save PAN details to Nike Profile
          </p>
        </div>

        <br/>
        <br/>
        <div className="flex items-start mt-4 space-x-2">
          <input type="checkbox" className="mt-0 " />
          <p className="text-xs text-[#757575]">
          I have read and consent to eShopWorld processing my information in accordance with the<span className="underline"> Privacy Statement </span> and <span className="underline">Cookie Policy.</span> eShopWorld is a trusted Nike partner.
          </p>
        </div>
        <br/>

        <button className="w-full py-3 bg-[#F5F5F5] text-[#575757] rounded-full mt-6 hover:bg-gray-700">
          Continue
        </button>

        <hr className="my-4" />

        <h1 className="text-black text-bold">Delivery</h1>
        <hr className="my-4" />
        <h1 className="text-[#757575] ">Shipping</h1>
        <hr className="my-4" />
        <h1 className="text-[#757575]">Billing</h1>
        <hr className="my-4" />
        <h1 className="text-[#757575]"> Payment</h1>


      </div>
    </div>

    {/* RIGHT SECTION */}
    <div className="w-[320px] h-[721px]">
      <h2 className="text-lg font-semibold mb-4">Order Summary</h2>

      {/* Price Summary */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm text-[#8D8D8D]">
          <span>Subtotal</span>
          <span>₹ 20,890.00</span>
        </div>
        <div className="flex justify-between text-sm text-[#8D8D8D]">
          <span>Delivery/Shipping</span>
          <span>Free</span>
        </div>
        <hr className="my-4" />
        <div className="flex justify-between font-semibold text-base mt-2">
          <span>Total</span>
          <span>₹ 20,890.00</span>
        </div>
      </div>
      <hr className="my-4" />
      <p className="text-black text-xs w-[#316]">(The total reflects the price of your order, including all duties and taxes)</p>
      <br/>
    <p className=" text-semibold text-lg mb-4 text-black">
      Arrives Mon, 27 Mar - Wed, 12 Apr
      </p>

      {/* Product List */}
      <div className="mt-6 space-y-4">
        <div className="flex items-center space-x-4">
          <img
            src="/photos/cartmen.jpg"
            alt="Nike Shirt"
            className="rounded-md w-[208px] h-[208px]"
          />
          <div>
            <h3 className="text-sm font-medium">Nike Dri-FIT ADV TechKnit Ultra Men's Short-Sleeve Running Top</h3>
            <p className="text-sm text-[#8D8D8D]">Qty 1</p>
            <p className="text-sm text-[#8D8D8D]">Size L</p>
            <p className="text-sm text-[#8D8D8D]">₹ 3,895.00</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <img
            src="/photos/nike97.jpg"
            alt="Nike Shoes"
            className="rounded-md w-[208px] h-[208px]"
          />
          <div>
            <h3 className="text-sm font-medium">Nike Air Max 97 SE Men's Shoes</h3>
            <p className="text-sm text-[#8D8D8D]">Qty 1</p>
            <p className="text-sm text-[#8D8D8D]">Size UK 8</p>
            <p className="text-sm text-[#8D8D8D]">₹ 16,995.00</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  )

}