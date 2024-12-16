import React from "react";
import Image from 'next/image';

const Signup = () => {
  return (
    <div className="flex flex-col items-center w-full max-w-sm mx-auto p-6">
        <div className="flex items-center mb-2 md:mb-0">
            <Image
              src="/photos/Logo_nike_principal.jpg"
              alt="Nike Logo"
              width={58.85}
              height={20.54}
            />
          </div>
          <div className="flex flex-col items-center w-full max-w-sm mx-auto p-6">
      {/* Header */}
      <h2 className="text-center font-bold text-1xl">BECOME A NIKE MEMBER</h2>
      <br/>
      <p className="text-center text-[#8D8D8D] mb-6 max-w-lg mx-auto leading-6 text-sm">
        Create your Nike Member profile and get first access to the very best of Nike products, inspiration and community.
      </p>

      {/* Form */}
      <form className="w-[324px] h[40px] flex flex-col gap-4">
        {/* Email Address */}
        <input
          type="email"
          placeholder="Email address"
          className="border border-gray-300 p-3 rounded-md focus:outline-black"
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          className="border border-gray-300 p-3 rounded-md focus:outline-black"
        />

        {/* First Name */}
        <input
          type="text"
          placeholder="First Name"
          className="border border-gray-300 p-3 rounded-md focus:outline-black"
        />

        {/* Last Name */}
        <input
          type="text"
          placeholder="Last Name"
          className="border border-gray-300 p-3 rounded-md focus:outline-black"
        />

        {/* Date of Birth */}
        <input
          type="Date of Birth"
          placeholder="Date of Birth"
          className="border border-gray-300 p-3 rounded-md focus:outline-black text-[#8D8D8D]"
        />
        <p className="text-xs text-center text-[#8D8D8D] -mt-2">
        Get a Nike Member Reward every year on your Birthday.
        </p>

        {/* Country Dropdown */}
        <select
          className="border border-gray-300 p-3 rounded-md focus:outline-black text-[#8D8D8D]"
          defaultValue="India"
        >
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
          <option value="Canada">Canada</option>
        </select>

        {/* Gender Selection */}
        <div className="flex gap-4 text-[#8D8D8D]">
          <button
            type="button"
            className="w-1/2 border border-gray-300 py-2 rounded-md text-center hover:bg-gray-200"
          >
            Male
          </button>
          <button
            type="button"
            className="w-1/2 border border-gray-300 py-2 rounded-md text-center hover:bg-gray-200"
          >
            Female
          </button>
        </div>

        {/* Email Subscription Checkbox */}
        <div className="flex items-start gap-2 Text-[#8D8D8D]">
          <input type="checkbox" id="email-updates" />
          <label htmlFor="email-updates" className="text-xs text-[#8D8D8D]">
            Sign up for emails to get updates from Nike on products, offers, and your Member benefits.
          </label>
        </div>

        <p className="text-xs text-[#8D8D8D] text-center h-[30px] ]">
          By creating an account, you agree to Nike's{" "}
     <span className="underline text-[#8D8D8D] cursor-pointer">Privacy Policy</span>{" "}
     and{" "}
     <span className="underline text-[#8D8D8D] cursor-pointer">Term of Use.</span>.
     </p>
    
 

        {/* Join Button */}
        <button
          type="submit"
          className="bg-black text-white py-3 rounded-md hover:bg-gray-800 transition"
        >
          JOIN US
        </button>
      </form>

      {/* Footer */}
      <p className="text-[#8D8D8D] mt-6 text-xs">
        Already a Member?{" "}
        <a href="#" className="text-black underline">
          Sign In.
        </a>
      </p>
    </div>
    </div>
  );
};

export default Signup;