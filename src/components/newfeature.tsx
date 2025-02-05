'use client';

import { useEffect, useState } from 'react';
import { Product } from '../../types/products';
import { client } from '@/sanity/lib/client';
import { allProducts, four } from '@/sanity/lib/queries';
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import Link from 'next/link';
import { addToCart } from '@/app/actions/actions';
import Swal from "sweetalert2";


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

export default function AllProduct() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isGenderOpen, setIsGenderOpen] = useState(true);
  const [isKidsOpen, setIsKidsOpen] = useState(false);
  const [isPriceOpen, setIsPriceOpen] = useState(false);

  useEffect(() => {
    async function fetchProducts() {
      const fetchedProducts: Product[] = await client.fetch(allProducts);
      setProducts(fetchedProducts);
    }
    fetchProducts();
  }, []);

   const handleAddToCart = (e: React.MouseEvent, product : Product) => {
        e.preventDefault();
        Swal.fire({
  
          position : "top-right",
          icon : "success",
          title : `${product.productName} added to cart`,
          showConfirmButton : false,
          timer : 1000,
        })
   
        
        addToCart(product);
        
  
      }


  

 
  



  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white">
      {/* Sidebar Section */}
      <aside className="w-full md:w-[260px] h-auto md:h-[849px] bg-white shadow-md p-4 overflow-y-auto">
        <h2 className="text-lg font-semibold mb-4" id="all">New (500)</h2>

        {/* Menu Items */}
        <ul className="mb-8 space-y-2">
          {menuItems.map((item, index) => (
            <li key={index} className="text-gray-800 font-medium hover:text-blue-600 cursor-pointer">
              {item}
            </li>
          ))}
        </ul>

        {/* Gender Filter */}
        <div className="mb-6">
          <div className="flex justify-between items-center cursor-pointer" onClick={() => setIsGenderOpen(!isGenderOpen)}>
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

        {/* Price Filter */}
        <div className="mb-6">
          <div className="flex justify-between items-center cursor-pointer" onClick={() => setIsPriceOpen(!isPriceOpen)}>
            <h3 className="font-medium">Shop by Price</h3>
            <span className="text-xl">^</span>
          </div>
          {isPriceOpen && (
            <ul className="mt-2 space-y-2 max-h-32 overflow-y-auto">
              {[
                "Under ₹2,500.00",
                "₹2,501.00 - ₹5,000.00"
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
      <div className="bg-gray-50 min-h-screen">

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
{products.map((product)=>(
  <div key ={product._id}
  className="boeder rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200"
  >
    {product.productName}

    <Link href ={`/product/${product.slug.current}`}>
    {product.image &&(
      <Image
      src={urlFor(product.image).url()}
        alt="image"
        width={200}
        height={200}
        className=" w-full h-48 object-cover rounded-md"
        />
      
    )}
    <h2 className="text-lg font-semibold mt-4">{product.productName}</h2>
    <p className="text-gray-500 mt-2">
    {product.price ? `$${product.price}` : "price not available"}
    </p>

    <button className="bg-gradient-to-r from-blue-400 to-purple-500 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:shadow-lg  
          hover:scale-110 transition-transform duration-300  ease-in-out"
          onClick = {(e)=>handleAddToCart(e, product)}
          >
            Add to Cart

          </button>

    </Link>
    </div>
))}


</div>
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
              <button key={index} className="text-black border-2 border-[#CCCCCC] px-4 py-2 rounded-full font-medium transition duration-300 hover:bg-gray-200">
                {category}
              </button>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
