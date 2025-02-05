"use client";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Product } from "../../types/products";
import { allProducts, four } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import { addToCart } from "@/app/actions/actions";
import Swal from "sweetalert2";

export default function BestAir() {
    const [products, setProducts] = useState<Product[]>([]);
    useEffect(()=>{
      async function fetchedProducts(){
        const fetchedProducts : Product[] = await client.fetch(four)
        setProducts(fetchedProducts)
      }
      fetchedProducts();
        
    },[])

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

  // Products Array
 

  const containerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    containerRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    containerRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="bg-gray-50 min-h-screen">

      <h1 className="text-2xl font-bold text-center mb-6">
        BestAirMax
      </h1>
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
  );
}