"use client";

import React, { useEffect, useState } from 'react';
import { Product } from '../../../types/products';
import { getCartItems, removeFromCart, updateCartQuantity } from '../actions/actions';
import swal from 'sweetalert2';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import { useRouter } from 'next/navigation';

const CartPage = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      const items = await getCartItems();
      setCartItems(items);
    };
    fetchCartItems();
  }, []);

  const handleRemove = (id: string) => {
    swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, remove it!',
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(id);
        setCartItems((prev) => prev.filter((item) => item._id !== id));
        swal.fire('Removed!', 'Your item has been removed.', 'success');
      }
    });
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    updateCartQuantity(id, quantity);
    setCartItems((prev) =>
      prev.map((item) =>
        item._id === id ? { ...item, inventory: quantity } : item
      )
    );
  };

  const handleIncrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product && product.inventory > 0) {
      handleQuantityChange(id, product.inventory + 1);
    }
  };

  const handleDecrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product && product.inventory > 1) {
      handleQuantityChange(id, product.inventory - 1);
    }
  };

  const calculatedTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.inventory, 0);
  };

  const router = useRouter();

  const handledProceed = () => {
    swal.fire({
      title: 'Proceed to Checkout?',
      text: 'Please review your cart items before checkout.',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, proceed!',
    }).then((result) => {
      if (result.isConfirmed) {
        swal.fire('Proceeded!', 'You have successfully proceeded to checkout.', 'success');

        // Redirect to Checkout Page
        router.push('/Checksout');
        setCartItems([]);
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          {cartItems.length === 0 ? (
            <div className="p-6 text-center text-gray-500">Your cart is empty.</div>
          ) : (
            <>
              {cartItems.map((item) => (
                <div key={item._id} className="p-6 border-b last:border-b-0">
                  <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Product Image */}
                    <div className="flex-shrink-0">
                    <Image
                        src={item.image ? urlFor(item.image).url() : "/fallback-image.jpg"}
                        alt={item.productName || "Product Image"}
                        className="w-24 h-24 object-cover rounded-lg"
                        height={96}
                        width={96}
                      />
                    </div>
                    {/* Product Details */}
                    <div className="flex-1 ml-4">
                      <h2 className="text-xl font-semibold">{item.productName}</h2>
                      <p className="text-gray-600">${item.price.toFixed(2)}</p>
                    </div>
                    {/* Quantity Controls */}
                    <div className="flex items-center mt-4 md:mt-0">
                      <button
                        onClick={() => handleDecrement(item._id)}
                        className="bg-gray-200 text-gray-700 px-3 py-1 rounded-l hover:bg-gray-300"
                      >
                        -
                      </button>
                      <span className="bg-gray-100 px-4 py-1">{item.inventory}</span>
                      <button
                        onClick={() => handleIncrement(item._id)}
                        className="bg-gray-200 text-gray-700 px-3 py-1 rounded-r hover:bg-gray-300"
                      >
                        +
                      </button>
                    </div>
                    {/* Remove Button */}
                    <button
                      onClick={() => handleRemove(item._id)}
                      className="mt-4 md:mt-0 ml-0 md:ml-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
              {/* Total and Checkout */}
              <div className="p-6 bg-gray-50">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold">Total</h3>
                  <p className="text-2xl font-bold">${calculatedTotal().toFixed(2)}</p>
                </div>
                <button
                  onClick={handledProceed}
                  className="w-full mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
                >
                  Proceed to Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartPage;