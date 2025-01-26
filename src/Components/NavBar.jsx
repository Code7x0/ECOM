import { useState } from 'react';

export default function NavBar({ setCurrentPage, cartCount, onSearch, searchQuery, setSearchQuery }) {
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
    if (searchQuery.trim()) {
      setCurrentPage('search');
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-white z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex flex-col leading-none">
            <span className="font-bold text-2xl">ECOM</span>
            <span className="text-xs tracking-wide">ECOMMERCE</span>
          </div>

          {/* Search Bar */}
          <form onSubmit={handleSearchSubmit} className="flex-1 max-w-xl mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for products"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none "
              />
              <button
                type="submit"
                className="absolute right-2 top-2 text-gray-500"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </form>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => setCurrentPage("home")}
              className="text-gray-900 hover:text-gray-600 text-sm font-medium transition-colors"
            >
              Get Started
            </button>
            <button
              onClick={() => {
                setSearchQuery("");
                setCurrentPage("search");
              }}
              className="text-gray-900 hover:text-gray-600 text-sm font-medium transition-colors"
            >
              Shop
            </button>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-6">
            {/* Cart Icon */}
            <button
              onClick={() => setCurrentPage("cart")}
              className="relative text-gray-900 hover:text-gray-600 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-gray-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Sign In */}
            <button
              onClick={() => setCurrentPage("signin")}
              className="text-gray-900 hover:text-slate-950 text-sm font-medium transition-colors"
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}