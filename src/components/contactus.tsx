import React from 'react';
//import '@fortawesome/fontawesome-free/css/all.css';
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { GoSearch } from "react-icons/go";

export default function HelpPage() {
  return (
    <div className="bg-white text-gray-800 min-h-screen p-6">
      {/* Header */}
      <div className="text-center font-semibold text-3xl">
        <h1>GET HELP</h1>
      </div>

      {/* Search Input */}
      <div className="flex items-center justify-center mt-4 ">
        <div className='relative w-[457.33px]'>
        <input
          type="text" // Fixed input type
          placeholder="What can we help you with?"
         className="border-gray-300 pl-12 rounded-md focus:outline-black w-[457.33px] h-[56px] border-[1px] text-[#757575]"
        />
        <GoSearch className='absolute right-4 top-1/3 transform-translate-y-1/2 text-gray-500 text-xl'/>
      </div>
      </div>

      <br />
      <br />

      {/* Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 bg-white">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          <h1 className="text-2xl font-bold">WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?</h1>
          <div>
          <p className="text-black text-xs leading-4 mb-3">
            We want to make buying your favorite Nike shoes and gear online fast and easy, and we accept the following payment options:
          </p>
          <div className="list-disc list-inside text-xs text-black space-y-1">
            <p className='text-left leading-6 pl-5'>Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro</p>
            <p className='leading-6 pl-5'>If you enter your PAN information at checkout, you'll be able to pay for your order with PayTM or a local credit or debit card.</p>
            <p className='leading-6 pl-5'>Apple Pay</p>
            </div>
            <br/>
            <p className="text-[#111111] text-sm ">
            <a href='#' className='text-black underline'>Nike Members</a> can store multiple debit or credit cards for faster checkout. If you're not already a Member,{' '}
            <a href="#" className="text-black underline">join us today</a>.
          </p>
          </div>

          {/* Buttons */}
          <div className="flex space-x-4">
            <button className="bg-[#111111] text-[#ffffff] px-6 py-2 rounded-full hover:bg-gray-800">JOIN US</button>
            <button className=" bg-[#111111] text-[#ffffff] px-6 py-2 rounded-full hover:bg-gray-800">SHOP NIKE</button>
          </div>

          {/* FAQs */}
          <div>
            <h2 className="text-lg font-bold mb-4">FAQs</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Does my card need international purchases enabled?</p>
                <p className="text-[#111111] text-sm">
                Yes, we recommend asking your bank to enable international purchases on your card. You will be notified at checkout if international purchases need to be enabled.
                </p>
              </div>
             <p className='text-[#111111] text-sm'>
               <a href='#' className='text-black'> Please note, some banks may charge </a>
               <a href='#'className='text-black underline'>a small transaction fee </a>
               for international orders.</p>
              <div>
                <p className="font-semibold w-[389px] h-[28px]">Can I pay for my order with multiple methods?</p>
                <p className="text-[#111111] text-sm">No,payment for Nike orders can't be split between multiple payment methods.</p>
              </div>
              <div>
                <p className="font-semibold">What payment method is accepted for SNKRS orders?</p>
                <p className="text-[#111111] text-sm">You can use any accepted credit card to pay for your SNKRS order.</p>
              </div>
              <div>
                <p className="font-semibold">Why don't I see Apple Pay as an option?</p>
                <p className="text-[#111111] text-sm">
                To see Apple Pay as an option in the Nike App or on Nike.com, you'll need to use a compatible Apple device running the latest OS, be signed in to your iCloud account and have a supported card in your Wallet. Additionally, you'll need to use Safari to use Apple Pay on Nike.com.
                </p>
              </div>

              <p className='text-sm'>Was this answer helpful?</p>
              <div className="flex items-center space-x-2">
                <br/>
  {/* <button className="text-xl text-gray-700 hover:text-black">
    <i className="fas fa-thumbs-up"></i>
  </button>
  <button className="text-xl text-gray-700 hover:text-black">
    <i className="fas fa-thumbs-down"></i>
  </button> */}

<div className="flex items-center space-x-2">
      <button className="text-xl text-gray-700 hover:text-black">
        <FaThumbsUp />
      </button>
      <button className="text-xl text-gray-700 hover:text-black">
        <FaThumbsDown />
      </button>
    </div>
    </div>

    <div className="mt-12">
        <h3 className="font-semibold mb-2 text-[#757575]">RELATED</h3>
        <a href="#" className="block text-black underline text-left leading-6 pl-5">WHAT ARE NIKE'S DELIVERY OPTIONS?</a>
        <br/>
        <a href="#" className="block text-black underline text-left leading-6 pl-5">HOW DO I GET FREE DELIVERY ON NIKE ORDERS?</a>
      </div>



            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white p-6 rounded shadow space-y-8">
          <div>
          <div className="flex flex-col items-center justify-center mt-4">
  {/* Section Heading */}
  <h2 className="text-xl font-semibold mb-4">CONTACT US</h2>

  {/* Image Centered */}
  <div className="flex items-center justify-center mb-4">
    <img src="/photos/mobile.png" alt="Mobile" />
  </div>

  {/* Contact Information */}
  <div className="text-center text-black leading-5">
    <p>
      <span className="font-semibold">000 800 919 0566</span>

      <br />
      Products & Orders: 24 hours a day,<br/>
       7 days a week <br/>
   Company Info & Enquiries: 07:30 - <br/>
    16:30, Monday - Friday
      <br />
    </p>
  </div>
</div>
<br/>
<br/>

              <div className="flex items-center justify-center mb-4">
              <img src="/photos/msgicon.png" alt="Message" />
              </div>
              <p className='text-center text-black leading-5 font-semibold'>24 hours a day</p>
              <p className='text-center'>7 days a week</p>
              <br/>
              <br/>

              <div className="flex items-center justify-center mb-4">
              <img src="/photos/email.png" alt="email" />
              </div>
              <p className='text-center text-black leading-5 font-semibold'>We'll reply within</p>
              <p className='text-center'>five business days</p>
              <br/>
              <br/>

              <div className="flex items-center justify-center mb-4">
              <img src="/photos/location.png" alt="location" />
              </div>
              <p className='text-center text-black leading-5 font-semibold'>STORE LOCATOR</p>
              <p className='text-center'>Find Nike retail stores near you</p>
              <br/>
              <br/>
            
          </div>
        </div>
      </div>

      {/* Related Links */}
      
    </div>
  );
}