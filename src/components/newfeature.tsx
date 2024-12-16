'use client';

import { useState } from 'react';

// Product Menu Items
const menuItems = [
  'Shoes',
  'Sports Bras',
  'Tops & T-Shirts',
  'Hoodies & Sweatshirts',
  'Jackets',
  'Trousers & Tights',
  'Shorts',
  'Tracksuits',
  'Jumpsuits & Rompers',
  'Skirts & Dresses',
  'Socks',
  'Accessories & Equipment',
];

// Example product data
  const product=[
  { id: 1, name: "Nike Air Force 1 Mid '07", price: '₹10,795.00', image: '/photos/product1.png' },
   { id: 2, name: 'Nike Court Vision Low Next Nature', price: '₹4,995.00', image: '/photos/product2.png' },
   { id: 3, name: 'Nike Air Force 1 PLT.AF.ORM', price: '₹8,695.00', image: '/photos/product3.png' },
   { id: 4, name: 'Nike Air Force 1 React', price: '₹13,295.00', image: '/photos/product4.png' },
   { id: 5, name: 'Air Jordan 1 Elevate Low', price: '₹11,895.00', image: '/photos/product5.png' },
   { id: 6, name: 'Nike Standard Issue', price: '₹2,895.00', image: '/photos/product6.png' },
   { id: 6, name: 'Nike Dunk Low Retro SE', price: '₹9,695.00', image: '/photos/product7.png' },
   { id: 7, name: 'Nike Dri-FIT UV Hyverse', price: '₹2,895.00', image: '/photos/product8.png' },
   { id: 8, name: 'Nike Court Vision Low', price: '₹5,695.00', image: '/photos/product9.png' },
   { id: 9, name: 'Nike Di-FIT Ready', price: '₹2,495.00', image: '/photos/product10.png' },
   { id: 10, name: 'Nike One Leak Protection:Period', price: '₹3,395.00', image: '/photos/pro11.png' },
   { id: 12, name: 'Nike Air Force 1 LV8 3', price: '₹7,495.00', image: '/photos/pro12.png' },
   { id: 13, name: 'Nike Blazer Low Platform', price: '₹8,195.00', image: '/photos/pro13.png' },
   { id: 14, name: "Nike Air Force 1 '07", price: '₹8,195.00', image: '/photos/pro14.png' },
   { id: 15, name: 'Nike Pro Dri-FIT', price: '₹1,495.00', image: '/photos/pro15.png' },
  { id: 16, name: 'Nike Dunk Low Retro', price: '₹8,695.00', image: '/photos/pro16.png' },
   { id: 17, name: 'Nike Air Max SC', price: '₹5,995.00', image: '/photos/pro17.png' },
   { id: 18, name: 'Nike Dri-FIT UV Miler ', price: '₹1,695.00', image: '/photos/pro18.png' },
   { id: 19, name: 'Nike Air Max SYSTM', price: '₹6,495.00', image: '/photos/pro19.png' },
   {  name: 'Nike Alate All U ', price: '₹2,195.00', image: '/photos/pro20.png' },
   {  name: 'Nike Court Legacy Lift', price: '₹3,095.00', image: '/photos/pro21.png' },
   {  name: 'Nike Swoosh', price: '₹8,895.00', image: '/photos/pro22.png' },
   {  name: 'Nike SB Zoom Janoski OG+ ', price: '₹7,895.00', image: '/photos/pro23.png' },
   {  name: 'Nike Dri-FIT Run Division Rise 365', price: '₹7,895.00', image: '/photos/pro24.png' },
   {  name: 'Nike Dri-FIT Challenger ', price: '₹6,595.00', image: '/photos/pro25.png' },
   {  name: 'Jordan Series ES ', price: '₹2,995.00', image: '/photos/pro27.png' },
   {  name: 'Nike Outdoor Play ', price: '₹3,835.00', image: '/photos/pro28.jpg' },
   {  name: 'Nike Sportswear Trend ', price: '₹5,875.00', image: '/photos/pro29.png' },
   {  name: "Nike Blazer Low '77 Jumbo ", price: '₹4,995.00', image: '/photos/pro30.png' },
   {  name: 'Nike SB Force 58 ', price: '₹7,375.00', image: '/photos/pro31.png' },

  ]
  




  export default function AllProduct() {
    const [isGenderOpen, setIsGenderOpen] = useState(true);
    const [isKidsOpen, setIsKidsOpen] = useState(false);
    const [isPriceOpen, setIsPriceOpen] = useState(false);
  
    return (
      <div className="flex flex-col md:flex-row min-h-screen bg-white">
        {/* Sidebar Section */}
        <aside className="w-full md:w-[260px] h-auto md:h-[849px] bg-white shadow-md p-4 overflow-y-auto">
          <h2 className="text-lg font-semibold mb-4" id="all">New (500)</h2>
  
          {/* Menu Items */}
          <ul className="mb-8 space-y-2">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="text-gray-800 font-medium hover:text-blue-600 cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
  
          {/* Collapsible Filters */}
          {/* Gender Filter */}
          <div className="mb-6">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setIsGenderOpen(!isGenderOpen)}
            >
              <h3 className="font-medium">Gender</h3>
              <span className="text-xl">^</span>
            </div>
            {isGenderOpen && (
              <ul className="mt-2 space-y-2 max-h-32 overflow-y-auto">
                {["Men", "Women", "Unisex"].map((gender, index) => (
                  <li key={index}>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="form-checkbox" />
                      <span>{gender}</span>
                    </label>
                  </li>
                ))}
              </ul>
            )}
          </div>
  
          {/* Kids Filter */}
          <div className="mb-6">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setIsKidsOpen(!isKidsOpen)}
            >
              <h3 className="font-medium">Kids</h3>
              <span className="text-xl">^</span>
            </div>
            {isKidsOpen && (
              <ul className="mt-2 space-y-2 max-h-32 overflow-y-auto">
                {["Boys", "Girls"].map((kidsType, index) => (
                  <li key={index}>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="form-checkbox" />
                      <span>{kidsType}</span>
                    </label>
                  </li>
                ))}
              </ul>
            )}
          </div>
  
          {/* Price Filter */}
          <div className="mb-6">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setIsPriceOpen(!isPriceOpen)}
            >
              <h3 className="font-medium">Shop by Price</h3>
              <span className="text-xl">^</span>
            </div>
            {isPriceOpen && (
              <ul className="mt-2 space-y-2 max-h-32 overflow-y-auto">
                {[
                  "Under ₹2,500.00",
                  "₹2,501.00-₹"
                ].map((price, index) => (
                  <li key={index}>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="form-checkbox" />
                      <span>{price}</span>
                    </label>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </aside>
  
        {/* Main Product Section */}
        <main className="flex-1 p-6 bg-white">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {product.map((product) => (
              <div
                key={product.id}
                className="w-full max-w-[348px] h-auto bg-gray-200"
              >
                <div className="h-[200px] md:h-[250px] lg:h-[348px] bg-gray-300">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-md md:text-lg font-medium mb-1">{product.name}</h3>
                  <p className="text-gray-600 text-sm md:text-base">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
  
          {/* Related Categories Section */}
          <div className="flex flex-wrap py-8 px-6 bg-white">
            <h2 className="text-2xl md:text-3xl mb-4 font-semibold">Related Categories</h2>
  
            <div className="flex flex-wrap justify-start gap-2">
              {[
                "Best Selling Products",
                "Best Shoes",
                "New Basketball Shoes",
                "New Football Shoes",
                "New Men's Shoes",
                "New Running Shoes",
                "Best Men's Shoes",
                "Best Women's Shoes"
              ].map((category, index) => (
                <button
                  key={index}
                  className="text-black border-2 border-[#CCCCCC] px-4 py-2 rounded-full font-medium transition duration-300 hover:bg-gray-200"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </main>
      </div>
    );
  }
  