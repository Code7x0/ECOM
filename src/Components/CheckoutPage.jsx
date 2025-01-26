import { useState } from 'react';
import Footer from './Footer';

export default function CheckoutPage({ cart, setCurrentPage }) {
  const [sameAsShipping, setSameAsShipping] = useState(true);
  const [paymentMethod, setPaymentMethod] = useState('credit-card');

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 0;
  const tax = 0;
  const total = subtotal + shipping + tax;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Payment Successful!');
    setCurrentPage('home');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 pt-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Checkout Form */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h1 className="text-2xl font-bold mb-8">Contact information</h1>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Contact Info */}
            <div className="space-y-4">
              <h2 className="text-lg font-semibold">Contact Info</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email address</label>
                  <input type="email" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Mobile no</label>
                  <input type="tel" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500" />
                </div>
              </div>
            </div>

            {/* Shipping Information */}
            <div className="space-y-4">
              <h2 className="text-lg font-semibold">Shipping Information</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Full Name</label>
                  <input type="text" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Address</label>
                  <input type="text" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Address 2 (Optional)</label>
                  <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Country</label>
                    <select required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500">
                      <option value="">Select</option>
                      <option>United States</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">State</label>
                    <select required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500">
                      <option value="">Select</option>
                      <option>California</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">ZIP Code</label>
                    <input type="text" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500" />
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="space-y-4">
              <h2 className="text-lg font-semibold">Payment Method</h2>
              <div className="grid grid-cols-3 gap-4">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('credit-card')}
                  className={`p-2 rounded-md border ${paymentMethod === 'credit-card' ? 'border-gray-500 bg-blue-50' : 'border-gray-300'}`}
                >
                  Credit Card
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod('paypal')}
                  className={`p-2 rounded-md border ${paymentMethod === 'paypal' ? 'border-gray-500 bg-blue-50' : 'border-gray-300'}`}
                >
                  PayPal
                </button>
              </div>

              {paymentMethod === 'credit-card' && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Name on Card</label>
                    <input type="text" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gary-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Card Number</label>
                    <input type="text" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500" />
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Exp. Month</label>
                      <input type="text" required placeholder="MM" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Exp. Year</label>
                      <input type="text" required placeholder="YY" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">CVV</label>
                      <input type="text" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            <button
              type="submit"
              className="w-full  text-white py-3 px-4 rounded-md  bg-gray-900 hover:bg-gray-800 transition-colors"
            >
              Pay Now ${total}
            </button>
          </form>
        </div>

        {/* Right Column - Order Summary */}
        <div className="bg-white p-6 rounded-lg shadow-sm h-fit lg:sticky lg:top-24">
          <h2 className="text-xl font-bold mb-6">Order Summary</h2>
          <div className="space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-sm text-gray-500">${item.price}</p>
                </div>
                <span className="font-medium">${item.price * item.quantity}</span>
              </div>
            ))}

            <div className="pt-4 border-t">
              <div className="flex justify-between items-center mb-4">
                <input
                  type="text"
                  placeholder="Promo code"
                  className="flex-1 rounded-l-md p-2 border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500"
                />
                <button className=" px-4 py-2 text-white rounded-r-md bg-gray-900 hover:bg-gray-800 transition-colors">
                  Apply
                </button>
              </div>

              <div className="flex justify-between items-center mb-2">
                <span>Subtotal</span>
                <span>${subtotal}</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span>Taxes</span>
                <span>Calculated at checkout</span>
              </div>
              <div className="flex justify-between items-center pt-4 border-t font-bold">
                <span>Total</span>
                <span>${total}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}