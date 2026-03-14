import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CartSidebar from "./components/CartSidebar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Gallery from "./pages/Gallery";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import "./index.css";

function ScrollToTop() {
  const { useEffect } = require("react");
  const { useLocation } = require("react-router-dom");
  const location = useLocation();
  useEffect(() => window.scrollTo(0, 0), [location]);
  return null;
}

export default function App() {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === product.id);
      if (existing) return prev.map(i => i.id === product.id ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { ...product, qty: 1 }];
    });
    setCartOpen(true);
  };

  const updateQty = (id, qty) => {
    if (qty <= 0) setCart(prev => prev.filter(i => i.id !== id));
    else setCart(prev => prev.map(i => i.id === id ? { ...i, qty } : i));
  };

  const cartCount = cart.reduce((sum, i) => sum + i.qty, 0);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar cartCount={cartCount} onCartOpen={() => setCartOpen(true)} />
      <CartSidebar isOpen={cartOpen} onClose={() => setCartOpen(false)} cart={cart} onUpdateQty={updateQty} />

      <Routes>
        <Route path="/" element={<Home onAddToCart={addToCart} />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products onAddToCart={addToCart} />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />

      {/* Floating WhatsApp */}
      <a href="https://wa.me/919999999999" className="floating-wa" target="_blank" rel="noreferrer" title="Chat on WhatsApp">
        <div className="wa-pulse" />
        💬
      </a>
    </BrowserRouter>
  );
}
