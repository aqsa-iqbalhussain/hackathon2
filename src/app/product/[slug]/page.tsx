"use client"; // Ensures it's a client component

import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { Product } from "../../../../types/products";
import { groq } from "next-sanity";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Swal from "sweetalert2";
import { addToCart } from "@/app/actions/actions";

interface ProductPageProps {
  params: { slug: string }; // ✅ Fixed type (not a Promise)
}

// ✅ Move API fetching to a separate function
async function fetchProduct(slug: string): Promise<Product | null> {
  return client.fetch(
    groq`*[_type == "product" && slug.current == $slug][0]{
      _id,
      productName,
      _type,
      image,
      price,
      description
    }`,
    { slug }
  );
}

const ProductPage = ({ params }: ProductPageProps) => {
  const { slug } = params;
  const [product, setProduct] = useState<Product | null>(null);

  // ✅ Fetch product inside useEffect
  useEffect(() => {
    const loadProduct = async () => {
      const fetchedProduct = await fetchProduct(slug);
      setProduct(fetchedProduct);
    };
    loadProduct();
  }, [slug]);

  // ✅ Handle loading state
  if (!product) {
    return <p className="text-center">Loading product...</p>;
  }

  // ✅ Handle add to cart
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    Swal.fire({
      position: "top-right",
      icon: "success",
      title: `${product.productName} added to cart`,
      showConfirmButton: false,
      timer: 1000,
    });

    addToCart(product);
  };

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="aspect-square">
          {product.image && (
            <Image
              src={urlFor(product.image).url()}
              alt={product.productName}
              width={500}
              height={500}
              className="rounded-lg shadow-md"
            />
          )}
        </div>
        <div className="flex flex-col gap-8">
          <h1 className="text-4xl font-bold">{product.productName}</h1>

          <p className="mb-8 leading-relaxed text-lg text-gray-600">
            {product.description}
          </p>
          <p className="text-4xl text-black">₹{product.price}</p>

          <button
            className="bg-gradient-to-r from-blue-400 to-purple-500 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
