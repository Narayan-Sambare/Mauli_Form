import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar({ cartCount, onCartOpen }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => setMobileOpen(false), [location]);

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <nav className={`navbar ${scrolled || location.pathname !== "/" ? "scrolled" : ""}`}>
        <div className="navbar-inner">
          <Link to="/" className="nav-logo">
            <span className="nav-logo-name">🐄 Mauli Farm</span>
            <span className="nav-logo-tagline">Pure Cow-Based Natural Products</span>
          </Link>

          <div className="nav-links">
            <Link to="/" className={isActive("/") ? "active" : ""}>Home</Link>
            <Link to="/about" className={isActive("/about") ? "active" : ""}>About Us</Link>
            <Link to="/products" className={isActive("/products") ? "active" : ""}>Products</Link>
            <Link to="/gallery" className={isActive("/gallery") ? "active" : ""}>Gallery</Link>
            <Link to="/blog" className={isActive("/blog") ? "active" : ""}>Blog</Link>
            <Link to="/contact" className={isActive("/contact") ? "active" : ""}>Contact</Link>
          </div>

          <div className="nav-cta">
            <button className="nav-cart-btn" onClick={onCartOpen} title="Cart">
              🛒
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </button>
            <Link to="/products" className="btn-primary" style={{ padding: "10px 22px", fontSize: "13px" }}>
              Order Now
            </Link>
            <div className="hamburger" onClick={() => setMobileOpen(!mobileOpen)}>
              <span style={{ width: mobileOpen ? "100%" : "100%" }}></span>
              <span style={{ width: mobileOpen ? "70%" : "75%" }}></span>
              <span style={{ width: "50%" }}></span>
            </div>
          </div>
        </div>
      </nav>

      <div className={`mobile-nav ${mobileOpen ? "open" : ""}`}>
        <Link to="/">🏠 Home</Link>
        <Link to="/about">🌿 About Us</Link>
        <Link to="/products">🛍️ Products</Link>
        <Link to="/gallery">📷 Gallery</Link>
        <Link to="/blog">📖 Blog</Link>
        <Link to="/contact">📞 Contact</Link>
        <div style={{ paddingTop: "8px" }}>
          <Link to="/products" className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>
            Order Now
          </Link>
        </div>
      </div>
    </>
  );
}
