import { useState } from 'react';

const SearchResultsPage = ({ searchQuery, addToCart, removeFromCart, cart }) => {
  // Product data moved here
  const [products] = useState([
    {
      id: 1,
      name: 'Premium Wool Sweater',
      price: 89.99,
      rating: 4,
      description: 'Luxurious merino wool sweater with ribbed collar and cuffs',
      image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf',
      sizes: ['S', 'M', 'L'],
      colors: ['blue', 'gray']
    },
    {
      id: 2,
      name: 'Classic Lumberjack Shirt',
      price: 69.99,
      rating: 5,
      description: 'Heavy-duty flannel shirt with double-stitched seams',
      image: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820',
      sizes: ['M', 'XL'],
      colors: ['red', 'black']
    },
    {
      id: 3,
      name: 'Modern Denim Jacket',
      price: 129.99,
      rating: 4,
      description: 'Slim-fit denim jacket with distressed details',
      image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['blue', 'black']
    }
  ]);

  // Filter products based on search query
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Filter state
  const [priceRange, setPriceRange] = useState('');
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);

  // Filter handlers
  const toggleSize = (size) => {
    setSelectedSizes(prev => 
      prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]
    );
  };

  const toggleColor = (color) => {
    setSelectedColors(prev => 
      prev.includes(color) ? prev.filter(c => c !== color) : [...prev, color]
    );
  };

  // Star rating renderer
  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${i < rating ? 'fill-current' : 'fill-none'} stroke-slate-950`}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
        />
      </svg>
    ));
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Categories */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-slate-950">CATEGORIES</h3>
              <ul className="space-y-2">
                {['Clothing', 'Outerwear', 'Shirts', 'Sweaters'].map((category) => (
                  <li key={category}>
                    <button className="text-sm text-slate-950 hover:text-slate-700">
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Price Filter */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-slate-950">PRICE</h3>
              <div className="space-y-2">
                {['$50 - $100', '$100 - $150', '$150 - $200'].map((range) => (
                  <button
                    key={range}
                    onClick={() => setPriceRange(range)}
                    className={`block w-full text-left px-4 py-2 text-sm ${
                      priceRange === range ? 'bg-slate-700' : 'hover:bg-slate-500'
                    }`}
                  >
                    {range}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Filter */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-slate-950">SIZE</h3>
              <div className="flex flex-wrap gap-2">
                {['S', 'M', 'L', 'XL'].map((size) => (
                  <button
                    key={size}
                    onClick={() => toggleSize(size)}
                    className={`px-3 py-1 text-sm border ${
                      selectedSizes.includes(size)
                        ? 'border-slate-950 bg-slate-950 text-white'
                        : 'border-slate-200 hover:border-slate-950'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Filter */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-slate-950">COLOR</h3>
              <div className="flex flex-wrap gap-2">
                {['#3b82f6', '#6b7280', '#10b981', '#ef4444', '#eab308'].map((color) => (
                  <button
                    key={color}
                    onClick={() => toggleColor(color)}
                    className={`w-8 h-8 rounded-full border ${
                      selectedColors.includes(color)
                        ? 'border-slate-950 ring-2 ring-slate-950'
                        : 'border-slate-200 hover:border-slate-950'
                    }`}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredProducts.map((product) => {
                const isInCart = cart.some(item => item.id === product.id);
                
                return (
                  <div key={product.id} className="group relative">
                    <div className="aspect-square bg-slate-100 rounded-lg overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:opacity-75 transition-opacity"
                      />
                    </div>
                    
                    <div className="mt-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg font-semibold text-slate-950">{product.name}</h3>
                          <div className="flex items-center mt-1">
                            {renderStars(product.rating)}
                            <span className="ml-2 text-sm text-slate-600">
                              ({product.rating}.0)
                            </span>
                          </div>
                        </div>
                        <p className="text-lg font-semibold text-slate-950">${product.price}</p>
                      </div>
                      
                      <p className="mt-2 text-sm text-slate-600">{product.description}</p>
                      
                      <button
                        onClick={() => isInCart ? removeFromCart(product.id) : addToCart(product)}
                        className={`mt-4 w-full py-2 text-sm font-medium transition-colors ${
                          isInCart 
                            ? 'bg-slate-950 text-white hover:bg-slate-900'
                            : 'bg-white text-slate-950 border-2 border-slate-950 hover:bg-slate-50'
                        }`}
                      >
                        {isInCart ? 'Remove from Cart' : 'Add to Cart'}
                      </button>
                    </div>
                  </div>
                )}
              )}
            </div>

            {/* Promotional Section */}
            <div className="mt-12 space-y-6">
              <div className="bg-slate-50 p-6 rounded-lg">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold text-slate-950">Free Shipping</p>
                    <p className="text-sm text-slate-600">On orders over $100</p>
                  </div>
                  <span className="text-2xl font-bold text-slate-950">$100+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResultsPage;