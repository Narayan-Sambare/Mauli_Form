import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="nav-logo">
              <span className="nav-logo-name">🐄 Mauli Farm</span>
              <span className="nav-logo-tagline">Pure Cow-Based Natural Products</span>
            </div>
            <p style={{ marginTop: "16px" }}>
              From our farm to your home — delivering the goodness of nature with pure, traditional, and organic cow-based products from Pune, Maharashtra.
            </p>
            <div className="footer-socials">
              <a href="https://wa.me/919999999999" className="social-btn" title="WhatsApp" target="_blank" rel="noreferrer">💬</a>
              <a href="#" className="social-btn" title="Instagram">📸</a>
              <a href="#" className="social-btn" title="Facebook">👍</a>
              <a href="#" className="social-btn" title="YouTube">▶️</a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Products</h4>
            <ul>
              <li><Link to="/products">A2 Desi Ghee</Link></li>
              <li><Link to="/products">Bilona Ghee</Link></li>
              <li><Link to="/products">Fresh Milk</Link></li>
              <li><Link to="/products">Cow Dung Cakes</Link></li>
              <li><Link to="/products">Havan Cups</Link></li>
              <li><Link to="/products">Organic Manure</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px" }}>📍 Pune, Maharashtra</li>
              <li><a href="tel:+919999999999">📞 +91 99999 99999</a></li>
              <li><a href="mailto:info@maulifarm.in">✉️ info@maulifarm.in</a></li>
              <li><a href="https://wa.me/919999999999" target="_blank" rel="noreferrer">💬 WhatsApp Us</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2025 Mauli Farm. All rights reserved.</span>
          <span>Made with 🌿 in Pune, Maharashtra</span>
          <span>
            <a href="#">Privacy Policy</a> · <a href="#">Terms</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
