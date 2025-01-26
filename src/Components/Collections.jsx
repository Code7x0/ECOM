 
  
 
  export default function LatestCollections({ addToCart }) {
    const products = [
      { id: 1, name: "Kid Tapered Slim Fit Trouser", price: 38, image: "/images/pro1.webp" },
      { id: 2, name: "Men Round Neck Pure Cotton T-shirt", price: 64, image: "/images/pro2.webp" },
      { id: 3, name: "Boy Round Neck Cotton T-shirt", price: 60, image: "/images/pro3.webp" },
      { id: 4, name: "Women Zip-Front Relaxed Fit Jacket", price: 74, image: "/images/pro4.webp" },
      { id: 5, name: "Men Tapered Fit Flat-Front Trousers", price: 58, image: "/images/pro5.webp" },
      { id: 6, name: "Girls Round Neck Cotton Top", price: 56, image: "/images/pro6.webp" },
      { id: 7, name: "Women Zip-Front Relaxed Fit Jacket", price: 68, image: "/images/pro7.webp" },
      { id: 8, name: "Kid Tapered Slim Fit Trouser", price: 40, image: "/images/pro8.webp" },
      { id: 9, name: "Men Printed Plain Cotton Shirt", price: 52, image: "/images/pro9.webp" },
      { id: 10, name: "Women Zip-Front Relaxed Fit Jacket", price: 78, image: "/images/pro10.webp" },
      { id: 11, name: "Men Slim Fit Trouser", price: 48, image: "/images/pro7.webp" },
      { id: 12, name: "Women Printed Jacket", price: 62, image: "/images/pro5.webp" },
    ];
  
    return (
      <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
       
            <h2 className="text-center text-3xl  font-bold mb-8  uppercase tracking-wide">
              LATEST COLLECTIONS.
              
            </h2>
            
    
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-4">
                <div className="mb-2">
                  <h3 className="text-lg font-bold text-gray-900 line-clamp-2">
                    {product.name}
                  </h3>
                </div>
                
                <div className="flex items-center justify-between">
                  <p className="text-xl font-bold text-gray-900">${product.price}</p>
                  <button
                    onClick={() => addToCart(product)}
                    className="bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }