import React from 'react'
import Image from 'next/image'

const Signin = () => {
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
      {/* Heading */}
      <h2 className="text-center font-bold text-2xl mb-6">
        YOUR ACCOUNT<br />FOR EVERYTHING<br />NIKE
      </h2>
      
      {/* Form */}
      <form className="w-full flex flex-col gap-4 ">
        {/* Email Input */}
        <input
          type="email"
          placeholder="Email address"
          className=" border-gray-300 p-3 rounded-md focus:outline-black w-[324px] h-[40px] border-[1px] text-[#8D8D8D]"
        />
        
        {/* Password Input */}
        <input
          type="password"
          placeholder="Password"
          className=" border-gray-300 p-3 rounded-md focus:outline-black w-[324px] h-[40px] border-[1px] text-[#8D8D8D]"
        />
        
        {/* Checkbox and Forgot Password */}
        <div className="flex items-center gap-2 text-sm text-[#8D8D8D]">
          <input type="checkbox" id="keep-signed" />
          <label htmlFor="keep-signed">Keep me signed in</label> <br/> <br/>
          <a href="#" className=" text-[#BCBCBC] ">
            Forgotten your password?
          </a>
        </div>

        <p className="text-sm text-[#8D8D8D] text-center h-[30px] ]">
          By logging in, you agree to Nike's{" "}
     <span className="underline text-[#8D8D8D] cursor-pointer">Privacy Policy</span>{" "}
     and{" "}
     <span className="underline text-[#8D8D8D] cursor-pointer">Term of Use</span>.
     </p>
     <br/>
 
        
        {/* Button */}
        <button
          type="submit"
          className="bg-black text-white py-3 rounded-md hover:bg-gray-800 transition"
        >
          SIGN IN
        </button>
      </form>
      
      {/* Footer */}
      <p className="text-[#8D8D8D] mt-4 text-xs">
        Not a Member? <a href="#" className="text-black underline">Join Us.</a>
      </p>
    </div>
  );
};

export default Signin;