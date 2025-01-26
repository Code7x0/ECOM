import { useState } from "react";
import Footer from "./Footer";

export default function CartPage({
  cart = [],
  updateCart,
  removeFromCart,
  setCurrentPage,
}) {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shippingDiscount = -2.0;
  const shippingHandling = 4.0;
  const tax = 0.0;
  const total = subtotal + shippingDiscount + shippingHandling + tax;

  const freeShippingThreshold = 50;
  const progress = (subtotal / freeShippingThreshold) * 100;
  const amountToFreeShipping = freeShippingThreshold - subtotal;
 

  // Inline SVG components
  const MinusIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );

  const PlusIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );

  const InfoIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  );

  return (
    <>
    <div className="container mx-auto py-8 px-4 max-w-6xl mt-14 pt-16"> {/* Added pt-16 for navbar spacing */}
      <div className="grid lg:grid-cols-[1fr_350px] gap-8">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Cart Header */}
          <div>
            <h1 className="text-2xl font-bold mb-1">Your cart</h1>
            <p className="text-sm text-gray-500">
              {cart.length} {cart.length === 1 ? "item" : "items"} ships at checkout
            </p>
          </div>

          {/* Free Shipping Progress */}
          {cart.length > 0 && (
            <div className="bg-white border rounded-lg p-4">
              <div className="space-y-2">
                <p className="text-sm">You're ${amountToFreeShipping.toFixed(2)} away from FREE SHIPPING!</p>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: `${Math.min(progress, 100)}%` }}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Cart Items */}
          {cart.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-lg text-gray-500">Your cart is empty.</p>
              <button
                className="mt-4 px-4 py-2 border rounded-md hover:bg-gray-50 transition-colors"
                onClick={() => setCurrentPage("home")}
              >
                Keep Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="bg-white rounded-lg shadow-sm border">
                  <div className="flex gap-4 p-4">
                    {/* Product Image */}
                    <div className="bg-gray-100 rounded-lg p-4 w-24 h-24 flex items-center justify-center">
                      <img
                        src='/images/pro3.webp'
                        alt={item.name}
                        className="object-contain w-full h-full"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold">{item.name}</h3>
                          <p className="text-sm text-gray-500">{item.quantity} items</p>
                        </div>
                        <button className="text-gray-500 hover:text-gray-700 relative group">
                          <InfoIcon />
                          <div className="hidden group-hover:block absolute bottom-full left-1/2 -translate-x-1/2 bg-white p-2 rounded shadow-lg border text-xs whitespace-nowrap">
                            Product information
                          </div>
                        </button>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-4 mt-4">
                        <div className="flex items-center border rounded-md">
                          <button
                            className="h-8 w-8 flex items-center justify-center hover:bg-gray-100 disabled:opacity-50"
                            onClick={() => updateCart(item.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                          >
                            <MinusIcon />
                          </button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <button
                            className="h-8 w-8 flex items-center justify-center hover:bg-gray-100"
                            onClick={() => updateCart(item.id, item.quantity + 1)}
                          >
                            <PlusIcon />
                          </button>
                        </div>
                        <button
                          className="text-sm text-gray-600 hover:text-gray-900"
                          onClick={() => removeFromCart(item.id)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="text-right">
                      <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right Column - Summary */}
        <div className="lg:sticky mt-4 lg:top-20 h-fit"> {/* Adjusted sticky position */}
          <div className="bg-gray-100 rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-4">Summary</h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-500">Subtotal ({cart.length} items)</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-green-600">
                <span>Shipping Discount</span>
                <span>${shippingDiscount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Shipping & Handling</span>
                <span>${shippingHandling.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Tax (Calculated at checkout)</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="border-t pt-3 mt-3">
                <div className="flex justify-between font-semibold">
                  <span>Balance</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
              <button
                className="w-full bg-gray-900 hover:bg-gray-800 text-white py-2 px-4 rounded-lg transition-colors mt-4"
                onClick={() => setCurrentPage("checkout")}
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
      
  </>
  );
}