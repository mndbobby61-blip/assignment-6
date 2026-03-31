import { useState } from "react";
import Navbar from "./components/NavBar";
import Hero from "./components/Banner";
import Stats from "./components/Stats";
import Products from "./components/Products";
import Cart from "./components/Cart";

function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    const exists = cart.find(item => item.id === product.id);

    if (exists) {
      alert("Already added!");
    } else {
      setCart([...cart, product]);
    }
  };

  return (
    <div>
      <Navbar />
      <Hero />
      <Stats />

      <div className="grid md:grid-cols-3 gap-6 p-6">
        <div className="md:col-span-2">
          <Products handleAddToCart={handleAddToCart} />
        </div>

        <Cart cart={cart} />
      </div>
    </div>
  );
}

export default App;