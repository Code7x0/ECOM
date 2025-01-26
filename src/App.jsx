import { useState } from "react";
import NavBar from "./Components/NavBar";
import LatestCollections from "./Components/Collections";
import ImageSlider from "./Components/swiper";
import CartPage from "./Components/CartPage";
import CheckoutPage from "./Components/CheckoutPage";
import Footer from "./Components/Footer";
import SearchResultsPage from "./Components/SearchResult";
import PoloTShirtsSection from "./Components/ParaGraph";
import SignInPage from "./Components/SignIn";

function App() {
  const [cart, setCart] = useState([]);
  const [currentPage, setCurrentPage] = useState("home");
  const [searchQuery, setSearchQuery] = useState("");

  // Cart functions
  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    setCart(existingProduct ?
      cart.map(item => item.id === product.id ? 
        {...item, quantity: item.quantity + 1} : item) :
      [...cart, {...product, quantity: 1}]
    );
  };

  const updateCart = (id, quantity) => {
    setCart(cart.map(item => 
      item.id === id ? {...item, quantity: Math.max(quantity, 1)} : item
    ));
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  // Handle search from navbar
  const handleSearch = (query) => {
    setSearchQuery(query);
    if(query.trim()) {
      setCurrentPage('search');
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar 
        setCurrentPage={setCurrentPage} 
        cartCount={cart.length}
        onSearch={handleSearch}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      
      <main className="flex-1">
        {currentPage === "home" ? (
          <>
            <ImageSlider />
            <LatestCollections addToCart={addToCart} />
            <PoloTShirtsSection />
          </>
        ) : currentPage === "cart" ? (
          <CartPage
            cart={cart}
            updateCart={updateCart}
            removeFromCart={removeFromCart}
            setCurrentPage={setCurrentPage}
          />
        ) : currentPage === "checkout" ? (
          <CheckoutPage
            cart={cart}
            setCurrentPage={setCurrentPage}
          />
        ) : currentPage === "search" ? (
          <SearchResultsPage
            searchQuery={searchQuery}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            cart={cart}
          />
        ) : currentPage === "signin" ? (
          <SignInPage />
        ) : null}
      </main>

      <Footer className="mt-auto" />
    </div>
  );
}

export default App;